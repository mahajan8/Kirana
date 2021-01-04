/* eslint-disable no-alert */
import {Urls} from '../../utils/utility/Urls';
import {getFormBody} from '../../utils/utility/Utils';
import instance from '../../utils/AxiosInstance';
import {setActiveOrders, setOrderDetails, setPastOrders} from './OrderActions';

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
