
import * as actionTypes from './constants'
import { orders } from '@/common/constants'

const defaultState = {
  orderList: orders.map(x => {
    x.id = + new Date() + Math.random()
    return x
  })
}

function reducer(state=defaultState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_ORDER_ATCION:
      return {...state, orderList: action.list}
    default:
      return state
  } 
}

export default reducer;