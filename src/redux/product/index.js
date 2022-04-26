import { createReducer } from '@reduxjs/toolkit';
import { makeRequesActions } from '../ActionTypes';

export const [
  PRODUCT_LIST,
  requestProductList,
  successProductList,
  failureProductList,
] = makeRequesActions('PRODUCT_LIST');

const initialState = { data: [] };

// init reducer
export default createReducer(initialState, (builder) => {
  builder.addCase(PRODUCT_LIST.SUCCESS, (state, action) => {
    state.data = action.payload;
  });
});

//selector
export const getProductList = (state) => state.product.data;
