import React from 'react'
import { connect } from 'react-redux'

const Title = ({label}) => (<h1>{label}</h1>)
/* 
*  state : { * config *, client, products, ... }
* config : { currentIndex, itemsNav, ... } 
*/
const mapStateToProps = ({config}) => ({
 label: config.itemsNav[ config.seccionTarget ]
})

export default connect(mapStateToProps)(Title)
