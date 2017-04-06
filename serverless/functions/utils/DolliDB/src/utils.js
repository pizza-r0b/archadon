export const isObject = obj => obj && obj.constructor && obj.constructor === Object;
export const isNumber = val => /^\d+$/.test(val);
