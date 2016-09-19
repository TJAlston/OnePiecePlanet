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
        <div className='forumLink'>
        <a className='forumLink2' href='http://opforum.net/'>ONE PIECE FORUM</a>
        </div>
      </main>
    <Footer />
    </div>
  }
}

export default Forums
