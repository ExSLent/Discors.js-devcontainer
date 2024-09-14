// Import Discord.JS library
const Discord = require('discord.js');
// Create a bot instance
const intents = new Discord.IntentsBitField(53608447);
const bot = new Discord.Client({ intents: intents });
// Import data fom config file
const config = require('./config');
// Import event loader
const loadEvents = require('./loader/loadEvents.js');
// Import sladhCommands loader
const loadSlashCommands = require('../loader/loadSlashCommands');

// Connect the BOT
bot.login(config.token);

// Load SlashCommands
try {
  loadSlashCommands(bot);
} catch (error) {
  console.error('Error while loading slash commands : ', error);
}

// Load events
try {
  loadEvents(bot);
} catch (error) {
  console.error('Error while loading event : ', error);
}
