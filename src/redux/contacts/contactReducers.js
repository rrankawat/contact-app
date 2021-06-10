import {
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAIL,
} from './types';

export const contactCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CONTACT_REQUEST:
      return { ...state, loading: true };
    case ADD_CONTACT_SUCCESS:
      return { ...state, loading: false, contact: action.payload };
    case ADD_CONTACT_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
