import {
  GET_IDEAS_SUCCESS,
  GET_IDEA_METADATA_SUCCESS
} from '../actions/types'

const initialState = {
  ideas: [],
  title: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_IDEAS_SUCCESS:
      return {
        ...state,
        ideas: action.payload
      }
    case GET_IDEA_METADATA_SUCCESS:
      return {
        ...state,
        title: action.payload.title
      }
    default:
      return state;
  }
}
