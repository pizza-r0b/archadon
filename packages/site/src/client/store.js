import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';

let composeEnhancers = typeof window !== 'undefined' && process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;

if (process.NODE_ENV === 'production') {
  composeEnhancers = compose;
}


export default function makeStore(initialState, ...middleware) {
  try {
    const store = createStore(reducers, initialState, composeEnhancers(applyMiddleware(...middleware)));

    if (module.hot) {
      module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers').default; // eslint-disable-line
        store.replaceReducer(nextRootReducer);
      });
    }

    return store;
  } catch (e) {
    return e;
  }
}
