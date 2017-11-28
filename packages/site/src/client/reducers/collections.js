// @flow
import actions from 'Actions';
const { GET_COLLECTION_END } = actions;

export default function filters(state = {}, action) {
  switch (action.type) {
    case GET_COLLECTION_END:
      return {
        ...state,
        [action.payload.name]: {
          time: Date.now(),
          collection: action.payload.collection,
        },
      };
    default:
      return state;
  }
}
