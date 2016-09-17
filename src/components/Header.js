import React, { Component } from 'react'
import '../styles/screen.sass'
import { Link } from 'react-router'

class Header extends Component {

  render () {
    return <div>
      <img className='header1' src='https://secure.static.tumblr.com/e4a7d250b9b6a278cb662f43c37c8a29/qsbynrx/tmOn1rcsx/tumblr_static_header.jpg' alt='header1' />
      <nav>
          <ul id='noDots'>
            <li><Link className='noUnders' to='/Home'>Home</Link></li>
            <li><Link className='noUnders' to='/Characters'>Characters</Link></li>
            <li><Link className='noUnders' to='/DevilFruit'>Devil Fruits</Link></li>
            <li><Link className='noUnders' to='/Anime'>Anime</Link></li>
            <li><Link className='noUnders' to='/Manga'>Manga</Link></li>
            <li><Link className='noUnders' to='/Games'>Games</Link></li>
          </ul>
        </nav>
    </div>
  }
}

export default Header
