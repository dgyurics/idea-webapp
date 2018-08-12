import { GET_IDEAS_SUCCESS, CREATE_IDEA_SUCCESS } from './types.js'

export const getIdeas = () => dispatch => {
  setTimeout(() => dispatch({
      type: GET_IDEAS_SUCCESS,
      payload: ideas
    }), 3000)
}

export const createIdea = (ideaObj) => dispatch => {
  setTimeout(() => dispatch({
      type: CREATE_IDEA_SUCCESS,
      payload: {...ideaObj, id: 1234}
  }))
}

const ideas = [
  {id: 4544, title: 'Architecture & Engineering', author: 'Dennis Gyurics'},
  {id: 3234, title: 'Architecture & Engineering', author: 'Dennis Gyurics'},
  {id: 5555, title: 'Architecture & Engineering', author: 'Dennis Gyurics'},
  {id: 2333, title: 'Architecture & Engineering', author: 'Dennis Gyurics'},
  {id: 1233, title: 'Architecture & Engineering', author: 'Dennis Gyurics'},
  {id: 1233, title: 'Architecture & Engineering', author: 'Dennis Gyurics'}
]
