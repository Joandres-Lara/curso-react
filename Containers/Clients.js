import React from 'react'
import { getClients } from 'actions'
import { connect } from 'react-redux'
import Table from 'Components/Table'

class Clients extends React.Component{
 componentDidMount(){
  const { dispatch } = this.props
  dispatch( getClients() )
 }
 
 render(){
  const clients = this.props.items
  const { isFetching, complete, configTable } = this.props
  return(
   <div id='clients' className='container-fluid'>
    {
     ( 
      isFetching && 'Cargando...' 
     ) || ( 
      complete && 
      <Table 
       items={clients} 
       configTable={configTable}/>
     )
    }
   </div>
  )
 }
}

const mapStateToProps = ({clients}) => (clients)

export default connect(mapStateToProps)(Clients)