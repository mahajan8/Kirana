import {combineReducers} from 'redux';
import authReducer from '../modules/authentication/AuthReducer';

const AppReducers = combineReducers({
  authReducer,
});

const rootReducer = (state, action) => {
  // if (action.type === LOGOUT_USER) {
  //   state = undefined;
  // }
  return AppReducers(state, action);
};

export default rootReducer;
