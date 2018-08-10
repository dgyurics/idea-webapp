import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST } from '../actions/types'

const initialState = {
  loggedIn: false,
  sessionId: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case LOGIN_REQUEST:
      console.log('reducer')
      return {
        ...state,
        sessionId: action.payload.sessionId
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        loggedIn: false
      }
    default:
      return state;
  }
}
