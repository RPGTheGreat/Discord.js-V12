const Discord = require("discord.js")
module.exports = {
name: "userinfo",
run: async  (client, message, args) => {

let embed = new Discord.MessageEmbed()
.setTitle("USERINFO")
.setColor("GREEN")
.addField("NAME",message.author.tag)
.addField("ID",message.author.id)
.addField("NICKNAME",message.member.nickname)
message.channel.send(embed)
}
}
