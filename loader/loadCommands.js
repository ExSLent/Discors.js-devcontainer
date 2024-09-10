const fs = require('fs');

module.exports = async (bot) => {
  fs.readdirSync('./commands')
    .filter((f) => f.endsWith('.js'))
    .then(async (file) => {
      let command = require('../commands/${file}.js');

      if (!command.name || typeof command.name !== 'string') {
        throw new TypeError(`The command ${file} has no name set`);
      }

      bot.command.set(command.name, command);
      console.log(`The command ${file} has been loaded`);
    });
};
