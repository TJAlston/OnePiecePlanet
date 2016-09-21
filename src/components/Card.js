import React from 'react'

class Card extends React.Component {
  handleClick = () => {
    this.props.flipCard(this.props.index)
  }

  render () {
    const direction = this.props.up ? 'up' : 'down'
    switch (direction) {
      case 'up': return <img src={this.props.value} className={`card ${direction}`} />
      break
      case 'down': return <img src='https://s-media-cache-ak0.pinimg.com/236x/ca/15/b9/ca15b9664fc26349dc1c9c6982b24df9.jpg' onClick={this.handleClick} className={`card ${direction}`} />
      break
      default:  return <img src='https://s-media-cache-ak0.pinimg.com/236x/ca/15/b9/ca15b9664fc26349dc1c9c6982b24df9.jpg' onClick={this.handleClick} className={`card ${direction}`} />
  }
}
}

export default Card
