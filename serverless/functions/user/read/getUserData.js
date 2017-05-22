'use strict';

const verifyJwt = require('../../utils/verifyJwt');
const corsHeaders = require('../../utils/corsRes');
const DolliDB = require('../../utils/DolliDB/build/main.min.js');

const { ORDER_ITEM_TABLE, ORDER_DATA_TABLE } = process.env;

function getOrderItems(id) {
  return new Promise((resolve, reject) => {
    DolliDB.docClient.query({
      TableName: ORDER_ITEM_TABLE,
      IndexName: 'userId',
      KeyConditionExpression: 'UserID = :idKey',
      ExpressionAttributeValues: {
        ':idKey': id,
      },
    }, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data.Items);
    });
  });
}

function getOrderData(orderArr) {
  const promises = [];

  orderArr.forEach(order => {
    promises.push(new Promise((resolve, reject) => {
      DolliDB.GetData(ORDER_DATA_TABLE, order.ID).then(data => {
        resolve(Object.assign(order, data));
      }).catch(reject);
    }));
  });

  return Promise.all(promises);
}

function getUserData(event, context, callback) {
  console.log('STARTING');
  const token = event.headers.authtoken;
  const params = event.pathParameters || {};
  const userID = params.id;
  if (!token) {
    return callback(null, corsHeaders({
      statusCode: 401,
    }));
  }
  const data = {};
  console.log('Verifying Token');
  verifyJwt(token, userID).then(ID => {
    if (ID !== userID) {
      Promise.reject('Token rejected');
    } else {
      return DolliDB.GetItem(process.env.USER_TABLE, 'ID', userID, {
        ProjectionExpression: 'Email',
      });
      // TODO:
      // get user favorites
      // get user orders
    }
  }).then(responseFromGetUserByID => {
    Object.assign(data, responseFromGetUserByID);
    return DolliDB.GetData(process.env.USER_PROFILE_TABLE, userID);
  }).then(responseFromGetUserProfile => {
    Object.assign(data, responseFromGetUserProfile);
    return new Promise((resolve, reject) => {
      getOrderItems(userID).then(orderArr => {
        if (orderArr.length) {
          getOrderData(orderArr).then((orders) => {
            resolve(orders);
          }).catch(reject);
        } else {
          resolve([]);
        }
      });
    });
  }).then(orders => {
    Object.assign(data, { orders });
    const response = corsHeaders({
      statusCode: 200,
      body: JSON.stringify({
        data,
      }),
    });
    callback(null, response);
  })
    .catch(e => {
      console.log(e);
      const body = JSON.stringify({
        error: e,
      });
      callback(null, corsHeaders({ statusCode: 401, body }));
    });
}

module.exports = getUserData;
