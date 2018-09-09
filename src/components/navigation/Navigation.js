import React, { Component } from 'react'
import styles from './Navigation.css'
import { Icon } from 'react-icons-kit'
import { lock } from 'react-icons-kit/feather/lock'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__left}>
        <Link to='/idea'>
          <span className={styles.directory}>lagom</span>
        </Link>
      </div>
      <div className={styles.navigation__right}>
        <Link to="/authentication">
          <Icon icon={lock} className={styles.navigation__icon}/>
        </Link>
    </div>
    </div>
  )
}

export default Navigation;
