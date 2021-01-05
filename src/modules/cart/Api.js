import instance from '../../utils/AxiosInstance';
import {Urls} from '../../utils/utility/Urls';
import {getFormBody} from '../../utils/utility/Utils';
import {setCartDetails} from './CartActions';
import {Actions} from 'react-native-router-flux';
import {setDisableLoading} from '../authentication/AuthActions';

export const getCart = (pars) => {
  return (dispatch) => {
    instance.post(Urls.getCart, getFormBody(pars)).then((res) => {
      const success = !res.data.error;
      if (success) {
        const {cart} = res.data.data;
        dispatch(setCartDetails(cart));
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const createOrder = (pars, callback) => {
  return (dispatch) => {
    dispatch(setDisableLoading(true));
    instance.post(Urls.createOrder, getFormBody(pars)).then((res) => {
      const success = !res.data.error;
      if (success) {
        const {reference_id} = res.data.data.payment;
        callback(reference_id);
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const placeOrder = (pars) => {
  return (dispatch) => {
    instance.post(Urls.placeOrder, getFormBody(pars)).then((res) => {
      const success = !res.data.error;
      if (success) {
        const {cart} = res.data.data;
        dispatch(setCartDetails(cart));
      }
      Actions.paymentStatus({success});
    });
  };
};
