/* eslint-disable no-alert */
import {Urls} from '../../utils/utility/Urls';
import {getFormBody} from '../../utils/utility/Utils';
import instance from '../../utils/AxiosInstance';
import {setActiveOrders, setAlternativeStores, setOrderDetails, setPastOrders} from './OrderActions';

export const getOrders = (pars, callback) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.getOrders, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        const {total_count, results} = res.data.data;
        console.log(res.data.data);
        if (pars.start === -1) {
          dispatch(setActiveOrders(results));
        } else {
          dispatch(setPastOrders(results, total_count));
        }
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
        let {store_list, store_count, product_list} = res.data.data;
        dispatch(setAlternativeStores(store_list, store_count));
        callback(product_list);
      } else {
        alert(res.data.message);
      }
    });
  };
};
