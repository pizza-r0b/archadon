import actions from 'Actions';
const { SET_REDIRECT_PATH, CLEAR_REDIRECT_PATH } = actions;

export default (state = null, action) => {
  switch (action.type) {
    case SET_REDIRECT_PATH:
      return action.payload;
    case CLEAR_REDIRECT_PATH:
      return null;
    default:
      return state;
  }
};
