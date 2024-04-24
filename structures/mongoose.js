let { connect, set, Promise, connection } = require('mongoose');

module.exports = {
    init: () => {
        connect('mongodb+srv://venom_:venomkz_asmc@kanii.0xzti7v.mongodb.net/');
        Promise = global.Promise;

        connection.on('connected', () => {
            console.log('Connected to MongoDB Successfully!');
        });

        connection.on('err', err => {
            console.error(`Error Occured From MongoDB: \n${err.message}`);
        });

        connection.on('disconnected', () => {
            console.warn('Connection Disconnected!');
        });
    }
};