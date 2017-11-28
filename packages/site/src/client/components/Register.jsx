// @flow
import React from 'react';
import { action } from 'Utils';
import Actions from 'Actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const { SIGN_UP } = Actions;
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function setState() {
  return function (newState) {
    return new Promise((resolve, reject) => {
      this.setState(newState, resolve);
    });
  }.bind(this);
}

class LogInForm extends React.Component {

  props: {
    error?: string,
    login: Function,
  }

  state = {
    email: '',
    password: '',
    confirmPassword: '',
    errors: { ...this.initialErrorState },
    errorMessage: [],
  }

  constructor() {
    super();
  }

  initialErrorState = {
    email: false,
    password: false,
    confirmPassword: false,
  }

  _setState = setState.call(this);

  onChange = ({ currentTarget: { value, name: key } }) => {
    this.setState({ [key]: value });
  }

  submit = async (e) => {
    e.preventDefault();
    const errorMessage = [];

    await this._setState({ errors: {}, errorMessage: [] });

    if (this.state.password !== this.state.confirmPassword) {
      await this._setState({
        errors: {
          ...this.state.errors,
          password: true,
        },
      });

      errorMessage.push('Passwords don\'t match.');
    }
    if (this.state.password.trim() === '' || this.state.confirmPassword.trim() === '' || this.state.email === '') {
      console.log(Object.entries(this.state.errors).reduce((a, [key]) => {
        if (!this.state[key]) {
          a[key] = true;
        }
        return a;
      }, {}));
      await this._setState({
        errors: Object.entries(this.initialErrorState).reduce((a, [key]) => {
          a[key] = true;
          return a;
        }, {}),
      });

      errorMessage.push('Please fill in all fields.');
    }
    if (!emailRegex.test(this.state.email)) {
      await this._setState({
        errors: {
          ...this.state.errors,
          email: true,
        }
      });

      errorMessage.push('Please enter a valid email.');
    }

    if (this.state.errorMessage.length !== errorMessage.length) {
      await this._setState({ errorMessage });
    }

    if (errorMessage.length > 0) return;

    this.props.signup(this.state.email, this.state.password);
  }

  render() {
    const btnProps = {};
    if (this.props.loading) {
      btnProps.disabled = true;
    }
    return (
      <form className="form" onSubmit={this.submit}>
        <div className="form-group">
          <div className="form-component">
            <input onChange={this.onChange} className={classnames({ 'input-filled': this.state.email, 'input-error': this.state.errors.email })} name="email" value={this.state.email} type="text" />
            <label htmlFor="email">Email</label>

          </div>
          <div className="form-component margin--top-3">
            <input className={classnames({ 'input-filled': this.state.password, 'input-error': this.state.errors.password })} onChange={this.onChange} name="password" value={this.state.password} type="password" />
            <label htmlFor="password">Password</label>

          </div>
          <div className="form-component margin--top-3">
            <input className={classnames({ 'input-filled': this.state.confirmPassword, 'input-error': this.state.errors.password })} onChange={this.onChange} name="confirmPassword" value={this.state.confirmPassword} type="password" />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>
        </div>
        <div>
          {(this.props.error || this.state.errorMessage.length > 0) && <p className="font-color--danger small-caps margin--top-3">{this.props.error || this.state.errorMessage.join(' ')}</p>}
          <button {...btnProps} className="btn--primary--inverse margin--top-3 full-width">{ this.props.loading ? 'Please Wait' : 'Sign Up'}</button>
        </div>
        <p className="small-caps font-color--lighter margin--top-3">
          <span className="font-color--light">Pro Tip:</span> When creating a password on a website you should make it unique from any other password you have. It should be a complex password utilizing different characters (uppercase, lowercase, numbers, symbols). You don't need to remember all your passwords - just keep track of them by writing them down and storing them in a secure location.
        </p>
      </form>
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
  loading: state.loading.page === 'signup',
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInForm);
