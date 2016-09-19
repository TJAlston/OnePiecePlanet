import React, { Component } from 'react'
import '../styles/screen.sass'
import Header from './Header'
import Footer from './Footer'

class DevilFruit extends Component {

  render () {
    return <div>
    <Header />
      <main>
        <h1>DEVIL FRUITS</h1>
      </main>
    <Footer />
    </div>
  }
}

export default DevilFruit
