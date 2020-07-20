import * as types from '../constants/authTypes';

export const login = () => ({ type: types.GET_BOOKS });
export const logout = book => ({ type: types.ADD_BOOK, book });
export const register = book => ({ type: types.REMOVE_BOOK, book });
export const resetPassword = book => ({ type: types.REMOVE_BOOK, book });
export const resetCode = book => ({ type: types.REMOVE_BOOK, book });
export const refreshJwt = () => ({});
