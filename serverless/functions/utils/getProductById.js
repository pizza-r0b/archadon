import { fromPaths } from 'utils/DolliDB/build/main.min.js';
import { ProductData } from 'schemas/Product';

export default async function getProductById(productID) {
  const docs = await ProductData.find({ Item: productID }).lean().populate('Item').exec();
  if (!docs.length) {
    return {};
  }
  const item = docs[0].Item;
  const productData = {
    ...fromPaths(docs.map(({ Path, Value }) => [Path, Value])),
    ...item,
  };
  return productData;
}
