import {
  CREATE_IDEA_SUCCESS,
  GET_IDEAS_SUCCESS
} from '../actions/types'

const initialState = {
  ideas: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case CREATE_IDEA_SUCCESS:
      return {
        ...state,
        ideas: [...state.ideas, action.payload]
      }
    case GET_IDEAS_SUCCESS:
      return {
        ...state,
        ideas: action.payload
      }
    default:
      return state;
  }
}
