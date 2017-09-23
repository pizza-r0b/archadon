import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Svg from 'Ui/Svg';
import classnames from 'classnames';
import { connect } from 'react-redux';
import actions from 'Actions';
import { action } from 'Utils';

const { ON_NAV_OPEN } = actions;

// <div className="logo">
// <Link to="/"><Svg variant="archadon-logo" color="#FFF" /></Link>
// </div>

// {user.authToken && user.ID ?

const links = [
  { name: 'Shop', route: '/shop' },
  { name: 'About', route: '/about' },
  { name: 'Contact', route: '/contact' },
  { name: 'Shipping & Returns', route: '/shipping-and-returns' },
  { name: 'Sign Up', route: '/account' },
  { name: 'Log In', route: '/account' },
]

function Navigation({ fixed, location, user, qty, scrolled, navOpen, toggleNav }) {
  const classes = classnames(
    'global-nav',
    'wrap',
    {
      open: navOpen,
      fixed,
    }
  );
  return (
    <nav className={classes}>
      <div style={{ zIndex: 10 }} className="menu-overlay">
        <div className="wrap">
          <div>
            {links.map(({ name, route }) => <a key={name} href={route} className="menu-link">{name}</a>)}
          </div>
          <div className="bottom-links">
            <span>hello@archadon.com</span>
            <span>Instagram</span>
            <span>Pinterest</span>
          </div>
        </div>
      </div>
      <div>
        <div style={{ zIndex: 11 }} onClick={() => toggleNav(navOpen)} className={`ham${navOpen ? ' open' : ''}`}>
          <div className="ham-inner" />
        </div>
      </div>
      <div className="logo" style={{ zIndex: 11 }}>
        <Link to="/"><Svg variant="archadon-logo" color={navOpen ? '#FFF' : '#000'} /></Link>
      </div>
      <div className="cart" style={{ zIndex: 11 }}>
        <Svg variant="icon-cart" color={navOpen ? '#FFF' : '#000'} />
      </div>
    </nav>
  );
}

const mapStateToProps = state => ({
  user: state.user,
  qty: state.cart.totalQty,
  navOpen: state.navOpen,
  fixed: state.ui.navFixed,
});

const mapDispatchToProps = dispatch => ({
  toggleNav(open) {
    dispatch(action(ON_NAV_OPEN, !open));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
