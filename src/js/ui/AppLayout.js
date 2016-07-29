import React from 'react'
import Link from 'react-router/lib/Link'

import Header from "./Header"
import Footer from "./Footer"

export default class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
        <Footer />
      </div>
    )
  }
}
