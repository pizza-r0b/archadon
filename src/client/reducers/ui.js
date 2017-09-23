// @flow
import actions from 'Actions';
const {
  HOME_LOADED,
  NAV_STATE,
} = actions;

export default function products(state = {}, action) {
  switch (action.type) {
    case HOME_LOADED:
      return {
        ...state,
        homeLoaded: true,
      };

    case NAV_STATE:
      return {
        ...state,
        navFixed: action.payload,
      };
    default:
      return state;
  }
}
