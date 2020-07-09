
const teAmoValidos = ['te amo', 'te amo bebe', 'te amo mucho']

const moderation = {
    name: "moderation",
    aliases: ['moderation, mod'],
    category:'moderation',
    run: async ( message ) =>{
        if(message.author.id === '299717414613024769' && message.content === 'quien me ama'){
            message.reply('Te ama Lord mamarre')
        }
        if(message.author.id === '272589884433104897' && message.content === 'quien me ama'){
            message.reply('Te ama Lady mamarre')
        }
        if(message.author.id === '234395307759108106' && message.channel.name !== 'muisca'){
            message.delete({timeout:1000})
            message.channel.send('Aqui no se manda eso vieja tonta')
                .catch(error => console.log(error))
        }
        if(message.channel.name === 'ora-ora-ora' && !message.author.bot){
            const esUnTeAmo = teAmoValidos.find(teAmo => teAmo === message.content)
            if(!esUnTeAmo){
                message.channel.send(`${message.author.username} es un mamarre que se equivoco`)
            }
        }
        if(message.content === 'hora de hacer la memicion'){
            message.channel.send(`Hora de hacer la apagacion ${message.author.username}`)
        }
    
        if(message.content === 'mami que tu quieres'){
            message.reply('aqui llego tu tiburon')
        }
    }
}

module.exports = moderation
