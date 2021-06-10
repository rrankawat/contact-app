import {
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
} from './types';
import axios from 'axios';
import { API_URL } from '../../utils/Config';

export const contactCreate = (data) => async (dispatch) => {
  try {
    dispatch({ type: ADD_CONTACT_REQUEST });

    const config = {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post(`${API_URL}/api/v1/contacts`, data, config);

    console.log(res.data);

    dispatch({ type: ADD_CONTACT_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: ADD_CONTACT_FAIL, payload: err.response.data });
  }
};
