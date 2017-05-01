import React from 'react';
import { Link } from 'react-router-dom';
import Svg from 'Ui/svg';

function Navigation() {
  return (
    <nav className="global-nav global-padding flex-parent flex-justify-between flex-align-center">
      <div className="logo">
        <Svg variant="archadon-logo" color="#FFF" />
      </div>
      <div className="flex-parent flex-align-center">
        <div style={{ marginRight: '35px' }}>
          <a href="#">Log In/Sign Up</a>
        </div>
        <div className="flex-parent flex-align-center">
          <div className="margin--right-1" style={{ width: '24px', height: '16px' }}>
            <Svg variant="icon-cart" />
          </div>
          <div>
            0
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
