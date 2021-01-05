import {
  CLEAR_ALTERNATIVE_STORES,
  CLEAR_ORDERS,
  SET_ACTIVE_ORDERS,
  SET_ALTERNATIVE_STORES,
  SET_ORDER_DETAILS,
  SET_PAST_ORDERS,
} from './ActionTypes';

const INITIAL_STATE = {
  pastOrders: [],
  activeOrders: [],
  totalCount: null,
  orderDetails: null,
  alternativeStores: [],
  alternativeStoresCount: null,
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
    case SET_ORDER_DETAILS:
      return {
        ...state,
        orderDetails: action.data,
      };
    case SET_ALTERNATIVE_STORES: {
      return {
        ...state,
        alternativeStores: [...state.alternativeStores, ...action.stores],
        alternativeStoresCount: action.count,
      };
    }
    case CLEAR_ALTERNATIVE_STORES: {
      return {
        ...state,
        alternativeStores: [],
        alternativeStoresCount: null,
      };
    }
    default:
      return state;
  }
};
export default OrderReducer;
