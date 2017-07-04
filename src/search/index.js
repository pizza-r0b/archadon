import algolia from 'algoliasearch';

const client = algolia(process.env.ALGOLIA_API_KEY, process.env.ALGOLIA_SECRET_KEY);
const indexPrefix = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const indexName = `${indexPrefix}_Products`;
const defaultIndex = client.initIndex(indexName);
const ascIndex = client.initIndex(`${indexName}_asc`);
const descIndex = client.initIndex(`${indexName}_desc`);

const types = {
  p: 'Price',
  w: 'Width',
  h: 'Height',
  r: 'Rank',
  raw: 'Raw',
};

const ranking = {
  product_desc: descIndex,
  product_asc: ascIndex,
};

export function search(params = {}, index = defaultIndex) {
  return new Promise((resolve, reject) => {
    index.search(params, (err, content) => {
      if (err) {
        return reject(err.message);
      }
      return resolve(content);
    });
  });
}

async function searchRoute(req, res) {
  const params = {};
  let index;

  if (req.body.filters) {
    if (!Array.isArray(req.body.filters)) {
      return res.sendStatus(400);
    }

    const filters = [];

    for (let i = 0; i < req.body.filters.length; i++) {
      const current = req.body.filters[i];
      const { queries, type: currentType } = current;
      const type = types[currentType];

      if (type === 'Raw') {
        filters.push(...queries);
      } else if (type === 'Rank') {
        const [rank] = queries;
        index = ranking[rank];
      } else {
        filters.push(queries.map(query => `${type} ${query}`).join(' AND '));
      }
    }
    params.filters = `Qty > 0 AND ${filters.join(' AND ')}`;
  }


  if (typeof req.query.page !== 'undefined') {
    params.page = req.query.page;
  }

  try {
    const content = await search(params, index);
    return res.json(content);
  } catch (e) {
    return res.status(400).send(e);
  }
}

export default searchRoute;
