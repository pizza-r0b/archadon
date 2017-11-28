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
import actions from 'Actions';
import filters from './filters';
import ui from './ui';
import collections from './collections';
import requests from './requests';

const { ON_NAV_OPEN } = actions;

function navOpen(state = false, action) {
  switch (action.type) {
    case ON_NAV_OPEN:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  router,
  navOpen,
  user,
  cart,
  redirectPath,
  orderConfirmation,
  productDetails,
  filters,
  ui,
  errors,
  loading,
  products,
  collections,
  requests,
});
