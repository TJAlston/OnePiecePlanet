import React, { Component } from 'react'
import '../styles/screen.sass'

class Manga extends Component {

  render () {
    return <div>
        <main>
          <h1>Manga</h1>
          <div className='mangaSection'>
            <div className='mangaRow1'>
              {/* Chapter 841 */}
              {/* http://www.mangareader.net/one-piece/841 */}
              <a className='recent1' href='http://www.zingbox.me/manga/One%20Piece/8168/960689/2/192915/chapter841' />
              {/* Chapter 840 */}
              <a className='recent2' href='http://www.zingbox.me/manga/One%20Piece/8168/95045980/2/191961/chapter840' />
              {/* Chapter 839 */}
              <a className='recent3' href='http://www.zingbox.me/storyRead/8168?chapterId=191338&flag=2&randomKey=89428835' />
            </div>
            <div className='mangaRow2'>
              {/* Chapter 838 */}
              <a className='recent4' href='http://www.zingbox.me/storyRead/8168?chapterId=189583&flag=2&randomKey=41857309' />
              {/* Chapter 837 */}
              <a className='recent5' href='http://www.zingbox.me/storyRead/8168?chapterId=188874&flag=2&randomKey=88825099' />
              {/* Chapter 836 */}
              <a className='recent6' href='http://www.zingbox.me/storyRead/8168?chapterId=188053&flag=2&randomKey=7720666' />
            </div>
          </div>
          <div className='chapterList2'>
            <a href='http://www.zingbox.me/mangaDetail/8168?bookName=One%20Piece'>
              <h5> Complete List of Chapters Here </h5>
            </a>
          </div>
        </main>
    </div>
  }
}

export default Manga
