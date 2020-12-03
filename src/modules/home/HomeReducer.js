import {SET_LOCATION} from '../onboarding/ActionTypes';
import {SET_ADDRESS} from './ActionTypes';

const INITIAL_STATE = {
  location: null,
  addresses: [],
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
    default:
      return state;
  }
};
export default HomeReducer;
