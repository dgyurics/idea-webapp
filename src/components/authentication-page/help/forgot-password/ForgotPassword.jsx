import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { forgotPassword } from '../../../../util/httpClient';

/*
 * Dialog prompting user to enter a password reset code
*/
const ForgotPassword = (props) => {
  const { visible, successCb } = props;
  const initState = { username: '', error: '' };
  const [values, setValues] = useState(initState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, error: '', [name]: value });
  };

  // TODO move to utility
  const validUsername = (username) => {
    const usernameCleaned = String(username).toLowerCase().trim();
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(usernameCleaned);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validUsername(values.username)) {
      setValues({ ...values, error: 'Invalid email address' });
      return;
    }
    forgotPassword(values)
      .then(() => {
        setValues(initState);
        successCb('Please check your email');
      })
      .catch(() => {
        setValues({ ...values, error: 'Something went wrong, please try again later' });
      });
  };
  return (
    <div className={visible ? '' : 'hidden'}>
      <span className="modal__error">{values.error}</span>
      <form onSubmit={handleSubmit} className="modal__form">
        <input type="text" name="username" placeholder="email" value={values.username} onChange={handleChange} className="modal__input" autoCapitalize="none" />
        <input type="submit" name="submit" value="Submit" className="modal__submit" />
      </form>
    </div>
  );
};

ForgotPassword.propTypes = {
  visible: PropTypes.bool,
  successCb: PropTypes.func.isRequired,
};

ForgotPassword.defaultProps = {
  visible: false,
};

export default ForgotPassword;
