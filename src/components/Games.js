import React, { Component } from 'react'
import '../styles/screen.sass'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'

class Games extends Component {

  render () {
    return <main>
      <h1>One Piece Games</h1>
      <div className='gameGallery1'>
        <Link className='game1' to='/Memory'>Memory Game</Link>
        <Link className='game2' to='PKExecution'>Pirate King Execution </Link>
      </div>
    </main>
  }
}

export default Games
