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

  if (message.content === 'anh yeu em qua troi')
    message.reply('em cung yeu anh nhieu lam moa moa');
})

client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  console.log(interaction.commandName);

  if (interaction.commandName === 'hello') {
    interaction.reply('Dẹt xơ dùng đúng lệnh rồi đó anh yêu');
  }

  if (interaction.commandName === 'anhyeuem') {
    interaction.reply('Niko cung yeu anh nhieu lam 💖💖');
  }
})


client.login(process.env.TOKEN);

