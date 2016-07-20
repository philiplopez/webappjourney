import React from 'react'
import ReactDOM from 'react-dom'

import Router from 'react-router/lib/Router'
import Route from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'
import Link from 'react-router/lib/Link'
import browserHistory from 'react-router/lib/browserHistory'

class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>A Web Application Journey</h1>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link></li>
            <li>
              <Link to="/about">About</Link></li>
          </ul>
        </nav>
        <main>
          {this.props.children}
        </main>
        <footer>
          (c) 2016
        </footer>
      </div>
    )
  }
}

class HomePage extends React.Component {
  render() {
    return <p>You are Home.</p>
  }
}

class AboutPage extends React.Component {
  render() {
    return <p>What <em>is</em> this site about?</p>
  }
}

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={HomePage} />
      <Route path="about" component={AboutPage} />
    </Route>
  </Router>
)

ReactDOM.render(router, document.getElementById('app-container'))
