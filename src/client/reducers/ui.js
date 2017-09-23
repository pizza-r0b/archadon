// @flow
import actions from 'Actions';
const {
  HOME_LOADED,
  NAV_STATE,
  PAGE_CHANGE,
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

    case PAGE_CHANGE:
      return {
        ...state,
        pageChange: action.payload,
      };
    default:
      return state;
  }
}
