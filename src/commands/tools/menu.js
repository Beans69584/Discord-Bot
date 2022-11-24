/*
Doesn't currently work because Discord API is annoying and tries to kill itself
*/
const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  SelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("menu")
    .setDescription("returns a select menu"),
  async execute(interaction, client) {
    const menu = new SelectMenuBuilder()
      .setCustomId(`sub-menu`)
      .setMinValues(1)
      .setMaxValues(1)
      .setOptions(
        new SelectMenuOptionBuilder({
          label: `YouTube`,
          value: `https://youtube.com/@beans2177`,
        }),
        new SelectMenuOptionBuilder({
          label: `Twitch`,
          value: `https://twitch.tv/beans69584`,
        })
      );

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
    });
  },
};
