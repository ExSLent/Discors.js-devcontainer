const fs = require('fs');
const path = require('path');

module.exports = async (bot) => {
  const eventsPath = path.join(__dirname, '../events/');

  const eventsFiles = fs
    .readdirSync(eventsPath)
    .filter((f) => f.endsWith('.js'));

  for (const file of eventsFiles) {
    let event = require(path.join(__dirname, `../events/${file}`));
    bot.on(file.split('.js').join(''), event.bind(null, bot));
  }
};
