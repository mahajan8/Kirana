import {combineReducers} from 'redux';
import authReducer from '../modules/authentication/AuthReducer';
import homeReducer from '../modules/home/HomeReducer';
import navigationReducer from '../modules/navigation/NavigationReducer';

const AppReducers = combineReducers({
  authReducer,
  homeReducer,
  navigationReducer,
});

const rootReducer = (state, action) => {
  // if (action.type === LOGOUT_USER) {
  //   state = undefined;
  // }
  return AppReducers(state, action);
};

export default rootReducer;
