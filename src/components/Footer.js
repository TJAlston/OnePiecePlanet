import React, { Component } from 'react'
import '../styles/screen.sass'

class Footer extends Component {

  render () {
    return <div>
      <footer>
      <div className='resources'>
        <h3>Resources:</h3>
      </div>
      <div className='credits'>
        <h3>Credits:</h3>
        <p>Eiichiro Oda/Shueisha, Toei Animation. Licensed by FUN</p>
      </div>
      <div className='copy'>
      &#169;2016 Tameka J. Alston
      </div>
      </footer>
    </div>
  }
}

export default Footer
