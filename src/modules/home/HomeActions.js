import {
  SET_CART_QUANTITY,
  SET_USER_DETAILS,
  APPEND_STORES,
  CLEAR_STORES,
} from './ActionTypes';

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
