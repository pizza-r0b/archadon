// @flow
import actions from 'Actions';

const { PRODUCT_DETAIL_LOADED } = actions;

export default function productDetails(state = [], action) {
  switch (action.type) {
    case PRODUCT_DETAIL_LOADED:
      return [...state, action.payload];
    default:
      return state;
  }
}
