import {
  SET_CATEGORIES,
  SET_CATEGORY_PRODUCTS,
  SET_FILTERS,
  SET_PRODUCTS,
  SET_STORE_DETAILS,
  SET_SUBCATEGORY_PRODUCTS,
} from './ActionTypes';

const INITIAL_STATE = {
  filterBrands: [],
  filterCategories: [],
  subcategoryProducts: [],
  storeDetails: {},
  categoryProducts: [],
  products: [],
  storeCategories: [],
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
    case SET_CATEGORY_PRODUCTS:
      return {
        ...state,
        categoryProducts: action.data,
      };
    case SET_STORE_DETAILS:
      return {
        ...state,
        storeDetails: action.data,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.data,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        storeCategories: action.data,
      };
    default:
      return state;
  }
};
export default StoreReducer;
