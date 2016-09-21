import React, { Component } from 'react'
import '../styles/screen.sass'
import Header from './Header'
import Footer from './Footer'

class Manga extends Component {

  render () {
    return <div>
      <Header />
        <main>
          <h1>Manga</h1>
          <div className='mangaSection'>
            <div className='mangaRow1'>
              <a className='recent1' href='http://www.zingbox.me/storyRead/8168?chapterId=191338&flag=2&randomKey=89428835' />
              <a className='recent2' href='http://www.zingbox.me/storyRead/8168?chapterId=189583&flag=2&randomKey=41857309' />
              <a className='recent3' href='http://www.zingbox.me/storyRead/8168?chapterId=188874&flag=2&randomKey=88825099' />
            </div>
            <div className='mangaRow2'>
              <a className='recent4' href='http://www.zingbox.me/storyRead/8168?chapterId=188053&flag=2&randomKey=7720666' />
              <a className='recent5' href='http://www.zingbox.me/storyRead/8168?chapterId=186472&flag=2&randomKey=59024230'>NO COVER ART AVAILABLE</a>
              <a className='recent6' href='http://www.zingbox.me/storyRead/8168?chapterId=185612&flag=2&randomKey=51418313' />
            </div>
          </div>
          <div className='chapterList'>
            <a href='http://www.zingbox.me/mangaDetail/8168?bookName=One%20Piece'>
            <h5>Complete List of Chapters Here </h5>
            </a>
          </div>
        </main>
      <Footer />
    </div>
  }
}

export default Manga
