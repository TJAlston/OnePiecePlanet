import React, { Component } from 'react'
import Word from './Word'
import '../styles/game.sass'
import Board from './Board'
import words from './words.json'
// import Lose from "./Lose"
// import Win from "./Win"

class PKExecution extends Component {

  constructor () {
    super()
    this.state = {
      incorrect: 0,
      solution: 'PIRATES',
      used: [],
      matched: []
    }
  }

  chooseWord = () => {
    let choice = words[Math.floor(Math.random() * words.length)]
    this.setState({solution: choice})
    console.log(this.state.solution)
  }

  reset = () => {
    window.location.reload()
  }

  onPlay = (letter) => {
    let used = this.state.used
    let matched = this.state.matched
    let solution = this.state.solution
    let match = false
    this.state.used.push(letter)
    for (let i = 0; i < solution.length; i++) {
      if (letter === solution[i]) {
        matched.push(letter)
        match = true
      }
    }
    if (match) {
      match = false
      if (matched.length === solution.length) {
        setTimeout(() => {
          this.setState({ currentScreen: 'win' })
        }, 500)
      }
    } else this.setState({ incorrect: this.state.incorrect + 1 })
    if (this.state.incorrect === 6) {
      setTimeout(() => {
        this.setState({currentScreen: 'lose'})
      }, 500)
    }
    this.setState({
      used: used,
      matched: matched,
      solution: solution
    })
  }
  render () {
    let hangImage
    if (this.state.currentScreen === 'game') {
        switch (this.state.currentNumWrongGuesses) {
          case 1: hangImage = <Hangman image='http://www.gifmania.co.uk/Animated-Letters-Animated-Gifs/Animated-Infant-Letters/Toy-Letters-Alphabet/toy-letters-n-letter-17141.gif' />
            break
          case 2: hangImage = <Hangman image='http://www.gifmania.co.uk/Animated-Letters-Animated-Gifs/Animated-Infant-Letters/Toy-Letters-Alphabet/toy-letters-n-letter-17141.gif' />
            break
          case 3: hangImage = <Hangman image='http://www.gifmania.co.uk/Animated-Letters-Animated-Gifs/Animated-Infant-Letters/Toy-Letters-Alphabet/toy-letters-n-letter-17141.gif' />
            break
          case 4: hangImage = <Hangman image='http://www.gifmania.co.uk/Animated-Letters-Animated-Gifs/Animated-Infant-Letters/Toy-Letters-Alphabet/toy-letters-n-letter-17141.gif' />
            break
          case 5: hangImage = <Hangman image='http://www.gifmania.co.uk/Animated-Letters-Animated-Gifs/Animated-Infant-Letters/Toy-Letters-Alphabet/toy-letters-n-letter-17141.gif' />
            break
          case 6: hangImage = <Hangman image='http://www.gifmania.co.uk/Animated-Letters-Animated-Gifs/Animated-Infant-Letters/Toy-Letters-Alphabet/toy-letters-n-letter-17141.gif' />
            break
          case 7: hangImage = <Hangman image='http://www.gifmania.co.uk/Animated-Letters-Animated-Gifs/Animated-Infant-Letters/Toy-Letters-Alphabet/toy-letters-n-letter-17141.gif' />
            break
          default: hangImage = <Hangman  image='https://i.ytimg.com/vi/mgX-wtO_ys8/maxresdefault.jpg' />
        }
    }
    return <div className='hangman'>
      <h1>HANGMAN</h1>
      <Word solution={this.state.solution} used={this.state.used} />
      <Board onPlay={this.onPlay} />
      <button onClick={this.chooseWord} className='resetButton'>
      PLAY AGAIN</button>
    </div>
  }
}

export default PKExecution
