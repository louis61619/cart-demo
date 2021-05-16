import * as actionTypes from './constants'

export const changeOrderAction = (list) => ({
  type: actionTypes.CHANGE_ORDER_ATCION,
  list
})