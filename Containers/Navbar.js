import Nav from 'Components/Nav'
import { connect } from 'react-redux'
import { selectComponentNavbar } from 'actions'

const mapStateToProps = ({config}) => ({
 items: config.itemsNav,
 itemActive: config.seccionTarget
})

const mapStateToDispatch = dispatch => ({
 handleActiveItem: (i) => dispatch( selectComponentNavbar(i) ) 
})


export default connect(
 mapStateToProps,
 mapStateToDispatch
)(Nav)
