import actions from 'Constants';

const { GET_ORDERS_END } = actions;

const reducerFuncs = {
  [GET_ORDERS_END](state, action) {
    return action.payload;
  },
};

export default function data(state = [], action) {
  const fn = reducerFuncs[action.type] || (() => state);
  return fn(state, action);
}
