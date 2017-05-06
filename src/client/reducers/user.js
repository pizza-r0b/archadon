// @flow
import actions from 'Actions';
const { SET_USER_DATA } = actions;

export default function user(state = null, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
