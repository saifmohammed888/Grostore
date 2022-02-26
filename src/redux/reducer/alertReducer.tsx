import { alertTypes } from 'redux/types';

interface StateType {
  [key: string]: any;
}

export default function alertReducer(
  state: StateType = { error: null },
  action
): any {
  switch (action.type) {
    case alertTypes.successAlert:
      state.alert = action.data;
      state.show = true;
      state.type = 'success';
      return {
        ...state,
      };
    case alertTypes.errorAlert:
      state.alert = action.data;
      state.show = false;
      state.type = 'error';
      return {
        ...state,
      };
    default:
      return state;
  }
}
