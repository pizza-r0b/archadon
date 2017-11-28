// @flow
import actions from 'Actions';
import { ActionType } from 'Types';
const {
  ADD_TO_CART,
  PRODUCT_DATA_LOADED,
  REMOVE_FROM_CART,
  REPLACE_CART,
  SET_ORDER_CONFIRMATION,
 } = actions;

type CartItemType = {
  ID: string,
  qty: number,
  options?: Object,
  data?: Object,
}

type InitialStateType = {
  totalQty: number,
  totalPrice: number,
  items: Array<CartItemType>,
};

const INITIAL_STATE: InitialStateType = {
  totalQty: 0,
  totalPrice: 0,
  items: [],
};

const toFixed = num => parseFloat(parseFloat(num).toFixed(2));

export default function (state: InitialStateType = INITIAL_STATE, action: ActionType) {
  if (!action.payload) return state;
  const newState = Object.assign({}, state);
  const product = action.payload;
  const isString = typeof product === 'string';
  if (
    action.type !== REMOVE_FROM_CART &&
    (
      (isString && state.items.includes(product)) ||
      (isString && state.items.find(p => p._id === product)) ||
      (state.items.find(p => p._id === product._id))
    )) {
    return state;
  }

  switch (action.type) {

    case SET_ORDER_CONFIRMATION:
      return Object.assign({}, INITIAL_STATE);

    case ADD_TO_CART:
      newState.items.push(action.payload);
      newState.totalQty = newState.items.length;
      if (!isString) {
        newState.totalPrice += toFixed(product.Price);
      }
      return newState;

    case PRODUCT_DATA_LOADED:
      const { _id: id } = action.payload;
      newState.totalPrice += toFixed(action.payload.Price);
      newState.items[
        newState.items.findIndex(p => p === id)
      ] = action.payload;
      return newState;

    case REPLACE_CART:
      return action.payload;

    case REMOVE_FROM_CART:
      const ID = action.payload;
      const item: Object = newState.items.find(p => p === ID || p._id === ID) || { Price: 0 };
      newState.totalQty -= 1;
      if (typeof item !== 'string') {
        newState.totalPrice -= toFixed(item.Price);
      }
      const products = newState.items.filter(p => p._id !== ID);
      newState.items = products;
      return newState;

    default:
      return state;
  }
}
