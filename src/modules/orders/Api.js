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

export const getOrders = (pars, callback) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.getOrders, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        const {total_count, results} = res.data.data;
        callback(results, total_count);
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const getOrderDetails = (pars) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.getOrderDetails, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        console.log(res.data.data);
        dispatch(setOrderDetails(res.data.data));
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

        dispatch(getOrderDetails(params));
        callback();
      } else {
        alert(res.data.message);
      }
    });
  };
};
