const { Client, Collection } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const client = new Client({ intents: 515 });

client.commands = new Collection;

['CommandUtil', 'EventUtil'].forEach(handler => {
    require(`./utils/handlers/${handler}`)(client)
});

process.on('exit', code => { console.log(`Le proccesus cest arreter avec le code: ${code} !`); });
process.on('uncaughtException', (err, origin) => { console.log(`Uncaught_exception: ${err}`, `orgin: ${origin}`); });
process.on('uncaughtException', (reason, promise) => { console.log(`Uncaught_rejection: ${reason}`, promise) });
process.on('warning', (...args) => console.log(...args));

mongoose.connect(process.env.DATABASE_URI, {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}).then(() =>console.log('Le client est connecté à la BDD !'))
.catch(err => {console.log(err);})

client.login(process.env.DISCORD_TOKEN);