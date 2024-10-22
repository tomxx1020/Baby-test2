module.exports.config = {
  name: "video",
  version: "1.0.0",
  permission: 0,
  credits: "Yan",
  description: "example",
  usePrefix: true,
  commandCategory: "Media",
  usages: "user",
  cooldowns: 5,
  dependencies: {
    "ytdl-core": "",
    "simple-youtube-api": ""
  }
};
module.exports.handleReply = async function ({
  api: e,
  event: a,
  handleReply: t
}) {
  const n = global.nodemodule.axios;
  const s = global.nodemodule["fs-extra"];
  global.nodemodule.request;
  const i = await n.get("https://raw.githubusercontent.com/quyenkaneki/data/main/video.json");
  const r = i.data.keyVideo.length;
  const o = i.data.keyVideo[Math.floor(Math.random() * r)];
  var u = a.body;
  if (isNaN(u) || u < 1 || u > 12) {
    return e.sendMessage("choose from 1 -> 12  baby. ❤️", a.threadID, a.messageID);
  }
  e.unsendMessage(t.messageID);
  try {
    var g = {
      method: "GET",
      url: "https://ytstream-download-youtube-videos.p.rapidapi.com/dl",
      params: {
        id: `${t.link[a.body - 1]}`
      },
      headers: {
        "x-rapidapi-host": "ytstream-download-youtube-videos.p.rapidapi.com",
        "x-rapidapi-key": `${o.API_KEY}`
      }
    };
    var p = (await n.request(g)).data;
    var y = p.title;
    if ("fail" == p.status) {
      return e.sendMessage("", a.threadID);
    }
    var f = Object.keys(p.link)[1];
    var b = p.link[f][0];
    path1 = __dirname + "/cache/1.mp4";
    const i = (await n.get(`${b}`, {
      responseType: "arraybuffer"
    })).data;
    s.writeFileSync(path1, Buffer.from(i, "utf-8"));
    e.unsendMessage(t.messageID);
    return s.statSync(__dirname + "/cache/1.mp4").size > 26e6 ? e.sendMessage("Can't send the file because of the larger size 25MB.", a.threadID, () => l(__dirname + "/cache/1.mp4"), a.messageID) : e.sendMessage({
      body: `✅ ${y}`,
      attachment: s.createReadStream(__dirname + "/cache/1.mp4")
    }, a.threadID, () => s.unlinkSync(__dirname + "/cache/1.mp4"), a.messageID);
  } catch {
    return e.sendMessage("Không thể gửi file này!", a.threadID, a.messageID);
  }
  for (let e = 1; e < 7; e++) {
    l(__dirname + `/cache/${e}.png`);
  }
};
module.exports.run = async function ({
  api: e,
  event: a,
  args: t
}) {
  const n = global.nodemodule.axios;
  const s = global.nodemodule["fs-extra"];
  global.nodemodule.request;
  const i = await n.get("https://raw.githubusercontent.com/quyenkaneki/data/main/video.json");
  const r = i.data.keyVideo.length;
  const o = i.data.keyVideo[Math.floor(Math.random() * r)];
  global.nodemodule["ytdl-core"];
  const d = global.nodemodule["simple-youtube-api"];
  var u = ["AIzaSyB5A3Lum6u5p2Ki2btkGdzvEqtZ8KNLeXo", "AIzaSyAyjwkjc0w61LpOErHY_vFo6Di5LEyfLK0", "AIzaSyBY5jfFyaTNtiTSBNCvmyJKpMIGlpCSB4w", "AIzaSyCYCg9qpFmJJsEcr61ZLV5KsmgT1RE5aI4"];
  const g = u[Math.floor(Math.random() * u.length)];
  const p = new d(g);
  if (0 == t.length || !t) {
    return e.sendMessage("\xBB The search section can't be done. Blank! ", a.threadID, a.messageID);
  }
  const y = t.join(" ");
  if (0 == t.join(" ").indexOf("https://")) {
    var f = {
      method: "GET",
      url: "https://ytstream-download-youtube-videos.p.rapidapi.com/dl",
      params: {
        id: t.join(" ").split(/^.*(youtu.be\/|v\/|embed\/|watch\?|youtube.com\/user\/[^#]*#([^\/]*?\/)*)\??v?=?([^#\&\?]*).*/)[3]
      },
      headers: {
        "x-rapidapi-host": "ytstream-download-youtube-videos.p.rapidapi.com",
        "x-rapidapi-key": `${o.API_KEY}`
      }
    };
    var b = (await n.request(f)).data;
    var v = b.title;
    if ("fail" == b.status) {
      return e.sendMessage("This file could not be sent..", a.threadID);
    }
    var k = Object.keys(b.link)[1];
    var I = b.link[k][0];
    path1 = __dirname + "/cache/1.mp4";
    const i = (await n.get(`${I}`, {
      responseType: "arraybuffer"
    })).data;
    s.writeFileSync(path1, Buffer.from(i, "utf-8"));
    return s.statSync(__dirname + "/cache/1.mp4").size > 26e6 ? e.sendMessage("Can't send the file because of the larger size 25MB.", a.threadID, () => h(__dirname + "/cache/1.mp4"), a.messageID) : e.sendMessage({
      body: `» ${v}`,
      attachment: s.createReadStream(__dirname + "/cache/1.mp4")
    }, a.threadID, () => s.unlinkSync(__dirname + "/cache/1.mp4"), a.messageID);
  }
  try {
    const t = global.nodemodule["fs-extra"];
    const n = global.nodemodule.axios;
    var w = [];
    var _ = "";
    var D = 0;
    var S = 0;
    var M = [];
    var $ = await p.searchVideos(y, 12);
    for (let e of $) {
      if (undefined === e.id) {
        return;
      }
      w.push(e.id);
      e.id;
      let a = __dirname + `/cache/${S += 1}.png`;
      let s = `https://img.youtube.com/vi/${e.id}/hqdefault.jpg`;
      let i = (await n.get(`${`https://img.youtube.com/vi/${e.id}/hqdefault.jpg`}`, {
        responseType: "arraybuffer"
      })).data;
      let r = (await n.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${e.id}&key=${g}`)).data.items[0].contentDetails.duration.slice(2).replace("S", "").replace("M", ":");
      (await n.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${e.id}&key=${g}`)).data.items[0].snippet.channelTitle;
      t.writeFileSync(a, Buffer.from(i, "utf-8"));
      M.push(t.createReadStream(__dirname + `/cache/${S}.png`));
      if (1 == (D = D += 1)) {
        var x = "⓵";
      }
      if (2 == D) {
        x = "⓶";
      }
      if (3 == D) {
        x = "⓷";
      }
      if (4 == D) {
        x = "⓸";
      }
      if (5 == D) {
        x = "⓹";
      }
      if (6 == D) {
        x = "⓺";
      }
      if (7 == D) {
        x = "➐";
      }
      if (8 == D) {
        x = "➑";
      }
      if (9 == D) {
        x = "➒";
      }
      if (10 == D) {
        x = "❿";
      }
      if (11 == D) {
        x = "⓫";
      }
      if (12 == D) {
        x = "⓬";
      }
      _ += `${x} 《${r}》 ${e.title}\n\n`;
    }
    var j = `»🔎 There's ${w.length}list that coincides with your search keyword:\n\n\n${_}» Reply(reply in order number) select one of the searches above `;
    return e.sendMessage({
      attachment: M,
      body: `»🔎 There's ${w.length}list that coincides with your search keyword:\n\n\n${_}» Reply(reply in order number) select one of the searches above `
    }, a.threadID, (e, t) => global.client.handleReply.push({
      name: this.config.name,
      messageID: t.messageID,
      author: a.senderID,
      link: w
    }), a.messageID);
  } catch (t) {
    return e.sendMessage("The request cannot be processed because a module error has occurred" + t.message, a.threadID, a.messageID);
  }
};