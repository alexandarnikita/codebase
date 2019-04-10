import { history } from '../../_helpers';
import * as CONSTS from '../constants/matrix.constants';
import CONFIG from '../constants/config.json';
import axios from 'axios';

export const getMatrix = () => {
return (dispatch) => {
  const matrixURL = `${CONFIG.API_URL}/api/ratematrix/results`;
  axios.get(`${'https://cors-anywhere.herokuapp.com/'}${CONFIG.API_URL}/api/ratematrix/results`)
    .then((res) => {
      dispatch({ type: CONSTS.GET_ALL_MATRIXDATA, payload: res.data });
    })
    .catch((error) => {
      dispatch({ type: CONSTS.GET_ALL_MATRIXDATA, payload: error });
    })
  }
}