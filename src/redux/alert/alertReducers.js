import { SET_ALERT, RESET_ALERT } from './types';

export const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ALERT:
      return { ...state, alert: action.payload };
    case RESET_ALERT:
      return { ...state, alert: {} };
    default:
      return state;
  }
};
