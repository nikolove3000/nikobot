require('dotenv').config();
const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'hello',
    description: 'Relies with hello',
  },

  {
    name: 'anhyeuem',
    description: 'Replies with me too',
  },

  {
    name: 'embed',
    description: 'Sends an embed!',
  },

  {
    name: 'addrole',
    description: 'Add a role',
  },

  {
    name: 'removerole',
    description: 'Remove a role',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("Making new command.......");

    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    )

    console.log("New command have been add 😼");
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();