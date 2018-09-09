import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from './types.js'

export const login = (username, password) => (dispatch) => {
  dispatch({type: LOGIN_REQUEST});
  setTimeout(() => {
    if(username === 'test' && password === 'test') {
      dispatch({ type: LOGIN_SUCCESS, payload: {
        loggedIn: true,
        loginError: false,
        sessionId: 123456
      }})
    }
    else
      dispatch({ type: LOGIN_FAILURE, payload: {
        loggedIn: false,
        loginError: true,
        sessionId: ''
      }})
  }, 700);

}

export const logout = (username) => dispatch => {
  dispatch({type: LOGOUT_REQUEST});
  setTimeout(() => dispatch({
    type: LOGOUT_SUCCESS, payload: {
      loggedIn: false,
      loginError: false,
      sessionId: ''
    }
  }), 500);
}
