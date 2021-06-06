import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from './types';
import axios from 'axios';
import { API_URL } from '../../utils/Config';

export const loginUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const res = await axios.post(`${API_URL}/api/v1/auth`, data, {
      headers: { 'Content-type': 'application/json' },
    });

    dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    // Set Local Storage
    localStorage.setItem('token', res.data.token);
  } catch (err) {
    dispatch({ type: LOGIN_FAIL, payload: err.response.data });
  }
};
