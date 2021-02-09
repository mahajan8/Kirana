/* eslint-disable no-alert */
import {Urls} from '../../utils/utility/Urls';
import {getFormBody} from '../../utils/utility/Utils';
import {setLoading, setDisableLoading} from '../authentication/AuthActions';
import instance from '../../utils/AxiosInstance';
import {
  addProducts,
  setCategories,
  setCategoryProducts,
  setFilters,
  setStoreDetails,
  setSubcategoryProducts,
  setLoadingProduct,
  appendStoreSearchProducts,
} from './StoreActions';
import {Actions} from 'react-native-router-flux';
import {appendStoreProducts} from '../home/HomeActions';
import {setCartDetails} from '../cart/CartActions';

export const getStoreDetails = (pars) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.getStoreDetails, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        // Add Store details and categories in Reducer
        let {store_details, store_products} = res.data.data;
        dispatch(setStoreDetails(store_details));
        dispatch(setCategoryProducts(store_products));
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const getProductsByCategory = (pars) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.getProductsByCategory, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        // Set Subcategories in reducer
        const {store_products} = res.data.data;
        dispatch(setSubcategoryProducts(store_products));
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const searchStoreProducts = (pars) => {
  return (dispatch) => {
    let filter = pars.filter;
    delete pars.filter;

    var formBody = getFormBody(pars);

    instance.post(Urls.searchStoreProducts, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        if (!filter) {
          dispatch(setFilters(res.data.data.filters));
        }
        // Set Products in Reducer w.r.t Screen
        let {total_count, results} = res.data.data;
        if (Actions.currentScene === 'storeProductsResults') {
          dispatch(appendStoreProducts(results, total_count));
        } else if (Actions.currentScene === 'searchProducts') {
          dispatch(appendStoreSearchProducts(results, total_count));
        } else {
          dispatch(addProducts(results, total_count));
        }
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const getStoreCategories = (pars) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.getStoreCategories, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        dispatch(setCategories(res.data.data.category_list));
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const updateProductQuantity = (pars, callback) => {
  return (dispatch) => {
    dispatch(setDisableLoading(true));
    dispatch(setLoadingProduct(pars.product_id));
    var formBody = getFormBody(pars);

    instance.post(Urls.addUpdateItemToCart, formBody).then((res) => {
      const success = !res.data.error;
      dispatch(setLoadingProduct(null));
      if (success) {
        const {cart} = res.data.data;
        dispatch(setCartDetails(cart));
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const deleteProductFromCart = (pars, callback) => {
  return (dispatch) => {
    dispatch(setDisableLoading(true));
    dispatch(setLoadingProduct(pars.product_id));
    var formBody = getFormBody(pars);

    instance.post(Urls.deleteCartItem, formBody).then((res) => {
      const success = !res.data.error;
      dispatch(setLoadingProduct(null));
      if (success) {
        const {cart} = res.data.data;
        dispatch(setCartDetails(cart));
      } else {
        alert(res.data.message);
      }
    });
  };
};
