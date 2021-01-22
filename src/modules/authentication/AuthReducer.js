import {
  SET_LOADING,
  SET_TOKEN,
  SET_DISABLE_LOADING,
  SET_NO_INTERNET,
  SET_API_ERROR,
} from './ActionTypes';

const INITIAL_STATE = {
  loading: false,
  authToken: '',
  disableLoading: false,
  apiError: false,
  noInternet: false,
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
    case SET_NO_INTERNET:
      return {
        ...state,
        noInternet: action.data,
      };
    case SET_API_ERROR:
      return {
        ...state,
        apiError: action.data,
      };
    default:
      return state;
  }
};
export default AuthReducer;
