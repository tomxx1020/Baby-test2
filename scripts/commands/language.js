module.exports.config = {
	name: "language",
	version: "1.0.0",
	permission: 2,
	usePrefix: true,
	credits: "Nayan",
	description: "change the bot language",
	commandCategory: "admin",
	usages: "[vi] [en] [bn]",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args, getText }) => {
  let operator = global.config.OPERATOR;
            if (!operator.includes(event.senderID)) return api.sendMessage(`only bot operators can use this command.`, event.threadID, event.messageID);
    const { threadID, messageID } = event;

    switch (args[0]) {
        case "vietnames":
        case "vi":
            {
                return api.sendMessage(`ngôn ngữ đã được chuyển sang tiếng việt`, threadID, () => global.config.language = "vi"); 
            }
            break;
        
        case "english":
        case "en":
            {
                return api.sendMessage(`language has been converted to english`, threadID, () => global.config.language = "en"); 
            }
            break;
        case "bangla":
        case "bn":
            {
                return api.sendMessage(`language has been converted to bangla`, threadID, () => global.config.language = "bn"); 
            }
            break;
    
        default:
            {
                return api.sendMessage("syntax error, use : language vi/en", threadID, messageID);
            }   
            break; 
            
    }	
}