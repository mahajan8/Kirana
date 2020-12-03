/* eslint-disable no-alert */
import {Urls} from '../../utils/utility/Urls';
import {getFormBody} from '../../utils/utility/Utils';
import {setLoading} from '../authentication/AuthActions';
import instance from '../../utils/AxiosInstance';
import {setAddress} from './HomeActions';
import {Actions} from 'react-native-router-flux';

export const addUpdateAddress = (pars, callback) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance
      .post(Urls.addUpdateAddress, formBody)
      .then((res) => {
        dispatch(setLoading(false));

        const success = !res.data.error;

        if (success) {
          dispatch(getAddresses());
          let index = Actions.state.routes.findIndex(
            (obj) => obj.routeName === 'addresses',
          );
          if (index >= 0) {
            Actions.popTo('addresses');
          } else {
            Actions.drawer();
          }
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

export const getAddresses = () => {
  return (dispatch) => {
    instance
      .post(Urls.getAddresses)
      .then((res) => {
        dispatch(setLoading(false));

        const success = !res.data.error;
        console.log(res.data);

        if (success) {
          dispatch(setAddress(res.data.data));
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

export const deleteAddress = (pars) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance
      .post(Urls.deleteAddress, formBody)
      .then((res) => {
        dispatch(setLoading(false));

        const success = !res.data.error;
        if (success) {
          dispatch(getAddresses());
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
