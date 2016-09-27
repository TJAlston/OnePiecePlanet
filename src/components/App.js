import React, { Component } from 'react'
import '../styles/screen.sass'
import { Link } from 'react-router'

class App extends Component {

  render () {
    return <div className='titlePage'>
      {/* <audio src='http://onepiecetracklist.com/Music/450.mp3' autoPlay /> */}
      <Link className='title' to ='/Home'>
        <img className='oplogo' src='http://i178.photobucket.com/albums/w278/kerotido_2007/One_Piece_Logo_by_zerocustom1989.png' /><h4 className='titleh4'>PLANET</h4>
        <img className='powerup' src='http://38.media.tumblr.com/c5f1df280fa287943dad93af323d37ed/tumblr_nvs2d9mdfI1s31fzzo1_500.gif' />
      </Link>
    </div>
  }
}

export default App
