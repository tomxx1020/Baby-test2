const fs = require('fs-extra');
const axios = require('axios');
const pathFile = __dirname + '/cache/auto.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
module.exports.config = {
  name: "auto",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Dipto",
  usePrefix: true,
  description: "Enable/disable Auto download",
  commandCategory: "Auto download by command",
  usages: "on/off",
  cooldowns: 0
};
module.exports.handleEvent = async function ({ api, event }) {
  let dipto = event.body.toLowerCase();
  if (this.config.credits != 'Dipto')
  {console.log('[ WARN ] Chudi'+ global.config.BOTNAME + ' Change credits modules "' + this.config.name + '"');
        return api.sendMessage('[ WARN ] maderchod' , event.threadID, event.messageID);}
  if (isEnable == "true"){
  if (dipto.includes('https://www.facebook.com') || dipto.includes('https://www.facebook') || dipto.includes('https://www.fb.com/') || dipto.includes('https://www.facebook.com/reel') || dipto.includes('https://m.facebook.com') || dipto.includes('https://www.facebook.com/post') || dipto.includes('https://l.facebook.com/') || dipto.includes('https://www.fb.watch.com/reel/')){
  const aa = await axios.get(`https://api.samirthakuri.repl.co/api/videofb?url=${dipto}`);
   const wait = await api.sendMessage("𝗔𝗸𝘁𝘂 𝗪𝗮𝗶𝘁 𝗸𝗼𝗿𝗼 𝗯𝗮𝗯𝘆 <😘", event.threadID);
    { api.setMessageReaction("🐤", event.messageID, (err) => {}, true);
    }
    let path = __dirname + `/cache/fbVID1.mp4`;
  const vid = (await axios.get(aa.data.video, { responseType: "arraybuffer", })).data;
  fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));
  api.sendMessage({
    body: `downloaded!!!`,
    attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
setTimeout(() => {
      api.unsendMessage(wait.messageID);
     }, 6000);
   }
 }
};
module.exports. run = async ({ api, event, args }) => {
  try {
  if (args[0] == 'on') {
    fs.writeFileSync(pathFile, 'true');
    api.sendMessage('auto on successfully', event.threadID, event.messageID);
  }
  else if (args[0] == 'off') {
    fs.writeFileSync(pathFile, 'false');
    api.sendMessage('auto off successfully', event.threadID, event.messageID);
  }
  else {
    api.sendMessage('wrong format use echo off/on', event.threadID, event.messageID);
  }
  }
  catch(e) {
    console.log(e);
  }
};