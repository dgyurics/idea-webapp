import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './types.js'

export const loginV2 = () => (dispatch) => {
  setTimeout(() => dispatch({
    type: LOGIN_SUCCESS,
    payload: {sessionId: '23213123123'}
  }), 3000);
}

export const logout = (username) => dispatch => {
    setTimeout(() => dispatch({
      type: LOGOUT_REQUEST
    }), 2000);
}
