import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'

import {
  App,
  Home,
  Anime,
  Characters,
  Manga,
  DevilFruit,
  Games,
  Forums
} from './components'

import './styles/screen.sass'

const root = (
  <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='/Home' component={Home} />
      <Route path='/Anime' component={Anime} />
      <Route path='/Characters' component={Characters} />
      <Route path='/Manga' component={Manga} />
      <Route path='/DevilFruit' component={DevilFruit} />
      <Route path='/Games' component={Games} />
      <Route path='/Forums' component={Forums} />
  </Router>
)

render(root, document.getElementById('root'))
