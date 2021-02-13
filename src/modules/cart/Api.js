import instance from '../../utils/AxiosInstance';
import {Urls} from '../../utils/utility/Urls';
import {getFormBody} from '../../utils/utility/Utils';
import {setCartDetails} from './CartActions';
import {Actions} from 'react-native-router-flux';
import {setDisableLoading} from '../authentication/AuthActions';
import {AppConfig} from '../../config/AppConfig';
import {environment} from '../../config/EnvConfig';
import axios from 'axios';

export const getCart = (pars, callback) => {
  return (dispatch) => {
    instance.post(Urls.getCart, getFormBody(pars)).then((res) => {
      const success = !res.data.error;
      if (success) {
        dispatch(setDisableLoading(false));
        const {cart} = res.data.data;
        // Store Cart Items in CartReducer
        dispatch(setCartDetails(cart));
        if (callback) {
          callback(cart);
        }
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
        dispatch(setDisableLoading(false));
        const success = !res.data.error;
        if (success) {
          let {delivery_response} = res.data.data;
          callback(delivery_response);
        }
      });
  };
};

export const checkCartServisable = (pars, callback) => {
  return (dispatch) => {
    let {initial, final, cartLoaded} = pars;

    let params = {
      origin: initial.latitude + ',' + initial.longitude,
      destination: final.latitude + ',' + final.longitude,
      key: AppConfig[environment].googlePlacesKey,
    };

    var data =
      '?' +
      Object.keys(params)
        .map((key) => key + '=' + params[key])
        .join('&');
    dispatch(setDisableLoading(cartLoaded ? true : false));

    const setServicabilityData = (leg, cartData) => {
      const {is_deliverable, deliverable_distance_kms} = cartData;
      let {distance, duration} = leg;
      let googleDeliverable = distance.value / 1000 < deliverable_distance_kms;
      let googleETA = duration.value / 60;

      let deliverable = is_deliverable && googleDeliverable;
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
        let func = null;

        let {legs} = res.data.routes[0];

        if (cartLoaded) {
          func = checkCartDeliverability(final, (response) => {
            setServicabilityData(legs[0], response);
          });
        } else {
          func = getCart(final, (response) => {
            setServicabilityData(legs[0], response);
          });
        }
        dispatch(func);
      })
      .catch((error) => {
        let func = null;
        // alert(cartLoaded);
        if (cartLoaded) {
          func = checkCartDeliverability(final, (cartDetails) => {
            dispatch(setCartDetails(cartDetails));
            callback();
          });
        } else {
          func = getCart(final, callback);
        }
        dispatch(func);
      });
  };
};
