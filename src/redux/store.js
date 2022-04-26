import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import { RootReducer, RootSaga } from './index';

// check if chrome debugger is on
const isDebuggingInChrome = !!window.navigator.userAgent;

// init logger
const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// create list of middleware
const middlewareList = [sagaMiddleware, logger];

// create store with enable batching
export default configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewareList),
});

// then run the saga
sagaMiddleware.run(RootSaga);
