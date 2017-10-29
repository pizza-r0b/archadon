import React from 'react';
import { connect } from 'react-redux';
import actions from 'Actions';
import { action } from 'Utils';
import uuid from 'uuid/v1';

const { UPDATE_USER_DATA, UPDATE_USER_PASSWORD } = actions;

class Profile extends React.Component {

  constructor(props) {
    super();

    this.state = {
      data: {
        name: props.name || '',
        oldPassword: '',
        newPassword: '',
        confirmNewPassword: '',
      },
      errors: {},
    };

    this.nameFormReqId = uuid();
    this.passwordReqId = uuid();
    this.addressReqId = uuid();
  }

  onInputChange = key => ({ currentTarget }) => {
    const { name, value } = currentTarget;
    if (value.length > 52) {
      return;
    }
    this.setState({
      [key]: {
        ...this.state[key],
        [name]: value,
      },
    });
  }

  onDataChange = this.onInputChange('data')

  addClasses = (el, val) => {
    const { props: { name } } = el;
    const classes = [];
    if (this.state.errors[name]) {
      classes.push('input-error');
    }
    if (val) {
      classes.push('input-filled');
    }

    return classes.length > 0 ? React.cloneElement(el, { className: classes.join(' ') }) : el;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.requests[this.nameFormReqId] === 'started' && nextProps.requests[this.nameFormReqId] === 'done') {
      this.setState({
        showNameForm: false,
      });
    }

    if (this.props.requests[this.addressReqId] === 'started' && nextProps.requests[this.addressReqId] === 'done') {
      this.setState({
        addressSuccess: true,
      });
    }

    if (this.props.requests[this.addressReqId] === 'started' && nextProps.requests[this.addressReqId] === 'error') {
      this.setState({
        addressSuccess: false,
        addressError: true,
      });
    }

    if (this.props.requests[this.passwordReqId] === 'started' && nextProps.requests[this.passwordReqId] === 'done') {
      this.setState({
        data: {
          ...this.state.data,
          oldPassword: '',
          newPassword: '',
          confirmNewPassword: '',
        },
        passwordSuccess: true,
        passwordError: false,
      });
    } else if (this.props.requests[this.passwordReqId] === 'started' && nextProps.requests[this.passwordReqId] === 'error') {
      this.setState({
        passwordSuccess: false,
        passwordError: true,
      });
    }
  }

  checkData = obj => {
    Object.entries(obj).forEach(([name, value]) => {
      if (value === '' || value == void 0) {
        this.errors[name] = true;
      }
    });
  }

  isValid = (data) => {
    this.errors = {};

    this.checkData(data);
    if (Object.keys(this.errors).length) {
      this.setState({ errors: this.errors });
      return false;
    } else {
      if (Object.keys(this.state.errors).length) {
        this.setState({ errors: {} });
      }
      return true;
    }
  }

  onSubmit = (data, keys, reqId, isPassword) => e => {
    e.preventDefault();
    const payload = {};
    const obj = data.reduce((a, b, i) => {
      a[b] = this.state.data[b];
      payload[keys[i]] = a[b];
      return a;
    }, {});

    if (!this.isValid(obj)) {
      return;
    }

    if (!isPassword) {
      this.props.updateData({
        data: payload,
        id: reqId,
      });
    } else {
      if (this.state.data.newPassword !== this.state.data.confirmNewPassword) {
        this.setState({
          passwordError: true,
          passwordSuccess: false,
        });
      } else {
        this.props.updatePassword({
          data: {
            password: this.state.data.oldPassword,
            newPassword: this.state.data.newPassword,
          },
          id: this.passwordReqId,
        });
      }
    }
  }

  showForm = name => () => {
    this.setState({ [name]: true });
  }

  renderError = (keys, msg, show) => ((Object.entries(this.state.errors).some(([key, value]) => keys.includes(key) && value) || show) && (
    <p className="font-color--danger margin--bottom-3 small-caps">
      {msg || 'Please fill in fields marked with red.'}
    </p>
  ))

  render() {
    let nameForm;
    let addressForm;
    const addressProps = {};
    const nameProps = {};

    if (this.props.user.FullName && !this.state.showNameForm) {
      nameForm = (
        <div className="flex-parent flex-justify-between flex-align-center">
          <div>
            <p>{this.props.user.FullName}</p>
          </div>
          <div>
            <div onClick={this.showForm('showNameForm')} className="btn--alt">Edit</div>
          </div>
        </div>
      )
    } else {
      if (this.props.requests[this.nameFormReqId] === 'started') {
        nameProps.disabled = true;
      }
      nameForm = (
        <form className="flex-parent flex-col" onSubmit={this.onSubmit(['name'], ['FullName'], this.nameFormReqId)}>
          <div className="form-group">
            <div className="form-component">
              {this.addClasses(
                <input onChange={this.onDataChange} value={this.state.data.name} name="name" type="text" />,
                this.state.data.name
              )}
              <label>Full Name</label>
            </div>
          </div>
          <div className="flex-parent flex-justify-end">
            <button {...nameProps} type="submit" className="btn--alt margin--top-3">Save Name</button>
          </div>
        </form>
      )
    }

    if (this.props.user.Address1 && !this.state.showAddressForm) {
      addressForm = (
        <div className="flex-parent flex-justify-between flex-align-center">
          <div>
            <p>{this.props.user.Address1}</p>
            {this.props.user.Address2 !== void 0 && <p>{this.props.user.Address2}</p>}
            <p>{this.props.user.City}, {this.props.user.State}, {this.props.user.Zip}</p>
          </div>
          <div>
          <div onClick={this.showForm('showAddressForm')} className="btn--alt">Edit</div>

          </div>
        </div>
      )
    } else {
      if (this.props.requests[this.addressReqId] === 'started') {
        addressProps.disabled = true;
      }
      addressForm = (
        <form onSubmit={this.onSubmit(['address1', 'city', 'state', 'zip'], ['Address1', 'City', 'State', 'Zip'], this.addressReqId)}>
          <div className="form-component">
            {this.addClasses(
              <input onChange={this.onDataChange} value={this.state.data.address1} name="address1" type="text" />,
              this.state.data.address1
            )}
            <label>Address</label>

          </div>
          <div className="form-component">
            {this.addClasses(
              <input onChange={this.onDataChange} value={this.state.data.address2} name="address2" type="text" />,
              this.state.data.address2
            )}
            <label>Address Line 2</label>

          </div>

          <div className="flex-parent mobile-col flex-justify-between">
            <div className="form-component">
              {this.addClasses(
                <input onChange={this.onDataChange} value={this.state.data.city} name="city" type="text" />,
                this.state.data.city
              )}
              <label>City</label>

            </div>
            <div className="form-component middle-input">
              {this.addClasses(
                <input onChange={this.onDataChange} value={this.state.data.state} name="state" type="text" />,
                this.state.data.state
              )}
              <label>State</label>
            </div>
            <div className="form-component">
              {this.addClasses(
                <input onChange={this.onDataChange} value={this.state.data.zip} name="zip" type="text" />,
                this.state.data.zip
              )}
              <label>Zip</label>

            </div>
          </div>
          <div className="flex-parent flex-justify-end">
            <button {...addressProps} type="submit" className="btn--alt margin--top-3">Save Address</button>
          </div>
        </form>
      )
    }

    return (
      <div className="full-width">
        <h1>Account</h1>
        <h2 className="margin--bottom-8">Change your password / save some information to breeze through checkout</h2>

        {this.props.error && <p className="margin--y-3 small-caps font-color--danger">{this.props.error}</p>}
        <div className="flex-parent mobile-col">
          <div className="margin--right-4 account-section-left">
            <h2 className="underline-header">
              Profile
            </h2>
            <h3 className="small-caps font-color--light">Email</h3>
            <p>{this.props.user.Email}</p>

            <hr />

            {this.renderError(['name'])}
            <h3 className="small-caps font-color--light">Name</h3>
            {nameForm}

            <hr />
            {this.renderError(['oldPassword', 'newPassword', 'confirmNewPassword'], 'Please fill in fields marked with red / Make sure passwords match / Make sure password is correct', this.state.passwordError)}

            <h3 className="small-caps font-color--light">Password</h3>
            {this.state.passwordSuccess && <p className="font-color--success small-caps">Your password has been updated 👏!</p>}
            <form className="flex-parent flex-col" onSubmit={this.onSubmit(['oldPassword', 'newPassword', 'confirmNewPassword'], ['password', 'newPassword'], this.passwordReqId, true)}>
              <div className="form-group">
                <div className="form-component">
                  {this.addClasses(
                    <input onChange={this.onDataChange} value={this.state.data.oldPassword} name="oldPassword" type="password" />,
                    this.state.data.oldPassword
                  )}
                  <label>Current Password</label>
                </div>
                <div className="form-component">
                  {this.addClasses(
                    <input onChange={this.onDataChange} value={this.state.data.newPassword} name="newPassword" type="password" />,
                    this.state.data.newPassword
                  )}
                  <label>New Password</label>
                </div>
                <div className="form-component">
                  {this.addClasses(
                    <input onChange={this.onDataChange} value={this.state.data.confirmNewPassword} name="confirmNewPassword" type="password" />,
                    this.state.data.confirmNewPassword
                  )}
                  <label>Confirm Password</label>
                </div>
              </div>
              <div className="flex-parent flex-justify-end">
                <button disabled={this.props.requests[this.passwordReqId] === 'started'} type="submit" className="btn--alt margin--top-3">Update Password</button>
              </div>
            </form>

          </div>
          <div className="account-section account-section-right">
            <h2 className="underline-header">
              Address
            </h2>
            {this.renderError(['address1', 'city', 'state', 'zip'])}
            <h3 className="small-caps font-color--light">Shipping Address</h3>
            {this.state.addressSuccess && <p className="font-color--success small-caps">Your address has been updated 👏!</p>}
            {this.state.addressError && <p className="font-color--danger small-caps">Oops. Something went wrong. Try again.</p>}
            {addressForm}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  error: state.errors.profile,
  requests: state.requests,
});

const mapDispatchToProps = dispatch => ({
  updateData(data) {
    dispatch(action(UPDATE_USER_DATA, data));
  },
  updatePassword(data) {
    dispatch(action(UPDATE_USER_PASSWORD, data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
