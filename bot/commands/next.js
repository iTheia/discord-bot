import axios from 'axios'
const baseURL = 'http://localhost:5000/api/v1/'

const currentSerie = async () =>{
    const response = await axios.get(`${baseURL}/utils/current-serie`)
    const data = await response.data
    return data
}
let serie ={}

currentSerie().then(data => serie = data)

const next = {
    name: "shiguiente",
    aliases: ['next'],
    category:'entreteiment',
    description:' returns the next episode of an anime',
    run: async (client, message, args ) =>{
        const response = await axios.get(`${baseURL}/series/next/${serie.currentSerie}`)
        const data = await response.data
        message.channel.send(data.downloadLink)
    }
}

module.exports = next