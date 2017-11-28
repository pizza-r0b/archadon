import actions from 'Actions';
const {
  LOADING,
  SET_LOADING_PAGE,
  LOAD_MORE,
  LOAD_MORE_DONE,
  GET_USER_DATA_START,
  GET_USER_DATA_END,
} = actions;

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
    case LOAD_MORE:
      return {
        ...state,
        page: 'products',
      };
    case GET_USER_DATA_START:
      return {
        ...state,
        page: 'user',
      };
    case LOAD_MORE_DONE:
    case GET_USER_DATA_END:
      return {
        ...state,
        page: '',
      };
    default:
      return state;
  }
};
