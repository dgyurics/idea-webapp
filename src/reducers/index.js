import { combineReducers } from 'redux'
import authReducer from './authReducer.js'
import ideaReducer from './ideaReducer.js'
import conversationReducer from './conversationReducer'

export default combineReducers({
  auth: authReducer,
  idea: ideaReducer,
  conversation: conversationReducer
})
