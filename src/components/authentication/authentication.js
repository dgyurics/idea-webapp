import React, { Component } from 'react'
import Navigation from '../navigation/Navigation.js'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login, logout } from '../../actions/authActions.js'
import { createHashHistory } from 'history'
import './authentication.css'

class Authentication extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.contentToRender = this.contentToRender.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  /* FIXME */
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.loginError != this.props.loginError && this.props.loginError)
      console.error('error logging in')
    if(prevProps.loggedIn != this.props.loggedIn && this.props.loggedIn) {
      const history = createHashHistory()
      this.props.history.push('/idea')
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.login(this.state.username, this.state.password);
    this.setState({username: '',password: ''});
  }

  handleLogout() {
    this.props.logout();
  }

  contentToRender() {
    if (!this.props.loggedIn) {
      return (
        <form onSubmit={this.handleSubmit} className="auth_group">
          <input type="text" name="username" value={this.state.value} onChange={this.handleChange} className="auth_input auth_username" />
          <input type="password" name="password" onChange={this.handleChange} className="auth_input auth_password" />
          <input type="submit" name="login" value="Submit" className="auth_submit"/>
        </form>
      )
    } else {
      return (
        <button onClick={this.handleLogout} className="auth_group auth_submit">Logout</button>
      )
    }
  }

  render() {
    return (
      <div>
        <Navigation/>
        <div className="auth_container">
          {this.contentToRender()}
        </div>
      </div>
    )
  }
}

Authentication.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  sessionId: state.auth.sessionId,
  loggedIn: state.auth.loggedIn,
  loginError: state.auth.loginError
})

export default connect(mapStateToProps,{login, logout})(Authentication);
