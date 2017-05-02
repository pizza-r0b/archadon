import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Svg from 'Ui/svg';
import classnames from 'classnames';

function Navigation({ location }) {
  const isRoot = location.pathname === '/';
  return (
    <nav
      style={{ position: isRoot ? 'fixed' : 'relative' }}
      className={
        classnames('global-nav global-padding flex-parent flex-justify-between flex-align-center', {
          root: isRoot,
        })
      }
    >
      <div className="logo">
        <Link to="/"><Svg variant="archadon-logo" color={isRoot ? '#FFF' : '#000'} /></Link>
      </div>
      <div className="flex-parent flex-align-center">
        <div style={{ marginRight: '35px' }}>
          <Link to="/login">Log In</Link>
        </div>
        <div style={{ marginRight: '35px' }}>
          <Link to="/register">Register</Link>
        </div>
        <div className="flex-parent flex-align-center">
          <div className="margin--right-1" style={{ width: '24px', height: '16px' }}>
            <Svg variant="icon-cart" color={isRoot ? '#FFF' : '#000'} />
          </div>
          <div>
            0
          </div>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navigation);
