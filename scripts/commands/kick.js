module.exports.config = {
	name: "kick",
	version: "1.0.0", 
	hasPermssion: 2,
	credits: "Dipto",
  usePrefix: true,
	description: "Remove the person you need to remove from the group by tagging",
	commandCategory: "admin", 
	usages: "[tag]", 
	cooldowns: 0,
};

module.exports.run = function({ api, event }) {
	var mention = Object.keys(event.mentions);
	return api.getThreadInfo(event.threadID, (err, info) => {
		if (err) return api.sendMessage("An error has occurred!",event.threadID);
		if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('𝗔𝗱𝗺𝗶𝗻 𝗗𝗮𝘄 𝗔𝗴𝗲 <😒', event.threadID, event.messageID);
		if(!mention[0]) return api.sendMessage("𝗝𝗮𝗿𝗲 𝗞𝗶𝗰𝗸 𝗱𝗶𝗯𝗮 𝘁𝗮𝗿𝗲 𝗺𝗲𝗻𝘁𝗶𝗼𝗻 𝗱𝗮𝘄 < 😒",event.threadID);
		if (info.adminIDs.some(item => item.id == event.senderID)) {
			for (let o in mention) {
				setTimeout(() => {
					api.removeUserFromGroup(mention[o],event.threadID) 
				},3000)
			}
		}
	})
};