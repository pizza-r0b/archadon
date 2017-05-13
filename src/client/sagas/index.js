import { push } from 'react-router-redux';
import { call, takeLatest, put, select } from 'redux-saga/effects';
import Actions from 'Actions';
import { action } from 'Utils';
const {
  LOG_IN,
  LOG_OUT,
  SET_ERROR,
  SET_USER_DATA,
  USER_AUTH_SUCCESS,
  CLEAR_AUTHENTICATION_DATA,
  SIGN_UP,
  LOADING,
  APP_LOAD,
} = Actions;
import {
  requestLogin,
  requestUserData,
  requestSignUp,
  requestProductList,
} from './api';

const getAuthData = state => ({
  authToken: state.user.authToken,
  ID: state.user.ID,
});

const getRedirectPath = state => state.redirectPath;

export function saveToLocalStorage(authToken, ID) {
  window.localStorage.setItem('archadonauth', JSON.stringify({
    authToken, ID,
  }));
}

export function* getDataFromLocalStorage() {
  let data;
  try {
    data = JSON.parse(window.localStorage.getItem('archadonauth'));
  } catch (e) {

  }
  if (data) {
    yield put(action(USER_AUTH_SUCCESS, data));
  }
}

export function clearLocalStorageData() {
  window.localStorage.clear('archadonauth');
}

export function* logOutSaga() {
  yield call(clearAuthenticationDataSaga);
  yield put(push('/login'));
}

export function* clearAuthenticationDataSaga() {
  yield call(clearLocalStorageData);
}

export function* logInSaga({ payload: { email, password } }) {
  yield put(action(LOADING, true));
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
    yield put(push('/account'));
    yield call(saveToLocalStorage, authToken, ID);
  } catch ({ status }) {
    let error;
    switch (status) {
      case 401:
        error = 'Invalid username or password. Try again 😊';
        break;
      case 404:
        error = 'That account doesn\'t exist.';
        break;
      default:
        error = 'Oops something went wrong 💩 Try again later.';
    }
    yield put(action(LOADING, false));
    yield put(action(SET_ERROR, {
      type: 'login',
      error,
    }));
  }
}

export function* getProductListSaga({ payload: { startKey } }) {
  const data = yield call(requestProductList, startKey);
  console.log(data);
}

export function* getUserDataSaga() {
  yield put(action(LOADING, true));
  const { authToken, ID } = yield select(getAuthData);
  try {
    const { response: { data } } = yield call(requestUserData, ID, authToken);
    const redirectPath = yield select(getRedirectPath);

    yield put(action(SET_USER_DATA, data));
    if (redirectPath) {
      yield put(push(redirectPath));
    }
  } catch (e) {
    yield put(action(CLEAR_AUTHENTICATION_DATA));
  }
  yield put(action(LOADING, false));
}

export function* signUpSaga({ payload: { email, password } }) {
  yield put(action(LOADING, true));
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
    yield put(push('/account'));
    yield call(saveToLocalStorage, authToken, ID);
  } catch ({ status, response: { body } }) {
    let error;
    if (body === 'User already exists' && status === 409) {
      error = 'Oops. Looks like that user already exists. Try logging in';
    } else {
      error = 'Oops. Something went wrong. Try again later.';
    }
    yield put(action(LOADING, false));
    yield put(action(SET_ERROR, {
      type: 'signup',
      error,
    }));
  }
}


export default function* rootSaga() {
  yield [
    takeLatest(LOG_IN, logInSaga),
    takeLatest(APP_LOAD, [getDataFromLocalStorage, getProductListSaga]),
    takeLatest(SIGN_UP, signUpSaga),
    takeLatest(USER_AUTH_SUCCESS, getUserDataSaga),
    takeLatest(CLEAR_AUTHENTICATION_DATA, clearAuthenticationDataSaga),
    takeLatest(LOG_OUT, logOutSaga),
  ];
}
