import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../svg/archadon-logo.svg';
import Svg from 'Ui/svg';

function Navigation() {
  return (
    <div>
      <div className="nav-banner">
        <div className="banner-link">
          Login
        </div>
        <div className="banner-link">
          My Cart
        </div>
        <div className="banner-link cart-count">
          0
        </div>
      </div>
      <nav className="global-nav">
        <div className="hamburger">
          <div />
          <div />
          <div />
        </div>

        <div className="logo" dangerouslySetInnerHTML={{ __html: logo }} />
        <div className="cart-icon-mobile">
          <Svg variant="icon-cart" color="#4A4A4A" />
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
