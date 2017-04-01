'use strict';

const verifyJwt = require('../../utils/verifyJwt');
const updateItem = require('../../utils/updateItem');
const updateProfile = updateItem(process.env.USER_PROFILE_TABLE);

function randomString() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < 5; i += 1) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

function getExpressionValues(data, names, values, update) {
  const output = [];
  const mapAttrs = [];
  Object.keys(data).forEach((key) => {
    const _names = names || {};
    const _values = values || {};
    let _update = update || '';
    const value = data[key];

    const expressionAttrName = `#${randomString()}`;

    _names[expressionAttrName] = key;

    if (update) {
      _update += `.${expressionAttrName}`;
    } else {
      _update += `${expressionAttrName}`;
    }

    if (typeof value === 'object' && !Array.isArray(value)) {
      const ifExist = `${expressionAttrName} = if_not_exists(${expressionAttrName}, :m)`;
      if (mapAttrs.indexOf(ifExist) === -1) {
        mapAttrs.push({ ExpressionAttributeNames: { [expressionAttrName]: key }, expression: ifExist });
      }
      const recursive = getExpressionValues(value, _names, _values, _update);
      output.push.apply(output, recursive.values); //eslint-disable-line
      mapAttrs.push.apply(mapAttrs, recursive.mapAttrs); //eslint-disable-line
    } else {
      const expressionAttrValue = `:${randomString()}`;
      _values[expressionAttrValue] = value;
      _update += ` = ${expressionAttrValue}`;
      output.push([_names, _values, _update]);
    }
  });

  return { values: output, mapAttrs };
}


function getUpdateQueryFromData(data, keyName, keyValue) {
  const updates = getExpressionValues(data);
  const output = {
    Key: {
      [keyName]: keyValue,
    },
    ExpressionAttributeNames: {},
    ExpressionAttributeValues: {},
    UpdateExpression: [],
  };

  updates.values.forEach(arr => {
    const names = arr[0];
    const values = arr[1];
    const updateStr = arr[2];

    Object.assign(output.ExpressionAttributeNames, names);
    Object.assign(output.ExpressionAttributeValues, values);
    output.UpdateExpression.push(updateStr);
  });

  output.UpdateExpression = `SET ${output.UpdateExpression.join(', ')}`;
  return { query: output, mapAttrs: updates.mapAttrs };
}

function updateUserProfile(event, context, callback) {
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    data = {};
  }
  const token = event.headers.authtoken;
  const params = event.pathParameters || {};
  const userID = params.id;
  if (!token || !userID) {
    const response = {
      statusCode: 401,
    };
    return callback(null, response);
  }
  let query;
  verifyJwt(token, userID).then(ID => {
    const updateQuery = getUpdateQueryFromData(data, 'UserID', ID);
    query = updateQuery.query;
    if (updateQuery.mapAttrs.length) {
      const mapAttrsQuery = Object.assign({}, updateQuery.query, {
        UpdateExpression: `SET ${updateQuery.mapAttrs.map(item => item.expression).join(', ')}`,
        ExpressionAttributeNames: updateQuery.mapAttrs.reduce((a, item) => Object.assign(a, item.ExpressionAttributeNames), {}),
        ExpressionAttributeValues: {
          ':m': {},
        },
      });
      console.log('CHECK IF EXIST:', mapAttrsQuery); // eslint-disable-line
      return updateProfile(mapAttrsQuery);
    } else {
      Promise.resolve();
    }
  }).then(() => updateProfile(query))
    .then(() => {
      callback(null, {
        statusCode: 200,
      });
    }).catch(e => {
      console.log('ERROR', e); // eslint-disable-line
      callback(null, {
        statusCode: 500,
        message: JSON.stringify(e),
      });
    });
}

module.exports = {
  updateUserProfile,
  getUpdateQueryFromData,
  getExpressionValues,
};
