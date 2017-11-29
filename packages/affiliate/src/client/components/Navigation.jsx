import React from 'react';
import Svg from './Svg';

function Navigation() {
  return (
    <nav className="global-nav">
      <div className="wrap">
        <div style={{ height: 25 }} className="flex-parent flex-justify-start flex-align-base">
          <div className="logo" style={{ zIndex: 11 }}>
            <Svg variant="archadon-logo" color="#000" />
          </div>
          <h3 className="margin--left-3">Affiliate Portal</h3>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
