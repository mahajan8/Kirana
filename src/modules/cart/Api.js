import instance from '../../utils/AxiosInstance';
import {Urls} from '../../utils/utility/Urls';
import {getFormBody} from '../../utils/utility/Utils';
import {setCartDetails} from './CartActions';
import {Actions} from 'react-native-router-flux';
import {setDisableLoading} from '../authentication/AuthActions';

export const getCart = (pars, callback) => {
  return (dispatch) => {
    instance.post(Urls.getCart, getFormBody(pars)).then((res) => {
      const success = !res.data.error;
      if (success) {
        const {cart} = res.data.data;
        // Store Cart Items in CartReducer
        // dispatch(setCartDetails(cart));
        console.log('get cart');
        callback(cart);
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
        const {payment, order} = res.data.data;

        // Return generated Reference id for Razorpay Payment
        callback(payment.reference_id, order.id);
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
        const {cart, order} = res.data.data;
        // Place order and update cart Items in Reducer
        dispatch(setCartDetails(cart));
        Actions.paymentStatus({success, orderId: order.id});
      } else {
        Actions.paymentStatus({success: false});
      }
    });
  };
};

export const checkCartDeliverability = (pars, callback) => {
  return (dispatch) => {
    instance
      .post(Urls.checkCartDeliverablity, getFormBody(pars))
      .then((res) => {
        const success = !res.data.error;

        if (success) {
          let {delivery_response} = res.data.data;
          callback(delivery_response);
        }
      });
  };
};
