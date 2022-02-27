import { alertTypes } from 'redux/types';

const alertActionCreator = {
  successAlert: function (dispatch, data) {
    dispatch({ type: alertTypes.successAlert, payload: data });
  },
  errorAlert: function (dispatch, data) {
    dispatch({ type: alertTypes.errorAlert, payload: data });
  },
};

export default alertActionCreator;
