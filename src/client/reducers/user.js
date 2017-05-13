// @flow
import actions from 'Actions';
const {
  SET_USER_DATA,
  USER_AUTH_SUCCESS,
  LOG_OUT,
  CLEAR_AUTHENTICATION_DATA,
 } = actions;

export default function user(state = {}, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_AUTHENTICATION_DATA:
    case LOG_OUT:
      return {};
    case USER_AUTH_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
