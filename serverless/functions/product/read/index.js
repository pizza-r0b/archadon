import cors from 'utils/corsRes';
import connect from 'utils/mongoConnect';
import { fromPaths } from 'utils/DolliDB/build/main.min.js';
import { ProductData } from 'schemas/Product';

async function _getProductData(event, context, callback) {
  const params = event.pathParameters || {};
  const productID = params.id;

  try {
    const docs = await ProductData.find({ Item: productID }).populate('Item').exec();
    const item = docs[0].toObject().Item;
    const productData = {
      ...fromPaths(docs.map(({ Path, Value }) => [Path, Value])),
      ...item,
    };
    const response = cors({
      statusCode: 200,
      body: JSON.stringify({
        data: productData,
      }),
    });
    callback(null, response);
  } catch (e) {
    const response = cors({
      statusCode: 500,
      body: JSON.stringify({
        error: e,
      }),
    });
    callback(null, response);
  }
}

export const getProductData = connect(process.env.MONGO_URI, _getProductData);
