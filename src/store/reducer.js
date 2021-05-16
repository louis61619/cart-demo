import { combineReducers } from 'redux'
import { reducer as loginReducer } from './login'
import { reducer as homeReducer } from './home'

const cReducer = combineReducers({
  login: loginReducer,
  home: homeReducer
})

export default cReducer