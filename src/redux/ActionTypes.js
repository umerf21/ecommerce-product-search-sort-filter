import { createAction } from '@reduxjs/toolkit';

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const CANCEL = 'CANCEL';
const RESET = 'RESET';

const defaultTypes = [REQUEST, SUCCESS, FAILURE, CANCEL, RESET];
const requestTypes = [REQUEST, SUCCESS, FAILURE];

const makeRequesActions = (base, types = defaultTypes) => {
  const reqType = { type: base };
  types.forEach(type => {
    reqType[type] = `${base}_${type}`;
  });
  const requestActions = [reqType];
  requestTypes.forEach(item => {
    requestActions.push(createAction(reqType[item]));
  });
  return requestActions;
};

const makeAction = base => {
  const action = createAction(base);
  return [base, action];
};

export {
  REQUEST,
  SUCCESS,
  FAILURE,
  CANCEL,
  RESET,
  makeRequesActions,
  makeAction,
};
