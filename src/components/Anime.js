import React, { Component } from 'react'
import '../styles/screen.sass'

class Anime extends Component {

  render () {
    return <div>
        <main>
          <h1>Anime</h1>
          <div className='videos'>
            <div className='video1'>
            EPISODE 758
            <iframe width='500' height='288' src='http://embed.genfb.com/699167056898007' scrolling='no' allowFullScreen></iframe>
            </div>
              <div className='video2'>
              EPISODE 757
              <iframe width='500' height='288' src='http://embed.genfb.com/695389437275769' scrolling='no' allowFullScreen></iframe>
              </div>
              <div className='video3'>
              EPISODE 756
              <iframe width='500' height='288' src='http://embed.genfb.com/695264470621599' scrolling='no' allowFullScreen></iframe>
              </div>
            <div className='chapterList'>
              <a href='http://www2.watchop.io/'>
              <h5>Complete List of Episodes Here</h5>
              </a>
            </div>
          </div>
        </main>
    </div>
  }
}

export default Anime
