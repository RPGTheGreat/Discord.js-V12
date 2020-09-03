const Info = require("userinfo-githu")
const { github } = new Info()

module.exports = {
name: "github",
run: async (client, message, args) => {

let info = await github.getInfo("RPGTheGreat")
message.channel.send(info)
}
}
