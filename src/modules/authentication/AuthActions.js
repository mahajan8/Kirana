import {
  SET_LOADING,
  SET_TOKEN,
  LOGOUT_USER,
  SET_DISABLE_LOADING,
  SET_NO_INTERNET,
  SET_API_ERROR,
} from './ActionTypes';

export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});

export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const setDisableLoading = (disabled) => ({
  type: SET_DISABLE_LOADING,
  disabled,
});

export const setNoInternet = (data) => ({
  type: SET_NO_INTERNET,
  data,
});

export const setApiError = (data) => ({
  type: SET_API_ERROR,
  data,
});
