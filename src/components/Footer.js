import React, { Component } from 'react'
import '../styles/screen.sass'

class Footer extends Component {

  render () {
    return <div>
      <footer>
      <div className='resources'>
        <h3>Resources</h3>
      </div>
      <div className='api'>
        <h3>API Links</h3>
      </div>
      <div className='credits'>
        <h3>Credits</h3>
      </div>
      </footer>
      <div className='copyright'>
      &#169;2016 Tameka J. Alston
      </div>
    </div>
  }
}

export default Footer
