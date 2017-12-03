import actions from 'Constants';

const { IMAGE_PREVIEW, EDIT_ITEM } = actions;

export default function ui(state = {}, action) {
  switch (action.type) {
    case IMAGE_PREVIEW:
      return {
        ...state,
        imagePreview: action.payload,
      };
    case EDIT_ITEM:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
