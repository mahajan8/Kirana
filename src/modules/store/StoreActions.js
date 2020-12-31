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

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  filters,
});

export const setSubcategoryProducts = (data) => ({
  type: SET_SUBCATEGORY_PRODUCTS,
  data,
});

export const setCategoryProducts = (data) => ({
  type: SET_CATEGORY_PRODUCTS,
  data,
});

export const setStoreDetails = (data) => ({
  type: SET_STORE_DETAILS,
  data,
});

export const addProducts = (data, count) => ({
  type: ADD_PRODUCTS,
  data,
  count,
});

export const clearProducts = () => ({
  type: CLEAR_PRODUCTS,
});

export const setCategories = (data) => ({
  type: SET_CATEGORIES,
  data,
});

export const setLoadingProduct = (productId) => ({
  type: SET_LOADING_PRODUCT,
  productId,
});
