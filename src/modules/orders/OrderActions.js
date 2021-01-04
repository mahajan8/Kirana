import {CLEAR_ORDERS, SET_ACTIVE_ORDERS, SET_PAST_ORDERS} from './ActionTypes';

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
