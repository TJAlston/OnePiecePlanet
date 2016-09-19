import React, { Component } from 'react'
import '../styles/screen.sass'
import Header from './Header'
import Footer from './Footer'

class Characters extends Component {

  render () {
    return <div>
      <Header />
      <main>
        <h1>Characters</h1>
      </main>
    <Footer />
    </div>
  }
}

export default Characters
