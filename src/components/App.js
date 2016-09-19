import React, { Component } from 'react'
import '../styles/screen.sass'
import { Link } from 'react-router'

class App extends Component {

  render () {
    return <div className='title'>
          <h1>ONE PIECE PLANET</h1>
          <Link className='HomeButton' to ='/Home'>HOME PAGE LINK</Link>
    </div>
  }
}

export default App
