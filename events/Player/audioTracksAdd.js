const { EmbedBuilder } = require('discord.js'); //discord.gg/vsc ❤️ oxyinc, can066
const { Translate } = require('../../process_tools');

module.exports = (queue) => {
    if (!client.config.app.extraMessages) return;
    
    (async () => {
        const embed = new EmbedBuilder()
        .setAuthor({ name: await Translate(`All the songs in playlist added into the queue <✅>`)})
        .setColor('#2f3136');

        queue.metadata.channel.send({ embeds: [embed] });
    })()
}
