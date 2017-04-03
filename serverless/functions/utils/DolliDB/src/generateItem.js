import uuid from 'uuid/v1';
import { getType } from './utils';

const capitalize = str => str[0].toUpperCase() + str.substr(1, str.length);
const parsePrimitive = (output, key, value) => Object.assign(output, {
  [key]: value,
});

function parseInputObject(input, ID) {
  const output = {};
  Object.entries(input).forEach(([key, value]) => {
    const type = getType(input[key]);
    if (type === 'object' || type === 'array') {
      const childObjectID = uuid();
      output[`${ID}:${key}:${capitalize(type)}`] = childObjectID;
      Object.assign(output, parseInputObject(input[key], childObjectID));
    } else {
      parsePrimitive(output, `${ID}:${key}:${capitalize(type)}`, value);
    }
  });
  return output;
}

export default function generateItem(input, indexKeys = []) {
  if (typeof input !== 'object' || typeof input === 'object' && Array.isArray(input)) {
    throw new Error('DolliDB: generateItem(input): input must be an object');
  }
  const output = {};
  Object.entries(input)
    .forEach(([key, value]) => {
      if (key === 'ItemID' || indexKeys.includes(key)) {
        output[key] = value;
        return;
      }

      const type = getType(input[key]);
      let ObjectID;
      switch (type) {
        case 'object':
          ObjectID = uuid();
          output[`Root:${key}:Object`] = ObjectID;
          Object.assign(output, parseInputObject(input[key], ObjectID));
          break;
        case 'array':
          ObjectID = uuid();
          output[`Root:${key}:Array`] = ObjectID;
          Object.assign(output, parseInputObject(input[key], ObjectID));
          break;
        default:
          parsePrimitive(output, `Root:${key}:${capitalize(type)}`, input[key]);
      }
    });

  return output;
}
