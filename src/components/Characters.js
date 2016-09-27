import React, { Component } from 'react'

class Characters extends Component {
  _goToHome = () => {
    window.location.hash = '/Home'
  }

  render () {
    const characters = this.props.searchResults.map((character, index) => {
      return (
        <div className='bioPage' key={index}>
          <h1>{character.title}</h1>
          <div className='characterBio'>
          <img className='bioImage' src={character.image} />
            <div className='bio'>{character.snippet.split('\n\n').map((text) => {
              return <p>{text}</p>
            })}</div>
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
