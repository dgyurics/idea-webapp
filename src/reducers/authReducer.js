import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGIN_CLEAR_ERRORS
}
from '../actions/types'

const initialState = {
  loggedIn: false,
  loginError: false,
  sessionId: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: action.payload.loggedIn,
        sessionId: action.payload.sessionId,
        loginError: action.payload.loginError
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginError: action.payload.loginError
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: action.payload.loggedIn,
        sessionId: action.payload.sessionId
      }
    case LOGIN_CLEAR_ERRORS:
      return {
        ...state,
        loginError: action.payload.loginError
      }
    default:
      return state;
  }
}
