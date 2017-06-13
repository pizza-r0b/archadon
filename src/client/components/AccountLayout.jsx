import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Orders from 'Components/Orders';
import Favorites from 'Components/Favorites';

function AccountLayout() {
  return (
    <div className="flex-grow-1 flex-parent global-padding padding--top-10">
      <div className="auth-nav-bar">
        <h2>My Account</h2>
        <NavLink className="auth-nav-bar-link" activeClassName="active" to="/account/orders">Orders</NavLink>
        <NavLink className="auth-nav-bar-link" activeClassName="active" to="/account/favorites">Favorites</NavLink>
        {/* <NavLink className="auth-nav-bar-link" activeClassName="active" to="/account/settings">Settings</NavLink> */}
      </div>
      <div className="flex-grow-1 flex-parent account-content">
        <Switch>
          <Route exact path="/account/(orders)?" component={Orders} />
          <Route exact path="/account/favorites" component={Favorites} />
        </Switch>

      </div>
    </div>
  );
}

export default AccountLayout;
