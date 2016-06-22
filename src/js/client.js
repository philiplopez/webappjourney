import React from 'react'
import ReactDOM from 'react-dom'

class AppContainer extends React.Component {
  render () {
    return (
      <p>
        Hello, there!
      </p>
    )
  }
}
ReactDOM.render(<AppContainer />, document.getElementById('app-container'))
