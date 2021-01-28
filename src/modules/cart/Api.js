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
        // Store Cart Items in CartReducer
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
        // Return generated Reference id for Razorpay Payment
        callback(reference_id);
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const placeOrder = (pars, callback) => {
  return (dispatch) => {
    instance.post(Urls.placeOrder, getFormBody(pars)).then((res) => {
      const success = !res.data.error;
      if (success) {
        const {cart} = res.data.data;
        // Place order and update cart Items in Reducer
        dispatch(setCartDetails(cart));
        if (callback) {
          callback();
        }
      }
      Actions.paymentStatus({success});
    });
  };
};
