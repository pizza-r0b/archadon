import actions from 'Actions';
const { SET_REDIRECT_PATH } = actions;

export default (state = null, action) => {
  switch (action.type) {
    case SET_REDIRECT_PATH:
      return action.payload;
    default:
      return state;
  }
};
