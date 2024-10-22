const axios = require('axios');

module.exports.config = {
  name: "temp",
  version: "1.0.0",
  hasPermission: 0,
  credits: "RiuDev",
  usePrefix: true,
  description: "Generate temporary email or fetch inbox messages.",
  commandCategory: "Utility",
  cooldowns: 2,
};

const TEMP_MAIL_URL = 'https://tempmail-api.codersensui.repl.co/api/gen';

module.exports.run = async ({ api, event, args }) => {
  try {
    if (args[0] === 'inbox') {
      if (!args[1]) {
        return api.sendMessage("❌ Please provide an email address for the inbox.", event.threadID);
      }

      const emailAddress = args[1];
      const inboxResponse = await axios.get(`https://tempmail-api.codersensui.repl.co/api/getmessage/${emailAddress}`);
      const messages = inboxResponse.data.messages;

      if (!messages || messages.length === 0) {
        return api.sendMessage(`No messages found for ${emailAddress}.`, event.threadID);
      }

      let messageText = '📬 𝐈𝐍𝐁𝐎𝐗 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 📬\n\n';
      for (const message of messages) {
        messageText += `📩 𝙎𝙚𝙣𝙙𝙚𝙧: ${message.sender}\n`;
        messageText += `📌𝙎𝙪𝙗𝙟𝙚𝙘𝙩: ${message.subject || '👉 NO 𝙎𝙪𝙗𝙟𝙚𝙘𝙩'}\n`;
        messageText += `📩 𝙈𝙚𝙨𝙨𝙖𝙜𝙚: ${message.message}`;
      }

      api.sendMessage(messageText, event.threadID);
    } else {
      const tempMailResponse = await axios.get(TEMP_MAIL_URL);
      const tempMailData = tempMailResponse.data;

      if (!tempMailData.email) {
        return api.sendMessage("❌ Failed to generate temporary email.", event.threadID);
      }

      api.sendMessage(`📩𝙃𝙚𝙧𝙚'𝙨 𝙮𝙤𝙪𝙧 𝙜𝙚𝙣𝙚𝙧𝙖𝙩𝙚𝙙 𝙩𝙚𝙢𝙥𝙤𝙧𝙖𝙧𝙮\n\n𝗘𝙢𝙖𝙞𝙡: ${tempMailData.email}`, event.threadID);
    }
  } catch (error) {
    console.error('Error:', error);
    api.sendMessage("No messages found in the current email", event.threadID);
  }
};