module.exports = {
name: "nuke",
run: async  (client, message) => {

message.channel.bulkDelete("100").then(message.channel.send("Channel Nuked"))

}
}
