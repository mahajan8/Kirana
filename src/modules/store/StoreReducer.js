import {
  ADD_PRODUCTS,
  CLEAR_PRODUCTS,
  SET_CATEGORIES,
  SET_CATEGORY_PRODUCTS,
  SET_FILTERS,
  SET_STORE_DETAILS,
  SET_SUBCATEGORY_PRODUCTS,
  SET_LOADING_PRODUCT,
} from './ActionTypes';

const INITIAL_STATE = {
  filterBrands: [],
  filterCategories: [],
  subcategoryProducts: [],
  storeDetails: {},
  categoryProducts: [],
  products: [],
  storeCategories: [],
  totalProductCount: 0,
  loadingProductId: null,
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
    case ADD_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...action.data],
        totalProductCount: action.count,
      };
    case CLEAR_PRODUCTS:
      return {
        ...state,
        products: [],
      };
    case SET_CATEGORIES:
      return {
        ...state,
        storeCategories: action.data,
      };
    case SET_LOADING_PRODUCT:
      return {
        ...state,
        loadingProductId: action.productId,
      };
    default:
      return state;
  }
};
export default StoreReducer;
