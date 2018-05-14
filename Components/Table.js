import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Table extends Component{
 static get propTypes(){
  return {
   items: PropTypes.array,
   // Verificar prop-types para validar
   // los valores del array
   configTable: PropTypes.array
  }
 }
 
 render(){
  const { configTable, items } = this.props
  return(
   <table>
    <thead>
     <tr>
      {
       configTable.map( ({header}, j) => (
        <th key={j}>{ header }</th>
       ))
      }
     </tr>
    </thead>
    <tbody>
     {
      items.map( (item, i) => (
       <tr key={i}>
        {
         configTable.map( ({key}, ii) => (
          <td key={ii}>{ item[ key ] }</td>
         ))
        }
       </tr>
      ))
     }
    </tbody>
   </table>
  )
 }
}