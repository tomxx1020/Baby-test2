const axios = require('axios');

module.exports.config = {
    name: "ai2",
    version: "1.0.0",
    credits: "August Quinn",
    description: "Get a response from Eden AI",
  usePrefix: false,
    commandCategory: "AI",
    usages: "eden [prompt]",
    cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
    const prompt = args.join(" ");
  api.setMessageReaction("✅", event.messageID, () => { }, true);

    if (!prompt) {
        return api.sendMessage("Hello there, how can I assist you today?", event.threadID, event.messageID);
    }

    try {
        const response = await axios.post('https://eden.august-api.repl.co/Eden', { prompt });
        const responseData = response.data; api.setMessageReaction("📝", event.messageID, () => { }, true);

        api.sendMessage(`${responseData.openai.generated_text}`, event.threadID, event.messageID);
    } catch (error) {
        console.error('ERROR', error.response?.data || error.message);
        api.sendMessage('An error occurred while processing the command.', event.threadID);
    }
};