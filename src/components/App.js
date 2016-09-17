import React, { Component } from 'react'
import '../styles/screen.sass'

class App extends Component {

  render () {
    return <div>
      <main>
        <div className='titlePageArt' />
          <h1>ONE PIECE PLANET</h1>
          <Link className='HomeButton'>HOME PAGE LINK</Link>
      </main>
    </div>
  }
}

export default App
