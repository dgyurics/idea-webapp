import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updatePassword } from '../../../actions/auth';

const ResetPassword = ({ updatePassword, userId, resetCode, error }) => {
  const initState = { newPassword: '', errorMsg: '' };
  const [state, setState] = useState(initState);

  useEffect(() => {
    if (error) setState({ ...state, errorMsg: error.msg });
    else setState(initState);
  }, [error]);

  const validPassword = password => password.length >= 5 && password.length <= 50;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, errorMsg: '', [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validPassword(state.newPassword)) setState({ ...state, errorMsg: 'Password must be between five and fifty characters long' });
    else updatePassword(userId, { resetCode, password: state.newPassword });
  };

  return (
    <div>
      <span className="modal__error">{state.errorMsg}</span>
      <form onSubmit={handleSubmit} className="modal__form">
        <input
          type="password"
          name="newPassword"
          placeholder="new password"
          value={state.newPassword}
          onChange={handleChange}
          className="modal__input"
          autoCorrect="off"
          autoCapitalize="none"
        />
        <input type="submit" name="submit" value="Submit" className="modal__submit" />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth.user.id,
  resetCode: state.auth.user.resetCode,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  updatePassword: (userId, credentials) => dispatch(updatePassword(userId, credentials))
});

ResetPassword.propTypes = {
  userId: PropTypes.string.isRequired,
  resetCode: PropTypes.string.isRequired,
  updatePassword: PropTypes.func.isRequired,
  error: PropTypes.shape({
    msg: PropTypes.string,
    code: PropTypes.number
  }).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetPassword);
