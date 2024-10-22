module.exports.config = {
  name: "randomvideo",
  version: "1.0.0",
  permission: 0,
  credits: "Dipto",//don't change the credit please.New coder .So support 🙂🫶🏻
  description: "Send a random video",
  usePrefix: true,
  commandCategory: "entertainment",
  usages: "randomvideo",
  cooldowns: 5
};
  module.exports.run = async ({ api, event, args }) => {
  const dipto  =  ["♡︎••🌼 𝐚𝐛𝐨𝐮𝐭 𝐭𝐡𝐢𝐬 𝐥𝐢𝐧𝐞,🙂🌿\n__🖤🦋দিন শেষে সূর্যটাও বুঝিয়ে দেয়, সময় শেষ হলে স্থাঁন পরিবর্তন হয়..!!🥰","—খুব বেশি নয় আমি অল্পতেই অনেক খুশি,\nপ্রেম নয় আমি প্রকৃত ভালোবাসার স্বপ্ন দেখি!🫶💐","- সামান্য কারণেই যাদের চোখে পানি চলে আসে.!🥺\n-  তারা আসলেই সুন্দর মনের মানুষ।😌❤️","দুনিয়া ততোক্ষণ ভালো লাগে \nযতোক্ষণ মন ভালো থাকে 💔","(◕‿◕)এই শীতে তুমি কি চাও😑🐸","জীবনে এমন একটা পর্যায় আছি যেখানে \nঘুম কম আর ভবিষ্যতের চিন্তা বেশি হয়🙂❤️","🙃😇—কিছু মানুষ অসম্ভব মায়া'য় ফেলে দেয়..🌼🤗","___না পাওয়া সব কিছুই সুন্দর হয়-!!🙂🫰","- শূন্যতায় ভরা জীবনে সফলতার অপেক্ষা!!😍💝","🙃😇—কিছু মানুষ অসম্ভব মায়া'য় ফেলে দেয়..🌼🤗"];
  const randText = dipto[Math.floor(Math.random() * dipto.length)];
  
  const videoLinks = [
  "https://drive.google.com/uc?id=1XdEXMLrU8JwYFvbaQoMQHJmwoWL1_Dig",
    "https://drive.google.com/uc?id=1XHeGi9evbPc7feHd_ZEdBFsAv24uG7Fb",
    "https://drive.google.com/uc?id=1XKFx79hyaXe0txe75DMMBPOqqKFCKN3",
    "https://drive.google.com/uc?id=1XAe-R-jKFXcaEU8sr9BF0dMPCJEFlBiQ",
    "https://drive.google.com/uc?id=1XcYr568sImaE__20X_un3NHxnJEwWfrL",
    "https://drive.google.com/uc?id=1X9N3gjPDiutDP1wHHNFu85F33JmzUBC_",
    "https://drive.google.com/uc?id=1XInpM6JXOvl-yUiSbKs47ZHp5_KvTsKo",
    "https://drive.google.com/uc?id=1X9rHTos8DH-KXZJDtF2wCkibKYWY3L1g",
    "https://drive.google.com/uc?id=1X6Ui8VWseukemFxExr5mwbFDcA-w18yu",
    "https://drive.google.com/uc?id=1XKFx79hyaXe0txe75DMMBPOqqKFCKN3"
  ];

  const randomIndex = Math.floor(Math.random() * videoLinks.length);
  const randomVideoLink = videoLinks[randomIndex];

  let messageText = 'owner = 𝗕𝗮𝗯𝘆 📺\n';
  
  global.nodemodule["axios"]
    .get(randomVideoLink, { responseType: "arraybuffer" })
    .then((response) => {
      const path = __dirname + `/cache/dipto_${Date.now()}.mp4`;
      global.nodemodule["fs"].writeFileSync(path, Buffer.from(response.data, 'utf-8'));
      api.sendMessage({ 
        body: messageText + randText,
        attachment: global.nodemodule["fs"].createReadStream(path)
      }, event.threadID, () => global.nodemodule["fs"].unlinkSync(path), event.messageID);
    })
    .catch(error => {
      console.error("𝗣𝗿𝗼𝗯𝗹𝗲𝗺 𝗕𝗮𝗯𝘆 <🥺", error);
      api.sendMessage("𝗦𝗼𝗿𝗿𝘆 𝗯𝗮𝗯𝘆 <🥺", event.threadID, event.messageID);
    });
};