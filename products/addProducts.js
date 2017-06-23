const readline = require('readline');
const fetch = require('node-fetch');
let data = require('./6-18-17/uploaded/data');
const moreData = require('./6-18-17/data_8_22.js');
let unparsed = require('./6-18-17/data_8_22.1.js');
const parse = require('./parse');

unparsed = parse(unparsed);

data = data.map(item => Object.assign({}, item, { Qty: 1 }));

const finalData = [...data, ...unparsed, ...moreData];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = q => new Promise((resolve) => {
  rl.question(q, a => resolve(a));
});

function getProductRequestPromises(authtoken) {
  const promises = finalData.map(product => {
    product.Images = [{ src: `${product.SKU}.jpg` }];
    return new Promise((resolve, reject) => {
      fetch('https://api.archadon.com/dev/product/v1/create', {
        method: 'POST',
        headers: {
          authtoken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      }).then(async (res) => {

        const body = await res.json();
        console.log(body);
        const { ID } = body;
        console.log(`Created item with ${ID}`);
        delete product.Price;
        delete product.Name;
        return fetch(`https://api.archadon.com/dev/product/v1/update/data/${ID}`, {
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
  const res = await fetch('https://api.archadon.com/dev/user/v1/login', {
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
