const { EmbedBuilder } = require('discord.js'); //discord.gg/vsc ❤️ oxyinc, can066
const { Translate } = require('../../process_tools');

module.exports = (queue) => {

    (async () => {
        const embed = new EmbedBuilder()
        .setAuthor({ name: await Translate('No more songs in the queue!  <❌>')})
        .setColor('#2f3136');

        queue.metadata.channel.send({ embeds: [embed] });
    })()
}
