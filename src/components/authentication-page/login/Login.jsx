import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { addJwt, removeJwt } from '../../../util/tokenStorage';
import { login as loginApi, logout as logoutApi } from '../../../util/httpClient';
import './Login.css';

const Login = () => {
  const { isLoggedIn } = useContext(UserContext);
  const initState = {
    username: '',
    password: '',
    error: '',
  };
  const [values, setValues] = useState(initState);

  const validUsername = (username) => {
    const usernameCleaned = String(username).toLowerCase().trim();
    const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(usernameCleaned);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validUsername(values.username)) {
      setValues({ ...values, error: 'Username must be a valid email' });
      return;
    }

    loginApi({ username: values.username, password: values.password })
      .then((res) => {
        addJwt(res.data);
        setValues(initState);
      })
      .catch((error) => {
        const code = error.response ? error.response.status : 500;
        if (code === 401) {
          setValues({ ...values, error: 'Invalid username or password' });
        } else {
          setValues({ ...values, error: 'Something went wrong, please try again later' });
        }
      });
  };

  const handleLogout = () => logoutApi()
    .then(() => removeJwt())
    .catch(() => removeJwt());

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, error: '', [name]: value });
  };

  return (
    <div className="auth__login">
      <button type="button" onClick={handleLogout} className={isLoggedIn ? 'center auth_submit' : 'hidden'}>
        Logout
      </button>
      <div className={isLoggedIn ? 'hidden' : ''}>
        <span className="modal__error">{values.error}</span>
        <form onSubmit={handleLogin}>
          <input type="text" name="username" value={values.username} onChange={handleChange} className="modal__input" autoCorrect="off" autoCapitalize="none" />
          <input type="password" name="password" value={values.password} onChange={handleChange} className="modal__input" />
          <input type="submit" name="login" value="Submit" disabled={!values.username.trim() || !values.password.trim()} className="modal__submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
