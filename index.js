// Import Discord.JS library
const Discord = require('discord.js');
// Create a bot instance
const intents = new Discord.IntentsBitField(53608447);
const bot = new Discord.Client({ intents: intents });
// Import data fom config file
const config = require('./config');
// Import command loader
const loadCommands = require('./loader/loadCommands.js');

// Connect the BOT
bot.login(config.token);

// Create commands collection
bot.commands = new Discord.Collection();
// Load commands
try {
  loadCommands(bot);
} catch (error) {
  console.error('Error while loading commands : ', error);
}

// Log when the BOT is online & reday
bot.on('ready', async (stream) => {
  console.log(bot.user.tag + ' is online');
});
