const fs = require("fs");
module.exports.config = {
      name: "autoreact2",
      version: "1.0.0",
      hasPermssion: 0,
      usePrefix: false,
      credits: "dipto",
      description: "auto react on message",
      commandCategory: "reaction",
      usages: "noprefix",
      cooldowns: 0,
};
module.exports.handleEvent = function({ api, event, client, GLOBAL }){
  let dipto = event.body.toLowerCase();
  if (dipto.includes("emoji") || dipto.includes("add") || dipto.includes("mc") || dipto.includes("lewra") || dipto.includes("bal") || dipto.includes("bf") || dipto.includes("gf") || dipto.includes("prem") || dipto.includes("everyone") || dipto.includes("bobo") || dipto.includes("bot") || dipto.includes("kosto") || dipto.includes("aj") || dipto.includes("ganja") || dipto.includes("🐸") || dipto.includes("🌚") || dipto.includes("alu") || dipto.includes("nick") || dipto.includes("mew") || dipto.includes("biye") || dipto.includes("nani") || dipto.includes("job")){
  return api.setMessageReaction("🐸", event.messageID, (err) => {}, true)
    api.markAsSeen(1, (err) => {});
}
  if (dipto.includes("admin") || dipto.includes("😁")){
      return  api.setMessageReaction("😒", event.messageID, (err) => {}, true);
  }


/*nichar gula reply| uporer gula react sudu*/
  if (dipto.includes("asslam") || dipto.includes("Asslamwalaikum"))
  {
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    api.sendMessage("𝗪𝗮𝗹𝗶𝗸𝘂𝗺 𝗔𝘀𝘀𝗹𝗮𝗺 <🥰", event.threadID, event.messageID);
  }
  if (dipto.includes("assalamu") || dipto.includes("Assalamu Alaikum"))
  {
    api.setMessageReaction("😒", event.messageID, (err) => {}, true)
    api.sendMessage("𝗪𝗮𝗹𝗶𝗸𝘂𝗺-𝗔𝘀𝘀𝗹𝗮𝗺 <😒", event.threadID, event.messageID);
  }
  if (dipto.includes("owner") || dipto.includes("ke banaise"))
  {
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    api.sendMessage("𝗢𝘄𝗻𝗲𝗿 › 亗ㅤƊᎥᎮㅤƬᴏㅤ亗 <🥰\n𝗛𝗶𝘀 𝗙𝗕-𝗜𝗗 > m.me/dipto008", event.threadID, event.messageID);
  }
  if (dipto.includes("kamon aso") || dipto.includes("kmn aso"))
  {
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    api.sendMessage("𝗔𝗹𝗵𝗮𝗺𝗱𝘂𝗹𝗹𝗶𝗮𝗵 𝗩𝗮𝗹𝗼,𝗧𝘂𝗺𝗶 <🥰", event.threadID, event.messageID);
  }
  if (dipto.includes("valo asi") || dipto.includes("alhamdulillah"))
  {
    api.setMessageReaction("🩵", event.messageID, (err) => {}, true)
    api.sendMessage("𝗞𝗶 𝗸𝗼𝗿𝗼 𝗕𝗮𝗯𝘆 <🥰", event.threadID, event.messageID);
  }
  if (dipto.includes("ki koro") || dipto.includes("kita koro"))
  {
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    api.sendMessage("𝗕𝗼𝘀𝗲 𝗔𝘀𝗲, 𝗧𝘂𝗺𝗶? <🥰", event.threadID, event.messageID);
  }
  if (dipto.includes("khaiso") || dipto.includes("খাইসো"))
  {
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
    api.sendMessage("𝗡𝗮 𝗮𝗺𝗶 𝗸𝗵𝗮𝗶 𝗻𝗮,𝗧𝘂𝗺𝗶 𝗸𝗵𝗮𝘄<😒", event.threadID, event.messageID);
  }
  if (dipto.includes("alabu") || dipto.includes("alab"))
  {
    api.setMessageReaction("😗", event.messageID, (err) => {}, true)
    api.sendMessage("𝗔𝗹𝗮𝗯𝘂 𝗧𝗵𝘂 𝘁𝗵𝘂<😙\n                               💦", event.threadID, event.messageID);
  }
  if (dipto.includes("cholo") || dipto.includes("palai"))
  {
    api.setMessageReaction("🫣", event.messageID, (err) => {}, true)
    api.sendMessage("_𝗖𝗵𝗼𝗹𝗼 𝗯𝗯𝘆 𝗽𝗮𝗹𝗮𝗶 𝗷𝗮𝗶 <😙", event.threadID, event.messageID);
  }
};
