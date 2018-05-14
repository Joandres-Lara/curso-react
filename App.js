import React from 'react'
import Navbar from 'Containers/Navbar'
import CurrentComponent from 'Containers/CurrentComponent'
import Title from 'Containers/Title'
import store from 'store'
import { Provider } from 'react-redux'

export default () => {
  return(
   <Provider store={store}>
    <div id='app'>
     <div className="container-fluid">
      <Title/>
     </div>
     {/*Tablas y Contenido*/}
     <div className='row'>
      <div className='col-1'>
       <Navbar/>
      </div>
      <div className='col-9'>
       <CurrentComponent/>
      </div>
     </div>
    </div>
   </Provider>
  )
}