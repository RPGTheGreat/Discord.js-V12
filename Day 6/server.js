const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const {prefix, token } = require("./config.json")
const db = require("quick.db")
const client = new Client({
    disableEveryone: true
})

// Collections
client.commands = new Collection();
client.aliases = new Collection();



["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log("IM READY");

    client.user.setActivity("Status Here") 
})

client.on("message", async message => {
   

    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

    
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    
    let command = client.commands.get(cmd);
    
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    
    if (command) 
        command.run(client, message, args);
});

client.on("message", async message => {
let cmd = db.get(`cmd_${message.guild.id}`)
let tri = db.get(`tri_${message.guild.id}`)
if (message.content === `${cmd}`) 
return message.channel.send(tri)
});

client.login(token);
