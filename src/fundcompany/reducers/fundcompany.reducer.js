import * as CONSTS from '../constants/fundcompany.constants';
export default (state = {}, action) => {
  switch (action.type) {
    case CONSTS.SENDING_API_REQUEST:
      return { ...state }
    case CONSTS.GET_ALL_FUNDCOMPANYDATA:
      return { ...state, fundcompany: action.payload}
    default:
      return state
  }
}
