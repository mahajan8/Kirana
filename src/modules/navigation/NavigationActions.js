import {SET_ADDRESS, SET_SELECTED_ADDRESS} from './ActionTypes';

export const setAddress = (addresses) => ({
  type: SET_ADDRESS,
  addresses,
});

export const setSelectedAddress = (addressIndex) => ({
  type: SET_SELECTED_ADDRESS,
  addressIndex,
});
