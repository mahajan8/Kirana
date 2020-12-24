/* eslint-disable no-alert */
import {Urls} from '../../utils/utility/Urls';
import {getFormBody} from '../../utils/utility/Utils';
import {setLoading} from '../authentication/AuthActions';
import instance from '../../utils/AxiosInstance';
import {
  addProducts,
  setCategories,
  setCategoryProducts,
  setFilters,
  setStoreDetails,
  setSubcategoryProducts,
} from './StoreActions';
import {Actions} from 'react-native-router-flux';
import {appendStoreProducts} from '../home/HomeActions';

export const getStoreDetails = (pars) => {
  return (dispatch) => {
    var formBody = getFormBody(pars);

    instance.post(Urls.getStoreDetails, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
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

    instance
      .post(Urls.getProductsByCategory, formBody)
      .then((res) => {
        dispatch(setLoading(false));
        const success = !res.data.error;
        if (success) {
          const {store_products} = res.data.data;
          dispatch(setSubcategoryProducts(store_products));
        } else {
          alert(res.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(setLoading(false));
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
        // if (pars.start === 0) {
        //   dispatch(clearProducts());
        // }
        let {total_count, results} = res.data.data;
        if (Actions.currentScene === 'storeProductsResults') {
          dispatch(appendStoreProducts(results, total_count));
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
