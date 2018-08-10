import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './types.js'

export function login() {
  return function(dispatch) {
    setTimeout(() => dispatch({
      type: LOGIN_REQUEST,
      payload: {sessionId: '23213123123'}
    }), 3000);
  }
}

export const loginV2 = () => dispatch => {
  console.log('loginv2 called')
  setTimeout(() => dispatch({
    type: LOGIN_REQUEST,
    payload: {sessionId: '23213123123'}
  }), 3000);
}

export const logout = (username) => dispatch => {
    console.log('logging out ' + username)
    setTimeout(() => dispatch({
      type: LOGOUT_REQUEST
    }), 2000);
}
