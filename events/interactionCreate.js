const Discord = require('discord.js');
const path = require('path');

module.exports = async (bot, interaction) => {
  let command = require(path.join(
    __dirname,
    `../slashCommands/${interaction.commandName}`
  ));

  await command.execute(interaction);
};
