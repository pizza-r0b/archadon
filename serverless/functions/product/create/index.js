import { toPaths } from 'utils/DolliDB/build/main.min.js';
import { ProductItem, ProductData } from 'schemas/Product';
import verifyGodMode from 'utils/verifyGodMode';
import corsRes from 'utils/corsRes';
import connect from 'utils/mongoConnect';

async function _createProduct(event, context, callback) {
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    data = event.body;
  }

  console.log(event);

  console.log(data);

  const { Name, Price, ...rest } = data;
  const token = event.headers.authtoken;

  if (!token) {
    console.log('No token');
    callback(null, corsRes({
      statusCode: 401,
    }));
    return;
  }

  try {
    console.log('test god mode');
    const godModeOn = await verifyGodMode(token);
    if (godModeOn) {
      console.log('god mode on');
      console.log(`create product ${Name} ${Price}`)
      const product = await (new ProductItem({ Name, Price })).save();
      const Item = product.get('_id');

      console.log(`ItemID ${Item}`);

      if (Object.keys(rest).length > 0) {
        console.log('insert product data');
        await ProductData.insertMany(toPaths(rest).map(([Path, Value]) => ({ Path, Value, Item })));
      }
      return callback(null, corsRes({
        statusCode: 200,
        body: JSON.stringify({
          ID: Item,
        }),
      }));
    } else {
      console.log('god mode off');
      return callback(null, corsRes({
        statusCode: 401,
      }));
    }
  } catch (e) {
    return callback(null, corsRes({
      statusCode: 500,
      body: JSON.stringify({
        error: e,
      }),
    }));
  }
}

export const createProduct = connect(_createProduct);

