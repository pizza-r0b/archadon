// @flow
import actions from 'Actions';
const {
  SET_USER_DATA,
  USER_AUTH_SUCCESS,
  LOG_OUT,
  CLEAR_AUTHENTICATION_DATA,
  TOGGLE_FAVORITE,
  FAVORITES_LOADED,
  SIGN_OUT,
} = actions;

type StateType = {
  Favorites: Array<Object>
};

const INITIAL_STATE = { Favorites: [], FavoritesDetail: [] };

export default function user(state: StateType = INITIAL_STATE, action: Object) {
  switch (action.type) {
    case SET_USER_DATA:
      if (Array.isArray(action.payload.orders)) {
        action.payload.orders.sort((a, b) => (a.createdAt > b.createdAt) ? -1 : ((a.createdAt < b.createdAt) ? 1 : 0)); // eslint-disable-line
      }
      return {
        ...state,
        ...action.payload,
      };
    case FAVORITES_LOADED:
      return {
        ...state,
        FavoritesDetail: action.payload || [],
      };
    case SIGN_OUT:
      return INITIAL_STATE;
    case TOGGLE_FAVORITE:
      if (!state.authToken) return state;
      const ID = action.payload;
      state.Favorites = state.Favorites || [];
      const item = state.Favorites.find((p) => p === ID);
      let Favorites;
      if (item) {
        Favorites = state.Favorites.filter((p) => p !== ID);
      } else {
        state.Favorites.push(ID);
        Favorites = state.Favorites.slice();
      }
      return {
        ...state,
        Favorites,
      };
    case CLEAR_AUTHENTICATION_DATA:
    case LOG_OUT:
      return {};
    case USER_AUTH_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
