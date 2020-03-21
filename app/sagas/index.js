import { all } from 'redux-saga/effects';
// import {
//   watchUserLogin,
//   watchUserSignup,
// } from './auth';

import locationMiddleware from './locationMiddleware';

// eslint-disable-next-line no-unused-vars
export default function* rootSaga(getState) {
  yield all([
    // watchUserLogin(),
    // watchUserSignup(),
    locationMiddleware(),
  ]);
}
