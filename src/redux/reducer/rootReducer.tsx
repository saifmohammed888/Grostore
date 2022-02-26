import { combineReducers } from 'redux';
import alertReducer from 'redux/reducer/alertReducer';
import pinReducer from 'redux/reducer/pinReducer';

const rootReducer = combineReducers({
  pincode: pinReducer,
  alert: alertReducer,
});

export default rootReducer;
