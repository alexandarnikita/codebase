
import * as CONSTS from '../constants/matrix.constants';

export default (state = {}, action) => {
  switch (action.type) {
    case CONSTS.SENDING_API_REQUEST:
      return { ...state }
    case CONSTS.GET_ALL_MATRIXDATA:
      return { ...state, matrix: action.payload}
    default:
      return state
  }
}
