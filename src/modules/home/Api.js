/* eslint-disable no-alert */
import {Urls} from '../../utils/utility/Urls';
import {getFormBody} from '../../utils/utility/Utils';
import instance from '../../utils/AxiosInstance';
import {
  setCartQuantity,
  setUserDetails,
  appendStores,
  clearStores,
  appendSearchedStores,
  clearSearchedStores,
} from './HomeActions';
import {Actions} from 'react-native-router-flux';
import {setAddress} from '../navigation/NavigationActions';

export const getUserDetails = () => {
  return (dispatch) => {
    instance.get(Urls.getUserDetails).then((res) => {
      const success = !res.data.error;
      if (success) {
        const response = res.data.data;
        const {address_list, cart_item_quantity, user_details} = response;
        dispatch(setAddress(address_list));
        console.log(JSON.stringify(address_list));
        dispatch(setCartQuantity(cart_item_quantity));
        dispatch(setUserDetails(user_details));
        Actions.reset('drawer');
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
        console.log(JSON.stringify(store_list));
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
      console.log(res.data.data);
      if (success) {
        const {store_list, store_count} = res.data.data;
        dispatch(appendSearchedStores(store_list, store_count));
      } else {
        alert(res.data.message);
      }
    });
  };
};
