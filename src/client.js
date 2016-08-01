import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'

import routes from './routes'

const router = (
  <Router history={browserHistory}>
    {routes}
  </Router>
)

ReactDOM.render(router, document.getElementById('appContainer'))
