import React, { Component } from 'react'

class Characters extends Component {
  _goToHome = () => {
    window.location.hash = '/Home'
  }

  render () {
    const characters = this.props.searchResults.map((character, index) => {
      return (
        <div key={index}>
          <h1>{character.title}</h1>
          <div className='characterBio'>
            <h5>{character.snippet}</h5>
            <img src={character.image} />
          </div>
        </div>
      )
    })

    return <main>
      {characters}
    </main>
  }
}

export default Characters
