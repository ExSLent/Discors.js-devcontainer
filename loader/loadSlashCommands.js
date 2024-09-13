const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('../config.json');

const fs = require('fs');
const path = require('path');

module.exports = async (bot) => {
  //Alexis
  let commands = [];

  const slashCommandsPath = path.join(__dirname, '../slashCommands/');
  const slashCommandsFiles = fs
    .readdirSync(slashCommandsPath)
    .filter((f) => f.endsWith('.js'));

  for (file of slashCommandsFiles) {
    const command = require(path.join(__dirname, `../slashCommands/${file}`));

    commands.push(command.data.toJSON());
  }
  //////
  const rest = new REST().setToken(token);
  (async () => {
    try {
      console.log(
        `Started refreshing ${commands.length} application (/) commands.`
      );

      const data = await rest.put(
        Routes.applicationGuildCommands(clientId, guildId),
        { body: commands }
      );

      console.log(
        `Successfully reloaded ${data.length} application (/) commands.`
      );
    } catch (error) {
      console.error(error);
    }
  })();
};
