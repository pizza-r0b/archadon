// @flow
import actions from 'Actions';
const {
  PRODUCT_LIST_LOADED
} = actions;

export default function products(state = {}, action) {
  switch (action.type) {
    case PRODUCT_LIST_LOADED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
