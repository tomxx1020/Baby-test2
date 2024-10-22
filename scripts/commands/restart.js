module.exports.config = {
	name: "restart",
	version: "7.0.0",
	hasPermssion: 0,
	credits: "ryuko",
	usePrefix: true,
	description: "restart bot system",
	commandCategory: "admin",
	usages: "prefix restart",
	cooldowns: 0,
	dependencies: {
		"process": ""
	}
};
module.exports.run = async function({ api, event }) {
  const process = require("process");
  const { threadID, messageID } = event;
  api.sendMessage(`𝙍𝙚𝙨𝙩𝙖𝙧𝙩𝙞𝙣𝙜 ${global.config.BOTNAME}, 𝗪𝗮𝗶𝘁 𝗞𝗼𝗿𝗼 <😒`, threadID, ()=> process.exit(1));
}
