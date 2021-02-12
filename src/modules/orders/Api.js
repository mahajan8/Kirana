/* eslint-disable no-alert */
import {Urls} from '../../utils/utility/Urls';
import {getFormBody} from '../../utils/utility/Utils';
import instance from '../../utils/AxiosInstance';
import {
  setAlternateDetails,
  setAlternativeStores,
  setOrderDetails,
} from './OrderActions';
import {setCartDetails} from '../cart/CartActions';
import {Actions} from 'react-native-router-flux';
import {getUserDetails} from '../home/Api';
import axios from 'axios';
import {selectStore} from '../home/HomeActions';
import {AppConfig} from '../../config/AppConfig';
import {environment} from '../../config/EnvConfig';
import moment from 'moment';
import {setLoading} from '../authentication/AuthActions';

export const getOrders = (pars, callback) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.getOrders, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        const {total_count, results} = res.data.data;
        // Return orders and total count of orders
        callback(results, total_count);
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const getOrderDetails = (pars, callback) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.getOrderDetails, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        // Set details in OrderReducer
        const {data} = res.data;
        dispatch(setOrderDetails(data));
        let startTimeToken =
          moment(data.delivery?.delivery_start_time).unix() * 10000000;
        if (callback) {
          callback(startTimeToken);
        }
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const cancelOrder = (pars, callback) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.cancelOrder, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        callback();
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const getAlternativeStores = (pars, callback) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.getStoresByOrderId, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        let {
          store_list,
          store_count,
          product_list,
          delivery_location,
        } = res.data.data;

        dispatch(setAlternativeStores(store_list, store_count));
        dispatch(setAlternateDetails(product_list, delivery_location));
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const repeatOrder = (pars, callback) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.repeatOrderToCart, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        const {cart} = res.data.data;
        // Set Cart Items and navigate to cart
        dispatch(selectStore(cart.store));
        dispatch(setCartDetails(cart));
        Actions.cart();
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const acceptRejectOrder = (pars, callback) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.acceptRejectOrder, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        let params = {
          order_id: pars.order_id,
        };
        // Get updated order details
        dispatch(getOrderDetails(params));
        callback();
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const submitOrderRating = (pars, callback) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.submitOrderRating, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        dispatch(getUserDetails());
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const getDirectionsPolyline = (pars, callback, err) => {
  return (dispatch) => {
    let {initial, final} = pars;

    let params = {
      origin: initial.latitude + ',' + initial.longitude,
      destination: final.latitude + ',' + final.longitude,
      key: AppConfig[environment].googlePlacesKey,
      // key: 'AIzaSyCaZ-qdhBgi_kndrL-2CCzLCL8rLn86eUY',
    };

    var data =
      '?' +
      Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&');
    dispatch(setLoading(true));
    axios
      .get(Urls.googlePolyline + data)
      .then((res) => {
        dispatch(setLoading(false));
        callback(res.data);
      })
      .catch((error) => {
        dispatch(setLoading(false));
        if (err) {
          err(error);
        }
      });
  };
};
