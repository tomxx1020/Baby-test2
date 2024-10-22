const axios = require('axios');
const fs = require('fs');

module.exports.config = {
  name: "img",
  version: "1.0.0",
  permission: 0,
  credits: "Dipto",
  usePrefix: true,
  description: "Generate an image",
  commandCategory: "media",
  usages: "[prompt] . [model]",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs": ""
  }
};

module.exports.run = async ({ api, event, args }) => {
  const text = args.join(" ");
const prompt = text.substr(0, text.indexOf(' | '));
   { api.setMessageReaction("💦", event.messageID, (err) => {}, true);
    }
      const model = text.split(" | ").pop();
  if (!prompt || !model) {
    api.sendMessage("Please provide a prompt and a model.", event.threadID);
    return;
  }
   const waitMessage = await api.sendMessage("𝗪𝗮𝗶𝘁 𝗞𝗼𝗿𝗼 𝗕𝗮𝗯𝘆 <😘", event.threadID);
try {
  const encodedPrompt = encodeURIComponent(prompt);
  const apiUrl = `https://arjhil-prodia-api.arjhilbard.repl.co/sdxl/generate?prompt=${encodedPrompt}&model=${model}`;
   const response = await axios.get(apiUrl, { responseType: 'stream' })
  
    setTimeout(() => {
      api.unsendMessage(waitMessage.messageID);
    }, 6000);
  
      api.sendMessage({  body: '𝗔𝗶 𝗻𝗮𝘄 𝗯𝗮𝗯𝘆, 𝗧𝘂𝗺𝗮𝗿 𝗣𝗶𝗰 <😘', attachment: response.data  }, event.threadID, event.messageID)
    } catch(error){
      api.sendMessage(`An error ${error}`, event.threadID);
    };
};