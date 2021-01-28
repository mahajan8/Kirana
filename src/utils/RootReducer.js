import {combineReducers} from 'redux';
import authReducer from '../modules/authentication/AuthReducer';
import homeReducer from '../modules/home/HomeReducer';
import navigationReducer from '../modules/navigation/NavigationReducer';
import storeReducer from '../modules/store/StoreReducer';
import cartReducer from '../modules/cart/CartReducer';
import orderReducer from '../modules/orders/OrderReducer';
import {LOGOUT_USER} from '../modules/authentication/ActionTypes';

const AppReducers = combineReducers({
  authReducer,
  homeReducer,
  navigationReducer,
  storeReducer,
  cartReducer,
  orderReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_USER) {
    state = undefined;
  }
  return AppReducers(state, action);
};

export default rootReducer;
