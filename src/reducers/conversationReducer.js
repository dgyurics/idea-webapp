import {
  GET_CONVERSATION_SUCCESS,
  GET_CONVERSATION_METADATA_SUCCESS,
  CLEAR_CONVERSATION,
  CREATE_MESSAGE_SUCCESS
} from '../actions/types'

const initialState = {
  conversation: [],
  title: '',
  created: null,
  updated: null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_CONVERSATION_SUCCESS:
      return {
        ...state,
        conversation: action.payload
      }
    case GET_CONVERSATION_METADATA_SUCCESS:
      return {
        ...state,
        title: action.payload.title,
        created: action.payload.created,
        updated: action.payload.updated
      }
    case CREATE_MESSAGE_SUCCESS:
      return {
        ...state,
        conversation: [...state.conversation, action.payload]
      }
    case CLEAR_CONVERSATION:
      return initialState
    default:
      return state;
  }
}
