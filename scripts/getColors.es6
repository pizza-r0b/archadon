import getColors from 'get-image-colors';
import AWS from 'aws-sdk';
import mongoose from '../serverless/node_modules/mongoose';
import dotenv from 'dotenv';
import { fromPaths } from 'dollidb';
import { ObjectID } from 'mongodb';
import _colors from './colors';
import _nearestColor from 'nearest-color';

const colors = _colors.map(color => color.hex);

const nearestColor = _nearestColor.from(colors);

dotenv.config();

const s3 = new AWS.S3();
const params = key => ({
  Bucket: 'archadon-dev',
  Key: key,
});

const getObject = key => new Promise((resolve, reject) => {
  s3.getObject(params(key), (err, data) => {
    if (err) {
      return reject(err);
    }

    resolve(data.Body);
  });
});

const getColorsFromBuffer = async (key) => {
  const buffer = await getObject(key);
  const colorsFromBuffer = await getColors(buffer, 'image/jpeg');
  return colorsFromBuffer.map(color => color.hex());
};

let count = 0;

const mongoUri = process.env.NODE_ENV === 'production' ? process.env.PROD_MONGO_URI : process.env.DEV_MONGO_URI;

function getColorFromS3() {
  mongoose.connect(mongoUri);

  mongoose.connection.once('connected', async () => {
    const ProductItem = mongoose.connection.db.collection('productitems');
    const ProductData = mongoose.connection.db.collection('productdatas');

    try {
      const items = await ProductItem.find().toArray();

      const promises = items.map(item => {
        const { _id } = item;
        return ProductData.find({ Item: _id }).toArray().then(docs => ({
          ...fromPaths(docs.map(({ Path, Value }) => [Path, Value])),
          ...item,
        }));
      });
      const products = await Promise.all(promises);

      const p = products.map(product => {
        const [img] = product.Images;

        return (async () => {
          const colorsFromBuffer = await getColorsFromBuffer(img);
          console.log('saving ' + count++);
          await mongoose.connection.db.collection('productitems').findOneAndUpdate({ _id: new ObjectID(product._id) }, {
            $set: {
              Colors: colorsFromBuffer.map(color => nearestColor(color)),
            },
          });
        })();
      });

      await Promise.all(p);
      mongoose.connection.close();
    } catch (e) {
      throw new Error(e);
    }
  });
}

getColorFromS3();
