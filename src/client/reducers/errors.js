// @flow
import actions from 'Actions';
const { SET_ERROR } = actions;

export default function errors(state = {}, action) {
  switch (action.type) {
    case SET_ERROR:
      const { type, error }: { type: string, error: string } = action.payload;
      return {
        ...state,
        ...{
          [type]: error,
        },
      };
    default:
      return state;
  }
}
