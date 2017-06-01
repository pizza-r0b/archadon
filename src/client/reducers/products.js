// @flow
import actions from 'Actions';
const {
  PRODUCT_LIST_LOADED,
  LOAD_MORE_DONE,
} = actions;

export default function products(state = {}, action) {
  switch (action.type) {
    case PRODUCT_LIST_LOADED:
      return {
        ...state,
        ...action.payload,
      };
    case LOAD_MORE_DONE:
      const lastItems = state.Items || [];
      return {
        ...state,
        ...action.payload,
        Items: [...lastItems, ...action.payload.Items],
      };
    default:
      return state;
  }
}
