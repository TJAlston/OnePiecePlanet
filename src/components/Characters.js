import React, { Component } from 'react'
import '../styles/screen.sass'
import Header from './Header'
import Footer from './Footer'
// import 'whatwg-fetch'
const button =('#submit')

import characterInfo from './characterinfo.json'

class Characters extends Component {
  constructor () {
    super()
    this.state = {
      characters: characterInfo.items
    }
  }
  _goToHome = () => {
    window.location.hash = '/Home'
  }

  render () {
    console.log(this.state.characters)
    return <div>
      <Header />
      <main>
      {/* <h1>{this.props.title}</h1> */}
      <h1>{this.state.characters[0].title}</h1>
        <div className='photo'></div>
        <div className='characterBio'>
        <h5>{this.state.characters[0].snippet}</h5>
         </div>
        {/* <h1>Characters</h1>
        <div className='characterLayout'>
          <div className='characterImage' />
          <p className='characterName'>Tony Tony Chopper</p>
          <div className='characterBio'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div> */}
      </main>
    <Footer />
    </div>
  }
}

export default Characters
