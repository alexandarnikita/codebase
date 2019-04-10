import { history } from '../../_helpers';
import * as CONSTS from '../constants/funddetail.constants';
import CONFIG from '../constants/config.json';
import axios from 'axios';
export const getFunddetail= () => {
return (dispatch) => {
  const funddetailURL = `${CONFIG.API_URL}/api/mutualfunds/funddetails`;
  axios.get(`${'https://cors-anywhere.herokuapp.com/'}${CONFIG.API_URL}/api/mutualfunds/funddetails`)
    .then((res) => {
      dispatch({ type: CONSTS.GET_ALL_FUNDDETAILDATA, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: CONSTS.GET_ALL_FUNDDETAILDATA, payload: error });
    })
  }
}