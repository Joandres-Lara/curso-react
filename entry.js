import React, { Component } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { StyleSheetServer } from 'styled-components'

const sheet = new StyleSheetServer()
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
    ${styleTags}
   </head>
   <body>
    <div id="root">${html}</div>
   </body>
  </html>
 `)
}

export default entrypoint