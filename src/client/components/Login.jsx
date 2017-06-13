// @flow
import React from 'react';
import { action } from 'Utils';
import Actions from 'Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const { LOG_IN } = Actions;

class LogInForm extends React.Component {

  props: {
    error?: string,
    login: Function,
  }

  state = {
    email: '',
    password: '',
  }

  onChange = ({ currentTarget: { value, name: key } }) => {
    this.setState({ [key]: value });
  }

  submit = (e) => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="flex-parent flex-col flex-align-center flex-justify-start full-width">
        <h2 className="margin--bottom-7">Enter Your Credentials</h2>
        <form className="form" onSubmit={this.submit}>
          <div className={classnames('form-group', { 'form-error': this.props.error })}>
            <div className="form-component">
              <label htmlFor="email">Email</label>
              <input onChange={this.onChange} name="email" value={this.state.email} type="text" />
            </div>
            <div className="form-component margin--top-3">
              <label htmlFor="password">Password</label>
              <input onChange={this.onChange} name="password" value={this.state.password} type="password" />
            </div>
          </div>
          <div className="form-content">
            {this.props.error && <p className="font-color--danger margin--bottom-3">{this.props.error}</p>}
            <button className="btn btn--first">Log In</button>
            <div className="margin--top-3"><span>{'Don\'t have an account?'} <Link to="/signup">Register now</Link>.</span></div>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  login(email, password) {
    dispatch(action(LOG_IN, { email, password }));
  },
});

const mapStateToProps = state => ({
  error: state.errors.login,
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
