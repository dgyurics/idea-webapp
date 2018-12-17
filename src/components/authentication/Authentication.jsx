import React, { Component } from 'react';
import { Icon } from 'react-icons-kit';
import { info } from 'react-icons-kit/feather/info';
import Modal from '../modal/Modal';
import readCookie from '../../util/util';
import './Authentication.css';

class Authentication extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      showRegistration: false,
      showForgotPassword: false,
      loggedIn: false,
    };
  }

  componentDidMount = () => {
    if (readCookie('session')) {
      this.setState({ loggedIn: true });
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmitRegistration = (event) => {
    event.preventDefault();
  }

  handleSubmitForgotPassword = (event) => {
    event.preventDefault();
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleLogout = () => {}

  loginPage = () => {
    const { loggedIn, value } = this.state;
    if (!loggedIn) {
      return (
        <div>
          <form onSubmit={this.handleSubmit} className="auth_group">
            <input type="text" name="username" value={value} onChange={this.handleChange} className="auth_input" />
            <input type="password" name="password" onChange={this.handleChange} className="auth_input" />
            <input type="submit" name="login" value="Submit" className="auth_submit" />
          </form>
        </div>
      );
    }
    return (
      <button type="button" onClick={this.handleLogout} className="center auth_submit">
          Logout
      </button>
    );
  }

  showRegisterForm = () => {
    this.setState({ showRegistration: true });
  }

  showForgotPasswordForm = () => {
    this.setState({ showForgotPassword: true });
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showRegistration: false,
      showForgotPassword: false,
      modalOpen: !prevState.modalOpen,
    }));
  }

  render() {
    const { modalOpen, showRegistration, showForgotPassword } = this.state;
    return (
      <div className="auth__container">
        {this.loginPage()}
        <div className="auth__info__icon">
          <Icon size="100%" icon={info} onClick={this.toggleModal} onKeyDown={this.toggleModal} />
        </div>
        {/* Registration + Forgot Password modal */}
        <Modal toggle={modalOpen} onClose={this.toggleModal}>
          { showRegistration || showForgotPassword ? null
            : (
              <div className="auth__info__group">
                <button type="button" className="auth__info__button" onClick={this.showRegisterForm} onKeyDown={this.showRegisterForm}>Register</button>
                <button type="button" className="auth__info__button" onClick={this.showForgotPasswordForm} onKeyDown={this.showRegisterForm}>Forgot Password</button>
              </div>
            )
            }
          { showRegistration
            ? (
              <form onSubmit={this.handleSubmitRegistration}>
                <input type="text" name="username" placeholder="username" className="auth_input" />
                <input type="password" name="password" placeholder="password" className="auth_input" />
                <input type="submit" name="register" value="Register" className="auth_submit" />
              </form>
            )
            : null
            }
          { showForgotPassword
            ? (
              <form onSubmit={this.handleSubmitForgotPassword}>
                <input type="text" name="username" placeholder="email" className="auth_input" />
                <input type="submit" name="submit" value="Submit" className="auth_submit" />
              </form>
            )
            : null
          }
        </Modal>
      </div>
    );
  }
}

export default Authentication;
