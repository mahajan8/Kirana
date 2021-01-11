/* eslint-disable no-alert */
import {Urls} from '../../utils/utility/Urls';
import {getFormBody} from '../../utils/utility/Utils';
import instance from '../../utils/AxiosInstance';
import {Actions} from 'react-native-router-flux';
import {setAddress} from './NavigationActions';
import {setLocation} from '../onboarding/OnboardingActions';
import {appendUserDetails} from '../home/HomeActions';

export const addUpdateAddress = (pars, callback) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.addUpdateAddress, formBody).then((res) => {
      const success = !res.data.error;

      if (success) {
        dispatch(getAddresses());
        let addresses = Actions.state.routes.some(
          (obj) => obj.routeName === 'addresses',
        );
        let cart = Actions.state.routes.some((obj) => obj.routeName === 'cart');
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
    });
  };
};

export const getAddresses = () => {
  return (dispatch) => {
    instance.post(Urls.getAddresses).then((res) => {
      const success = !res.data.error;

      if (success) {
        dispatch(setAddress(res.data.data));
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const deleteAddress = (pars) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.deleteAddress, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        dispatch(getAddresses());
      } else {
        alert(res.data.message);
      }
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
        let details = {
          mobile: pars.new_mobile,
        };
        dispatch(appendUserDetails(details));
        Actions.reset('drawer');
      } else {
        error();
      }
    });
  };
};

export const updateUserDetails = (pars, error) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.updateUserDetails, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        let details = {
          first_name: pars.name,
        };
        dispatch(appendUserDetails(details));
        Actions.reset('drawer');
      } else {
        error();
      }
    });
  };
};
