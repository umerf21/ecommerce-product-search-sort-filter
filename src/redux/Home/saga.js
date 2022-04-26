import { callRequest } from '../../utils/ApiSauce';
import { call, take, put, fork } from 'redux-saga/effects';
import { failureGetCategories, GET_CATEGORIES, successGetCategories } from '.';
import { API_CATEGORIES } from '../../config/WebService';

function* watchGetCategories() {
  while (true) {
    const { payload } = yield take(GET_CATEGORIES.REQUEST);

    try {
      const response = yield call(callRequest, API_CATEGORIES, payload);

      yield put(successGetCategories(response));
    } catch (err) {
      yield put(failureGetCategories(err.message));
    }
  }
}

export default function* root() {
  yield fork(watchGetCategories);
}
