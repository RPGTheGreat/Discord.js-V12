const Discord = require("discord.js")

module.exports = {
name: "avatar",
aliases: ["av"],
run: async  (client, message, args) => {

let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author

let embed = new Discord.MessageEmbed()
.setTitle("Avatar")
.setColor("RANDOM")
.setImage(user.displayAvatarURL({dynamic: true}))
message.channel.send(embed)

}
}
