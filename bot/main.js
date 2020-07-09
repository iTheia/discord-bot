import { Collection, Client} from 'discord.js'
import { readdirSync } from 'fs'
import path from 'path'

const client = new Client()

client.commands = new Collection()
client.aliases = new Collection()
const commandFiles = readdirSync(path.join(__dirname, './commands')).filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
	client.commands.set(`${command.name}`, command);
}

client.on('message',async message =>{
    const prefix = "_"

    client.commands.get("moderation").run(message)

    if(message.author.bot) return
    if(!message.guild) return
    if(!message.content.startsWith(prefix)) return

    const args = message.content.slice(prefix.slice.length-1).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase()
    
    if(cmd.length === 0) return 
    
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd))

    if(command)
        command.run(client, message, args)
})

client.login(process.env.BOT_TOKEN)


