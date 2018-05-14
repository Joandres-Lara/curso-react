import fecth from 'isomorphic-fecth'

export default function connection(url, params = {}){
 return fetch(url, {
  body: JSON.stringify(params)
 })
}