const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
   console.log("СЕЛФБОТ ЗАПУЩЕН!");
   client.user.setGame("Evergarden | vb!info");
});

client.on("message", async message => {
    if (message.author.bot) return;

if (message.content === "ping") {

 message.channel.send("pong");

}
});

client.login(procces.env.BOT_TOKEN);
