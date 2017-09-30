import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Actions';
import { action } from 'Utils';
import { Redirect } from 'react-router-dom';

const { PURCHASE } = actions;

const regex = {
  email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  expMonth: /^\d{0,2}$/,
  expYear: /^\d{0,4}$/,
};
class CheckOut extends Component {
  state = {
    data: {
      name: '',
      email: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
    },
    cardDetails: {
      card: '',
      expMonth: '',
      expYear: '',
      cvc: '',
    },
    errors: {

    },
  }

  constructor(props) {
    super();
    if (props.user && props.user.Email) {
      this.state.data.email = props.user.Email;
    }
  }

  onInputChange = key => ({ currentTarget }) => {
    const { name, value } = currentTarget;
    if (currentTarget.dataset.regex && currentTarget.dataset.regex !== 'email') {
      const re = new RegExp(regex[currentTarget.dataset.regex], 'i');
      if (!re.test(value)) {
        return;
      } else if (this.state.errors[key]) {
        this.setState({
          errors: {
            ...this.state.errors,
            [key]: false,
          },
        });
      }
    }
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

  submit = e => {
    e.preventDefault();
    if (this.isValid()) {
      this.props.purchase({
        data: this.state.data,
        cardDetails: this.state.cardDetails,
      });
    }
  }

  checkData = obj => {
    Object.entries(obj).forEach(([name, value]) => {
      if (value === '' && !this.errorBlackList.includes(name)) {
        this.errors[name] = true;
      }
    });
  }

  errors = {}

  isValid = () => {
    this.errors = {};
    const { data, cardDetails } = this.state;
    this.checkData(data);
    this.checkData(cardDetails);
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

  errorBlackList = ['address2']

  addClasses = el => {
    const { props: { name } } = el;
    if (this.state.errors[name]) {
      return React.cloneElement(el, { className: 'input-error' });
    }
    if (this.state)
    return el;
  }

  onDataChange = this.onInputChange('data')

  onCardChange = this.onInputChange('cardDetails')
  render() {
    const error =
      (Object.keys(this.state.errors).length > 0 || this.props.error) &&
      <p className="font-color--danger margin--bottom-3">
        {this.props.error || 'Please fill in fields marked with red.'}
      </p>;

    return (
      <div className="wrap">
        {!this.props.items && <Redirect to="/cart" />}
        {this.props.loading && (
          <div className="flex-parent flex-grow-1 flex-justify-center flex-align-center">
            <h2>Processing Order. Please Wait</h2>
          </div>
        )}
        {!this.props.loading && (
          <div className="checkout-wrap">
            <form className="checkout-form" onSubmit={this.submit}>

              <h2 className="margin--bottom-3">1. Information</h2>
              <div className="form-group">
                {error}
                <div className="form-component margin--top-3 margin--bottom-3">
                  <h3>Personal</h3>
                </div>
                <div className="form-component">
                  {this.addClasses(<input onChange={this.onDataChange} value={this.state.data.name} name="name" type="text" />)}
                  <label>Full Name</label>
                </div>
                <div className="form-component margin--top-3">
                  <label>Email</label>
                  {this.addClasses(
                    <input data-regex="email" value={this.state.data.email} onChange={this.onDataChange} name="email" type="email" />
                  )}
                </div>
                <div className="form-component margin--top-6 margin--bottom-3">
                  <h3>Shipping</h3>
                </div>

                <div className="form-component">
                  <label>Address</label>
                  {this.addClasses(
                    <input onChange={this.onDataChange} value={this.state.data.address1} name="address1" type="text" />
                  )}
                </div>
                <div className="form-component margin--top-3">
                  <label>Address Line 2</label>
                  {this.addClasses(
                    <input onChange={this.onDataChange} value={this.state.data.address2} name="address2" type="text" />
                  )}
                </div>

                <div className="flex-parent mobile-col flex-justify-between">
                  <div className="form-component margin--top-3">
                    <label>City</label>
                    {this.addClasses(
                      <input onChange={this.onDataChange} value={this.state.data.city} name="city" type="text" />
                    )}
                  </div>
                  <div className="form-component middle-input margin--top-3">
                    <label>State</label>
                    {this.addClasses(
                      <input onChange={this.onDataChange} value={this.state.data.state} name="state" type="text" />
                    )}
                  </div>
                  <div className="form-component margin--top-3">
                    <label>Zip</label>
                    {this.addClasses(
                      <input onChange={this.onDataChange} value={this.state.data.zip} name="zip" type="text" />
                    )}
                  </div>
                </div>

                <div className="form-component margin--top-6 margin--bottom-3">
                  <h3>Payment</h3>
                </div>

                <div className="form-component">
                  <label>Credit Card Number</label>
                  {this.addClasses(
                    <input onChange={this.onCardChange} value={this.state.cardDetails.card} name="card" type="text" />,
                    this.state.cardDetails.card
                  )}
                </div>

                <div className="flex-parent flex-row flex-justify-between">
                  <div className="form-component margin--top-3 flex-grow-1 flex-parent flex-col flex-justify-end">
                    <label>Expiration Month</label>
                    {this.addClasses(
                      <input placeholder="MM" data-regex="expMonth" value={this.state.cardDetails.expMonth} onChange={this.onCardChange} name="expMonth" type="text" />,
                      this.state.cardDetails.expMonth
                    )}
                  </div>
                  <div className="form-component margin--top-3 margin--x-3 middle-input flex-grow-1 flex-parent flex-col flex-justify-end">
                    <label>Expiration Year</label>
                    {this.addClasses(
                      <input placeholder="YYYY" data-regex="expYear" value={this.state.cardDetails.expYear} onChange={this.onCardChange} name="expYear" type="text" />,
                      this.state.cardDetails.expYear
                    )}
                  </div>
                  <div className="form-component margin--top-3 flex-grow-1 flex-parent flex-col flex-justify-end">
                    <label>CVC</label>
                    {this.addClasses(
                      <input data-regex="expYear" placeholder="000(0)" onChange={this.onCardChange} value={this.state.cardDetails.cvc} name="cvc" type="text" />,
                      this.state.cardDetails.cvc
                    )}
                  </div>
                </div>
                <div className="form-component margin--y-3">
                  {error}
                  <button className="btn btn--second alt">Purchase</button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  totalPrice: state.cart.totalPrice,
  items: state.cart.items.length > 0,
  user: state.user,
  error: state.errors.checkout,
  loading: state.loading.page === 'purchase',
});

const mapDispatchToProps = dispatch => ({
  purchase(data) {
    dispatch(action(PURCHASE, data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
