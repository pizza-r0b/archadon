const productData = require('./product-data');
const fetch = require('node-fetch');

const authtoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjYyZWI2Y2IwLTFjOGEtMTFlNy1hNTBkLWM3NjMwZTdlODc4YSIsImlhdCI6MTQ5NDcyNTQ1OSwiZXhwIjoxNDk0NzMyNjU5fQ.Uob21svk3c7sHyxDg_kagXFrE_NXUslDglySLsP2CWk';

let count = 1;

const promises = productData.map(data => new Promise((resolve, reject) => {
  fetch('https://api.archadon.com/dev/product/v1/create', {
    method: 'POST',
    headers: {
      authtoken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    res.json().then(({ ID }) => {
      delete data.Price;
      delete data.Name;
      fetch(`https://api.archadon.com/dev/product/v1/update/data/${ID}`, {
        method: 'POST',
        headers: {
          authtoken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log(new Array(count).fill('🦄🌈🎄💩🐔🤡🍕🔥⚡️').join(''));
        count++;
        return resolve(res);
      }).catch(e => reject(e));
    });
  });
}));

Promise.all(promises).then(() => {
  console.log('All Done');
}).catch(e => {
  console.log(e);
  console.log('something went wrong');
});

