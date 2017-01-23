import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'




class App extends Component {
  render(){
    const location = {
      lat: -41.28664,
      lng: 174.77557
    }

    return(
      <div>
        Good Citizen 
      <div style={{width:600, height:900, background:'red'}}>
        <Map center={location} />
      </div>

        <Places />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))
