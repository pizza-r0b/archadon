// @flow
import actions from 'Actions';

const { REQUEST_PAIR_END, RESET_PAIR } = actions;
const initialState = () => ({
  results: {},
  colors: [],
});


export default function productDetails(state = initialState(), action) {
  switch (action.type) {
    case REQUEST_PAIR_END:
      return action.payload;
    case RESET_PAIR:
      return initialState();
    default:
      return state;
  }
}
