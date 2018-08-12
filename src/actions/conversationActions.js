import { GET_CONVERSATION_SUCCESS } from './types.js'

export const getConversation = (ideaId) => dispatch => {
  setTimeout(() => dispatch({
    type: GET_CONVERSATION_SUCCESS,
    payload: conversation
  }), 3000)
}

const conversation = [
  {id: 123, author: 'dennis gyurics', message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\''},
  {id: 123, author: 'dennis gyurics', message: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'},
  {id: 123, author: 'dennis gyurics', message: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'},
  {id: 123, author: 'dennis gyurics', message: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'},
  {id: 123, author: 'dennis gyurics', message: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'},
  {id: 123, author: 'dennis gyurics', message: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'},
]
