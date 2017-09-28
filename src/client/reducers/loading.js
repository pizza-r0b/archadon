import actions from 'Actions';
const { LOADING, SET_LOADING_PAGE } = actions;

export default (state = { full: false, page: '' }, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        full: action.payload,
      };
    case SET_LOADING_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};
