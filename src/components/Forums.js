import React, { Component } from 'react'
import '../styles/screen.sass'

class Forums extends Component {

  render () {
    return <div>
      <main>
        <h1>Forums</h1>
        <div className='forumPage'>
          <div className='forumLink'>
          <h3 id='opfont'>ONE PIECE FORUM</h3>
          <a className='forumLink2' href='http://opforum.net/' />
          </div>
          <div className='bio'>One Piece Forum is a forum for fans to discuss a plethora of One Piece topics.  Fan will touch on subject like; theories, show their fan art, discuss new One Piece news, fan games and hundreds of topics.
          </div>
        </div>
      </main>
    </div>
  }
}

export default Forums
