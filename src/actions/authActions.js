import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from './types.js'

export const login = () => (dispatch) => {
  dispatch({type: LOGIN_REQUEST});
  setTimeout(() => dispatch({
    type: LOGIN_SUCCESS,
    payload: {sessionId: '23213123123'}
  }), 3000);
}

export const logout = (username) => dispatch => {
  dispatch({type: LOGOUT_REQUEST});
  setTimeout(() => dispatch({
    type: LOGOUT_SUCCESS
  }), 2000);
}
