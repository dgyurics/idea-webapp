import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, logout } from '../../../actions/auth';
import './Login.css';

const Login = ({ isLoggedIn, error, login, logout }) => {
  const defaultState = { username: '', password: '', errorMsg: '' };
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    setState({ ...state, errorMsg: error.msg });
  }, [error]);

  useEffect(() => {
    setState(defaultState);
  }, [isLoggedIn])

  const validUsername = (username) => {
    const usernameCleaned = String(username).toLowerCase().trim();
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(usernameCleaned);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validUsername(state.username))
      setState({ ...state, errorMsg: 'Username must be a valid email' });
    else
      login({ username: state.username, password: state.password });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, errorMsg: '', [name]: value });
  };

  return (
    <div className="auth__login">
      <button type="button" onClick={() => logout()} className={isLoggedIn ? 'center auth_submit' : 'hidden'}>
        Logout
      </button>
      <div className={isLoggedIn ? 'hidden' : ''}>
        <span className="modal__error">{state.errorMsg}</span>
        <form onSubmit={handleLogin}>
          <input type="text" name="username" value={state.username} onChange={handleChange} className="modal__input" autoCorrect="off" autoCapitalize="none" />
          <input type="password" name="password" value={state.password} onChange={handleChange} className="modal__input" />
          <input type="submit" name="login" value="Submit" disabled={!state.username.trim() || !state.password.trim()} className="modal__submit" />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  isLoggedIn: state.auth.loggedIn,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  login: (credentials) => dispatch(login(credentials)),
  logout: () => dispatch(logout())
});

Login.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    msg: PropTypes.string,
    code: PropTypes.number
  }).isRequired,
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
