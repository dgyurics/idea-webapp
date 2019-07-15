import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { loadUser } from '../../util/authUtil';

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const {
    isLoggedIn: initialIsLoggedIn,
    children,
  } = props;

  const [isLoggedIn, setIsLoggedIn] = useState(initialIsLoggedIn);

  useEffect(() => {
    setIsLoggedIn(loadUser().loggedIn);
  });

  const login = () => {
  };

  const userContext = {
    isLoggedIn,
    setIsLoggedIn,
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
