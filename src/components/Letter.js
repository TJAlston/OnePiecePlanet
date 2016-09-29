import React, { Component } from 'react'
import '../styles/game.sass'

class Letter extends Component {

  render() {
    const cx = ['Letter']
    if (this.props.revealed) {
      cx.push('revealed')
    }
    return <span className={cx.join(' ')}>{this.props.value}</span>
  }
}
export default Letter
