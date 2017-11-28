import algolia from 'algoliasearch';

const client = algolia(process.env.ALGOLIA_API_KEY, process.env.ALGOLIA_SECRET_KEY);
const indexPrefix = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const indexName = `${indexPrefix}_Products`;
const defaultIndex = client.initIndex(indexName);

const getBatch = arr => new Promise((resolve, reject) => {
  defaultIndex.getObjects(arr, (err, content) => {
    if (err) {
      return reject(err);
    }
    return resolve(content);
  });
});

export default async function getBatchRoute(req, res) {
  if (!req.body.ids) {
    return res.status(200).send();
  }
  if (Array.isArray(req.body.ids)) {
    let products;

    try {
      products = await getBatch(req.body.ids);
      products.results = products.results.filter(product => product && product.Qty > 0);
      res.status(200).send(products);
    } catch (e) {
      console.log(e);
      return res.status(400).send(e);
    }
  } else {
    return res.status(400).send();
  }
};
