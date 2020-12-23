import {SET_FILTERS, SET_SUBCATEGORY_PRODUCTS} from './ActionTypes';

const INITIAL_STATE = {
  filterBrands: [],
  filterCategories: [],
  subcategoryProducts: [],
};

const StoreReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_FILTERS:
      let {brand, categories} = action.filters;
      return {
        ...state,
        filterBrands: brand ? brand : state.filterBrands,
        filterCategories: categories ? categories : state.filterCategories,
      };
    case SET_SUBCATEGORY_PRODUCTS:
      return {
        ...state,
        subcategoryProducts: action.data,
      };
    default:
      return state;
  }
};
export default StoreReducer;
