import Discord from 'discord.js'

const client = new Discord.Client()

client.on('message', message =>{
    if(message.author.id === '234395307759108106' && message.channel.name !== 'muisca'){
        message.delete({timeout:1000})
        message.channel.send('Aqui no se manda eso vieja tonta')
            .catch(error => console.log(error))
    }
    if(message.content !== 'te amo' && message.channel.name === 'ora-ora-ora'){
        message.channel.send(`${message.author.username} es un mamarre que se equivoco`)
    }
    if(message.content === 'mami que tu quieres'){
        message.reply('aqui llego tu tiburon')
    }
})

client.login(process.env.BOT_TOKEN)