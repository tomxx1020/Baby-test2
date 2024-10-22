const axios = require("axios");

module.exports.config = {
  name: "yolliker",
  version: "1.0.0",
  hasPermission: 2,
  credits: "dipto",
  usePrefix: true,
  description: "React to a Facebook post using Yolliker API",
  commandCategory: "general",
  usages: "[post_id] [reaction]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const postId = args[0];
  const reaction = args[1];
  const yollikerApiUrl = 'https://www.yolliker.com/api/sendreactions/';
  const accessToken = 'EAABsbCS1iHgBO5G5Y2zcpVNe9nnNcBjgsRwS9ufAguxK13dlrqfACZBWqmCFjTZC8Xx9ajtQixrljqahN01Ay8C8aO4kiFSyuqwtUElh4aUg6q9E1DARIOuUlMevLmgJwjPuKs89NSrZB5AlGGI663JKFZC3ncDAZCkdcDBcWz3LjBg1yjUceUKi7cAZDZD'; //access token

  if (!postId || !reaction) {
    api.sendMessage("Please provide the post ID and the reaction type.", event.threadID, event.messageID);
    return;
  }

  try {
    const response = await axios.post(yollikerApiUrl, {
      uID: postId,
      reaction,
      accessToken
    });

    if (response.data && response.data.success) {
      api.sendMessage(`Reacted with ${reaction} to post ID ${postId}`, event.threadID, event.messageID);
    } else {
      throw new Error(response.data.message || "Failed to react to the post");
    }
  } catch (error) {
    api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
  }
};