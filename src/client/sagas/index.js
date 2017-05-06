import { push } from 'react-router-redux';
import { call, takeEvery, put } from 'redux-saga/effects';
import Actions from 'Actions';
import { action } from 'Utils';
const {
  LOG_IN,
  SET_ERROR,
  SET_USER_DATA,
} = Actions;
import { requestLogin } from './api';

export function* logInSaga({ payload: { email, password } }) {
  yield put(action(SET_ERROR, {
    type: 'login',
    error: null,
  }));
  try {
    const { response: { authToken, ID } } = yield call(requestLogin, email, password);
    yield put(action(SET_USER_DATA, {
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

export default function* rootSaga() {
  console.log(LOG_IN);
  yield [
    takeEvery(LOG_IN, logInSaga),
  ];
}
