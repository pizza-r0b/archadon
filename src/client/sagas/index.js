import { push } from 'react-router-redux';
import { call, takeLatest, put, select, take } from 'redux-saga/effects';
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
  PRODUCT_LIST_LOADED,
  PRODUCT_DATA_LOADED,
  SET_REDIRECT_PATH,
  TOGGLE_FAVORITE,
  ADD_TO_CART,
  PURCHASE,
  APP_LOAD,
  SET_LOADING_PAGE,
  FAVORITES_LOADED,
  REPLACE_CART,
  REMOVE_FROM_CART,
  LOAD_FAVORITES,
} = Actions;
import {
  requestLogin,
  requestUserData,
  requestSignUp,
  requestBatch,
  requestProductList,
  requestProductData,
  requestUpdateUserData,
} from './api';

const CART_VAR = 'archadon-cart';

const getAuthData = state => ({
  authToken: state.user.authToken,
  ID: state.user.ID,
});

const getCartItems = state => state.cart.items;

const getCart = state => state.cart;

const getRedirectPath = state => state.redirectPath;

const getCurrentPath = state => state.router.location.pathname;

const getUserFavorites = state => state.user.Favorites || [];

export function saveToLocalStorage(authToken, ID) {
  window.localStorage.setItem('archadonauth', JSON.stringify({
    authToken, ID,
  }));
}

export function* getDataFromLocalStorage() {
  let data;
  let cart;
  try {
    data = JSON.parse(window.localStorage.getItem('archadonauth'));
  } catch (e) {

  }
  try {
    cart = JSON.parse(window.localStorage.getItem(CART_VAR));
  } catch (e) {

  }
  if (cart) {
    yield put(action(REPLACE_CART, cart));
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
  const { status, response: { LastEvaluatedKey, Items, Count } } = yield call(requestProductList, startKey);
  if (status === 200) {
    yield put(action(PRODUCT_LIST_LOADED, {
      LastEvaluatedKey,
      Items,
      Count,
    }));
  }
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

export function* getProductDataSaga({ payload: product }) {
  // if only product ID is added to cart then we need to get the rest of the
  // data from the server.
  if (typeof product === 'string') {
    const cartItems = yield select(getCartItems);
    if (cartItems.find(p => p.ID === product)) return;
    try {
      const { response: { data } } = yield call(requestProductData, product);
      if (Object.keys(data).length > 0) {
        data.ID = product;
        yield put(action(PRODUCT_DATA_LOADED, data));
      }
    } catch (e) {

    }
  }
}

export function* addToCartLocalStorage() {
  const cart = yield select(getCart);
  window.localStorage.setItem(CART_VAR, JSON.stringify(cart));
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

const createStripeToken = data => new Promise((resolve, reject) => {
  window.Stripe.card.createToken(data, (status, response) => {
    if (response.error) {
      return reject(response.error.message);
    }
    return resolve(response.id);
  });
});

export function* purchaseSaga({ payload: { data, cardDetails } }) {
  const { card: number, expMonth: exp_month, expYear: exp_year, cvc } = cardDetails;
  try {
    const token = yield call(createStripeToken, {
      number, exp_month, exp_year, cvc,
    });
  } catch (e) {
    console.log(e);
  }

}

export function* toggleFavoriteSaga() {
  const Favorites = yield select(getUserFavorites);
  const { authToken, ID } = yield select(getAuthData);
  if (!authToken || !ID) {
    const currentPath = yield select(getCurrentPath);
    yield put(action(SET_REDIRECT_PATH, currentPath));
    yield put(push('/login'));
    yield put(action(SET_ERROR, {
      type: 'login',
      error: 'Please sign in to your account to favorite items.',
    }));
  } else {
    try {
      yield call(requestUpdateUserData, ID, authToken, {
        Favorites,
      });
    } catch (e) {

    }
  }
}

export function* loadFavoritesSaga() {
  yield put(action(SET_LOADING_PAGE, 'favorites'));
  const { authToken, ID } = yield select(getAuthData);
  if (!authToken || !ID) return;
  try {
    const favorites = yield select(getUserFavorites);
    if (!favorites.length) return;
    const { response: data } = yield call(requestBatch, favorites);
    yield put(action(FAVORITES_LOADED, data));
  } catch (e) {

  }
  yield put(action(SET_LOADING_PAGE, ''));
}


export default function* rootSaga() {
  yield [
    takeLatest(LOAD_FAVORITES, loadFavoritesSaga),
    takeLatest(LOG_IN, logInSaga),
    takeLatest(APP_LOAD, getDataFromLocalStorage),
    takeLatest(ADD_TO_CART, getProductDataSaga),
    takeLatest(TOGGLE_FAVORITE, toggleFavoriteSaga),
    takeLatest(SIGN_UP, signUpSaga),
    takeLatest(USER_AUTH_SUCCESS, getUserDataSaga),
    takeLatest(CLEAR_AUTHENTICATION_DATA, clearAuthenticationDataSaga),
    takeLatest(LOG_OUT, logOutSaga),
    takeLatest(PURCHASE, purchaseSaga),
    (function* () {
      while (true) {
        yield take([ADD_TO_CART, REMOVE_FROM_CART]);
        yield call(addToCartLocalStorage);
      }
    }()),
  ];
}
