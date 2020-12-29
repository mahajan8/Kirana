import instance from '../../utils/AxiosInstance';
import {Urls} from '../../utils/utility/Urls';
import {getFormBody} from '../../utils/utility/Utils';
import {setCart, setCartDetails, setCartProducts} from './CartActions';

export const getCart = (pars) => {
  return (dispatch) => {
    instance.post(Urls.getCart, getFormBody(pars)).then((res) => {
      const success = !res.data.error;
      if (success) {
        const response = res.data.data;
        console.log(response);
        // let products = response.cart.product_list;

        // let productList = products.map((obj) => {
        //   return {
        //     product_id: obj.product_id,
        //     product_packaging: obj.product_packaging,
        //     product_quantity: obj.product_quantity,
        //     total_price: obj.total_price,
        //     item_quantity: obj.item_quantity,
        //     product_brand: obj.product.product_brand,
        //     product_images: obj.product.product_images,
        //     product_name: obj.product.product_name,
        //     store_price: obj.product.store_price,
        //   };
        // });
        // dispatch(setCartProducts(productList));
        dispatch(setCartDetails(response.cart));
      } else {
        alert(res.data.message);
      }
    });
  };
};

export const createOrder = (pars, callback) => {
  return (dispatch) => {
    instance.post(Urls.createOrder, getFormBody(pars)).then((res) => {
      const success = !res.data.error;
      if (success) {
        const {reference_id} = res.data.data.payment;
        callback(reference_id);
      } else {
        alert(res.data.message);
      }
    });
  };
};
