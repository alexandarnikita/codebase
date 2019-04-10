import { history } from '../../_helpers';
import * as CONSTS from '../constants/productclass.constants';
import CONFIG from '../constants/config.json';
import axios from 'axios';

export const getProductclass = () => {
return (dispatch) => {
  const productclassURL = `${CONFIG.API_URL}/api/mutualfunds/productclass`;
  axios.get(`${'https://cors-anywhere.herokuapp.com/'}${CONFIG.API_URL}/api/mutualfunds/productclass`)
    .then((res) => {
      dispatch({ type: CONSTS.GET_ALL_PRODUCTCLASSDATA, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: CONSTS.GET_ALL_PRODUCTCLASSDATA, payload: error });
    })
  }
}