import {
  SET_CATEGORIES,
  SET_CATEGORY_PRODUCTS,
  SET_FILTERS,
  SET_PRODUCTS,
  SET_STORE_DETAILS,
  SET_SUBCATEGORY_PRODUCTS,
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

export const setProducts = (data) => ({
  type: SET_PRODUCTS,
  data,
});

export const setCategories = (data) => ({
  type: SET_CATEGORIES,
  data,
});
