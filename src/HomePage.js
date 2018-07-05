import React, { Component, PropTypes } from 'react'
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer.js'

// Using CSS Modules mechanism
import styles from './assets/css/home-page.css'

class HomePage extends Component {
  constructor(state, props) {
    super(state, props);
  }
  componentDidMount() {}

  render() {
    return (
      <div className={styles.container}>
        <Header/>
        <h1 className={styles.header}>
          A <span className={styles.headerlrg}>life</span> well lived
        </h1>
        <Footer/>
      </div>
    );
  }
}

export default HomePage;
