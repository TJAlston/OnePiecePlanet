import React, { Component } from 'react'
import '../styles/screen.sass'

class Anime extends Component {

  render () {
    return <div>
        <main>
          <h1>Anime</h1>
          <div className='videos'>
              <div className='video1'>
              EPISODE 757
              <iframe width='500' height='288' src='http://embed.genfb.com/305484966483343' scrolling='no' allowFullScreen></iframe>
              </div>
              <div className='video2'>
              EPISODE 756
              <iframe width='500' height='288' src='http://embed.genfb.com/1301042249929192' scrolling='no' allowFullScreen></iframe>
              </div>
              <div className='video3'>
              EPISODE 755
              <iframe width='500' height='288' src='http://embed.genfb.com/1294724827227601' scrolling='no' allowFullScreen></iframe>
              </div>
            <div className='chapterList'>
              <a href='http://www.hulu.com/one-piece'>
              <h5>Complete List of Episodes Here</h5>
              </a>
            </div>
          </div>
        </main>
    </div>
  }
}

export default Anime
