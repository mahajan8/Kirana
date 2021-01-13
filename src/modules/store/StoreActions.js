import {
  ADD_PRODUCTS,
  CLEAR_PRODUCTS,
  SET_CATEGORIES,
  SET_CATEGORY_PRODUCTS,
  SET_FILTERS,
  SET_STORE_DETAILS,
  SET_SUBCATEGORY_PRODUCTS,
  SET_LOADING_PRODUCT,
  SET_STORE_PAST_ORDERS,
  SET_STORE_ACTIVE_ORDERS,
  CLEAR_STORE_ORDERS,
  SET_STORE_SEARCH_PRODUCTS,
  CLEAR_STORE_SEARCH_PRODUCTS,
} from './ActionTypes';

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  filters,
});

export const setSubcategoryProducts = (data) => ({
  type: SET_SUBCATEGORY_PRODUCTS,
  data,
});

export const setCategoryProducts = (data) => ({
  type: SET_CATEGORY_PRODUCTS,
  data,
});

export const setStoreDetails = (data) => ({
  type: SET_STORE_DETAILS,
  data,
});

export const addProducts = (data, count) => ({
  type: ADD_PRODUCTS,
  data,
  count,
});

export const clearProducts = () => ({
  type: CLEAR_PRODUCTS,
});

export const setCategories = (data) => ({
  type: SET_CATEGORIES,
  data,
});

export const setLoadingProduct = (productId) => ({
  type: SET_LOADING_PRODUCT,
  productId,
});

export const setStorePastOrders = (orders, total) => ({
  type: SET_STORE_PAST_ORDERS,
  orders,
  total,
});

export const setStoreActiveOrders = (orders) => ({
  type: SET_STORE_ACTIVE_ORDERS,
  orders,
});

export const clearStoreOrders = () => ({
  type: CLEAR_STORE_ORDERS,
});

export const appendStoreSearchProducts = (data, count) => ({
  type: SET_STORE_SEARCH_PRODUCTS,
  data,
  count,
});

export const clearStoreSearchProducts = () => ({
  type: CLEAR_STORE_SEARCH_PRODUCTS,
});
