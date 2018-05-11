import React from 'react'
import { injectGlobal } from 'styled-components'
import Components from './Components'
import Nav from './components/Nav'

injectGlobal`
 *{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 0;
  margin: 0;
 }
 
 html{
  font-family: sans-serif, Helvetica, Arial;
  color: #333;
 }
 
 .row{
  &:before,
  &:after{
   content: ' ';
   display: table;
  }
  
  &:after{
   clear: both;
  }
 }
 
 .container-fluid{
  max-width: 100%;
 }
`
/*
* Aplicación para el curso,
* Ideas: 
*  1.- Editor de noticias
*  2.- Gestionador de productos -*SE QUEDA*
*  3.- Encuesta
*  4.- Física de movimiento
*/
const navItems = [
 'Productos',
 'Clientes',
 'Ventas'
]

export default class App extends React.Component{
 constructor(props){
  super(props)
  this.state = {
   seccionTarget: 0,
   prevStatesComponents: null
  }
 }
 
 //Guarda el estado del componente
 savePrevState(state, name){
  this.setState({
   prevStatesComponents: {
    [name]: state
   }
  })
 }
 
 selectComponent(i){
  this.setState({
   seccionTarget: i
  })
 }
 
 render(){
  const index = this.state.seccionTarget
  const currentLabel = navItems[index]
  const TargetComponent = Components[currentLabel]
  const prevStateSave = this.prevStatesComponents[currentLabel]
  
  return(
   <div id='app'>
    <div className='col-2'>
     <Nav 
      items={itemsNav} 
      handleActiveItem={this.selectComponent.bind(this)}
      itemActive={index}/>
    </div>
    <div className='col-8'>
     <TargetComponent handleState={this.savePrevState}/>
    </div>
   </div>
  )
 }
}