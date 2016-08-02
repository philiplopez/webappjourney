import React from 'react'
import Helmet from "react-helmet";

export default class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title='About' />
        <p>What <em>is</em> this site about?</p>
      </div>
    )
  }
}
