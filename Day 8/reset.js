module.exports  = {
name: "reset"
run: async (client, message) => {

message.channel.send("RESET")
message.channel.send("IM BACK")

setTimeout(() => 
process.exit(0)
}, 5000)

}
}
