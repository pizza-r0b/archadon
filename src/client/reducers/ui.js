// @flow
import actions from 'Actions';
const {
  HOME_LOADED,
} = actions;

export default function products(state = {}, action) {
  switch (action.type) {
    case HOME_LOADED:
      return {
        ...state,
        homeLoaded: true,
      };

    default:
      return state;
  }
}
