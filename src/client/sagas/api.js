import { request } from 'Utils';

const REQUEST_URL = process.env.NODE_ENV !== 'production' ? 'https://api.archadon.com/dev' : 'https://api.archadon.com/prod';

const url = path => `${REQUEST_URL}/${path}`;

export const requestLogin = (email: string, password: string) => request('POST', url('user/v1/login'), { email, password });

export const requestSignUp = (email: string, password: string) => request('POST', url('user/v1/create'), { email, password });

export const requestUserData = (ID: string, token: string) => request('GET', url(`user/v1/read/${ID}`), null, {
  authtoken: token,
});

export const requestProductList = (page: string, body = {}) => request('POST', `/search/products${page ? `?page=${page}` : ''}`, body);

export const requestProductData = (ID: string) => request('GET', url(`product/v1/data/${ID}`));

export const requestUpdateUserData = (ID: string, token: string, body: Object) => request('POST', url(`user/v1/update/data/${ID}`), { data: body }, {
  authtoken: token,
});

export const requestBatch = (Items: Array<string>) => request('POST', url('product/v1/batch'), { Items });

export const requestCollection = (ids, name) => request('POST', '/search/batch', { ids }, null, { name });

export const requestPurchase = ((payload: {
  Items: Array<Object>,
  UserID: ?string,
  CustomerData: Object,
  Token: string,
}) => request('POST', url('purchase/v1/charge'), payload));
