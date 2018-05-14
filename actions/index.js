import fetch from 'isomorphic-fetch'

export const SELECT_COMPONENT_NAVBAR = 'SELECT_COMPONENT_NAV'
export const SAVE_LAST_STATE         = 'SAVE_LAST_STATE'
export const FETCH                   = 'FETCH'

export function selectComponentNavbar(index){
 return {
  type: SELECT_COMPONENT_NAVBAR,
  index
 }
}

export function saveState(state){
	return {
	 type: SAVE_LAST_STATE,
	 state
	}
}

/*--------------------------
 |       GET CLIENTS
----------------------------*/
export const URL_GET_CLIENTS = '/api/get/Clientes'

function invalidClients(error){
	return {
		type: FETCH,
		status: 'error',
		url: URL_GET_CLIENTS
	}
}

function requestClients(){
	return {
		type: FETCH,
		status: 'init',
		url: URL_GET_CLIENTS
	}
}

function sucessClients(response){
	return {
		type: FETCH,
		status: 'success',
		url: URL_GET_CLIENTS,
		response
	}
}

function completeClients(json){
	return {
		type: FETCH,
		status: 'complete',
		url: URL_GET_CLIENTS,
		json
	}
}

export function getClients(){
	return dispatch => {
		dispatch( requestClients() )
		
		return fetch(URL_GET_CLIENTS)
		 .then( response => {
		 	if(response.status >= 400){
		 		dispatch( invalidClients('Invalid response') )
		 		return false
		 	}

		 	dispatch( sucessClients(response) )
		 	return response.json()
		 })
		  .then( json => dispatch( completeClients(json) ))

	}
}