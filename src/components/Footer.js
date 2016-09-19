import React, { Component } from 'react'
import '../styles/screen.sass'

class Footer extends Component {

  render () {
    return <div>
      <footer>
        <h3>Resources</h3>
        <h3>API Links</h3>
        <h3>Credits</h3>
      </footer>
      <div className='copyright'>
      &#169;2016 Tameka J. Alston
      </div>
    </div>
  }
}

export default Footer
