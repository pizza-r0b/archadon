// @flow
import React, { Component } from 'react';
import Navigation from 'Components/Navigation';
import actions from 'Actions';
import { action } from 'Utils';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Home from 'Components/Home';
import Logout from 'Components/Logout';
import Account from 'Components/Account';
import SignInForm from 'Components/SignInForm';
import Cart from 'Components/Cart';
import { withRouter } from 'react-router';
import '../../scss/styles.scss';
import spriteSheet from 'Images/spritesheet.svg';
import classnames from 'classnames';

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
  }

  componentDidUpdate(prevProps) {
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

  state = {
    scrolled: false,
  }

  handleScroll = () => {
    if (window.scrollY + 50 > window.innerHeight && !this.state.scrolled) {
      this.setState({ scrolled: true });
    } else if (window.scrollY < window.innerHeight && this.state.scrolled) {
      this.setState({ scrolled: false });
    }
  }
  componentDidMount() {
    this.props.loaded();
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <ScrollToTopWithRouter>
        <div className="layout">
          <Navigation scrolled={this.state.scrolled} />
          <div style={{ height: '100%' }} className="flex-grow-1 flex-parent">
            {
              this.props.loading.full ?
                <div className="flex-parent flex-grow-1 flex-align-center flex-justify-center">
                  <h1>Loading</h1>
                </div>
                :
              [
                <Route key="home" path="/" exact component={Home} />,
                <Route key="login" path="/(login|signup)" render={({ location }) => <SignInForm path={location.pathname} />} />,
                <Route key="account" path="/account" component={Account} />,
                <Route key="logout" path="/logout" component={Logout} />,
                <Route key="cart" path="/cart" component={Cart} />,
              ]
            }
            <div dangerouslySetInnerHTML={{ __html: spriteSheet }} />
          </div>
        </div>
      </ScrollToTopWithRouter>
    );
  }
}

App.propTypes = {
  ui: React.PropTypes.object,
  loaded: React.PropTypes.func,
  loading: React.PropTypes.bool,
};

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
