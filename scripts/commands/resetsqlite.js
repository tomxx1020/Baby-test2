module.exports.config = {
	name: "cleardata",
	version: "7.0.0",
	permission: 3,
	credits: "ryuko",
  usePrefix: true,
	description: "reset database",
	commandCategory: "operator",
	usages: "[shell]",
	cooldowns: 0,
	dependencies: {
		"child_process": "",
    "process": ""
	}
};
module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models, getText }) {  
const { exec } = require("child_process");
const process = require("process");
const { threadID, messageID } = event;
let text = args.join(" ")
exec(`rm -rf ../../ryuko/botdata/maindata.sqlite`, (error, stdout, stderr) => {
    if (error) {
        api.sendMessage(`error : \n${error.message}`, event.threadID, event.messageID);
        return;
    }
    if (stderr) {
        api.sendMessage(`stderr : ${stderr}`, event.threadID, event.messageID);
        return;
    }
    return api.sendMessage(`reset database successfully, restarting please be patient.`, threadID, (e, info) => {
      setTimeout(() => {
        process.exit(1)
      }, 1000)
  });
});
}
