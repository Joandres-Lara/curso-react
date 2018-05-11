import { createServer } from 'http'
import express from 'express'
import entrypoint from './entry'
import bodyParser from 'body-parser'
import multer from 'multer'

const upload = multer()
const app = express()
/*
* -Fixed. 
* Agregar middlewares para body-parser y 
* query-string
*/
express.use(
 //Aplicaciones con header xml-urlencoded-
 bodyParser.urlencoded({extended: true}),
 //Convertir parametros en JSON
 bodyParser.json(),
 //Imágenes
 upload.array()
)

express.use(express.static(`${__dirname}/public`))

createServer(app).listen(3000)
