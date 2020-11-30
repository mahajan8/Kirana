import {combineReducers} from 'redux';

const AppReducers = combineReducers({

});

const rootReducer = (state, action) => {
  // if (action.type === LOGOUT_USER) {
  //   state = undefined;
  // }
  return AppReducers(state, action);
};

export default rootReducer;
