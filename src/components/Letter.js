import React, { Component } from 'react'
import '../styles/game.sass'

class Letter extends Component {

  render () {
    const cx = ['Letter']
    if (this.props.revealed) {
      cx.push('revealed')
    }
    console.log(cx)
    return <span className={cx.join(' ')}>{this.props.value}</span>
  }
}
Letter.propTypes = {
  revealed: React.PropTypes.bool.isRequired,
  value: React.PropTypes.string.isRequired
}

export default Letter
