import React from 'react';
import { connect } from 'react-redux';
import actions from 'Actions';
import { action } from 'Utils';
import { Redirect } from 'react-router-dom';

const { SIGN_OUT } = actions;

class SignOut extends React.Component {
  componentDidMount() {
    window.localStorage.clear('archadonauth');
    this.props.signout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = dispatch => ({
  signout() {
    dispatch(action(SIGN_OUT));
  },
});

export default connect(null, mapDispatchToProps)(SignOut);
