import React, { Component } from 'react';
import Navigation from 'Components/Navigation';
import { actions } from 'Constants';
import { dispatchAction } from 'Utils/common';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Home from 'Components/Home';
import About from 'Components/About';
import { withRouter } from 'react-router';
import '../../scss/styles.scss';
import spriteSheet from 'Images/spritesheet.svg';

class App extends Component {
  constructor() {
    super();
    this.handleBgToggle = this.handleBgToggle.bind(this);
  }

  handleBgToggle(e) {
    e.preventDefault();
    this.props.onToggleBg(!this.props.ui.showBgImage);
  }

  render() {
    return (
      <div className="layout">
        <Navigation />
        <div className="flex-grow-1 flex-parent">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <div dangerouslySetInnerHTML={{ __html: spriteSheet }} />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  onToggleBg: React.PropTypes.func,
  ui: React.PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  onToggleBg(bool) {
    dispatch(dispatchAction(actions.UPDATE_UI, { showBgImage: bool }));
  },
});

const mapStateToProps = state => ({
  ui: state.ui,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
