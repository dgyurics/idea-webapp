import axios from 'axios';
import { decodeJwt, getJwt, removeJwt, setJwt } from './jwtUtil';
import store from '../store';
import { REFRESH_JWT_FAIL, REFRESH_JWT_PENDING, REFRESH_JWT_SUCCESS } from '../constants/authTypes';

const transport = axios.create({
  baseURL: `${API_URL}`,
  withCredentials: !PRODUCTION, // disable cross site access control in production
});

export const contactUs = data => transport({
  method: 'post',
  url: '/contact',
  data,
});

export const register = data => transport({
  method: 'post',
  url: '/register',
  data,
});

export const login = data => transport({
  method: 'post',
  url: '/login',
  data,
});

export const logout = () => transport({
  method: 'post',
  url: '/logout',
});

export const forgotPassword = data => transport({
  method: 'post',
  url: '/forgot-password',
  data,
});

export const validateResetCode = (userId, data) => transport({
  method: 'post',
  url: `/forgot-password/valid-reset-code/${userId}`,
  data,
});

export const updatePassword = (userId, data) => transport({
  method: 'post',
  url: `/forgot-password/${userId}`,
  data,
});

export const refreshJwt = () => transport({
  method: 'get',
  url: '/refresh',
});

export const getBooks = () => transport({
  method: 'get',
  url: '/book',
});

export const getProducts = () => transport({
  method: 'get',
  url: '/product',
});

export const addBook = data => transport({
  method: 'put',
  url: '/book',
  data,
});

export const addProduct = data => transport({
  method: 'post',
  url: '/product',
  data,
});

export const updateProduct = (data, productId) => transport({
  method: 'put',
  url: `/product/${productId}`,
  data,
});

export const removeBook = bookId => transport({
  method: 'delete',
  url: `/book/${bookId}`,
});

export const removeProduct = productId => transport({
  method: 'delete',
  url: `/product/${productId}`,
});

transport.interceptors.request.use((config) => {
  const token = getJwt();
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: token ? `Bearer ${token}` : ''
    }
  };
});


transport.interceptors.response.use(response => response, (error) => {
  const path = error?.response?.config ? new URL(error.response.config.url).pathname : null;
  if (error?.response?.status === 401 && path !== '/refresh') {
    // try to get new jwt token (refresh token stored as http only cookie)
    // if success, re-attempt the initial http request
    // if fail, redirect user to login page
    store.dispatch({ type: REFRESH_JWT_PENDING });

    return refreshJwt()
        .then((res) => {
          store.dispatch({
            type: REFRESH_JWT_SUCCESS,
            payload: decodeJwt(res.data)
          });
          setJwt(res.data);
          return transport.request({
            ...error.config,
            headers: { Authorization: `Bearer ${getJwt()}` },
            baseURL: undefined
          });
        })
        .catch(() => {
          store.dispatch({ type: REFRESH_JWT_FAIL });
          removeJwt();
          return new Promise((resolve, reject) => reject(error));
        });
  }
  return new Promise((resolve, reject) => reject(error));
});
