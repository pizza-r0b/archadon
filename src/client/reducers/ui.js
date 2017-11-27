// @flow
import actions from 'Actions';
import { LOCATION_CHANGE } from 'react-router-redux';
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
    case LOCATION_CHANGE:
      const prevPath = state.currentPath || '';
      return {
        ...state,
        prevPath,
        currentPath: action.payload.pathname,
      };
    default:
      return state;
  }
}
