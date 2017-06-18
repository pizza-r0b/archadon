import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import makeStore from 'Store';
import sagas from 'Sagas';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import App from 'Components/App';
import { AppContainer } from 'react-hot-loader';
import './fonts';

// const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const history = createHistory();

const routeMiddleware = routerMiddleware(history);

const store = makeStore(
  window.__INITIAL_STATE__,
  sagaMiddleware,
  routeMiddleware,
);

let sagaTask = sagaMiddleware.run(sagas);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Component />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('Components/App', () => {
    const NextApp = require('Components/App').default; //eslint-disable-line
    render(NextApp);
  });

  module.hot.accept('Sagas', () => {
    const newSagas = require('Sagas').default; //eslint-disable-line
    sagaTask.cancel();
    sagaTask.done.then(() => {
      sagaTask = sagaMiddleware.run(newSagas);
    });
  });
}

