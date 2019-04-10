import { history } from '../../_helpers';
import * as CONSTS from '../constants/fundfamily.constants';
import CONFIG from '../constants/config.json';
import axios from 'axios';

export const getFundfamily = () => {
return (dispatch) => {
  const fundfamilyURL = `${CONFIG.API_URL}/api/mutualfunds/fundfamily`;
  axios.get(`${'https://cors-anywhere.herokuapp.com/'}${CONFIG.API_URL}/api/mutualfunds/fundfamily`)
    .then((res) => {
      dispatch({ type: CONSTS.GET_ALL_FUNDFAMILYDATA, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: CONSTS.GET_ALL_FUNDFAMILYDATA, payload: error });
    })
  }
}