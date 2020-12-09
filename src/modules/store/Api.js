/* eslint-disable no-alert */
import {Urls} from '../../utils/utility/Urls';
import {getFormBody} from '../../utils/utility/Utils';
import {setLoading} from '../authentication/AuthActions';
import instance from '../../utils/AxiosInstance';
import {Actions} from 'react-native-router-flux';

export const getStoreDetails = (pars, callback) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance
      .post(Urls.getStoreDetails, formBody)
      .then((res) => {
        dispatch(setLoading(false));
        const success = !res.data.error;
        if (success) {
          callback(res.data.data);
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setLoading(false));
      });
  };
};

export const getProductsByCategory = (pars, callback) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance
      .post(Urls.getProductsByCategory, formBody)
      .then((res) => {
        dispatch(setLoading(false));
        const success = !res.data.error;
        if (success) {
          callback(res.data.data);
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setLoading(false));
      });
  };
};
