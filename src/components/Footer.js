import React, { Component } from 'react'
import '../styles/screen.sass'

class Footer extends Component {

  render () {
    return <div>
      <footer>
      <div className='resources'>
        <h3>Resources:</h3>
        <p><a href='http://onepiece.wikia.com/wiki/Main_Page'>One Piece Wiki</a></p>
        <p><a href='http://www.zingbox.me/'>ZingBox.Me</a></p>
        <p><a href='http://www.funimation.com/'>Funimation</a></p>
      </div>
      <div className='credits'>
        <h3>Credits:</h3>
        <p>Eiichiro Oda/Shueisha</p>
        <p>Toei Animatio</p>
        <p>Licensed by FUN</p>
      </div>
      <div className='copy'>
      &#169;2016 Tameka J. Alston
      </div>
      </footer>
    </div>
  }
}

export default Footer
