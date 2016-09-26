import React, { Component } from 'react'
import '../styles/screen.sass'

class Anime extends Component {

  render () {
    return <div>
        <main>
          <h1>Anime</h1>
          <div className='videos'>
            <div className='video1'>
              EPISODE 756
              <iframe width='500' height='288' src='http://www.hulu.com/embed.html?eid=btznonsuogmz0awhehnjia&partner=funimation&url=http%3A%2F%2Fonepieceofficial.com%2Fvideos.aspx' scrolling='no' allowFullScreen></iframe>
              </div>
              <div className='video2'>
              EPISODE 755
              <iframe width='500' height='288' src='http://www.hulu.com/embed.html?eid=ey7esovrjarvoelg1uwc0g&partner=funimation&url=http%3A%2F%2Fwww.onepieceofficial.com%2Fvideos.aspx%3F%26v%3D9022' scrolling='no' allowFullScreen></iframe>
              </div>
              <div className='video3'>
              EPISODE 754
              <iframe width='500' height='288' src='http://www.hulu.com/embed.html?eid=ujocuthazsye2s-bqcqb1g&partner=funimation&url=http%3A%2F%2Fwww.onepieceofficial.com%2Fvideos.aspx%3F%26v%3D9021' scrolling='no' allowFullScreen></iframe>
              </div>
            </div>
            <div className='chapterList'>
              <a href='http://www.hulu.com/one-piece'>
              <h5>Complete List of Episodes Here</h5>
              </a>
            </div>
        </main>
    </div>
  }
}

export default Anime
