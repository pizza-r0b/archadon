import algolia from 'algoliasearch';

const client = algolia(process.env.ALGOLIA_API_KEY, process.env.ALGOLIA_SECRET_KEY);
const indexPrefix = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const indexName = `${indexPrefix}_Products`;
const defaultIndex = client.initIndex(indexName);
// const ascIndex = client.initIndex(`${indexName}_asc`);
// const descIndex = client.initIndex(`${indexName}_desc`);

const COLLECTIONS = {
  welcome: 'Tags:welcome',
  arty: 'Tags:arty',
  abstract: 'Tags:abstract',
  contemporary: 'Tags:contemporary',
  classic: 'Tags:classic',
};

export default function getCollection(req, res) {
  const { collection: c } = req.body;
  const collection = COLLECTIONS[c];
  if (!collection) {
    res.status(400).send();
    return;
  }

  defaultIndex.search({
    filters: `Qty > 0 AND ${collection}`,
  }, (err, content) => {
    if (err) {
      res.status(400).send(err);
      return;
    }
    res.status(200).send(content);
  });
}
