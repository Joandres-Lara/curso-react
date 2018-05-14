import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import App from './App'
import store from 'store'

hydrate(
 <App/>,
 document.getElementById('root')
)