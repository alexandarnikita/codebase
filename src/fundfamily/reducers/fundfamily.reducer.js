
import * as CONSTS from '../constants/fundfamily.constants';

export default (state = {}, action) => {
  switch (action.type) {
    case CONSTS.SENDING_API_REQUEST:
      return { ...state }
    case CONSTS.GET_ALL_FUNDFAMILYDATA:
      return { ...state, fundfamily: action.payload}
    default:
      return state
  }
}
