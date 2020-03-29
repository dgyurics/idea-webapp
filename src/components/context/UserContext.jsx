/* eslint-disable */
import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import {
  addEventListener,
  removeEventListener,
  refreshJwt,
  getJwt,
  LOGIN_EVENT,
  REFRESH_EVENT,
  LOGOUT_EVENT, removeJwt
} from '../../util/tokenStorage';
import jwtDecode from 'jwt-decode';

export const UserContext = createContext({});

/*
What a decoded jwt looks like
id: 1
username: "youremail@gmail.com"
admin: true
iat: 1582014430
exp: 1582015330
iss: "lagom.life"
*/
export const UserProvider = (props) => {
  const {
    children,
  } = props;

  let decodedJwt = null;
  let history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    addEventListener(eventHandler);
    refreshJwt();
    return () => removeEventListener(eventHandler);
  }, []);

  const eventHandler = event => {
    switch (event) {
      case REFRESH_EVENT:
      case LOGIN_EVENT:
        updateState(getJwt());
        break;
      case LOGOUT_EVENT:
        logout();
        break;
    }
  }

  const updateState = (token) => {
    try {
      decodedJwt = jwtDecode(token);
      setIsLoggedIn(true);
      setIsAdmin(decodedJwt.admin);
    } catch (InvalidTokenError) {
      console.error(InvalidTokenError);
      removeJwt();
    }
  }

  const logout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    history.push('/authentication');
  }

  const userContext = {
    isLoggedIn,
    isAdmin,
  };

  return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>;
};

export const { Consumer } = UserContext;

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
