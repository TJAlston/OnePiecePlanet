import React, { Component } from 'react'
import '../styles/screen.sass'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router'

class Home extends Component {

  render () {
    return <div>
    <Header />
      <main>
        <h1>HOME PAGE</h1>
        <div className='homePage'>
          <Link to='/Characters'><img className='characterImageHome' src='https://s-media-cache-ak0.pinimg.com/736x/f5/3e/1b/f53e1b4511d67a8fe0be876aad925c2f.jpg' alt='strawhats' /></Link>
          <div className='sideLinks'>
            <Link to='/DevilFruit'><img className= 'devilFruitHome' src='https://uploads.disquscdn.com/images/d77648bc56c7e2981e1301128783d02f13f75f7e10ea115dbb844c048ae6f134.jpg' /></Link>
            <Link to='/Games'><img className='gamesHome' src='https://analogaddiction.files.wordpress.com/2013/09/one-piece-pirate-warriors-2-screen-7.jpg?w=350&h=200&crop=1' /></Link>
          </div>
        </div>
        <h2>WELCOME TO ONE PIECE PLANET</h2>
        <div className='homeIntro'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </main>
    <Footer />
    </div>
  }
}

export default Home
