import {
  GET_CONVERSATION_REQUEST,
  GET_CONVERSATION_SUCCESS,
  GET_CONVERSATION_FAILURE,
  GET_CONVERSATION_METADATA_REQUEST,
  GET_CONVERSATION_METADATA_SUCCESS,
  GET_CONVERSATION_METADATA_FAILURE,
  CREATE_MESSAGE_REQUEST,
  CREATE_MESSAGE_SUCCESS,
  CREATE_MESSAGE_FAILURE,
  CLEAR_CONVERSATION
} from './types.js'

export const createMessage = (ideaId, message, authorId) => dispatch => {
  dispatch({type: CREATE_MESSAGE_REQUEST});

  setTimeout(() => {
    const newMessage = {
      id: ideaId,
      author: authorId,
      message: message
    }
    dispatch({
      type: CREATE_MESSAGE_SUCCESS,
      payload: newMessage
    })
  }, 1000)
}

export const getConversation = (ideaId) => dispatch => {
  dispatch({type: GET_CONVERSATION_REQUEST});
  setTimeout(() => dispatch({
    type: GET_CONVERSATION_SUCCESS,
    payload: conversation
  }), 3000)
}

export const getConversationMetaData = (conversationId) => dispatch => {
  dispatch({type: GET_CONVERSATION_METADATA_REQUEST})
  setTimeout(() => dispatch({
    type: GET_CONVERSATION_METADATA_SUCCESS,
    payload: {
      title: 'Your Idea Title',
      created: Date.now(),
      updated: Date.now()
    }
  }), 5000)
}

export const clearConversation = () => dispatch => {
  dispatch({type: CLEAR_CONVERSATION})
}

const conversation = [
  {id: 123, author: 'dennis gyurics', message: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\''},
  {id: 123, author: 'dennis gyurics', message: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'},
  {id: 123, author: 'dennis gyurics', message: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'},
  {id: 123, author: 'dennis gyurics', message: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'},
  {id: 123, author: 'dennis gyurics', message: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'},
  {id: 123, author: 'dennis gyurics', message: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.'},
]