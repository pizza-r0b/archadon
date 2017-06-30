import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });

const documentClient = new AWS.DynamoDB.DocumentClient();

const scan = key => new Promise((resolve, reject) => {
  const params = {
    TableName: process.env.TABLE,
  };
  if (key) {
    params.ExclusiveStartKey = key;
  }

  documentClient.scan(params, (err, data) => {
    if (err) {
      return reject(err);
    }
    return resolve(data);
  });
});

const items = [];

async function getItems(key) {
  try {
    const { Items, LastEvaluatedKey } = await scan(key);
    items.push(...Items);
    console.log(LastEvaluatedKey);
    if (LastEvaluatedKey) {
      await getItems(LastEvaluatedKey);
    }
  } catch (e) {
    console.log(e);
  }
}

getItems().then(() => {
  const p = [];

  items.forEach(item => {
    p.push(new Promise((resolve, reject) => {
      documentClient.delete({
        TableName: process.env.TABLE,
        Key: { [process.env.HASH]: item[process.env.HASH] },
      }, (err) => {
        if (err) {
          return reject(err);
        } else {
          return resolve();
        }
      });
    }));
  });

  return Promise.all(p);
}).then(() => {
  console.log('DONE!');
}).catch(e => {
  console.log(e);
})

