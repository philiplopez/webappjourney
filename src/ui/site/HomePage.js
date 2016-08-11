import React from 'react'
import Helmet from 'react-helmet'
import Link from 'react-router/lib/Link'

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title='Home' />
        <p>
          You are home.
          Check out our recipes!
        </p>
        <p><Link to="/recipe/1234/banana-bread">banana bread</Link></p>
      </div>
    )
  }
}
