// @flow
import actions from 'Actions';
const {
  SET_ORDER_CONFIRMATION,
} = actions;

export default function products(state = null, action) {
  switch (action.type) {
    case SET_ORDER_CONFIRMATION:
      const { orderID, email } = action.payload;
      return {
        orderID,
        email,
      };
    default:
      return state;
  }
}
