const Eris = require('eris'),
  bot = new Eris(process.env.token);

bot.on('ready', function () {
  console.log('online');
});

bot.on('messageCreate', async function (m) {
  if(m.content.startsWith('.')) {
    await m.channel.sendTyping()
    setTimeout(async function () {
      await bot.createMessage(m.channel.id, `Error on ${m.author.username}'s request:\nInternal Chuu Error`)
    },4000);
  }
});

bot.connect();