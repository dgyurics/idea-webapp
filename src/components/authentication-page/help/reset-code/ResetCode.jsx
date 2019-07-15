import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isValidResetCode } from '../../../../util/authUtil';

/*
 * Dialog prompting user to enter a password reset code (previously emailed to user)
*/
const ResetCode = (props) => {
  const { visible, userId, successCb } = props;
  const initState = { resetCode: '', error: '' };
  const [values, setValues] = useState(initState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, error: '', [name]: value });
  };
  const validResetCode = code => code >= 100000 && code <= 999999;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validResetCode(values.resetCode)) {
      setValues({ ...values, error: 'Invalid reset code' });
      return;
    }
    isValidResetCode(userId, { resetCode: values.resetCode })
    .then(() => {
      setValues(initState);
      successCb(values.resetCode);
    })
    .catch(() => {
      setValues({ ...values, error: 'Incorrect reset code' });
    });
  };
  return (
    <div className={visible ? '' : 'hidden'}>
      <span className="auth__login__error">{values.error}</span>
      <form onSubmit={handleSubmit} className="auth__form">
        <input
          type="number"
          name="resetCode"
          placeholder="code"
          value={values.code}
          onChange={handleChange}
          className="auth_input"
          autoCorrect="off"
          autoCapitalize="none"
        />
        <input type="submit" name="submit" value="Submit" className="auth_submit" />
      </form>
    </div>
  );
};

ResetCode.propTypes = {
  userId: PropTypes.string,
  visible: PropTypes.bool,
  successCb: PropTypes.func.isRequired,
};

ResetCode.defaultProps = {
  userId: '',
  visible: false,
};

export default ResetCode;
