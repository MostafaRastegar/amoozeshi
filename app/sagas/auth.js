import { takeLatest, takeEvery, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {
  loginPost,
  signUpPost,
} from '../api/account';

import {
  SIGNIN_USER,
  SIGNUP_USER,
} from '../constants/actionAuthTypes';

import {
  getUserInfo,
} from '../actions/auth';
import { disableLoading, enableLoading } from 'actions/loading';
import { addToast } from 'actions/notifications';

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watchUserLogin() {
  yield takeLatest(SIGNIN_USER, userLogin);
}

// worker saga: makes the api call when watcher saga sees the action
function* userLogin({ payload }) {
  try {
    yield put(enableLoading({ loginLoading: true }));
    const signInUser = yield loginPost(payload);
    if (signInUser.hasOwnProperty('user')) {
      yield put(getUserInfo(signInUser.user));
      localStorage.setItem('token',signInUser.user.token)
      yield put(disableLoading({ loginLoading: false }));
      yield put(push('/'));
      yield put(
        addToast({
          text: `Welcome ${signInUser.user.username}`,
          color: 'success',
          delay: 3000,
        }),
      );
    } else {
      yield put(disableLoading({ loginLoading: false }));
      yield put(
        addToast({
          text: 'Can not login',
          color: 'danger',
          delay: 2000,
        }),
      );
    };
  } catch (error) {
     yield put(disableLoading({ loginLoading: false }));
     yield put(
       addToast({
         text: 'Error!,Please try again later.',
         color: 'danger',
         delay: 2000,
       }),
     )
  }
}

export function* watchUserSignup() {
  yield takeLatest(SIGNUP_USER, userSignUp);
}

// worker saga: makes the api call when watcher saga sees the action
function* userSignUp({ payload }) {
  try {
    yield put(enableLoading({ registerLoading: true }));
    const signUpUser = yield signUpPost(payload);
    if (signUpUser.hasOwnProperty('user')) {
      yield put(getUserInfo(signUpUser.user));
      yield ()=>localStorage.setItem('token',signInUser.user.token)
      yield put(disableLoading({ registerLoading: false }));
      yield put(push('/'));
      yield put(
        addToast({
          text: `Welcome ${signUpUser.user.username}`,
          color: 'success',
          delay: 3000,
        }),
      );
    } else {
      yield put(disableLoading({ registerLoading: false }));
      yield put(
        addToast({
          text: 'Error!, Please your data',
          color: 'danger',
          delay: 2000,
        }),
      );
    }
  } catch (error) {
    yield put(disableLoading({ loginLoading: false }));
    yield put(
      addToast({
        text: 'Error!, Please check your data',
        color: 'danger',
        delay: 2000,
      }),
    )
  }
}