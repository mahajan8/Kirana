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

export const setPastOrders = (orders, total) => ({
  type: SET_PAST_ORDERS,
  orders,
  total,
});

export const setActiveOrders = (orders) => ({
  type: SET_ACTIVE_ORDERS,
  orders,
});

export const clearOrders = () => ({
  type: CLEAR_ORDERS,
});

export const setOrderDetails = (data) => ({
  type: SET_ORDER_DETAILS,
  data,
});

export const setAlternativeStores = (stores, count) => ({
  type: SET_ALTERNATIVE_STORES,
  stores,
  count,
});

export const clearAlternativeStores = () => ({
  type: CLEAR_ALTERNATIVE_STORES,
});

export const setAlternateDetails = (products, location) => ({
  type: SET_ALTERNATE_DETAILS,
  products,
  location,
});

export const setSelectedOrderId = (orderId) => ({
  type: SET_SELECTED_ORDER_ID,
  orderId,
});
