import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fromPaths } from 'dollidb';
import fs from 'fs';
import { ObjectID } from 'mongodb';
import colors from './colors';
import nearestColor from 'nearest-color';

dotenv.config();

const mongoUri = process.env.NODE_ENV === 'production' ? process.env.PROD_MONGO_URI : process.env.DEV_MONGO_URI;

mongoose.connect(mongoUri);

mongoose.connection.on('error', (e) => {
  console.log(e);
});

try {


  mongoose.connection.once('connected', async () => {
    const ProductItem = mongoose.connection.db.collection('productitems');
    let items;

    items = await ProductItem.find().toArray();

    let allColors = [];
    console.log('loop');
    items.forEach(item => {
      if (Array.isArray(item.Colors)) {
        allColors.push(...item.Colors);
      }
    });
    console.log('loop done');


    console.log(`Unfiltered ${allColors.length}`);

    allColors = allColors.filter((color, i, arr) => arr.indexOf(color) === i);

    console.log(`Filtered ${allColors.length}`);

    mongoose.connection.close();

    fs.writeFileSync('array-of-colors.json', JSON.stringify(allColors));

    console.log(allColors);
  });
} catch (e) {
  console.log(e);
}
