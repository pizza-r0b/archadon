require("source-map-support").install();
exports.ids = [19];
exports.modules = {

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _Constants = __webpack_require__(12);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _reactRouterDom = __webpack_require__(4);

var _Utils = __webpack_require__(3);

var _ProductDetailLink = __webpack_require__(15);

var _ProductDetailLink2 = _interopRequireDefault(_ProductDetailLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REMOVE_FROM_CART = _Actions2.default.REMOVE_FROM_CART;


var CartItem = function CartItem(_ref) {
  var _ref$item = _ref.item,
      item = _ref$item === undefined ? _Constants.DEFAULT_ITEM : _ref$item,
      removeFromCart = _ref.removeFromCart;
  return _react2.default.createElement(
    'div',
    { className: 'cart-item' },
    item.Images && _react2.default.createElement(
      _ProductDetailLink2.default,
      { product: item },
      _react2.default.createElement('img', { alt: item.Name, src: _Constants.IMAGE_ORIGIN + '/landscape_' + item.Images[0] })
    ),
    _react2.default.createElement(
      'div',
      { className: 'details' },
      _react2.default.createElement('div', { onClick: removeFromCart(item._id), style: { cursor: 'pointer' }, className: 'x-btn' }),
      _react2.default.createElement(
        'div',
        { className: 'cart-details-top' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            { className: 'margin--bottom-3' },
            item.Name
          ),
          _react2.default.createElement(
            'p',
            { className: 'font-color--lighter' },
            item.LongDescription,
            ' - ',
            item.ShortDescription,
            ' - ',
            item.Width,
            ' x ',
            item.Height
          )
        ),
        _react2.default.createElement(
          'h3',
          { className: 'font-color--light h3' },
          item.Price.toLocaleString('USD', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
          })
        )
      ),
      _react2.default.createElement('div', null)
    )
  );
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: function removeFromCart(ID) {
      return function () {
        return dispatch((0, _Utils.action)(REMOVE_FROM_CART, ID));
      };
    }
  };
};

CartItem = (0, _reactRedux.connect)(null, mapDispatchToProps)(CartItem);

function Cart(_ref2) {
  var _ref2$cart = _ref2.cart,
      items = _ref2$cart.items,
      totalPrice = _ref2$cart.totalPrice;

  return _react2.default.createElement(
    'div',
    { className: 'wrap margin--bottom-5' },
    items.length === 0 && _react2.default.createElement(
      'div',
      { className: 'flex-parent flex-col flex-grow-1 flex-align-center flex-justify-center' },
      _react2.default.createElement(
        'h2',
        null,
        'Your cart is empty'
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/shop', className: 'btn--primary margin--top-5' },
        'Shop Now'
      )
    ),
    items.length > 0 && _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'flex-parent flex-align-center underline-header' },
        _react2.default.createElement(
          'h2',
          { className: 'margin--right-10' },
          'Your Cart'
        ),
        _react2.default.createElement(
          'p',
          { className: 'font-color--light' },
          items.length + ' ' + (items.length === 1 ? 'Item' : 'Items')
        )
      ),
      items.map(function (item) {
        return _react2.default.createElement(CartItem, { key: item._id, item: item });
      }),
      _react2.default.createElement(
        'div',
        { className: 'cart-cont-shopping margin--y-10' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/shop', className: 'btn--alt' },
          'Continue Shopping'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'cart-bottom-row' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/checkout', className: 'btn--primary--inverse checkout-btn' },
          'Checkout Now'
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex-parent flex-align-center' },
          _react2.default.createElement(
            'p',
            { className: 'margin--right-3' },
            'Total Price'
          ),
          _react2.default.createElement(
            'h2',
            { className: 'font-color--light' },
            totalPrice.toLocaleString('USD', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })
          )
        )
      )
    )
  );
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    cart: state.cart
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(Cart);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Cart, 'Cart', '/Users/realseanp1/Projects/archadon/src/client/components/Cart.jsx');

  __REACT_HOT_LOADER__.register(REMOVE_FROM_CART, 'REMOVE_FROM_CART', '/Users/realseanp1/Projects/archadon/src/client/components/Cart.jsx');

  __REACT_HOT_LOADER__.register(CartItem, 'CartItem', '/Users/realseanp1/Projects/archadon/src/client/components/Cart.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Cart.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Cart.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Cart.jsx');
}();

;

/***/ })

};;
//# sourceMappingURL=19.js.map