// @flow
import actions from 'Actions';
import { LOCATION_CHANGE } from 'react-router-redux';
const { SET_ERROR } = actions;

export default function errors(state = {}, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return Object.entries(state).filter(([, val]) => val !== null).reduce((a, [key]) => {
        a[key] = null;
        return a;
      }, {});
    case SET_ERROR:
      const { type, error }: { type: string, error: string } = action.payload;
      return {
        ...state,
        ...{
          [type]: error,
        },
      };
    default:
      return state;
  }
}
