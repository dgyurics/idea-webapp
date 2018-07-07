import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './navigation.css'

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.navigation}>
        <div className={styles.navigation__left}>
          <span className={styles.directory}>lagom</span>
        </div>
      </div>
    )
  }
}

export default Navigation;
