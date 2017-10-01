import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from 'Actions';
import { action } from 'Utils';
import { Redirect, Link } from 'react-router-dom';

const { PURCHASE } = actions;

function toCurrency(num) {
  return num.toLocaleString('USD', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

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
    window.scrollTo(0, 0);
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

  onDataChange = this.onInputChange('data')

  onCardChange = this.onInputChange('cardDetails')
  render() {
    const error =
      (Object.keys(this.state.errors).length > 0 || this.props.error) &&
      <p className="font-color--danger margin--bottom-3">
        {Object.keys(this.state.errors).length > 0 ? 'Please fill in fields marked with red.' : this.props.error}
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
          <div className="checkout-page">
            <div className="checkout-wrap">
              <form className="checkout-form">

                <h2 className="margin--bottom-5 underline-header">1. Personal</h2>
                <div className="form-group">
                  <p className="small-caps">{error}</p>
                  <div className="form-component">
                    {this.addClasses(
                      <input onChange={this.onDataChange} value={this.state.data.name} name="name" type="text" />,
                      this.state.data.name
                    )}
                    <label>Full Name</label>
                  </div>
                  <div className="form-component">
                    {this.addClasses(
                      <input data-regex="email" value={this.state.data.email} onChange={this.onDataChange} name="email" type="email" />,
                      this.state.data.email
                    )}
                    <label>Email</label>
                  </div>

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

                  <div className="form-component margin--top-6 margin--bottom-3">
                    <h2 className="underline-header margin--bottom-5">2. Payment</h2>
                  </div>

                  <div className="form-component">
                    {this.addClasses(
                      <input onChange={this.onCardChange} value={this.state.cardDetails.card} name="card" type="text" />,
                      this.state.cardDetails.card
                    )}
                    <label>Credit Card Number</label>
                  </div>

                  <div className="flex-parent mobile-col flex-row flex-justify-between">
                    <div className="form-component">
                      {this.addClasses(
                        <input data-regex="expMonth" value={this.state.cardDetails.expMonth} onChange={this.onCardChange} name="expMonth" type="text" />,
                        this.state.cardDetails.expMonth
                      )}
                      <label>Exp. Month (MM)</label>
                    </div>
                    <div className="form-component middle-input">
                      {this.addClasses(
                        <input data-regex="expYear" value={this.state.cardDetails.expYear} onChange={this.onCardChange} name="expYear" type="text" />,
                        this.state.cardDetails.expYear
                      )}
                      <label>Exp. Year (YYYY)</label>

                    </div>
                    <div className="form-component">
                      {this.addClasses(
                        <input data-regex="expYear" onChange={this.onCardChange} value={this.state.cardDetails.cvc} name="cvc" type="text" />,
                        this.state.cardDetails.cvc
                      )}
                      <label>CVC</label>

                    </div>
                  </div>
                </div>
              </form>
              <div className="flex-grow-1">
                <div className="flex-parent flex-justify-between underline-header">
                  <h2>Summary</h2>
                  <Link to="/cart" className="link--underlined">Edit Cart</Link>
                </div>
                <div className="flex-parent flex-justify-between underline-header">
                  <p className="font-color--light">Total Price</p>
                  <h2 className="font-color--light">{toCurrency(this.props.totalPrice)}</h2>
                </div>
              </div>
            </div>
            <div className="margin--y-5">
              <button onClick={this.submit} className="btn--primary--inverse">Purchase Now</button>
            </div>
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
