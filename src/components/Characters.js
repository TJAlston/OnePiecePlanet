import React, { Component } from 'react'

class Characters extends Component {
  _goToHome = () => {
    window.location.hash = '/Home'
  }

  render () {
    const characters = this.props.searchResults.map((character, index) => {
      <h1>{characters.title}</h1>
      {/* <div className='photo'>
      <div className='characterBio'>
        <h5>{character.snippet}</h5>
      </div> */}
    })
    return <main>
      {characters}
    </main>
  }
}

export default Characters
