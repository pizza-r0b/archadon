// @flow
import actions from 'Actions';
const { ON_COLLECTION_SUCCESS } = actions;

export default function filters(state = {}, action) {
  switch (action.type) {
    case ON_COLLECTION_SUCCESS:

      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
