module.exports.config = {
  name: "frd",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "dipto",
  usePrefix: true,
  description: "Pairing Version 2",
  commandCategory: "love",
  usages: "",
  dependencies: {
        "axios": "",
        "fs-extra": ""
  },
  cooldowns: 50
}

module.exports.run = async function ({ args, Users, Threads, api, event, Currencies }) {
  const { loadImage, createCanvas } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  let pathImg = __dirname + "/cache/background.png";
  let pathAvt1 = __dirname + "/cache/Avtmot.png";
  let pathAvt2 = __dirname + "/cache/Avthai.png";
  var id1 = Object.keys(event.mentions)[1];
  var name1 = await Users.getNameUser(id1);
  var id2 = Object.keys(event.mentions)[0];
  var name2 = await Users.getNameUser(id2);
  var rd1 = Math.floor(Math.random() * 100) + 1;
  var cc = ["0", "-1", "99,99", "-99", "-100", "101", "0,01"];
  var rd2 = cc[Math.floor(Math.random() * cc.length)];
  var djtme = [`${rd1}`, `${rd1}`, `${rd1}`, `${rd1}`, `${rd1}`, `${rd2}`, `${rd1}`, `${rd1}`, `${rd1}`, `${rd1}`];
  
  var tile = djtme[Math.floor(Math.random() * djtme.length)];

  var background = [
  "https://i.postimg.cc/NGJ5h5Z6/IMG-20231118-151149.jpg",
  "https://i.postimg.cc/NGJ5h5Z6/IMG-20231118-151149.jpg"
  ];
  var rd = background[Math.floor(Math.random() * background.length)];
  
  let getAvtmot = (
    await axios.get(
      `https://graph.facebook.com/${id1}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAvt1, Buffer.from(getAvtmot, "utf-8"));

  let getAvthai = (
    await axios.get(
      `https://graph.facebook.com/${id2}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(pathAvt2, Buffer.from(getAvthai, "utf-8"));

  let getbackground = (
    await axios.get(`${rd}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(pathImg, Buffer.from(getbackground, "utf-8"));
  let baseImage = await loadImage(pathImg);
  let baseAvt1 = await loadImage(pathAvt1);
  let baseAvt2 = await loadImage(pathAvt2);
  let canvas = createCanvas(baseImage.width, baseImage.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(baseAvt1, 100, 240, 300, 300);
  ctx.drawImage(baseAvt2, 800, 240, 300, 300);
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvt1);
  fs.removeSync(pathAvt2);
  return api.sendMessage({ body: `${name1} 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆 𝗽𝗮𝗶𝗿𝗲𝗱 𝘄𝗶𝘁𝗵 ${name2}\n🥰 2 জনের মধ্যে মিল ${tile}% 🥰`,
            mentions: [{
          tag: `${name2}`,
          id: id2
        }], attachment: fs.createReadStream(pathImg) },
      event.threadID,
      () => fs.unlinkSync(pathImg),
      event.messageID);
    }
    