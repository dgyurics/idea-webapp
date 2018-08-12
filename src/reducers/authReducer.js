import { LOGIN_SUCCESS, LOGOUT_REQUEST } from '../actions/types'

const initialState = {
  loggedIn: false,
  sessionId: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
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
