module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
  usePrefix: true,
	credits: "HTHB",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = [`100044327656712`,`100044327656712`];
	if (!permission.includes(event.senderID)) return api.sendMessage("You don't have permission to use this command.", event.threadID, event.messageID);
  api.sendMessage(`𝗔𝗺𝗶 𝗮𝗸𝗵𝗼𝗻 𝗼𝗳𝗳𝗹𝗶𝗻𝗲 𝗮 𝗴𝗲𝗹𝗮𝗺 <🥺 𝗠𝗶𝘀𝘀 𝘆𝗼𝘂 𝗮𝗹𝗹 <🥺`,event.threadID, () =>process.exit(0))
      }