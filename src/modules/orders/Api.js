/* eslint-disable no-alert */
import {Urls} from '../../utils/utility/Urls';
import {getFormBody} from '../../utils/utility/Utils';
import instance from '../../utils/AxiosInstance';

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
