import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Orders from 'Components/Orders';
import Favorites from 'Components/Favorites';
import Profile from 'Components/Profile';
import { Helmet } from 'react-helmet';
    // {/*} <div className="auth-nav-bar">
    //     <h2>My Account</h2>
    //     <NavLink className="auth-nav-bar-link" activeClassName="active" to="/account/orders">Orders</NavLink>
    //     <NavLink className="auth-nav-bar-link" activeClassName="active" to="/account/favorites">Favorites</NavLink>
    //     {/* <NavLink className="auth-nav-bar-link" activeClassName="active" to="/account/settings">Settings</NavLink> */}
    //   </div>*/}
function AccountLayout() {
  return (
    <div className="wrap">
      <Helmet>
        <title>Archadon - Art for your floors - Handcrafted fine wool rugs - Account</title>
      </Helmet>
      <div className="flex-grow-1 flex-parent account-content">
        <Switch>
          <Route exact path="/account/(orders)?" component={Orders} />
          <Route exact path="/account/favorites" component={Favorites} />
          <Route exact path="/account/profile" component={Profile} />
        </Switch>

      </div>
    </div>
  );
}

export default AccountLayout;
