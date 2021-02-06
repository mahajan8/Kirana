/* eslint-disable no-alert */
import {Urls} from '../../utils/utility/Urls';
import {getFormBody, handleNotificationClick} from '../../utils/utility/Utils';
import instance from '../../utils/AxiosInstance';
import {
  setUserDetails,
  appendStores,
  clearStores,
  appendSearchedStores,
  setCurrentOrders,
  setNewUser,
} from './HomeActions';
import {Actions} from 'react-native-router-flux';
import {setAddress} from '../navigation/NavigationActions';
import {setCartDetails} from '../cart/CartActions';
import CleverTap from 'clevertap-react-native';
import {setNotificationPayload} from '../authentication/AuthActions';

export const getUserDetails = (newUser = false) => {
  return (dispatch, getState) => {
    instance.get(Urls.getUserDetails).then((res) => {
      const success = !res.data.error;
      if (success) {
        const response = res.data.data;

        const {
          address_list,
          cart_data,
          user_details,
          last_order_rating,
          last_order_data,
          active_orders,
        } = response;
        //Set Addresses, Cart List and user details in respective Reducers
        dispatch(setNewUser(newUser));
        dispatch(setAddress(address_list));
        dispatch(setCartDetails(cart_data));
        dispatch(setUserDetails(user_details));

        let activeOrders = active_orders.map((item) => {
          let {order_code, order_id, order_status, store_id, store_name} = item;
          return {
            order_code,
            id: order_id,
            status: order_status,
            store_id,
            store_name,
          };
        });
        //Set Currently Active Orders
        dispatch(setCurrentOrders(activeOrders));

        const {email, id, first_name, mobile} = user_details;
        if (newUser) {
          CleverTap.onUserLogin({
            Name: first_name,
            Identity: id,
            Email: email,
            Phone: mobile,
          });
        } else {
          CleverTap.profileSet({
            Name: first_name,
            Identity: id,
            Email: email,
            Phone: mobile,
          });
        }
        //If last order rating not completed navigate to rating screen.
        const {notificationPayload} = getState().authReducer;
        Actions.reset('drawer', {newUser});
        if (!last_order_rating) {
          Actions.push('rating', {order: last_order_data});
        }
        if (notificationPayload) {
          handleNotificationClick(notificationPayload);
          dispatch(setNotificationPayload(null));
        }
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const getStores = (pars) => {
  return (dispatch) => {
    instance.post(Urls.getStores, getFormBody(pars)).then((res) => {
      const success = !res.data.error;
      if (success) {
        const response = res.data.data;
        const {store_list, store_count} = response;
        if (pars.start === 0) {
          dispatch(clearStores());
        }
        dispatch(appendStores(store_list, store_count));
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const searchProductInStores = (pars) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.searchProductInStores, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        const {store_list, store_count} = res.data.data;
        dispatch(appendSearchedStores(store_list, store_count));
      } else {
        alert(res.data.message);
      }
    });
  };
};
