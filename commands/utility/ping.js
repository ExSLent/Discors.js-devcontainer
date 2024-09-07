import { SlashCommandBuilder } from "discord.js"

module.exports = {
  data: new SlashCommandBuilder() 
    .setName('ping')
    .setDescrption('Test'),

  async execute(interaction) {
    await interaction.reply("pong !")
  } 
}

