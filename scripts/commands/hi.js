module.exports.config = {
  name: "hi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
  description: "hi send sticker",
  usePrefix: true,
  commandCategory: "QTV BOX",
  usages: "[text]",
  cooldowns: 5
};

module.exports.handleEvent = async ({ event, api, Users }) => {
  let msg = [ 
    "hello",
    "hi",
    "hello po",
    "hi po",
    "hiii",
    "helloo",
    "loe",
    "low",
    "lo",
    "hey",
    "heyy",
    "loe po",
    "low po",
    "hai",
    "kew aso",
    "Kew",
    "hI",
    "híí",
    "hì",
    "hìì",
    "whatsup",
    "helo",
    "hê nhô",
    "yo",
    "wazzup",
    "wassup",
    "hey",
    "hlw",
    "hola"
  ];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["hi"] == "undefined", thread["hi"] == false) return
  else {
  if (msg.includes(event.body)){
    let data = [
      "184002922217363", "184023658881956", "184003212217334", "184002655550723", "184003438883978", "2379545595403511", "1926234657415528", "4046655705381617", "4046877352026119", "4046884992025355", "4070816262965561"
    ];
    let sticker = data[Math.floor(Math.random() * data.length)];
let juswa = ["have you eaten?", "𝘄𝗵𝗮𝘁 𝗮𝗿𝗲 𝘆𝗼𝘂 𝗱𝗼𝗶𝗻𝗴?", "𝗛𝗼𝘄 𝗮𝗿𝗲 𝘆𝗼𝘂 𝗯𝗯𝘆?", "𝗛𝗲𝗹𝗹𝗼 𝗕𝗮𝗯𝘆 <🥰", "𝗛𝘂𝗺 𝗯𝗼𝗹𝗼 <😒?",];
 let juswa1 = juswa[Math.floor(Math.random() * juswa.length)];

    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/Dhaka').format('HHmm');
    let session = (
    hours > 0001 && hours <= 400 ? "bright morning" : 
    hours > 401 && hours <= 700 ? "morning" :
    hours > 701 && hours <= 1000 ? "morning" :
    hours > 1001 && hours <= 1100 ? "morning" : 
    hours > 1100 && hours <= 1500 ? "afternoon" : 
    hours > 1501 && hours <= 1800 ? "evening" : 
    hours > 1801 && hours <= 2100 ? "evening" : 
    hours > 2101 && hours <= 2400 ? "late night and advance sleepwel" : 
    "error");
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    let msg = {body: `Hi ${name}, have a good ${session} 𝗕𝗮𝗯𝘆, ${juswa1}`, mentions}
    api.sendMessage(msg, event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 100)
    }, event.messageID)
  }
  }
}

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
		"successText": `${this.config.name} thành công`,
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": `${this.config.name} success!`,
	}
}

module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
	if (typeof data["hi"] == "undefined" || data["hi"] == true) data["hi"] = false;
	else data["hi"] = true;
	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
      }
