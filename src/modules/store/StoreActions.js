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

// Set Available Filters in Store Reducer
export const setFilters = (filters) => ({
  type: SET_FILTERS,
  filters,
});

// Set Subcategory Products in Store Reducer
export const setSubcategoryProducts = (data) => ({
  type: SET_SUBCATEGORY_PRODUCTS,
  data,
});

// Set Category Products in Store Reducer
export const setCategoryProducts = (data) => ({
  type: SET_CATEGORY_PRODUCTS,
  data,
});

// Set Store info in Store Reducer
export const setStoreDetails = (data) => ({
  type: SET_STORE_DETAILS,
  data,
});

// Append products to Store products, and set total available products in Store Reducer
export const addProducts = (data, count) => ({
  type: ADD_PRODUCTS,
  data,
  count,
});

// Clear Store Products
export const clearProducts = () => ({
  type: CLEAR_PRODUCTS,
});

// Set Store Caregories
export const setCategories = (data) => ({
  type: SET_CATEGORIES,
  data,
});

// Set product id to show loading indicator when quantity is updated
export const setLoadingProduct = (productId) => ({
  type: SET_LOADING_PRODUCT,
  productId,
});

// Append orders to Store Past orders, and set total past orders in Store Reducer
export const setStorePastOrders = (orders, total) => ({
  type: SET_STORE_PAST_ORDERS,
  orders,
  total,
});

// Set Store Active orders, and set total active orders in Store Reducer
export const setStoreActiveOrders = (orders) => ({
  type: SET_STORE_ACTIVE_ORDERS,
  orders,
});

// Clear Store past and active orders
export const clearStoreOrders = () => ({
  type: CLEAR_STORE_ORDERS,
});

// Append products to Searched Store Products, and set total searched store products.
export const appendStoreSearchProducts = (data, count) => ({
  type: SET_STORE_SEARCH_PRODUCTS,
  data,
  count,
});

// Clear Searched Store Products,
export const clearStoreSearchProducts = () => ({
  type: CLEAR_STORE_SEARCH_PRODUCTS,
});
