export const isObject = obj => obj && obj.constructor && obj.constructor === Object;
export const isNumber = val => /^\d+$/.test(val);

export { default as docClient } from './docClient';
export { default as CreateDocClient } from './CreateDocClient';
export { default as GetData } from './GetData';
export { default as GetItem } from './GetItem';


