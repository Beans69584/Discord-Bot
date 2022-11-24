const { SlashCommandBuilder, EmbedBuilder, Embed } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("guess"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle(`Help`)
      .setDescription(`Once again, if you need a description, use your brain`)
      .setColor('FF0000')
      .addFields([
        {
          name: `/ping`,
          value: `Returns API and client latency`,
          inline: true,
        },
        {
          name: `/christmas`,
          value: `Find out. I dare you.`,
          inline: true,
        },
      ]);
    await interaction.reply({
      embeds: [embed],
    });
  },
};