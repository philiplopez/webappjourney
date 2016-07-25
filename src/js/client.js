import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'react-router/lib/Router'
import browserHistory from 'react-router/lib/browserHistory'



const router = (
  <Router history={browserHistory}>
  </Router>
)

ReactDOM.render(router, document.getElementById('app-container'))
