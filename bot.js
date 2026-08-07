const { Telegraf, Markup } = require("telegraf");

const bot = new Telegraf("YOUR_BOT_TOKEN");

bot.start((ctx)=>{
  ctx.reply(
    "🎁 Welcome to YONO SLOT VOUCHER",
    Markup.inlineKeyboard([
      Markup.button.webApp(
        "🚀 Open Voucher App",
        "https://earn-n-tipsyono.netlify.app"
      )
    ])
  );
});

bot.launch();
