// @flow
import React from 'react';
import { action } from 'Utils';
import Actions from 'Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const { SIGN_UP } = Actions;

class LogInForm extends React.Component {

  props: {
    error?: string,
    login: Function,
  }

  state = {
    email: '',
    password: '',
    confirmPassword: '',
    error: {},
  }

  onChange = ({ currentTarget: { value, name: key } }) => {
    this.setState({ [key]: value });
  }

  submit = (e) => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        error: {
          type: 'confirm',
          msg: 'Passwords do not match.',
        },
      });
      return;
    }
    this.props.signup(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="flex-parent flex-col flex-align-center flex-justify-start full-width">
        <h2 className="margin--bottom-7">Sign Up</h2>
        <form className="form" onSubmit={this.submit}>
          <div className={classnames('form-group', { 'form-error': this.props.error })}>
            <div className="form-component">
              <label htmlFor="email">Email</label>
              <input onChange={this.onChange} name="email" value={this.state.email} type="text" />
            </div>
            <div className="form-component margin--top-3">
              <label htmlFor="password">Password</label>
              <input className={classnames({ 'input-error': this.state.error.type === 'confirm' })} onChange={this.onChange} name="password" value={this.state.password} type="password" />
            </div>
            <div className="form-component margin--top-3">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input className={classnames({ 'input-error': this.state.error.type === 'confirm' })} onChange={this.onChange} name="confirmPassword" value={this.state.confirmPassword} type="password" />
            </div>
          </div>
          <div className="form-content">
            {(this.props.error || this.state.error.msg) && <p className="font-color--danger margin--top-0 margin--bottom-3">{this.props.error || this.state.error.msg}</p>}
            <button className="btn btn--first">Sign Up</button>
            <div className="margin--top-3"><span>{'Have an account?'} <Link to="/login">Log in</Link>.</span></div>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  signup(email, password) {
    dispatch(action(SIGN_UP, { email, password }));
  },
});

const mapStateToProps = state => ({
  error: state.errors.signup,
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
