import axios from 'axios';

export const contactUs = data => axios({
    method: 'post',
    url: `${API_URL}/contact`,
    data,
});

export const register = data => axios({
    method: 'post',
    url: `${API_URL}/register`,
    data,
});

export const login = params => axios({
    method: 'post',
    url: `${API_URL}/login`,
    params,
});

export const logout = () => axios({
    method: 'post',
    url: `${API_URL}/logout`,
});

export const forgotPassword = data => axios({
  method: 'post',
  url: `${API_URL}/forgot-password`,
  data,
});

export const isValidResetCode = (userId, data) => axios({
  method: 'post',
  url: `${API_URL}/forgot-password/valid-reset-code/${userId}`,
  data,
});

export const resetPassword = (userId, data) => axios({
  method: 'post',
  url: `${API_URL}/forgot-password/${userId}`,
  data,
});

export const getBooks = () => axios({
  method: 'get',
  url: `${API_URL}/book`,
});
