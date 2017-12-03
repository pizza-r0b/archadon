import actions from 'Constants';

const { UPDATE_PRODUCT_END, DELETE_PRODUCT_END } = actions;

const reducerFuncs = {
  [UPDATE_PRODUCT_END](state, action) {
    const { index, item } = action.payload;
    const newState = state.slice();
    newState[index] = item;
    return newState;
  },
  [DELETE_PRODUCT_END](state, action) {
    const id = action.payload;
    const newState = state.filter(item => id !== item._id);
    return newState;
  },
};

export default function data(state = [], action) {
  const fn = reducerFuncs[action.type] || (() => state);
  return fn(state, action);
}
