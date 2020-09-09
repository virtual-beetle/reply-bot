require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.BOT_TOKEN;

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', async message => {
    if (message.content.includes('bruh')) {
        try {
            await message.react('🇧');
            await message.react('🇷');
            await message.react('🇺');
            await message.react('🇭');
        } catch (error) {
            console.error('One of the emojis failed to react.');
        }
    }

    if (message.content.includes('lmao')) {
        message.react('😂');
    }

    if (message.content.includes('oof')) {
        message.react('753386121123201164');
    }
});

client.login(token);
