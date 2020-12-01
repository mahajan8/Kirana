import {combineReducers} from 'redux';
import authReducer from '../modules/authentication/AuthReducer';
import homeReducer from '../modules/home/HomeReducer';

const AppReducers = combineReducers({
  authReducer,
  homeReducer,
});

const rootReducer = (state, action) => {
  // if (action.type === LOGOUT_USER) {
  //   state = undefined;
  // }
  return AppReducers(state, action);
};

export default rootReducer;
