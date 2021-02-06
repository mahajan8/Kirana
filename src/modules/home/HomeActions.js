import {
  SET_USER_DETAILS,
  APPEND_STORES,
  CLEAR_STORES,
  APPEND_SEARCHED_STORES,
  CLEAR_SEARCHED_STORES,
  CLEAR_STORE_PRODUCTS,
  APPEND_STORE_PRODUCTS,
  SELECT_STORE,
  APPEND_USER_DETAILS,
  SET_CURRENT_ORDERS,
  SET_NEW_USER,
} from './ActionTypes';

// Set user details in Home Reducer
export const setUserDetails = (userDetail) => ({
  type: SET_USER_DETAILS,
  userDetail,
});

// Append Stores and set total stores count in Home Reducer
export const appendStores = (stores, storeCount) => ({
  type: APPEND_STORES,
  stores,
  storeCount,
});

// Clear Stores from Home Reducer
export const clearStores = () => ({
  type: CLEAR_STORES,
});

// Append Searched Stores and set total searched stores count in Home Reducer
export const appendSearchedStores = (stores, storeCount) => ({
  type: APPEND_SEARCHED_STORES,
  stores,
  storeCount,
});

// Clear Searched Stores from Home Reducer
export const clearSearchedStores = () => ({
  type: CLEAR_SEARCHED_STORES,
});

// Append Store Products and set total product count in Home Reducer
export const appendStoreProducts = (storeProducts, storeProductsCount) => ({
  type: APPEND_STORE_PRODUCTS,
  storeProducts,
  storeProductsCount,
});

// Clear Store Products from Home Reducer
export const clearStoreProducts = () => ({
  type: CLEAR_STORE_PRODUCTS,
});

// Set Selected Store in Home Reducer
export const selectStore = (store) => ({
  type: SELECT_STORE,
  store,
});

// Append to user details in Home Reducer
export const appendUserDetails = (userDetails) => ({
  type: APPEND_USER_DETAILS,
  userDetails,
});

// Set Current Active Orders in Home Reducer
export const setCurrentOrders = (data) => ({
  type: SET_CURRENT_ORDERS,
  data,
});

// Set Current Active Orders in Home Reducer
export const setNewUser = (data) => ({
  type: SET_NEW_USER,
  data,
});
