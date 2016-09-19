import React, { Component } from 'react'
import '../styles/screen.sass'
import Header from './Header'
import Footer from './Footer'

class Manga extends Component {

  render () {
    return <div>
      <Header />
        <main>
          <h1>Manga</h1>
        </main>
      <Footer />
    </div>
  }
}

export default Manga
