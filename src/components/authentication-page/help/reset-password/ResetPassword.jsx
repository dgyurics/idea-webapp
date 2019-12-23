import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { resetPassword } from '../../../../util/authUtil';

/*
 * Dialog prompting user to enter a new password
*/
const ResetPassword = (props) => {
  const {
    visible,
    userId,
    resetCode,
    successCb,
  } = props;
  const initState = { newPassword: '', error: '' };
  const [values, setValues] = useState(initState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, error: '', [name]: value });
  };
  const validPassword = password => password.length >= 5 && password.length <= 50;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validPassword(values.newPassword)) {
      setValues({ ...values, error: 'Password must be between five and fifty characters long' });
      return;
    }
    resetPassword(userId, { resetCode, password: values.newPassword })
      .then(() => {
        setValues(initState);
        successCb();
      })
      .catch(() => {
        setValues({ ...values, error: 'Something went wrong, please try again later' });
      });
  };
  return (
    <div className={visible ? '' : 'hidden'}>
      <span className="modal__error">{values.error}</span>
      <form onSubmit={handleSubmit} className="modal__form">
        <input
          type="password"
          name="newPassword"
          placeholder="new password"
          value={values.newPassword}
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

ResetPassword.propTypes = {
  userId: PropTypes.string.isRequired,
  resetCode: PropTypes.string.isRequired,
  successCb: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

ResetPassword.defaultProps = {
  visible: false,
};

export default ResetPassword;
