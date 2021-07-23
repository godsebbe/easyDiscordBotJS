const Discord = require("discord.js")
const client = new Discord.Client({
    presence: {
        activity: {
            name: 'A Random Discord Bot!',
            type: 'PLAYING'
        },
        status: 'idle',
    }
})
const { Token, Prefix } = require('./config.json')

client.on('ready', async () => {
    console.log('A Beast Has Just Been Awakened!');
});

client.on('message', async (message) => {
    if(message.content.toLowerCase() === `${Prefix}ping`) {
        message.channel.send(`pong: ${client.ws.ping} ms`)
    }
})

client.login(Token)