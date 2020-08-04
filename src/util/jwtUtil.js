import jwtDecode from 'jwt-decode';
const JWT_STORAGE_NAME = 'jwt';

export const decodeJwt = (jwtToken) => jwtDecode(jwtToken);
export const setJwt = (jwt) => sessionStorage.setItem(JWT_STORAGE_NAME, jwt);
export const getJwt = () => sessionStorage.getItem(JWT_STORAGE_NAME);
export const removeJwt = () => sessionStorage.removeItem(JWT_STORAGE_NAME);
export const isExpired = (decodeJwt) => Date.now() >= decodeJwt.exp * 1000;
