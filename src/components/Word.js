import React, { Component } from 'react'
import Letter from './Letter'
import '../styles/game.sass'

class Word extends Component {

  render() {
    const letters = this.props.solution.split('').map((letter, index) => {
      const isFound = this.props.used.find((used) => used === letter) !== undefined
      return <Letter value={letter} revealed={isFound} key={index} />
    })

    return <div className='Word'>
      {letters}
    </div>
  }
}

export default Word
