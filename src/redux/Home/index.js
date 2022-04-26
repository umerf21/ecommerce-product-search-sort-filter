import { makeRequesActions } from '../ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

export const [
  GET_CATEGORIES,
  requestGetCategories,
  successGetCategories,
  failureGetCategories,
] = makeRequesActions('GET_CATEGORIES');

const initialState = { data: [] };

// init reducer
export default createReducer(initialState, (builder) => {
  builder.addCase(GET_CATEGORIES.SUCCESS, (state, action) => {
    state.categories = action.payload;
  });
});

//selector
export const getCategories = (state) => state.Home.categories;
