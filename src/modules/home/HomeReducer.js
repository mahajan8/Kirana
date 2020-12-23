import {SET_LOCATION} from '../onboarding/ActionTypes';
import {
  SET_ADDRESS,
  SET_SELECTED_ADDRESS,
  SET_CART_QUANTITY,
  SET_USER_DETAILS,
  APPEND_STORES,
  CLEAR_STORES,
  APPEND_SEARCHED_STORES,
  CLEAR_SEARCHED_STORES,
} from './ActionTypes';

const INITIAL_STATE = {
  location: null,
  addresses: [],
  selectedAddress: null,
  userDetails: null,
  cartQuantity: null,
  stores: [],
  storeCount: null,
  searchedStores: [],
  searchedStoresCount: null,
};

const HomeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.location,
      };
    case SET_ADDRESS:
      return {
        ...state,
        addresses: action.addresses,
      };
    case SET_SELECTED_ADDRESS:
      return {
        ...state,
        selectedAddress: action.addressIndex,
      };
    case SET_CART_QUANTITY:
      return {
        ...state,
        cartQuantity: action.quantity,
      };
    case SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.userDetail,
      };
    case APPEND_STORES:
      return {
        ...state,
        stores: [...state.stores, ...action.stores],
        storeCount: action.storeCount,
      };
    case CLEAR_STORES:
      return {
        ...state,
        stores: [],
        storeCount: null,
      };
    case APPEND_SEARCHED_STORES:
      return {
        ...state,
        searchedStores: [...state.searchedStores, ...action.stores],
        searchedStoresCount: action.storeCount,
      };
    case CLEAR_SEARCHED_STORES:
      return {
        ...state,
        searchedStores: [],
        searchedStoresCount: null,
      };
    default:
      return state;
  }
};
export default HomeReducer;
