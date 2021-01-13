import {
  ADD_PRODUCTS,
  CLEAR_PRODUCTS,
  SET_CATEGORIES,
  SET_CATEGORY_PRODUCTS,
  SET_FILTERS,
  SET_STORE_DETAILS,
  SET_SUBCATEGORY_PRODUCTS,
  SET_LOADING_PRODUCT,
  SET_STORE_PAST_ORDERS,
  SET_STORE_ACTIVE_ORDERS,
  CLEAR_STORE_ORDERS,
  SET_STORE_SEARCH_PRODUCTS,
  CLEAR_STORE_SEARCH_PRODUCTS,
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
  storeActiveOrders: [],
  storePastOrders: [],
  storeTotalCount: null,
  storeSearchProducts: [],
  storeSeachCount: null,
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
        totalProductCount: null,
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
    case SET_STORE_PAST_ORDERS: {
      return {
        ...state,
        storePastOrders: [...state.storePastOrders, ...action.orders],
        storeTotalCount: action.total,
      };
    }
    case SET_STORE_ACTIVE_ORDERS: {
      return {
        ...state,
        storeActiveOrders: action.orders,
      };
    }
    case CLEAR_STORE_ORDERS: {
      return {
        ...state,
        storeActiveOrders: [],
        storePastOrders: [],
        storeTotalCount: null,
      };
    }
    case SET_STORE_SEARCH_PRODUCTS:
      return {
        ...state,
        storeSearchProducts: [...state.storeSearchProducts, ...action.data],
        storeSeachCount: action.count,
      };
    case CLEAR_STORE_SEARCH_PRODUCTS:
      return {
        ...state,
        storeSearchProducts: [],
        storeSeachCount: null,
      };
    default:
      return state;
  }
};
export default StoreReducer;
