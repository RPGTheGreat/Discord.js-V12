const Discord = require("discord.js");
module.exports = {
name: "ping",
aliases: ["pong", "ring"];
run: async (client, message) => {
let embed = new Discord.MessageEmbed
.setTitle("PING")
.setDescription(`${client.ws.ping}`)
.setFooter("2020 (C) RPG")
.setColor("RANDOM");
message.channel.send(embed)
}
 }
