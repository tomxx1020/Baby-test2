module.exports.config = {
  name: "say2",
  version: "1.0.0",
  permission: 0,
  credits: "update by dipto",
  description: "text to voice speech messages",
  usePrefix: true,
  commandCategory: "with prefix",
  usages: `text to speech messages`,
  cooldowns: 5,
  dependencies: {
    "path": "",
    "fs-extra": ""
  }
};


module.exports.run = async function({
    api, event, args }) {
    try {
        const {
            createReadStream
            , unlinkSync
        } = global.nodemodule["fs-extra"];
        const {
            resolve
        } = global.nodemodule["path"];
        var content = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
        var languageToSay = (["bn"].some(item => content.indexOf(item) == 0)) ? content.slice(0, content.indexOf(" ")) : global.config.language;
        var msg = (languageToSay != global.config.language) ? content.slice(3, content.length) : content;
        const path = resolve(__dirname, 'cache', `${event.threadID}_${event.senderID}.mp3`);
        await global.utils.downloadFile(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(msg)}&tl=bn&client=tw-ob`, path);
        return api.sendMessage({
            attachment: createReadStream(path)
        }, event.threadID, () => unlinkSync(path), event.messageID);
    } catch (e) {
        return console.log(e)
    };
}