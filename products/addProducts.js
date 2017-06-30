const readline = require('readline');
const fetch = require('node-fetch');
// p
const a = require('./data/1.js');
const b = require('./data/2.js');
// p
const c = require('./data/3.js');
const d = require('./data/4.js');
// p
const e = require('./data/5.js');
const parse = require('./parse');

const ENV = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';

const data = [...parse(a), ...b, ...parse(c), ...d, ...parse(e)].map(item => {
  if (!item.Qty) {
    item.Qty = 1;
  }
  return item;
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = q => new Promise((resolve) => {
  rl.question(q, a => resolve(a));
});

function getProductRequestPromises(authtoken) {
  const promises = data.map(product => {
    product.Images = [{ src: `${product.SKU}.jpg` }];
    return new Promise((resolve, reject) => {
      fetch(`https://api.archadon.com/${ENV}/product/v1/create`, {
        method: 'POST',
        headers: {
          authtoken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }).then(async (res) => {

        const body = await res.json();
        const { ID } = body;
        delete product.Price;
        delete product.Name;
        return fetch(`https://api.archadon.com/${ENV}/product/v1/update/data/${ID}`, {
          method: 'POST',
          headers: {
            authtoken,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        });
      }).then(() => {
        resolve();
      }).catch(e => reject(e));
    });
  });

  return Promise.all(promises);
}

(async function addProducts() {
  const email = 'seanpapanikolas@gmail.com';
  const password = await question('Password? ');
  const res = await fetch(`https://api.archadon.com/${ENV}/user/v1/login`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const { authToken } = await res.json();

  try {
    await getProductRequestPromises(authToken);
  } catch (e) {
    console.log(`Error`);
    throw new Error(e);
  }

  console.log('All done');

  rl.close();
}());
