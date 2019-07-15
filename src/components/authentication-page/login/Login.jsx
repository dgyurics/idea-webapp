import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/Context';
import { login, logout } from '../../../util/authUtil';

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(UserContext);
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

    login({ username: values.username, password: values.password })
      .then(() => {
        setValues(initState);
        setIsLoggedIn(true);
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

  const handleLogout = () => logout()
    .then(() => setIsLoggedIn(false))
    .catch(error => console.log(error));

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
        <span className="auth__login__error">{values.error}</span>
        <form onSubmit={handleLogin}>
          <input type="text" name="username" value={values.username} onChange={handleChange} className="auth_input" autoCorrect="off" autoCapitalize="none" />
          <input type="password" name="password" value={values.password} onChange={handleChange} className="auth_input" />
          <input type="submit" name="login" value="Submit" disabled={!values.username.trim() || !values.password.trim()} className="auth_submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
