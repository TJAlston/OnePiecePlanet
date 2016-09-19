import React, { Component } from 'react'
import '../styles/screen.sass'
import Header from './Header'

class Games extends Component {

  render () {
    return <div>
      <Header />
      <main>
        <h1>One Piece Games</h1>
        <div className='gameGallery1'>
          <div className='game1'>GAME 1</div>
          <div className='game2'>GAME 2</div>
        </div>
        <div className='gameGallery2'>
          <div className='game3'>GAME 3</div>
          <div className='game4'>GAME 4</div>
        </div>
        <div className='gameGallery3'>
          <div className='game5'>GAME 5</div>
          <div className='game6'>GAME 6</div>  
        </div>
      </main>
    </div>
  }
}

export default Games
