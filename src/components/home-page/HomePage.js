import React from 'react'
import Header from './header/Header.js'
import styles from './HomePage.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <h1 className={styles.header}>
        A <span className={styles.headerlrg}>life</span> well lived
      </h1>
      <div className={styles.footer}>
        <span>Dennis Gyurics</span>
      </div>
    </div>
  );
}

export default Home;
