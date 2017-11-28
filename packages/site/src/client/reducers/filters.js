// @flow
import actions from 'Actions';
const { ON_FILTER_UPDATE, ON_CLEAR_FILTERS } = actions;

export default function filters(state = [], action) {
  switch (action.type) {
    case ON_FILTER_UPDATE:
      const newState = state.filter(item => item.field !== action.payload.filter.field);
      console.log(newState);
      return [...newState, action.payload.filter];
    case ON_CLEAR_FILTERS:
      return [];
    default:
      return state;
  }
}
