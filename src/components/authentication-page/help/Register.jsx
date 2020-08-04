import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../../actions/auth';

const Register = ({ register, error }) => {
  const initState = { username: '', password: '', errorMsg: '' };
  const [state, setState] = useState(initState);

  useEffect(() => {
    if (error) setState({ ...state, errorMsg: error.msg });
    else setState(initState);
  }, [error]);

  const isValidUsername = (username) => {
    const usernameCleaned = String(username).toLowerCase().trim();
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(usernameCleaned);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, errorMsg: '', [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidUsername(state.username)) setState({ ...state, errorMsg: 'Username must be a valid email' });
    else register({username: state.username, password: state.password});
  };

  return (
    <div>
      <span className="modal__error">{state.errorMsg}</span>
      <form onSubmit={handleSubmit} className="modal__form">
        <input type="text" name="username" placeholder="email" value={state.username} onChange={handleChange} className="modal__input" autoCorrect="off" autoCapitalize="none" />
        <input type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} className="modal__input" />
        <input type="submit" name="register" value="Register" className="modal__submit" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  register: (credentials) => dispatch(register(credentials))
});

Register.propTypes = {
  register: PropTypes.func.isRequired,
  error: PropTypes.shape({
    msg: PropTypes.string,
    code: PropTypes.number
  }).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
