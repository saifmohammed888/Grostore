import { combineReducers } from 'redux';

import pinReducer from 'redux/reducer/pinReducer';
import alertReducer from './alertReducer';
import cartReducer from './cartAction';

const reducer = combineReducers({
  pin: pinReducer,
  alert: alertReducer,
  cart:cartReducer
});

export default reducer;
