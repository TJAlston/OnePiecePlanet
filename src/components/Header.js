import React, { Component } from 'react'
import '../styles/screen.sass'
import { Link } from 'react-router'

class Header extends Component {

  static propTypes = {
    searchables: React.PropTypes.array,
    setResults: React.PropTypes.func
  }

  render () {
    return <div>
      <Link to='/Home'><img className='header1' src='./images/headerimg.gif' alt='header1' /></Link>
      <nav>
          <ul id='noDots'>
            <li><Link className='noUnders' to='/Home'>Home</Link></li>
            <li><Link className='noUnders' to='/Characters'>Characters</Link></li>
            <li><Link className='noUnders' to='/DevilFruit'>Devil Fruits</Link></li>
            <li><Link className='noUnders' to='/Anime'>Anime</Link></li>
            <li><Link className='noUnders' to='/Manga'>Manga</Link></li>
            <li><Link className='noUnders' to='/Games'>Games</Link></li>
            <li><Link className='noUnders' to='/Forums'>Forums</Link></li>
          </ul>
      </nav>
          <input id='Search' />
          <button id='submit'>submit</button>
    </div>
  }
}

export default Header
