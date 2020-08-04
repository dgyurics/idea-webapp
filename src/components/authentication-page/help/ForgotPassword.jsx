import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { forgotPassword } from '../../../actions/auth';

const ForgotPassword = ({ forgotPassword, error }) => {
  const initState = { username: '', errorMsg: '' };
  const [state, setState] = useState(initState);

  useEffect(() => {
    if (error) setState({ ...state, errorMsg: error.msg });
    else setState(initState);
  }, [error]);

  const validUsername = (username) => {
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
    if (!validUsername(state.username)) setState({ ...state, errorMsg: 'Invalid email address' });
    else forgotPassword(state);
  };

  return (
    <div>
      <span className="modal__error">{state.errorMsg}</span>
      <form onSubmit={handleSubmit} className="modal__form">
        <input type="text" name="username" placeholder="email" value={state.username} onChange={handleChange} className="modal__input" autoCapitalize="none" />
        <input type="submit" name="submit" value="Submit" className="modal__submit" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  forgotPassword: (credentials) => dispatch(forgotPassword(credentials))
});

ForgotPassword.propTypes = {
  forgotPassword: PropTypes.func.isRequired,
  error: PropTypes.shape({
    msg: PropTypes.string,
    code: PropTypes.number
  }).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
