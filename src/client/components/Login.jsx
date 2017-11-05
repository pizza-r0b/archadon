// @flow
import React from 'react';
import { action } from 'Utils';
import Actions from 'Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const { LOG_IN } = Actions;

const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

class LogInForm extends React.Component {

  props: {
    error?: string,
    login: Function,
  }

  state = {
    email: '',
    password: '',
    errors: {},
  }

  onChange = ({ currentTarget: { value, name: key } }) => {
    this.setState({ [key]: value });
  }

  isValid = () => {
    const errors = [];

    if (!emailRegex.test(this.state.email)) {
      errors.push({ email: true });
    }

    if (!this.state.password) {
      errors.push({ password: true });
    }

    const valid = errors.length === 0;

    if (!valid) {
      this.setState({
        errors: errors.reduce((a, b) => { return { ...a, ...b } }, {}),
      });
    }

    return errors.length === 0;
  }

  submit = (e) => {
    e.preventDefault();
    this.setState({ errors: {} }, () => {
      if (!this.isValid()) return;
      this.props.login(this.state.email, this.state.password);
    });
  }

  render() {
    const btnProps = {};

    if (this.props.loading) {
      btnProps.disabled = true;
    }

    return (
      <form className="form margin--bottom-0" onSubmit={this.submit}>
        <div className={classnames('form-group', { 'form-error': this.props.error })}>
          <div className="form-component">
            <input
              onChange={this.onChange}
              className={classnames({
                'input-filled': this.state.email,
                'input-error': this.state.errors.email,
              })}
              name="email" value={this.state.email}
              type="text"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="form-component">
            <input
              onChange={this.onChange}
              className={classnames({
                'input-filled': this.state.password,
                'input-error': this.state.errors.password,
              })}
              name="password"
              value={this.state.password}
              type="password"
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className="margin--top-3">
          {this.props.error && <p className="font-color--danger margin--bottom-3 small-caps">{this.props.error}</p>}
          <div className="signin-btns">
            <button {...btnProps} className="btn--primary--inverse">{btnProps.disabled ? 'Please Wait' : 'Sign In'}</button>
            {/*<button className="btn--primary">Forgot Password</button>*/}
          </div>
        </div>
      </form>
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
  loading: state.loading.page === 'login',
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
