import instance from '../../utils/AxiosInstance';
import {Urls} from '../../utils/utility/Urls';
import {getFormBody} from '../../utils/utility/Utils';
import {setCartDetails} from './CartActions';
import {Actions} from 'react-native-router-flux';
import {setDisableLoading, setLoading} from '../authentication/AuthActions';
import {AppConfig} from '../../config/AppConfig';
import {environment} from '../../config/EnvConfig';
import axios from 'axios';

export const getCart = (pars, callback) => {
  return (dispatch) => {
    instance.post(Urls.getCart, getFormBody(pars)).then((res) => {
      const success = !res.data.error;
      if (success) {
        const {cart} = res.data.data;
        // Store Cart Items in CartReducer
        dispatch(setCartDetails(cart));
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

export const checkCartServisable = (pars, callback, err) => {
  return (dispatch) => {
    let {initial, final, deliverableDistance, check} = pars;

    let params = {
      origin: initial.latitude + ',' + initial.longitude,
      destination: final.latitude + ',' + final.longitude,
      key: AppConfig[environment].googlePlacesKey,
      // key: 'AIzaSyCaZ-qdhBgi_kndrL-2CCzLCL8rLn86eUY',
    };

    var data =
      '?' +
      Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&');
    dispatch(setLoading(true));

    const setDetails = (leg, isDeliverable) => {
      let {distance, duration} = leg;
      let googleDeliverable = distance.value / 1000 < deliverableDistance;
      let googleETA = duration.value / 60;

      let deliverable = isDeliverable && googleDeliverable;
      let cartDetails = {
        is_deliverable: deliverable,
        estimated_time_in_mins: googleETA + 15,
      };

      dispatch(setCartDetails(cartDetails));
      callback();
    };

    axios
      .get(Urls.googlePolyline + data)
      .then((res) => {
        dispatch(setLoading(false));
        let isDeliverable = false;

        let func = null;

        let {legs} = res.data.routes[0];

        if (check) {
          func = checkCartDeliverability(initial, (response) => {
            isDeliverable = response.is_deliverable;
            setDetails(legs[0], isDeliverable);
          });
        } else {
          func = getCart(initial, (response) => {
            isDeliverable = response.is_deliverable;
            setDetails(legs[0], isDeliverable);
          });
        }
        dispatch(func);
      })
      .catch((error) => {
        dispatch(setLoading(false));
        if (err) {
          err(error);
        }
      });
  };
};
