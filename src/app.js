import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'




class App extends Component {
  componentDidMount(){
    console.log('componentDidMount');
  }


  render(){
    const location = {
      lat: -41.28664,
      lng: 174.77557
    }

    const markers = [
      {
        location:{
          lat: -41.28664,
          lng: 174.77557
        }
      }
    ]

    return(
      <div>
        Good Citizen App
      <div style={{width:800, height:1000, background:'red'}}>
        <Map center={location} markers={markers} />
      </div>

        <Places />
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('app'))
