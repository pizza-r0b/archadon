const readline = require('readline');
const util = require('util');
const fetch = require('node-fetch');
const data = require('./6-18-17/data');

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
    return new Promise((resolve) => {
      fetch('https://api.archadon.com/prod/product/v1/create', {
        method: 'POST',
        headers: {
          authtoken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }).then(async (res) => {
        const { ID } = await res.json();
        delete product.Price;
        delete product.Name;
        return fetch(`https://api.archadon.com/prod/product/v1/update/data/${ID}`, {
          method: 'POST',
          headers: {
            authtoken,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        });
      }).then(() => {
        resolve();
      });
    });
  });

  return Promise.all(promises);
}

(async function addProducts() {
  const email = 'seanpapanikolas@gmail.com';
  const password = await question('Password? ');
  const res = await fetch('https://api.archadon.com/prod/user/v1/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const { authToken } = await res.json();

  await getProductRequestPromises(authToken);

  console.log('All done');

  rl.close();
}());
