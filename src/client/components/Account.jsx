// @flow
import React from 'react';
import { connect } from 'react-redux';
import { action } from 'Utils';
import actions from 'Actions';
import { Redirect } from 'react-router-dom';
import AccountLayout from 'Components/AccountLayout';

const { SET_REDIRECT_PATH } = actions;

class Account extends React.Component {
  props: {
    history: Object,
    user: boolean,
    setRedirectPath: Function,
    location: Object,
  }
  redirect() {
    this.props.setRedirectPath(this.props.location.pathname);
    return (<Redirect to="/login" />);
  }
  render() {
    const { user } = this.props;
    return (
      <div className="flex-parent flex-grow-1">
        {!user && this.redirect()}
        {user && <AccountLayout />}
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  setRedirectPath(path) {
    dispatch(action(SET_REDIRECT_PATH, path));
  },
});

const mapStateToProps = state => ({
  user: state.user.ID && state.user.authToken,
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
