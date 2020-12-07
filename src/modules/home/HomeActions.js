import {
  SET_ADDRESS,
  SET_SELECTED_ADDRESS,
  SET_CART_QUANTITY,
  SET_USER_DETAILS,
  APPEND_STORES,
  CLEAR_STORES,
} from './ActionTypes';

export const setAddress = (addresses) => ({
  type: SET_ADDRESS,
  addresses,
});

export const setSelectedAddress = (addressIndex) => ({
  type: SET_SELECTED_ADDRESS,
  addressIndex,
});

export const setCartQuantity = (quantity) => ({
  type: SET_CART_QUANTITY,
  quantity,
});

export const setUserDetails = (userDetail) => ({
  type: SET_USER_DETAILS,
  userDetail,
});

export const appendStores = (stores, storeCount) => ({
  type: APPEND_STORES,
  stores,
  storeCount,
});

export const clearStores = () => ({
  type: CLEAR_STORES,
});
