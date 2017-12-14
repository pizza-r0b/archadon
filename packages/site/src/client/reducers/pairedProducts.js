// @flow
import actions from 'Actions';

const {
  REQUEST_PAIR_END,
  REQUEST_PAIR_START,
  RESET_PAIR,
  REQUEST_PAIR_ERROR,
  SAVE_COLLECTION_END,
  SAVE_COLLECTION_ERROR,
  SAVE_COLLECTION_START,
  REQUEST_SAVED_COLLECTION_START,
  REQUEST_SAVED_COLLECTION_END,
  REQUEST_SAVED_COLLECTION_ERROR,
 } = actions;
const initialState = () => ({
  results: {},
  colors: [],
  savingEmail: false,
});


export default function productDetails(state = initialState(), action) {
  switch (action.type) {
    case REQUEST_PAIR_END:
      return action.payload;
    case REQUEST_PAIR_START:
      return {
        ...state,
        error: false,
      };
    case RESET_PAIR:
      return initialState();
    case SAVE_COLLECTION_START:
      return {
        ...state,
        savingEmail: 'started',
      };
    case SAVE_COLLECTION_ERROR:
      return {
        ...state,
        savingEmail: 'error',
      };
    case SAVE_COLLECTION_END:
      return {
        ...state,
        savingEmail: 'end',
      };
    case REQUEST_SAVED_COLLECTION_START:
      return {
        ...state,
        collectionRequest: 'started',
      };
    case REQUEST_SAVED_COLLECTION_END:
      return {
        ...state,
        collectionRequest: 'end',
      };
    case REQUEST_PAIR_ERROR:
      return {
        ...initialState(),
        error: true,
      };
    case REQUEST_SAVED_COLLECTION_ERROR:
      return {
        ...state,
        collectionRequest: 'error',
      };
    default:
      return state;
  }
}
