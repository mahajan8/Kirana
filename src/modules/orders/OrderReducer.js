import {CLEAR_ORDERS, SET_ACTIVE_ORDERS, SET_PAST_ORDERS} from './ActionTypes';

const INITIAL_STATE = {
  pastOrders: [],
  activeOrders: [],
  totalCount: null,
};

const OrderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PAST_ORDERS: {
      return {
        ...state,
        pastOrders: [...state.pastOrders, ...action.orders],
        totalCount: action.total,
      };
    }
    case SET_ACTIVE_ORDERS: {
      return {
        ...state,
        activeOrders: action.orders,
      };
    }
    case CLEAR_ORDERS: {
      return {
        ...state,
        activeOrders: [],
        pastOrders: [],
        totalCount: null,
      };
    }
    default:
      return state;
  }
};
export default OrderReducer;
