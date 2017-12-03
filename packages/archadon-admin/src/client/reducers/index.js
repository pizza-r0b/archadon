import data from './data.js';
import ui from './ui';
import orders from './orders';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  data,
  orders,
  ui,
  router: routerReducer,
});
