// @flow
import actions from 'Actions';
const { ON_FILTER_UPDATE, ON_CLEAR_FILTERS } = actions;

export default function filters(state = [], action) {
  switch (action.type) {
    case ON_FILTER_UPDATE:
      if (action.payload.filter.type === 'r') {
        state = state.filter(item => item.type !== 'r');
      }
      return [...state, action.payload.filter];
    case ON_CLEAR_FILTERS:
      return [];
    default:
      return state;
  }
}
