import { combineReducers } from 'redux';

import pinReducer from 'redux/reducer/pinReducer';
import alertReducer from './alertReducer';

const reducer = combineReducers({
  pin: pinReducer,
  alert: alertReducer,
});

export default reducer;
