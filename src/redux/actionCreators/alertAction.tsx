import { alertTypes } from 'redux/types';

const alertActionCreator = {
  successAlert: function (
    dispatch: (arg0: { type: string; data: String }) => void,
    data: String
  ) {
    dispatch({ type: alertTypes.successAlert, data: data });
  },

  errorAlert: function (
    dispatch: (arg0: { type: string; data: String }) => void,
    data: String
  ) {
    dispatch({ type: alertTypes.errorAlert, data: data });
  },
};

export default alertActionCreator;
