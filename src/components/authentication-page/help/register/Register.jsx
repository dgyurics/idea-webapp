import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { register } from '../../../../util/authUtil';

const Register = (props) => {
  const { visible, successCb } = props;
  const defaultRegValues = {
    username: '',
    password: '',
    error: '',
  };
  const [values, setValues] = useState(defaultRegValues);

  const validUsername = (username) => {
    const usernameCleaned = String(username).toLowerCase().trim();
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(usernameCleaned);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, error: '', [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validUsername(values.username)) {
      setValues({ ...values, error: 'Username must be a valid email' });
      return;
    }
    register({
      username: values.username.trim(),
      password: values.password })
      .then(() => {
        setValues(defaultRegValues);
        successCb('success');
      })
      .catch((error) => {
        const code = error.response ? error.response.status : 500;
        if (code === 401) {
          setValues({ ...values, error: 'Incorrect username or password' });
        } else if (code === 409) {
          setValues({ ...values, error: 'User with that name already exists' });
        } else {
          setValues({ ...values, error: 'Something went wrong' });
        }
      });
  };

  return (
    <div className={visible ? '' : 'hidden'}>
      <span className="auth__login__error">{values.error}</span>
      <form onSubmit={handleSubmit} className="auth__form">
        <input type="text" name="username" placeholder="email" value={values.username} onChange={handleChange} className="auth_input" autoCorrect="off" autoCapitalize="none" />
        <input type="password" name="password" placeholder="password" value={values.password} onChange={handleChange} className="auth_input" />
        <input type="submit" name="register" value="Register" className="auth_submit" />
      </form>
    </div>
  );
};

Register.propTypes = {
  visible: PropTypes.bool,
  successCb: PropTypes.func.isRequired,
};

Register.defaultProps = {
  visible: false,
};

export default Register;
