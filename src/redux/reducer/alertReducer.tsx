import { alertTypes } from 'redux/types';

interface StateType {
  [key: string]: any;
}

export default function alertReducer(
  state: StateType = { error: null },
  action: { type: any; payload: any }
): any {
  switch (action.type) {
    case alertTypes.successAlert:
      state.message = action.payload;
      state.type = alertTypes.successAlert;
      return {
        ...state,
      };
    case alertTypes.errorAlert:
      state.message = action.payload;
      state.type = alertTypes.errorAlert;
      return {
        ...state,
      };
    default:
      return state;
  }
}
