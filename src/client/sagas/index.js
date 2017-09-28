import { push, LOCATION_CHANGE } from 'react-router-redux';
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
  PAGE_CHANGE,
  SET_REDIRECT_PATH,
  TOGGLE_FAVORITE,
  ADD_TO_CART,
  REPLACE_PRODUCT_LIST,
  PURCHASE,
  APP_LOAD,
  SET_LOADING_PAGE,
  GET_PRODUCT_DETAILS,
  FAVORITES_LOADED,
  REPLACE_CART,
  PRODUCT_DETAIL_LOADED,
  ON_CLEAR_FILTERS,
  REMOVE_FROM_CART,
  LOAD_MORE_DONE,
  LOAD_MORE,
  LOAD_FAVORITES,
  ON_FILTER_UPDATE,
  SET_ORDER_CONFIRMATION,
  ON_NAV_OPEN,
  REQUEST_COLLECTION,
  ON_COLLECTION_SUCCESS,
} = Actions;
import {
  requestLogin,
  requestUserData,
  requestCollection,
  requestSignUp,
  requestBatch,
  requestProductList,
  requestProductData,
  requestPurchase,
  requestUpdateUserData,
} from './api';

const CART_VAR = 'archadon-cart';

const getAuthData = state => ({
  authToken: state.user.authToken,
  ID: state.user.ID,
});

const getCartItems = state => state.cart.items;

const getItemsForCheckout = state => state.cart.items.map(item => ({ ID: item.ID }));

const getLoadingState = state => state.loading.full;

const getCart = state => state.cart;

const getFilters = state => state.filters;

const getRedirectPath = state => state.redirectPath;

const getCurrentPath = state => state.router.location.pathname;

const getUserFavorites = state => state.user.Favorites || [];

const getLoadedProducts = state => state.products.hits;

const getProductDetails = state => state.productDetails;

const getNavState = state => state.navOpen;

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

function all(promises) {
  return Promise.all(promises);
}

export function* requestCollectionSaga({ payload: collections }) {
  yield put(action(LOADING, true));

  const promises = collections.map(collection => requestCollection(collection.ids, collection.name));
  const collection = yield call(all, promises);
  const output = {};

  collection.forEach(c => {
    const { meta: { name }, response: { results } } = c;
    output[name] = results;
  });

  yield put(action(ON_COLLECTION_SUCCESS, output));
  yield put(action(LOADING, false));
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

const productDataCache = new Map();

export function* getProductListSaga(actionString, { payload: { page } }) {
  const actionType = typeof actionString === 'string' ? actionString : PRODUCT_LIST_LOADED;
  const body = {};
  const filters = yield select(getFilters);
  const cacheKey = `${JSON.stringify(filters)}:${page}`;
  const cachedProductResponse = productDataCache.get(cacheKey);
  if (cachedProductResponse) {
    yield put(action(actionType, JSON.parse(cachedProductResponse)));
    return;
  }
  if (filters.length) {
    body.filters = filters;
  }
  const { status, response } = yield call(requestProductList, page, body);
  if (status === 200) {
    productDataCache.set(cacheKey, JSON.stringify(response));
    yield put(action(actionType, response));
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
    const allLoadedProducts = yield select(getProductDetails);
    allLoadedProducts.push(...yield select(getLoadedProducts));
    const productObject = allLoadedProducts.find(p => p.ID === product);
    if (productObject) {
      yield put(action(PRODUCT_DATA_LOADED, productObject));
      return;
    }
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

export function* getProductDetailSaga({ payload: product }) {
  const id = product._id;
  yield put(action(SET_LOADING_PAGE, 'detail'));
  yield put(push(`/product/${product.Name}/${product._id}`));
  const products = yield select(getProductDetails);
  let productDetail = products.find(p => p._id === id);
  if (productDetail) {
    yield put(action(SET_LOADING_PAGE, ''));
    return;
  }
  const allProducts = yield select(getLoadedProducts);
  productDetail = allProducts.find(p => p.ID === id);

  if (!productDetail) {
    try {
      const { response: { data } } = yield call(requestProductData, id);
      if (Object.keys(data).length > 0) {
        data.ID = id;
        productDetail = data;
      }
    } catch (e) { }
  }

  yield put(action(PRODUCT_DETAIL_LOADED, productDetail));
  yield put(action(SET_LOADING_PAGE, ''));
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
      return reject(response);
    }
    return resolve(response.id);
  });
});

export function* purchaseSaga({ payload: { data: CustomerData, cardDetails } }) {
  yield put(action(SET_LOADING_PAGE, 'purchase'));
  const { card: number, expMonth: exp_month, expYear: exp_year, cvc } = cardDetails;
  try {
    const Token = yield call(createStripeToken, {
      number, exp_month, exp_year, cvc,
    });
    const { ID: UserID } = yield select(getAuthData);
    const Items = yield select(getItemsForCheckout);

    const payload = {
      Items,
      UserID,
      CustomerData,
      Token,
    };
    const { response } = yield call(requestPurchase, payload);
    if (response.success) {
      localStorage.clear(CART_VAR);
      yield put(action(SET_ORDER_CONFIRMATION, {
        orderID: response.OrderID,
        email: CustomerData.email,
      }));
      yield put(push('/order-confirmation'));
    }
  } catch (e) {
    const { error = {}, response = { error: { code: '' } } } = e;
    if (
      (response.error && response.error.code && response.error.code === 'stripe-charge-failure') ||
      (error && error.type === 'card_error')
    ) {
      yield put(action(SET_ERROR, {
        type: 'checkout',
        error: 'Oops. Your order wasn\'t processed. Please check your card details.',
      }));
    } else {
      yield put(action(SET_ERROR, {
        type: 'checkout',
        error: 'Oops. Your order wasn\'t processed. Please verify your information is correct or try again.',
      }));
    }
  }
  yield put(action(SET_LOADING_PAGE, ''));
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
  if (!authToken || !ID) {
    yield put(action(SET_LOADING_PAGE, ''));
    return;
  }
  try {
    const favorites = yield select(getUserFavorites);
    if (!favorites.length) {
      yield put(action(SET_LOADING_PAGE, ''));
      return;
    }
    const { response: data } = yield call(requestBatch, favorites);
    yield put(action(FAVORITES_LOADED, data));
  } catch (e) {
    yield put(action(SET_LOADING_PAGE, ''));
  }
  yield put(action(SET_LOADING_PAGE, ''));
}

export function* onNavOpenSaga() {
  const navOpen = yield select(getNavState);
  document.body.style.overflow = navOpen ? 'hidden' : 'auto';
}

export default function* rootSaga() {
  yield [
    takeLatest(LOAD_MORE, getProductListSaga, LOAD_MORE_DONE),
    takeLatest([ON_FILTER_UPDATE, ON_CLEAR_FILTERS], getProductListSaga, REPLACE_PRODUCT_LIST),
    takeLatest(LOAD_FAVORITES, loadFavoritesSaga),
    takeLatest(LOG_IN, logInSaga),
    takeLatest(APP_LOAD, getDataFromLocalStorage),
    takeLatest(ADD_TO_CART, getProductDataSaga),
    takeLatest(TOGGLE_FAVORITE, toggleFavoriteSaga),
    takeLatest(GET_PRODUCT_DETAILS, getProductDetailSaga),
    takeLatest(ON_NAV_OPEN, onNavOpenSaga),
    takeLatest(SIGN_UP, signUpSaga),
    takeLatest(USER_AUTH_SUCCESS, getUserDataSaga),
    takeLatest(CLEAR_AUTHENTICATION_DATA, clearAuthenticationDataSaga),
    takeLatest(LOG_OUT, logOutSaga),
    takeLatest(PURCHASE, purchaseSaga),
    takeLatest(REQUEST_COLLECTION, requestCollectionSaga),
    (function* () {
      while (true) {
        yield take([ADD_TO_CART, REMOVE_FROM_CART]);
        yield call(addToCartLocalStorage);
      }
    }()),
    (function* () {
      while (true) {
        yield take(LOADING);
        const loading = yield select(getLoadingState);
        if (loading) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'initial';
        }
      }
    }()),
    (function* () {
      let initialLoad = true;
      while (true) {
        yield take([LOCATION_CHANGE]);
        if (!initialLoad) {
          yield put(action(PAGE_CHANGE, true));
        }
        const navOpen = yield select(getNavState);
        if (navOpen) {
          yield put(action(ON_NAV_OPEN, !navOpen));
        }
        if (typeof window.ga !== 'undefined' && !initialLoad) {
          const path = yield select(getCurrentPath);
          window.ga('set', 'page', path);
          window.ga('send', 'pageview');
        }
        initialLoad = false;
      }
    }()),
  ];
}
