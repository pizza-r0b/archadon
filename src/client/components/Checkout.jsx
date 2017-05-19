import React, { Component } from 'react';

class CheckOut extends Component {

  render() {
    return (
      <div className="flex-parent global-padding padding--top-12 flex-col flex-align-center flex-justify-start full-width">
        <h2 className="margin--bottom-7">Check Out</h2>
        <form className="form">
          <div className="form-group">
            <div className="form-component margin--top-3 margin--bottom-3">
              <h3>Personal</h3>
            </div>
            <div className="form-component">
              <label>Full Name</label>
              <input name="name" type="text" />
            </div>
            <div className="form-component margin--top-3">
              <label>Email</label>
              <input name="email" type="email" />
            </div>
            <div className="form-component margin--top-6 margin--bottom-3">
              <h3>Shipping</h3>
            </div>

            <div className="form-component">
              <label>Address</label>
              <input name="address1" type="text" />
            </div>
            <div className="form-component margin--top-3">
              <label>Address Line 2</label>
              <input name="address2" type="text" />
            </div>

            <div className="flex-parent mobile-col flex-justify-between">
              <div className="form-component margin--top-3">
                <label>City</label>
                <input name="city" type="text" />
              </div>
              <div className="form-component middle-input margin--top-3">
                <label>State</label>
                <input name="state" type="text" />
              </div>
              <div className="form-component margin--top-3">
                <label>Zip</label>
                <input name="zip" type="text" />
              </div>
            </div>

            <div className="form-component margin--top-6 margin--bottom-3">
              <h3>Payment</h3>
            </div>

            <div className="form-component">
              <label>Credit Card Number</label>
              <input name="card" type="text" />
            </div>

            <div className="flex-parent flex-row flex-justify-between">
              <div className="form-component margin--top-3 flex-grow-1 flex-parent flex-col flex-justify-end">
                <label>Expiration Month</label>
                <input name="expMonth" type="text" />
              </div>
              <div className="form-component margin--top-3 margin--x-3 middle-input flex-grow-1 flex-parent flex-col flex-justify-end">
                <label>Expiration Year</label>
                <input name="expYear" type="text" />
              </div>
              <div className="form-component margin--top-3 flex-grow-1 flex-parent flex-col flex-justify-end">
                <label>CVC</label>
                <input name="cvc" type="text" />
              </div>
            </div>
            <div className="form-component margin--y-6">
              <button className="btn btn--second alt">Purchase</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CheckOut;
