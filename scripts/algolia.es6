import dotenv from 'dotenv';
import path from 'path';
import algolia from 'algoliasearch';
import mongoose from 'mongoose';
import { fromPaths } from 'dollidb';
// var ObjectId = require('mongodb').ObjectId;
// import { ProductItem, mongoose } from '../serverless/schemas/Product';
dotenv.config();
mongoose.Promise = global.Promise;

console.log(process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI);



// const ProductItem = mongoose.connection.db.collection('productitems');
// ProductItem.findById('59c8631b907d2a0d06a4d573').then(doc => {
//   doc.set(doc, parseInt(doc.Price, 10));
//   doc.save().then(d => {
//     console.log(d, 'saved');
//   })
// })

// mongoose.connection.once('open', () => {
//   const ProductItem = mongoose.connection.db.collection('productitems');

//   ProductItem.find({ Price: { $type: "string" } }).toArray().then(items => {
//     const updates = items.map(item => {
//       return {
//         updateOne: {
//           filter: { _id: ObjectId(item._id) },
//           update: {
//             $set: {
//               Price: parseInt(item.Price),
//             },
//           },
//         },
//       };
//     });
//     ProductItem.bulkWrite(updates);
//     console.log('done');
//   });
// });


async function getData() {
  const p1 = Date.now();
  const ProductItem = mongoose.connection.db.collection('productitems');
  const ProductData = mongoose.connection.db.collection('productdatas');
  const items = await ProductItem.find().toArray();
  // items = items.map(i => {
  //   if (typeof i.Price === 'string') {
  //     i.Price = Number(i.Price);
  //   }
  //   return i;
  // });
  const promises = items.map(item => {
    const { _id } = item;
    return ProductData.find({ Item: _id }).toArray().then(docs => ({
      ...fromPaths(docs.map(({ Path, Value }) => [Path, Value])),
      ...item,
    }));
  });
  const data = await Promise.all(promises);
  console.log(`TIME: ${Date.now() - p1}ms`);
  return data;
}

dotenv.config({
  path: path.resolve(__dirname, './.env'),
});

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const client = algolia(process.env.ALGOLIA_API_KEY, process.env.ALGOLIA_SECRET_KEY);
const indexPrefix = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const indexName = `${indexPrefix}_Products`;
const index = client.initIndex(indexName);
const ascName = `${indexName}_asc`;
const descName = `${indexName}_desc`;

index.setSettings({
  replicas: [ascName, descName],
});

const asc = client.initIndex(ascName);
asc.setSettings({
  ranking: ['asc(Price)'],
});

const desc = client.initIndex(descName);
desc.setSettings({
  ranking: ['desc(Price)'],
});

function getProducts() {
  mongoose.connection.once('open', async () => {

    const raw = await getData();
    const data = raw.map(item => {
      item.objectID = item._id;
      return item;
    });

    index.addObjects(data, (err, content) => {
      if (err) {
        console.error(new Error(err));
      } else {
        console.log('All done');
      }
      mongoose.connection.close();
    });
  });
}

getProducts();
