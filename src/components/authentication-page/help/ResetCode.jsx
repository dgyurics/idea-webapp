import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { validateResetCode } from '../../../actions/auth';

const ResetCode = ({ validateResetCode, userId, error }) => {
  const initState = { resetCode: '', errorMsg: '' };
  const [state, setState] = useState(initState);

  useEffect(() => {
    if (error) setState({ ...state, errorMsg: error.msg });
    else setState(initState);
  }, [error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, errorMsg: '', [name]: value });
  };

  const isValidResetCode = code => code >= 100000 && code <= 999999;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidResetCode(state.resetCode)) {
      setState({ ...state, errorMsg: 'Invalid reset code' });
      return;
    }
    validateResetCode(userId, state.resetCode);
  };

  return (
    <div>
      <span className="modal__error">{state.errorMsg}</span>
      <form onSubmit={handleSubmit} className="modal__form">
        <input
          type="number"
          name="resetCode"
          placeholder="code"
          value={state.code}
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
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  validateResetCode: (userId, resetCode) => dispatch(validateResetCode(userId, resetCode))
});

ResetCode.propTypes = {
  userId: PropTypes.string,
  validateResetCode: PropTypes.func.isRequired,
  error: PropTypes.shape({
    msg: PropTypes.string,
    code: PropTypes.number
  }).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetCode);
