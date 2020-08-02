module.exports = {
name: "ping",
run: async (client, message) => {
message.channel.send(`${client.ws.ping}`)
}
 }
