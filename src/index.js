import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import {
  App,
  Home,
  Anime,
  Characters,
  Layout,
  Manga,
  DevilFruit,
  Games,
  Forums,
  Memory,
} from './components'

import './styles/screen.sass'

const root = (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route component={Layout}>
      <Route path='/Home' component={Home} />
      <Route path='/Anime' component={Anime} />
      <Route path='/Characters' component={Characters} />
      <Route path='/Manga' component={Manga} />
      <Route path='/DevilFruit' component={DevilFruit} />
      <Route path='/Games' component={Games} />
      <Route path='/Forums' component={Forums} />
      <Route path='/Memory' component={Memory} />
    </Route>
  </Router>
)

render(root, document.getElementById('root'))
