import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { ServerStyleSheet } from 'styled-components'

const sheet = new ServerStyleSheet()
const html = renderToString(
 sheet.collectStyles(<App/>)
)

const styleTags = sheet.getStyleTags()

function entrypoint(request, response, next){
 response.send(`
  <!DOCTYPE html>
  <html>
   <head>
    <title>Aplicación con React JS</title>
    <link rel="stylesheet" href="index.css"/>
    <link rel="icon" type="image/icon" href="favicon.ico"/>
    ${styleTags}
   </head>
   <body>
    <div id="root">${html}</div>
    <script type="text/javascript" src="index.js"></script>
   </body>
  </html>
 `)
 next()
}

export default entrypoint