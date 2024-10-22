const axios = require('axios');

module.exports.config = {
  name: 'monitordl',
  version: '1.0.0',
  permission: 0,
  usePrefix: true,
  alias: ['uptime' , 'up'],
  credit: "Dipto",
  description: 'Monitors uptime for a specified URL',
  commandCategory: 'utility',
  useges: '[url]',
  cooldowns: 10,
};

module.exports.run = async function ({api, event, args}) {
  const url = args[0];
  if (!url) {
    api.sendMessage('ID of monitor', event.threadID, event.messageID );
  }
const Token ='8kCRPwW5J3hGQx2gcAomV4q1';//Bearer Token
try {
const response = await axios.delete(`https://uptime.betterstack.com/api/v2/monitors/${url}`,{
    headers: {
'Authorization': `Bearer ${Token}`,
//'Content-Type': 'application/json'
    }
  })
   const response2  = response.data
   const msg = `Successfully Deleted`;
  api.sendMessage(msg, event.threadID, event.messageID);
}catch(error){
    api.sendMessage(`Error fetching uptime data: ${error.message}`, event.threadID);
  };
};