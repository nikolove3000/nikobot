require('dotenv').config();
const { Client, IntentsBitField, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: Object.keys(GatewayIntentBits)
})

client.on('ready', (c) => {
  console.log(`🐱 ${c.user.tag} at your service :3`)
})

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content === 'anh yeu em nhieu lam')
    message.reply('em cung yeu anh nhieu lam moa moa');
})


client.login(process.env.TOKEN);

