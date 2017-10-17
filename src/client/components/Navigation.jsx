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
];

const nonAuth = [
  { name: 'Sign Up', route: '/signup' },
  { name: 'Log In', route: '/login' },
];

const auth = [
  { name: 'Recent Orders', route: '/account/orders' },
  { name: 'Favorites', route: '/account/favorites' },
  { name: 'Account', route: '/account/profile' },
  { name: 'Sign Out', route: '/signout' },
];

type NavProps = {
  fixed: boolean,
  location: Object,
  user?: Object,
  qty?: number,
  scrolled?: boolean,
  navOpen: boolean,
  toggleNav: boolean,
}

function Navigation({ fixed, location, user, qty, scrolled, navOpen, toggleNav }: NavProps) {
  const classes = classnames(
    'global-nav',
    'wrap',
    {
      open: navOpen,
      fixed,
    }
  );
  const linkArr = [...links, ...(user.ID && user.authToken ? auth : nonAuth)];

  let accountLink;

  if (user.ID && user.authToken) {
    accountLink = [
      <Link key="signout" to={'/signout'} className="margin--right-10 small-caps account-link">Sign Out</Link>,
      <Link key="favs" to='/account/favorites' className="margin--right-10 small-caps account-link">
        <div style={{ cursor: 'pointer' }} className="heart">
          <Svg color="#bf9b30" variant="icon-heart-filled" />
        </div>
      </Link>,
    ];
  } else {
    accountLink = <Link to='/login' className="margin--right-10 small-caps account-link">Account</Link>;
  }
  return (
    <nav className={classes}>
      <div style={{ zIndex: 10 }} className="menu-overlay">
        <div className="wrap">
          <div>
            {linkArr.map(({ name, route }) => <Link key={name} to={route} className="menu-link">{name}</Link>)}
          </div>
          <div className="bottom-links">
            <span>hello@archadon.com</span>
            <span>Instagram</span>
            <span>Pinterest</span>
          </div>
        </div>
      </div>
      <div>
        <div style={{ zIndex: 12 }} onClick={() => toggleNav(navOpen)} className={`ham${navOpen ? ' open' : ''}`}>
          <div className="ham-inner" />
        </div>
      </div>
      <div className="logo" style={{ zIndex: 11 }}>
        <Link to="/"><Svg variant="archadon-logo" color={navOpen ? '#FFF' : '#000'} /></Link>
      </div>
      <div className="flex-parent flex-align-center" style={{ zIndex: 12 }}>
        {accountLink}
        <Link to="/cart" className="cart">
          {qty > 0 && <div className="cart-qty">{qty}</div>}
          <Svg variant="icon-cart" color={navOpen ? '#FFF' : '#000'} />
        </Link>
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
