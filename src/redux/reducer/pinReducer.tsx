import { pinAction } from 'redux/types';

interface StateType {
  [key: string]: any;
}

export default function pinReducer(
  state: StateType = { error: null },
  action
): any {
  switch (action.type) {
    case pinAction.setPincode:
      state.location = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
}
