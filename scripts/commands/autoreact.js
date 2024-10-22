const fs = require("fs");
module.exports.config = {
        name: "autoreact",
  version: "1.0.0",
        hasPermssion: 0,
  usePrefix: false,
        credits: "Minami Tatsuo",
        description: "\u0041\u0075\u0074\u006f \u0072\u0065\u0061\u0063\u0074\u0069\u006f\u006e \u006d\u0061\u0064\u0065 \u0062\u0079 \u004d\u0069\u006e\u0061\u006d\u0069 \u0054\u0061\u0074\u0073\u0075\u006f",
        commandCategory: "no prefix",
        usages: "noprefix",
    cooldowns: 0,
};
 
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body.toLowerCase();
  if (this.config.credits != '\u004d\u0069\u006e\u0061\u006d\u0069 \u0054\u0061\u0074\u0073\u0075\u006f') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » \u0043\u0072\u0065\u0064\u0069\u0074\u0073 \u0068\u0061\u0073 \u0062\u0065\u0065\u006e \u0063\u0068\u0061\u006e\u0067\u0065\u0064\u0021 \u0053\u0074\u006f\u0070 \u004e\u006f\u0077\u0021'+ global.config.BOTNAME + ' Change credits modules "' + this.config.name + '"');
        return api.sendMessage('[ WARN ] \u0053\u0054\u004f\u0050 \u0043\u0048\u0041\u004e\u0047\u0049\u004e\u0047 \u0043\u0052\u0045\u0044\u0049\u0054\g \u0049\u0044\u0049\u004f\u0054 ' , event.threadID, event.messageID);
      }
  if (haha.includes("lol") || haha.includes("abal") || haha.includes("haha") || haha.includes("abal") || haha.includes("bolod") || haha.includes("gaja") || haha.includes("khala hobe") || haha.includes("khalbo") || haha.includes("rate") || haha.includes("bobo") || haha.includes("mc") || haha.includes("bc") || haha.includes("inb") || haha.includes("wlc left abl")){
                 return api.setMessageReaction("😆", event.messageID, (err) => {}, true)
    api.markAsSeen(1, (err) => {});
  }
    if (haha.includes("aray") || haha.includes("hays") || haha.includes("sakit") || haha.includes("ouch") || haha.includes("hurt") || haha.includes("please") || haha.includes("😢") || haha.includes("😔") || haha.includes("🥺") || haha.includes("sad")){
      return  api.setMessageReaction("😢", event.messageID, (err) => {}, true);
}
  if (haha.includes("wow") || haha.includes("patta dei na") || haha.includes("aj kew nai bole") || haha.includes("prem") || haha.includes("yes") || haha.includes("jaiga") || haha.includes("Dipto") || haha.includes("hala") || haha.includes("lah") || haha.includes("what") || haha.includes("omg")){
    return api.setMessageReaction("😮", event.messageID, (err) => {}, true)
        }
  if (haha.includes("I love") || haha.includes("love you")){
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
    api.sendMessage("𝗜 𝗟𝗼𝘃𝗲 𝘆𝗼𝘂 𝘁𝗼𝗼🤩😘", event.threadID,event.messageID);
  }
  if (haha.includes("umaa") || haha.includes("kiss")){
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
    api.sendMessage("𝐔𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐦𝐚𝐚𝐚𝐚𝐚𝐚𝐚𝐚𝐡𝐡𝐡𝐡𝐡 <😘😘", event.threadID,event.messageID);
  }
    if (haha.includes("chip") || haha.includes("patt")){
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
    api.sendMessage("__Ami asi to😒😒", event.threadID,event.messageID);
    }
  
 /* if (haha.includes("bot") || haha.includes("-")){
    api.sendMessage("I'm here 🐰", event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: 377954575923640}, event.threadID);
      }, 100)
    }, event.messageID)
} */
  if (haha.includes("Tanha") || haha.includes("Dip")){
    api.sendMessage("__Dakis na to ore😒", event.threadID, event.messageID)
  }
  if (haha.includes("@everyone") || haha.includes("Kew aso")){
    api.sendMessage("𝗬𝗲𝘀 𝗗𝗲𝗮𝗿", event.threadID, event.messageID)
  }
  if (haha.includes("🙂🙂") || haha.includes("🙃🙃")){
    api.sendMessage("__𝗦𝗲𝗻𝘁𝗶 𝗻𝗮 𝗸𝗵𝗮𝘆𝗲 𝗮𝗺𝗸 𝗸𝗵𝗮𝘄< 😘", event.threadID, event.messageID)
  }
  
   if (haha.includes("inb") || haha.includes("In")){
    api.setMessageReaction("🐤", event.messageID, (err) => {}, true)
    api.sendMessage("𝐈𝐧𝐛𝐨𝐱 𝐚𝐥𝐥𝐨𝐰 𝐧𝐚 𝐛𝐛𝐲 <😒", event.threadID,event.messageID);
   }
  if (haha.includes("🖕") || haha.includes("👍")){
    api.setMessageReaction("🐤", event.messageID, (err) => {}, true)
    api.sendMessage("(👍)𝐇𝐚𝐭 𝐦𝐚𝐫𝐚 𝐧𝐢𝐬𝐞𝐝 <😒", event.threadID,event.messageID);
  }
  
if (haha.includes("sawa") || haha.includes("voda")){
    api.sendMessage("🤬🤬🤬gali deli kn", event.threadID, event.messageID)
}
if (haha.includes("নুনু") || haha.includes("বাল")){
    api.sendMessage("🤬🤬মুক সমালাই কথা কও", event.threadID, event.messageID)
  }
if (haha.includes("s**w") || haha.includes("sa**w")){
    api.sendMessage("🤬🤬 মুখ সামলাই কথা বল ওকে🎯", event.threadID, event.messageID)
}
  if (haha.includes("prem") || haha.includes("prem kormu")){
    api.sendMessage("prem korta hoi na bal", event.threadID, event.messageID)
      }
if (haha.includes("thamo sobai") || haha.includes("jogra koiro na")){
    api.sendMessage("__𝗷𝗼𝗴𝗿𝗮 𝗸𝗼𝗿𝗹𝗲 𝗹𝗲𝗮𝘃𝗲 𝗻𝗶𝗯𝗼 𝗸𝗶𝗻𝘁𝘂", event.threadID, event.messageID)
      }
if (haha.includes("ㅤ𝗛𝗼𝘁 𝗖𝗵𝗼𝗰𝗹𝗮𝘁𝗲 ‣᭄࿐") || haha.includes("bbz")){
    api.sendMessage("__𝗛𝘂 𝗷𝗮𝗻 𝗯𝗼𝗹𝗼", event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: 1959396170995607}, event.threadID);
      }, 100)
    }, event.messageID)
      }
}