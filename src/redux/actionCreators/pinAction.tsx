import { pinAction } from 'redux/types';

const pinActionCreator = {
  setPincode: function (
    dispatch: (arg0: { type: string; data: any }) => void,
    data: any
  ) {
    dispatch({ type: pinAction.setPincode, data: data });
  },
};

export default pinActionCreator;
