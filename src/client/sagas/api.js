import { request } from 'Utils';
const REQUEST_URL = process.env.NODE_ENV !== 'production' ? 'https://api.archadon.com/dev' : '';

const url = path => `${REQUEST_URL}/${path}`;

export const requestLogin = (email: string, password: string) => request('POST', url('user/v1/login'), { email, password });
export const requestSignUp = (email: string, password: string) => request('POST', url('user/v1/create'), { email, password });
export const requestUserData = (ID: string, token: string) => request('GET', url(`user/v1/read/${ID}`), null, {
  authtoken: token,
});
export const requestProductList = (startKey: string) => request('GET', url(`product/v1/list${startKey ? `?startKey=${startKey}` : ''}`));
export const requestProductData = (ID: string) => request('GET', url(`product/v1/data/${ID}`));
