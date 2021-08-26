const TelegramBot = require("node-telegram-bot-api");
const token = process.env.BOT_API;
const chatId = process.env.CHAT_ID;
const bot = new TelegramBot(token, {});

exports.make_ping = async (req, res) => {
  const from = req.body.from || "unknown";
  const message = req.body.message || "Someone using calciomashup site";
  try {
    const sendMessage = `<b> from </b> - ${from}
    
${message}
      `;
    await bot.sendMessage(chatId, sendMessage, { parse_mode: "HTML" });
    return res.send({ ping: "ok" });
  } catch (error) {
      console.log(error.message)
    return res.send({ message: "Something went wrong" });
  }
};
