require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Utils = __webpack_require__(4);

var _default = (0, _Utils.keyMirror)({
  LOG_IN: null,
  SET_ERROR: null,
  SET_USER_DATA: null,
  SIGN_UP: null,
  USER_AUTH_SUCCESS: null,
  APP_LOAD: null,
  LOG_OUT: null,
  CLEAR_AUTHENTICATION_DATA: null,
  LOADING: null,
  SET_REDIRECT_PATH: null,
  PRODUCT_LIST_LOADED: null,
  ADD_TO_CART: null,
  PRODUCT_DATA_LOADED: null,
  REMOVE_FROM_CART: null,
  TOGGLE_FAVORITE: null,
  PURCHASE: null,
  LOAD_FAVORITES: null,
  FAVORITES_LOADED: null,
  SET_LOADING_PAGE: null,
  SET_ORDER_CONFIRMATION: null,
  REPLACE_CART: null
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/actions/index.js');
}();

;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(20);

var _stringify2 = _interopRequireDefault(_stringify);

var _slicedToArray2 = __webpack_require__(15);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(14);

var _entries2 = _interopRequireDefault(_entries);

var _promise = __webpack_require__(65);

var _promise2 = _interopRequireDefault(_promise);

var _keys = __webpack_require__(21);

var _keys2 = _interopRequireDefault(_keys);

exports.action = action;
exports.keyMirror = keyMirror;
exports.request = request;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function action() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var payload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var error = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  return {
    type: type, payload: payload, meta: meta, error: error
  };
}

function keyMirror(obj) {
  var out = {};
  (0, _keys2.default)(obj).forEach(function (key) {
    out[key] = key;
  });
  return out;
}

function request(method, url, data, headers) {
  return new _promise2.default(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    if (headers) {
      (0, _entries2.default)(headers).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
            header = _ref2[0],
            val = _ref2[1];

        xhr.setRequestHeader(header, val);
      });
    }

    xhr.addEventListener('load', function () {
      var response = xhr.response,
          status = xhr.status;

      var res = void 0;
      try {
        res = JSON.parse(response);
      } catch (e) {
        res = response;
      }
      if (status >= 200 && status < 400) {
        resolve({ response: res, status: status });
      } else {
        reject({ response: res, status: status });
      }
    });

    if (data) {
      xhr.send((0, _stringify2.default)(data));
    } else {
      xhr.send();
    }
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(action, 'action', '/Users/realseanp1/Projects/archadon/src/client/utils/index.js');

  __REACT_HOT_LOADER__.register(keyMirror, 'keyMirror', '/Users/realseanp1/Projects/archadon/src/client/utils/index.js');

  __REACT_HOT_LOADER__.register(request, 'request', '/Users/realseanp1/Projects/archadon/src/client/utils/index.js');
}();

;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/defineProperty");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var IMAGE_ORIGIN = exports.IMAGE_ORIGIN = process.env.NODE_ENV !== 'production' ? 'https://assets.dev.archadon.com' : 'https://assets.dev.archadon.com';
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(IMAGE_ORIGIN, 'IMAGE_ORIGIN', '/Users/realseanp1/Projects/archadon/src/client/constants.js');
}();

;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/entries");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _ProductTile = __webpack_require__(45);

var _ProductTile2 = _interopRequireDefault(_ProductTile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProductList(_ref) {
  var _ref$products = _ref.products,
      products = _ref$products === undefined ? [] : _ref$products,
      className = _ref.className,
      hideBtn = _ref.hideBtn,
      _ref$lastEvaluatedKey = _ref.lastEvaluatedKey;
  _ref$lastEvaluatedKey = _ref$lastEvaluatedKey === undefined ? {} : _ref$lastEvaluatedKey;
  var ID = _ref$lastEvaluatedKey.ID;

  return _react2.default.createElement(
    'div',
    { className: 'flex-grow-1 flex-parent flex-col margin--bottom-10' },
    _react2.default.createElement(
      'div',
      { className: 'margin--top-8 margin--bottom-6 flex-grow-1 flex-parent flex-wrap ' + (className ? '' + className : 'flex-align-center flex-justify-center') },
      products.map(function (product) {
        return _react2.default.createElement(_ProductTile2.default, { key: product.ID, product: product });
      })
    ),
    !hideBtn && ID && _react2.default.createElement(
      'div',
      { className: 'flex-parent flex-align-center flex-justify-center' },
      _react2.default.createElement(
        'button',
        { className: 'btn btn--first' },
        'Load More'
      )
    )
  );
}


var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    products: ownProps.products || state.products.Items,
    lastEvaluatedKey: state.products.LastEvaluatedKey
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(ProductList);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProductList, 'ProductList', '/Users/realseanp1/Projects/archadon/src/client/components/ProductList.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/ProductList.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/ProductList.jsx');
}();

;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ProductList = __webpack_require__(17);

var _ProductList2 = _interopRequireDefault(_ProductList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Selection() {
  return _react2.default.createElement(
    'div',
    { className: 'flex-grow-1 global-padding margin--y-10' },
    _react2.default.createElement(
      'h1',
      { className: 'align--center' },
      'Our Selection'
    ),
    _react2.default.createElement(_ProductList2.default, null)
  );
}

var _default = Selection;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Selection, 'Selection', '/Users/realseanp1/Projects/archadon/src/client/components/Shop.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Shop.jsx');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Svg(_ref) {
  var variant = _ref.variant,
      color = _ref.color;

  return _react2.default.createElement(
    "svg",
    { width: "100%", height: "100%", style: { color: color || '#FFFFFF' } },
    _react2.default.createElement("use", { xlinkHref: "#" + variant })
  );
}

Svg.propTypes = {
  variant: _react2.default.PropTypes.string.isRequired,
  color: _react2.default.PropTypes.string
};

var _default = Svg;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Svg, "Svg", "/Users/realseanp1/Projects/archadon/src/client/components/ui/Svg.jsx");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/realseanp1/Projects/archadon/src/client/components/ui/Svg.jsx");
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/keys");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 24 */
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

var _Navigation = __webpack_require__(42);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Utils = __webpack_require__(4);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

var _Home = __webpack_require__(39);

var _Home2 = _interopRequireDefault(_Home);

var _Logout = __webpack_require__(41);

var _Logout2 = _interopRequireDefault(_Logout);

var _Account = __webpack_require__(34);

var _Account2 = _interopRequireDefault(_Account);

var _SignInForm = __webpack_require__(47);

var _SignInForm2 = _interopRequireDefault(_SignInForm);

var _Checkout = __webpack_require__(37);

var _Checkout2 = _interopRequireDefault(_Checkout);

var _Cart = __webpack_require__(36);

var _Cart2 = _interopRequireDefault(_Cart);

var _Shop = __webpack_require__(18);

var _Shop2 = _interopRequireDefault(_Shop);

var _OrderConfirmation = __webpack_require__(43);

var _OrderConfirmation2 = _interopRequireDefault(_OrderConfirmation);

var _reactRouter = __webpack_require__(16);

__webpack_require__(58);

var _spritesheet = __webpack_require__(63);

var _spritesheet2 = _interopRequireDefault(_spritesheet);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var APP_LOAD = _Actions2.default.APP_LOAD;


function Modal(_ref) {
  var children = _ref.children,
      open = _ref.open;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('modal', { open: open }) },
    _react2.default.createElement(
      'div',
      { className: 'modal-content' },
      _react2.default.createElement(
        'div',
        { className: 'modal-body global-padding' },
        children
      )
    )
  );
}

var ScrollToTop = function (_Component) {
  (0, _inherits3.default)(ScrollToTop, _Component);

  function ScrollToTop() {
    (0, _classCallCheck3.default)(this, ScrollToTop);
    return (0, _possibleConstructorReturn3.default)(this, (ScrollToTop.__proto__ || (0, _getPrototypeOf2.default)(ScrollToTop)).apply(this, arguments));
  }

  (0, _createClass3.default)(ScrollToTop, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return ScrollToTop;
}(_react.Component);

var ScrollToTopWithRouter = (0, _reactRouter.withRouter)(ScrollToTop);

var App = function (_Component2) {
  (0, _inherits3.default)(App, _Component2);

  function App() {
    var _ref2;

    var _temp, _this2, _ret;

    (0, _classCallCheck3.default)(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = App.__proto__ || (0, _getPrototypeOf2.default)(App)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
      scrolled: false
    }, _this2.handleScroll = function () {
      if (_this2.unmount) return;
      if (window.scrollY + 50 > window.innerHeight && !_this2.state.scrolled) {
        _this2.setState({ scrolled: true });
      } else if (window.scrollY + 50 < window.innerHeight && _this2.state.scrolled) {
        _this2.setState({ scrolled: false });
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.loaded();
      this.handleScroll();
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'componentWillUmount',
    value: function componentWillUmount() {
      this.unmount = true;
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        ScrollToTopWithRouter,
        null,
        _react2.default.createElement(
          'div',
          { className: 'layout' },
          _react2.default.createElement(_Navigation2.default, { scrolled: this.state.scrolled }),
          _react2.default.createElement(
            'div',
            { style: { height: '100%' }, className: 'flex-grow-1 flex-parent' },
            this.props.loading.full ? _react2.default.createElement(
              'div',
              { className: 'flex-parent flex-grow-1 flex-align-center flex-justify-center' },
              _react2.default.createElement(
                'h1',
                null,
                'Loading'
              )
            ) : [_react2.default.createElement(_reactRouterDom.Route, { key: 'shop', path: '/shop', component: _Shop2.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 'home', path: '/', exact: true, component: _Home2.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 'login', path: '/(login|signup)', render: function render(_ref3) {
                var location = _ref3.location;
                return _react2.default.createElement(_SignInForm2.default, { path: location.pathname });
              } }), _react2.default.createElement(_reactRouterDom.Route, { key: 'account', path: '/account', component: _Account2.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 'logout', path: '/logout', component: _Logout2.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 'cart', path: '/cart', component: _Cart2.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 'checkout', path: '/checkout', component: _Checkout2.default }), _react2.default.createElement(_reactRouterDom.Route, { key: 'confirm', path: '/order-confirmation', component: _OrderConfirmation2.default })],
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: _spritesheet2.default } })
          )
        )
      );
    }
  }]);
  return App;
}(_react.Component);

App.propTypes = {
  ui: _react2.default.PropTypes.object,
  loaded: _react2.default.PropTypes.func,
  loading: _react2.default.PropTypes.bool
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loaded: function loaded() {
      dispatch((0, _Utils.action)(APP_LOAD));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    ui: state.ui,
    loading: state.loading
  };
};

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App));

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Modal, 'Modal', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');

  __REACT_HOT_LOADER__.register(APP_LOAD, 'APP_LOAD', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');

  __REACT_HOT_LOADER__.register(ScrollToTop, 'ScrollToTop', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');

  __REACT_HOT_LOADER__.register(ScrollToTopWithRouter, 'ScrollToTopWithRouter', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/App.jsx');
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeStore;

var _redux = __webpack_require__(23);

var _reducers = __webpack_require__(50);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var composeEnhancers = typeof window !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose : _redux.compose;

function makeStore(initialState) {
  try {
    for (var _len = arguments.length, middleware = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      middleware[_key - 1] = arguments[_key];
    }

    var store = (0, _redux.createStore)(_reducers2.default, initialState, composeEnhancers(_redux.applyMiddleware.apply(undefined, middleware)));
    if (false) {
      module.hot.accept('./reducers', function () {
        var nextRootReducer = require('./reducers').default; // eslint-disable-line
        store.replaceReducer(nextRootReducer);
      });
    }
    return store;
  } catch (e) {
    return e;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(makeStore, 'makeStore', '/Users/realseanp1/Projects/archadon/src/client/store.js');

  __REACT_HOT_LOADER__.register(composeEnhancers, 'composeEnhancers', '/Users/realseanp1/Projects/archadon/src/client/store.js');
}();

;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__(20);

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = html;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function html(routerWithContext, props) {
    var filename = '/client.js';
    var src = process.env.NODE_ENV !== 'production' ? 'http://localhost:' + process.env.DEV_SERVER_PORT + filename : filename;
    return '\n        <html>\n            <head>\n                <meta charSet="utf-8" />\n                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />\n                <title></title>\n                <meta name="description" content="" />\n                <meta name="viewport" content="width=device-width, initial-scale=1" />\n                ' + (process.env.NODE_ENV === 'production' ? '<link rel="stylesheet" href="/styles.css" />' : '') + '\n            </head>\n            <body>\n                <div id="app">' + routerWithContext + '</div>\n                <script>\n                    window.__INITIAL_STATE__ = ' + (0, _stringify2.default)(props) + ';\n                </script>\n                <script src="https://use.typekit.net/vgi7zyh.js"></script>\n                <script>try{Typekit.load({ async: true });}catch(e){}</script>\n                <script type="text/javascript" src="https://js.stripe.com/v2/"></script>\n                <script>\n                    Stripe.setPublishableKey(\'' + process.env.STRIPE_PUBLIC_KEY + '\');\n                </script>\n                <script src="' + src + '" defer></script>\n            </body>\n        </html>\n    ';
}
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(html, 'html', '/Users/realseanp1/Projects/archadon/src/server/html.js');
}();

;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 34 */
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

var _reactRedux = __webpack_require__(2);

var _Utils = __webpack_require__(4);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _reactRouterDom = __webpack_require__(3);

var _AccountLayout = __webpack_require__(35);

var _AccountLayout2 = _interopRequireDefault(_AccountLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_REDIRECT_PATH = _Actions2.default.SET_REDIRECT_PATH;

var Account = function (_React$Component) {
  (0, _inherits3.default)(Account, _React$Component);

  function Account() {
    (0, _classCallCheck3.default)(this, Account);
    return (0, _possibleConstructorReturn3.default)(this, (Account.__proto__ || (0, _getPrototypeOf2.default)(Account)).apply(this, arguments));
  }

  (0, _createClass3.default)(Account, [{
    key: 'redirect',
    value: function redirect() {
      this.props.setRedirectPath(this.props.location.pathname);
      return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
    }
  }, {
    key: 'render',
    value: function render() {
      var user = this.props.user;

      return _react2.default.createElement(
        'div',
        { className: 'flex-parent flex-grow-1' },
        !user && this.redirect(),
        user && _react2.default.createElement(_AccountLayout2.default, null)
      );
    }
  }]);
  return Account;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setRedirectPath: function setRedirectPath(path) {
      dispatch((0, _Utils.action)(SET_REDIRECT_PATH, path));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user.ID && state.user.authToken
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Account);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SET_REDIRECT_PATH, 'SET_REDIRECT_PATH', '/Users/realseanp1/Projects/archadon/src/client/components/Account.jsx');

  __REACT_HOT_LOADER__.register(Account, 'Account', '/Users/realseanp1/Projects/archadon/src/client/components/Account.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Account.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Account.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Account.jsx');
}();

;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _Orders = __webpack_require__(44);

var _Orders2 = _interopRequireDefault(_Orders);

var _Favorites = __webpack_require__(38);

var _Favorites2 = _interopRequireDefault(_Favorites);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AccountLayout() {
  return _react2.default.createElement(
    'div',
    { className: 'flex-grow-1 flex-parent global-padding padding--top-10' },
    _react2.default.createElement(
      'div',
      { className: 'auth-nav-bar' },
      _react2.default.createElement(
        'h2',
        null,
        'My Account'
      ),
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { className: 'auth-nav-bar-link', activeClassName: 'active', to: '/account/orders' },
        'Orders'
      ),
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { className: 'auth-nav-bar-link', activeClassName: 'active', to: '/account/favorites' },
        'Favorites'
      ),
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        { className: 'auth-nav-bar-link', activeClassName: 'active', to: '/account/settings' },
        'Settings'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'flex-grow-1 flex-parent account-content' },
      _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/account/(orders)?', component: _Orders2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/account/favorites', component: _Favorites2.default })
      )
    )
  );
}

var _default = AccountLayout;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AccountLayout, 'AccountLayout', '/Users/realseanp1/Projects/archadon/src/client/components/AccountLayout.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/AccountLayout.jsx');
}();

;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _Constants = __webpack_require__(13);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _reactRouterDom = __webpack_require__(3);

var _Utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var REMOVE_FROM_CART = _Actions2.default.REMOVE_FROM_CART;


var CartItem = function CartItem(_ref) {
  var item = _ref.item,
      removeFromCart = _ref.removeFromCart;

  return _react2.default.createElement(
    'div',
    { className: 'cart-item' },
    _react2.default.createElement(
      'div',
      { className: 'img-wrap' },
      _react2.default.createElement('img', { alt: item.Name, src: _Constants.IMAGE_ORIGIN + '/' + item.Images[0].src }),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          item.Name
        ),
        _react2.default.createElement(
          'div',
          null,
          item.Width,
          ' x ',
          item.Height
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'details' },
      _react2.default.createElement(
        'span',
        { className: 'strong' },
        '$',
        item.Price
      ),
      _react2.default.createElement(
        'div',
        { className: 'margin--top-3' },
        _react2.default.createElement(
          'span',
          { onClick: removeFromCart(item.ID), style: { cursor: 'pointer' }, className: 'font-color--first' },
          'Remove'
        )
      )
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
    { className: 'global-padding padding--top-10 flex-parent flex-grow-1 flex-col' },
    items.length === 0 && _react2.default.createElement(
      'div',
      { className: 'flex-parent flex-col flex-grow-1 flex-align-center flex-justify-center' },
      _react2.default.createElement(
        'h2',
        null,
        'Your cart is empty'
      ),
      _react2.default.createElement(
        'div',
        { className: 'btn btn--first margin--top-3' },
        'Shop Now'
      )
    ),
    items.length > 0 && _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        { className: 'margin--bottom-7' },
        'Shopping Cart'
      ),
      _react2.default.createElement(
        'div',
        { className: 'flex-parent flex-grow-1 cart-wrap' },
        _react2.default.createElement(
          'div',
          { className: 'cart-wrap-aside' },
          _react2.default.createElement(
            'h3',
            { className: 'strong' },
            'Total: $',
            totalPrice.toFixed(2)
          ),
          _react2.default.createElement(
            'p',
            { className: 'margin--bottom-3' },
            'Shipping: FREE'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/checkout', className: 'btn btn--second alt flex-grow-0' },
            'Check Out Now'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex-parent flex-col flex-grow-1' },
          items.map(function (item) {
            return _react2.default.createElement(CartItem, { key: item.ID, item: item });
          })
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

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(21);

var _keys2 = _interopRequireDefault(_keys);

var _slicedToArray2 = __webpack_require__(15);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(14);

var _entries2 = _interopRequireDefault(_entries);

var _defineProperty2 = __webpack_require__(12);

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

var _Utils = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PURCHASE = _Actions2.default.PURCHASE;


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

        if (currentTarget.dataset.regex) {
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

    _this.addError = function (el) {
      var name = el.props.name;

      if (_this.state.errors[name]) {
        return _react2.default.cloneElement(el, { className: 'input-error' });
      }
      return el;
    };

    _this.onDataChange = _this.onInputChange('data');
    _this.onCardChange = _this.onInputChange('cardDetails');

    if (props.user && props.user.Email) {
      _this.state.data.email = props.user.Email;
    }
    return _this;
  }

  (0, _createClass3.default)(CheckOut, [{
    key: 'render',
    value: function render() {
      var error = ((0, _keys2.default)(this.state.errors).length > 0 || this.props.error) && _react2.default.createElement(
        'p',
        { className: 'font-color--danger margin--bottom-3' },
        this.props.error || 'Please fill in fields marked with red.'
      );

      return _react2.default.createElement(
        'div',
        { className: 'flex-parent global-padding padding--top-12 flex-col flex-align-center flex-justify-start full-width' },
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
          null,
          _react2.default.createElement(
            'h2',
            { className: 'margin--bottom-3' },
            'Check Out'
          ),
          _react2.default.createElement(
            'h3',
            { className: 'margin--bottom-3 strong' },
            'Total: $',
            this.props.totalPrice.toFixed(2)
          ),
          _react2.default.createElement(
            'form',
            { className: 'form', onSubmit: this.submit },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              error,
              _react2.default.createElement(
                'div',
                { className: 'form-component margin--top-3 margin--bottom-3' },
                _react2.default.createElement(
                  'h3',
                  null,
                  'Personal'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-component' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Full Name'
                ),
                this.addError(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.name, name: 'name', type: 'text' }))
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-component margin--top-3' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Email'
                ),
                this.addError(_react2.default.createElement('input', { 'data-regex': 'email', value: this.state.data.email, onChange: this.onDataChange, name: 'email', type: 'email' }))
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-component margin--top-6 margin--bottom-3' },
                _react2.default.createElement(
                  'h3',
                  null,
                  'Shipping'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-component' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Address'
                ),
                this.addError(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.address1, name: 'address1', type: 'text' }))
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-component margin--top-3' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Address Line 2'
                ),
                this.addError(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.address2, name: 'address2', type: 'text' }))
              ),
              _react2.default.createElement(
                'div',
                { className: 'flex-parent mobile-col flex-justify-between' },
                _react2.default.createElement(
                  'div',
                  { className: 'form-component margin--top-3' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'City'
                  ),
                  this.addError(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.city, name: 'city', type: 'text' }))
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-component middle-input margin--top-3' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'State'
                  ),
                  this.addError(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.state, name: 'state', type: 'text' }))
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-component margin--top-3' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'Zip'
                  ),
                  this.addError(_react2.default.createElement('input', { onChange: this.onDataChange, value: this.state.data.zip, name: 'zip', type: 'text' }))
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-component margin--top-6 margin--bottom-3' },
                _react2.default.createElement(
                  'h3',
                  null,
                  'Payment'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-component' },
                _react2.default.createElement(
                  'label',
                  null,
                  'Credit Card Number'
                ),
                this.addError(_react2.default.createElement('input', { onChange: this.onCardChange, value: this.state.cardDetails.card, name: 'card', type: 'text' }))
              ),
              _react2.default.createElement(
                'div',
                { className: 'flex-parent flex-row flex-justify-between' },
                _react2.default.createElement(
                  'div',
                  { className: 'form-component margin--top-3 flex-grow-1 flex-parent flex-col flex-justify-end' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'Expiration Month'
                  ),
                  this.addError(_react2.default.createElement('input', { placeholder: 'MM', 'data-regex': 'expMonth', value: this.state.cardDetails.expMonth, onChange: this.onCardChange, name: 'expMonth', type: 'text' }))
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-component margin--top-3 margin--x-3 middle-input flex-grow-1 flex-parent flex-col flex-justify-end' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'Expiration Year'
                  ),
                  this.addError(_react2.default.createElement('input', { placeholder: 'YYYY', 'data-regex': 'expYear', value: this.state.cardDetails.expYear, onChange: this.onCardChange, name: 'expYear', type: 'text' }))
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'form-component margin--top-3 flex-grow-1 flex-parent flex-col flex-justify-end' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'CVC'
                  ),
                  this.addError(_react2.default.createElement('input', { 'data-regex': 'expYear', placeholder: '000(0)', onChange: this.onCardChange, value: this.state.cardDetails.cvc, name: 'cvc', type: 'text' }))
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-component margin--y-3' },
                error,
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn--second alt' },
                  'Purchase'
                )
              )
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

  __REACT_HOT_LOADER__.register(PURCHASE, 'PURCHASE', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');

  __REACT_HOT_LOADER__.register(regex, 'regex', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');

  __REACT_HOT_LOADER__.register(CheckOut, 'CheckOut', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Checkout.jsx');
}();

;

/***/ }),
/* 38 */
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

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Utils = __webpack_require__(4);

var _ProductList = __webpack_require__(17);

var _ProductList2 = _interopRequireDefault(_ProductList);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOAD_FAVORITES = _Actions2.default.LOAD_FAVORITES;

var Favorites = function (_Component) {
  (0, _inherits3.default)(Favorites, _Component);

  function Favorites() {
    (0, _classCallCheck3.default)(this, Favorites);
    return (0, _possibleConstructorReturn3.default)(this, (Favorites.__proto__ || (0, _getPrototypeOf2.default)(Favorites)).apply(this, arguments));
  }

  (0, _createClass3.default)(Favorites, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.loadFavorites();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'flex-parent flex-grow-1' },
        this.props.loading.page === 'favorites' ? _react2.default.createElement(
          'div',
          { className: 'flex-parent flex-grow-1 flex-align-center flex-justify-center' },
          _react2.default.createElement(
            'h2',
            null,
            'Loading Favorites'
          )
        ) : _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h2',
            { className: 'title' },
            'Favorites'
          ),
          _react2.default.createElement(
            'div',
            { className: 'favorites' },
            _react2.default.createElement(_ProductList2.default, { className: 'flex-justify-start', hideBtn: true, products: this.props.favorites })
          )
        )
      );
    }
  }]);
  return Favorites;
}(_react.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadFavorites: function loadFavorites() {
      dispatch((0, _Utils.action)(LOAD_FAVORITES));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    favorites: state.user.FavoritesDetail || [],
    loading: state.loading
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Favorites);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LOAD_FAVORITES, 'LOAD_FAVORITES', '/Users/realseanp1/Projects/archadon/src/client/components/Favorites.jsx');

  __REACT_HOT_LOADER__.register(Favorites, 'Favorites', '/Users/realseanp1/Projects/archadon/src/client/components/Favorites.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Favorites.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Favorites.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Favorites.jsx');
}();

;

/***/ }),
/* 39 */
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

var _reactAddonsTransitionGroup = __webpack_require__(66);

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _rug = __webpack_require__(60);

var _rug2 = _interopRequireDefault(_rug);

var _rug3 = __webpack_require__(61);

var _rug4 = _interopRequireDefault(_rug3);

var _rug5 = __webpack_require__(62);

var _rug6 = _interopRequireDefault(_rug5);

var _Shop = __webpack_require__(18);

var _Shop2 = _interopRequireDefault(_Shop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Canvas = function (_React$Component) {
  (0, _inherits3.default)(Canvas, _React$Component);

  function Canvas() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Canvas);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Canvas.__proto__ || (0, _getPrototypeOf2.default)(Canvas)).call.apply(_ref, [this].concat(args))), _this), _this.drawImageToCanvas = function (img) {
      var ctx = _this.canvas.getContext('2d');
      ctx.save();
      ctx.globalAlpha = 0.15;
      ctx.drawImage(img, -_this.canvas.width / 2, -_this.canvas.height / 2, img.width / 2, img.height / 2);
      ctx.restore();
    }, _this.drawColorOverlay = function () {
      var canvas = document.createElement('canvas');
      canvas.width = _this.canvas.width;
      canvas.height = _this.canvas.height;
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = _this.props.color;
      ctx.fillRect(0, 0, _this.canvas.width, _this.canvas.height);

      var drawingCtx = _this.canvas.getContext('2d');
      drawingCtx.save();
      drawingCtx.globalCompositeOperation = 'color';
      drawingCtx.drawImage(canvas, 0, 0);
      drawingCtx.restore();
    }, _this.loadImage = function () {
      var img = document.createElement('img');

      img.addEventListener('load', function () {
        if (!_this.canvas) return;
        _this.drawImageToCanvas(img);
        _this.drawColorOverlay();
      });

      img.src = _this.props.img;
    }, _this.getRef = function (c) {
      _this.canvas = c;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Canvas, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadImage();

      // load image to canvas
      // add color overlay
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('canvas', { ref: this.getRef });
    }
  }]);
  return Canvas;
}(_react2.default.Component);

Canvas.propTypes = {
  img: _react.PropTypes.string.isRequired,
  color: _react.PropTypes.string.isRequired
};


var FEATURED_RUGS = [{
  name: 'Theo',
  id: '1',
  size: '6x12',
  country: 'Persia',
  src: _rug2.default
}, {
  name: 'Jenni',
  id: '2',
  size: '6x12',
  country: 'Persia',
  src: _rug4.default
}, {
  name: 'Jenni',
  id: '2',
  size: '6x12',
  country: 'Persia',
  src: _rug6.default
}];

var COLORS = ['#42D044', '#2D76CE', '#5C3D6D'];

var Slide = function (_React$Component2) {
  (0, _inherits3.default)(Slide, _React$Component2);

  function Slide() {
    var _ref2;

    var _temp2, _this2, _ret2;

    (0, _classCallCheck3.default)(this, Slide);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Slide.__proto__ || (0, _getPrototypeOf2.default)(Slide)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {}, _this2.animationEndFunc = function (cb, name) {
      return function (e) {
        if (e.animationName === name) {
          cb();
        }
      };
    }, _temp2), (0, _possibleConstructorReturn3.default)(_this2, _ret2);
  }

  (0, _createClass3.default)(Slide, [{
    key: 'componentWillAppear',
    value: function componentWillAppear(cb) {
      this.setState({
        entering: true,
        appear: true
      });
      cb();
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(cb) {
      this.setState({
        entering: true,
        appear: false
      });
      cb();
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(cb) {
      this.setState({
        imgAnimationEndFunc: this.animationEndFunc(cb, 'slideLeave'),
        leaving: true,
        entering: false,
        appear: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          img = _props.img,
          color = _props.color,
          Cta = _props.Cta;

      return _react2.default.createElement(
        'div',
        {
          onAnimationEnd: this.state.imgAnimationEndFunc,
          className: (0, _classnames2.default)('animation-wrap', {
            leaving: this.state.leaving,
            entering: this.state.entering && !this.state.appear
          })
        },
        _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)('flex-parent flex-grow-1 slide-wrap', {})
          },
          _react2.default.createElement(
            'div',
            { className: 'flex-parent flex-grow-1 home-slide-flex' },
            _react2.default.createElement(
              'div',
              { className: 'home-slide-box' },
              _react2.default.createElement(Cta, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'home-slide-box home-slide-img-box' },
              _react2.default.createElement('img', {
                className: (0, _classnames2.default)('home-slide-img', {
                  leaving: this.state.leaving,
                  entering: this.state.entering
                }),
                src: img
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'home-slide-box' },
              _react2.default.createElement(
                'h2',
                { className: 'font-color--white align--center' },
                'Rug Name'
              ),
              _react2.default.createElement(
                'h3',
                { className: 'font-color--white align--center' },
                '8x12'
              ),
              _react2.default.createElement(
                'button',
                { className: 'btn btn--white margin--top-3' },
                'Add To Cart'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'home-slide-bg' },
            _react2.default.createElement(Canvas, { img: img, color: color })
          )
        )
      );
    }
  }]);
  return Slide;
}(_react2.default.Component);

var interval = function interval(callback, delay, arr) {
  var tick = function tick(now) {
    if (now - start >= delay) {
      start = now;
      callback();
    }
    arr.push(requestAnimationFrame(tick));
  };
  var start = performance.now();
  arr.push(requestAnimationFrame(tick));
};

var DURATION = 3500;

var Home = function (_React$Component3) {
  (0, _inherits3.default)(Home, _React$Component3);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this));

    _this3.state = {
      currentIndex: 0
    };

    _this3.scroll = function () {
      if (_this3.velocityScroll) {
        _this3.velocityScroll();
      }
    };

    _this3.Cta = function () {
      return _react2.default.createElement(
        'div',
        { className: 'flex-parent flex-col flex-align-center' },
        _react2.default.createElement(
          'h1',
          { className: 'font-color--white align--center' },
          'Handmade, ',
          _react2.default.createElement(
            'span',
            { style: { display: 'block' } },
            'artisan rugs'
          )
        ),
        _react2.default.createElement(
          'button',
          { onClick: _this3.scroll, className: 'btn btn--white margin--top-5' },
          'Shop Selection'
        )
      );
    };

    _this3.updateSlide = function () {
      var currentIndex = void 0;
      if (_this3.state.currentIndex < _this3.slides.length - 1) {
        currentIndex = _this3.state.currentIndex + 1;
      } else {
        currentIndex = 0;
      }
      _this3.setState({ currentIndex: currentIndex });
    };

    _this3.int = [];
    _this3.slides = FEATURED_RUGS.map(function (obj, i) {
      return _react2.default.createElement(Slide, { key: i, img: obj.src, Cta: _this3.Cta, color: COLORS[i] });
    });
    return _this3;
  }

  (0, _createClass3.default)(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      Promise.resolve().then(__webpack_require__.bind(null, 67)).then(function (Velocity) {
        _this4.velocityScroll = function () {
          Velocity(_this4.selection, 'scroll', {
            duration: 1000,
            easing: 'easeOutExpo'
          });
        };
      });
      interval(this.updateSlide, DURATION, this.int);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.int.forEach(function (int) {
        return window.cancelAnimationFrame(int);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var Cta = this.Cta;

      return _react2.default.createElement(
        'div',
        { className: 'flex-parent flex-grow-1 flex-col' },
        _react2.default.createElement(
          _reactAddonsTransitionGroup2.default,
          {
            component: 'div',
            style: {
              transform: 'translate3d(0,0,0)',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '100%'
            },
            className: 'flex-parent flex-grow-1 home-transition-group'
          },
          this.slides[this.state.currentIndex]
        ),
        _react2.default.createElement(
          'div',
          { ref: function ref(c) {
              _this5.selection = c;
            } },
          _react2.default.createElement(_Shop2.default, null)
        )
      );
    }
  }]);
  return Home;
}(_react2.default.Component);

var _default = Home;
exports.default = _default;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Canvas, 'Canvas', '/Users/realseanp1/Projects/archadon/src/client/components/Home.jsx');

  __REACT_HOT_LOADER__.register(FEATURED_RUGS, 'FEATURED_RUGS', '/Users/realseanp1/Projects/archadon/src/client/components/Home.jsx');

  __REACT_HOT_LOADER__.register(COLORS, 'COLORS', '/Users/realseanp1/Projects/archadon/src/client/components/Home.jsx');

  __REACT_HOT_LOADER__.register(Slide, 'Slide', '/Users/realseanp1/Projects/archadon/src/client/components/Home.jsx');

  __REACT_HOT_LOADER__.register(interval, 'interval', '/Users/realseanp1/Projects/archadon/src/client/components/Home.jsx');

  __REACT_HOT_LOADER__.register(DURATION, 'DURATION', '/Users/realseanp1/Projects/archadon/src/client/components/Home.jsx');

  __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/realseanp1/Projects/archadon/src/client/components/Home.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Home.jsx');
}();

;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(12);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _Utils = __webpack_require__(4);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOG_IN = _Actions2.default.LOG_IN;

var LogInForm = function (_React$Component) {
  (0, _inherits3.default)(LogInForm, _React$Component);

  function LogInForm() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LogInForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LogInForm.__proto__ || (0, _getPrototypeOf2.default)(LogInForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      email: '',
      password: ''
    }, _this.onChange = function (_ref2) {
      var _ref2$currentTarget = _ref2.currentTarget,
          value = _ref2$currentTarget.value,
          key = _ref2$currentTarget.name;

      _this.setState((0, _defineProperty3.default)({}, key, value));
    }, _this.submit = function (e) {
      e.preventDefault();
      _this.props.login(_this.state.email, _this.state.password);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(LogInForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'flex-parent flex-col flex-align-center flex-justify-start full-width' },
        _react2.default.createElement(
          'h2',
          { className: 'margin--bottom-7' },
          'Enter Your Credentials'
        ),
        _react2.default.createElement(
          'form',
          { className: 'form', onSubmit: this.submit },
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('form-group', { 'form-error': this.props.error }) },
            _react2.default.createElement(
              'div',
              { className: 'form-component' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'email' },
                'Email'
              ),
              _react2.default.createElement('input', { onChange: this.onChange, name: 'email', value: this.state.email, type: 'text' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-component margin--top-3' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'password' },
                'Password'
              ),
              _react2.default.createElement('input', { onChange: this.onChange, name: 'password', value: this.state.password, type: 'password' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-content' },
            this.props.error && _react2.default.createElement(
              'p',
              { className: 'font-color--danger' },
              this.props.error
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn btn--first' },
              'Log In'
            ),
            _react2.default.createElement(
              'div',
              { className: 'margin--top-3' },
              _react2.default.createElement(
                'span',
                null,
                'Don\'t have an account?',
                ' ',
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/signup' },
                  'Register now'
                ),
                '.'
              )
            )
          )
        )
      );
    }
  }]);
  return LogInForm;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    login: function login(email, password) {
      dispatch((0, _Utils.action)(LOG_IN, { email: email, password: password }));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    error: state.errors.login
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LogInForm);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LOG_IN, 'LOG_IN', '/Users/realseanp1/Projects/archadon/src/client/components/Login.jsx');

  __REACT_HOT_LOADER__.register(LogInForm, 'LogInForm', '/Users/realseanp1/Projects/archadon/src/client/components/Login.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Login.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Login.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Login.jsx');
}();

;

/***/ }),
/* 41 */
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

var _reactRouterDom = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Utils = __webpack_require__(4);

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

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _Svg = __webpack_require__(19);

var _Svg2 = _interopRequireDefault(_Svg);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Navigation(_ref) {
  var location = _ref.location,
      user = _ref.user,
      qty = _ref.qty,
      scrolled = _ref.scrolled;

  var isRoot = location.pathname === '/';
  return _react2.default.createElement(
    'nav',
    {
      style: { position: 'fixed' },
      className: (0, _classnames2.default)('global-nav global-padding-x flex-parent flex-justify-between flex-align-center', {
        root: isRoot && !scrolled
      })
    },
    _react2.default.createElement(
      'div',
      { className: 'logo' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/' },
        _react2.default.createElement(_Svg2.default, { variant: 'archadon-logo', color: '#FFF' })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'flex-parent flex-align-center' },
      _react2.default.createElement(
        'div',
        { style: { marginRight: '35px' } },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/shop' },
          'Shop'
        )
      ),
      user.authToken && user.ID ? [_react2.default.createElement(
        'div',
        { key: 'a', style: { marginRight: '35px' } },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/account' },
          'My Account'
        )
      ), _react2.default.createElement(
        'div',
        { key: 'b', style: { marginRight: '35px' } },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/logout' },
          'Log Out'
        )
      )] : [_react2.default.createElement(
        'div',
        { key: 'c', style: { marginRight: '35px' } },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/login' },
          'Log In'
        )
      ), _react2.default.createElement(
        'div',
        { key: 'd', style: { marginRight: '35px' } },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/signup' },
          'Sign Up'
        )
      )],
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/cart' },
        _react2.default.createElement(
          'div',
          { className: 'flex-parent flex-align-center' },
          _react2.default.createElement(
            'div',
            { className: 'margin--right-1', style: { width: '24px', height: '16px' } },
            _react2.default.createElement(_Svg2.default, { variant: 'icon-cart', color: '#FFF' })
          ),
          _react2.default.createElement(
            'div',
            null,
            qty
          )
        )
      )
    )
  );
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    qty: state.cart.totalQty
  };
};

var _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Navigation));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Navigation, 'Navigation', '/Users/realseanp1/Projects/archadon/src/client/components/Navigation.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Navigation.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Navigation.jsx');
}();

;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(10);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OrderConfirmation(_ref) {
  var orderID = _ref.orderID,
      email = _ref.email;

  return _react2.default.createElement(
    'div',
    { className: 'flex-parent flex-grow-1 flex-align-center flex-justify-center' },
    _react2.default.createElement(
      'div',
      null,
      !orderID && !email && _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' }),
      _react2.default.createElement(
        'h2',
        null,
        'Thanks For Your Order'
      ),
      _react2.default.createElement(
        'h3',
        { className: 'margin--bottom-3' },
        'You\'re going to like it.'
      ),
      _react2.default.createElement(
        'p',
        { className: 'margin--bottom-1' },
        'We\'ve sent a confirmation email to ',
        _react2.default.createElement(
          'span',
          { className: 'strong' },
          email
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'You\'re reference number is ',
        _react2.default.createElement(
          'span',
          { className: 'strong' },
          orderID
        )
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/', className: 'btn btn--first margin--top-3' },
        'Done'
      )
    )
  );
}

var mapStateToProps = function mapStateToProps(state) {
  return (0, _extends3.default)({}, state.orderConfirmation);
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(OrderConfirmation);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(OrderConfirmation, 'OrderConfirmation', '/Users/realseanp1/Projects/archadon/src/client/components/OrderConfirmation.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/OrderConfirmation.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/OrderConfirmation.jsx');
}();

;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

var _Constants = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function OrderItem(_ref) {
  var item = _ref.item;

  return _react2.default.createElement(
    'div',
    { className: 'order-item' },
    _react2.default.createElement('img', { src: _Constants.IMAGE_ORIGIN + '/' + item.Images[0].src }),
    _react2.default.createElement(
      'div',
      { className: 'margin--left-2' },
      _react2.default.createElement(
        'p',
        null,
        item.Name,
        ' ',
        item.Price.toFixed(2)
      ),
      _react2.default.createElement(
        'small',
        null,
        'SKU: ',
        item.ID
      )
    )
  );
}

function OrderBox(_ref2) {
  var order = _ref2.order;

  return _react2.default.createElement(
    'div',
    { className: 'item-box margin--y-3' },
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'small',
        null,
        'Order ID: ',
        order.ID
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'small',
        null,
        'Status: ',
        _react2.default.createElement(
          'strong',
          { className: order.Status.toLowerCase() },
          order.Status
        )
      )
    ),
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'small',
        null,
        order.Brand,
        ' ****',
        order.Last4
      )
    ),
    _react2.default.createElement(
      'p',
      { className: 'strong' },
      'Total: $',
      order.Price.toFixed(2)
    ),
    order.Items.map(function (item, i) {
      return _react2.default.createElement(OrderItem, { key: i, item: item });
    })
  );
}

function Orders(_ref3) {
  var orders = _ref3.orders;

  return _react2.default.createElement(
    'div',
    { className: 'flex-grow-1 flex-parent flex-col' },
    _react2.default.createElement(
      'h2',
      { className: 'margin--bottom-6' },
      'Orders'
    ),
    orders.length === 0 && _react2.default.createElement(
      'div',
      { className: 'flex-grow-1' },
      _react2.default.createElement(
        'p',
        { className: 'margin--bottom-3' },
        'You don\'t have any recent orders.'
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/shop', className: 'btn btn--first' },
        'Shop Now'
      )
    ),
    orders.length > 0 && orders.map(function (order) {
      return _react2.default.createElement(OrderBox, { order: order });
    })
  );
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    orders: state.user.orders || []
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(Orders);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(OrderItem, 'OrderItem', '/Users/realseanp1/Projects/archadon/src/client/components/Orders.js');

  __REACT_HOT_LOADER__.register(OrderBox, 'OrderBox', '/Users/realseanp1/Projects/archadon/src/client/components/Orders.js');

  __REACT_HOT_LOADER__.register(Orders, 'Orders', '/Users/realseanp1/Projects/archadon/src/client/components/Orders.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Orders.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Orders.js');
}();

;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Svg = __webpack_require__(19);

var _Svg2 = _interopRequireDefault(_Svg);

var _Utils = __webpack_require__(4);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _reactRedux = __webpack_require__(2);

var _Constants = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ADD_TO_CART = _Actions2.default.ADD_TO_CART,
    REMOVE_FROM_CART = _Actions2.default.REMOVE_FROM_CART,
    TOGGLE_FAVORITE = _Actions2.default.TOGGLE_FAVORITE;


function ProductTile(_ref) {
  var product = _ref.product,
      addToCart = _ref.addToCart,
      cartItems = _ref.cart.items,
      removeFromCart = _ref.removeFromCart,
      toggleFavorite = _ref.toggleFavorite,
      favorites = _ref.favorites;

  var inCart = cartItems.find(function (item) {
    if (!item) {
      item = {};
    }
    return item === product.ID || item.ID === product.ID;
  });

  var cartButton = void 0;
  if (inCart) {
    cartButton = _react2.default.createElement(
      'div',
      { style: { cursor: 'pointer' }, onClick: removeFromCart(product.ID), className: 'flex-parent flex-align-center' },
      _react2.default.createElement(
        'p',
        { className: 'font-color--white bold margin--left-1' },
        'Remove From Cart'
      )
    );
  } else {
    cartButton = _react2.default.createElement(
      'div',
      { style: { cursor: 'pointer' }, onClick: addToCart(product), className: 'flex-parent flex-align-center' },
      _react2.default.createElement(
        'div',
        { style: { height: '17px', width: '23px' } },
        _react2.default.createElement(_Svg2.default, { variant: 'icon-cart' })
      ),
      _react2.default.createElement(
        'p',
        { className: 'font-color--white bold margin--left-1' },
        'Add To Cart'
      )
    );
  }
  return _react2.default.createElement(
    'div',
    { className: 'product-tile' },
    _react2.default.createElement(
      'div',
      { className: 'product-tile-inner flex-parent flex-col flex-justify-between' },
      _react2.default.createElement(
        'div',
        { className: 'product-tile-padding-x product-tile-padding-top' },
        _react2.default.createElement(
          'div',
          { className: 'product-tile-img flex-parent flex-align-center flex-justify-center' },
          _react2.default.createElement('img', { src: _Constants.IMAGE_ORIGIN + '/' + product.Images[0].src })
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex-parent flex-row flex-justify-between margin--top-1' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'h2',
              null,
              product.Name
            ),
            _react2.default.createElement(
              'p',
              null,
              product.Width + 'x' + product.Height
            )
          ),
          _react2.default.createElement(
            'div',
            { onClick: toggleFavorite(product.ID), className: 'heart' },
            _react2.default.createElement(_Svg2.default, { color: '#803BDD', variant: favorites.includes(product.ID) ? 'icon-heart-filled' : 'icon-heart' })
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'flex-parent flex-align-center flex-justify-between product-tile-padding-x product-tile-price-bar margin--top-5' },
        _react2.default.createElement(
          'p',
          { className: 'font-color--white bold' },
          '$',
          product.Price
        ),
        cartButton
      )
    )
  );
}

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addToCart: function addToCart(product) {
      return function () {
        return dispatch((0, _Utils.action)(ADD_TO_CART, product));
      };
    },
    removeFromCart: function removeFromCart(ID) {
      return function () {
        return dispatch((0, _Utils.action)(REMOVE_FROM_CART, ID));
      };
    },
    toggleFavorite: function toggleFavorite(ID) {
      return function () {
        return dispatch((0, _Utils.action)(TOGGLE_FAVORITE, ID));
      };
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    cart: state.cart,
    favorites: state.user.Favorites || []
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProductTile);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProductTile, 'ProductTile', '/Users/realseanp1/Projects/archadon/src/client/components/ProductTile.jsx');

  __REACT_HOT_LOADER__.register(ADD_TO_CART, 'ADD_TO_CART', '/Users/realseanp1/Projects/archadon/src/client/components/ProductTile.jsx');

  __REACT_HOT_LOADER__.register(REMOVE_FROM_CART, 'REMOVE_FROM_CART', '/Users/realseanp1/Projects/archadon/src/client/components/ProductTile.jsx');

  __REACT_HOT_LOADER__.register(TOGGLE_FAVORITE, 'TOGGLE_FAVORITE', '/Users/realseanp1/Projects/archadon/src/client/components/ProductTile.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/ProductTile.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/ProductTile.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/ProductTile.jsx');
}();

;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(12);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _Utils = __webpack_require__(4);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(3);

var _classnames = __webpack_require__(11);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SIGN_UP = _Actions2.default.SIGN_UP;

var LogInForm = function (_React$Component) {
  (0, _inherits3.default)(LogInForm, _React$Component);

  function LogInForm() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, LogInForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = LogInForm.__proto__ || (0, _getPrototypeOf2.default)(LogInForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: {}
    }, _this.onChange = function (_ref2) {
      var _ref2$currentTarget = _ref2.currentTarget,
          value = _ref2$currentTarget.value,
          key = _ref2$currentTarget.name;

      _this.setState((0, _defineProperty3.default)({}, key, value));
    }, _this.submit = function (e) {
      e.preventDefault();
      if (_this.state.password !== _this.state.confirmPassword) {
        _this.setState({
          error: {
            type: 'confirm',
            msg: 'Passwords do not match.'
          }
        });
        return;
      }
      _this.props.signup(_this.state.email, _this.state.password);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(LogInForm, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'flex-parent flex-col flex-align-center flex-justify-start full-width' },
        _react2.default.createElement(
          'h2',
          { className: 'margin--bottom-7' },
          'Sign Up'
        ),
        _react2.default.createElement(
          'form',
          { className: 'form', onSubmit: this.submit },
          _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('form-group', { 'form-error': this.props.error }) },
            _react2.default.createElement(
              'div',
              { className: 'form-component' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'email' },
                'Email'
              ),
              _react2.default.createElement('input', { onChange: this.onChange, name: 'email', value: this.state.email, type: 'text' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-component margin--top-3' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'password' },
                'Password'
              ),
              _react2.default.createElement('input', { className: (0, _classnames2.default)({ 'input-error': this.state.error.type === 'confirm' }), onChange: this.onChange, name: 'password', value: this.state.password, type: 'password' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-component margin--top-3' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'confirmPassword' },
                'Confirm Password'
              ),
              _react2.default.createElement('input', { className: (0, _classnames2.default)({ 'input-error': this.state.error.type === 'confirm' }), onChange: this.onChange, name: 'confirmPassword', value: this.state.confirmPassword, type: 'password' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-content' },
            (this.props.error || this.state.error.msg) && _react2.default.createElement(
              'p',
              { className: 'font-color--danger margin--top-0' },
              this.props.error || this.state.error.msg
            ),
            _react2.default.createElement(
              'button',
              { className: 'btn btn--first' },
              'Sign Up'
            ),
            _react2.default.createElement(
              'div',
              { className: 'margin--top-3' },
              _react2.default.createElement(
                'span',
                null,
                'Have an account?',
                ' ',
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/login' },
                  'Log in'
                ),
                '.'
              )
            )
          )
        )
      );
    }
  }]);
  return LogInForm;
}(_react2.default.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    signup: function signup(email, password) {
      dispatch((0, _Utils.action)(SIGN_UP, { email: email, password: password }));
    }
  };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    error: state.errors.signup
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LogInForm);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SIGN_UP, 'SIGN_UP', '/Users/realseanp1/Projects/archadon/src/client/components/Register.jsx');

  __REACT_HOT_LOADER__.register(LogInForm, 'LogInForm', '/Users/realseanp1/Projects/archadon/src/client/components/Register.jsx');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Register.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/realseanp1/Projects/archadon/src/client/components/Register.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/Register.jsx');
}();

;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _Login = __webpack_require__(40);

var _Login2 = _interopRequireDefault(_Login);

var _Register = __webpack_require__(46);

var _Register2 = _interopRequireDefault(_Register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SignInForm(_ref) {
  var path = _ref.path;

  return _react2.default.createElement(
    'div',
    { className: 'full-width padding--top-15 flex-grow-1 flex-parent global-padding flex-align-start flex-justify-center' },
    path === '/login' ? _react2.default.createElement(_Login2.default, null) : _react2.default.createElement(_Register2.default, null)
  );
}

var _default = SignInForm;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SignInForm, 'SignInForm', '/Users/realseanp1/Projects/archadon/src/client/components/SignInForm.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/SignInForm.jsx');
}();

;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(64);

var _assign2 = _interopRequireDefault(_assign);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _Types = __webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ADD_TO_CART = _Actions2.default.ADD_TO_CART,
    PRODUCT_DATA_LOADED = _Actions2.default.PRODUCT_DATA_LOADED,
    REMOVE_FROM_CART = _Actions2.default.REMOVE_FROM_CART,
    REPLACE_CART = _Actions2.default.REPLACE_CART;


var INITIAL_STATE = {
  totalQty: 0,
  totalPrice: 0,
  items: []
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];

  if (!action.payload) return state;
  var newState = (0, _assign2.default)({}, state);
  var product = action.payload;
  var isString = typeof product === 'string';
  if (action.type !== REMOVE_FROM_CART && (isString && state.items.includes(product) || isString && state.items.find(function (p) {
    return p.ID === product;
  }) || state.items.find(function (p) {
    return p.ID === product.ID;
  }))) {
    return state;
  }

  switch (action.type) {

    case ADD_TO_CART:
      newState.items.push(action.payload);
      newState.totalQty = newState.items.length;
      if (!isString) {
        newState.totalPrice += product.Price;
      }
      return newState;

    case PRODUCT_DATA_LOADED:
      var id = action.payload.ID;

      newState.totalPrice += action.payload.Price;
      newState.items[newState.items.findIndex(function (p) {
        return p === id;
      })] = action.payload;
      return newState;

    case REPLACE_CART:
      return action.payload;

    case REMOVE_FROM_CART:
      var _ID = action.payload;
      var item = newState.items.find(function (p) {
        return p === _ID || p.ID === _ID;
      }) || { Price: 0 };
      newState.totalQty -= 1;
      if (typeof item !== 'string') {
        newState.totalPrice -= item.Price;
      }
      var products = newState.items.filter(function (p) {
        return p.ID !== _ID;
      });
      newState.items = products;
      return newState;

    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ADD_TO_CART, 'ADD_TO_CART', '/Users/realseanp1/Projects/archadon/src/client/reducers/cart.js');

  __REACT_HOT_LOADER__.register(PRODUCT_DATA_LOADED, 'PRODUCT_DATA_LOADED', '/Users/realseanp1/Projects/archadon/src/client/reducers/cart.js');

  __REACT_HOT_LOADER__.register(REMOVE_FROM_CART, 'REMOVE_FROM_CART', '/Users/realseanp1/Projects/archadon/src/client/reducers/cart.js');

  __REACT_HOT_LOADER__.register(REPLACE_CART, 'REPLACE_CART', '/Users/realseanp1/Projects/archadon/src/client/reducers/cart.js');

  __REACT_HOT_LOADER__.register(INITIAL_STATE, 'INITIAL_STATE', '/Users/realseanp1/Projects/archadon/src/client/reducers/cart.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/reducers/cart.js');
}();

;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__(12);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__(10);

var _extends4 = _interopRequireDefault(_extends3);

var _slicedToArray2 = __webpack_require__(15);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(14);

var _entries2 = _interopRequireDefault(_entries);

exports.default = errors;

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

var _reactRouterRedux = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_ERROR = _Actions2.default.SET_ERROR;
function errors() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _reactRouterRedux.LOCATION_CHANGE:
      return (0, _entries2.default)(state).filter(function (_ref) {
        var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
            val = _ref2[1];

        return val !== null;
      }).reduce(function (a, _ref3) {
        var _ref4 = (0, _slicedToArray3.default)(_ref3, 1),
            key = _ref4[0];

        a[key] = null;
        return a;
      }, {});
    case SET_ERROR:
      var _action$payload = action.payload,
          type = _action$payload.type,
          error = _action$payload.error;

      return (0, _extends4.default)({}, state, (0, _defineProperty3.default)({}, type, error));
    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(errors, 'errors', '/Users/realseanp1/Projects/archadon/src/client/reducers/errors.js');

  __REACT_HOT_LOADER__.register(SET_ERROR, 'SET_ERROR', '/Users/realseanp1/Projects/archadon/src/client/reducers/errors.js');
}();

;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(23);

var _reactRouterRedux = __webpack_require__(22);

var _errors = __webpack_require__(49);

var _errors2 = _interopRequireDefault(_errors);

var _user = __webpack_require__(55);

var _user2 = _interopRequireDefault(_user);

var _loading = __webpack_require__(51);

var _loading2 = _interopRequireDefault(_loading);

var _redirectPath = __webpack_require__(54);

var _redirectPath2 = _interopRequireDefault(_redirectPath);

var _products = __webpack_require__(53);

var _products2 = _interopRequireDefault(_products);

var _cart = __webpack_require__(48);

var _cart2 = _interopRequireDefault(_cart);

var _orderConfirmation = __webpack_require__(52);

var _orderConfirmation2 = _interopRequireDefault(_orderConfirmation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  router: _reactRouterRedux.routerReducer,
  user: _user2.default,
  cart: _cart2.default,
  redirectPath: _redirectPath2.default,
  orderConfirmation: _orderConfirmation2.default,
  errors: _errors2.default,
  loading: _loading2.default,
  products: _products2.default
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/reducers/index.js');
}();

;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(10);

var _extends3 = _interopRequireDefault(_extends2);

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LOADING = _Actions2.default.LOADING,
    SET_LOADING_PAGE = _Actions2.default.SET_LOADING_PAGE;

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { full: false, page: '' };
  var action = arguments[1];

  switch (action.type) {
    case LOADING:
      return (0, _extends3.default)({}, state, {
        full: action.payload
      });
    case SET_LOADING_PAGE:
      return (0, _extends3.default)({}, state, {
        page: action.payload
      });
    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LOADING, 'LOADING', '/Users/realseanp1/Projects/archadon/src/client/reducers/loading.js');

  __REACT_HOT_LOADER__.register(SET_LOADING_PAGE, 'SET_LOADING_PAGE', '/Users/realseanp1/Projects/archadon/src/client/reducers/loading.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/reducers/loading.js');
}();

;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = products;

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_ORDER_CONFIRMATION = _Actions2.default.SET_ORDER_CONFIRMATION;
function products() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case SET_ORDER_CONFIRMATION:
      var _action$payload = action.payload,
          orderID = _action$payload.orderID,
          email = _action$payload.email;

      return {
        orderID: orderID,
        email: email
      };
    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(products, 'products', '/Users/realseanp1/Projects/archadon/src/client/reducers/orderConfirmation.js');

  __REACT_HOT_LOADER__.register(SET_ORDER_CONFIRMATION, 'SET_ORDER_CONFIRMATION', '/Users/realseanp1/Projects/archadon/src/client/reducers/orderConfirmation.js');
}();

;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(10);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = products;

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PRODUCT_LIST_LOADED = _Actions2.default.PRODUCT_LIST_LOADED;
function products() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case PRODUCT_LIST_LOADED:
      return (0, _extends3.default)({}, state, action.payload);
    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(products, 'products', '/Users/realseanp1/Projects/archadon/src/client/reducers/products.js');

  __REACT_HOT_LOADER__.register(PRODUCT_LIST_LOADED, 'PRODUCT_LIST_LOADED', '/Users/realseanp1/Projects/archadon/src/client/reducers/products.js');
}();

;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_REDIRECT_PATH = _Actions2.default.SET_REDIRECT_PATH;

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  switch (action.type) {
    case SET_REDIRECT_PATH:
      return action.payload;
    default:
      return state;
  }
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SET_REDIRECT_PATH, 'SET_REDIRECT_PATH', '/Users/realseanp1/Projects/archadon/src/client/reducers/redirectPath.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/reducers/redirectPath.js');
}();

;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(10);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = user;

var _Actions = __webpack_require__(1);

var _Actions2 = _interopRequireDefault(_Actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SET_USER_DATA = _Actions2.default.SET_USER_DATA,
    USER_AUTH_SUCCESS = _Actions2.default.USER_AUTH_SUCCESS,
    LOG_OUT = _Actions2.default.LOG_OUT,
    CLEAR_AUTHENTICATION_DATA = _Actions2.default.CLEAR_AUTHENTICATION_DATA,
    TOGGLE_FAVORITE = _Actions2.default.TOGGLE_FAVORITE,
    FAVORITES_LOADED = _Actions2.default.FAVORITES_LOADED;
function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { Favorites: [], FavoritesDetail: [] };
  var action = arguments[1];

  switch (action.type) {
    case SET_USER_DATA:
      return (0, _extends3.default)({}, state, action.payload);
    case FAVORITES_LOADED:
      return (0, _extends3.default)({}, state, {
        FavoritesDetail: action.payload || []
      });
    case TOGGLE_FAVORITE:
      var ID = action.payload;
      state.Favorites = state.Favorites || [];
      var item = state.Favorites.find(function (p) {
        return p === ID;
      });
      var _Favorites = void 0;
      if (item) {
        _Favorites = state.Favorites.filter(function (p) {
          return p !== ID;
        });
      } else {
        state.Favorites.push(ID);
        _Favorites = state.Favorites.slice();
      }
      return (0, _extends3.default)({}, state, {
        Favorites: _Favorites
      });
    case CLEAR_AUTHENTICATION_DATA:
    case LOG_OUT:
      return {};
    case USER_AUTH_SUCCESS:
      return (0, _extends3.default)({}, state, action.payload);
    default:
      return state;
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(user, 'user', '/Users/realseanp1/Projects/archadon/src/client/reducers/user.js');

  __REACT_HOT_LOADER__.register(SET_USER_DATA, 'SET_USER_DATA', '/Users/realseanp1/Projects/archadon/src/client/reducers/user.js');

  __REACT_HOT_LOADER__.register(USER_AUTH_SUCCESS, 'USER_AUTH_SUCCESS', '/Users/realseanp1/Projects/archadon/src/client/reducers/user.js');

  __REACT_HOT_LOADER__.register(LOG_OUT, 'LOG_OUT', '/Users/realseanp1/Projects/archadon/src/client/reducers/user.js');

  __REACT_HOT_LOADER__.register(CLEAR_AUTHENTICATION_DATA, 'CLEAR_AUTHENTICATION_DATA', '/Users/realseanp1/Projects/archadon/src/client/reducers/user.js');

  __REACT_HOT_LOADER__.register(TOGGLE_FAVORITE, 'TOGGLE_FAVORITE', '/Users/realseanp1/Projects/archadon/src/client/reducers/user.js');

  __REACT_HOT_LOADER__.register(FAVORITES_LOADED, 'FAVORITES_LOADED', '/Users/realseanp1/Projects/archadon/src/client/reducers/user.js');
}();

;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regenerator = __webpack_require__(28);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(27);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = __webpack_require__(30);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _html = __webpack_require__(26);

var _html2 = _interopRequireDefault(_html);

var _App = __webpack_require__(24);

var _App2 = _interopRequireDefault(_App);

var _server = __webpack_require__(32);

var _reactRouter = __webpack_require__(16);

var _reactRedux = __webpack_require__(2);

var _Store = __webpack_require__(25);

var _Store2 = _interopRequireDefault(_Store);

var _reactHotLoader = __webpack_require__(33);

var _nodeFetch = __webpack_require__(31);

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _dotenv = __webpack_require__(29);

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.use(function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(req, res, next) {
    var response, products, store, context;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _nodeFetch2.default)((process.env.NODE_ENV !== 'production' ? 'https://api.archadon.com/dev/' : 'https://api.archadon.com/dev/') + 'product/v1/list');

          case 2:
            response = _context.sent;
            _context.next = 5;
            return response.json();

          case 5:
            products = _context.sent;
            store = (0, _Store2.default)({ products: products });

            try {
              context = {};

              res.status(200).send((0, _html2.default)((0, _server.renderToString)(_react2.default.createElement(
                _reactHotLoader.AppContainer,
                null,
                _react2.default.createElement(
                  _reactRedux.Provider,
                  { store: store },
                  _react2.default.createElement(
                    _reactRouter.StaticRouter,
                    {
                      context: context,
                      location: req.originalUrl
                    },
                    _react2.default.createElement(_App2.default, null)
                  )
                )
              )), store.getState()));
            } catch (err) {
              next(err);
            }

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());

app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port ' + (process.env.PORT || 3000)); //eslint-disable-line
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', '/Users/realseanp1/Projects/archadon/src/server/index.js');
}();

;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(59)(undefined);
// imports


// module
exports.push([module.i, "/* This stylesheet generated by Transfonter (https://transfonter.org) on April 16, 2017 7:17 PM */\n.body-font {\n  font-family: \"acumin-pro-semi-condensed\", sans-serif !important; }\n\n@font-face {\n  font-family: \"Bodoni 72\";\n  src: url(\"http://localhost:3001/BodoniSvtyTwoITCTT-BookIta.eot\");\n  src: url(\"http://localhost:3001/BodoniSvtyTwoITCTT-BookIta.eot?#iefix\") format(\"embedded-opentype\"), url(\"http://localhost:3001/BodoniSvtyTwoITCTT-BookIta.woff\") format(\"woff\"), url(\"http://localhost:3001/BodoniSvtyTwoITCTT-BookIta.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: italic; }\n\n@font-face {\n  font-family: \"Bodoni 72\";\n  src: url(\"http://localhost:3001/BodoniSvtyTwoITCTT-Bold.eot\");\n  src: url(\"http://localhost:3001/BodoniSvtyTwoITCTT-Bold.eot?#iefix\") format(\"embedded-opentype\"), url(\"http://localhost:3001/BodoniSvtyTwoITCTT-Bold.woff\") format(\"woff\"), url(\"http://localhost:3001/BodoniSvtyTwoITCTT-Bold.ttf\") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal; }\n\n@font-face {\n  font-family: \"Bodoni 72\";\n  src: url(\"http://localhost:3001/BodoniSvtyTwoITCTT-Book.eot\");\n  src: url(\"http://localhost:3001/BodoniSvtyTwoITCTT-Book.eot?#iefix\") format(\"embedded-opentype\"), url(\"http://localhost:3001/BodoniSvtyTwoITCTT-Book.woff\") format(\"woff\"), url(\"http://localhost:3001/BodoniSvtyTwoITCTT-Book.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal; }\n\n.btn {\n  display: inline-block;\n  font-weight: bold;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  user-select: none;\n  font-family: \"acumin-pro-semi-condensed\", sans-serif;\n  border: 1px solid transparent;\n  background-color: transparent;\n  padding: 8px 40px;\n  cursor: pointer;\n  font-size: 12.8px;\n  font-size: 1.28rem;\n  border-radius: 5px;\n  transform-origin: center; }\n\n.btn--white {\n  border-color: #FFFFFF;\n  color: #FFFFFF; }\n\n.btn--first {\n  border-color: #803BDD;\n  color: #803BDD; }\n\n.btn--second {\n  border-color: #42D044;\n  color: #42D044; }\n  .btn--second.alt {\n    color: #FFFFFF;\n    background-color: #42D044; }\n\n.text-align-center {\n  text-align: center; }\n\n.hide {\n  display: none; }\n\n.show {\n  display: block; }\n\n.wrap {\n  max-width: 800px;\n  margin: auto; }\n\n.strong {\n  font-weight: bold; }\n\n.full-height {\n  height: 100%; }\n\n.full-width {\n  width: 100%; }\n\n.item-box {\n  border: 1px solid #e1e7ff;\n  padding: 15;\n  box-sizing: border-box;\n  border-radius: 5px;\n  width: 100%; }\n  .item-box:first-child {\n    margin-top: 0 !important; }\n  .item-box:last-child {\n    margin-bottom: 0 !important; }\n\n.margin--x-0 {\n  margin: 0 0px !important; }\n\n.margin--y-0 {\n  margin: 0px 0 !important; }\n\n.margin--top-0 {\n  margin-top: 0px !important; }\n\n.padding--top-0 {\n  padding-top: 0px !important; }\n\n.margin--x-1 {\n  margin: 0 5px !important; }\n\n.margin--y-1 {\n  margin: 5px 0 !important; }\n\n.margin--top-1 {\n  margin-top: 5px !important; }\n\n.padding--top-1 {\n  padding-top: 5px !important; }\n\n.margin--x-2 {\n  margin: 0 10px !important; }\n\n.margin--y-2 {\n  margin: 10px 0 !important; }\n\n.margin--top-2 {\n  margin-top: 10px !important; }\n\n.padding--top-2 {\n  padding-top: 10px !important; }\n\n.margin--x-3 {\n  margin: 0 15px !important; }\n\n.margin--y-3 {\n  margin: 15px 0 !important; }\n\n.margin--top-3 {\n  margin-top: 15px !important; }\n\n.padding--top-3 {\n  padding-top: 15px !important; }\n\n.margin--x-4 {\n  margin: 0 20px !important; }\n\n.margin--y-4 {\n  margin: 20px 0 !important; }\n\n.margin--top-4 {\n  margin-top: 20px !important; }\n\n.padding--top-4 {\n  padding-top: 20px !important; }\n\n.margin--x-5 {\n  margin: 0 25px !important; }\n\n.margin--y-5 {\n  margin: 25px 0 !important; }\n\n.margin--top-5 {\n  margin-top: 25px !important; }\n\n.padding--top-5 {\n  padding-top: 25px !important; }\n\n.margin--x-6 {\n  margin: 0 30px !important; }\n\n.margin--y-6 {\n  margin: 30px 0 !important; }\n\n.margin--top-6 {\n  margin-top: 30px !important; }\n\n.padding--top-6 {\n  padding-top: 30px !important; }\n\n.margin--x-7 {\n  margin: 0 35px !important; }\n\n.margin--y-7 {\n  margin: 35px 0 !important; }\n\n.margin--top-7 {\n  margin-top: 35px !important; }\n\n.padding--top-7 {\n  padding-top: 35px !important; }\n\n.margin--x-8 {\n  margin: 0 40px !important; }\n\n.margin--y-8 {\n  margin: 40px 0 !important; }\n\n.margin--top-8 {\n  margin-top: 40px !important; }\n\n.padding--top-8 {\n  padding-top: 40px !important; }\n\n.margin--x-9 {\n  margin: 0 45px !important; }\n\n.margin--y-9 {\n  margin: 45px 0 !important; }\n\n.margin--top-9 {\n  margin-top: 45px !important; }\n\n.padding--top-9 {\n  padding-top: 45px !important; }\n\n.margin--x-10 {\n  margin: 0 50px !important; }\n\n.margin--y-10 {\n  margin: 50px 0 !important; }\n\n.margin--top-10 {\n  margin-top: 50px !important; }\n\n.padding--top-10 {\n  padding-top: 50px !important; }\n\n.margin--x-11 {\n  margin: 0 55px !important; }\n\n.margin--y-11 {\n  margin: 55px 0 !important; }\n\n.margin--top-11 {\n  margin-top: 55px !important; }\n\n.padding--top-11 {\n  padding-top: 55px !important; }\n\n.margin--x-12 {\n  margin: 0 60px !important; }\n\n.margin--y-12 {\n  margin: 60px 0 !important; }\n\n.margin--top-12 {\n  margin-top: 60px !important; }\n\n.padding--top-12 {\n  padding-top: 60px !important; }\n\n.margin--x-13 {\n  margin: 0 65px !important; }\n\n.margin--y-13 {\n  margin: 65px 0 !important; }\n\n.margin--top-13 {\n  margin-top: 65px !important; }\n\n.padding--top-13 {\n  padding-top: 65px !important; }\n\n.margin--x-14 {\n  margin: 0 70px !important; }\n\n.margin--y-14 {\n  margin: 70px 0 !important; }\n\n.margin--top-14 {\n  margin-top: 70px !important; }\n\n.padding--top-14 {\n  padding-top: 70px !important; }\n\n.margin--x-15 {\n  margin: 0 75px !important; }\n\n.margin--y-15 {\n  margin: 75px 0 !important; }\n\n.margin--top-15 {\n  margin-top: 75px !important; }\n\n.padding--top-15 {\n  padding-top: 75px !important; }\n\n.margin--x-16 {\n  margin: 0 80px !important; }\n\n.margin--y-16 {\n  margin: 80px 0 !important; }\n\n.margin--top-16 {\n  margin-top: 80px !important; }\n\n.padding--top-16 {\n  padding-top: 80px !important; }\n\n.margin--x-17 {\n  margin: 0 85px !important; }\n\n.margin--y-17 {\n  margin: 85px 0 !important; }\n\n.margin--top-17 {\n  margin-top: 85px !important; }\n\n.padding--top-17 {\n  padding-top: 85px !important; }\n\n.margin--x-18 {\n  margin: 0 90px !important; }\n\n.margin--y-18 {\n  margin: 90px 0 !important; }\n\n.margin--top-18 {\n  margin-top: 90px !important; }\n\n.padding--top-18 {\n  padding-top: 90px !important; }\n\n.margin--x-19 {\n  margin: 0 95px !important; }\n\n.margin--y-19 {\n  margin: 95px 0 !important; }\n\n.margin--top-19 {\n  margin-top: 95px !important; }\n\n.padding--top-19 {\n  padding-top: 95px !important; }\n\n.margin--x-20 {\n  margin: 0 100px !important; }\n\n.margin--y-20 {\n  margin: 100px 0 !important; }\n\n.margin--top-20 {\n  margin-top: 100px !important; }\n\n.padding--top-20 {\n  padding-top: 100px !important; }\n\n.margin--x-0 {\n  margin: 0 0px !important; }\n\n.margin--y-0 {\n  margin: 0px 0 !important; }\n\n.margin--left-0 {\n  margin-left: 0px !important; }\n\n.padding--left-0 {\n  padding-left: 0px !important; }\n\n.margin--x-1 {\n  margin: 0 5px !important; }\n\n.margin--y-1 {\n  margin: 5px 0 !important; }\n\n.margin--left-1 {\n  margin-left: 5px !important; }\n\n.padding--left-1 {\n  padding-left: 5px !important; }\n\n.margin--x-2 {\n  margin: 0 10px !important; }\n\n.margin--y-2 {\n  margin: 10px 0 !important; }\n\n.margin--left-2 {\n  margin-left: 10px !important; }\n\n.padding--left-2 {\n  padding-left: 10px !important; }\n\n.margin--x-3 {\n  margin: 0 15px !important; }\n\n.margin--y-3 {\n  margin: 15px 0 !important; }\n\n.margin--left-3 {\n  margin-left: 15px !important; }\n\n.padding--left-3 {\n  padding-left: 15px !important; }\n\n.margin--x-4 {\n  margin: 0 20px !important; }\n\n.margin--y-4 {\n  margin: 20px 0 !important; }\n\n.margin--left-4 {\n  margin-left: 20px !important; }\n\n.padding--left-4 {\n  padding-left: 20px !important; }\n\n.margin--x-5 {\n  margin: 0 25px !important; }\n\n.margin--y-5 {\n  margin: 25px 0 !important; }\n\n.margin--left-5 {\n  margin-left: 25px !important; }\n\n.padding--left-5 {\n  padding-left: 25px !important; }\n\n.margin--x-6 {\n  margin: 0 30px !important; }\n\n.margin--y-6 {\n  margin: 30px 0 !important; }\n\n.margin--left-6 {\n  margin-left: 30px !important; }\n\n.padding--left-6 {\n  padding-left: 30px !important; }\n\n.margin--x-7 {\n  margin: 0 35px !important; }\n\n.margin--y-7 {\n  margin: 35px 0 !important; }\n\n.margin--left-7 {\n  margin-left: 35px !important; }\n\n.padding--left-7 {\n  padding-left: 35px !important; }\n\n.margin--x-8 {\n  margin: 0 40px !important; }\n\n.margin--y-8 {\n  margin: 40px 0 !important; }\n\n.margin--left-8 {\n  margin-left: 40px !important; }\n\n.padding--left-8 {\n  padding-left: 40px !important; }\n\n.margin--x-9 {\n  margin: 0 45px !important; }\n\n.margin--y-9 {\n  margin: 45px 0 !important; }\n\n.margin--left-9 {\n  margin-left: 45px !important; }\n\n.padding--left-9 {\n  padding-left: 45px !important; }\n\n.margin--x-10 {\n  margin: 0 50px !important; }\n\n.margin--y-10 {\n  margin: 50px 0 !important; }\n\n.margin--left-10 {\n  margin-left: 50px !important; }\n\n.padding--left-10 {\n  padding-left: 50px !important; }\n\n.margin--x-11 {\n  margin: 0 55px !important; }\n\n.margin--y-11 {\n  margin: 55px 0 !important; }\n\n.margin--left-11 {\n  margin-left: 55px !important; }\n\n.padding--left-11 {\n  padding-left: 55px !important; }\n\n.margin--x-12 {\n  margin: 0 60px !important; }\n\n.margin--y-12 {\n  margin: 60px 0 !important; }\n\n.margin--left-12 {\n  margin-left: 60px !important; }\n\n.padding--left-12 {\n  padding-left: 60px !important; }\n\n.margin--x-13 {\n  margin: 0 65px !important; }\n\n.margin--y-13 {\n  margin: 65px 0 !important; }\n\n.margin--left-13 {\n  margin-left: 65px !important; }\n\n.padding--left-13 {\n  padding-left: 65px !important; }\n\n.margin--x-14 {\n  margin: 0 70px !important; }\n\n.margin--y-14 {\n  margin: 70px 0 !important; }\n\n.margin--left-14 {\n  margin-left: 70px !important; }\n\n.padding--left-14 {\n  padding-left: 70px !important; }\n\n.margin--x-15 {\n  margin: 0 75px !important; }\n\n.margin--y-15 {\n  margin: 75px 0 !important; }\n\n.margin--left-15 {\n  margin-left: 75px !important; }\n\n.padding--left-15 {\n  padding-left: 75px !important; }\n\n.margin--x-16 {\n  margin: 0 80px !important; }\n\n.margin--y-16 {\n  margin: 80px 0 !important; }\n\n.margin--left-16 {\n  margin-left: 80px !important; }\n\n.padding--left-16 {\n  padding-left: 80px !important; }\n\n.margin--x-17 {\n  margin: 0 85px !important; }\n\n.margin--y-17 {\n  margin: 85px 0 !important; }\n\n.margin--left-17 {\n  margin-left: 85px !important; }\n\n.padding--left-17 {\n  padding-left: 85px !important; }\n\n.margin--x-18 {\n  margin: 0 90px !important; }\n\n.margin--y-18 {\n  margin: 90px 0 !important; }\n\n.margin--left-18 {\n  margin-left: 90px !important; }\n\n.padding--left-18 {\n  padding-left: 90px !important; }\n\n.margin--x-19 {\n  margin: 0 95px !important; }\n\n.margin--y-19 {\n  margin: 95px 0 !important; }\n\n.margin--left-19 {\n  margin-left: 95px !important; }\n\n.padding--left-19 {\n  padding-left: 95px !important; }\n\n.margin--x-20 {\n  margin: 0 100px !important; }\n\n.margin--y-20 {\n  margin: 100px 0 !important; }\n\n.margin--left-20 {\n  margin-left: 100px !important; }\n\n.padding--left-20 {\n  padding-left: 100px !important; }\n\n.margin--x-0 {\n  margin: 0 0px !important; }\n\n.margin--y-0 {\n  margin: 0px 0 !important; }\n\n.margin--right-0 {\n  margin-right: 0px !important; }\n\n.padding--right-0 {\n  padding-right: 0px !important; }\n\n.margin--x-1 {\n  margin: 0 5px !important; }\n\n.margin--y-1 {\n  margin: 5px 0 !important; }\n\n.margin--right-1 {\n  margin-right: 5px !important; }\n\n.padding--right-1 {\n  padding-right: 5px !important; }\n\n.margin--x-2 {\n  margin: 0 10px !important; }\n\n.margin--y-2 {\n  margin: 10px 0 !important; }\n\n.margin--right-2 {\n  margin-right: 10px !important; }\n\n.padding--right-2 {\n  padding-right: 10px !important; }\n\n.margin--x-3 {\n  margin: 0 15px !important; }\n\n.margin--y-3 {\n  margin: 15px 0 !important; }\n\n.margin--right-3 {\n  margin-right: 15px !important; }\n\n.padding--right-3 {\n  padding-right: 15px !important; }\n\n.margin--x-4 {\n  margin: 0 20px !important; }\n\n.margin--y-4 {\n  margin: 20px 0 !important; }\n\n.margin--right-4 {\n  margin-right: 20px !important; }\n\n.padding--right-4 {\n  padding-right: 20px !important; }\n\n.margin--x-5 {\n  margin: 0 25px !important; }\n\n.margin--y-5 {\n  margin: 25px 0 !important; }\n\n.margin--right-5 {\n  margin-right: 25px !important; }\n\n.padding--right-5 {\n  padding-right: 25px !important; }\n\n.margin--x-6 {\n  margin: 0 30px !important; }\n\n.margin--y-6 {\n  margin: 30px 0 !important; }\n\n.margin--right-6 {\n  margin-right: 30px !important; }\n\n.padding--right-6 {\n  padding-right: 30px !important; }\n\n.margin--x-7 {\n  margin: 0 35px !important; }\n\n.margin--y-7 {\n  margin: 35px 0 !important; }\n\n.margin--right-7 {\n  margin-right: 35px !important; }\n\n.padding--right-7 {\n  padding-right: 35px !important; }\n\n.margin--x-8 {\n  margin: 0 40px !important; }\n\n.margin--y-8 {\n  margin: 40px 0 !important; }\n\n.margin--right-8 {\n  margin-right: 40px !important; }\n\n.padding--right-8 {\n  padding-right: 40px !important; }\n\n.margin--x-9 {\n  margin: 0 45px !important; }\n\n.margin--y-9 {\n  margin: 45px 0 !important; }\n\n.margin--right-9 {\n  margin-right: 45px !important; }\n\n.padding--right-9 {\n  padding-right: 45px !important; }\n\n.margin--x-10 {\n  margin: 0 50px !important; }\n\n.margin--y-10 {\n  margin: 50px 0 !important; }\n\n.margin--right-10 {\n  margin-right: 50px !important; }\n\n.padding--right-10 {\n  padding-right: 50px !important; }\n\n.margin--x-11 {\n  margin: 0 55px !important; }\n\n.margin--y-11 {\n  margin: 55px 0 !important; }\n\n.margin--right-11 {\n  margin-right: 55px !important; }\n\n.padding--right-11 {\n  padding-right: 55px !important; }\n\n.margin--x-12 {\n  margin: 0 60px !important; }\n\n.margin--y-12 {\n  margin: 60px 0 !important; }\n\n.margin--right-12 {\n  margin-right: 60px !important; }\n\n.padding--right-12 {\n  padding-right: 60px !important; }\n\n.margin--x-13 {\n  margin: 0 65px !important; }\n\n.margin--y-13 {\n  margin: 65px 0 !important; }\n\n.margin--right-13 {\n  margin-right: 65px !important; }\n\n.padding--right-13 {\n  padding-right: 65px !important; }\n\n.margin--x-14 {\n  margin: 0 70px !important; }\n\n.margin--y-14 {\n  margin: 70px 0 !important; }\n\n.margin--right-14 {\n  margin-right: 70px !important; }\n\n.padding--right-14 {\n  padding-right: 70px !important; }\n\n.margin--x-15 {\n  margin: 0 75px !important; }\n\n.margin--y-15 {\n  margin: 75px 0 !important; }\n\n.margin--right-15 {\n  margin-right: 75px !important; }\n\n.padding--right-15 {\n  padding-right: 75px !important; }\n\n.margin--x-16 {\n  margin: 0 80px !important; }\n\n.margin--y-16 {\n  margin: 80px 0 !important; }\n\n.margin--right-16 {\n  margin-right: 80px !important; }\n\n.padding--right-16 {\n  padding-right: 80px !important; }\n\n.margin--x-17 {\n  margin: 0 85px !important; }\n\n.margin--y-17 {\n  margin: 85px 0 !important; }\n\n.margin--right-17 {\n  margin-right: 85px !important; }\n\n.padding--right-17 {\n  padding-right: 85px !important; }\n\n.margin--x-18 {\n  margin: 0 90px !important; }\n\n.margin--y-18 {\n  margin: 90px 0 !important; }\n\n.margin--right-18 {\n  margin-right: 90px !important; }\n\n.padding--right-18 {\n  padding-right: 90px !important; }\n\n.margin--x-19 {\n  margin: 0 95px !important; }\n\n.margin--y-19 {\n  margin: 95px 0 !important; }\n\n.margin--right-19 {\n  margin-right: 95px !important; }\n\n.padding--right-19 {\n  padding-right: 95px !important; }\n\n.margin--x-20 {\n  margin: 0 100px !important; }\n\n.margin--y-20 {\n  margin: 100px 0 !important; }\n\n.margin--right-20 {\n  margin-right: 100px !important; }\n\n.padding--right-20 {\n  padding-right: 100px !important; }\n\n.margin--x-0 {\n  margin: 0 0px !important; }\n\n.margin--y-0 {\n  margin: 0px 0 !important; }\n\n.margin--bottom-0 {\n  margin-bottom: 0px !important; }\n\n.padding--bottom-0 {\n  padding-bottom: 0px !important; }\n\n.margin--x-1 {\n  margin: 0 5px !important; }\n\n.margin--y-1 {\n  margin: 5px 0 !important; }\n\n.margin--bottom-1 {\n  margin-bottom: 5px !important; }\n\n.padding--bottom-1 {\n  padding-bottom: 5px !important; }\n\n.margin--x-2 {\n  margin: 0 10px !important; }\n\n.margin--y-2 {\n  margin: 10px 0 !important; }\n\n.margin--bottom-2 {\n  margin-bottom: 10px !important; }\n\n.padding--bottom-2 {\n  padding-bottom: 10px !important; }\n\n.margin--x-3 {\n  margin: 0 15px !important; }\n\n.margin--y-3 {\n  margin: 15px 0 !important; }\n\n.margin--bottom-3 {\n  margin-bottom: 15px !important; }\n\n.padding--bottom-3 {\n  padding-bottom: 15px !important; }\n\n.margin--x-4 {\n  margin: 0 20px !important; }\n\n.margin--y-4 {\n  margin: 20px 0 !important; }\n\n.margin--bottom-4 {\n  margin-bottom: 20px !important; }\n\n.padding--bottom-4 {\n  padding-bottom: 20px !important; }\n\n.margin--x-5 {\n  margin: 0 25px !important; }\n\n.margin--y-5 {\n  margin: 25px 0 !important; }\n\n.margin--bottom-5 {\n  margin-bottom: 25px !important; }\n\n.padding--bottom-5 {\n  padding-bottom: 25px !important; }\n\n.margin--x-6 {\n  margin: 0 30px !important; }\n\n.margin--y-6 {\n  margin: 30px 0 !important; }\n\n.margin--bottom-6 {\n  margin-bottom: 30px !important; }\n\n.padding--bottom-6 {\n  padding-bottom: 30px !important; }\n\n.margin--x-7 {\n  margin: 0 35px !important; }\n\n.margin--y-7 {\n  margin: 35px 0 !important; }\n\n.margin--bottom-7 {\n  margin-bottom: 35px !important; }\n\n.padding--bottom-7 {\n  padding-bottom: 35px !important; }\n\n.margin--x-8 {\n  margin: 0 40px !important; }\n\n.margin--y-8 {\n  margin: 40px 0 !important; }\n\n.margin--bottom-8 {\n  margin-bottom: 40px !important; }\n\n.padding--bottom-8 {\n  padding-bottom: 40px !important; }\n\n.margin--x-9 {\n  margin: 0 45px !important; }\n\n.margin--y-9 {\n  margin: 45px 0 !important; }\n\n.margin--bottom-9 {\n  margin-bottom: 45px !important; }\n\n.padding--bottom-9 {\n  padding-bottom: 45px !important; }\n\n.margin--x-10 {\n  margin: 0 50px !important; }\n\n.margin--y-10 {\n  margin: 50px 0 !important; }\n\n.margin--bottom-10 {\n  margin-bottom: 50px !important; }\n\n.padding--bottom-10 {\n  padding-bottom: 50px !important; }\n\n.margin--x-11 {\n  margin: 0 55px !important; }\n\n.margin--y-11 {\n  margin: 55px 0 !important; }\n\n.margin--bottom-11 {\n  margin-bottom: 55px !important; }\n\n.padding--bottom-11 {\n  padding-bottom: 55px !important; }\n\n.margin--x-12 {\n  margin: 0 60px !important; }\n\n.margin--y-12 {\n  margin: 60px 0 !important; }\n\n.margin--bottom-12 {\n  margin-bottom: 60px !important; }\n\n.padding--bottom-12 {\n  padding-bottom: 60px !important; }\n\n.margin--x-13 {\n  margin: 0 65px !important; }\n\n.margin--y-13 {\n  margin: 65px 0 !important; }\n\n.margin--bottom-13 {\n  margin-bottom: 65px !important; }\n\n.padding--bottom-13 {\n  padding-bottom: 65px !important; }\n\n.margin--x-14 {\n  margin: 0 70px !important; }\n\n.margin--y-14 {\n  margin: 70px 0 !important; }\n\n.margin--bottom-14 {\n  margin-bottom: 70px !important; }\n\n.padding--bottom-14 {\n  padding-bottom: 70px !important; }\n\n.margin--x-15 {\n  margin: 0 75px !important; }\n\n.margin--y-15 {\n  margin: 75px 0 !important; }\n\n.margin--bottom-15 {\n  margin-bottom: 75px !important; }\n\n.padding--bottom-15 {\n  padding-bottom: 75px !important; }\n\n.margin--x-16 {\n  margin: 0 80px !important; }\n\n.margin--y-16 {\n  margin: 80px 0 !important; }\n\n.margin--bottom-16 {\n  margin-bottom: 80px !important; }\n\n.padding--bottom-16 {\n  padding-bottom: 80px !important; }\n\n.margin--x-17 {\n  margin: 0 85px !important; }\n\n.margin--y-17 {\n  margin: 85px 0 !important; }\n\n.margin--bottom-17 {\n  margin-bottom: 85px !important; }\n\n.padding--bottom-17 {\n  padding-bottom: 85px !important; }\n\n.margin--x-18 {\n  margin: 0 90px !important; }\n\n.margin--y-18 {\n  margin: 90px 0 !important; }\n\n.margin--bottom-18 {\n  margin-bottom: 90px !important; }\n\n.padding--bottom-18 {\n  padding-bottom: 90px !important; }\n\n.margin--x-19 {\n  margin: 0 95px !important; }\n\n.margin--y-19 {\n  margin: 95px 0 !important; }\n\n.margin--bottom-19 {\n  margin-bottom: 95px !important; }\n\n.padding--bottom-19 {\n  padding-bottom: 95px !important; }\n\n.margin--x-20 {\n  margin: 0 100px !important; }\n\n.margin--y-20 {\n  margin: 100px 0 !important; }\n\n.margin--bottom-20 {\n  margin-bottom: 100px !important; }\n\n.padding--bottom-20 {\n  padding-bottom: 100px !important; }\n\n.home-transition-group, .home-slide-flex {\n  position: relative; }\n\n.home-slide-flex {\n  z-index: 1;\n  flex-direction: column;\n  max-width: 100%; }\n\n.animation-wrap {\n  height: 100%;\n  width: 100%;\n  top: 0;\n  position: absolute;\n  left: 0; }\n  .animation-wrap.entering {\n    animation: 1.25s slideEnter forwards cubic-bezier(0.95, 0.05, 0.795, 0.035);\n    animation-delay: 0.25s; }\n  .animation-wrap.leaving {\n    animation: 1.25s slideLeave forwards cubic-bezier(0.95, 0.05, 0.795, 0.035);\n    animation-delay: 0.25s; }\n  .animation-wrap.leaving, .animation-wrap.entering {\n    position: absolute;\n    width: 100%;\n    min-height: 100%; }\n\n.slide-wrap {\n  max-height: 100%;\n  height: 100%; }\n\n@keyframes slideEnter {\n  from {\n    transform: translateX(100%); }\n  to {\n    transform: translateX(0); } }\n\n@keyframes slideLeave {\n  to {\n    transform: translateX(-100%); } }\n\n.home-slide-bg {\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: 0;\n  height: 100%;\n  background: #eee;\n  z-index: 0; }\n  .home-slide-bg canvas {\n    width: 100%;\n    height: 100%; }\n\n.home-slide-box {\n  flex: auto;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  align-items: center; }\n  .home-slide-box:nth-child(1) {\n    justify-content: center;\n    align-items: center;\n    margin: 75px 0 15px;\n    flex-shrink: 0; }\n  .home-slide-box:nth-child(2) {\n    justify-content: center;\n    flex-direction: row;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n    flex: auto;\n    width: 100%; }\n  .home-slide-box:nth-child(3) {\n    justify-content: center;\n    align-items: center;\n    flex-shrink: 0;\n    margin-top: 15px;\n    padding-bottom: 15px; }\n\n.home-slide-img {\n  height: 100%;\n  width: auto;\n  transform-origin: center;\n  opacity: 1;\n  max-width: 100%;\n  transform: rotate(90deg); }\n  .home-slide-img.leaving {\n    opacity: 1;\n    animation: 3s imgLeave forwards cubic-bezier(0.19, 1, 0.22, 1); }\n  .home-slide-img.entering {\n    animation: 1s imgEnter forwards cubic-bezier(0.95, 0.05, 0.795, 0.035); }\n\n@keyframes imgEnter {\n  from {\n    opacity: 0.01; }\n  to {\n    opacity: 1; } }\n\n@keyframes imgLeave {\n  to {\n    transform: rotate(90deg) translateY(18%); } }\n\n@media (min-width: 768px) {\n  @keyframes imgLeave {\n    to {\n      transform: translateX(-18%); } }\n  .home-slide-flex {\n    flex-direction: row; }\n  .home-slide-img {\n    max-height: none;\n    transform: rotate(0);\n    height: auto;\n    width: 100%;\n    opacity: 0.01; }\n  .home-slide-box {\n    flex: 1;\n    flex-grow: auto; }\n    .home-slide-box:nth-child(1) {\n      justify-content: center;\n      margin: 0; }\n    .home-slide-box:nth-child(2) {\n      flex: 1;\n      flex-grow: 1;\n      align-items: center;\n      justify-content: center;\n      overflow: initial;\n      box-sizing: border-box; }\n    .home-slide-box:nth-child(3) {\n      padding-bottom: 50px;\n      justify-content: flex-end; } }\n\n.flex-grow-0 {\n  flex-grow: 0; }\n\n.flex-shrink-0 {\n  flex-shrink: 0; }\n\n.flex-grow-1 {\n  flex-grow: 1; }\n\n.flex-shrink-1 {\n  flex-shrink: 1; }\n\n.flex-grow-2 {\n  flex-grow: 2; }\n\n.flex-shrink-2 {\n  flex-shrink: 2; }\n\n.flex-grow-3 {\n  flex-grow: 3; }\n\n.flex-shrink-3 {\n  flex-shrink: 3; }\n\n.flex-grow-4 {\n  flex-grow: 4; }\n\n.flex-shrink-4 {\n  flex-shrink: 4; }\n\n.flex-grow-5 {\n  flex-grow: 5; }\n\n.flex-shrink-5 {\n  flex-shrink: 5; }\n\n.flex-grow-6 {\n  flex-grow: 6; }\n\n.flex-shrink-6 {\n  flex-shrink: 6; }\n\n.flex-grow-7 {\n  flex-grow: 7; }\n\n.flex-shrink-7 {\n  flex-shrink: 7; }\n\n.flex-grow-8 {\n  flex-grow: 8; }\n\n.flex-shrink-8 {\n  flex-shrink: 8; }\n\n.flex-grow-9 {\n  flex-grow: 9; }\n\n.flex-shrink-9 {\n  flex-shrink: 9; }\n\n.flex-grow-10 {\n  flex-grow: 10; }\n\n.flex-shrink-10 {\n  flex-shrink: 10; }\n\n.flex-grow-11 {\n  flex-grow: 11; }\n\n.flex-shrink-11 {\n  flex-shrink: 11; }\n\n.flex-grow-12 {\n  flex-grow: 12; }\n\n.flex-shrink-12 {\n  flex-shrink: 12; }\n\n.flex-parent {\n  display: flex;\n  flex-wrap: nowrap; }\n  .flex-parent.flex-wrap {\n    flex-wrap: wrap; }\n  .flex-parent.inline-flex {\n    display: inline-flex; }\n  .flex-parent.flex-row {\n    flex-direction: row; }\n    .flex-parent.flex-row-reverse {\n      flex-direction: row-reverse; }\n  .flex-parent.flex-col {\n    flex-direction: column; }\n    .flex-parent.flex-col-reverse {\n      flex-direction: column-reverse; }\n  .flex-parent.flex-justify-start {\n    justify-content: flex-start; }\n  .flex-parent.flex-justify-end {\n    justify-content: flex-end; }\n  .flex-parent.flex-justify-center {\n    justify-content: center; }\n  .flex-parent.flex-justify-around {\n    justify-content: space-around; }\n  .flex-parent.flex-justify-between {\n    justify-content: space-between; }\n  .flex-parent.flex-align-center {\n    align-items: center; }\n  .flex-parent.flex-align-end {\n    align-items: flex-end; }\n  .flex-parent.flex-align-base {\n    align-items: baseline; }\n  .flex-parent.flex-align-start {\n    align-items: flex-start; }\n  .flex-parent.flex-align-stretch {\n    align-items: stretch; }\n  .flex-parent .flex-self-start {\n    align-self: flex-start; }\n  .flex-parent .flex-self-end {\n    align-self: flex-end; }\n  .flex-parent .flex-self-center {\n    align-self: flex-center; }\n  .flex-parent .flex-self-base {\n    align-self: baseline; }\n  .flex-parent .flex-self-stretch {\n    align-self: stretch; }\n\n.flex-sm {\n  flex-direction: column; }\n  .flex-sm .right-spacer {\n    margin-right: 0; }\n  .flex-sm .left-spacer {\n    margin-left: 0; }\n\nbody {\n  font-family: \"acumin-pro-semi-condensed\", sans-serif;\n  margin: 0;\n  font-size: 16px;\n  font-size: 1.6rem;\n  color: #2F3036; }\n\nbody, html {\n  width: 100%;\n  height: 100%;\n  margin: 0; }\n\nhtml {\n  font-size: 10px; }\n\nsvg {\n  transition: 0.25s fill; }\n\n#app {\n  height: 100%;\n  min-height: 667px;\n  min-width: 320px; }\n\n.global-padding {\n  padding: 15px;\n  box-sizing: border-box; }\n\n.global-padding-x {\n  padding: 0 30px; }\n\n.global-margin {\n  margin: 15px; }\n\n.layout {\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  min-height: 100%; }\n\n@media (min-width: 600px) {\n  .global-padding {\n    padding: 25px 30px 0;\n    box-sizing: border-box; }\n  .global-margin {\n    margin: 25px 30px 0; } }\n\n.global-nav {\n  height: 35px;\n  width: 100%;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  position: fixed;\n  z-index: 999;\n  background-color: #2F3036;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); }\n  .global-nav.root {\n    background-color: transparent;\n    box-shadow: 0 0 0;\n    transition: .25s background-color, 0.25s 0s box-shadow; }\n  .global-nav, .global-nav * {\n    transition: .25s background-color, .25s .25s box-shadow; }\n  .global-nav a, .global-nav a:visited {\n    color: #FFFFFF; }\n\n.logo {\n  width: 14.656rem;\n  height: 2.5rem; }\n\n.auth-nav-bar {\n  border-right: 2px solid #e1e7ff;\n  width: 170px;\n  padding-right: 25px; }\n  .auth-nav-bar-link {\n    display: block;\n    margin: 25px 0; }\n    .auth-nav-bar-link.active {\n      color: #42D044; }\n\n@keyframes fadeIn {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes moveUp {\n  from {\n    transform: translate(0, 20px); }\n  to {\n    transform: translate(0, 0); } }\n\n.modal {\n  position: fixed;\n  top: 0;\n  background-color: transparent;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  overflow-x: hidden;\n  overflow-y: auto;\n  display: none; }\n  .modal.open {\n    display: block;\n    background-color: rgba(0, 0, 0, 0.5);\n    transition: 0.25s background-color;\n    animation: fadeIn 0.3s forwards; }\n    .modal.open .modal-content {\n      animation: moveUp 0.3s forwards; }\n  .modal-content {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    background-color: #FFFFFF; }\n\nh1, .h1,\nh2, .h2,\nh3, .h3,\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin: 0;\n  font-weight: normal;\n  font-family: \"Bodoni 72\"; }\n\nh1, .h1 {\n  font-size: 38px;\n  font-size: 3.8rem;\n  line-height: 36px; }\n\n.h3, h3 {\n  font-family: \"acumin-pro-semi-condensed\", sans-serif; }\n\np {\n  margin: 0; }\n\n.font-color--white {\n  color: #FFFFFF; }\n\n.font-color--danger {\n  color: #E85353; }\n\n.font-color--dark {\n  color: #2F3036; }\n\n.font-color--light {\n  color: #e1e7ff; }\n\n.font-color--lighter {\n  color: #F0F3FF; }\n\n.font-color--first {\n  color: #803BDD; }\n\n.font-color--second {\n  color: #42D044; }\n\n.font-color--third {\n  color: #6D3BDD; }\n\n.align--center {\n  text-align: center; }\n\n.align--right {\n  text-align: right; }\n\n.align--left {\n  text-align: left; }\n\n.align--justify {\n  text-align: justify; }\n\n@media (min-width: 600px) {\n  h1, .h1 {\n    font-size: 48px;\n    font-size: 4.8rem;\n    line-height: 46px; } }\n\n@keyframes error {\n  0% {\n    box-shadow: 0 0 1px #E85353; }\n  50% {\n    box-shadow: 0px 0px 25px #E85353; }\n  100% {\n    box-shadow: 0 0 0px #E85353; } }\n\n.form-error {\n  animation: error 1s ease-out; }\n\n.form {\n  max-width: 480px;\n  width: 100%; }\n\n.form-group {\n  border: 1px solid #e1e7ff;\n  border-radius: 5px;\n  width: 100%;\n  padding: 15;\n  box-sizing: border-box; }\n\n.form-content {\n  padding: 15;\n  box-sizing: border-box; }\n\n.form-component label {\n  font-size: 14px;\n  font-size: 1.4rem;\n  font-weight: bold;\n  display: block;\n  padding-left: 15; }\n\n.form-component [type=\"text\"], .form-component [type=\"password\"], .form-component [type=\"email\"] {\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #e1e7ff;\n  font-size: 14px;\n  font-size: 1.4rem;\n  padding: 10px; }\n  .form-component [type=\"text\"].input-error, .form-component [type=\"password\"].input-error, .form-component [type=\"email\"].input-error {\n    border-color: #E85353; }\n  .form-component [type=\"text\"]:focus, .form-component [type=\"password\"]:focus, .form-component [type=\"email\"]:focus {\n    outline: none;\n    border-color: #aebeff; }\n\na, a:visited {\n  color: #803BDD;\n  text-decoration: none; }\n\n.product-tile {\n  min-width: 100%;\n  max-width: 450px;\n  flex-grow: 3;\n  box-sizing: border-box;\n  padding: 15px;\n  margin-bottom: 15px; }\n  .favorites .product-tile {\n    max-width: 300px;\n    min-width: 300px; }\n  .product-tile-img img {\n    height: auto;\n    width: 100%; }\n  .product-tile-inner {\n    box-sizing: border-box;\n    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.25); }\n  .product-tile-padding-x {\n    padding: 0 15px; }\n  .product-tile-padding-top {\n    padding-top: 15px; }\n  .product-tile-price-bar {\n    height: 39px;\n    /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#6d3bdd+0,803bdd+100 */\n    background: #6d3bdd;\n    /* Old browsers */\n    background: -moz-linear-gradient(-45deg, #6d3bdd 0%, #803bdd 100%);\n    /* FF3.6-15 */\n    background: -webkit-linear-gradient(-45deg, #6d3bdd 0%, #803bdd 100%);\n    /* Chrome10-25,Safari5.1-6 */\n    background: linear-gradient(135deg, #6d3bdd 0%, #803bdd 100%);\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6d3bdd', endColorstr='#803bdd',GradientType=1 );\n    /* IE6-9 fallback on horizontal gradient */ }\n\n.heart {\n  width: 2.05875rem;\n  height: 2.34375rem; }\n\n@media (min-width: 600px) {\n  .product-tile {\n    min-width: 400px; } }\n\n@media (min-width: 768px) {\n  .product-tile {\n    margin-bottom: 5px; }\n    .product-tile-padding-x {\n      padding: 0 25px; }\n    .product-tile-padding-top {\n      padding-top: 25px; } }\n\n.account-content {\n  padding-left: 25px; }\n\n.cart-item {\n  box-sizing: border-box;\n  width: 100%;\n  border: 1px solid #e1e7ff;\n  border-radius: 5px;\n  display: block;\n  padding: 15px;\n  margin: 15px 0; }\n  .cart-item img {\n    height: auto;\n    width: 100%;\n    border: 1px solid #e1e7ff;\n    border-radius: 5px;\n    padding: 5; }\n  .cart-item .img-wrap {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n\n.cart-wrap {\n  flex-direction: column; }\n\n.cart-wrap-aside {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n@media (min-width: 600px) {\n  .cart-item {\n    height: 150px;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center; }\n    .cart-item .img-wrap {\n      flex-direction: row;\n      align-items: flex-start;\n      justify-content: center; }\n    .cart-item .details {\n      display: flex;\n      justify-content: flex-start;\n      flex-direction: column;\n      height: 100%; }\n    .cart-item img {\n      margin-right: 15px;\n      height: 100%;\n      width: auto; } }\n\n@media (min-width: 768px) {\n  .cart-wrap {\n    flex-direction: row; }\n  .cart-wrap-aside {\n    width: 200px;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-start;\n    margin-right: 25px; }\n  .cart-item {\n    display: flex; }\n    .cart-item:first-child {\n      margin: 0 0 15px 0; }\n    .cart-item img {\n      height: 100%;\n      width: auto; } }\n\n.mobile-col {\n  flex-direction: column; }\n\n@media (min-width: 600px) {\n  .mobile-col {\n    flex-direction: row; }\n  .middle-input {\n    margin: 0 15px; } }\n\n.order-item {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin: 15px 0; }\n  .order-item img {\n    max-width: 150px;\n    width: 100%; }\n\n@media (min-width: 768px) {\n  .order-item img {\n    max-width: 150px; } }\n", ""]);

// exports


/***/ }),
/* 59 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap) {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
  var base64 = new Buffer(JSON.stringify(sourceMap)).toString('base64');
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

  return '/*# ' + data + ' */';
}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "61824af8b7ef06a70ea5daa3c754e5a0.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "44366af9b852b4e80d74e70bfbbba0f5.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "52a71b80ff015f921a945092997426f2.png";

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" style=\"opacity: 0; height: 0; width: 0; display: block;\"><defs><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 147 25\" version=\"1.1\" id=\"archadon-logo\"><title>archadon copy</title><desc>Created with Sketch.</desc><defs></defs><g id=\"--ss-0\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"--ss-1\" transform=\"translate(-21.000000, -22.000000)\" fill-rule=\"nonzero\" fill=\"currentColor\"><path d=\"M38.625,42.5625 C38.541666,43.0416689 38.3958345,43.5416641 38.1875,44.0625 C37.9791655,44.5833359 37.687502,45.062498 37.3125,45.5 C36.937498,45.937502 36.4583364,46.2968735 35.875,46.578125 C35.2916636,46.8593765 34.5729209,47 33.71875,47 C33.0937471,47 32.5468774,46.921876 32.078125,46.765625 C31.6093726,46.609374 31.208335,46.4062515 30.875,46.15625 C30.541665,45.9062485 30.2708345,45.6250015 30.0625,45.3125 C29.8541655,44.9999985 29.697917,44.6875015 29.59375,44.375 C29.1770811,45.2083374 28.5885454,45.8541646 27.828125,46.3125 C27.0677046,46.7708354 26.1770884,47 25.15625,47 C23.9270771,47 22.9270874,46.6666699 22.15625,46 C21.3854126,45.3333301 21,44.3854229 21,43.15625 C21,42.3437461 21.18229,41.6145864 21.546875,40.96875 C21.91146,40.3229136 22.4062471,39.7760439 23.03125,39.328125 C23.6562529,38.8802061 24.3749961,38.5208345 25.1875,38.25 C26.0000039,37.9791655 26.8541621,37.8125005 27.75,37.75 L29.46875,37.625 L29.46875,37.03125 C29.46875,36.1562456 29.453125,35.3229204 29.421875,34.53125 C29.390625,33.7395796 29.3125005,33.0520864 29.1875,32.46875 C29.0624995,31.8854136 28.8645845,31.421877 28.59375,31.078125 C28.3229155,30.734373 27.9479189,30.5625 27.46875,30.5625 C27.322916,30.5625 27.156251,30.583333 26.96875,30.625 C26.885416,30.6458335 26.8125005,30.6666665 26.75,30.6875 L25.09375,36.0625 C25.0312495,36.0833335 24.958334,36.09375 24.875,36.09375 C24.791666,36.09375 24.708334,36.0989585 24.625,36.109375 C24.541666,36.1197915 24.447917,36.125 24.34375,36.125 C24.0937485,36.125 23.8333345,36.0989585 23.5625,36.046875 C23.2916655,35.9947915 23.041668,35.895834 22.8125,35.75 C22.583332,35.604166 22.390626,35.3958345 22.234375,35.125 C22.078124,34.8541655 22,34.5104189 22,34.09375 C22,33.4687471 22.187498,32.8750029 22.5625,32.3125 C22.937502,31.7499971 23.4531216,31.2604189 24.109375,30.84375 C24.7656284,30.4270811 25.5572871,30.0989595 26.484375,29.859375 C27.4114629,29.6197905 28.4166611,29.5 29.5,29.5 C31.6666777,29.5 33.3489521,30.0572861 34.546875,31.171875 C35.7447979,32.2864639 36.34375,34.1458203 36.34375,36.75 L36.34375,43.46875 C36.34375,43.656251 36.359375,43.8489575 36.390625,44.046875 C36.421875,44.2447925 36.510416,44.34375 36.65625,44.34375 C36.760417,44.34375 36.869791,44.2812505 36.984375,44.15625 C37.098959,44.0312495 37.2031245,43.8697925 37.296875,43.671875 C37.3906255,43.4739575 37.4687495,43.260418 37.53125,43.03125 C37.5937505,42.802082 37.6354165,42.5833345 37.65625,42.375 L38.625,42.5625 Z M28.59375,44.375 C28.8020845,44.375 28.999999,44.1354189 29.1875,43.65625 C29.375001,43.1770811 29.46875,42.4479214 29.46875,41.46875 L29.46875,38.34375 L29.40625,38.375 C29.0104146,38.520834 28.6718765,38.8593726 28.390625,39.390625 C28.1093735,39.9218774 27.96875,40.7812441 27.96875,41.96875 C27.96875,42.5520864 28.0156245,43.0989556 28.109375,43.609375 C28.2031255,44.1197944 28.364582,44.375 28.59375,44.375 Z M51.09375,29.5 C52.1562554,29.5 53.0156216,29.8020801 53.671875,30.40625 C54.3281284,31.0104199 54.65625,31.8229116 54.65625,32.84375 C54.65625,33.8437549 54.3541699,34.6458301 53.75,35.25 C53.1458301,35.8541699 52.3437549,36.15625 51.34375,36.15625 C51.2187495,36.15625 51.0937505,36.1510415 50.96875,36.140625 C50.8437495,36.1302085 50.729167,36.1145835 50.625,36.09375 C50.520833,36.09375 50.416667,36.0833335 50.3125,36.0625 L50,31.15625 C49.9791665,31.15625 49.9583335,31.1458335 49.9375,31.125 L49.75,31.125 C49.458332,31.125 49.1875015,31.3020815 48.9375,31.65625 C48.6874985,32.0104185 48.468751,32.4947886 48.28125,33.109375 C48.093749,33.7239614 47.947917,34.4427041 47.84375,35.265625 C47.739583,36.0885459 47.6875,36.9791621 47.6875,37.9375 L47.6875,46.0625 L50.3125,46.0625 L50.3125,46.6875 L38.875,46.6875 L38.875,46.0625 L40.8125,46.0625 L40.8125,30.4375 L38.875,30.4375 L38.875,29.8125 C40.3333408,29.8125 41.6979102,29.7864585 42.96875,29.734375 C44.2395898,29.6822915 45.3541621,29.604167 46.3125,29.5 L46.75,29.6875 L46.90625,35.375 C47.0312505,34.2499941 47.2187485,33.3125039 47.46875,32.5625 C47.7187515,31.8124961 48.0208315,31.2135439 48.375,30.765625 C48.7291685,30.3177061 49.1354146,29.9947925 49.59375,29.796875 C50.0520854,29.5989575 50.5520806,29.5 51.09375,29.5 Z M54.90625,38.625 C54.90625,37.3124937 55.0989565,36.0989639 55.484375,34.984375 C55.8697935,33.8697861 56.4479126,32.9062539 57.21875,32.09375 C57.9895874,31.2812461 58.9583276,30.6458354 60.125,30.1875 C61.2916724,29.7291646 62.6562422,29.5 64.21875,29.5 C66.1979268,29.5 67.7083281,29.8541631 68.75,30.5625 C69.7916719,31.2708369 70.3125,32.2291606 70.3125,33.4375 C70.3125,34.3125044 70.0572944,35.0260391 69.546875,35.578125 C69.0364556,36.1302109 68.3645874,36.40625 67.53125,36.40625 C67.343749,36.40625 67.1458345,36.385417 66.9375,36.34375 C66.854166,36.34375 66.770834,36.3333335 66.6875,36.3125 L65.15625,30.53125 C65.0937495,30.5104165 65.041667,30.5 65,30.5 C64.854166,30.4791665 64.729167,30.46875 64.625,30.46875 C64.0833306,30.46875 63.645835,30.7031226 63.3125,31.171875 C62.979165,31.6406274 62.718751,32.2135381 62.53125,32.890625 C62.343749,33.5677119 62.213542,34.2916626 62.140625,35.0625 C62.067708,35.8333374 62.03125,36.5208301 62.03125,37.125 C62.03125,39.0833433 62.3229136,40.5937446 62.90625,41.65625 C63.4895864,42.7187554 64.3958271,43.25 65.625,43.25 C66.4166704,43.25 67.1562466,43.0260439 67.84375,42.578125 C68.5312534,42.1302061 69.0520815,41.4375049 69.40625,40.5 L70.3125,40.875 C70.083332,41.6250039 69.7395854,42.3697881 69.28125,43.109375 C68.8229146,43.8489619 68.2552119,44.5052056 67.578125,45.078125 C66.9010381,45.6510444 66.1197959,46.1145815 65.234375,46.46875 C64.3489541,46.8229185 63.3645889,47 62.28125,47 C61.1979111,47 60.2031294,46.8072935 59.296875,46.421875 C58.3906206,46.0364565 57.6145864,45.4843784 56.96875,44.765625 C56.3229136,44.0468716 55.81771,43.1718804 55.453125,42.140625 C55.08854,41.1093696 54.90625,39.9375063 54.90625,38.625 Z M91,46.0625 L91,46.6875 L82.40625,46.6875 L82.40625,34.96875 C82.40625,34.1979126 82.3437505,33.5833354 82.21875,33.125 C82.0937495,32.6666646 81.885418,32.4375 81.59375,32.4375 C81.3854155,32.4375 81.192709,32.552082 81.015625,32.78125 C80.838541,33.010418 80.6875005,33.3229146 80.5625,33.71875 C80.4374995,34.1145854 80.3437505,34.5624976 80.28125,35.0625 C80.2187495,35.5625024 80.1875,36.0833306 80.1875,36.625 L80.1875,46.0625 L81.5,46.0625 L81.5,46.6875 L71.375,46.6875 L71.375,46.0625 L73.3125,46.0625 L73.3125,25.4375 L71.375,25.4375 L71.375,24.8125 C72.8750073,24.6874995 74.3124932,24.4166689 75.6875,24 C77.0625068,23.5833311 78.3645771,22.9166714 79.59375,22 L80.1875,22.21875 L80.1875,28.6875 C80.1875,29.3541699 80.1770835,30.0364551 80.15625,30.734375 C80.1354165,31.4322949 80.0416675,32.1354131 79.875,32.84375 C80.5000029,31.5520767 81.2291626,30.6718774 82.0625,30.203125 C82.8958374,29.7343726 83.7812451,29.5 84.71875,29.5 C86.4062583,29.5 87.5885381,30.1249937 88.265625,31.375 C88.9427119,32.6250063 89.28125,34.4166548 89.28125,36.75 L89.28125,46.0625 L91,46.0625 Z M109.4375,42.5625 C109.354166,43.0416689 109.208334,43.5416641 109,44.0625 C108.791666,44.5833359 108.500002,45.062498 108.125,45.5 C107.749998,45.937502 107.270836,46.2968735 106.6875,46.578125 C106.104164,46.8593765 105.385421,47 104.53125,47 C103.906247,47 103.359377,46.921876 102.890625,46.765625 C102.421873,46.609374 102.020835,46.4062515 101.6875,46.15625 C101.354165,45.9062485 101.083334,45.6250015 100.875,45.3125 C100.666666,44.9999985 100.510417,44.6875015 100.40625,44.375 C99.9895811,45.2083374 99.4010454,45.8541646 98.640625,46.3125 C97.8802046,46.7708354 96.9895884,47 95.96875,47 C94.7395771,47 93.7395874,46.6666699 92.96875,46 C92.1979126,45.3333301 91.8125,44.3854229 91.8125,43.15625 C91.8125,42.3437461 91.99479,41.6145864 92.359375,40.96875 C92.72396,40.3229136 93.2187471,39.7760439 93.84375,39.328125 C94.4687529,38.8802061 95.1874961,38.5208345 96,38.25 C96.8125039,37.9791655 97.6666621,37.8125005 98.5625,37.75 L100.28125,37.625 L100.28125,37.03125 C100.28125,36.1562456 100.265625,35.3229204 100.234375,34.53125 C100.203125,33.7395796 100.125,33.0520864 100,32.46875 C99.8749995,31.8854136 99.6770845,31.421877 99.40625,31.078125 C99.1354155,30.734373 98.7604189,30.5625 98.28125,30.5625 C98.135416,30.5625 97.968751,30.583333 97.78125,30.625 C97.697916,30.6458335 97.6250005,30.6666665 97.5625,30.6875 L95.90625,36.0625 C95.8437495,36.0833335 95.770834,36.09375 95.6875,36.09375 C95.604166,36.09375 95.520834,36.0989585 95.4375,36.109375 C95.354166,36.1197915 95.260417,36.125 95.15625,36.125 C94.9062485,36.125 94.6458345,36.0989585 94.375,36.046875 C94.1041655,35.9947915 93.854168,35.895834 93.625,35.75 C93.395832,35.604166 93.203126,35.3958345 93.046875,35.125 C92.890624,34.8541655 92.8125,34.5104189 92.8125,34.09375 C92.8125,33.4687471 92.999998,32.8750029 93.375,32.3125 C93.750002,31.7499971 94.2656216,31.2604189 94.921875,30.84375 C95.5781284,30.4270811 96.3697871,30.0989595 97.296875,29.859375 C98.2239629,29.6197905 99.2291611,29.5 100.3125,29.5 C102.479178,29.5 104.161452,30.0572861 105.359375,31.171875 C106.557298,32.2864639 107.15625,34.1458203 107.15625,36.75 L107.15625,43.46875 C107.15625,43.656251 107.171875,43.8489575 107.203125,44.046875 C107.234375,44.2447925 107.322916,44.34375 107.46875,44.34375 C107.572917,44.34375 107.682291,44.2812505 107.796875,44.15625 C107.911459,44.0312495 108.015625,43.8697925 108.109375,43.671875 C108.203125,43.4739575 108.28125,43.260418 108.34375,43.03125 C108.40625,42.802082 108.447917,42.5833345 108.46875,42.375 L109.4375,42.5625 Z M99.40625,44.375 C99.6145845,44.375 99.812499,44.1354189 100,43.65625 C100.187501,43.1770811 100.28125,42.4479214 100.28125,41.46875 L100.28125,38.34375 L100.21875,38.375 C99.8229146,38.520834 99.4843765,38.8593726 99.203125,39.390625 C98.9218735,39.9218774 98.78125,40.7812441 98.78125,41.96875 C98.78125,42.5520864 98.8281245,43.0989556 98.921875,43.609375 C99.0156255,44.1197944 99.177082,44.375 99.40625,44.375 Z M128.375,46.0625 L128.375,46.6875 L120.75,46.6875 L120.28125,42.875 C119.927082,44.0625059 119.35417,45.0468711 118.5625,45.828125 C117.77083,46.6093789 116.750006,47 115.5,47 C114.749996,47 114.046878,46.833335 113.390625,46.5 C112.734372,46.166665 112.161461,45.6770864 111.671875,45.03125 C111.182289,44.3854136 110.796876,43.5729214 110.515625,42.59375 C110.234374,41.6145786 110.09375,40.4895898 110.09375,39.21875 C110.09375,37.8229097 110.27604,36.5312559 110.640625,35.34375 C111.00521,34.1562441 111.541663,33.1302129 112.25,32.265625 C112.958337,31.4010371 113.843745,30.7239609 114.90625,30.234375 C115.968755,29.7447891 117.187493,29.5 118.5625,29.5 C118.729167,29.5 118.895833,29.5052085 119.0625,29.515625 C119.229167,29.5260415 119.395833,29.53125 119.5625,29.53125 L119.5625,25.4375 L117.625,25.4375 L117.625,24.8125 C119.125007,24.6874995 120.562493,24.4166689 121.9375,24 C123.312507,23.5833311 124.614577,22.9166714 125.84375,22 L126.4375,22.21875 L126.4375,46.0625 L128.375,46.0625 Z M118.3125,44.125 C118.645835,44.125 118.937499,43.7916699 119.1875,43.125 C119.437501,42.4583301 119.5625,41.5104229 119.5625,40.28125 L119.5625,30.46875 C119.020831,30.5312505 118.583335,30.7604146 118.25,31.15625 C117.916665,31.5520854 117.661459,32.0677051 117.484375,32.703125 C117.307291,33.3385449 117.192708,34.0781206 117.140625,34.921875 C117.088542,35.7656294 117.0625,36.6562451 117.0625,37.59375 C117.0625,38.8645898 117.098958,39.9218706 117.171875,40.765625 C117.244792,41.6093794 117.338541,42.2812476 117.453125,42.78125 C117.567709,43.2812524 117.697916,43.6302075 117.84375,43.828125 C117.989584,44.0260425 118.145833,44.125 118.3125,44.125 Z M137.875,47 C135.14582,47 133.08334,46.3072988 131.6875,44.921875 C130.29166,43.5364512 129.59375,41.4062642 129.59375,38.53125 C129.59375,35.6145688 130.328118,33.3802163 131.796875,31.828125 C133.265632,30.2760337 135.479152,29.5 138.4375,29.5 C141.16668,29.5 143.22916,30.1927012 144.625,31.578125 C146.02084,32.9635488 146.71875,35.0937358 146.71875,37.96875 C146.71875,40.8854312 145.984382,43.1197837 144.515625,44.671875 C143.046868,46.2239663 140.833348,47 137.875,47 Z M138.28125,46.0625 C138.697919,46.0625 139.005208,45.5260469 139.203125,44.453125 C139.401042,43.3802031 139.5,41.5625127 139.5,39 C139.5,36.2083193 139.385418,34.0833408 139.15625,32.625 C138.927082,31.1666592 138.552086,30.4375 138.03125,30.4375 C137.614581,30.4375 137.307292,30.9739531 137.109375,32.046875 C136.911458,33.1197969 136.8125,34.9374873 136.8125,37.5 C136.8125,40.2916807 136.927082,42.4166592 137.15625,43.875 C137.385418,45.3333408 137.760414,46.0625 138.28125,46.0625 Z M167.5625,46.0625 L167.5625,46.6875 L158.96875,46.6875 L158.96875,34.96875 C158.96875,34.1979126 158.90625,33.5833354 158.78125,33.125 C158.65625,32.6666646 158.447918,32.4375 158.15625,32.4375 C157.947916,32.4375 157.755209,32.552082 157.578125,32.78125 C157.401041,33.010418 157.25,33.3229146 157.125,33.71875 C157,34.1145854 156.90625,34.5624976 156.84375,35.0625 C156.78125,35.5625024 156.75,36.0833306 156.75,36.625 L156.75,46.0625 L157.5,46.0625 L157.5,46.6875 L147.9375,46.6875 L147.9375,46.0625 L149.875,46.0625 L149.875,30.4375 L147.9375,30.4375 L147.9375,29.8125 C149.437507,29.8125 150.833327,29.7864585 152.125,29.734375 C153.416673,29.6822915 154.562495,29.604167 155.5625,29.5 L156,29.6875 L156.15625,33.84375 C156.385418,32.9895791 156.671873,32.2864609 157.015625,31.734375 C157.359377,31.1822891 157.749998,30.739585 158.1875,30.40625 C158.625002,30.072915 159.098956,29.8385425 159.609375,29.703125 C160.119794,29.5677075 160.645831,29.5 161.1875,29.5 C162.916675,29.5 164.124997,30.1145771 164.8125,31.34375 C165.500003,32.5729229 165.84375,34.3749883 165.84375,36.75 L165.84375,46.0625 L167.5625,46.0625 Z\" id=\"--ss-2\"></path></g></g></svg><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 180 123\" version=\"1.1\" id=\"icon-cart\"><title>Cart Icon</title><desc>Created with Sketch.</desc><defs></defs><g id=\"--ss-3\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"--ss-4\" fill=\"currentColor\"><path d=\"M157.458177,69.2698936 L150.165205,74.8708913 L151.759735,69.2698936 L157.458177,69.2698936 Z M8.02220856,16.1813614 C3.8268176,16.1813614 0.42578125,12.6993885 0.42578125,8.40415726 C0.42578125,4.10892602 3.8268176,0.626953125 8.02220856,0.626953125 L54.7283671,0.626953125 C58.1345358,0.626953125 61.1243048,2.94820211 62.0431674,6.30614534 L79.2724751,69.2698936 L151.759735,69.2698936 L162.27223,32.3433638 L99.8989198,32.3433638 C95.7035288,32.3433638 92.3024924,28.8613909 92.3024924,24.5661596 C92.3024924,20.2709284 95.7035288,16.7889555 99.8989198,16.7889555 L172.398807,16.7889555 C177.462493,16.7889555 181.108692,21.7652689 179.691779,26.742366 L164.751149,79.2233041 C163.80628,82.5422832 160.834899,84.8243018 157.458177,84.8243018 L73.5117206,84.8243018 C70.1055519,84.8243018 67.1157829,82.5030529 66.1969203,79.1451096 L48.9676126,16.1813614 L8.02220856,16.1813614 Z\" id=\"--ss-5\" fill-rule=\"nonzero\"></path><ellipse id=\"--ss-6\" cx=\"83.3804076\" cy=\"106.931768\" rx=\"15.1928546\" ry=\"15.5544083\"></ellipse><ellipse id=\"--ss-7\" cx=\"144.292921\" cy=\"106.931768\" rx=\"15.1928546\" ry=\"15.5544083\"></ellipse></g></g></svg><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 27 24\" version=\"1.1\" id=\"icon-heart-filled\"><title>Group 2</title><desc>Created with Sketch.</desc><defs></defs><g id=\"--ss-8\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"--ss-9\" transform=\"translate(1.000000, 1.000000)\"><g id=\"--ss-10\"></g><g id=\"--ss-11\" stroke=\"currentColor\"><g id=\"--ss-12\" fill=\"currentColor\"><path d=\"M12.5,3.214602 C8.332586,-3.034277 0,0.623987 0,7.431361 C0,12.038395 4.160685,15.322084 7.291854,17.798309 C10.541898,20.370981 11.457025,20.922748 12.5,21.963481 C13.540732,20.922748 14.413242,20.314907 17.708146,17.796066 C20.884174,15.37143 25,11.984564 25,7.379773 C24.997757,0.623987 16.665171,-3.034277 12.5,3.214602 Z\" id=\"--ss-13\"></path></g><path d=\"M12.5,3.214602 C8.332586,-3.034277 0,0.623987 0,7.431361 C0,12.038395 4.160685,15.322084 7.291854,17.798309 C10.541898,20.370981 11.457025,20.922748 12.5,21.963481 C13.540732,20.922748 14.413242,20.314907 17.708146,17.796066 C20.884174,15.37143 25,11.984564 25,7.379773 C24.997757,0.623987 16.665171,-3.034277 12.5,3.214602 Z\" id=\"--ss-14\"></path></g></g></g></svg><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 27 24\" version=\"1.1\" id=\"icon-heart\"><title>Heart</title><desc>Created with Sketch.</desc><defs></defs><g id=\"--ss-15\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\"><g id=\"--ss-16\" transform=\"translate(-416.000000, -1351.000000)\" stroke=\"currentColor\"><g id=\"--ss-17\" transform=\"translate(10.000000, 1065.000000)\"><path d=\"M419.5,290.214602 C415.332586,283.965723 407,287.623987 407,294.431361 C407,299.038395 411.160685,302.322084 414.291854,304.798309 C417.541898,307.370981 418.457025,307.922748 419.5,308.963481 C420.540732,307.922748 421.413242,307.314907 424.708146,304.796066 C427.884174,302.37143 432,298.984564 432,294.379773 C431.997757,287.623987 423.665171,283.965723 419.5,290.214602 Z\" id=\"--ss-18\"></path></g></g></g></svg></defs></svg>"

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/assign");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("react-addons-transition-group");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("velocity-animate");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map