module.exports.config = {
  name: "rules",
  description: "Lists the server rules.",
  usage: `${global.config.PREFIX}rules`,
  hasPermssion: 0,
  credits: "Dipto",
  commandCategory: "information",
  usePrefix: true,
  usages: "[rules]",
  cooldowns: 5,
};                       
module.exports.run = async function({ api, event, args }) {
  const fs = require('fs-extra');
    let threadInfo;
    try {
      threadInfo = await api.getThreadInfo(event.threadID);
    } catch (error) {
      return console.error("Error getting thread info:", error);
    }
    
    const rules = [
      "🌺🌺 𝗔𝘀𝘀𝗮𝗹𝗮𝗺 𝗪𝗮𝗹𝗮𝗶𝗸𝘂𝗺 🌺🌺\n\n🫶🏻🌹❕❕𝗔𝗱𝗺𝗶𝗻 𝗽𝗼𝘀𝘁❕❕🌹🫶🏻\n\n👉‼️  ⚠️🔰 গ্রুপ রুলস 🔰⚠️‼️👈\n\n1️⃣পার্মানেন্ট থাকতে পারলে এড করা হবে❗\n2️⃣সবার সাথে ভালো ব্যাবহার করতে হবে❗\n3️⃣গ্রুপে কোন ছেলে অথবা মেয়ে, উভয় কারো ইনবক্সে ম্যাসেজ, ফ্রেন্ড রিকুয়েস্ট দেওয়া+ঝামেলা করা যাবে না ❗❌❌\n\n👉🔰এবার আসি কিক এর বিষয়🔰👈\n1️⃣গালি দিয়ে মেম্বার এর সাথে কথা বল্লে কিক❗\n2️⃣গুটি বাজ ফাপর বাজ হলে কিক❗\n3️⃣2 দিনের বেশি active না থাকলে কিক❗\n4️⃣রুলস না মানলে কিক❗\n\n☑️প্রতিদিন কলে ২/৩ ঘন্টা সময় দিতে হবে ❗\n✅ গ্রুপে কোন ধরনের সমস্যা হলে এডমিনের সাথে যোগাযোগ করবেন🫶🏻\n               💙❤️(ধন্যবাদ)❤️💙"
      // More rules can be added here
    ];
 var link = [
  "https://i.postimg.cc/7LdGnyjQ/images-31.jpg",
 ];
    api.sendMessage({
  body: `𝗥𝘂𝗹𝗲𝘀 𝗢𝗳  ${threadInfo.threadName}\n\n${rules.join('\n')}`,
  attachment: fs.createReadStream(__dirname + "/rule/rule.jpg")
}, event.threadID); // replace threadID with event.threadID
}