const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("christmas")
    .setDescription("christmas stuff"),
  async execute(interaction, client) {
    const button = new ButtonBuilder()
        .setCustomId("christmas")
        .setLabel("Surprise")
        .setStyle(ButtonStyle.Danger);

    await interaction.reply({
        components: [new ActionRowBuilder().addComponents(button)],
    });
  },
};
