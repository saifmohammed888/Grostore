import { alertTypes, cartTypes } from 'redux/types';

interface StateType {
  [key: string]: any;
}

export default function cartReducer(
  state: StateType = { error: null },
  action: { type: any; payload: any }
): any {
  switch (action.type) {
    case cartTypes.addToCart:
      state.items = action.payload;
      state.type = cartTypes.addToCart;
      return {
        ...state,
      };

    default:
      return state;
  }
}
