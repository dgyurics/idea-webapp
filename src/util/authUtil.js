import { login, logout, register, forgotPassword, resetPassword, isValidResetCode } from './httpClient';

const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const getItem = key => JSON.parse(localStorage.getItem(key));

const loadUser = () => {
  const user = getItem('logged-in');
  return user === null ? { loggedIn: false } : user;
};

const loginUser = credentials => login(credentials)
  .then(() => {
    setItem('logged-in', { loggedIn: true, username: credentials.username.toLowerCase() });
  });

const logoutUser = () => logout()
  .then(() => {
    setItem('logged-in', { loggedIn: false });
  });

export { loadUser, loginUser as login, logoutUser as logout, register, forgotPassword, resetPassword, isValidResetCode };
