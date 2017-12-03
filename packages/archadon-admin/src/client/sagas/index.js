import { LOCATION_CHANGE } from 'react-router-redux';
import { call, takeEvery, put } from 'redux-saga/effects';
import actions from '../constants';
import { action } from '../utils/common';
import { fetchOrders } from './api';

const {
  UPDATE_PRODUCT_START,
  UPDATE_PRODUCT_END,
  DELETE_ITEM_START,
  GET_ORDERS_START,
  GET_ORDERS_END,
} = actions;

function* getOrderSaga() {
  try {
    const res = yield call(fetchOrders);
    const json = yield call(() => res.json());
    yield put(action(GET_ORDERS_END, json));
  } catch (e) {
    throw new Error(e);
  }
}

function* updateProductSaga({ payload: { ID, ...attrs } }) {
  let res;

  try {
    res = yield call(fetch, '/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item: { ID, ...attrs } }),
    });
  } catch (e) {
    console.error(e);
  }

  if (res.ok) {
    const { index, item } = yield call(() => res.json());
    yield put(action(UPDATE_PRODUCT_END, { index, item }));
  }
  // const res = yield call(PutData, process.env.PRODUCT_DATA_TABLE, ID, attrs);
  // console.log(res);
}

function* deleteProductSaga({ payload: id }) {

}

export default function* rootSaga() {
  yield [
    takeEvery(GET_ORDERS_START, getOrderSaga),
    takeEvery(UPDATE_PRODUCT_START, updateProductSaga),
    takeEvery(DELETE_ITEM_START, deleteProductSaga),
  ];
}
