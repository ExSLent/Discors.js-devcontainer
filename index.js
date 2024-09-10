const Discord = require('Discord.js');
const bot = new Discord.Client({intents: 53608447});
const config = require('./config');

bot.login(config.token)