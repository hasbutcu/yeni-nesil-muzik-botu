const { EmbedBuilder } = require('discord.js'); //discord.gg/vsc ❤️ oxyinc, can066
const { Translate } = require("../../process_tools");

module.exports = (queue, track) => {

    (async () => {
        const embed = new EmbedBuilder()
        .setAuthor({ name: await Translate(`Skipping <**${track.title}**> due to an issue! <❌>`)})
        .setColor('#EE4B2B');

        queue.metadata.channel.send({ embeds: [embed], iconURL: track.thumbnail });
    })()
}
