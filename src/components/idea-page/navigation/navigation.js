import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Navigation.css'
import { Icon } from 'react-icons-kit'
import {lock} from 'react-icons-kit/feather/lock'
import { login } from '../../../actions/authActions.js'
import { connect } from 'react-redux'

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.handleLockClick = this.handleLockClick.bind(this);
  }

  handleLockClick() {
    this.props.login();
  }

  render() {
    return (
      <div className={styles.navigation}>
        <div className={styles.navigation__left}>
          <span className={styles.directory}>lagom</span>
        </div>
        <div className={styles.navigation__right}>
          <Icon icon={lock} onClick={this.handleLockClick} className={styles.navigation__icon}/>
        </div>
      </div>
    )
  }
}

Navigation.propTypes = {
  login: PropTypes.func.isRequired,
  sessionId: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  sessionId: state.auth.sessionId
})

export default connect(mapStateToProps, {login})(Navigation);
