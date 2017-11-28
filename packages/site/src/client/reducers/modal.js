import { actions } from '../constants';

export default function modal(state = {}, action) {
  switch (action.type) {
    case actions.TOGGLE_MODAL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
