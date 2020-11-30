import {SET_LOADING, SET_TOKEN, LOGOUT_USER} from './ActionTypes';

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
