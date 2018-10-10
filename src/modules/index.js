import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import bubbleMaker from './bubbleMaker'

export default combineReducers({
  routing: routerReducer,
  bubbleMaker
})
