import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import todo from './reducers'

const loggerMiddleware = createLogger()

export default createStore(todo, applyMiddleware(thunkMiddleware, loggerMiddleware))