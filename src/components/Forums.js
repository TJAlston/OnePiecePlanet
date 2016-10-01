import React, { Component } from 'react'
import '../styles/screen.sass'

class Forums extends Component {

  render () {
    return <div>
      <main>
        <h1>Forums</h1>
        <div className='forumLink'>
        <h3 id='opfont'>ONE PIECE FORUM</h3>
        <a className='forumLink2' href='http://opforum.net/' />
        </div>
      </main>
    </div>
  }
}

export default Forums
