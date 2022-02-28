import { cartTypes } from 'redux/types';

const cartActionCreator = {
  addToCart: function (dispatch, data) {
    dispatch({ type: cartTypes.addToCart, payload: data });
  },
};

export default cartActionCreator;
