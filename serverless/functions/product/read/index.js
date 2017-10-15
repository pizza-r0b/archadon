import cors from 'utils/corsRes';
import connect from 'utils/mongoConnect';
import getProductById from 'utils/getProductById';

async function _getProductData(event, context, callback) {
  const params = event.pathParameters || {};
  const productID = params.id;

  try {
    const productData = await getProductById(productID);
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

export const getProductData = connect(_getProductData);
