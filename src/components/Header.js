import React, { Component } from 'react'
import '../styles/screen.sass'
import { Link } from react-router

class Header extends Component {

  render () {
    return <div>
      <img className='header1' src="http://ib2.huluim.com/show_key_art/2138?size=1600x600&region=US" alt='header1' />
      <nav>
          <ul>
            <li><Link className='noUnders' to='/Home'>Home</Link></li>
            <li><Link className='noUnders' to='/Characters'>Characters</Link></li>
            <li><Link className='noUnders' to='/DevilFruit'>Devil Fruits</Link></li>
            <li><Link className='noUnders' to='/Anime'>Anime</Link></li>
            <li><Link className='noUnders' to='/Manga'>Manga</Link></li>
          </ul>
        </nav
    </div>
  }
}

export default Header
