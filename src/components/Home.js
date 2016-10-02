import React, { Component } from 'react'
import '../styles/screen.sass'
import { Link } from 'react-router'

class Home extends Component {

  render () {
    return <div>
      <main className='homePage'>
        <h1>HOME PAGE</h1>
        <div className='homePhotos'>
          <div className='bigPhoto'>
            CHARACTERS
            <Link to='/Characters'>
            <div className='css-slideshow'>
            <figure>
              <img src='https://65.media.tumblr.com/f04675400f59bae8a0a1beb2b4a513bf/tumblr_o5ets7OX0v1t45pbyo1_500.jpg' alt='class-header-semantics' height='475' width='555' />
              <figcaption>THE WORSE GENERATION</figcaption>
            </figure>
            <figure>
              <img src='http://static.zerochan.net/Heart.Pirates.full.1390926.jpg' height='475' width='555' />
              <figcaption>THE HEART PIRATES</figcaption>
            </figure>
            <figure>
              <img src='http://images6.fanpop.com/image/photos/36400000/One-Piece-image-one-piece-36443357-500-350.jpg' height='475' width='555' />
              <figcaption>THE REVOLUTIONARY ARMY</figcaption>
            </figure>
            <figure>
              <img src='http://i63.tinypic.com/29m3dx1.jpg' alt='class-header-multimedia' height='475' width='555' />
              <figcaption>RED HAIR PIRATES</figcaption>
            </figure>
            <figure>
              <img src='http://static.zerochan.net/Whitebeard.Pirates.full.727158.jpg' alt='class-header-3d' height='475' width='555' />
              <figcaption>WHITEBEARD PIRATES</figcaption>
            </figure>
            <figure>
              <img src='http://images4.fanpop.com/image/photos/23900000/Warning-Marine-Admiral-one-piece-charaters-23967636-1024-768.jpg' height='475' width='555' />
              <figcaption> THE WORLD GOVERNMENT</figcaption>
            </figure>
            <figure>
              <img src='http://onepiecepodcast.com/wp-content/uploads/2015/01/Gol-D-Roger-810x456.jpg' height='475' width='555' />
              <figcaption>ROGERS PIRATES </figcaption>
            </figure>
            <figure>
              <img src='https://s-media-cache-ak0.pinimg.com/736x/f5/3e/1b/f53e1b4511d67a8fe0be876aad925c2f.jpg' alt='class-header-performance' height='475' width='555' />
              <figcaption>STRAW HAT PIRATES</figcaption>
            </figure>
            </div>
              </Link>
            <p className='homeFont'>Learn about your favorite characters</p>
            <img className='decor1' src='http://thelunarchronicles.com/static/heartless/img/symbol-divider@2x.png'/>
            </div>
            <div className='sideLinks'>
              <div className='sideImage1'>
                  ANIME
                  <Link to='/Anime'>
                  <iframe className='animeHome' src='http://www.hulu.com/embed.html?eid=-w7jqpfkr9kpgq9ptollcq&partner=funimation&url=http%3A%2F%2Fwww.hulu.com%2Fwatch%2F986263' scrolling='no' allowFullScreen></iframe>
                  <p className='homeFont'>View past episodes!</p>
                </Link>
              </div>
              <img className='decor2' src='http://thelunarchronicles.com/static/heartless/img/symbol-divider@2x.png'/>
              <div className='sideImage2'>
                  MANGA
                <Link to='/Manga'>
                  <img className='mangaHome' />
                  <p className='homeFont'>Read previous manga</p>
                </Link>
              </div>
             </div>
          </div>
        <h2>WELCOME TO ONE PIECE PLANET</h2>
        <div className='homeIntro'>
        <p>This is my Ultimate Fan Site of my favorite Anime One Piece that was created by <a className='author' href='https://en.wikipedia.org/wiki/Eiichiro_Oda'><u>Eiichiro Oda</u></a>. With over 345 million copies in circulation worldwide, One Piece is the best-selling manga series of all time. The series' popularity resulted in him being named one of the manga artists that changed the history of manga.</p>
        <p>The One Piece Saga has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 19, 1997, with the chapters collected into eighty-two tankōbon volumes to date. One Piece follows the adventures of Monkey D. Luffy, a young man whose body gained the properties of rubber after unintentionally eating a Devil Fruit. With his diverse crew of pirates, named the Straw Hat Pirates, Luffy explores the Grand Line in search of the world's ultimate treasure known as "One Piece" in order to become the next King of the Pirates..</p>
        <p>In this website, you'll be able to explore characters, read manga, watch up-to-date One Piece episodes and play games made by me.  Enjoy Your One Piece Planet Experience!</p>
        </div>
      </main>
    </div>
  }
}

export default Home
