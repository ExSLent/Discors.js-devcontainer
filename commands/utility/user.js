const { SlashCommandBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder() 
    .setName('request')
    .setDescription('Request a new game server'),

  async execute(interaction) {
    const gameServer = new StringSelectMenuBuilder()
      .setCustomId('GameServer')
      .setPlaceholder('Choose the game server you want')
      .addOptions(
        new StringSelectMenuOptionBuilder()
          .setLabel('Minecraft')
          .setDescription('A Minecraft Vanilla Server')
          .setValue('mc'),
        new StringSelectMenuOptionBuilder()
          .setLabel('CS:GO')
          .setDescription('A CS:GO Server')
          .setValue('csgo'),
        new StringSelectMenuOptionBuilder()
          .setLabel('ARK')
          .setDescription('An ARK Server')
          .setValue('ark'),
      )

    const row = new ActionRowBuilder()
		  .addComponents(gameServer);

		await interaction.reply({
			content: 'Choose the game server you want',
			components: [row],
		});

    await interaction.reply({
      content: 'You have choose a ' + gameServer.value + ' server'
    })
  }
}