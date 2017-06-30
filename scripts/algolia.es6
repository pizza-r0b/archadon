import dotenv from 'dotenv';
import path from 'path';
import fetch from 'node-fetch';
import algolia from 'algoliasearch';

dotenv.config({
  path: path.resolve(__dirname, './.env'),
});

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const client = algolia(process.env.ALGOLIA_API_KEY, process.env.ALGOLIA_SECRET_KEY);
const url = process.env.NODE_ENV === 'production' ? 'https://api.archadon.com/prod/product/v1/list' : 'https://api.archadon.com/dev/product/v1/list';
const indexPrefix = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const indexName = `${indexPrefix}_Products`;
const index = client.initIndex(indexName);

const fetchUrl = (u, startKey) => {
  if (startKey) {
    return `${u}?startKey=${startKey}`;
  } else {
    return u;
  }
};

const products = [];

async function getProducts(startKey) {
  try {
    const res = await fetch(fetchUrl(url, startKey), {
      method: 'GET',
    });
    const { Items, LastEvaluatedKey } = await res.json();

    if (Items && Items.length > 0) {
      products.push(...Items);
    }

    if (LastEvaluatedKey && LastEvaluatedKey.ID) {
      await getProducts(LastEvaluatedKey.ID);
    }
  } catch (e) {
    console.log(e);
  }
}

getProducts().then(() => {
  const data = products.map(item => {
    item.objectID = item.SKU;
    return item;
  });

  return new Promise((resolve, reject) => {
    index.addObjects(data, (err, content) => {
      if (!err) {
        return resolve(content);
      } else {
        return reject(err);
      }
    });
  });
}).then(content => {
  console.log('Success');
}).catch(e => {
  console.log(e);
});
