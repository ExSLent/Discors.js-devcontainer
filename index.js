// Import Discord.JS library
const Discord = require('discord.js');
const Events = require('discord.js');
// Create a bot instance
const intents = new Discord.IntentsBitField(53608447);
const bot = new Discord.Client({ intents: intents });
// Import data fom config file
const config = require('./config');
// Import event loader
const loadEvents = require('./loader/loadEvents.js');

// Connect the BOT
bot.login(config.token);

// Load events + Load SlashCommands
try {
  loadEvents(bot);
} catch (error) {
  console.error('Error while loading event : ', error);
}
