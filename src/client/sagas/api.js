import { request } from 'Utils';
const REQUEST_URL = process.env.NODE_ENV !== 'production' ? 'https://api.archadon.com/dev' : '';

const url = path => `${REQUEST_URL}/${path}`;

export const requestLogin = (email, password) => request('POST', url('user/v1/login'), { email, password });
