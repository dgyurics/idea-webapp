// eslint-disable-next-line import/no-cycle
import { refreshJwt as refreshJwtHttp } from './httpClient';

const JWT_STORAGE_NAME = 'jwt';
const eventListeners = [];

export const LOGIN_EVENT = 'login';
export const REFRESH_EVENT = 'refresh';
export const LOGOUT_EVENT = 'logout';

const emitEvent = event => eventListeners.forEach(func => func(event));

export const updateJwt = (jwt) => {
    sessionStorage.setItem(JWT_STORAGE_NAME, jwt);
    emitEvent(REFRESH_EVENT);
};

export const addJwt = (jwt) => {
    sessionStorage.setItem(JWT_STORAGE_NAME, jwt);
    emitEvent(LOGIN_EVENT);
};

export const getJwt = () => sessionStorage.getItem(JWT_STORAGE_NAME);

export const removeJwt = () => {
    sessionStorage.removeItem(JWT_STORAGE_NAME);
    emitEvent(LOGOUT_EVENT);
};

export const addEventListener = func => eventListeners.push(func);

export const removeEventListener = (func) => {
    const index = eventListeners.indexOf(func);
    if (index > -1) eventListeners.splice(index, 1);
};

// refresh token stored as a secure, http-only cookie, therefore we must make a request
// in order to verify whether or not we even have one
export const refreshJwt = () => {
    refreshJwtHttp()
        .then(res => updateJwt(res.data))
        .catch((error) => {
            // 401 means we had a refresh cookie but it was invalid;
            // in which case we would want the user to sign back in again
            if (error?.response.status === 401) {
                removeJwt();
            }
        });
};
