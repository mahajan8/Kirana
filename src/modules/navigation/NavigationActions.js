import {SET_ADDRESS, SET_SELECTED_ADDRESS} from './ActionTypes';

// Set Address List in Navigation Reducer
export const setAddress = (addresses) => ({
  type: SET_ADDRESS,
  addresses,
});

// Set Selected Address in Navigation Reducer
export const setSelectedAddress = (addressIndex) => ({
  type: SET_SELECTED_ADDRESS,
  addressIndex,
});
