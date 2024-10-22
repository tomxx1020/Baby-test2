const axios = require("axios");

module.exports.config = {
	name: "sim",
  version: "1.0.0",
  permission: 0,
  credits: "Nayan",
  description: "Avt pic",
  usePrefix: true, 
  commandCategory: "user", 
  usages: "",
  cooldowns: 5,
  dependencies: {
	}
};

module.exports.run = async ({ api, event, args }) => {
	try {
		let message = args.join(" ");
		if (!message) {
			return api.sendMessage(`Please put Message`, event.threadID, event.messageID);
		}

		const response = await axios.get(`https://api.heckerman06.repl.co/api/other/simsimi?message=${message}&lang=ph`);
		const respond = response.data.message;
		api.sendMessage(respond, event.threadID, event.messageID);
	} catch (error) {
		console.error("An error occurred:", error);
		api.sendMessage("Oops! Something went wrong.", event.threadID, event.messageID);
	}
};