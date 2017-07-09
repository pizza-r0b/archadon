import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Svg from 'Ui/Svg';
import classnames from 'classnames';
import { connect } from 'react-redux';
import actions from 'Actions';
import { action } from 'Utils';

const { ON_NAV_OPEN } = actions;

function Navigation({ location, user, qty, scrolled, navOpen, toggleNav }) {
  return (
    <nav
      style={{ position: 'fixed' }}
      className={
        classnames('global-nav global-padding-x flex-justify-between flex-align-center', {
          open: navOpen,
        })
      }
    >
      <div className="logo">
        <Link to="/"><Svg variant="archadon-logo" color="#FFF" /></Link>
      </div>
      <div onClick={() => { toggleNav(navOpen); }} className="ham">
        <div className="ham-inner" />
      </div>
      <div className="global-nav-links flex-parent flex-align-center">
        <div onClick={() => { toggleNav(navOpen); }} className="global-nav-link close">
          Close
        </div>
        <div className="global-nav-link">
          <Link to="/shop">Shop</Link>
        </div>


        {user.authToken && user.ID ?
          (
            [<div className="global-nav-link" key="a">
              <Link to="/account">My Account</Link>
            </div>,
            <div className="global-nav-link" key="b">
              <Link to="/logout">Log Out</Link>
            </div>]
          ) : (
            [
              <div className="global-nav-link" key="d">
                <Link to="/signup">Sign Up</Link>
              </div>,
              <div className="global-nav-link" key="c">
                <Link to="/login">Log In</Link>
              </div>]
          )}
        <div className="global-nav-link">
          <Link to="/about">About</Link>
        </div>
        <div className="global-nav-link">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="global-nav-link">
          <Link to="/shipping-and-returns">Shipping & Returns</Link>
        </div>
      </div>
      <Link className="cart" to="/cart">
        <div className="flex-parent flex-align-center">
          <div className="margin--right-1" style={{ width: '24px', height: '16px' }}>
            <Svg variant="icon-cart" color="currentColor" />
          </div>
          <div>
            {qty}
          </div>
        </div>
      </Link>
    </nav>
  );
}

const mapStateToProps = state => ({
  user: state.user,
  qty: state.cart.totalQty,
  navOpen: state.navOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleNav(open) {
    dispatch(action(ON_NAV_OPEN, !open));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
