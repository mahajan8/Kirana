/* eslint-disable no-alert */
import {Urls} from '../../utils/utility/Urls';
import {getFormBody} from '../../utils/utility/Utils';
import {setLoading} from '../authentication/AuthActions';
import instance from '../../utils/AxiosInstance';
import {Actions} from 'react-native-router-flux';
import {setAddress} from './NavigationActions';
import {setLocation} from '../onboarding/OnboardingActions';
import {getUserDetails} from '../home/Api';

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
          let addresses = Actions.state.routes.some(
            (obj) => obj.routeName === 'addresses',
          );
          let cart = Actions.state.routes.some(
            (obj) => obj.routeName === 'cart',
          );
          if (addresses) {
            Actions.popTo('addresses');
          } else if (cart) {
            let {id, type, location} = res.data.data.user_address;
            dispatch(setLocation({...location, id, type}));
            Actions.popTo('cart');
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

export const sendOtpToChangeNumber = (pars, callback) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.sendOtpToChangeNumber, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        callback();
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const verifyOtpChangeNumber = (pars, error) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.verifyOtpChangeNumber, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        dispatch(getUserDetails());
      } else {
        error();
      }
    });
  };
};
