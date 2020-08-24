import {
  login as httpLogin,
  logout as httpLogout,
  register as httpRegister,
  forgotPassword as httpForgotPassword,
  validateResetCode as httpValidateResetCode,
  updatePassword as httpUpdatePassword,
  refreshJwt as httpRefreshJwt
} from '../util/httpClient';

export const login = (credentials, cbSuccess, cbFail) => {
  httpLogin(credentials)
    .then((res) => cbSuccess(res))
    .catch(error => cbFail(error));
};

export const refreshJwt = (cbSuccess, cbFail) => {
  httpRefreshJwt()
    .then((res) => cbSuccess(res))
    .catch(error => cbFail(error));
};

export const logout = (cbSuccess, cbFail) => {
  httpLogout()
    .then(() => cbSuccess())
    .catch(error => cbFail(error));
};

export const register = (credentials, cbSuccess, cbFail) => {
  httpRegister(credentials)
    .then((res) => cbSuccess(res))
    .catch(error => cbFail(error));
};

export const forgotPassword = (credentials, cbSuccess, cbFail) => {
  httpForgotPassword(credentials)
    .then(() => cbSuccess())
    .catch(error => cbFail(error));
};

export const validateResetCode = (userId, resetCode, cbSuccess, cbFail) => {
  httpValidateResetCode(userId, { resetCode })
    .then(() => cbSuccess())
    .catch(error => cbFail(error));
};

export const updatePassword = (userId, data, cbSuccess, cbFail) => {
  httpUpdatePassword(userId, data)
    .then(() => cbSuccess())
    .catch(error => cbFail(error));
};
