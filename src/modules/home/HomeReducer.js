import {SET_LOCATION} from '../onboarding/ActionTypes';

const INITIAL_STATE = {
  location: null,
};

const HomeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.location,
      };
    default:
      return state;
  }
};
export default HomeReducer;
