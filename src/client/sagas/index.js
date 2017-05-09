import { push } from 'react-router-redux';
import { call, takeLatest, put, select } from 'redux-saga/effects';
import Actions from 'Actions';
import { action } from 'Utils';
const {
  LOG_IN,
  SET_ERROR,
  SET_USER_DATA,
  USER_AUTH_SUCCESS,
  SIGN_UP,
} = Actions;
import {
  requestLogin,
  requestUserData,
  requestSignUp,
} from './api';

const getAuthData = state => ({
  authToken: state.user.authToken,
  ID: state.user.ID,
});

export function* logInSaga({ payload: { email, password } }) {
  yield put(action(SET_ERROR, {
    type: 'login',
    error: null,
  }));
  try {
    const { response: { authToken, ID } } = yield call(requestLogin, email, password);
    yield put(action(USER_AUTH_SUCCESS, {
      authToken,
      ID,
    }));
  } catch ({ status }) {
    let error;
    if (status === 401) {
      error = 'Invalid username or password. Try again 😊.';
    } else {
      error = 'Oops something went wrong 💩. Try again later.';
    }
    yield put(action(SET_ERROR, {
      type: 'login',
      error,
    }));
  }
}

export function* getUserDataSaga() {
  const { authToken, ID } = yield select(getAuthData);
  try {
    const { response: { data } } = yield call(requestUserData, ID, authToken);
    yield put(action(SET_USER_DATA, data));
  } catch (e) {
    console.log(e);
  }
}

export function* signUpSaga({ payload: { email, password } }) {
  yield put(action(SET_ERROR, {
    type: 'signup',
    error: null,
  }));

  try {
    const { response: { authToken, ID } } = yield call(requestSignUp, email, password);

    yield put(action(USER_AUTH_SUCCESS, {
      authToken,
      ID,
    }));
  } catch ({ status, response: { body } }) {
    let error;
    if (body === 'User already exists' && status === 409) {
      error = 'Oops. Looks like that user already exists. Try logging in';
    } else {
      error = 'Oops. Something went wrong. Try again later.';
    }
    yield put(action(SET_ERROR, {
      type: 'signup',
      error,
    }));
  }
}

export default function* rootSaga() {
  yield [
    takeLatest(LOG_IN, logInSaga),
    takeLatest(SIGN_UP, signUpSaga),
    takeLatest(USER_AUTH_SUCCESS, getUserDataSaga),
  ];
}
