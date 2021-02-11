import {SET_CART_DETAILS, SET_CART_LOCATION} from './ActionTypes';

// Set Cart Details in Cart Reducer.
export const setCartDetails = (data) => ({
  type: SET_CART_DETAILS,
  data,
});

export const setCartLocation = (location) => ({
  type: SET_CART_LOCATION,
  location,
});
