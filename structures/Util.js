const path = require('path');
const glob = require('glob-promise'); // Import glob-promise

// Assuming you have Command and Event classes defined somewhere
const Command = require('./Command.js');
const Event = require('./Event.js');

class Util {
    constructor(bot) {
        this.bot = bot;
    }

    get directory() {
        return `${path.dirname(require.main.filename)}${path.sep}`;
    }

    async loadCommands(commandsDirectory) {
        try {
            const commands = await glob(`${this.directory}${commandsDirectory}/**/*.js`);
            for (const commandFile of commands) {
                delete require.cache[require.resolve(commandFile)]; // Corrected require.cache deletion
                const { name } = path.parse(commandFile);
                const File = require(commandFile);
                if (!this.isClass(File)) throw new TypeError(`Command ${name} doesn't export a class.`);
                const command = new File(this.bot, name.toLowerCase());
                if (!(command instanceof Command)) throw new TypeError(`Command ${name} doesn't belong in Commands.`);
                this.bot.commands.set(command.name, command);
            }
        } catch (error) {
            console.error("Error loading commands:", error);
        }
    }

    async loadEvents(eventsDirectory) {
        try {
            const events = await glob(`${this.directory}${eventsDirectory}/**/*.js`);
            for (const eventFile of events) {
                delete require.cache[require.resolve(eventFile)]; // Corrected require.cache deletion
                const { name } = path.parse(eventFile);
                const File = require(eventFile);
                if (!this.isClass(File)) throw new TypeError(`Event ${name} doesn't export a class!`);
                const event = new File(this.bot, name.toLowerCase());
                if (!(event instanceof Event)) throw new TypeError(`Event ${name} doesn't belong in Events`);
                this.bot.events.set(event.name, event);
                event.emitter[event.type](name, (...args) => event.run(...args));
            }
        } catch (error) {
            console.error("Error loading events:", error);
        }
    }

    isClass(input) {
        return typeof input === 'function' &&
            typeof input.prototype === 'object' &&
            input.toString().substring(0, 5) === 'class';
    }
}

module.exports = Util;
