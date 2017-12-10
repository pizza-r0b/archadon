// @flow
import actions from 'Actions';

const { REQUEST_PAIR_END } = actions;
const initialState = () => ({
  results: {},
  colors: [],
});


export default function productDetails(state = initialState(), action) {
  switch (action.type) {
    case REQUEST_PAIR_END:
      return action.payload;
    default:
      return state;
  }
}
