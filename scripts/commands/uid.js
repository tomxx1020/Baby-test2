module.exports.config = {
  name: "uid",
  version: "1.0.0",
  permission: 0,
  credits: "ryuko",
  usePrefix: false,
  description: "get user id.",
  usages: "prefix+uid and mention/sent without mention member",
  commandCategory: "user uid",
  cooldowns: 5
};

module.exports.run = function({ api, event, args }) {
  if (Object.keys(event.mentions) == 0) return api.sendMessage(`${event.senderID}`, event.threadID, event.messageID);
  else {
    for (var i = 0; i < Object.keys(event.mentions).length; i++) api.sendMessage(`${Object.values(event.mentions)[i].replace('@', '')}: ${Object.keys(event.mentions)[i]}`, event.threadID);
    return;
  }
}