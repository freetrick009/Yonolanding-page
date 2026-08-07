const { Markup } = require("telegraf");

bot.start((ctx) => {
  ctx.reply(
    "🎁 Welcome to YONO SLOT VOUCHER",
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
