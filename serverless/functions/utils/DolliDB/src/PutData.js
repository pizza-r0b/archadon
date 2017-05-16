import docClient from './utils/docClient';
import toPaths from './utils/toPaths';
import { isObject } from './utils';
import GetData from './GetData';

function CheckForData(tableName, hashKey, hashKeyVal, pathPrefix) {
  return new Promise(async (resolve, reject) => {
    const data = await GetData(tableName, hashKeyVal, pathPrefix);
    const paths = toPaths(data);
    resolve(paths);
  });
}

async function PutData(TableName, key, data, meta) {
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

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const [path, value] = item;
    if (value === '<<EmptyArray>>') {
      const dataToDelete = await CheckForData(TableName, keyName, keyValue, path); //eslint-disable-line
      dataToDelete.forEach(([pathKey]) => {
        items.push({
          DeleteRequest: {
            Key: {
              [keyName]: keyValue,
              Path: pathKey,
            },
          },
        });
      });
      items.push({
        DeleteRequest: {
          Key: {
            [keyName]: keyValue,
            Path: path,
          },
        },
      });
      continue; // eslint-disable-line
    }

    items.push({
      PutRequest: {
        Item: {
          [keyName]: keyValue,
          Path: path,
          Value: value,
        },
      },
    });
  }

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
