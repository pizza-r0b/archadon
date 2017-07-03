// @flow
import actions from 'Actions';
const {
  PRODUCT_LIST_LOADED,
  LOAD_MORE_DONE,
  REPLACE_PRODUCT_LIST,
} = actions;

export default function products(state = {}, action) {
  switch (action.type) {
    case PRODUCT_LIST_LOADED:
      return {
        ...state,
        ...action.payload,
      };
    case REPLACE_PRODUCT_LIST:
      return action.payload;
    case LOAD_MORE_DONE:
      const lastItems = state.hits || [];
      return {
        ...state,
        ...action.payload,
        hits: [...lastItems, ...action.payload.hits],
      };
    default:
      return state;
  }
}
