import { deeepExtend } from './utils';

const setProperty = (output, name, type, value) => {
  output[name] = type === 'Object' ? {} : type === 'Array' ? [] : value; //eslint-disable-line
  return output;
};

function getParentAndSet(item, [entryKey, entryValue], previousValue) {
  const [parentID, name] = entryKey.split(':');
  // find ID in item
  const [parentKey, parentValue] = Object.entries(item).find(([, itemValue]) => itemValue === parentID);
  // check type of parent
  const [ancestorID, parentName, parentType] = parentKey.split(':');
  let value = setProperty({}, parentName, parentType, parentValue);
  if (parentType === 'Object' || parentType === 'Array') {
    value[parentName][name] = previousValue !== void 0 ? (previousValue[name] || previousValue) : entryValue;
  }
  if (ancestorID !== 'Root') {
    value = getParentAndSet(item, [parentKey, parentValue], value);
  }
  return value;
}

export default function parseItem(item) {
  const output = {};
  Object.entries(item).forEach(([key, value]) => {
    const entities = key.split(':');
    if (entities.length === 1) {
      output[key] = value;
      delete item[key];
      return;
    }

    const [ID, name, type] = entities;
    if (ID === 'Root') {
      setProperty(output, name, type, value);
      return;
    }

    deeepExtend(output, getParentAndSet(item, [key, value]));
  });
  return output;
}
