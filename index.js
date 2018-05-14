import { createServer } from 'http'
import express from 'express'
import entrypoint from './entry'
import bodyParser from 'body-parser'
import multer from 'multer'
import api from './middlewares/api'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/react_course')

const upload = multer()
const app = express()

app.set('strict routing', true)
app.use( bodyParser.urlencoded({extended: true}), bodyParser.json(), upload.array())
app.use(express.static(`${__dirname}/public`))

app.get('/', entrypoint)
app.use('/api', api)

createServer(app).listen(3000)
