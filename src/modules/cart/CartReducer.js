import {SET_CART_DETAILS, SET_CART_LOCATION} from './ActionTypes';

const INITIAL_STATE = {
  cart: null,
  cartLocation: null,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CART_DETAILS:
      return {
        ...state,
        cart: {...state.cart, ...action.data},
      };
    case SET_CART_LOCATION:
      return {
        ...state,
        cartLocation: action.location,
      };
    default:
      return state;
  }
};
export default CartReducer;
