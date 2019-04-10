
import * as CONSTS from '../constants/productclass.constants';

export default (state = {}, action) => {
  switch (action.type) {
    case CONSTS.SENDING_API_REQUEST:
      return { ...state }
    case CONSTS.GET_ALL_PRODUCTCLASSDATA:
      return { ...state, productclass: action.payload}
    default:
      return state
  }
}
