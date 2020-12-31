import axios from 'axios';
import {Actions} from 'react-native-router-flux';
// import {
//   loading,
//   noInternet,
//   apiError,
//   disableLoading,
// } from '../modules/commons/error/Actions';
import {AppConfig} from '../config/AppConfig';
import {environment} from '../config/EnvConfig';
import {getAuthToken} from './utility/LocalStore';
import store from './Store';
import {
  setLoading,
  setDisableLoading,
} from '../modules/authentication/AuthActions';
// import {toggleCommentLoading} from '../modules/home/Actions';

const instance = axios.create({
  baseURL: AppConfig[environment].baseUrl,
  timeout: 30000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'},
});
instance.interceptors.request.use(
  async (config) => {
    let {disableLoading, authToken} = store.getState().authReducer;

    // if (!store.getState().errorReducer.disable) {
    //   dispatch(loading(true));
    // }
    // console.log(config)
    console.log(store.getState().authReducer);
    if (!disableLoading) {
      dispatch(setLoading(true));
    }
    if (authToken) {
      config.headers.Authorization = authToken;
    } else {
      config.headers.Authorization = await getAuthToken();
    }
    return config;
  },
  (error) => {
    console.log(error);
    let {disableLoading} = store.getState().authReducer;

    if (disableLoading) {
      dispatch(setDisableLoading(false));
    } else {
      dispatch(setLoading(false));
    }
    // if (!store.getState().errorReducer.disable) {
    //   dispatch(loading(false));
    // } else {
    //   dispatch(disableLoading(false));
    // }
    return Promise.reject(error);
  },
);

const UNAUTHORIZED = 401;
const API_ERROR = 500;
const NETWORK_ERROR = 'Network Error';

const {dispatch} = store;
instance.interceptors.response.use(
  (response) => {
    let {disableLoading} = store.getState().authReducer;

    // if (!store.getState().errorReducer.disable) {
    //   dispatch(loading(false));
    // } else {
    //   dispatch(disableLoading(false));
    // }
    if (disableLoading) {
      dispatch(setDisableLoading(false));
    } else {
      dispatch(setLoading(false));
    }
    return response;
  },
  function (error) {
    console.log('SERVER', error);
    let {disableLoading} = store.getState().authReducer;

    // if (!store.getState().errorReducer.disable) {
    //   dispatch(loading(false));
    // } else {
    //   dispatch(disableLoading(false));
    // }
    // if (store.getState().homeReducer.commentLoading) {
    //   dispatch(toggleCommentLoading());
    // }
    // if (error.code === 'ECONNABORTED') {
    //   dispatch(apiError(true));
    // } else if (error.message === NETWORK_ERROR) {
    //   dispatch(noInternet(true));
    // } else if (error.response.status === API_ERROR) {
    //   dispatch(apiError(true));
    // } else if (error.response.status === UNAUTHORIZED) {
    //   dispatch(apiError(true));
    // } else {
    //   dispatch(apiError(true));
    // }
    if (disableLoading) {
      dispatch(setDisableLoading(false));
    } else {
      dispatch(setLoading(false));
    }
  },
);

export default instance;
