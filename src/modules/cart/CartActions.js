import {SET_CART_DETAILS} from './ActionTypes';

// Set Cart Details in Cart Reducer.
export const setCartDetails = (data) => ({
  type: SET_CART_DETAILS,
  data,
});
