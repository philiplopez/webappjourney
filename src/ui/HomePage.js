import React from 'react'
import Helmet from "react-helmet";

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title='Home' />
        <p>You are home</p>
      </div>
    )
  }
}
