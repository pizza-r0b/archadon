import { call, put } from 'redux-saga/effects';
import {
  requestSaveCollection,
  requestPairedProducts,
  uploadToS3,
  getSignedUrl,
  requestSavedCollection,
} from './api';
import actions from 'Actions';
import { action } from 'Utils';

const {
  SAVE_COLLECTION_ERROR,
  SAVE_COLLECTION_END,
  REQUEST_PAIR_END,
  REQUEST_SAVED_COLLECTION_END,
  REQUEST_PAIR_ERROR,
  SET_LOADING_PAGE,
  REQUEST_SAVED_COLLECTION_ERROR,
} = actions;

export function* pairSaga({ payload }) {
  yield put(action(SET_LOADING_PAGE, 'pair'));
  const { blob, ext, mimeType, dataURL } = payload;
  const { response, status } = yield call(getSignedUrl, ext, mimeType);

  if (status === 200) {
    const { url, fileName } = response;
    const { status: s3Status } = yield call(uploadToS3, blob, url, mimeType);
    if (s3Status === 200) {
      const { response: pairResponse, status: pairStatus } = yield call(requestPairedProducts, fileName, false, mimeType);
      if (pairStatus === 200) {
        yield put(action(REQUEST_PAIR_END, { dataURL, fileName, ...pairResponse }));
      } else {
        yield put(action(REQUEST_PAIR_ERROR));
      }
    } else {
      yield put(action(REQUEST_PAIR_ERROR));
    }
  } else {
    yield put(action(REQUEST_PAIR_ERROR));
  }
  yield put(action(SET_LOADING_PAGE, ''));
}

export function* saveCollectionSaga({ payload }) {
  try {
    const { status } = yield call(requestSaveCollection, payload);
    if (status !== 200) {
      yield put(action(SAVE_COLLECTION_ERROR));
    } else {
      yield put(action(SAVE_COLLECTION_END));
    }
  } catch (e) {
    yield put(action(SAVE_COLLECTION_ERROR));
  }
}

export function* getPairedCollectionSaga({ payload: id }) {
  try {
    const { status, response } = yield call(requestSavedCollection, id);
    if (status === 200) {
      yield put(action(REQUEST_PAIR_END, response));
      yield put(action(REQUEST_SAVED_COLLECTION_END));
    } else {
      yield put(action(REQUEST_SAVED_COLLECTION_ERROR));
    }
  } catch (e) {
    yield put(action(REQUEST_SAVED_COLLECTION_ERROR));
  }
}
