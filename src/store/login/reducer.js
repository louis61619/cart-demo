import * as actionTypes from './constants'

const defaultState = {
  isLogin: false
}

function reducer(state=defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN_STATE:
      return {...state, isLogin: action.state}
    default:
      return state
  }
}

export default reducer;