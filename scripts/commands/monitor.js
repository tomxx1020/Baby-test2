const axios = require('axios');

module.exports.config = {
  name: 'monitor',
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
    api.sendMessage('Please provide a URL to monitor', event.threadID, event.messageID );
  }
const Token ='8kCRPwW5J3hGQx2gcAomV4q1';//Bearer Token
try {
const response = await axios.post(`https://uptime.betterstack.com/api/v2/monitors?url=${url}`,{
    'request_headers': [
      {
        'name': 'X-Custom-Header',
        'value': 'custom header value'
      }
    ]
  }, {
    headers: {
'Authorization': `Bearer ${Token}`,
'Content-Type': 'application/json'
    }
  })
   const response2  = response.data
   const msg = `Successfully Monitored\n\nUser Name : ${response2.data.attributes.pronounceable_name}\nCreate Time :${response2.data.attributes.created_at}\nUser ID: ${response2.data.id}`;
  api.sendMessage(msg, event.threadID, event.messageID);
}catch(error){
    api.sendMessage(`Error fetching uptime data: ${error.message}`, event.threadID);
  };
};