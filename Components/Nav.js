import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.ul`
 list-style-type: none;
 max-width: 100%;
 overflow: hidden;
`

const Item = styled.li`
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
   items: [],
   handleActiveItem: () =>  this.setState({itemActive: i})
  }
 }
 
 //Contructor
 constructor(props){
  super(props)
  this.state = {
   itemActive: null
  }

  this.handleActiveItem = props.handleActiveItem
 }
 
 render(){
  const { items } = this.props
  const { itemActive } = ( 'itemActive' in this.props ) ? this.props : this.state

  return(
   <Wrapper>
    {
     items.map( (item , i) => (
      <Item
       className={ i === itemActive && 'active'}
       onClick={() => this.handleActiveItem(i)}
       key={i}>
      {item}
      </Item>
     ))
    }
   </Wrapper>
  )
 }
}