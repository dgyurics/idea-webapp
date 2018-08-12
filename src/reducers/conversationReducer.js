import { GET_CONVERSATION_SUCCESS } from '../actions/types'

const initialState = {
  conversation: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_CONVERSATION_SUCCESS:
      return {
        ...state,
        conversation: action.payload
      }
    default:
      return state;
  }
}
