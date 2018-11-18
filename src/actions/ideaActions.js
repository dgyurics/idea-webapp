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
  {id: 4544, title: 'Nature', author: 'Dennis Gyurics', imgUrl: 'https://images.pexels.com/photos/1005261/pexels-photo-1005261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  {id: 2333, title: 'Exercise', author: 'Russian Hacker', imgUrl: 'https://images.pexels.com/photos/258045/pexels-photo-258045.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'},
  {id: 3332, title: 'Space', author: 'Russian Hacker', imgUrl: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
  {id: 3234, title: 'Diet', author: 'John Doe', imgUrl: 'https://images.pexels.com/photos/5876/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350'},
  {id: 5555, title: 'Relaxation', author: 'Elon Musk', imgUrl: 'https://images.pexels.com/photos/92870/pexels-photo-92870.jpeg?auto=compress&cs=tinysrgb&h=350'},
  {id: 1239, title: 'Relationships', author: 'Violet Zaban', imgUrl: 'https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350'},
  {id: 1233, title: 'Knowledge', author: 'Dennis Gyurics', imgUrl: 'https://images.pexels.com/photos/34592/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=350'}
]
