import { combineReducers } from 'redux'
import authReducer from './authReducer.js'
import ideaReducer from './ideaReducer.js'

export default combineReducers({
  auth: authReducer,
  idea: ideaReducer
})
