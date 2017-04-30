import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../svg/archadon-logo.svg';
import Svg from 'Ui/svg';

function Navigation() {
  return (
    <nav className="global-nav global-padding flex-parent flex-justify-between flex-align-center">
      <div className="logo">
        <Svg variant="archadon-logo" color="#FFF" />
      </div>
    </nav>
  );
}

export default Navigation;
