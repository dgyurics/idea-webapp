import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { loadUser, getAuthorities } from '../../util/authUtil';

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const {
    isLoggedIn: initialIsLoggedIn,
    children,
  } = props;

  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsLoggedIn(loadUser().loggedIn);
    if (isLoggedIn) getAuthorities().then(res => setIsAdmin(res.data === 'ADMIN'));
    else setIsAdmin(false);
  });

  const login = () => {
  };

  const userContext = {
    isLoggedIn,
    setIsLoggedIn,
    isAdmin,
    setIsAdmin,
    login,
  };

  return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>;
};

export const { Consumer } = UserContext;

UserProvider.propTypes = {
  isLoggedIn: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

UserProvider.defaultProps = {
  isLoggedIn: false,
};
