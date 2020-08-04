import * as types from '../constants/authTypes';
import {
  login as httpLogin,
  logout as httpLogout,
  register as httpRegister,
  forgotPassword as httpForgotPassword,
  validateResetCode as httpValidateResetCode,
  updatePassword as httpUpdatePassword
} from '../api/auth';
import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_PENDING,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  REGISTRATION_PENDING,
  REGISTRATION_FAIL,
  REGISTRATION_SUCCESS,
  TOGGLE_HELP_MODAL,
  TOGGLE_REGISTRATION_MODAL,
  FORGOT_PASSWORD_PENDING,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  TOGGLE_FORGOT_PASSWORD_MODAL,
  VALIDATE_RESET_CODE_PENDING,
  VALIDATE_RESET_CODE_SUCCESS,
  VALIDATE_RESET_CODE_FAIL,
  TOGGLE_RESET_CODE_MODAL,
  UPDATE_PASSWORD_PENDING,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,
  LOAD_LOCAL_JWT_PENDING,
  LOAD_LOCAL_JWT_SUCCESS,
  LOAD_LOCAL_JWT_FAIL,
  LOAD_LOCAL_JWT_EXPIRED
} from '../constants/authTypes';
import { decodeJwt, getJwt, isExpired, removeJwt, setJwt } from '../util/jwtUtil';
import { REFRESH_JWT_PENDING } from '../constants/authTypes';

export const init = () => (dispatch) => {
  dispatch({ type: LOAD_LOCAL_JWT_PENDING });
  const jwtToken = getJwt();

  if (!jwtToken)
    return dispatch({ type: LOAD_LOCAL_JWT_FAIL });

  const decodedJwt = decodeJwt(jwtToken);

  if (isExpired(decodedJwt))
    return dispatch({ type: LOAD_LOCAL_JWT_EXPIRED });

  return dispatch({
    type: LOAD_LOCAL_JWT_SUCCESS,
    payload: decodedJwt
  });
};

export const login = (credentials) => (dispatch) => {
  dispatch({ type: types.LOGIN_PENDING });
  return httpLogin(
    credentials,
    (res) => {
      // refresh-token added as http-only cookie
      setJwt(res.data);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: decodeJwt(res.data)
      });
    },
    (error) => {
      removeJwt();
      dispatch({
        type: LOGIN_FAIL,
        payload: error
      });
    }
  );
};

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT_PENDING });
  return httpLogout(
    () => {
      removeJwt();
      dispatch({ type: LOGOUT_SUCCESS });
    },
    (error) => dispatch({
      type: LOGOUT_FAIL,
      payload: error
    })
  );
};

export const register = (credentials) => (dispatch) => {
  dispatch({ type: REGISTRATION_PENDING });
  return httpRegister(
    credentials,
    (res) => {
      // refresh-token added as http-only cookie
      setJwt(res.data);
      dispatch({
        type: REGISTRATION_SUCCESS,
        payload: decodeJwt(res.data)
      });
    },
    (error) => {
      removeJwt();
      dispatch({
        type: REGISTRATION_FAIL,
        payload: error
      });
    }
  );
};

export const forgotPassword = (credentials) => (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_PENDING });
  return httpForgotPassword(
    credentials,
    () => {
      dispatch({ type: FORGOT_PASSWORD_SUCCESS });
    },
    (error) => dispatch({
      type: FORGOT_PASSWORD_FAIL,
      payload: error
    })
  );
};

export const validateResetCode = (userId, code) => (dispatch) => {
  dispatch({
    type: VALIDATE_RESET_CODE_PENDING,
    payload: code
  });
  return httpValidateResetCode(
    userId,
    code,
    () => {
      dispatch({ type: VALIDATE_RESET_CODE_SUCCESS });
    },
    (error) => dispatch({
      type: VALIDATE_RESET_CODE_FAIL,
      payload: error
    })
  );
};

export const updatePassword = (userId, credentials) => (dispatch) => {
  dispatch({ type: UPDATE_PASSWORD_PENDING });
  return httpUpdatePassword(
    userId,
    credentials,
    () => {
      dispatch({ type: UPDATE_PASSWORD_SUCCESS });
    },
    (error) => dispatch({
      type: UPDATE_PASSWORD_FAIL,
      payload: error
    })
  );
};

export const toggleHelpModal = (optionalUserId) => (dispatch) => {
  dispatch({ type: TOGGLE_HELP_MODAL });
  if (optionalUserId) {
    dispatch({
      type: TOGGLE_RESET_CODE_MODAL,
      payload: optionalUserId
    });
  }
};

export const toggleRegistrationModal = () => ({ type: TOGGLE_REGISTRATION_MODAL });
export const toggleForgotPassword = () => ({ type: TOGGLE_FORGOT_PASSWORD_MODAL });
