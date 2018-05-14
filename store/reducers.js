import { combineReducers } from 'redux'
import clients from './clients'
import products from './products'
import Components from 'Components'
import { SELECT_COMPONENT_NAVBAR, FETCH } from 'actions'

/*
* REDUCER GLOBAL
*/
//Default state
const defaultState = {
 lastComponentUpdate: null,
 lastComponentState: null,
 itemsNav: Object.keys(Components),
 seccionTarget: 0
}

const config = (state = defaultState, action ) => {
 switch(action.type){
  case SELECT_COMPONENT_NAVBAR: return Object.assign({}, state, { seccionTarget: action.index })
  case FETCH: const lastFetch = { status: action.status }
   switch(action.status){
    case 'init': lastFetch.url = action.url
    case 'success': lastFetch.response = action.response
    case 'complete': lastFetch.json = action.json
    case 'error': lastFetch.error = action.error
   }
  return Object.assign({}, state, { lastFetch })
  default: return state
 }
}

export default combineReducers({config, clients, products})
