import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

function OrderConfirmation({ orderID, email }) {
  return (
    <div className="flex-parent flex-grow-1 flex-align-center flex-justify-center">
      <div>
        { (!orderID && !email) && <Redirect to="/" /> }
        <h2>Thanks For Your Order</h2>
        <h3 className="margin--bottom-3">{`You're going to like it.`}</h3>
        <p className="margin--bottom-1">{`We've sent a confirmation email to `}<span className="strong">{email}</span></p>
        <p>{`You're reference number is `}<span className="strong">{orderID}</span></p>
        <Link to="/" className="btn btn--first margin--top-3">Done</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state.orderConfirmation,
});

export default connect(mapStateToProps)(OrderConfirmation);
