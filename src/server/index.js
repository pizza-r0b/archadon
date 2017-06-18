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

import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.NODE_ENV !== 'production' ? 'https://api.archadon.com/dev/' : 'https://api.archadon.com/prod/';

const app = express();

app.use(express.static('public'));

const productDetails = [];

app.use('/product/:name/:id', async (req, res, next) => {
  try {
    const response = await fetch(`${API_URL}product/v1/data/${req.params.id}`);
    const { data } = await response.json();
    if (Object.keys(data).length > 0) {
      data.ID = req.params.id;
      productDetails.push(data);
    }
    next();
  } catch (e) {
    next();
  }
});

app.use(async (req, res, next) => {
  const response = await fetch(`${API_URL}product/v1/list`);
  const products = await response.json();
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
