import {SET_FILTERS, SET_SUBCATEGORY_PRODUCTS} from './ActionTypes';

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  filters,
});

export const setSubcategoryProducts = (data) => ({
  type: SET_SUBCATEGORY_PRODUCTS,
  data,
});
