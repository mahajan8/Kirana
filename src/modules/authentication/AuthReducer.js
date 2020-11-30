import {SET_LOADING, SET_TOKEN} from './ActionTypes';

const INITIAL_STATE = {
  loading: false,
  authToken: '',
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case SET_TOKEN:
      return {
        ...state,
        authToken: action.token,
      };
    default:
      return state;
  }
};
export default AuthReducer;
