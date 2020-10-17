const figlet = require("figlet")

module.exports = {
name: "ascii",
run: async  (client, message, args) => {

figlet(args.join(" "), function(err, data)
if (err) {
console.log(err)
}
message.channel.send(data)
}
}
