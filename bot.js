const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
   console.log("СЕЛФБОТ ЗАПУЩЕН!");
   client.user.setGame("Evergarden | vb!info");
});

client.on("message", async message => {
    if (message.author.bot) return;

    let args = message.content.slice(config.prefix.length).trim().split(/ +/g);

    const command = args.shift().toLowerCase();

    const prefix = "vb!";

    if (commandIs("eval", message)) {
    try {
      var code = args.join(" ").substring(6);
      var evaled = eval(code);
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

           const embed = new Discord.RichEmbed()
  .setColor(0x34c036)
  .setDescription("```xl\n" + evaled + "```")
message.channel.send({ embed });
    } catch(err) {
        const embed = new Discord.RichEmbed()
  .setColor(0xcd1c1c)
  .setDescription(`:warning: \`ERROR\` \`\`\`xl\n`+err+`\n\`\`\``)
message.channel.send({ embed });
    };
  }

if (command === "ping") {

 message.channel.send("pong");

}
});

client.login(procces.env.BOT_TOKEN);
