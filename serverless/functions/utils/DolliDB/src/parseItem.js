const setProperty = (output, name, type, value) => {
  output[name] = type === 'Object' ? {} : type === 'Array' ? [] : value; //eslint-disable-line
  return output;
};

function deeepExtend(destination, source) {
  for (const property in source) {
    if (source.hasOwnProperty(property)) {
      if (source[property] && source[property].constructor &&
        source[property].constructor === Object) {
        destination[property] = typeof destination[property] === 'object' ? destination[property] : {};
        deeepExtend(destination[property], source[property]);
      } else if (source[property] && Array.isArray(source[property])) {
        destination[property] = Array.isArray(destination[property]) ? destination[property] : [];
        for (let i = 0; i < source[property].length; i += 1) {
          if (source[property][i] !== void 0) {
            destination[property][i] = source[property][i];
          }
        }
      } else {
        destination[property] = source[property];
      }
    }
    return destination;
  }
}

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
    const [ID, name, type] = key.split(':');

    if (ID === 'Root') {
      setProperty(output, name, type, value);
      return;
    }

    deeepExtend(output, getParentAndSet(item, [key, value]));
  });
  return output;
}
