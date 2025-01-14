import express from 'express';
import React from 'react';
import html from './html';
import App from 'Components/App';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import makeStore from 'Store';
import { AppContainer } from 'react-hot-loader';
import fetch from 'node-fetch';
import searchRoute, { search } from '../search';
import batchItems from '../search/batchItems';
import bodyParser from 'body-parser';

const API_URL = process.env.NODE_ENV !== 'production' ? 'https://gnr9itw1e2.execute-api.us-east-1.amazonaws.com/dev/' : 'https://api.archadon.com/prod/';

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/search/products', searchRoute);
app.post('/search/batch', batchItems);

let productDetails = [];

app.use('/product/:id', async (req, res, next) => {
  productDetails = [];

  try {
    const response = await fetch(`${API_URL}product/v1/data/${req.params.id}`);
    const { data } = await response.json();
    if (Object.keys(data).length > 0) {
      productDetails.push(data);
    } else {
      res.redirect('/');
    }
    next();
  } catch (e) {
    next();
  }
});

app.use(async (req, res, next) => {
  const products = await search({ filters: 'Qty > 0' });

  const store = makeStore({ products, productDetails });
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

app.listen(process.env.PORT || 8081, () => {
  console.log(`App listening on port ${process.env.PORT || 8081}`); //eslint-disable-line
});
