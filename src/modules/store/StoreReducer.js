import {SET_FILTERS} from './ActionTypes';

const INITIAL_STATE = {
  filterBrands: [],
  filterCategories: [],
};

const StoreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILTERS: {
      let {brand, categories} = action.filters;
      return {
        ...state,
        filterBrands: brand ? brand : state.filterBrands,
        filterCategories: categories ? categories : state.filterCategories,
      };
    }
    default:
      return state;
  }
};
export default StoreReducer;
