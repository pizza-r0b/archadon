import Put from './utils/Put';

function PutItem(TableName, data, extend, meta) {
  const put = Put(TableName);
  const params = Object.assign({
    Item: data,
  }, extend);
  return put(params, meta);
}

export default PutItem;
