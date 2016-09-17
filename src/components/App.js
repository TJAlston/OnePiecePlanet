import React, { Component } from 'react'
import '../styles/screen.sass'
import { Link } from 'react-router'

class App extends Component {

  render () {
    return <div>
      <main>
        <img className='titlePageArt' />
          <h1>ONE PIECE PLANET</h1>
          <Link className='HomeButton' to ='/Home' >HOME PAGE LINK</Link>
      </main>
    </div>
  }
}

export default App
