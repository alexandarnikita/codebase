import * as CONSTS from '../constants/funddetail.constants';
export default (state = {}, action) => {
  switch (action.type) {
    case CONSTS.SENDING_API_REQUEST:
      return { ...state }
    case CONSTS.GET_ALL_FUNDDETAILDATA:
      return { ...state, funddetail: action.payload}
    default:
      return state
  }
}
