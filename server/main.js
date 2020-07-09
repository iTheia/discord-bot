import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './router'
import connection from './database'


const app = express()
const server = http.createServer(app)


connection()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.use('/api/v1/', router)


server.listen(process.env.PORT || 1235)