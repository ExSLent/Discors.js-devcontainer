const { error } = require('console');
const fs = require('fs');
const path = require('path');

module.exports = async (bot) => {
  const commandsPath = path.join(__dirname, '../commands/');

  const commandsFiles = fs
    .readdirSync(commandsPath)
    .filter((f) => f.endsWith('.js'));

  for (const file of commandsFiles) {
    const command = require(path.join(commandsPath, file));

    if (!command.name) {
      throw new TypeError('Command require a name');
    }
    if (typeof command.name !== 'string') {
      throw new TypeError('Command name must be a string');
    }

    try {
      bot.commands.set(command.name, command);
      console.log(`Command ${command.name} has been loaded.`);
    } catch (error) {
      console.error(`Failed to load command ${command.name}`, error);
    }
  }
};
