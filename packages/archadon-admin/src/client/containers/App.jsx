import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from 'Components/Home';
import Orders from './Orders';

import '../../scss/styles.scss';

const ENV = process.env.DB_ENV || process.env.NODE_ENV;

function App() {
  return (
    <div>
      <div className="fixed-bar">
        <div className="inner">{ENV}</div>
        <div style={{ backgroundColor: '#F8F8F8' }} className="inner">
          <Link to="/orders">Orders</Link>
          <Link to="/">Products</Link>
        </div>

      </div>
      <div className="wrap padding--top-15">
        <Route path="/" exact component={Home} />
        <Route path="/orders" exact component={Orders} />
      </div>
    </div>
  );
}

export default App;
