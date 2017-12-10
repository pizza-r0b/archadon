import algolia from 'algoliasearch';

const {
  ALGOLIA_API_KEY,
  ALGOLIA_SECRET_KEY,
} = process.env;

const algoliaClient = algolia(ALGOLIA_API_KEY, ALGOLIA_SECRET_KEY);
const indexPrefix = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const indexName = `${indexPrefix}_Products`;
const index = algoliaClient.initIndex(indexName);

export default index;
