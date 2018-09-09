import {
  GET_CONVERSATION_SUCCESS,
  CREATE_MESSAGE_SUCCESS,
  CLEAR_CONVERSATION
} from '../actions/types'

const initialState = {
  conversation: {
    title: "",
    messages: []
  }
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_CONVERSATION_SUCCESS:
      return {
        ...state,
        conversation: action.payload
      }
    case CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        conversation: {
          ...state.conversation,
          messages: [...state.conversation.messages, action.payload]
        }
      }
    case CLEAR_CONVERSATION:
      return initialState
    default:
      return state;
  }
}
