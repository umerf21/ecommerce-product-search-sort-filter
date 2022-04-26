import { fork } from 'redux-saga/effects';
import Home from './Home/saga';
import product from './product/saga';

export default function* root() {
  yield fork(product);
  yield fork(Home);
}
