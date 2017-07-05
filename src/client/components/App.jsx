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

const { APP_LOAD } = actions;

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

  componentDidUpdate(prevProps) {
    if (this.props.match.path === '/' || this.props.match.path === '/shop') {
      return;
    }
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
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


  componentDidMount() {
    this.props.loaded();
  }


  render() {
    return (
      <ScrollToTopWithRouter>
        <div className="layout">
          <Navigation />
          <div style={{ paddingTop: '35px' }} className="flex-grow-1 flex-justify-center flex-parent">
            {this.props.loading.full && <Loader />}
            <Switch>
              <Route path="/shop" component={Shop} />
              <Route path="/" exact component={Home} />
              <Route path="/(login|signup)" render={({ location }) => <SignInForm path={location.pathname} />} />
              <Route path="/account" component={Account} />
              <Route path="/logout" component={Logout} />
              <Route path="/cart" component={Cart} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/product/:name/:id" component={ProductDetail} />
              <Route path="/order-confirmation" component={OrderConfirmation} />
            </Switch>
            <div dangerouslySetInnerHTML={{ __html: spriteSheet }} />
          </div>
        </div>
      </ScrollToTopWithRouter>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loaded() {
    dispatch(action(APP_LOAD));
  },
});

const mapStateToProps = state => ({
  ui: state.ui,
  loading: state.loading,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
