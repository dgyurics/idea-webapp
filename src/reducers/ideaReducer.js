import {
  GET_IDEAS_SUCCESS
} from '../actions/types'

const initialState = {
  ideas: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_IDEAS_SUCCESS:
      return {
        ...state,
        ideas: action.payload
      }
    default:
      return state;
  }
}
