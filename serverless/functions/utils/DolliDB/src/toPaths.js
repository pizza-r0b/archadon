import { isObject, isNumber } from './utils';

function arrayToPaths(arr, prefix) {
  const output = [];
  arr.forEach((val, i) => {
    const name = `${prefix}.${i}`;
    if (isObject(val)) {
      output.push(...reduceObject(val, [], name));
    } else if (Array.isArray(val)) {
      output.push(...arrayToPaths(val, name));
    } else {
      output.push([name, val]);
    }
  });
  return output;
}

function reduceObject(object, initialValue, prefix) {
  return Object.entries(object).reduce((a, [key, value]) => {
    const name = prefix ? `${prefix}.${key}` : key;
    if (isNumber(key)) {
      throw new Error(`Object has key ${name} which is a number. This is not allowed.`);
    }
    if (isObject(value)) {
      a.push(...reduceObject(value, [], name));
    } else if (Array.isArray(value)) {
      a.push(...arrayToPaths(value, name));
    } else {
      a.push([name, value]);
    }
    return a;
  }, initialValue);
}

export default function toPaths(d) {
  if (!isObject(d)) {
    throw new Error(`toPaths expects an Object got ${d}`);
  }
  return reduceObject(d, []);
}
