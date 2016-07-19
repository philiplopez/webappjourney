import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import browserHistory from 'react-router/lib/browserHistory'

class AppContainer extends React.Component {
  render () {
    return (
      <p>
        Bonjour tout le monde!
      </p>
    )
  }
}


const router = (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer} />
  </Router>
)

ReactDOM.render(router, document.getElementById('app-container'))
