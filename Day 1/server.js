const Discord = require('discord.js'); 
const client = new Discord.Client(); 

client.once('ready', () => { 
	console.log('IM OK'); 
});

client.on("message", message => { 
  if(message.content === "/ping") { 
    return message.channel.send(`${client.ws.ping}`);
  }
});

client.login("your token");
