import React from 'react'
import { connect } from 'react-redux'
import Components from 'Components'

const CurrentComponent = ({label}) => (
 React.createElement( Components[label] )
)

const mapStateToProps = ({config}) => ({
	label: config.itemsNav[ config.seccionTarget ]
})


export default connect(mapStateToProps)(CurrentComponent)