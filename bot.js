const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf("8994999052:AAFrrV0d8VYklHKs_eJjyUbVDPglbPBJgRk");

bot.start((ctx) => {
  ctx.reply(
    "🎁 Welcome",
    Markup.inlineKeyboard([
      [
        Markup.button.webApp(
          "🚀 Open App",
          "https://earn-n-tipsyono.netlify.app"
        )
      ]
    ])
  );
});

bot.launch();

console.log("Bot is running");
