import {SET_CART_DETAILS, SET_CART_PRODUCTS} from './ActionTypes';

const INITIAL_STATE = {
  cart: null,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CART_DETAILS:
      return {
        ...state,
        cart: action.data,
      };
    default:
      return state;
  }
};
export default CartReducer;
