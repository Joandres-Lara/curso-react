import express from 'express'
import get from './get'
import set from './set'

const appApi = express()

appApi.use('/get/:model?/:id', get)
appApi.use('/set/:model', set)

export default appApi