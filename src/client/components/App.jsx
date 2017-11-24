// @flow
import React, { Component } from 'react';
import Navigation from 'Components/Navigation';
import actions from 'Actions';
import { action } from 'Utils';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from 'Components/Home';
import Logout from 'Components/Logout';
import Account from 'Components/Account';
import SignInForm from 'Components/SignInForm';
import Checkout from 'Components/Checkout';
import ProductDetail from 'Components/ProductDetail';
import Cart from 'Components/Cart';
import Shop from 'Components/Shop';
import OrderConfirmation from 'Components/OrderConfirmation';
import { withRouter } from 'react-router';
import '../../scss/styles.scss';
import spriteSheet from 'Images/spritesheet.svg';
import classnames from 'classnames';
import Loader from 'Components/Loader';
import About from 'Components/About';
import Contact from 'Components/Contact';
import Collection from 'Components/Collection';
import Shipping from 'Components/Shipping';
import AbstractCollection from 'Components/AbstractCollection';
import SignOut from 'Components/SignOut';
import { Link } from 'react-router-dom';

const { APP_LOAD, NAV_STATE, PAGE_CHANGE } = actions;

function Modal({ children, open }) {
  return (
    <div className={classnames('modal', { open })}>
      <div className="modal-content">
        <div className="modal-body global-padding">
          {children}
        </div>
      </div>
    </div>
  );
}

class ScrollToTop extends Component {
  props: {
    location: Object,
    children: Object,
    match: Object,
  }

  history = {
    current: this.props.location.pathname,
    prev: {
      path: '',
      scroll: 0,
    },
  }

  y = 0

  componentDidMount() {
    try {
      window.Intercom('boot', {
        app_id: 'g40b1b4p',
      });
    } catch (e) {

    }

    window.addEventListener('scroll', () => {
      this.y = window.scrollY;
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname === this.props.location.pathname) {
      return;
    }

    console.log(this.history);

    if (this.props.location.pathname !== this.history.prev.path) {
      window.scrollTo(0, 0);
    } else {
      window.scrollTo(0, this.history.prev.scroll);
    }

    this.history.prev.path = this.history.current;
    this.history.prev.scroll = this.y;
    this.history.current = this.props.location.pathname;
  }

  render() {
    return this.props.children;
  }
}

const ScrollToTopWithRouter = withRouter(ScrollToTop);

class App extends Component {
  props: {
    loaded: Function,
    loading: Object,
  }
  state = {
    scrolled: false,
  }

  handleNavUpdate = () => {
    if (!this.props.ui.navFixed && window.pageYOffset > 100) {
      this.props.updateNav(true);
    } else if (this.props.ui.navFixed && window.pageYOffset < 100) {
      this.props.updateNav(false);
    }
  }

  componentDidMount() {
    this.props.loaded();
    window.addEventListener('scroll', this.handleNavUpdate);
  }


  render() {
    return (
      <ScrollToTopWithRouter>
        <div style={ this.props.ui.navFixed ? { paddingTop: '150px' } : null} className="layout">
          <Navigation />
          <div className="flex-grow-1 flex-justify-center flex-parent">
            <Switch>
              <Route path="/shop" component={Shop} />
              <Route path="/collection/:name" component={Collection} />
              <Route path="/about" component={About} />
              <Route path="/" exact component={Home} />
              <Route path="/(login|signup)" render={({ location }) => <SignInForm path={location.pathname} />} />
              <Route path="/abstract-handwoven-rug-collection" component={AbstractCollection} />
              <Route path="/account" component={Account} />
              <Route path="/logout" component={Logout} />
              <Route path="/cart" component={Cart} />
              <Route path="/contact" component={Contact} />
              <Route path="/shipping-and-returns" component={Shipping} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/product/:id" component={ProductDetail} />
              <Route path="/order-confirmation" component={OrderConfirmation} />
              <Route path="/signout" component={SignOut} />
            </Switch>
            <div dangerouslySetInnerHTML={{ __html: spriteSheet }} />
          </div>
          {/*<Loader done={this.props.pageChangeDone} loading={this.props.ui.pageChange} />*/}
          <footer className="footer wrap">
            <div className="footer-inner">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/about">About</Link>
              <Link to="/account">Account</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/shipping-and-returns">Shipping & Returns</Link>

            </div>
          </footer>
        </div>
      </ScrollToTopWithRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loaded() {
    dispatch(action(APP_LOAD));
  },
  pageChangeDone() {
    dispatch(action(PAGE_CHANGE, false));
  },
  updateNav(fixed) {
    dispatch(action(NAV_STATE, fixed));
  },
});

const mapStateToProps = state => ({
  ui: state.ui,
  loading: state.loading,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
