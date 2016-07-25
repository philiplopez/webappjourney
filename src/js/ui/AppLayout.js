import React from 'react'
import Link from 'react-router/lib/Link'

export default class AppLayout extends React.Component {
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
