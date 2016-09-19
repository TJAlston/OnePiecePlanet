import React, { Component } from 'react'
import '../styles/screen.sass'
import Header from './Header'

class Forums extends Component {

  render () {
    return <div>
    <Header />
      <main>
        <h1>Forums</h1>
        <div className='forumLink'>
        <a href='http://opforum.net/'>ONE PIECE FORUM</a>
        </div>
      </main>
    </div>
  }
}

export default Forums
