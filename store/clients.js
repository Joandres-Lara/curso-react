import { FETCH, URL_GET_CLIENTS } from 'actions'

const defaultState = { 
 items: [],
 configTable: [
  { header: 'Nombre', key: 'name'},
  { header: 'Apellido Paterno', key: 'lastname1' },
  { header: 'Apellido Materno', key: 'lastname2'},
  { header: 'Dirección', key: 'direction' },
  { header: 'Correo', key: 'mail'},
  { header: 'Teléfono', key: 'phone' },
  { header: 'Edad', key: 'age' },
  { header: 'Sexo', key: 'kind' }
 ]
}

export default function clients(state = defaultState, action){
	switch(action.type){
		case FETCH:
		 if( action.url === URL_GET_CLIENTS){
		 	switch(action.status){
		 		case 'init':
		 		 return Object.assign({}, state, { isFething: true })
		 		case 'success':
		 		 return Object.assign({}, state, { complete: false })
		 		case 'complete':
		 		 return Object.assign({}, state, { isFething: false, complete: true, items: action.json })
		 	}
		 }
		default:
		 return state
	}
}