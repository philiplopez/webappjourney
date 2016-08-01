import React from 'react'
import styles from './Header.css'

export default class Header extends React.Component {
  render() {
    console.log("styles", JSON.stringify(styles))
    return (
      <header>
        <h1 className={styles.title}>A Web Application Journey</h1>
      </header>
    )
  }
}
