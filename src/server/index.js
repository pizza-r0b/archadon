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

const app = express();

app.use(express.static('public'));

app.use(async (req, res, next) => {
  const response = await fetch(`${process.env.NODE_ENV !== 'production' ? 'https://api.archadon.com/dev/' : 'https://api.archadon.com/dev/'}product/v1/list`);
  const products = await response.json();
  const store = makeStore({ products });
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

app.listen(process.env.PORT || 3000, () => {
  console.log(`App listening on port ${process.env.PORT || 3000}`); //eslint-disable-line
});
