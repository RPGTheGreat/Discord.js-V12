const db = require("quick.db")

module.exports = {
name: "custom",
run: async  (client, message, args) => {

if (!args[0]) return message.channel.send(`GIVE A COMMAND`)
if (!args.slic(1).join(" ")) return message.channel.send(`GIVE A TRIGGER`)

db.set(`cmd_${message.guild.id}`, args[0]
db.set(`tri_${message.guild.id}`, args.slice(1).join(" "))
message.channel.send(`COMMAND CREATED \`${args[0]}\``)
  }
  }
