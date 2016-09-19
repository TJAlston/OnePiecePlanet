import React, { Component } from 'react'
import '../styles/screen.sass'
import { Link } from 'react-router'

class Header extends Component {

  render () {
    return <div>
      <img className='header1' src='http://66.media.tumblr.com/a215ef83293db672b3ac04fd96043885/tumblr_nnisl1lHPh1r2hgd5o4_500.gif' alt='header1' />
      <nav>
          <ul id='noDots'>
            <li><Link className='noUnders' to='/Home'>Home</Link></li>
            <li><Link className='noUnders' to='/Characters'>Characters</Link></li>
            <li><Link className='noUnders' to='/DevilFruit'>Devil Fruits</Link></li>
            <li><Link className='noUnders' to='/Anime'>Anime</Link></li>
            <li><Link className='noUnders' to='/Manga'>Manga</Link></li>
            <li><Link className='noUnders' to='/Games'>Games</Link></li>
            {/* World Government, pirate crews, forums, movies */}
          </ul>
        </nav>
    </div>
  }
}

export default Header
