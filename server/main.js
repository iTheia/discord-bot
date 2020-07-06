import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cors from 'cors'

require('dotenv').config()

const app = express()
const server = http.createServer(app)

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(cors())

app.get('/', (req, res) =>{
    res.send('hola')
})

server.listen(process.env.PORT || 1235)