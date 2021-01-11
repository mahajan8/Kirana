import {SET_LOADING, SET_TOKEN, SET_DISABLE_LOADING} from './ActionTypes';

const INITIAL_STATE = {
  loading: false,
  authToken: '',
  disableLoading: false,
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
    case SET_DISABLE_LOADING:
      return {
        ...state,
        disableLoading: action.disabled,
      };
    default:
      return state;
  }
};
export default AuthReducer;
