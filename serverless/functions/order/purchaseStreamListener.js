const sendMail = require('../utils/sendMail');
const DolliDB = require('../utils/DolliDB/build/main.min.js');

function purchaseStreamListener(event, context, callback) {
  event.Records.forEach(record => {
    if (record.eventName === 'INSERT') {
      console.log(record.dynamodb.NewImage);
      try {
        const {
          Email: { S: email },
          ID: { S: ID },
        } = record.dynamodb.NewImage;

        DolliDB.GetData(process.env.ORDER_DATA_TABLE, ID)
          .then(data => {
            const { Items: items, CustomerData: customerData, Price: price = 0 } = data;
            return sendMail({
              to: email,
              subject: 'Your Archadon Order Confirmation',
              template: 'purchase-complete',
              from: 'orderconfirmation@archadon.com',
              context: {
                items,
                ID,
                customerData,
                price: price.toLocaleString('USD', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
                assetURL: process.env.ASSET_URL,
              },
            });
          }).then(info => {
            console.log(info);
            callback(null, { message: `Successfully processed ${event.Records.length} records.`, info });
          }).catch(e => {
            throw new Error(e);
          });
      } catch (e) {
        console.log('Error');
        console.log(e);
      }
    }
  });
}

function emailAdmin(event, context, callback) {
  event.Records.forEach(record => {
    if (record.eventName === 'INSERT') {
      console.log(record.dynamodb.NewImage);
      try {
        const {
          ID: { S: ID },
        } = record.dynamodb.NewImage;

        DolliDB.GetData(process.env.ORDER_DATA_TABLE, ID)
          .then(data => {
            const { Items: items, CustomerData: customerData, Price: price = 0, ChargeID: chargeID } = data;
            return sendMail({
              to: process.env.ADMIN_EMAIL,
              subject: 'New Archadon Order',
              template: 'new-order',
              from: 'neworder@archadon.com',
              context: {
                items,
                ID,
                chargeID,
                customerData,
                price: price.toLocaleString('USD', {
                  style: 'currency',
                  currency: 'USD',
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }),
                assetURL: process.env.ASSET_URL,
              },
            });
          }).then(info => {
            console.log(info);
            callback(null, { message: `Successfully processed ${event.Records.length} records.`, info });
          }).catch(e => {
            throw new Error(e);
          });
      } catch (e) {
        console.log('Error');
        console.log(e);
      }
    }
  });
}

module.exports = { purchaseStreamListener, emailAdmin };
