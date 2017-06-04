import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import errors from './errors';
import user from './user';
import loading from './loading';
import redirectPath from './redirectPath';
import products from './products';
import cart from './cart';
import orderConfirmation from './orderConfirmation';
import productDetails from './productDetails';

export default combineReducers({
  router,
  user,
  cart,
  redirectPath,
  orderConfirmation,
  productDetails,
  errors,
  loading,
  products,
});
