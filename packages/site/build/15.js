require("source-map-support").install();
exports.ids = [15];
exports.modules = {

/***/ 48:
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function (_React$Component) {
  (0, _inherits3.default)(Contact, _React$Component);

  function Contact() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Contact);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Contact.__proto__ || (0, _getPrototypeOf2.default)(Contact)).call.apply(_ref, [this].concat(args))), _this), _this.state = { data: {} }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Contact, [{
    key: "addClasses",
    value: function addClasses() {}
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "wrap" },
        _react2.default.createElement(
          "div",
          { className: "margin--bottom-5" },
          _react2.default.createElement(
            "h1",
            null,
            "Get In Touch"
          ),
          _react2.default.createElement(
            "h3",
            null,
            "Have a question, want to provide feedback, or just want to say hello?"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "flex-col-break" },
          _react2.default.createElement(
            "form",
            null,
            _react2.default.createElement(
              "div",
              { className: "form-group" },
              _react2.default.createElement(
                "div",
                { className: "form-component" },
                this.addClasses(_react2.default.createElement("input", { onChange: this.onDataChange, value: this.state.data.name, name: "name", type: "text" }), this.state.data.name),
                _react2.default.createElement(
                  "label",
                  null,
                  "Full Name"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "flex-col-break--m" },
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "h4",
                { className: "small-caps" },
                "General Inquiries:"
              ),
              _react2.default.createElement(
                "p",
                null,
                "hello@archadon.com"
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "margin--top-5" },
              _react2.default.createElement(
                "h4",
                { className: "small-caps" },
                "Returns:"
              ),
              _react2.default.createElement(
                "p",
                null,
                "returns@archadon.com"
              )
            )
          )
        )
      );
    }
  }]);
  return Contact;
}(_react2.default.Component);

var _default = Contact;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Contact, "Contact", "/Users/realseanp1/Projects/archadon/src/client/components/Contact.jsx");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/realseanp1/Projects/archadon/src/client/components/Contact.jsx");
}();

;

/***/ })

};;
//# sourceMappingURL=15.js.map