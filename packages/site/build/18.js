require("source-map-support").install();
exports.ids = [18];
exports.modules = {

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(18);

var _keys2 = _interopRequireDefault(_keys);

var _slicedToArray2 = __webpack_require__(13);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(17);

var _entries2 = _interopRequireDefault(_entries);

var _defineProperty2 = __webpack_require__(14);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = __webpack_require__(10);

var _extends5 = _interopRequireDefault(_extends4);

var _getPrototypeOf = __webpack_require__(5);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Utils = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PURCHASE = _Actions2.default.PURCHASE;


function toCurrency(num) {
  return num.toLocaleString('USD', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

var regex = {
  email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
  expMonth: /^\d{0,2}$/,
  expYear: /^\d{0,4}$/
};

var CheckOut = function (_Component) {
  (0, _inherits3.default)(CheckOut, _Component);

  function CheckOut(props) {
    (0, _classCallCheck3.default)(this, CheckOut);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CheckOut.__proto__ || (0, _getPrototypeOf2.default)(CheckOut)).call(this));

    _this.state = {
      data: {
        name: '',
        email: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: ''
      },
      cardDetails: {
        card: '',
        expMonth: '',
        expYear: '',
        cvc: ''
      },
      errors: {}
    };

    _this.onInputChange = function (key) {
      return function (_ref) {
        var currentTarget = _ref.currentTarget;
        var name = currentTarget.name,
            value = currentTarget.value;

        if (currentTarget.dataset.regex && currentTarget.dataset.regex !== 'email') {
          var re = new RegExp(regex[currentTarget.dataset.regex], 'i');
          if (!re.test(value)) {
            return;
          } else if (_this.state.errors[key]) {
            _this.setState({
              errors: (0, _extends5.default)({}, _this.state.errors, (0, _defineProperty3.default)({}, key, false))
            });
          }
        }
        if (value.length > 52) {
          return;
        }
        _this.setState((0, _defineProperty3.default)({}, key, (0, _extends5.default)({}, _this.state[key], (0, _defineProperty3.default)({}, name, value))));
      };
    };

    _this.submit = function (e) {
      e.preventDefault();
      window.scrollTo(0, 0);
      if (_this.isValid()) {
        _this.props.purchase({
          data: _this.state.data,
          cardDetails: _this.state.cardDetails
        });
      }
    };

    _this.checkData = function (obj) {
      (0, _entries2.default)(obj).forEach(function (_ref2) {
        var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
            name = _ref3[0],
            value = _ref3[1];

        if (value === '' && !_this.errorBlackList.includes(name)) {
          _this.errors[name] = true;
        }
      });
    };

    _this.errors = {};

    _this.isValid = function () {
      _this.errors = {};
      var _this$state = _this.state,
          data = _this$state.data,
          cardDetails = _this$state.cardDetails;

      _this.checkData(data);
      _this.checkData(cardDetails);
      if ((0, _keys2.default)(_this.errors).length) {
        _this.setState({ errors: _this.errors });
        return false;
      } else {
        if ((0, _keys2.default)(_this.state.errors).length) {
          _this.setState({ errors: {} });
        }
        return true;
      }
    };

    _this.errorBlackList = ['address2'];

    _this.addClasses = function (el, val) {
      var name = el.props.name;

      var classes = [];
      if (_this.state.errors[name]) {
        classes.push('input-error');
      }
      if (val) {
        classes.push('input-filled');
      }

      return classes.length > 0 ? _react2.default.cloneElement(el, { className: classes.join(' ') }) : el;
    };

    _this.onDataChange = _this.onInputChange('data');
    _this.onCardChange = _this.onInputChange('cardDetails');

    if (props.user) {
      var _props$user = props.user,
          email = _props$user.Email,
          address1 = _props$user.Address1,
          address2 = _props$user.Address2,
          city = _props$user.City,
          name = _props$user.FullName,
          state = _props$user.State,
          zip = _props$user.Zip;

      _this.state.data = (0, _extends5.default)({}, _this.state.data, {
        email: email || '',
        address1: address1 || '',
        address2: address2 || '',
        city: city || '',
        state: state || '',
        name: name || '',
        zip: zip || ''
      });
    }
    return _this;
  }

  (0, _createClass3.default)(CheckOut, [{
    key: 'render',
    value: function render() {
      var error = ((0, _keys2.default)(this.state.errors).length > 0 || this.props.error) && _react2.default.createElement(
        'p',
        { className: 'font-color--danger margin--bottom-3 small-caps' },
        (0, _keys2.default)(this.state.errors).length > 0 ? 'Please fill in fields marked with red.' : this.props.error
      );

      return _react2.default.createElement(
        'div',
        { className: 'wrap' },
        !this.props.items && _react2.default.createElement(_reactRouterDom.Redirect, { to: '/cart' }),
        this.props.loading && _react2.default.createElement(
          'div',
          { className: 'flex-parent flex-grow-1 flex-justify-center flex-align-center' },
          _react2.default.createElement(
            'h2',
            null,
            'Processing Order. Please Wait'
          )
        ),
        !this.props.loading && _react2.default.createElement(
          'div',
          { className: 'checkout-page' },
          _react2.default.createElement(
            'div',
            { className: 'checkout-wrap' },
            _react2.default.createElement(
              'form',
              { className: 'checkout-form' },
              _react2.default.createElement(
                'h2',
                { className: 'margin--bottom-5 underline-header' },
                '1. Personal'
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group' },
                error,
                _react2.default.createElement(
                  'div',
                  { className: 'form-component' },
                  this.addClasses(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.name, name: 'name', type: 'text' }), this.state.data.name),
                  _react2.default.createElement(
                    'label',
                    null,
                    'Full Name'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-component' },
                  this.addClasses(_react2.default.createElement('input', { 'data-regex': 'email', value: this.state.data.email, onChange: this.onDataChange, name: 'email', type: 'email' }), this.state.data.email),
                  _react2.default.createElement(
                    'label',
                    null,
                    'Email'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-component' },
                  this.addClasses(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.address1, name: 'address1', type: 'text' }), this.state.data.address1),
                  _react2.default.createElement(
                    'label',
                    null,
                    'Address'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-component' },
                  this.addClasses(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.address2, name: 'address2', type: 'text' }), this.state.data.address2),
                  _react2.default.createElement(
                    'label',
                    null,
                    'Address Line 2'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'flex-parent mobile-col flex-justify-between' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-component' },
                    this.addClasses(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.city, name: 'city', type: 'text' }), this.state.data.city),
                    _react2.default.createElement(
                      'label',
                      null,
                      'City'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-component middle-input' },
                    this.addClasses(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.state, name: 'state', type: 'text' }), this.state.data.state),
                    _react2.default.createElement(
                      'label',
                      null,
                      'State'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-component' },
                    this.addClasses(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.zip, name: 'zip', type: 'text' }), this.state.data.zip),
                    _react2.default.createElement(
                      'label',
                      null,
                      'Zip'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-component margin--top-6 margin--bottom-3' },
                  _react2.default.createElement(
                    'h2',
                    { className: 'underline-header margin--bottom-5' },
                    '2. Payment'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-component' },
                  this.addClasses(_react2.default.createElement('input', { onChange: this.onCardChange, value: this.state.cardDetails.card, name: 'card', type: 'text' }), this.state.cardDetails.card),
                  _react2.default.createElement(
                    'label',
                    null,
                    'Credit Card Number'
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'flex-parent mobile-col flex-row flex-justify-between' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-component' },
                    this.addClasses(_react2.default.createElement('input', { 'data-regex': 'expMonth', value: this.state.cardDetails.expMonth, onChange: this.onCardChange, name: 'expMonth', type: 'text' }), this.state.cardDetails.expMonth),
                    _react2.default.createElement(
                      'label',
                      null,
                      'Exp. Month (MM)'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-component middle-input' },
                    this.addClasses(_react2.default.createElement('input', { 'data-regex': 'expYear', value: this.state.cardDetails.expYear, onChange: this.onCardChange, name: 'expYear', type: 'text' }), this.state.cardDetails.expYear),
                    _react2.default.createElement(
                      'label',
                      null,
                      'Exp. Year (YYYY)'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-component' },
                    this.addClasses(_react2.default.createElement('input', { 'data-regex': 'expYear', onChange: this.onCardChange, value: this.state.cardDetails.cvc, name: 'cvc', type: 'text' }), this.state.cardDetails.cvc),
                    _react2.default.createElement(
                      'label',
                      null,
                      'CVC'
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'flex-grow-1' },
              _react2.default.createElement(
                'div',
                { className: 'flex-parent flex-justify-between underline-header' },
                _react2.default.createElement(
                  'h2',
                  null,
                  'Summary'
                ),
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/cart', className: 'link--underlined' },
                  'Edit Cart'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'flex-parent flex-justify-between underline-header' },
                _react2.default.createElement(
                  'p',
                  { className: 'font-color--light' },
                  'Total Price'
                ),
                _react2.default.createElement(
                  'h2',
                  { className: 'font-color--light' },
                  toCurrency(this.props.totalPrice)
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'margin--y-5' },
            _react2.default.createElement(
              'button',
              { onClick: this.submit, className: 'btn--primary--inverse' },
              'Purchase Now'
            )
          )
        )
      );
    }
  }]);
  return CheckOut;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    totalPrice: state.cart.totalPrice,
    items: state.cart.items.length > 0,
    user: state.user,
    error: state.errors.checkout,
    loading: state.loading.page === 'purchase'
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    purchase: function purchase(data) {
      dispatch((0, _Utils.action)(PURCHASE, data));
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(CheckOut);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(toCurrency, 'toCurrency', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');

  __REACT_HOT_LOADER__.register(PURCHASE, 'PURCHASE', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');

  __REACT_HOT_LOADER__.register(regex, 'regex', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');

  __REACT_HOT_LOADER__.register(CheckOut, 'CheckOut', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');
}();

;

/***/ })

};;
//# sourceMappingURL=18.js.map