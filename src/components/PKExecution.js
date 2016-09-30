import React, { Component } from 'react'
import Word from './Word'
import '../styles/game.sass'
import Board from './Board'

class PKExecution extends Component {

  constructor () {
    super()
    this.state = {
      solution: 'PIRATES',
      used: [],
      matched: []
    }
  }
  onPlay = (character) => {

  this.state.used.push(character)
  for(let i = 0; i < this.state.solution.length; i++) {
    if( character === this.state.solution[i]){
      this.state.matched.push(character)
      if( this.state.matched.length === this.state.solution.length){
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
  if(this.state.used.length >= 8){
    alert('You Lose')
  }
  this.setState({
    used: this.state.used
  })
}

  render() {
    return <div className='App'>
      <h1>HANGMAN</h1>
      <Word solution={this.state.solution} used={this.state.used} />
      <Board onPlay={this.onPlay}/>
      <button onClick={this.reset} className='resetButton'>PLAY AGAIN</button>
    </div>
  }
}

export default PKExecution
