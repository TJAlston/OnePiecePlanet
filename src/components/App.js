import React, { Component } from 'react'
import '../styles/screen.sass'
import { Link } from 'react-router'

class App extends Component {

setHalfVolume = (event) => {
  event.target.volume = 0.4
}

  render () {
    return <div className='titlePage'>
      <audio id='audio' src='http://onepiecetracklist.com/Music/450.mp3' onLoadedData={this.setHalfVolume} autoPlay />
      <Link className='title' to='/Home'>
        <img className='oplogo' src='https://raw.githubusercontent.com/TJAlston/OnePiecePlanet/master/src/images/onepiecelogo1.png'/>
        <img className='powerup' src='http://38.media.tumblr.com/c5f1df280fa287943dad93af323d37ed/tumblr_nvs2d9mdfI1s31fzzo1_500.gif' />
      </Link>
    </div>
  }
}

export default App
