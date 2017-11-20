import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// <!-- Google Code for rug purchase Conversion Page -->
// <script type="text/javascript">
// /* <![CDATA[ */
// var google_conversion_id = 971281488;
// var google_conversion_language = "en";
// var google_conversion_format = "3";
// var google_conversion_color = "ffffff";
// var google_conversion_label = "8H8qCNmh33IQ0KiSzwM";
// var google_conversion_value = 1.00;
// var google_conversion_currency = "USD";
// var google_remarketing_only = false;
// /* ]]> */
// </script>
// <script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
// </script>
// <noscript>
// <div style="display:inline;">
// <img height="1" width="1" style="border-style:none;" alt="" src="//www.googleadservices.com/pagead/conversion/971281488/?value=1.00&amp;currency_code=USD&amp;label=8H8qCNmh33IQ0KiSzwM&amp;guid=ON&amp;script=0"/>
// </div>
// </noscript>


class OrderConfirmation extends React.Component {

  componentDidMount() {
    if (typeof window !== 'undefined' && window.google_trackConversion) {
      window.google_trackConversion({
        google_conversion_id: 971281488,
        google_conversion_language: 'en',
        google_conversion_format: 3,
        google_conversion_color: 'ffffff',
        google_conversion_label: '8H8qCNmh33IQ0KiSzwM',
        google_conversion_value: 1.00,
        google_conversion_currency: 'USD',
        google_remarketing_only: false,
      });
    }

    if (window.fbq) {
      try {
        window.fbq('track', 'Purchase');
      } catch (e) {
      }
    }
  }

  render() {
    const { orderID, email } = this.props;

    return (
      <div className="wrap">
        <div>
          {(!orderID && !email) && <Redirect to="/" />}
          <Helmet>
            <title>Thanks For Your Order! - Archadon - Art for your floors - Handcrafted fine wool rugs</title>
          </Helmet>
          <h2>Thanks For Your Order</h2>
          <h3 className="margin--bottom-3 font-color--light underline-header">{`We think you'll like it.`}</h3>
          <div className="margin--y-5">
            <p className="margin--bottom-1">{`We've sent a confirmation email to `}<span className="strong">{email}</span></p>
            <p>{`You're reference number is `}<span className="strong">{orderID}</span></p>
          </div>
          <Link to="/" className="btn--primary margin--top-3">Done</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.orderConfirmation,
});

export default connect(mapStateToProps)(OrderConfirmation);
