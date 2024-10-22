const axios = require('axios');

module.exports.config = {
  name: 'text2',
  version: '1.0',
  hasPermssion: 0,
  credit: 'Dipto',
  usePrefix: true,
  commandCategory: 'converter',
  usages: '[reply voice message]',
  cooldown: 5,
};
module.exports.run = async function ({convertVoiceToText, event, api}) {
  const voiceAttachment = event.messageReply.attachments[0].url;
  if (!voiceAttachment){
      api.sendMessage('Please reply a voice message', event.threadID, event.messageID);
  }
   if (voiceAttachment.type === "audio") {
  convertVoiceToText(voiceAttachment,api, event);
   return;
   }
   { api.setMessageReaction("😷", event.messageID, (err) => {}, true);
   }
        try {
          const response = await axios.get(`https://hazeyy-apis-combine.kyrinwu.repl.co/api/try/voice2text?url=${encodeURIComponent(voiceAttachment)}`);
   const text = response.data.transcription;
          api.sendMessage("Here's your text convert from voice <🐤\n" +text, event.threadID, event.messageID);
        } catch (error) {
          console.log('Error converting voice to text:', error);
          api.sendMessage('Sorry, I could not convert the voice message to text.', event.threadId, event.messageID);
        }
  };