// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from 'Actions';
import { action } from 'Utils';

const { LOG_OUT } = actions;

class Logout extends Component {
  props: {
    logout: Function,
  }

  componentWillMount() {
    this.props.logout();
  }

  render() {
    return <Redirect to="/login" />;
  }
}

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(action(LOG_OUT));
  },
});

export default connect(null, mapDispatchToProps)(Logout);
