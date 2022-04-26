import { call, take, put, fork } from 'redux-saga/effects';
import { failureProductList, PRODUCT_LIST, successProductList } from '.';
import { API_GET_PRODUCTS } from '../../config/WebService';
import { callRequest } from '../../utils/ApiSauce';

function* watchGetProductList() {
  while (true) {
    const { payload } = yield take(PRODUCT_LIST.REQUEST);

    try {
      const response = yield call(callRequest, API_GET_PRODUCTS, payload);
      yield put(successProductList(response));
    } catch (err) {
      yield put(failureProductList(err.message));
    }
  }
}

export default function* root() {
  yield fork(watchGetProductList);
}
