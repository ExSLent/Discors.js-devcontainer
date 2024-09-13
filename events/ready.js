const Discord = require('discord.js');
const loadSlashCommands = require('../loader/loadSlashCommands');

module.exports = async (bot) => {
  console.log(bot.user.tag + ' is connected');
  loadSlashCommands();
};
