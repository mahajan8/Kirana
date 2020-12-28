import {
  SET_USER_DETAILS,
  APPEND_STORES,
  CLEAR_STORES,
  APPEND_SEARCHED_STORES,
  CLEAR_SEARCHED_STORES,
  CLEAR_STORE_PRODUCTS,
  APPEND_STORE_PRODUCTS,
  SELECT_STORE,
  SET_CART_DETAILS,
} from './ActionTypes';

export const setCartDetails = (data) => ({
  type: SET_CART_DETAILS,
  data,
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

export const appendSearchedStores = (stores, storeCount) => ({
  type: APPEND_SEARCHED_STORES,
  stores,
  storeCount,
});

export const clearSearchedStores = () => ({
  type: CLEAR_SEARCHED_STORES,
});

export const appendStoreProducts = (storeProducts, storeProductsCount) => ({
  type: APPEND_STORE_PRODUCTS,
  storeProducts,
  storeProductsCount,
});

export const clearStoreProducts = () => ({
  type: CLEAR_STORE_PRODUCTS,
});

export const selectStore = (storeId) => ({
  type: SELECT_STORE,
  storeId,
});
