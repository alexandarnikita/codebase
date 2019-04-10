import { history } from '../../_helpers';
import * as CONSTS from '../constants/groupproduct.constants';
import CONFIG from '../constants/config.json';
import axios from 'axios';
export const getGroupproduct = () => {
return (dispatch) => {
  const groupproductURL = `${CONFIG.API_URL}/api/mutualfunds/grpassociation`;
  axios.get(`${'https://cors-anywhere.herokuapp.com/'}${CONFIG.API_URL}/api/mutualfunds/grpassociation`)
    .then((res) => {
      dispatch({ type: CONSTS.GET_ALL_GROUPPRODUCTDATA, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: CONSTS.GET_ALL_GROUPPRODUCTDATA, payload: error });
    })
  }
}