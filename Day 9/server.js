const antispam = require("antispam-guard

 
client.on('ready', () => {
  // Module Configuration Constructor
   antispam(client, {
        limitUntilWarn: 3, // The amount of messages allowed to send within the interval(time) before getting a warn.
        limitUntilMuted: 5, // The amount of messages allowed to send within the interval(time) before getting a muted.
        interval: 2000, // The interval(time) where the messages are sent. Practically if member X sent 5+ messages within 2 seconds, he get muted. (1000 milliseconds = 1 second, 2000 milliseconds = 2 seconds etc etc)
        warningMessage: "Don't spam here", // Message you get when you are warned!
        muteMessage: "was muted",// Message sent after member X was punished(muted).
       kickMessage: "was kicked", //Message sent after member X was kicked from guild!
       banMessage: "was banned", //Message sent after member X was banned from the guild!
        maxDuplicatesWarning: 7,// When people are spamming the same message, this will trigger when member X sent over 7+ messages.
        maxDuplicatesMute: 10, // The limit where member X get muted after sending too many messages(10+).
        ignoredRoles: ["Admin"], // The members with this role(or roles) will be ignored if they have it. Suggest to not add this to any random guys. Also it's case sensitive.
        ignoredMembers: ["Discord#0000"],// These members are directly affected and they do not require to have the role above. Good for undercover pranks.
        ignoreBots: true, //These bots are directly affected and they do not require to have the role above
        ignoredChannels: ["general_chat"], //These channels are directly affected
        mutedRole: "Muted", // Here you put the name of the role that should not let people write/speak or anything else in your server. If there is no role set, by default, the module will attempt to create the role for you & set it correctly for every channel in your server. It will be named "muted".
        timeMuted: 9000 * 600, // This is how much time member X will be muted. if not set, default would be 90 min.
        logChannel: "mod-logs" // This is the channel where every report about spamming goes to. If it's not set up, it will attempt to create the channel.
      });
      
  // Rest of your code
});
 
client.on('message', msg => {
  client.emit('checkMessage', msg); // This runs the filter on any message bot receives in any guilds.
  
  // Rest of your code
})
