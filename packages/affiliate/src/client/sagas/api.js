import { request } from 'Utils';

const REQUEST_URL = process.env.NODE_ENV !== 'production' || process.env.DEV_DEPLOY ? 'https://gnr9itw1e2.execute-api.us-east-1.amazonaws.com/dev' : 'https://api.archadon.com/prod';

const url = path => `${REQUEST_URL}/${path}`;

export const requestLogin = (email: string, password: string) => request('POST', url('user/v1/login'), { email, password });

export const requestSignUp = (email: string, password: string) => request('POST', url('user/v1/create'), { email, password });

export const requestUserData = (ID: string, token: string) => request('GET', url(`user/v1/read/${ID}`), null, {
  authtoken: token,
});
