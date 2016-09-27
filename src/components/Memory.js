import React from 'react'
import '../styles/screen.sass'
import Card from './Card'

const SHOW_TIME = 1500

class Memory extends React.Component {

  constructor () {
    super()
    this.state = {
      cards: [
        'http://pm1.narvii.com/5867/eac0f1c5fad2974f75652037ddfa882a6ef7ef5f_hq.jpg',
        'http://pm1.narvii.com/5867/eac0f1c5fad2974f75652037ddfa882a6ef7ef5f_hq.jpg',
        'http://pm1.narvii.com/5867/0e5b684e2d05c9c18c7a615862c1a01a1764618e_hq.jpg',
        'http://pm1.narvii.com/5867/0e5b684e2d05c9c18c7a615862c1a01a1764618e_hq.jpg',
        'https://one-piecex.com.br/wp-content/uploads/2014/05/Zoronoa-Zoro.png',
        'https://one-piecex.com.br/wp-content/uploads/2014/05/Zoronoa-Zoro.png',
        'http://pm1.narvii.com/5867/6bc1dd6f848c81c6c47351fb7da55f00ae655c2d_hq.jpg',
        'http://pm1.narvii.com/5867/6bc1dd6f848c81c6c47351fb7da55f00ae655c2d_hq.jpg',
        'http://pm1.narvii.com/5867/9ed68cf895236bcd38e76c4f357d8ddf448ebc17_hq.jpg',
        'http://pm1.narvii.com/5867/9ed68cf895236bcd38e76c4f357d8ddf448ebc17_hq.jpg',
        'http://pm1.narvii.com/5867/e7c3f3b7c0b876a2d191b1a6918c89ce89d00f98_hq.jpg',
        'http://pm1.narvii.com/5867/e7c3f3b7c0b876a2d191b1a6918c89ce89d00f98_hq.jpg',
        'http://pm1.narvii.com/5867/3c062a602f6fb8420a8330b87a532d3fe794514c_hq.jpg',
        'http://pm1.narvii.com/5867/3c062a602f6fb8420a8330b87a532d3fe794514c_hq.jpg',
        'http://pm1.narvii.com/5867/7b4c1a0200a881c757b0393833813cf1d1f367d1_hq.jpg',
        'http://pm1.narvii.com/5867/7b4c1a0200a881c757b0393833813cf1d1f367d1_hq.jpg',
        'http://pm1.narvii.com/5867/d0bacd9de992dc995f27149f925b8449d171b362_hq.jpg',
        'http://pm1.narvii.com/5867/d0bacd9de992dc995f27149f925b8449d171b362_hq.jpg'
      ],
      matched: [],
      turned: [],
      win: false
    }
  }

  flipCard = (index) => {
    const { turned, cards } = this.state
    if (turned.length < 2) {
      this.setState({
        turned: turned.concat(index)
      }, () => {
        if (this.state.turned.length === 2) {
          if (cards[this.state.turned[0]] === cards[this.state.turned[1]]) {
            this.setState({
              matched: this.state.matched.concat(...this.state.turned),
              turned: []
            }, () => {
              if (this.state.matched.length === cards.length) {
                setTimeout(() => {
                  this.setState({ win: true })
                }, SHOW_TIME/2)
              }
            })
          } else {
          setTimeout(() => {
            this.setState({ turned: [] })
          }, SHOW_TIME)
        }
       }
      })
    }
  }

  reset = () => {
    window.location.reload()
  }

  render () {
    if (!this.state.win) {

      const cards = this.state.cards.map((card, index)=> {
        let up = !this.state.turned.includes(index) ? this.state.matched.includes(index) : this.state.turned.includes(index)

        return <Card flipCard={this.flipCard} value={card} up={up} index={index} key={index}
         />
      })
      return <div>
          <div className='memoryGame'>
            <h1>MEMORY</h1>
            <main className='memoryBoard'>
              {cards}
            </main>
            <button onClick={this.reset} className='resetButton'>PLAY AGAIN</button>
          </div>
      </div>
    } else {
      return <div>
        <h1>MEMORY</h1>
        <div className='youWin'>
          <h4> YOU WIN!!! </h4>
          <button onClick={this.reset} className='resetButton'>
          PLAY AGAIN</button>
        </div>
    </div>
    }
  }
}

export default Memory
