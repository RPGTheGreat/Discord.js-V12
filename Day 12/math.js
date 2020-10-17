const math = require("mathjs")
const Discord = require("discord.js")

module.exports = {
name: "math"
run: async  (client, message, args) => {

let resp;

try {
resp = args.join(" ")
} catch(e) 
console.log(e)
}


let em = new Discord.MessageEmbed()
.setTitle("MATH")
.setColor("GREEN")
.addField("QUESTION","```" + args.join(" ") + "```")
.addField("ANSWER","```" + resp + "```")
message.channel.send(em)
}
}
