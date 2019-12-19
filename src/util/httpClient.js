import axios from 'axios';

// disable cross site access control in production
const transport = axios.create({
  withCredentials: !PRODUCTION,
});

export const contactUs = data => transport({
  method: 'post',
  url: `${API_URL}/contact`,
  data,
});

export const register = data => transport({
  method: 'post',
  url: `${API_URL}/register`,
  data,
});

export const login = params => transport({
  method: 'post',
  url: `${API_URL}/login`,
  params,
});

export const logout = () => transport({
  method: 'post',
  url: `${API_URL}/logout`,
});

export const forgotPassword = data => transport({
  method: 'post',
  url: `${API_URL}/forgot-password`,
  data,
});

export const isValidResetCode = (userId, data) => transport({
  method: 'post',
  url: `${API_URL}/forgot-password/valid-reset-code/${userId}`,
  data,
});

export const resetPassword = (userId, data) => transport({
  method: 'post',
  url: `${API_URL}/forgot-password/${userId}`,
  data,
});

export const getAuthorities = () => transport({
  method: 'get',
  url: `${API_URL}/authorities`,
});

export const getBooks = () => transport({
  method: 'get',
  url: `${API_URL}/book`,
});

export const addBook = data => transport({
  method: 'put',
  url: `${API_URL}/book`,
  data,
});

export const removeBook = bookId => transport({
  method: 'delete',
  url: `${API_URL}/book/${bookId}`,
});
