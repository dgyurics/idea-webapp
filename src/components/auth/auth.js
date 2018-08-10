import React, { Component } from 'react'
import styles from './auth.css'

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.name + ': ' + e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    event.preventDefault();
  }

  render() {
    return (
      <div className="auth_container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Auth;
