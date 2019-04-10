import { history } from '../../_helpers';
import * as CONSTS from '../constants/fundcompany.constants';
import CONFIG from '../constants/config.json';
import axios from 'axios';
export const getFundcompany= () => {
return (dispatch) => {
  const fundcompanyURL = `${CONFIG.API_URL}/api/mutualfunds/fundcompany`;
  axios.get(`${'https://cors-anywhere.herokuapp.com/'}${CONFIG.API_URL}/api/mutualfunds/fundcompany`)
    .then((res) => {
      dispatch({ type: CONSTS.GET_ALL_FUNDCOMPANYDATA, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: CONSTS.GET_ALL_FUNDCOMPANYDATA, payload: error });
    })
  }
}