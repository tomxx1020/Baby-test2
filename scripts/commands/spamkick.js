module.exports.languages = {
  "en": {
      "on": "On",
      "off": "Off",
      "successText": "Spam kick %1",
      "onlyGroupThread": "Can only be used in group chats."
  }
};
module.exports.config = {
  name: "spamkick",
  version: "1.0.0",
  hasPermission: 0, // Bot needs admin permission or similar to kick users
  credits: "Dipto",
  usePrefix: true,
  description: "Automatically kick a user who spams messages in a group chat",
  commandCategory: "group",
  usages: "[on/off] or [settings]",
  cooldowns: 5,
  dependencies: {"fs-extra": ""}
};
module.exports.handleEvent = async ({ api, event, Users, Threads }) => {
  const { senderID, threadID } = event;
  if (!global.antispam) global.antispam = new Map();

  const threadInfo = global.antispam.has(threadID) ? global.antispam.get(threadID) : { users: {} };
  if (!(senderID in threadInfo.users)) {
    threadInfo.users[senderID] = { count: 1, time: Date.now() };
  } else {
    threadInfo.users[senderID].count++;
    
    const timePassed = Date.now() - threadInfo.users[senderID].time;
    const messages = threadInfo.users[senderID].count;
    const timeLimit = 80000; // 60 seconds
    const messageLimit = 19; // Limit of messages in time frame

    if (messages > messageLimit && timePassed < timeLimit) {
      // Kick the user out of the group
      api.removeUserFromGroup(senderID, threadID, (err) => {
        if (err) {
          console.error(err);
        } else {
          api.sendMessage({body: `The user with ID: ${senderID} has been removed for spamming.`}, threadID);
        }
      });
      threadInfo.users[senderID] = { count: 1, time: Date.now() }; // Reset the user's count after kick
    } else if (timePassed > timeLimit) {
      // Reset the count back to 1 if time limit has passed
      threadInfo.users[senderID] = { count: 1, time: Date.now() };
    }
  }

  global.antispam.set(threadID, threadInfo);
};

module.exports.run = async ({ api, event, args, client, __GLOBAL }) => {switch (args[0]) {
      case "on":
        if (!global.antispam) global.antispam = new Map();
        global.antispam.set(event.threadID, { users: {} });
        api.sendMessage("Spam kick has been turned on for this Group.", event.threadID);
        break;
      case "off":
        if (global.antispam && global.antispam.has(event.threadID)) {
          global.antispam.delete(event.threadID);
          api.sendMessage("Spam kick has been turned off for this group", event.threadID);
        } else {
          api.sendMessage("Spam kick is not active on this group", event.threadID);
        }
        break;
      default:
        api.sendMessage("Please use 'on' to activate or 'off' to deactivate the Spam kick.", event.threadID);
    }
  };