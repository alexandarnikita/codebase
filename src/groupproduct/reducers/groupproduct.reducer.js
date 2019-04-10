import * as CONSTS from '../constants/groupproduct.constants';
export default (state = {}, action) => {
  switch (action.type) {
    case CONSTS.SENDING_API_REQUEST:
      return { ...state }
    case CONSTS.GET_ALL_GROUPPRODUCTDATA:
      return { ...state, groupproduct: action.payload}
    default:
      return state
  }
}
