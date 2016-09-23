import React, { Component } from 'react'
import '../styles/screen.sass'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'

class Games extends Component {

  render () {
    return <div>
      <Header />
      <main>
        <h1>One Piece Games</h1>
        <div className='gameGallery1'>
          <Link className='game1' to='/Memory'>Memory Game</Link>
          <Link className='game2'>GAME </Link>
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
    <Footer />
    </div>
  }
}

export default Games
