import actions from 'Actions';
const { LOADING } = actions;

export default (state = false, action) => {
  switch (action.type) {
    case LOADING:
      return action.payload;
    default:
      return state;
  }
};
