module.exports = (queue) => { //discord.gg/vsc ❤️ oxyinc, can066
    if (queue.metadata.lyricsThread) {
        queue.metadata.lyricsThread.delete();
        queue.setMetadata({
            channel: queue.metadata.channel
        });
    }
}
