import actions from 'Actions';
const {
  REQUEST_START,
  REQUEST_DONE,
  REQUEST_ERROR,
 } = actions;

export default (state = {}, action) => {
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state,
        [action.payload]: 'started',
      };
    case REQUEST_DONE:
      return {
        ...state,
        [action.payload]: 'done',
      };
    case REQUEST_ERROR:
      return {
        ...state,
        [action.payload]: 'error',
      };
    default:
      return state;
  }
};
