import React, { Component, PropTypes } from 'react'
import Header from './header/Header.js'
import Footer from './footer/Footer.js'
import styles from './HomePage.css'

class Home extends Component {
  constructor(state, props) {
    super(state, props);
  }

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

export default Home;
