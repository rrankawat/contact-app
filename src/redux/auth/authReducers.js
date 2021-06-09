import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from './types';

export const loginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
