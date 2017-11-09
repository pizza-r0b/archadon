require("source-map-support").install();
exports.ids = [12];
exports.modules = {

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactRouterDom = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOG_OUT = _Actions2.default.LOG_OUT;

var Logout = function (_Component) {
  (0, _inherits3.default)(Logout, _Component);

  function Logout() {
    (0, _classCallCheck3.default)(this, Logout);
    return (0, _possibleConstructorReturn3.default)(this, (Logout.__proto__ || (0, _getPrototypeOf2.default)(Logout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Logout, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.logout();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
    }
  }]);
  return Logout;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logout: function logout() {
      dispatch((0, _Utils.action)(LOG_OUT));
    }
  };
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Logout);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LOG_OUT, 'LOG_OUT', '/Users/realseanp1/Projects/archadon/src/client/components/Logout.jsx');

  __REACT_HOT_LOADER__.register(Logout, 'Logout', '/Users/realseanp1/Projects/archadon/src/client/components/Logout.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Logout.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Logout.jsx');
}();

;

/***/ })

};;
//# sourceMappingURL=12.js.map