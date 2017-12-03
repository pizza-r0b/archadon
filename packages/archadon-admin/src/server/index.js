import express from 'express';
import React from 'react';
import html from './html';
import App from 'Containers/App';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import makeStore from 'Store';
import { AppContainer } from 'react-hot-loader';
import { fromPaths, toPaths } from 'dollidb';
import bodyParser from 'body-parser';
import { ObjectID } from 'mongodb';
import { getOrders } from './orders';
import { Order } from 'dolli';

const mongoose = Order.mongoose;

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_ENV === 'production' ? process.env.PROD_MONGO_URI : process.env.DEV_MONGO_URI);

const app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/update', async (req, res) => {
  console.log(req.body);
  if (!req.body.item) {
    return res.status(400).send();
  }

  let { _id, Name, Price, Qty, Tags, ...rest } = req.body.item;
  if (Price) {
    Price = Number(Price.trim());
  }
  let itemUpdate = { Name, Price, Qty, Tags };
  const shouldUpdateItem = Object.values(itemUpdate).some(item => item !== void 0);
  const shouldUpdateData = Object.keys(rest).length > 0 && Object.values(rest).some(item => item !== void 0);
  itemUpdate = Object.entries(itemUpdate).reduce((a, [key, value]) => {
    if (value !== void 0) {
      a[key] = value;
    }
    return a;
  }, {});

  console.log(req.body.item, shouldUpdateData);

  try {
    if (shouldUpdateItem) {
      console.log('ITEM');
      console.log(itemUpdate);
      await mongoose.connection.db.collection('productitems').findOneAndUpdate({ _id: new ObjectID(_id) }, {
        $set: itemUpdate,
      });
    }
    if (shouldUpdateData) {
      console.log(rest);
      const bulk = mongoose.connection.db.collection('productdatas').initializeUnorderedBulkOp();

      toPaths(rest).forEach(([Path, Value]) => {
        bulk.find({ Item: new ObjectID(_id), Path }).updateOne({
          $set: {
            Value,
          },
        });
      });

      await bulk.execute();
    }
  } catch (e) {
    console.log(e);
    return res.status(500).send(e);
  }
});

const compose = (fn, arr) => arr.reduce((a, [name, ...args]) => {
  return fn[name](...args);
}, fn)

async function getData(skip) {
  const p1 = Date.now();
  const ProductItem = mongoose.connection.db.collection('productitems');
  const ProductData = mongoose.connection.db.collection('productdatas');
  const fns = [['limit', 10]]
  if (skip !== void 0) {
    fns.push(['skip', skip]);
  }
  const items = await compose(ProductItem.find(), fns).toArray();
  const promises = items.map(item => {
    const { _id } = item;
    return ProductData.find({ Item: _id }).toArray().then(docs => {
      const newItem = { ...item, _id: item._id.toString() }
      const d = {
        ...fromPaths(docs.map(({ Path, Value }) => [Path, Value])),
        ...newItem,
      };

      return d;
    });
  });
  const data = await Promise.all(promises);
  console.log(`TIME: ${Date.now() - p1}ms`);
  return data;
}

app.post('/getorders', getOrders);

app.post('/getproducts', async (req, res, next) => {
  const { skip } = req.body;
  const data = await getData(skip);
  res.status(200).send(data);
  return;
});

app.use(async (req, res, next) => {
  let data;
  try {
    data = await getData();
  } catch (e) {
    next(e);
    return;
  }


  const store = makeStore({ data });
  try {
    const context = {};
    res.status(200).send(html(renderToString(
      <AppContainer>
        <Provider store={store}>
          <StaticRouter
            context={context}
            location={req.originalUrl}
          >
            <App />
          </StaticRouter>
        </Provider>
      </AppContainer>
    ), store.getState()));
  } catch (err) {
    next(err);
  }
});

mongoose.connection.once('open', () => {
  app.listen(process.env.PORT || 3000, () => {
    // console.log(mongoose.connection.db.productitems);
    console.log(`App listening on port ${process.env.PORT || 3000}`); //eslint-disable-line
  });
});

