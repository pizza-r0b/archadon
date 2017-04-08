import docClient from './utils/docClient';
import toPaths from './utils/toPaths';
import { isObject } from './utils';

function PutData(TableName, key, data, meta) {
  const keyName = key[0];
  const keyValue = key[1];

  if (isObject(data)) {
    data = toPaths(data);
  } else if (!Array.isArray(data)) {
    throw new Error(`Expected data to be Array or Object instead got ${data}`);
  }

  const params = {
    RequestItems: {
      [TableName]: [],
    },
  };

  const items = params.RequestItems[TableName];

  data.forEach((item) => {
    const path = item[0];
    const value = item[1];
    items.push({
      PutRequest: {
        Item: {
          [keyName]: keyValue,
          Path: path,
          Value: value,
        },
      },
    });
  });

  return new Promise((resolve, reject) => {
    docClient.batchWrite(params, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve({ data: res, meta });
      }
    });
  });
}

export default PutData;
