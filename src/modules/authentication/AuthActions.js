import {
  SET_LOADING,
  SET_TOKEN,
  LOGOUT_USER,
  SET_DISABLE_LOADING,
  SET_NO_INTERNET,
  SET_API_ERROR,
  SET_TEST,
  SET_NOTIFICATION_PAYLOAD,
} from './ActionTypes';

// Set Loading in Auth Reducer
export const setLoading = (loading) => ({
  type: SET_LOADING,
  loading,
});

// Set Token in Auth Reducer
export const setToken = (token) => ({
  type: SET_TOKEN,
  token,
});

// Logout User
export const logoutUser = () => ({
  type: LOGOUT_USER,
});

// Set Disable Loading in Auth Reducer
export const setDisableLoading = (disabled) => ({
  type: SET_DISABLE_LOADING,
  disabled,
});

// Set No Internet Available in Auth Reducer
export const setNoInternet = (data) => ({
  type: SET_NO_INTERNET,
  data,
});

// Set Api Error in Auth Reducer
export const setApiError = (data) => ({
  type: SET_API_ERROR,
  data,
});

// Set Api Error in Auth Reducer
export const setNotificationPayload = (data) => ({
  type: SET_NOTIFICATION_PAYLOAD,
  data,
});
