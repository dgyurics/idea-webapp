import {
  GET_IDEAS_REQUEST,
  GET_IDEAS_SUCCESS,
  CREATE_IDEA_REQUEST,
  CREATE_IDEA_SUCCESS
} from './types.js'

export const getIdeas = () => dispatch => {
  dispatch({type: GET_IDEAS_REQUEST})
  setTimeout(() => dispatch({
      type: GET_IDEAS_SUCCESS,
      payload: ideas
    }), 500)
}

export const createIdea = (ideaObj) => dispatch => {
  dispatch({type: CREATE_IDEA_REQUEST})
  setTimeout(() => dispatch({
      type: CREATE_IDEA_SUCCESS,
      payload: {id: 1234, title: ideaObj.title, author: 'Oscar Øslo'}
  }), 1000)
}

const ideas = [
  {id: 4544, title: 'Architecture & Engineering', author: 'Dennis Gyurics'},
  {id: 3234, title: 'Politics', author: 'John Doe'},
  {id: 5555, title: 'Space X mission to mars', author: 'Elon Musk'},
  {id: 2333, title: 'A really really long title that tries to break the CSS styling', author: 'Russian Hacker'},
  {id: 1233, title: 'Shoes', author: 'Violet Zaban'},
  {id: 1233, title: 'Architecture & Engineering', author: 'Dennis Gyurics'}
]
