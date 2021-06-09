import { SET_ALERT, RESET_ALERT } from './types';

export const setAlert = (data) => (dispatch) => {
  dispatch({ type: SET_ALERT, payload: data });
};

export const resetAlert = () => (dispatch) => {
  dispatch({ type: RESET_ALERT });
};
