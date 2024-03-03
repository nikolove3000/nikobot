require('dotenv').config();
const { Client, IntentsBitField, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const fs = require('fs');
const embedData = JSON.parse(fs.readFileSync('./src/embed.json', 'utf8'));
const client = new Client({
  intents: Object.keys(GatewayIntentBits)
});

const roles = [
  {
    id: '1211982978520055839',
    label: "Get Niko's enjoyer role"
  }
]

client.on('ready', (c) => {
  console.log(`🐱 ${c.user.tag} at your service :3`);
});

client.on('messageCreate', (message) => {
  if (message.author.bot) return;

  if (message.content === 'anh yeu em qua troi') {
    message.reply('em cung yeu anh nhieu lam moa moa');
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'hello') {
    interaction.reply('Dẹt xơ dùng đúng lệnh rồi đó anh yêu');
  }

  if (interaction.commandName === 'anhyeuem') {
    interaction.reply('Niko cung yeu anh nhieu lam 💖💖');
  }

  if (interaction.commandName === 'embed') {
    interaction.reply({ embeds: embedData.embeds });
  }

  if (interaction.commandName === 'addrole') {
    if (!interaction.member.guild.roles.cache.get('1211982978520055839')) {
      interaction.reply('Em iu da co role nay roi moa moa');
    } else {
      interaction.member.roles.add('1211982978520055839');
      interaction.reply('Đã add role cho em iu rồi đó 😸');
    }
  }

  if (interaction.commandName === 'removerole') {
    if (interaction.member.roles.cache.get('1211982978520055839')) {
      console.log(interaction.member.roles.cache.get('1211982978520055839'));
      interaction.member.roles.remove('1211982978520055839');
      return interaction.reply('Đã xóa role của em iu rồi đó 😿');
    }
    interaction.reply('Em iu đã có role này đéo đâu 😸');
  }
});

client.login(process.env.TOKEN);
