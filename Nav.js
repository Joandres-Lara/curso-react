import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledNav = styled.ul`
 list-style-type: none;
 max-width: 100%;
 overflow: hidden;
`

const ItemNav = styled.li`
 float: left;
 width: 100%;
 max-width: 100%;
 padding: 5px 25px;
 border-bottom: 1px solid rgba(0,0,0,.1);
 cursor: pointer;
 
 &:hover,
 &:active{
  background-color: #333;
  color: #fff;
 }
 
 &.active{
  background-color: rgba(0,0,0,0.65);
  color: #aaa;
 }
`

export default class Nav extends React.Component{
 
 //Prop types
 static get propTypes(){
  return {
   handleActiveItem: PropTypes.func
  }
 }
 
 //Default props
 static get defaultProps(){
  return {
   items: []
  }
 }
 
 //Contructor
 constructor(props){
  super(props)
  this.state = {
   itemActive: null
  }
  
  this.handleActiveItem = (
   props.handleActiveItem || 
   this.handleActiveItem.bind(this)
  )
 }
 
 //`i` cómo el índice del item
 handleActiveItem(i){
  this.setState({itemActive: i})
 }
 
 render(){
  const { items } = this.props
  const { itemActive } = 'itemActive' in this.props ? this.props : this.state
  return(
   <StyledNav>
    {
     items.map( (item , i) => (
      <ItemNav
       className={ i === itemActive && 'active'}
       onClick={() => this.handleActiveItem(i)}
       key={i}>
      {item}
      </ItemNav>
     ))
    }
   </StyledNav>
  )
 }
}