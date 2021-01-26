import {
  CLEAR_ALTERNATIVE_STORES,
  CLEAR_ORDERS,
  SET_ACTIVE_ORDERS,
  SET_ALTERNATE_DETAILS,
  SET_ALTERNATIVE_STORES,
  SET_ORDER_DETAILS,
  SET_PAST_ORDERS,
  SET_SELECTED_ORDER_ID,
} from './ActionTypes';

// Append orders to Past Orders, and set total orders count in Order Reducer
export const setPastOrders = (orders, total) => ({
  type: SET_PAST_ORDERS,
  orders,
  total,
});

// Set Active Orders in Order Reducer
export const setActiveOrders = (orders) => ({
  type: SET_ACTIVE_ORDERS,
  orders,
});

// Clear Active and past orders in Order Reducer
export const clearOrders = () => ({
  type: CLEAR_ORDERS,
});

// Set Order Details in Order Reducer
export const setOrderDetails = (data) => ({
  type: SET_ORDER_DETAILS,
  data,
});

// Append to alternative stores and set total store count in Order Reducer
export const setAlternativeStores = (stores, count) => ({
  type: SET_ALTERNATIVE_STORES,
  stores,
  count,
});

// Clear alternative stores in Order Reducer
export const clearAlternativeStores = () => ({
  type: CLEAR_ALTERNATIVE_STORES,
});

// Set products and location for alternative stores search in Order Reducer
export const setAlternateDetails = (products, location) => ({
  type: SET_ALTERNATE_DETAILS,
  products,
  location,
});

// Set Selected Order Id in Order Reducer
export const setSelectedOrderId = (orderId) => ({
  type: SET_SELECTED_ORDER_ID,
  orderId,
});
