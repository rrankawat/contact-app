import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { loginUserReducer } from './redux/auth/authReducers';
import { alertReducer } from './redux/alert/alertReducers';

const reducer = combineReducers({
  loginUser: loginUserReducer,
  alerts: alertReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
