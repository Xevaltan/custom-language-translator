const Eris = require("eris");
const bot = Eris("ODI1NzY2MTI0MjU5NjM5MzM2.YGCsog.9Vyzt_0tnegHMjecvoFyf3GCmiY");
const translate = require("./Draktorian.plugin");

bot.on("messageCreate", (msg) => {
  if (msg.author.bot) return;
  let toTranslate = msg.content;
  msg.delete();

  msg.channel.createMessage({
    embed: {
      footer: {
        text: "sent by " + msg.author.username,
        icon_url: msg.author.avatarURL,
      },
      description:
        "Input: ```" +
        toTranslate +
        "```\nOutput: ```" +
        translate(toTranslate) +
        "```",
    },
  });
});

bot.connect();
