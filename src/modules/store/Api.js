/* eslint-disable no-alert */
import {Urls} from '../../utils/utility/Urls';
import {getFormBody} from '../../utils/utility/Utils';
import {setLoading} from '../authentication/AuthActions';
import instance from '../../utils/AxiosInstance';
import {Actions} from 'react-native-router-flux';
import {
  setCategories,
  setCategoryProducts,
  setFilters,
  setStoreDetails,
  setSubcategoryProducts,
} from './StoreActions';

export const getStoreDetails = (pars, callback) => {
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

export const getStoreProducts = (pars, callback) => {
  return (dispatch) => {
    let filter = pars.filter;
    delete pars.filter;

    var formBody = getFormBody(pars);

    instance.post(Urls.getStoreProducts, formBody).then((res) => {
      const success = !res.data.error;
      if (success) {
        if (!filter) {
          dispatch(setFilters(res.data.data.filters));
        }
        callback(res.data.data);
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const getStoreCategories = (pars, callback) => {
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
