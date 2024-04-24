const Command = require('../../structures/Command');

class ping extends Command {
    constructor() {
        super();
        this.name = 'ping';
        this.description = 'Ping command to check bot latency';
        this.category = 'Utility';
    }

    async run(message, args) {
        const startTime = Date.now();
        const reply = await message.reply('Pinging...');
        const endTime = Date.now();
        const ping = endTime - startTime;

        reply.edit(`Pong! Latency is ${ping}ms.`);
    }
}

module.exports = ping;
