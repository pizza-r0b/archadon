import { request } from 'Utils';
const REQUEST_URL = process.env.NODE_ENV !== 'production' ? 'https://api.archadon.com/dev' : '';

const url = path => `${REQUEST_URL}/${path}`;

export const requestLogin = (email, password) => request('POST', url('user/v1/login'), { email, password });
export const requestSignUp = (email, password) => request('POST', url('user/v1/create'), { email, password });
export const requestUserData = (ID, token) => request('GET', url(`user/v1/read/${ID}`), null, {
  authtoken: token,
});
