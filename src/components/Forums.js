import React, { Component } from 'react'
import '../styles/screen.sass'
import Header from './Header'
import Footer from './Footer'

class Forums extends Component {

  render () {
    return <div>
    <Header />
      <main>
        <h1>Forums</h1>
        <a className='forumLink' href='http://opforum.net/'>ONE PIECE FORUM</a>
      </main>
    <Footer />
    </div>
  }
}

export default Forums
