import React, { Component } from 'react'
import '../styles/screen.sass'
import { Link } from 'react-router'

class App extends Component {

  render () {
    return <div>
      <Link className='title' to ='/Home'>
        <img className='oplogo' src='http://i.imgur.com/sm7UQom.png' /> <h4>PLANET</h4>
        <img className='powerup' src='http://38.media.tumblr.com/c5f1df280fa287943dad93af323d37ed/tumblr_nvs2d9mdfI1s31fzzo1_500.gif' />
      </Link>
    </div>
  }
}

export default App
