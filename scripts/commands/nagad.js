const axios = require('axios');

module.exports.config = {
  name: "nagad",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Dipto",
  usePrefix: true,
  description: "Get detailed information of a Nagad account number",
  commandCategory: "info",
  usages: "[Nagad_Number]",
  cooldowns: 5,
  dependencies: {
    "axios": "^0.21.4"
  }
};

module.exports.run = async ({ api, event, args }) => {
  const nagadNumber = args[0];
  if (!nagadNumber) {
    api.sendMessage("Please provide a Nagad number to check.", event.threadID, event.messageID);
    return;
  }
  const waitMessage = await api.sendMessage("𝗪𝗮𝗶𝘁 𝗞𝗼𝗿𝗼 𝗕𝗮𝗯𝘆 <😘", event.threadID);

  try {
    const response = await axios.get(`https://api.takaincomebd.xyz/key:-tech/nagad.php?input=${nagadNumber}`);
    const data = response.data;

    if (data.message) {
      const accountDetails = `User Name : ${data.info.name}\nUser ID: ${data.info.userId}\nStatus: ${data.info.status}\nUser Type: ${data.info.userType}\nVerification Status: ${data.info.verificationStatus}\nAuth TokenInfo:  ${data.info.authTokenInfo}\nRbBase:  ${data.info.rbBase}\nExecution Status : ${data.info.executionStatus}\nScript Owner: ${data.info['SCRIPT OWNER']}`;
      api.sendMessage(accountDetails, event.threadID, event.messageID);
    setTimeout(() => {
      api.unsendMessage(waitMessage.messageID);
    }, 5000);
    } else {
      api.sendMessage("Unable to send information for the provided Nagad number.", event.threadID, event.messageID);
    }
  } catch (error) {
    api.sendMessage("An error occurred while retrieving information for the Nagad number. Please try again later.", event.threadID, event.messageID);
  }
};