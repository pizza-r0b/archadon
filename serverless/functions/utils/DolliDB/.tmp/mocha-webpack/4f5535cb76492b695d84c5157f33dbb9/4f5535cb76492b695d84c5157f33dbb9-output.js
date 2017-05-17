module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 522);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * The main AWS namespace
 */
var AWS = { util: __webpack_require__(4) };

/**
 * @api private
 * @!macro [new] nobrowser
 *   @note This feature is not supported in the browser environment of the SDK.
 */
var _hidden = {}; _hidden.toString(); // hack to parse macro

module.exports = AWS;

AWS.util.update(AWS, {

  /**
   * @constant
   */
  VERSION: '2.39.0',

  /**
   * @api private
   */
  Signers: {},

  /**
   * @api private
   */
  Protocol: {
    Json: __webpack_require__(57),
    Query: __webpack_require__(100),
    Rest: __webpack_require__(28),
    RestJson: __webpack_require__(101),
    RestXml: __webpack_require__(102)
  },

  /**
   * @api private
   */
  XML: {
    Builder: __webpack_require__(520),
    Parser: null // conditionally set based on environment
  },

  /**
   * @api private
   */
  JSON: {
    Builder: __webpack_require__(55),
    Parser: __webpack_require__(56)
  },

  /**
   * @api private
   */
  Model: {
    Api: __webpack_require__(95),
    Operation: __webpack_require__(97),
    Shape: __webpack_require__(27),
    Paginator: __webpack_require__(98),
    ResourceWaiter: __webpack_require__(99)
  },

  util: __webpack_require__(4),

  /**
   * @api private
   */
  apiLoader: function() { throw new Error('No API loader set'); }
});

__webpack_require__(3);
__webpack_require__(472);

__webpack_require__(91);
__webpack_require__(92);
__webpack_require__(480);
__webpack_require__(481);
__webpack_require__(473);
__webpack_require__(478);

__webpack_require__(54);
__webpack_require__(103);
__webpack_require__(485);
__webpack_require__(493);
__webpack_require__(495);
__webpack_require__(494);
__webpack_require__(514);
__webpack_require__(488);

/**
 * @readonly
 * @return [AWS.SequentialExecutor] a collection of global event listeners that
 *   are attached to every sent request.
 * @see AWS.Request AWS.Request for a list of events to listen for
 * @example Logging the time taken to send a request
 *   AWS.events.on('send', function startSend(resp) {
 *     resp.startTime = new Date().getTime();
 *   }).on('complete', function calculateTime(resp) {
 *     var time = (new Date().getTime() - resp.startTime) / 1000;
 *     console.log('Request took ' + time + ' seconds');
 *   });
 *
 *   new AWS.S3().listBuckets(); // prints 'Request took 0.285 seconds'
 */
AWS.events = new AWS.SequentialExecutor();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(4);

// node.js specific modules
util.crypto.lib = __webpack_require__(162);
util.Buffer = __webpack_require__(161).Buffer;
util.domain = __webpack_require__(718);
util.stream = __webpack_require__(164);
util.url = __webpack_require__(725);
util.querystring = __webpack_require__(722);

var AWS = __webpack_require__(0);

// Use default API loader function
__webpack_require__(2);

// Load the xml2js XML parser
AWS.XML.Parser = __webpack_require__(521);

// Load Node HTTP client
__webpack_require__(486);

// Load custom credential providers
__webpack_require__(474);
__webpack_require__(475);
__webpack_require__(476);
__webpack_require__(477);
__webpack_require__(479);

// Setup default chain providers
// If this changes, please update documentation for
// AWS.CredentialProviderChain.defaultProviders in
// credentials/credential_provider_chain.js
AWS.CredentialProviderChain.defaultProviders = [
  function () { return new AWS.EnvironmentCredentials('AWS'); },
  function () { return new AWS.EnvironmentCredentials('AMAZON'); },
  function () { return new AWS.SharedIniFileCredentials(); },
  function () {
    if (AWS.ECSCredentials.prototype.getECSRelativeUri() !== undefined) {
      return new AWS.ECSCredentials();
    }
    return new AWS.EC2MetadataCredentials();
  }
];

// Update configuration keys
AWS.util.update(AWS.Config.prototype.keys, {
  credentials: function () {
    var credentials = null;
    new AWS.CredentialProviderChain([
      function () { return new AWS.EnvironmentCredentials('AWS'); },
      function () { return new AWS.EnvironmentCredentials('AMAZON'); },
      function () { return new AWS.SharedIniFileCredentials({ disableAssumeRole: true }); }
    ]).resolve(function(err, creds) {
      if (!err) credentials = creds;
    });
    return credentials;
  },
  credentialProvider: function() {
    return new AWS.CredentialProviderChain();
  },
  region: function() {
    return process.env.AWS_REGION || process.env.AMAZON_REGION;
  }
});

// Reset configuration
AWS.config = new AWS.Config();


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);

AWS.apiLoader = function(svc, version) {
  if (!AWS.apiLoader.services.hasOwnProperty(svc)) {
    throw new Error('InvalidService: Failed to load api for ' + svc);
  }
  return AWS.apiLoader.services[svc][version];
};

/**
 * This member of AWS.apiLoader is private, but changing it will necessitate a
 * change to ../scripts/services-table-generator.ts
 */
AWS.apiLoader.services = {};

module.exports = AWS.apiLoader;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var Api = __webpack_require__(95);
var regionConfig = __webpack_require__(491);
var inherit = AWS.util.inherit;
var clientCount = 0;

/**
 * The service class representing an AWS service.
 *
 * @abstract
 *
 * @!attribute apiVersions
 *   @return [Array<String>] the list of API versions supported by this service.
 *   @readonly
 */
AWS.Service = inherit({
  /**
   * Create a new service object with a configuration object
   *
   * @param config [map] a map of configuration options
   */
  constructor: function Service(config) {
    if (!this.loadServiceClass) {
      throw AWS.util.error(new Error(),
        'Service must be constructed with `new\' operator');
    }
    var ServiceClass = this.loadServiceClass(config || {});
    if (ServiceClass) {
      var originalConfig = AWS.util.copy(config);
      var svc = new ServiceClass(config);
      Object.defineProperty(svc, '_originalConfig', {
        get: function() { return originalConfig; },
        enumerable: false,
        configurable: true
      });
      svc._clientId = ++clientCount;
      return svc;
    }
    this.initialize(config);
  },

  /**
   * @api private
   */
  initialize: function initialize(config) {
    var svcConfig = AWS.config[this.serviceIdentifier];

    this.config = new AWS.Config(AWS.config);
    if (svcConfig) this.config.update(svcConfig, true);
    if (config) this.config.update(config, true);

    this.validateService();
    if (!this.config.endpoint) regionConfig(this);

    this.config.endpoint = this.endpointFromTemplate(this.config.endpoint);
    this.setEndpoint(this.config.endpoint);
  },

  /**
   * @api private
   */
  validateService: function validateService() {
  },

  /**
   * @api private
   */
  loadServiceClass: function loadServiceClass(serviceConfig) {
    var config = serviceConfig;
    if (!AWS.util.isEmpty(this.api)) {
      return null;
    } else if (config.apiConfig) {
      return AWS.Service.defineServiceApi(this.constructor, config.apiConfig);
    } else if (!this.constructor.services) {
      return null;
    } else {
      config = new AWS.Config(AWS.config);
      config.update(serviceConfig, true);
      var version = config.apiVersions[this.constructor.serviceIdentifier];
      version = version || config.apiVersion;
      return this.getLatestServiceClass(version);
    }
  },

  /**
   * @api private
   */
  getLatestServiceClass: function getLatestServiceClass(version) {
    version = this.getLatestServiceVersion(version);
    if (this.constructor.services[version] === null) {
      AWS.Service.defineServiceApi(this.constructor, version);
    }

    return this.constructor.services[version];
  },

  /**
   * @api private
   */
  getLatestServiceVersion: function getLatestServiceVersion(version) {
    if (!this.constructor.services || this.constructor.services.length === 0) {
      throw new Error('No services defined on ' +
                      this.constructor.serviceIdentifier);
    }

    if (!version) {
      version = 'latest';
    } else if (AWS.util.isType(version, Date)) {
      version = AWS.util.date.iso8601(version).split('T')[0];
    }

    if (Object.hasOwnProperty(this.constructor.services, version)) {
      return version;
    }

    var keys = Object.keys(this.constructor.services).sort();
    var selectedVersion = null;
    for (var i = keys.length - 1; i >= 0; i--) {
      // versions that end in "*" are not available on disk and can be
      // skipped, so do not choose these as selectedVersions
      if (keys[i][keys[i].length - 1] !== '*') {
        selectedVersion = keys[i];
      }
      if (keys[i].substr(0, 10) <= version) {
        return selectedVersion;
      }
    }

    throw new Error('Could not find ' + this.constructor.serviceIdentifier +
                    ' API to satisfy version constraint `' + version + '\'');
  },

  /**
   * @api private
   */
  api: {},

  /**
   * @api private
   */
  defaultRetryCount: 3,

  /**
   * @api private
   */
  customizeRequests: function customizeRequests(callback) {
    if (!callback) {
      this.customRequestHandler = null;
    } else if (typeof callback === 'function') {
      this.customRequestHandler = callback;
    } else {
      throw new Error('Invalid callback type \'' + typeof callback + '\' provided in customizeRequests');
    }
  },

  /**
   * Calls an operation on a service with the given input parameters.
   *
   * @param operation [String] the name of the operation to call on the service.
   * @param params [map] a map of input options for the operation
   * @callback callback function(err, data)
   *   If a callback is supplied, it is called when a response is returned
   *   from the service.
   *   @param err [Error] the error object returned from the request.
   *     Set to `null` if the request is successful.
   *   @param data [Object] the de-serialized data returned from
   *     the request. Set to `null` if a request error occurs.
   */
  makeRequest: function makeRequest(operation, params, callback) {
    if (typeof params === 'function') {
      callback = params;
      params = null;
    }

    params = params || {};
    if (this.config.params) { // copy only toplevel bound params
      var rules = this.api.operations[operation];
      if (rules) {
        params = AWS.util.copy(params);
        AWS.util.each(this.config.params, function(key, value) {
          if (rules.input.members[key]) {
            if (params[key] === undefined || params[key] === null) {
              params[key] = value;
            }
          }
        });
      }
    }

    var request = new AWS.Request(this, operation, params);
    this.addAllRequestListeners(request);

    if (callback) request.send(callback);
    return request;
  },

  /**
   * Calls an operation on a service with the given input parameters, without
   * any authentication data. This method is useful for "public" API operations.
   *
   * @param operation [String] the name of the operation to call on the service.
   * @param params [map] a map of input options for the operation
   * @callback callback function(err, data)
   *   If a callback is supplied, it is called when a response is returned
   *   from the service.
   *   @param err [Error] the error object returned from the request.
   *     Set to `null` if the request is successful.
   *   @param data [Object] the de-serialized data returned from
   *     the request. Set to `null` if a request error occurs.
   */
  makeUnauthenticatedRequest: function makeUnauthenticatedRequest(operation, params, callback) {
    if (typeof params === 'function') {
      callback = params;
      params = {};
    }

    var request = this.makeRequest(operation, params).toUnauthenticated();
    return callback ? request.send(callback) : request;
  },

  /**
   * Waits for a given state
   *
   * @param state [String] the state on the service to wait for
   * @param params [map] a map of parameters to pass with each request
   * @option params $waiter [map] a map of configuration options for the waiter
   * @option params $waiter.delay [Number] The number of seconds to wait between
   *                                       requests
   * @option params $waiter.maxAttempts [Number] The maximum number of requests
   *                                             to send while waiting
   * @callback callback function(err, data)
   *   If a callback is supplied, it is called when a response is returned
   *   from the service.
   *   @param err [Error] the error object returned from the request.
   *     Set to `null` if the request is successful.
   *   @param data [Object] the de-serialized data returned from
   *     the request. Set to `null` if a request error occurs.
   */
  waitFor: function waitFor(state, params, callback) {
    var waiter = new AWS.ResourceWaiter(this, state);
    return waiter.wait(params, callback);
  },

  /**
   * @api private
   */
  addAllRequestListeners: function addAllRequestListeners(request) {
    var list = [AWS.events, AWS.EventListeners.Core, this.serviceInterface(),
                AWS.EventListeners.CorePost];
    for (var i = 0; i < list.length; i++) {
      if (list[i]) request.addListeners(list[i]);
    }

    // disable parameter validation
    if (!this.config.paramValidation) {
      request.removeListener('validate',
        AWS.EventListeners.Core.VALIDATE_PARAMETERS);
    }

    if (this.config.logger) { // add logging events
      request.addListeners(AWS.EventListeners.Logger);
    }

    this.setupRequestListeners(request);
    // call prototype's customRequestHandler
    if (typeof this.constructor.prototype.customRequestHandler === 'function') {
      this.constructor.prototype.customRequestHandler(request);
    }
    // call instance's customRequestHandler
    if (Object.prototype.hasOwnProperty.call(this, 'customRequestHandler') && typeof this.customRequestHandler === 'function') {
      this.customRequestHandler(request);
    }
  },

  /**
   * Override this method to setup any custom request listeners for each
   * new request to the service.
   *
   * @abstract
   */
  setupRequestListeners: function setupRequestListeners() {
  },

  /**
   * Gets the signer class for a given request
   * @api private
   */
  getSignerClass: function getSignerClass(request) {
    var version;
    // get operation authtype if present
    var operation = request ? request.service.api.operations[request.operation] : null;
    var authtype = operation ? operation.authtype : '';
    if (this.config.signatureVersion) {
      version = this.config.signatureVersion;
    } else if (authtype === 'v4' || authtype === 'v4-unsigned-body') {
      version = 'v4';
    } else {
      version = this.api.signatureVersion;
    }
    return AWS.Signers.RequestSigner.getVersion(version);
  },

  /**
   * @api private
   */
  serviceInterface: function serviceInterface() {
    switch (this.api.protocol) {
      case 'ec2': return AWS.EventListeners.Query;
      case 'query': return AWS.EventListeners.Query;
      case 'json': return AWS.EventListeners.Json;
      case 'rest-json': return AWS.EventListeners.RestJson;
      case 'rest-xml': return AWS.EventListeners.RestXml;
    }
    if (this.api.protocol) {
      throw new Error('Invalid service `protocol\' ' +
        this.api.protocol + ' in API config');
    }
  },

  /**
   * @api private
   */
  successfulResponse: function successfulResponse(resp) {
    return resp.httpResponse.statusCode < 300;
  },

  /**
   * How many times a failed request should be retried before giving up.
   * the defaultRetryCount can be overriden by service classes.
   *
   * @api private
   */
  numRetries: function numRetries() {
    if (this.config.maxRetries !== undefined) {
      return this.config.maxRetries;
    } else {
      return this.defaultRetryCount;
    }
  },

  /**
   * @api private
   */
  retryDelays: function retryDelays(retryCount) {
    return AWS.util.calculateRetryDelay(retryCount, this.config.retryDelayOptions);
  },

  /**
   * @api private
   */
  retryableError: function retryableError(error) {
    if (this.networkingError(error)) return true;
    if (this.expiredCredentialsError(error)) return true;
    if (this.throttledError(error)) return true;
    if (error.statusCode >= 500) return true;
    return false;
  },

  /**
   * @api private
   */
  networkingError: function networkingError(error) {
    return error.code === 'NetworkingError';
  },

  /**
   * @api private
   */
  expiredCredentialsError: function expiredCredentialsError(error) {
    // TODO : this only handles *one* of the expired credential codes
    return (error.code === 'ExpiredTokenException');
  },

  /**
   * @api private
   */
  clockSkewError: function clockSkewError(error) {
    switch (error.code) {
      case 'RequestTimeTooSkewed':
      case 'RequestExpired':
      case 'InvalidSignatureException':
      case 'SignatureDoesNotMatch':
      case 'AuthFailure':
      case 'RequestInTheFuture':
        return true;
      default: return false;
    }
  },

  /**
   * @api private
   */
  throttledError: function throttledError(error) {
    // this logic varies between services
    switch (error.code) {
      case 'ProvisionedThroughputExceededException':
      case 'Throttling':
      case 'ThrottlingException':
      case 'RequestLimitExceeded':
      case 'RequestThrottled':
        return true;
      default:
        return false;
    }
  },

  /**
   * @api private
   */
  endpointFromTemplate: function endpointFromTemplate(endpoint) {
    if (typeof endpoint !== 'string') return endpoint;

    var e = endpoint;
    e = e.replace(/\{service\}/g, this.api.endpointPrefix);
    e = e.replace(/\{region\}/g, this.config.region);
    e = e.replace(/\{scheme\}/g, this.config.sslEnabled ? 'https' : 'http');
    return e;
  },

  /**
   * @api private
   */
  setEndpoint: function setEndpoint(endpoint) {
    this.endpoint = new AWS.Endpoint(endpoint, this.config);
  },

  /**
   * @api private
   */
  paginationConfig: function paginationConfig(operation, throwException) {
    var paginator = this.api.operations[operation].paginator;
    if (!paginator) {
      if (throwException) {
        var e = new Error();
        throw AWS.util.error(e, 'No pagination configuration for ' + operation);
      }
      return null;
    }

    return paginator;
  }
});

AWS.util.update(AWS.Service, {

  /**
   * Adds one method for each operation described in the api configuration
   *
   * @api private
   */
  defineMethods: function defineMethods(svc) {
    AWS.util.each(svc.prototype.api.operations, function iterator(method) {
      if (svc.prototype[method]) return;
      var operation = svc.prototype.api.operations[method];
      if (operation.authtype === 'none') {
        svc.prototype[method] = function (params, callback) {
          return this.makeUnauthenticatedRequest(method, params, callback);
        };
      } else {
        svc.prototype[method] = function (params, callback) {
          return this.makeRequest(method, params, callback);
        };
      }
    });
  },

  /**
   * Defines a new Service class using a service identifier and list of versions
   * including an optional set of features (functions) to apply to the class
   * prototype.
   *
   * @param serviceIdentifier [String] the identifier for the service
   * @param versions [Array<String>] a list of versions that work with this
   *   service
   * @param features [Object] an object to attach to the prototype
   * @return [Class<Service>] the service class defined by this function.
   */
  defineService: function defineService(serviceIdentifier, versions, features) {
    AWS.Service._serviceMap[serviceIdentifier] = true;
    if (!Array.isArray(versions)) {
      features = versions;
      versions = [];
    }

    var svc = inherit(AWS.Service, features || {});

    if (typeof serviceIdentifier === 'string') {
      AWS.Service.addVersions(svc, versions);

      var identifier = svc.serviceIdentifier || serviceIdentifier;
      svc.serviceIdentifier = identifier;
    } else { // defineService called with an API
      svc.prototype.api = serviceIdentifier;
      AWS.Service.defineMethods(svc);
    }

    return svc;
  },

  /**
   * @api private
   */
  addVersions: function addVersions(svc, versions) {
    if (!Array.isArray(versions)) versions = [versions];

    svc.services = svc.services || {};
    for (var i = 0; i < versions.length; i++) {
      if (svc.services[versions[i]] === undefined) {
        svc.services[versions[i]] = null;
      }
    }

    svc.apiVersions = Object.keys(svc.services).sort();
  },

  /**
   * @api private
   */
  defineServiceApi: function defineServiceApi(superclass, version, apiConfig) {
    var svc = inherit(superclass, {
      serviceIdentifier: superclass.serviceIdentifier
    });

    function setApi(api) {
      if (api.isApi) {
        svc.prototype.api = api;
      } else {
        svc.prototype.api = new Api(api);
      }
    }

    if (typeof version === 'string') {
      if (apiConfig) {
        setApi(apiConfig);
      } else {
        try {
          setApi(AWS.apiLoader(superclass.serviceIdentifier, version));
        } catch (err) {
          throw AWS.util.error(err, {
            message: 'Could not find API configuration ' +
              superclass.serviceIdentifier + '-' + version
          });
        }
      }
      if (!Object.prototype.hasOwnProperty.call(superclass.services, version)) {
        superclass.apiVersions = superclass.apiVersions.concat(version).sort();
      }
      superclass.services[version] = svc;
    } else {
      setApi(version);
    }

    AWS.Service.defineMethods(svc);
    return svc;
  },

  /**
   * @api private
   */
  hasService: function(identifier) {
    return Object.prototype.hasOwnProperty.call(AWS.Service._serviceMap, identifier);
  },

  /**
   * @api private
   */
  _serviceMap: {}
});

module.exports = AWS.Service;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint guard-for-in:0 */
var AWS;

/**
 * A set of utility methods for use with the AWS SDK.
 *
 * @!attribute abort
 *   Return this value from an iterator function {each} or {arrayEach}
 *   to break out of the iteration.
 *   @example Breaking out of an iterator function
 *     AWS.util.each({a: 1, b: 2, c: 3}, function(key, value) {
 *       if (key == 'b') return AWS.util.abort;
 *     });
 *   @see each
 *   @see arrayEach
 * @api private
 */
var util = {
  engine: function engine() {
    if (util.isBrowser() && typeof navigator !== 'undefined') {
      return navigator.userAgent;
    } else {
      var engine = process.platform + '/' + process.version;
      if (process.env.AWS_EXECUTION_ENV) {
        engine += ' exec-env/' + process.env.AWS_EXECUTION_ENV;
      }
      return engine;
    }
  },

  userAgent: function userAgent() {
    var name = util.isBrowser() ? 'js' : 'nodejs';
    var agent = 'aws-sdk-' + name + '/' + __webpack_require__(0).VERSION;
    if (name === 'nodejs') agent += ' ' + util.engine();
    return agent;
  },

  isBrowser: function isBrowser() { return process && process.browser; },
  isNode: function isNode() { return !util.isBrowser(); },
  uriEscape: function uriEscape(string) {
    var output = encodeURIComponent(string);
    output = output.replace(/[^A-Za-z0-9_.~\-%]+/g, escape);

    // AWS percent-encodes some extra non-standard characters in a URI
    output = output.replace(/[*]/g, function(ch) {
      return '%' + ch.charCodeAt(0).toString(16).toUpperCase();
    });

    return output;
  },

  uriEscapePath: function uriEscapePath(string) {
    var parts = [];
    util.arrayEach(string.split('/'), function (part) {
      parts.push(util.uriEscape(part));
    });
    return parts.join('/');
  },

  urlParse: function urlParse(url) {
    return util.url.parse(url);
  },

  urlFormat: function urlFormat(url) {
    return util.url.format(url);
  },

  queryStringParse: function queryStringParse(qs) {
    return util.querystring.parse(qs);
  },

  queryParamsToString: function queryParamsToString(params) {
    var items = [];
    var escape = util.uriEscape;
    var sortedKeys = Object.keys(params).sort();

    util.arrayEach(sortedKeys, function(name) {
      var value = params[name];
      var ename = escape(name);
      var result = ename + '=';
      if (Array.isArray(value)) {
        var vals = [];
        util.arrayEach(value, function(item) { vals.push(escape(item)); });
        result = ename + '=' + vals.sort().join('&' + ename + '=');
      } else if (value !== undefined && value !== null) {
        result = ename + '=' + escape(value);
      }
      items.push(result);
    });

    return items.join('&');
  },

  readFileSync: function readFileSync(path) {
    if (util.isBrowser()) return null;
    return __webpack_require__(89).readFileSync(path, 'utf-8');
  },

  base64: {
    encode: function encode64(string) {
      if (typeof string === 'number') {
        throw util.error(new Error('Cannot base64 encode number ' + string));
      }
      if (string === null || typeof string === 'undefined') {
        return string;
      }
      var buf = (typeof util.Buffer.from === 'function' && util.Buffer.from !== Uint8Array.from) ? util.Buffer.from(string) : new util.Buffer(string);
      return buf.toString('base64');
    },

    decode: function decode64(string) {
      if (typeof string === 'number') {
        throw util.error(new Error('Cannot base64 decode number ' + string));
      }
      if (string === null || typeof string === 'undefined') {
        return string;
      }
      return (typeof util.Buffer.from === 'function' && util.Buffer.from !== Uint8Array.from) ? util.Buffer.from(string, 'base64') : new util.Buffer(string, 'base64');
    }

  },

  buffer: {
    toStream: function toStream(buffer) {
      if (!util.Buffer.isBuffer(buffer)) buffer = new util.Buffer(buffer);

      var readable = new (util.stream.Readable)();
      var pos = 0;
      readable._read = function(size) {
        if (pos >= buffer.length) return readable.push(null);

        var end = pos + size;
        if (end > buffer.length) end = buffer.length;
        readable.push(buffer.slice(pos, end));
        pos = end;
      };

      return readable;
    },

    /**
     * Concatenates a list of Buffer objects.
     */
    concat: function(buffers) {
      var length = 0,
          offset = 0,
          buffer = null, i;

      for (i = 0; i < buffers.length; i++) {
        length += buffers[i].length;
      }

      buffer = new util.Buffer(length);

      for (i = 0; i < buffers.length; i++) {
        buffers[i].copy(buffer, offset);
        offset += buffers[i].length;
      }

      return buffer;
    }
  },

  string: {
    byteLength: function byteLength(string) {
      if (string === null || string === undefined) return 0;
      if (typeof string === 'string') string = new util.Buffer(string);

      if (typeof string.byteLength === 'number') {
        return string.byteLength;
      } else if (typeof string.length === 'number') {
        return string.length;
      } else if (typeof string.size === 'number') {
        return string.size;
      } else if (typeof string.path === 'string') {
        return __webpack_require__(89).lstatSync(string.path).size;
      } else {
        throw util.error(new Error('Cannot determine length of ' + string),
          { object: string });
      }
    },

    upperFirst: function upperFirst(string) {
      return string[0].toUpperCase() + string.substr(1);
    },

    lowerFirst: function lowerFirst(string) {
      return string[0].toLowerCase() + string.substr(1);
    }
  },

  ini: {
    parse: function string(ini) {
      var currentSection, map = {};
      util.arrayEach(ini.split(/\r?\n/), function(line) {
        line = line.split(/(^|\s)[;#]/)[0]; // remove comments
        var section = line.match(/^\s*\[([^\[\]]+)\]\s*$/);
        if (section) {
          currentSection = section[1];
        } else if (currentSection) {
          var item = line.match(/^\s*(.+?)\s*=\s*(.+?)\s*$/);
          if (item) {
            map[currentSection] = map[currentSection] || {};
            map[currentSection][item[1]] = item[2];
          }
        }
      });

      return map;
    }
  },

  fn: {
    noop: function() {},

    /**
     * Turn a synchronous function into as "async" function by making it call
     * a callback. The underlying function is called with all but the last argument,
     * which is treated as the callback. The callback is passed passed a first argument
     * of null on success to mimick standard node callbacks.
     */
    makeAsync: function makeAsync(fn, expectedArgs) {
      if (expectedArgs && expectedArgs <= fn.length) {
        return fn;
      }

      return function() {
        var args = Array.prototype.slice.call(arguments, 0);
        var callback = args.pop();
        var result = fn.apply(null, args);
        callback(result);
      };
    }
  },

  /**
   * Date and time utility functions.
   */
  date: {

    /**
     * @return [Date] the current JavaScript date object. Since all
     *   AWS services rely on this date object, you can override
     *   this function to provide a special time value to AWS service
     *   requests.
     */
    getDate: function getDate() {
      if (!AWS) AWS = __webpack_require__(0);
      if (AWS.config.systemClockOffset) { // use offset when non-zero
        return new Date(new Date().getTime() + AWS.config.systemClockOffset);
      } else {
        return new Date();
      }
    },

    /**
     * @return [String] the date in ISO-8601 format
     */
    iso8601: function iso8601(date) {
      if (date === undefined) { date = util.date.getDate(); }
      return date.toISOString().replace(/\.\d{3}Z$/, 'Z');
    },

    /**
     * @return [String] the date in RFC 822 format
     */
    rfc822: function rfc822(date) {
      if (date === undefined) { date = util.date.getDate(); }
      return date.toUTCString();
    },

    /**
     * @return [Integer] the UNIX timestamp value for the current time
     */
    unixTimestamp: function unixTimestamp(date) {
      if (date === undefined) { date = util.date.getDate(); }
      return date.getTime() / 1000;
    },

    /**
     * @param [String,number,Date] date
     * @return [Date]
     */
    from: function format(date) {
      if (typeof date === 'number') {
        return new Date(date * 1000); // unix timestamp
      } else {
        return new Date(date);
      }
    },

    /**
     * Given a Date or date-like value, this function formats the
     * date into a string of the requested value.
     * @param [String,number,Date] date
     * @param [String] formatter Valid formats are:
     #   * 'iso8601'
     #   * 'rfc822'
     #   * 'unixTimestamp'
     * @return [String]
     */
    format: function format(date, formatter) {
      if (!formatter) formatter = 'iso8601';
      return util.date[formatter](util.date.from(date));
    },

    parseTimestamp: function parseTimestamp(value) {
      if (typeof value === 'number') { // unix timestamp (number)
        return new Date(value * 1000);
      } else if (value.match(/^\d+$/)) { // unix timestamp
        return new Date(value * 1000);
      } else if (value.match(/^\d{4}/)) { // iso8601
        return new Date(value);
      } else if (value.match(/^\w{3},/)) { // rfc822
        return new Date(value);
      } else {
        throw util.error(
          new Error('unhandled timestamp format: ' + value),
          {code: 'TimestampParserError'});
      }
    }

  },

  crypto: {
    crc32Table: [
     0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419,
     0x706AF48F, 0xE963A535, 0x9E6495A3, 0x0EDB8832, 0x79DCB8A4,
     0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07,
     0x90BF1D91, 0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE,
     0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7, 0x136C9856,
     0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9,
     0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4,
     0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B,
     0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3,
     0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 0x26D930AC, 0x51DE003A,
     0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599,
     0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
     0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190,
     0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F,
     0x9FBFE4A5, 0xE8B8D433, 0x7807C9A2, 0x0F00F934, 0x9609A88E,
     0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01,
     0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED,
     0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950,
     0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3,
     0xFBD44C65, 0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2,
     0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A,
     0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5,
     0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA, 0xBE0B1010,
     0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
     0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17,
     0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6,
     0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615,
     0x73DC1683, 0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8,
     0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 0xF00F9344,
     0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB,
     0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A,
     0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5,
     0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1,
     0xA6BC5767, 0x3FB506DD, 0x48B2364B, 0xD80D2BDA, 0xAF0A1B4C,
     0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF,
     0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
     0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE,
     0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31,
     0x2CD99E8B, 0x5BDEAE1D, 0x9B64C2B0, 0xEC63F226, 0x756AA39C,
     0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713,
     0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B,
     0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 0x86D3D2D4, 0xF1D4E242,
     0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1,
     0x18B74777, 0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C,
     0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 0xA00AE278,
     0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7,
     0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC, 0x40DF0B66,
     0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
     0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605,
     0xCDD70693, 0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8,
     0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B,
     0x2D02EF8D],

    crc32: function crc32(data) {
      var tbl = util.crypto.crc32Table;
      var crc = 0 ^ -1;

      if (typeof data === 'string') {
        data = new util.Buffer(data);
      }

      for (var i = 0; i < data.length; i++) {
        var code = data.readUInt8(i);
        crc = (crc >>> 8) ^ tbl[(crc ^ code) & 0xFF];
      }
      return (crc ^ -1) >>> 0;
    },

    hmac: function hmac(key, string, digest, fn) {
      if (!digest) digest = 'binary';
      if (digest === 'buffer') { digest = undefined; }
      if (!fn) fn = 'sha256';
      if (typeof string === 'string') string = new util.Buffer(string);
      return util.crypto.lib.createHmac(fn, key).update(string).digest(digest);
    },

    md5: function md5(data, digest, callback) {
      return util.crypto.hash('md5', data, digest, callback);
    },

    sha256: function sha256(data, digest, callback) {
      return util.crypto.hash('sha256', data, digest, callback);
    },

    hash: function(algorithm, data, digest, callback) {
      var hash = util.crypto.createHash(algorithm);
      if (!digest) { digest = 'binary'; }
      if (digest === 'buffer') { digest = undefined; }
      if (typeof data === 'string') data = new util.Buffer(data);
      var sliceFn = util.arraySliceFn(data);
      var isBuffer = util.Buffer.isBuffer(data);
      //Identifying objects with an ArrayBuffer as buffers
      if (util.isBrowser() && typeof ArrayBuffer !== 'undefined' && data && data.buffer instanceof ArrayBuffer) isBuffer = true;

      if (callback && typeof data === 'object' &&
          typeof data.on === 'function' && !isBuffer) {
        data.on('data', function(chunk) { hash.update(chunk); });
        data.on('error', function(err) { callback(err); });
        data.on('end', function() { callback(null, hash.digest(digest)); });
      } else if (callback && sliceFn && !isBuffer &&
                 typeof FileReader !== 'undefined') {
        // this might be a File/Blob
        var index = 0, size = 1024 * 512;
        var reader = new FileReader();
        reader.onerror = function() {
          callback(new Error('Failed to read data.'));
        };
        reader.onload = function() {
          var buf = new util.Buffer(new Uint8Array(reader.result));
          hash.update(buf);
          index += buf.length;
          reader._continueReading();
        };
        reader._continueReading = function() {
          if (index >= data.size) {
            callback(null, hash.digest(digest));
            return;
          }

          var back = index + size;
          if (back > data.size) back = data.size;
          reader.readAsArrayBuffer(sliceFn.call(data, index, back));
        };

        reader._continueReading();
      } else {
        if (util.isBrowser() && typeof data === 'object' && !isBuffer) {
          data = new util.Buffer(new Uint8Array(data));
        }
        var out = hash.update(data).digest(digest);
        if (callback) callback(null, out);
        return out;
      }
    },

    toHex: function toHex(data) {
      var out = [];
      for (var i = 0; i < data.length; i++) {
        out.push(('0' + data.charCodeAt(i).toString(16)).substr(-2, 2));
      }
      return out.join('');
    },

    createHash: function createHash(algorithm) {
      return util.crypto.lib.createHash(algorithm);
    }

  },

  /** @!ignore */

  /* Abort constant */
  abort: {},

  each: function each(object, iterFunction) {
    for (var key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        var ret = iterFunction.call(this, key, object[key]);
        if (ret === util.abort) break;
      }
    }
  },

  arrayEach: function arrayEach(array, iterFunction) {
    for (var idx in array) {
      if (Object.prototype.hasOwnProperty.call(array, idx)) {
        var ret = iterFunction.call(this, array[idx], parseInt(idx, 10));
        if (ret === util.abort) break;
      }
    }
  },

  update: function update(obj1, obj2) {
    util.each(obj2, function iterator(key, item) {
      obj1[key] = item;
    });
    return obj1;
  },

  merge: function merge(obj1, obj2) {
    return util.update(util.copy(obj1), obj2);
  },

  copy: function copy(object) {
    if (object === null || object === undefined) return object;
    var dupe = {};
    // jshint forin:false
    for (var key in object) {
      dupe[key] = object[key];
    }
    return dupe;
  },

  isEmpty: function isEmpty(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }
    return true;
  },

  arraySliceFn: function arraySliceFn(obj) {
    var fn = obj.slice || obj.webkitSlice || obj.mozSlice;
    return typeof fn === 'function' ? fn : null;
  },

  isType: function isType(obj, type) {
    // handle cross-"frame" objects
    if (typeof type === 'function') type = util.typeName(type);
    return Object.prototype.toString.call(obj) === '[object ' + type + ']';
  },

  typeName: function typeName(type) {
    if (Object.prototype.hasOwnProperty.call(type, 'name')) return type.name;
    var str = type.toString();
    var match = str.match(/^\s*function (.+)\(/);
    return match ? match[1] : str;
  },

  error: function error(err, options) {
    var originalError = null;
    if (typeof err.message === 'string' && err.message !== '') {
      if (typeof options === 'string' || (options && options.message)) {
        originalError = util.copy(err);
        originalError.message = err.message;
      }
    }
    err.message = err.message || null;

    if (typeof options === 'string') {
      err.message = options;
    } else if (typeof options === 'object' && options !== null) {
      util.update(err, options);
      if (options.message)
        err.message = options.message;
      if (options.code || options.name)
        err.code = options.code || options.name;
      if (options.stack)
        err.stack = options.stack;
    }

    if (typeof Object.defineProperty === 'function') {
      Object.defineProperty(err, 'name', {writable: true, enumerable: false});
      Object.defineProperty(err, 'message', {enumerable: true});
    }

    err.name = options && options.name || err.name || err.code || 'Error';
    err.time = new Date();

    if (originalError) err.originalError = originalError;

    return err;
  },

  /**
   * @api private
   */
  inherit: function inherit(klass, features) {
    var newObject = null;
    if (features === undefined) {
      features = klass;
      klass = Object;
      newObject = {};
    } else {
      var ctor = function ConstructorWrapper() {};
      ctor.prototype = klass.prototype;
      newObject = new ctor();
    }

    // constructor not supplied, create pass-through ctor
    if (features.constructor === Object) {
      features.constructor = function() {
        if (klass !== Object) {
          return klass.apply(this, arguments);
        }
      };
    }

    features.constructor.prototype = newObject;
    util.update(features.constructor.prototype, features);
    features.constructor.__super__ = klass;
    return features.constructor;
  },

  /**
   * @api private
   */
  mixin: function mixin() {
    var klass = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      // jshint forin:false
      for (var prop in arguments[i].prototype) {
        var fn = arguments[i].prototype[prop];
        if (prop !== 'constructor') {
          klass.prototype[prop] = fn;
        }
      }
    }
    return klass;
  },

  /**
   * @api private
   */
  hideProperties: function hideProperties(obj, props) {
    if (typeof Object.defineProperty !== 'function') return;

    util.arrayEach(props, function (key) {
      Object.defineProperty(obj, key, {
        enumerable: false, writable: true, configurable: true });
    });
  },

  /**
   * @api private
   */
  property: function property(obj, name, value, enumerable, isValue) {
    var opts = {
      configurable: true,
      enumerable: enumerable !== undefined ? enumerable : true
    };
    if (typeof value === 'function' && !isValue) {
      opts.get = value;
    }
    else {
      opts.value = value; opts.writable = true;
    }

    Object.defineProperty(obj, name, opts);
  },

  /**
   * @api private
   */
  memoizedProperty: function memoizedProperty(obj, name, get, enumerable) {
    var cachedValue = null;

    // build enumerable attribute for each value with lazy accessor.
    util.property(obj, name, function() {
      if (cachedValue === null) {
        cachedValue = get();
      }
      return cachedValue;
    }, enumerable);
  },

  /**
   * TODO Remove in major version revision
   * This backfill populates response data without the
   * top-level payload name.
   *
   * @api private
   */
  hoistPayloadMember: function hoistPayloadMember(resp) {
    var req = resp.request;
    var operation = req.operation;
    var output = req.service.api.operations[operation].output;
    if (output.payload) {
      var payloadMember = output.members[output.payload];
      var responsePayload = resp.data[output.payload];
      if (payloadMember.type === 'structure') {
        util.each(responsePayload, function(key, value) {
          util.property(resp.data, key, value, false);
        });
      }
    }
  },

  /**
   * Compute SHA-256 checksums of streams
   *
   * @api private
   */
  computeSha256: function computeSha256(body, done) {
    if (util.isNode()) {
      var Stream = util.stream.Stream;
      var fs = __webpack_require__(89);
      if (body instanceof Stream) {
        if (typeof body.path === 'string') { // assume file object
          var settings = {};
          if (typeof body.start === 'number') {
            settings.start = body.start;
          }
          if (typeof body.end === 'number') {
            settings.end = body.end;
          }
          body = fs.createReadStream(body.path, settings);
        } else { // TODO support other stream types
          return done(new Error('Non-file stream objects are ' +
                                'not supported with SigV4'));
        }
      }
    }

    util.crypto.sha256(body, 'hex', function(err, sha) {
      if (err) done(err);
      else done(null, sha);
    });
  },

  /**
   * @api private
   */
  isClockSkewed: function isClockSkewed(serverTime) {
    if (serverTime) {
      util.property(AWS.config, 'isClockSkewed',
        Math.abs(new Date().getTime() - serverTime) >= 300000, false);
      return AWS.config.isClockSkewed;
    }
  },

  applyClockOffset: function applyClockOffset(serverTime) {
    if (serverTime)
      AWS.config.systemClockOffset = serverTime - new Date().getTime();
  },

  /**
   * @api private
   */
  extractRequestId: function extractRequestId(resp) {
    var requestId = resp.httpResponse.headers['x-amz-request-id'] ||
                     resp.httpResponse.headers['x-amzn-requestid'];

    if (!requestId && resp.data && resp.data.ResponseMetadata) {
      requestId = resp.data.ResponseMetadata.RequestId;
    }

    if (requestId) {
      resp.requestId = requestId;
    }

    if (resp.error) {
      resp.error.requestId = requestId;
    }
  },

  /**
   * @api private
   */
  addPromises: function addPromises(constructors, PromiseDependency) {
    if (PromiseDependency === undefined && AWS && AWS.config) {
      PromiseDependency = AWS.config.getPromisesDependency();
    }
    if (PromiseDependency === undefined && typeof Promise !== 'undefined') {
      PromiseDependency = Promise;
    }
    if (typeof PromiseDependency !== 'function') var deletePromises = true;
    if (!Array.isArray(constructors)) constructors = [constructors];

    for (var ind = 0; ind < constructors.length; ind++) {
      var constructor = constructors[ind];
      if (deletePromises) {
        if (constructor.deletePromisesFromClass) {
          constructor.deletePromisesFromClass();
        }
      } else if (constructor.addPromisesToClass) {
        constructor.addPromisesToClass(PromiseDependency);
      }
    }
  },

  /**
   * @api private
   */
  promisifyMethod: function promisifyMethod(methodName, PromiseDependency) {
    return function promise() {
      var self = this;
      return new PromiseDependency(function(resolve, reject) {
        self[methodName](function(err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    };
  },

  /**
   * @api private
   */
  isDualstackAvailable: function isDualstackAvailable(service) {
    if (!service) return false;
    var metadata = __webpack_require__(297);
    if (typeof service !== 'string') service = service.serviceIdentifier;
    if (typeof service !== 'string' || !metadata.hasOwnProperty(service)) return false;
    return !!metadata[service].dualstackAvailable;
  },

  /**
   * @api private
   */
  calculateRetryDelay: function calculateRetryDelay(retryCount, retryDelayOptions) {
    if (!retryDelayOptions) retryDelayOptions = {};
    var customBackoff = retryDelayOptions.customBackoff || null;
    if (typeof customBackoff === 'function') {
      return customBackoff(retryCount);
    }
    var base = typeof retryDelayOptions.base === 'number' ? retryDelayOptions.base : 100;
    var delay = Math.random() * (Math.pow(2, retryCount) * base);
    return delay;
  },

  /**
   * @api private
   */
  handleRequestWithRetries: function handleRequestWithRetries(httpRequest, options, cb) {
    if (!options) options = {};
    var http = AWS.HttpClient.getInstance();
    var httpOptions = options.httpOptions || {};
    var retryCount = 0;

    var errCallback = function(err) {
      var maxRetries = options.maxRetries || 0;
      if (err && err.code === 'TimeoutError') err.retryable = true;
      if (err && err.retryable && retryCount < maxRetries) {
        retryCount++;
        var delay = util.calculateRetryDelay(retryCount, options.retryDelayOptions);
        setTimeout(sendRequest, delay + (err.retryAfter || 0));
      } else {
        cb(err);
      }
    };

    var sendRequest = function() {
      var data = '';
      http.handleRequest(httpRequest, httpOptions, function(httpResponse) {
        httpResponse.on('data', function(chunk) { data += chunk.toString(); });
        httpResponse.on('end', function() {
          var statusCode = httpResponse.statusCode;
          if (statusCode < 300) {
            cb(null, data);
          } else {
            var retryAfter = parseInt(httpResponse.headers['retry-after'], 10) * 1000 || 0;
            var err = util.error(new Error(),
              { retryable: statusCode >= 500 || statusCode === 429 }
            );
            if (retryAfter && err.retryable) err.retryAfter = retryAfter;
            errCallback(err);
          }
        });
      }, errCallback);
    };

    process.nextTick(sendRequest);
  },

  /**
   * @api private
   */
  uuid: {
    v4: function uuidV4() {
      return __webpack_require__(678).v4();
    }
  }

};

module.exports = util;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(67)('wks')
  , uid        = __webpack_require__(44)
  , Symbol     = __webpack_require__(8).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssign = __webpack_require__(596),
    baseCreate = __webpack_require__(597);

/**
 * Creates an object that inherits from the `prototype` object. If a
 * `properties` object is given, its own enumerable string keyed properties
 * are assigned to the created object.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Object
 * @param {Object} prototype The object to inherit from.
 * @param {Object} [properties] The properties to assign to the object.
 * @returns {Object} Returns the new object.
 * @example
 *
 * function Shape() {
 *   this.x = 0;
 *   this.y = 0;
 * }
 *
 * function Circle() {
 *   Shape.call(this);
 * }
 *
 * Circle.prototype = _.create(Shape.prototype, {
 *   'constructor': Circle
 * });
 *
 * var circle = new Circle;
 * circle instanceof Circle;
 * // => true
 *
 * circle instanceof Shape;
 * // => true
 */
function create(prototype, properties) {
  var result = baseCreate(prototype);
  return properties == null ? result : baseAssign(result, properties);
}

module.exports = create;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 9 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(13)
  , IE8_DOM_DEFINE = __webpack_require__(115)
  , toPrimitive    = __webpack_require__(71)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(137);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(33);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(32)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(116)
  , defined = __webpack_require__(62);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(8)
  , core      = __webpack_require__(6)
  , ctx       = __webpack_require__(31)
  , hide      = __webpack_require__(18)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(11)
  , createDesc = __webpack_require__(35);
module.exports = __webpack_require__(14) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(607),
    getValue = __webpack_require__(630);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### flag(object, key, [value])
 *
 * Get or set a flag value on an object. If a
 * value is provided it will be set, else it will
 * return the currently set value or `undefined` if
 * the value is not set.
 *
 *     utils.flag(this, 'foo', 'bar'); // setter
 *     utils.flag(this, 'foo'); // getter, returns `bar`
 *
 * @param {Object} object constructed Assertion
 * @param {String} key
 * @param {Mixed} value (optional)
 * @namespace Utils
 * @name flag
 * @api private
 */

module.exports = function (obj, key, value) {
  var flags = obj.__flags || (obj.__flags = Object.create(null));
  if (arguments.length === 3) {
    flags[key] = value;
  } else {
    return flags[key];
  }
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
var AWS = __webpack_require__(0);
var Service = __webpack_require__(3);
var apiLoader = __webpack_require__(2);

apiLoader.services['sts'] = {};
AWS.STS = Service.defineService('sts', ['2011-06-15']);
__webpack_require__(511);
Object.defineProperty(apiLoader.services['sts'], '2011-06-15', {
  get: function get() {
    var model = __webpack_require__(361);
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.STS;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CreateDocClient = __webpack_require__(107);

var _CreateDocClient2 = _interopRequireDefault(_CreateDocClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _CreateDocClient2.default)();

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/serverless/functions/utils/DolliDB/src/utils/docClient.js');
}();

;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(123)
  , enumBugKeys = __webpack_require__(64);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLElement, XMLNode, XMLRaw, XMLText, isEmpty, isFunction, isObject,
    hasProp = {}.hasOwnProperty;

  isObject = __webpack_require__(10);

  isFunction = __webpack_require__(53);

  isEmpty = __webpack_require__(672);

  XMLElement = null;

  XMLCData = null;

  XMLComment = null;

  XMLDeclaration = null;

  XMLDocType = null;

  XMLRaw = null;

  XMLText = null;

  module.exports = XMLNode = (function() {
    function XMLNode(parent) {
      this.parent = parent;
      this.options = this.parent.options;
      this.stringify = this.parent.stringify;
      if (XMLElement === null) {
        XMLElement = __webpack_require__(150);
        XMLCData = __webpack_require__(146);
        XMLComment = __webpack_require__(147);
        XMLDeclaration = __webpack_require__(148);
        XMLDocType = __webpack_require__(149);
        XMLRaw = __webpack_require__(691);
        XMLText = __webpack_require__(693);
      }
    }

    XMLNode.prototype.element = function(name, attributes, text) {
      var childNode, item, j, k, key, lastChild, len, len1, ref, val;
      lastChild = null;
      if (attributes == null) {
        attributes = {};
      }
      attributes = attributes.valueOf();
      if (!isObject(attributes)) {
        ref = [attributes, text], text = ref[0], attributes = ref[1];
      }
      if (name != null) {
        name = name.valueOf();
      }
      if (Array.isArray(name)) {
        for (j = 0, len = name.length; j < len; j++) {
          item = name[j];
          lastChild = this.element(item);
        }
      } else if (isFunction(name)) {
        lastChild = this.element(name.apply());
      } else if (isObject(name)) {
        for (key in name) {
          if (!hasProp.call(name, key)) continue;
          val = name[key];
          if (isFunction(val)) {
            val = val.apply();
          }
          if ((isObject(val)) && (isEmpty(val))) {
            val = null;
          }
          if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
            lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
          } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && key.indexOf(this.stringify.convertPIKey) === 0) {
            lastChild = this.instruction(key.substr(this.stringify.convertPIKey.length), val);
          } else if (!this.options.separateArrayItems && Array.isArray(val)) {
            for (k = 0, len1 = val.length; k < len1; k++) {
              item = val[k];
              childNode = {};
              childNode[key] = item;
              lastChild = this.element(childNode);
            }
          } else if (isObject(val)) {
            lastChild = this.element(key);
            lastChild.element(val);
          } else {
            lastChild = this.element(key, val);
          }
        }
      } else {
        if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
          lastChild = this.text(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
          lastChild = this.cdata(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
          lastChild = this.comment(text);
        } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
          lastChild = this.raw(text);
        } else {
          lastChild = this.node(name, attributes, text);
        }
      }
      if (lastChild == null) {
        throw new Error("Could not create any elements with: " + name);
      }
      return lastChild;
    };

    XMLNode.prototype.insertBefore = function(name, attributes, text) {
      var child, i, removed;
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level");
      }
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i);
      child = this.parent.element(name, attributes, text);
      Array.prototype.push.apply(this.parent.children, removed);
      return child;
    };

    XMLNode.prototype.insertAfter = function(name, attributes, text) {
      var child, i, removed;
      if (this.isRoot) {
        throw new Error("Cannot insert elements at root level");
      }
      i = this.parent.children.indexOf(this);
      removed = this.parent.children.splice(i + 1);
      child = this.parent.element(name, attributes, text);
      Array.prototype.push.apply(this.parent.children, removed);
      return child;
    };

    XMLNode.prototype.remove = function() {
      var i, ref;
      if (this.isRoot) {
        throw new Error("Cannot remove the root element");
      }
      i = this.parent.children.indexOf(this);
      [].splice.apply(this.parent.children, [i, i - i + 1].concat(ref = [])), ref;
      return this.parent;
    };

    XMLNode.prototype.node = function(name, attributes, text) {
      var child, ref;
      if (name != null) {
        name = name.valueOf();
      }
      if (attributes == null) {
        attributes = {};
      }
      attributes = attributes.valueOf();
      if (!isObject(attributes)) {
        ref = [attributes, text], text = ref[0], attributes = ref[1];
      }
      child = new XMLElement(this, name, attributes);
      if (text != null) {
        child.text(text);
      }
      this.children.push(child);
      return child;
    };

    XMLNode.prototype.text = function(value) {
      var child;
      child = new XMLText(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.cdata = function(value) {
      var child;
      child = new XMLCData(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.comment = function(value) {
      var child;
      child = new XMLComment(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.raw = function(value) {
      var child;
      child = new XMLRaw(this, value);
      this.children.push(child);
      return this;
    };

    XMLNode.prototype.declaration = function(version, encoding, standalone) {
      var doc, xmldec;
      doc = this.document();
      xmldec = new XMLDeclaration(doc, version, encoding, standalone);
      doc.xmldec = xmldec;
      return doc.root();
    };

    XMLNode.prototype.doctype = function(pubID, sysID) {
      var doc, doctype;
      doc = this.document();
      doctype = new XMLDocType(doc, pubID, sysID);
      doc.doctype = doctype;
      return doctype;
    };

    XMLNode.prototype.up = function() {
      if (this.isRoot) {
        throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
      }
      return this.parent;
    };

    XMLNode.prototype.root = function() {
      var child;
      if (this.isRoot) {
        return this;
      }
      child = this.parent;
      while (!child.isRoot) {
        child = child.parent;
      }
      return child;
    };

    XMLNode.prototype.document = function() {
      return this.root().documentObject;
    };

    XMLNode.prototype.end = function(options) {
      return this.document().toString(options);
    };

    XMLNode.prototype.prev = function() {
      var i;
      if (this.isRoot) {
        throw new Error("Root node has no siblings");
      }
      i = this.parent.children.indexOf(this);
      if (i < 1) {
        throw new Error("Already at the first node");
      }
      return this.parent.children[i - 1];
    };

    XMLNode.prototype.next = function() {
      var i;
      if (this.isRoot) {
        throw new Error("Root node has no siblings");
      }
      i = this.parent.children.indexOf(this);
      if (i === -1 || i === this.parent.children.length - 1) {
        throw new Error("Already at the last node");
      }
      return this.parent.children[i + 1];
    };

    XMLNode.prototype.importXMLBuilder = function(xmlbuilder) {
      var clonedRoot;
      clonedRoot = xmlbuilder.root().clone();
      clonedRoot.parent = this;
      clonedRoot.isRoot = false;
      this.children.push(clonedRoot);
      return this;
    };

    XMLNode.prototype.ele = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLNode.prototype.nod = function(name, attributes, text) {
      return this.node(name, attributes, text);
    };

    XMLNode.prototype.txt = function(value) {
      return this.text(value);
    };

    XMLNode.prototype.dat = function(value) {
      return this.cdata(value);
    };

    XMLNode.prototype.com = function(value) {
      return this.comment(value);
    };

    XMLNode.prototype.doc = function() {
      return this.document();
    };

    XMLNode.prototype.dec = function(version, encoding, standalone) {
      return this.declaration(version, encoding, standalone);
    };

    XMLNode.prototype.dtd = function(pubID, sysID) {
      return this.doctype(pubID, sysID);
    };

    XMLNode.prototype.e = function(name, attributes, text) {
      return this.element(name, attributes, text);
    };

    XMLNode.prototype.n = function(name, attributes, text) {
      return this.node(name, attributes, text);
    };

    XMLNode.prototype.t = function(value) {
      return this.text(value);
    };

    XMLNode.prototype.d = function(value) {
      return this.cdata(value);
    };

    XMLNode.prototype.c = function(value) {
      return this.comment(value);
    };

    XMLNode.prototype.r = function(value) {
      return this.raw(value);
    };

    XMLNode.prototype.u = function() {
      return this.up();
    };

    return XMLNode;

  })();

}).call(this);


/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {

  /**
   * ### config.includeStack
   *
   * User configurable property, influences whether stack trace
   * is included in Assertion error message. Default of false
   * suppresses stack trace in the error message.
   *
   *     chai.config.includeStack = true;  // enable stack on error
   *
   * @param {Boolean}
   * @api public
   */

   includeStack: false,

  /**
   * ### config.showDiff
   *
   * User configurable property, influences whether or not
   * the `showDiff` flag should be included in the thrown
   * AssertionErrors. `false` will always be `false`; `true`
   * will be true when the assertion has requested a diff
   * be shown.
   *
   * @param {Boolean}
   * @api public
   */

  showDiff: true,

  /**
   * ### config.truncateThreshold
   *
   * User configurable property, sets length threshold for actual and
   * expected values in assertion errors. If this threshold is exceeded, for
   * example for large data structures, the value is replaced with something
   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
   *
   * Set it to zero if you want to disable truncating altogether.
   *
   * This is especially userful when doing assertions on arrays: having this
   * set to a reasonable large value makes the failure messages readily
   * inspectable.
   *
   *     chai.config.truncateThreshold = 0;  // disable truncating
   *
   * @param {Number}
   * @api public
   */

  truncateThreshold: 40

};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var Collection = __webpack_require__(96);

var util = __webpack_require__(4);

function property(obj, name, value) {
  if (value !== null && value !== undefined) {
    util.property.apply(this, arguments);
  }
}

function memoizedProperty(obj, name) {
  if (!obj.constructor.prototype[name]) {
    util.memoizedProperty.apply(this, arguments);
  }
}

function Shape(shape, options, memberName) {
  options = options || {};

  property(this, 'shape', shape.shape);
  property(this, 'api', options.api, false);
  property(this, 'type', shape.type);
  property(this, 'enum', shape.enum);
  property(this, 'min', shape.min);
  property(this, 'max', shape.max);
  property(this, 'pattern', shape.pattern);
  property(this, 'location', shape.location || this.location || 'body');
  property(this, 'name', this.name || shape.xmlName || shape.queryName ||
    shape.locationName || memberName);
  property(this, 'isStreaming', shape.streaming || this.isStreaming || false);
  property(this, 'isComposite', shape.isComposite || false);
  property(this, 'isShape', true, false);
  property(this, 'isQueryName', Boolean(shape.queryName), false);
  property(this, 'isLocationName', Boolean(shape.locationName), false);
  property(this, 'isIdempotent', shape.idempotencyToken === true);
  property(this, 'isJsonValue', shape.jsonvalue === true);

  if (options.documentation) {
    property(this, 'documentation', shape.documentation);
    property(this, 'documentationUrl', shape.documentationUrl);
  }

  if (shape.xmlAttribute) {
    property(this, 'isXmlAttribute', shape.xmlAttribute || false);
  }

  // type conversion and parsing
  property(this, 'defaultValue', null);
  this.toWireFormat = function(value) {
    if (value === null || value === undefined) return '';
    return value;
  };
  this.toType = function(value) { return value; };
}

/**
 * @api private
 */
Shape.normalizedTypes = {
  character: 'string',
  double: 'float',
  long: 'integer',
  short: 'integer',
  biginteger: 'integer',
  bigdecimal: 'float',
  blob: 'binary'
};

/**
 * @api private
 */
Shape.types = {
  'structure': StructureShape,
  'list': ListShape,
  'map': MapShape,
  'boolean': BooleanShape,
  'timestamp': TimestampShape,
  'float': FloatShape,
  'integer': IntegerShape,
  'string': StringShape,
  'base64': Base64Shape,
  'binary': BinaryShape
};

Shape.resolve = function resolve(shape, options) {
  if (shape.shape) {
    var refShape = options.api.shapes[shape.shape];
    if (!refShape) {
      throw new Error('Cannot find shape reference: ' + shape.shape);
    }

    return refShape;
  } else {
    return null;
  }
};

Shape.create = function create(shape, options, memberName) {
  if (shape.isShape) return shape;

  var refShape = Shape.resolve(shape, options);
  if (refShape) {
    var filteredKeys = Object.keys(shape);
    if (!options.documentation) {
      filteredKeys = filteredKeys.filter(function(name) {
        return !name.match(/documentation/);
      });
    }
    if (filteredKeys === ['shape']) { // no inline customizations
      return refShape;
    }

    // create an inline shape with extra members
    var InlineShape = function() {
      refShape.constructor.call(this, shape, options, memberName);
    };
    InlineShape.prototype = refShape;
    return new InlineShape();
  } else {
    // set type if not set
    if (!shape.type) {
      if (shape.members) shape.type = 'structure';
      else if (shape.member) shape.type = 'list';
      else if (shape.key) shape.type = 'map';
      else shape.type = 'string';
    }

    // normalize types
    var origType = shape.type;
    if (Shape.normalizedTypes[shape.type]) {
      shape.type = Shape.normalizedTypes[shape.type];
    }

    if (Shape.types[shape.type]) {
      return new Shape.types[shape.type](shape, options, memberName);
    } else {
      throw new Error('Unrecognized shape type: ' + origType);
    }
  }
};

function CompositeShape(shape) {
  Shape.apply(this, arguments);
  property(this, 'isComposite', true);

  if (shape.flattened) {
    property(this, 'flattened', shape.flattened || false);
  }
}

function StructureShape(shape, options) {
  var requiredMap = null, firstInit = !this.isShape;

  CompositeShape.apply(this, arguments);

  if (firstInit) {
    property(this, 'defaultValue', function() { return {}; });
    property(this, 'members', {});
    property(this, 'memberNames', []);
    property(this, 'required', []);
    property(this, 'isRequired', function() { return false; });
  }

  if (shape.members) {
    property(this, 'members', new Collection(shape.members, options, function(name, member) {
      return Shape.create(member, options, name);
    }));
    memoizedProperty(this, 'memberNames', function() {
      return shape.xmlOrder || Object.keys(shape.members);
    });
  }

  if (shape.required) {
    property(this, 'required', shape.required);
    property(this, 'isRequired', function(name) {
      if (!requiredMap) {
        requiredMap = {};
        for (var i = 0; i < shape.required.length; i++) {
          requiredMap[shape.required[i]] = true;
        }
      }

      return requiredMap[name];
    }, false, true);
  }

  property(this, 'resultWrapper', shape.resultWrapper || null);

  if (shape.payload) {
    property(this, 'payload', shape.payload);
  }

  if (typeof shape.xmlNamespace === 'string') {
    property(this, 'xmlNamespaceUri', shape.xmlNamespace);
  } else if (typeof shape.xmlNamespace === 'object') {
    property(this, 'xmlNamespacePrefix', shape.xmlNamespace.prefix);
    property(this, 'xmlNamespaceUri', shape.xmlNamespace.uri);
  }
}

function ListShape(shape, options) {
  var self = this, firstInit = !this.isShape;
  CompositeShape.apply(this, arguments);

  if (firstInit) {
    property(this, 'defaultValue', function() { return []; });
  }

  if (shape.member) {
    memoizedProperty(this, 'member', function() {
      return Shape.create(shape.member, options);
    });
  }

  if (this.flattened) {
    var oldName = this.name;
    memoizedProperty(this, 'name', function() {
      return self.member.name || oldName;
    });
  }
}

function MapShape(shape, options) {
  var firstInit = !this.isShape;
  CompositeShape.apply(this, arguments);

  if (firstInit) {
    property(this, 'defaultValue', function() { return {}; });
    property(this, 'key', Shape.create({type: 'string'}, options));
    property(this, 'value', Shape.create({type: 'string'}, options));
  }

  if (shape.key) {
    memoizedProperty(this, 'key', function() {
      return Shape.create(shape.key, options);
    });
  }
  if (shape.value) {
    memoizedProperty(this, 'value', function() {
      return Shape.create(shape.value, options);
    });
  }
}

function TimestampShape(shape) {
  var self = this;
  Shape.apply(this, arguments);

  if (this.location === 'header') {
    property(this, 'timestampFormat', 'rfc822');
  } else if (shape.timestampFormat) {
    property(this, 'timestampFormat', shape.timestampFormat);
  } else if (this.api) {
    if (this.api.timestampFormat) {
      property(this, 'timestampFormat', this.api.timestampFormat);
    } else {
      switch (this.api.protocol) {
        case 'json':
        case 'rest-json':
          property(this, 'timestampFormat', 'unixTimestamp');
          break;
        case 'rest-xml':
        case 'query':
        case 'ec2':
          property(this, 'timestampFormat', 'iso8601');
          break;
      }
    }
  }

  this.toType = function(value) {
    if (value === null || value === undefined) return null;
    if (typeof value.toUTCString === 'function') return value;
    return typeof value === 'string' || typeof value === 'number' ?
           util.date.parseTimestamp(value) : null;
  };

  this.toWireFormat = function(value) {
    return util.date.format(value, self.timestampFormat);
  };
}

function StringShape() {
  Shape.apply(this, arguments);

  var nullLessProtocols = ['rest-xml', 'query', 'ec2'];
  this.toType = function(value) {
    value = this.api && nullLessProtocols.indexOf(this.api.protocol) > -1 ?
      value || '' : value;
    return this.isJsonValue ? JSON.parse(value) : value;
  };

  this.toWireFormat = function(value) {
    return this.isJsonValue ? JSON.stringify(value) : value;
  };
}

function FloatShape() {
  Shape.apply(this, arguments);

  this.toType = function(value) {
    if (value === null || value === undefined) return null;
    return parseFloat(value);
  };
  this.toWireFormat = this.toType;
}

function IntegerShape() {
  Shape.apply(this, arguments);

  this.toType = function(value) {
    if (value === null || value === undefined) return null;
    return parseInt(value, 10);
  };
  this.toWireFormat = this.toType;
}

function BinaryShape() {
  Shape.apply(this, arguments);
  this.toType = util.base64.decode;
  this.toWireFormat = util.base64.encode;
}

function Base64Shape() {
  BinaryShape.apply(this, arguments);
}

function BooleanShape() {
  Shape.apply(this, arguments);

  this.toType = function(value) {
    if (typeof value === 'boolean') return value;
    if (value === null || value === undefined) return null;
    return value === 'true';
  };
}

/**
 * @api private
 */
Shape.shapes = {
  StructureShape: StructureShape,
  ListShape: ListShape,
  MapShape: MapShape,
  StringShape: StringShape,
  BooleanShape: BooleanShape,
  Base64Shape: Base64Shape
};

module.exports = Shape;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(4);

function populateMethod(req) {
  req.httpRequest.method = req.service.api.operations[req.operation].httpMethod;
}

function generateURI(endpointPath, operationPath, input, params) {
  var uri = [endpointPath, operationPath].join('/');
  uri = uri.replace(/\/+/g, '/');

  var queryString = {}, queryStringSet = false;
  util.each(input.members, function (name, member) {
    var paramValue = params[name];
    if (paramValue === null || paramValue === undefined) return;
    if (member.location === 'uri') {
      var regex = new RegExp('\\{' + member.name + '(\\+)?\\}');
      uri = uri.replace(regex, function(_, plus) {
        var fn = plus ? util.uriEscapePath : util.uriEscape;
        return fn(String(paramValue));
      });
    } else if (member.location === 'querystring') {
      queryStringSet = true;

      if (member.type === 'list') {
        queryString[member.name] = paramValue.map(function(val) {
          return util.uriEscape(String(val));
        });
      } else if (member.type === 'map') {
        util.each(paramValue, function(key, value) {
          if (Array.isArray(value)) {
            queryString[key] = value.map(function(val) {
              return util.uriEscape(String(val));
            });
          } else {
            queryString[key] = util.uriEscape(String(value));
          }
        });
      } else {
        queryString[member.name] = util.uriEscape(String(paramValue));
      }
    }
  });

  if (queryStringSet) {
    uri += (uri.indexOf('?') >= 0 ? '&' : '?');
    var parts = [];
    util.arrayEach(Object.keys(queryString).sort(), function(key) {
      if (!Array.isArray(queryString[key])) {
        queryString[key] = [queryString[key]];
      }
      for (var i = 0; i < queryString[key].length; i++) {
        parts.push(util.uriEscape(String(key)) + '=' + queryString[key][i]);
      }
    });
    uri += parts.join('&');
  }

  return uri;
}

function populateURI(req) {
  var operation = req.service.api.operations[req.operation];
  var input = operation.input;

  var uri = generateURI(req.httpRequest.endpoint.path, operation.httpPath, input, req.params);
  req.httpRequest.path = uri;
}

function populateHeaders(req) {
  var operation = req.service.api.operations[req.operation];
  util.each(operation.input.members, function (name, member) {
    var value = req.params[name];
    if (value === null || value === undefined) return;

    if (member.location === 'headers' && member.type === 'map') {
      util.each(value, function(key, memberValue) {
        req.httpRequest.headers[member.name + key] = memberValue;
      });
    } else if (member.location === 'header') {
      value = member.toWireFormat(value).toString();
      if (member.isJsonValue) {
        value = util.base64.encode(value);
      }
      req.httpRequest.headers[member.name] = value;
    }
  });
}

function buildRequest(req) {
  populateMethod(req);
  populateURI(req);
  populateHeaders(req);
}

function extractError() {
}

function extractData(resp) {
  var req = resp.request;
  var data = {};
  var r = resp.httpResponse;
  var operation = req.service.api.operations[req.operation];
  var output = operation.output;

  // normalize headers names to lower-cased keys for matching
  var headers = {};
  util.each(r.headers, function (k, v) {
    headers[k.toLowerCase()] = v;
  });

  util.each(output.members, function(name, member) {
    var header = (member.name || name).toLowerCase();
    if (member.location === 'headers' && member.type === 'map') {
      data[name] = {};
      var location = member.isLocationName ? member.name : '';
      var pattern = new RegExp('^' + location + '(.+)', 'i');
      util.each(r.headers, function (k, v) {
        var result = k.match(pattern);
        if (result !== null) {
          data[name][result[1]] = v;
        }
      });
    } else if (member.location === 'header') {
      if (headers[header] !== undefined) {
        var value = member.isJsonValue ?
          util.base64.decode(headers[header]) :
          headers[header];
        data[name] = member.toType(value);
      }
    } else if (member.location === 'statusCode') {
      data[name] = parseInt(r.statusCode, 10);
    }
  });

  resp.data = data;
}

module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData,
  generateURI: generateURI
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(544), __esModule: true };

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(60);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(569)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(119)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(47),
    getRawTag = __webpack_require__(628),
    objectToString = __webpack_require__(653);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(53),
    isLength = __webpack_require__(84);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(592),
    baseKeys = __webpack_require__(132),
    isArrayLike = __webpack_require__(38);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _docClient = __webpack_require__(22);

Object.defineProperty(exports, 'docClient', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_docClient).default;
  }
});

var _CreateDocClient = __webpack_require__(107);

Object.defineProperty(exports, 'CreateDocClient', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CreateDocClient).default;
  }
});

var _toPaths = __webpack_require__(110);

Object.defineProperty(exports, 'toPaths', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toPaths).default;
  }
});

var _fromPaths = __webpack_require__(109);

Object.defineProperty(exports, 'fromPaths', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fromPaths).default;
  }
});

var _Put = __webpack_require__(108);

Object.defineProperty(exports, 'Put', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Put).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isObject = exports.isObject = function isObject(obj) {
  return obj && obj.constructor && obj.constructor === Object;
};
var isNumber = exports.isNumber = function isNumber(val) {
  return (/^\d+$/.test(val)
  );
};

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(isObject, 'isObject', '/Users/realseanp1/Projects/archadon/serverless/functions/utils/DolliDB/src/utils/index.js');

  __REACT_HOT_LOADER__.register(isNumber, 'isNumber', '/Users/realseanp1/Projects/archadon/serverless/functions/utils/DolliDB/src/utils/index.js');
}();

;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f
  , has = __webpack_require__(17)
  , TAG = __webpack_require__(5)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(574);
var global        = __webpack_require__(8)
  , hide          = __webpack_require__(18)
  , Iterators     = __webpack_require__(23)
  , TO_STRING_TAG = __webpack_require__(5)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(639),
    listCacheDelete = __webpack_require__(640),
    listCacheGet = __webpack_require__(641),
    listCacheHas = __webpack_require__(642),
    listCacheSet = __webpack_require__(643);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(12);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(52);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(637);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(19);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(85);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(37),
    isObject = __webpack_require__(10);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var inherit = AWS.util.inherit;

/**
 * The endpoint that a service will talk to, for example,
 * `'https://ec2.ap-southeast-1.amazonaws.com'`. If
 * you need to override an endpoint for a service, you can
 * set the endpoint on a service by passing the endpoint
 * object with the `endpoint` option key:
 *
 * ```javascript
 * var ep = new AWS.Endpoint('awsproxy.example.com');
 * var s3 = new AWS.S3({endpoint: ep});
 * s3.service.endpoint.hostname == 'awsproxy.example.com'
 * ```
 *
 * Note that if you do not specify a protocol, the protocol will
 * be selected based on your current {AWS.config} configuration.
 *
 * @!attribute protocol
 *   @return [String] the protocol (http or https) of the endpoint
 *     URL
 * @!attribute hostname
 *   @return [String] the host portion of the endpoint, e.g.,
 *     example.com
 * @!attribute host
 *   @return [String] the host portion of the endpoint including
 *     the port, e.g., example.com:80
 * @!attribute port
 *   @return [Integer] the port of the endpoint
 * @!attribute href
 *   @return [String] the full URL of the endpoint
 */
AWS.Endpoint = inherit({

  /**
   * @overload Endpoint(endpoint)
   *   Constructs a new endpoint given an endpoint URL. If the
   *   URL omits a protocol (http or https), the default protocol
   *   set in the global {AWS.config} will be used.
   *   @param endpoint [String] the URL to construct an endpoint from
   */
  constructor: function Endpoint(endpoint, config) {
    AWS.util.hideProperties(this, ['slashes', 'auth', 'hash', 'search', 'query']);

    if (typeof endpoint === 'undefined' || endpoint === null) {
      throw new Error('Invalid endpoint: ' + endpoint);
    } else if (typeof endpoint !== 'string') {
      return AWS.util.copy(endpoint);
    }

    if (!endpoint.match(/^http/)) {
      var useSSL = config && config.sslEnabled !== undefined ?
        config.sslEnabled : AWS.config.sslEnabled;
      endpoint = (useSSL ? 'https' : 'http') + '://' + endpoint;
    }

    AWS.util.update(this, AWS.util.urlParse(endpoint));

    // Ensure the port property is set as an integer
    if (this.port) {
      this.port = parseInt(this.port, 10);
    } else {
      this.port = this.protocol === 'https:' ? 443 : 80;
    }
  }

});

/**
 * The low level HTTP request object, encapsulating all HTTP header
 * and body data sent by a service request.
 *
 * @!attribute method
 *   @return [String] the HTTP method of the request
 * @!attribute path
 *   @return [String] the path portion of the URI, e.g.,
 *     "/list/?start=5&num=10"
 * @!attribute headers
 *   @return [map<String,String>]
 *     a map of header keys and their respective values
 * @!attribute body
 *   @return [String] the request body payload
 * @!attribute endpoint
 *   @return [AWS.Endpoint] the endpoint for the request
 * @!attribute region
 *   @api private
 *   @return [String] the region, for signing purposes only.
 */
AWS.HttpRequest = inherit({

  /**
   * @api private
   */
  constructor: function HttpRequest(endpoint, region) {
    endpoint = new AWS.Endpoint(endpoint);
    this.method = 'POST';
    this.path = endpoint.path || '/';
    this.headers = {};
    this.body = '';
    this.endpoint = endpoint;
    this.region = region;
    this._userAgent = '';
    this.setUserAgent();
  },

  /**
   * @api private
   */
  setUserAgent: function setUserAgent() {
    this._userAgent = this.headers[this.getUserAgentHeaderName()] = AWS.util.userAgent();
  },

  getUserAgentHeaderName: function getUserAgentHeaderName() {
    var prefix = AWS.util.isBrowser() ? 'X-Amz-' : '';
    return prefix + 'User-Agent';
  },

  /**
   * @api private
   */
  appendToUserAgent: function appendToUserAgent(agentPartial) {
    if (typeof agentPartial === 'string' && agentPartial) {
      this._userAgent += ' ' + agentPartial;
    }
    this.headers[this.getUserAgentHeaderName()] = this._userAgent;
  },

  /**
   * @api private
   */
  getUserAgent: function getUserAgent() {
    return this._userAgent;
  },

  /**
   * @return [String] the part of the {path} excluding the
   *   query string
   */
  pathname: function pathname() {
    return this.path.split('?', 1)[0];
  },

  /**
   * @return [String] the query string portion of the {path}
   */
  search: function search() {
    var query = this.path.split('?', 2)[1];
    if (query) {
      query = AWS.util.queryStringParse(query);
      return AWS.util.queryParamsToString(query);
    }
    return '';
  }

});

/**
 * The low level HTTP response object, encapsulating all HTTP header
 * and body data returned from the request.
 *
 * @!attribute statusCode
 *   @return [Integer] the HTTP status code of the response (e.g., 200, 404)
 * @!attribute headers
 *   @return [map<String,String>]
 *      a map of response header keys and their respective values
 * @!attribute body
 *   @return [String] the response body payload
 * @!attribute [r] streaming
 *   @return [Boolean] whether this response is being streamed at a low-level.
 *     Defaults to `false` (buffered reads). Do not modify this manually, use
 *     {createUnbufferedStream} to convert the stream to unbuffered mode
 *     instead.
 */
AWS.HttpResponse = inherit({

  /**
   * @api private
   */
  constructor: function HttpResponse() {
    this.statusCode = undefined;
    this.headers = {};
    this.body = undefined;
    this.streaming = false;
    this.stream = null;
  },

  /**
   * Disables buffering on the HTTP response and returns the stream for reading.
   * @return [Stream, XMLHttpRequest, null] the underlying stream object.
   *   Use this object to directly read data off of the stream.
   * @note This object is only available after the {AWS.Request~httpHeaders}
   *   event has fired. This method must be called prior to
   *   {AWS.Request~httpData}.
   * @example Taking control of a stream
   *   request.on('httpHeaders', function(statusCode, headers) {
   *     if (statusCode < 300) {
   *       if (headers.etag === 'xyz') {
   *         // pipe the stream, disabling buffering
   *         var stream = this.response.httpResponse.createUnbufferedStream();
   *         stream.pipe(process.stdout);
   *       } else { // abort this request and set a better error message
   *         this.abort();
   *         this.response.error = new Error('Invalid ETag');
   *       }
   *     }
   *   }).send(console.log);
   */
  createUnbufferedStream: function createUnbufferedStream() {
    this.streaming = true;
    return this.stream;
  }
});


AWS.HttpClient = inherit({});

/**
 * @api private
 */
AWS.HttpClient.getInstance = function getInstance() {
  if (this.singleton === undefined) {
    this.singleton = new this();
  }
  return this.singleton;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(4);

function JsonBuilder() { }

JsonBuilder.prototype.build = function(value, shape) {
  return JSON.stringify(translate(value, shape));
};

function translate(value, shape) {
  if (!shape || value === undefined || value === null) return undefined;

  switch (shape.type) {
    case 'structure': return translateStructure(value, shape);
    case 'map': return translateMap(value, shape);
    case 'list': return translateList(value, shape);
    default: return translateScalar(value, shape);
  }
}

function translateStructure(structure, shape) {
  var struct = {};
  util.each(structure, function(name, value) {
    var memberShape = shape.members[name];
    if (memberShape) {
      if (memberShape.location !== 'body') return;
      var locationName = memberShape.isLocationName ? memberShape.name : name;
      var result = translate(value, memberShape);
      if (result !== undefined) struct[locationName] = result;
    }
  });
  return struct;
}

function translateList(list, shape) {
  var out = [];
  util.arrayEach(list, function(value) {
    var result = translate(value, shape.member);
    if (result !== undefined) out.push(result);
  });
  return out;
}

function translateMap(map, shape) {
  var out = {};
  util.each(map, function(key, value) {
    var result = translate(value, shape.value);
    if (result !== undefined) out[key] = result;
  });
  return out;
}

function translateScalar(value, shape) {
  return shape.toWireFormat(value);
}

module.exports = JsonBuilder;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(4);

function JsonParser() { }

JsonParser.prototype.parse = function(value, shape) {
  return translate(JSON.parse(value), shape);
};

function translate(value, shape) {
  if (!shape || value === undefined) return undefined;

  switch (shape.type) {
    case 'structure': return translateStructure(value, shape);
    case 'map': return translateMap(value, shape);
    case 'list': return translateList(value, shape);
    default: return translateScalar(value, shape);
  }
}

function translateStructure(structure, shape) {
  if (structure == null) return undefined;

  var struct = {};
  var shapeMembers = shape.members;
  util.each(shapeMembers, function(name, memberShape) {
    var locationName = memberShape.isLocationName ? memberShape.name : name;
    if (Object.prototype.hasOwnProperty.call(structure, locationName)) {
      var value = structure[locationName];
      var result = translate(value, memberShape);
      if (result !== undefined) struct[name] = result;
    }
  });
  return struct;
}

function translateList(list, shape) {
  if (list == null) return undefined;

  var out = [];
  util.arrayEach(list, function(value) {
    var result = translate(value, shape.member);
    if (result === undefined) out.push(null);
    else out.push(result);
  });
  return out;
}

function translateMap(map, shape) {
  if (map == null) return undefined;

  var out = {};
  util.each(map, function(key, value) {
    var result = translate(value, shape.value);
    if (result === undefined) out[key] = null;
    else out[key] = result;
  });
  return out;
}

function translateScalar(value, shape) {
  return shape.toType(value);
}

module.exports = JsonParser;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(4);
var JsonBuilder = __webpack_require__(55);
var JsonParser = __webpack_require__(56);

function buildRequest(req) {
  var httpRequest = req.httpRequest;
  var api = req.service.api;
  var target = api.targetPrefix + '.' + api.operations[req.operation].name;
  var version = api.jsonVersion || '1.0';
  var input = api.operations[req.operation].input;
  var builder = new JsonBuilder();

  if (version === 1) version = '1.0';
  httpRequest.body = builder.build(req.params || {}, input);
  httpRequest.headers['Content-Type'] = 'application/x-amz-json-' + version;
  httpRequest.headers['X-Amz-Target'] = target;
}

function extractError(resp) {
  var error = {};
  var httpResponse = resp.httpResponse;

  error.code = httpResponse.headers['x-amzn-errortype'] || 'UnknownError';
  if (typeof error.code === 'string') {
    error.code = error.code.split(':')[0];
  }

  if (httpResponse.body.length > 0) {
    try {
      var e = JSON.parse(httpResponse.body.toString());
      if (e.__type || e.code) {
        error.code = (e.__type || e.code).split('#').pop();
      }
      if (error.code === 'RequestEntityTooLarge') {
        error.message = 'Request body must be less than 1 MB';
      } else {
        error.message = (e.message || e.Message || null);
      }
    } catch (e) {
      error.statusCode = httpResponse.statusCode;
      error.message = httpResponse.statusMessage;
    }
  } else {
    error.statusCode = httpResponse.statusCode;
    error.message = httpResponse.statusCode.toString();
  }

  resp.error = util.error(new Error(), error);
}

function extractData(resp) {
  var body = resp.httpResponse.body.toString() || '{}';
  if (resp.request.service.config.convertResponseTypes === false) {
    resp.data = JSON.parse(body);
  } else {
    var operation = resp.request.service.api.operations[resp.request.operation];
    var shape = operation.output || {};
    var parser = new JsonParser();
    resp.data = parser.parse(body, shape);
  }
}

module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(541), __esModule: true };

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(533);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(30)
  , TAG = __webpack_require__(5)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 62 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(33)
  , document = __webpack_require__(8).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 65 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(67)('keys')
  , uid    = __webpack_require__(44);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(68)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(62);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(33);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(8)
  , core           = __webpack_require__(6)
  , LIBRARY        = __webpack_require__(42)
  , wksExt         = __webpack_require__(73)
  , defineProperty = __webpack_require__(11).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(5);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(61)
  , ITERATOR  = __webpack_require__(5)('iterator')
  , Iterators = __webpack_require__(23);
module.exports = __webpack_require__(6).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

(function(exports) {
  "use strict";

  function isArray(obj) {
    if (obj !== null) {
      return Object.prototype.toString.call(obj) === "[object Array]";
    } else {
      return false;
    }
  }

  function isObject(obj) {
    if (obj !== null) {
      return Object.prototype.toString.call(obj) === "[object Object]";
    } else {
      return false;
    }
  }

  function strictDeepEqual(first, second) {
    // Check the scalar case first.
    if (first === second) {
      return true;
    }

    // Check if they are the same type.
    var firstType = Object.prototype.toString.call(first);
    if (firstType !== Object.prototype.toString.call(second)) {
      return false;
    }
    // We know that first and second have the same type so we can just check the
    // first type from now on.
    if (isArray(first) === true) {
      // Short circuit if they're not the same length;
      if (first.length !== second.length) {
        return false;
      }
      for (var i = 0; i < first.length; i++) {
        if (strictDeepEqual(first[i], second[i]) === false) {
          return false;
        }
      }
      return true;
    }
    if (isObject(first) === true) {
      // An object is equal if it has the same key/value pairs.
      var keysSeen = {};
      for (var key in first) {
        if (hasOwnProperty.call(first, key)) {
          if (strictDeepEqual(first[key], second[key]) === false) {
            return false;
          }
          keysSeen[key] = true;
        }
      }
      // Now check that there aren't any keys in second that weren't
      // in first.
      for (var key2 in second) {
        if (hasOwnProperty.call(second, key2)) {
          if (keysSeen[key2] !== true) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  }

  function isFalse(obj) {
    // From the spec:
    // A false value corresponds to the following values:
    // Empty list
    // Empty object
    // Empty string
    // False boolean
    // null value

    // First check the scalar values.
    if (obj === "" || obj === false || obj === null) {
        return true;
    } else if (isArray(obj) && obj.length === 0) {
        // Check for an empty array.
        return true;
    } else if (isObject(obj)) {
        // Check for an empty object.
        for (var key in obj) {
            // If there are any keys, then
            // the object is not empty so the object
            // is not false.
            if (obj.hasOwnProperty(key)) {
              return false;
            }
        }
        return true;
    } else {
        return false;
    }
  }

  function objValues(obj) {
    var keys = Object.keys(obj);
    var values = [];
    for (var i = 0; i < keys.length; i++) {
      values.push(obj[keys[i]]);
    }
    return values;
  }

  function merge(a, b) {
      var merged = {};
      for (var key in a) {
          merged[key] = a[key];
      }
      for (var key2 in b) {
          merged[key2] = b[key2];
      }
      return merged;
  }

  var trimLeft;
  if (typeof String.prototype.trimLeft === "function") {
    trimLeft = function(str) {
      return str.trimLeft();
    };
  } else {
    trimLeft = function(str) {
      return str.match(/^\s*(.*)/)[1];
    };
  }

  // Type constants used to define functions.
  var TYPE_NUMBER = 0;
  var TYPE_ANY = 1;
  var TYPE_STRING = 2;
  var TYPE_ARRAY = 3;
  var TYPE_OBJECT = 4;
  var TYPE_BOOLEAN = 5;
  var TYPE_EXPREF = 6;
  var TYPE_NULL = 7;
  var TYPE_ARRAY_NUMBER = 8;
  var TYPE_ARRAY_STRING = 9;

  var TOK_EOF = "EOF";
  var TOK_UNQUOTEDIDENTIFIER = "UnquotedIdentifier";
  var TOK_QUOTEDIDENTIFIER = "QuotedIdentifier";
  var TOK_RBRACKET = "Rbracket";
  var TOK_RPAREN = "Rparen";
  var TOK_COMMA = "Comma";
  var TOK_COLON = "Colon";
  var TOK_RBRACE = "Rbrace";
  var TOK_NUMBER = "Number";
  var TOK_CURRENT = "Current";
  var TOK_EXPREF = "Expref";
  var TOK_PIPE = "Pipe";
  var TOK_OR = "Or";
  var TOK_AND = "And";
  var TOK_EQ = "EQ";
  var TOK_GT = "GT";
  var TOK_LT = "LT";
  var TOK_GTE = "GTE";
  var TOK_LTE = "LTE";
  var TOK_NE = "NE";
  var TOK_FLATTEN = "Flatten";
  var TOK_STAR = "Star";
  var TOK_FILTER = "Filter";
  var TOK_DOT = "Dot";
  var TOK_NOT = "Not";
  var TOK_LBRACE = "Lbrace";
  var TOK_LBRACKET = "Lbracket";
  var TOK_LPAREN= "Lparen";
  var TOK_LITERAL= "Literal";

  // The "&", "[", "<", ">" tokens
  // are not in basicToken because
  // there are two token variants
  // ("&&", "[?", "<=", ">=").  This is specially handled
  // below.

  var basicTokens = {
    ".": TOK_DOT,
    "*": TOK_STAR,
    ",": TOK_COMMA,
    ":": TOK_COLON,
    "{": TOK_LBRACE,
    "}": TOK_RBRACE,
    "]": TOK_RBRACKET,
    "(": TOK_LPAREN,
    ")": TOK_RPAREN,
    "@": TOK_CURRENT
  };

  var operatorStartToken = {
      "<": true,
      ">": true,
      "=": true,
      "!": true
  };

  var skipChars = {
      " ": true,
      "\t": true,
      "\n": true
  };


  function isAlpha(ch) {
      return (ch >= "a" && ch <= "z") ||
             (ch >= "A" && ch <= "Z") ||
             ch === "_";
  }

  function isNum(ch) {
      return (ch >= "0" && ch <= "9") ||
             ch === "-";
  }
  function isAlphaNum(ch) {
      return (ch >= "a" && ch <= "z") ||
             (ch >= "A" && ch <= "Z") ||
             (ch >= "0" && ch <= "9") ||
             ch === "_";
  }

  function Lexer() {
  }
  Lexer.prototype = {
      tokenize: function(stream) {
          var tokens = [];
          this._current = 0;
          var start;
          var identifier;
          var token;
          while (this._current < stream.length) {
              if (isAlpha(stream[this._current])) {
                  start = this._current;
                  identifier = this._consumeUnquotedIdentifier(stream);
                  tokens.push({type: TOK_UNQUOTEDIDENTIFIER,
                               value: identifier,
                               start: start});
              } else if (basicTokens[stream[this._current]] !== undefined) {
                  tokens.push({type: basicTokens[stream[this._current]],
                              value: stream[this._current],
                              start: this._current});
                  this._current++;
              } else if (isNum(stream[this._current])) {
                  token = this._consumeNumber(stream);
                  tokens.push(token);
              } else if (stream[this._current] === "[") {
                  // No need to increment this._current.  This happens
                  // in _consumeLBracket
                  token = this._consumeLBracket(stream);
                  tokens.push(token);
              } else if (stream[this._current] === "\"") {
                  start = this._current;
                  identifier = this._consumeQuotedIdentifier(stream);
                  tokens.push({type: TOK_QUOTEDIDENTIFIER,
                               value: identifier,
                               start: start});
              } else if (stream[this._current] === "'") {
                  start = this._current;
                  identifier = this._consumeRawStringLiteral(stream);
                  tokens.push({type: TOK_LITERAL,
                               value: identifier,
                               start: start});
              } else if (stream[this._current] === "`") {
                  start = this._current;
                  var literal = this._consumeLiteral(stream);
                  tokens.push({type: TOK_LITERAL,
                               value: literal,
                               start: start});
              } else if (operatorStartToken[stream[this._current]] !== undefined) {
                  tokens.push(this._consumeOperator(stream));
              } else if (skipChars[stream[this._current]] !== undefined) {
                  // Ignore whitespace.
                  this._current++;
              } else if (stream[this._current] === "&") {
                  start = this._current;
                  this._current++;
                  if (stream[this._current] === "&") {
                      this._current++;
                      tokens.push({type: TOK_AND, value: "&&", start: start});
                  } else {
                      tokens.push({type: TOK_EXPREF, value: "&", start: start});
                  }
              } else if (stream[this._current] === "|") {
                  start = this._current;
                  this._current++;
                  if (stream[this._current] === "|") {
                      this._current++;
                      tokens.push({type: TOK_OR, value: "||", start: start});
                  } else {
                      tokens.push({type: TOK_PIPE, value: "|", start: start});
                  }
              } else {
                  var error = new Error("Unknown character:" + stream[this._current]);
                  error.name = "LexerError";
                  throw error;
              }
          }
          return tokens;
      },

      _consumeUnquotedIdentifier: function(stream) {
          var start = this._current;
          this._current++;
          while (this._current < stream.length && isAlphaNum(stream[this._current])) {
              this._current++;
          }
          return stream.slice(start, this._current);
      },

      _consumeQuotedIdentifier: function(stream) {
          var start = this._current;
          this._current++;
          var maxLength = stream.length;
          while (stream[this._current] !== "\"" && this._current < maxLength) {
              // You can escape a double quote and you can escape an escape.
              var current = this._current;
              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
                                               stream[current + 1] === "\"")) {
                  current += 2;
              } else {
                  current++;
              }
              this._current = current;
          }
          this._current++;
          return JSON.parse(stream.slice(start, this._current));
      },

      _consumeRawStringLiteral: function(stream) {
          var start = this._current;
          this._current++;
          var maxLength = stream.length;
          while (stream[this._current] !== "'" && this._current < maxLength) {
              // You can escape a single quote and you can escape an escape.
              var current = this._current;
              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
                                               stream[current + 1] === "'")) {
                  current += 2;
              } else {
                  current++;
              }
              this._current = current;
          }
          this._current++;
          var literal = stream.slice(start + 1, this._current - 1);
          return literal.replace("\\'", "'");
      },

      _consumeNumber: function(stream) {
          var start = this._current;
          this._current++;
          var maxLength = stream.length;
          while (isNum(stream[this._current]) && this._current < maxLength) {
              this._current++;
          }
          var value = parseInt(stream.slice(start, this._current));
          return {type: TOK_NUMBER, value: value, start: start};
      },

      _consumeLBracket: function(stream) {
          var start = this._current;
          this._current++;
          if (stream[this._current] === "?") {
              this._current++;
              return {type: TOK_FILTER, value: "[?", start: start};
          } else if (stream[this._current] === "]") {
              this._current++;
              return {type: TOK_FLATTEN, value: "[]", start: start};
          } else {
              return {type: TOK_LBRACKET, value: "[", start: start};
          }
      },

      _consumeOperator: function(stream) {
          var start = this._current;
          var startingChar = stream[start];
          this._current++;
          if (startingChar === "!") {
              if (stream[this._current] === "=") {
                  this._current++;
                  return {type: TOK_NE, value: "!=", start: start};
              } else {
                return {type: TOK_NOT, value: "!", start: start};
              }
          } else if (startingChar === "<") {
              if (stream[this._current] === "=") {
                  this._current++;
                  return {type: TOK_LTE, value: "<=", start: start};
              } else {
                  return {type: TOK_LT, value: "<", start: start};
              }
          } else if (startingChar === ">") {
              if (stream[this._current] === "=") {
                  this._current++;
                  return {type: TOK_GTE, value: ">=", start: start};
              } else {
                  return {type: TOK_GT, value: ">", start: start};
              }
          } else if (startingChar === "=") {
              if (stream[this._current] === "=") {
                  this._current++;
                  return {type: TOK_EQ, value: "==", start: start};
              }
          }
      },

      _consumeLiteral: function(stream) {
          this._current++;
          var start = this._current;
          var maxLength = stream.length;
          var literal;
          while(stream[this._current] !== "`" && this._current < maxLength) {
              // You can escape a literal char or you can escape the escape.
              var current = this._current;
              if (stream[current] === "\\" && (stream[current + 1] === "\\" ||
                                               stream[current + 1] === "`")) {
                  current += 2;
              } else {
                  current++;
              }
              this._current = current;
          }
          var literalString = trimLeft(stream.slice(start, this._current));
          literalString = literalString.replace("\\`", "`");
          if (this._looksLikeJSON(literalString)) {
              literal = JSON.parse(literalString);
          } else {
              // Try to JSON parse it as "<literal>"
              literal = JSON.parse("\"" + literalString + "\"");
          }
          // +1 gets us to the ending "`", +1 to move on to the next char.
          this._current++;
          return literal;
      },

      _looksLikeJSON: function(literalString) {
          var startingChars = "[{\"";
          var jsonLiterals = ["true", "false", "null"];
          var numberLooking = "-0123456789";

          if (literalString === "") {
              return false;
          } else if (startingChars.indexOf(literalString[0]) >= 0) {
              return true;
          } else if (jsonLiterals.indexOf(literalString) >= 0) {
              return true;
          } else if (numberLooking.indexOf(literalString[0]) >= 0) {
              try {
                  JSON.parse(literalString);
                  return true;
              } catch (ex) {
                  return false;
              }
          } else {
              return false;
          }
      }
  };

      var bindingPower = {};
      bindingPower[TOK_EOF] = 0;
      bindingPower[TOK_UNQUOTEDIDENTIFIER] = 0;
      bindingPower[TOK_QUOTEDIDENTIFIER] = 0;
      bindingPower[TOK_RBRACKET] = 0;
      bindingPower[TOK_RPAREN] = 0;
      bindingPower[TOK_COMMA] = 0;
      bindingPower[TOK_RBRACE] = 0;
      bindingPower[TOK_NUMBER] = 0;
      bindingPower[TOK_CURRENT] = 0;
      bindingPower[TOK_EXPREF] = 0;
      bindingPower[TOK_PIPE] = 1;
      bindingPower[TOK_OR] = 2;
      bindingPower[TOK_AND] = 3;
      bindingPower[TOK_EQ] = 5;
      bindingPower[TOK_GT] = 5;
      bindingPower[TOK_LT] = 5;
      bindingPower[TOK_GTE] = 5;
      bindingPower[TOK_LTE] = 5;
      bindingPower[TOK_NE] = 5;
      bindingPower[TOK_FLATTEN] = 9;
      bindingPower[TOK_STAR] = 20;
      bindingPower[TOK_FILTER] = 21;
      bindingPower[TOK_DOT] = 40;
      bindingPower[TOK_NOT] = 45;
      bindingPower[TOK_LBRACE] = 50;
      bindingPower[TOK_LBRACKET] = 55;
      bindingPower[TOK_LPAREN] = 60;

  function Parser() {
  }

  Parser.prototype = {
      parse: function(expression) {
          this._loadTokens(expression);
          this.index = 0;
          var ast = this.expression(0);
          if (this._lookahead(0) !== TOK_EOF) {
              var t = this._lookaheadToken(0);
              var error = new Error(
                  "Unexpected token type: " + t.type + ", value: " + t.value);
              error.name = "ParserError";
              throw error;
          }
          return ast;
      },

      _loadTokens: function(expression) {
          var lexer = new Lexer();
          var tokens = lexer.tokenize(expression);
          tokens.push({type: TOK_EOF, value: "", start: expression.length});
          this.tokens = tokens;
      },

      expression: function(rbp) {
          var leftToken = this._lookaheadToken(0);
          this._advance();
          var left = this.nud(leftToken);
          var currentToken = this._lookahead(0);
          while (rbp < bindingPower[currentToken]) {
              this._advance();
              left = this.led(currentToken, left);
              currentToken = this._lookahead(0);
          }
          return left;
      },

      _lookahead: function(number) {
          return this.tokens[this.index + number].type;
      },

      _lookaheadToken: function(number) {
          return this.tokens[this.index + number];
      },

      _advance: function() {
          this.index++;
      },

      nud: function(token) {
        var left;
        var right;
        var expression;
        switch (token.type) {
          case TOK_LITERAL:
            return {type: "Literal", value: token.value};
          case TOK_UNQUOTEDIDENTIFIER:
            return {type: "Field", name: token.value};
          case TOK_QUOTEDIDENTIFIER:
            var node = {type: "Field", name: token.value};
            if (this._lookahead(0) === TOK_LPAREN) {
                throw new Error("Quoted identifier not allowed for function names.");
            } else {
                return node;
            }
            break;
          case TOK_NOT:
            right = this.expression(bindingPower.Not);
            return {type: "NotExpression", children: [right]};
          case TOK_STAR:
            left = {type: "Identity"};
            right = null;
            if (this._lookahead(0) === TOK_RBRACKET) {
                // This can happen in a multiselect,
                // [a, b, *]
                right = {type: "Identity"};
            } else {
                right = this._parseProjectionRHS(bindingPower.Star);
            }
            return {type: "ValueProjection", children: [left, right]};
          case TOK_FILTER:
            return this.led(token.type, {type: "Identity"});
          case TOK_LBRACE:
            return this._parseMultiselectHash();
          case TOK_FLATTEN:
            left = {type: TOK_FLATTEN, children: [{type: "Identity"}]};
            right = this._parseProjectionRHS(bindingPower.Flatten);
            return {type: "Projection", children: [left, right]};
          case TOK_LBRACKET:
            if (this._lookahead(0) === TOK_NUMBER || this._lookahead(0) === TOK_COLON) {
                right = this._parseIndexExpression();
                return this._projectIfSlice({type: "Identity"}, right);
            } else if (this._lookahead(0) === TOK_STAR &&
                       this._lookahead(1) === TOK_RBRACKET) {
                this._advance();
                this._advance();
                right = this._parseProjectionRHS(bindingPower.Star);
                return {type: "Projection",
                        children: [{type: "Identity"}, right]};
            } else {
                return this._parseMultiselectList();
            }
            break;
          case TOK_CURRENT:
            return {type: TOK_CURRENT};
          case TOK_EXPREF:
            expression = this.expression(bindingPower.Expref);
            return {type: "ExpressionReference", children: [expression]};
          case TOK_LPAREN:
            var args = [];
            while (this._lookahead(0) !== TOK_RPAREN) {
              if (this._lookahead(0) === TOK_CURRENT) {
                expression = {type: TOK_CURRENT};
                this._advance();
              } else {
                expression = this.expression(0);
              }
              args.push(expression);
            }
            this._match(TOK_RPAREN);
            return args[0];
          default:
            this._errorToken(token);
        }
      },

      led: function(tokenName, left) {
        var right;
        switch(tokenName) {
          case TOK_DOT:
            var rbp = bindingPower.Dot;
            if (this._lookahead(0) !== TOK_STAR) {
                right = this._parseDotRHS(rbp);
                return {type: "Subexpression", children: [left, right]};
            } else {
                // Creating a projection.
                this._advance();
                right = this._parseProjectionRHS(rbp);
                return {type: "ValueProjection", children: [left, right]};
            }
            break;
          case TOK_PIPE:
            right = this.expression(bindingPower.Pipe);
            return {type: TOK_PIPE, children: [left, right]};
          case TOK_OR:
            right = this.expression(bindingPower.Or);
            return {type: "OrExpression", children: [left, right]};
          case TOK_AND:
            right = this.expression(bindingPower.And);
            return {type: "AndExpression", children: [left, right]};
          case TOK_LPAREN:
            var name = left.name;
            var args = [];
            var expression, node;
            while (this._lookahead(0) !== TOK_RPAREN) {
              if (this._lookahead(0) === TOK_CURRENT) {
                expression = {type: TOK_CURRENT};
                this._advance();
              } else {
                expression = this.expression(0);
              }
              if (this._lookahead(0) === TOK_COMMA) {
                this._match(TOK_COMMA);
              }
              args.push(expression);
            }
            this._match(TOK_RPAREN);
            node = {type: "Function", name: name, children: args};
            return node;
          case TOK_FILTER:
            var condition = this.expression(0);
            this._match(TOK_RBRACKET);
            if (this._lookahead(0) === TOK_FLATTEN) {
              right = {type: "Identity"};
            } else {
              right = this._parseProjectionRHS(bindingPower.Filter);
            }
            return {type: "FilterProjection", children: [left, right, condition]};
          case TOK_FLATTEN:
            var leftNode = {type: TOK_FLATTEN, children: [left]};
            var rightNode = this._parseProjectionRHS(bindingPower.Flatten);
            return {type: "Projection", children: [leftNode, rightNode]};
          case TOK_EQ:
          case TOK_NE:
          case TOK_GT:
          case TOK_GTE:
          case TOK_LT:
          case TOK_LTE:
            return this._parseComparator(left, tokenName);
          case TOK_LBRACKET:
            var token = this._lookaheadToken(0);
            if (token.type === TOK_NUMBER || token.type === TOK_COLON) {
                right = this._parseIndexExpression();
                return this._projectIfSlice(left, right);
            } else {
                this._match(TOK_STAR);
                this._match(TOK_RBRACKET);
                right = this._parseProjectionRHS(bindingPower.Star);
                return {type: "Projection", children: [left, right]};
            }
            break;
          default:
            this._errorToken(this._lookaheadToken(0));
        }
      },

      _match: function(tokenType) {
          if (this._lookahead(0) === tokenType) {
              this._advance();
          } else {
              var t = this._lookaheadToken(0);
              var error = new Error("Expected " + tokenType + ", got: " + t.type);
              error.name = "ParserError";
              throw error;
          }
      },

      _errorToken: function(token) {
          var error = new Error("Invalid token (" +
                                token.type + "): \"" +
                                token.value + "\"");
          error.name = "ParserError";
          throw error;
      },


      _parseIndexExpression: function() {
          if (this._lookahead(0) === TOK_COLON || this._lookahead(1) === TOK_COLON) {
              return this._parseSliceExpression();
          } else {
              var node = {
                  type: "Index",
                  value: this._lookaheadToken(0).value};
              this._advance();
              this._match(TOK_RBRACKET);
              return node;
          }
      },

      _projectIfSlice: function(left, right) {
          var indexExpr = {type: "IndexExpression", children: [left, right]};
          if (right.type === "Slice") {
              return {
                  type: "Projection",
                  children: [indexExpr, this._parseProjectionRHS(bindingPower.Star)]
              };
          } else {
              return indexExpr;
          }
      },

      _parseSliceExpression: function() {
          // [start:end:step] where each part is optional, as well as the last
          // colon.
          var parts = [null, null, null];
          var index = 0;
          var currentToken = this._lookahead(0);
          while (currentToken !== TOK_RBRACKET && index < 3) {
              if (currentToken === TOK_COLON) {
                  index++;
                  this._advance();
              } else if (currentToken === TOK_NUMBER) {
                  parts[index] = this._lookaheadToken(0).value;
                  this._advance();
              } else {
                  var t = this._lookahead(0);
                  var error = new Error("Syntax error, unexpected token: " +
                                        t.value + "(" + t.type + ")");
                  error.name = "Parsererror";
                  throw error;
              }
              currentToken = this._lookahead(0);
          }
          this._match(TOK_RBRACKET);
          return {
              type: "Slice",
              children: parts
          };
      },

      _parseComparator: function(left, comparator) {
        var right = this.expression(bindingPower[comparator]);
        return {type: "Comparator", name: comparator, children: [left, right]};
      },

      _parseDotRHS: function(rbp) {
          var lookahead = this._lookahead(0);
          var exprTokens = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER, TOK_STAR];
          if (exprTokens.indexOf(lookahead) >= 0) {
              return this.expression(rbp);
          } else if (lookahead === TOK_LBRACKET) {
              this._match(TOK_LBRACKET);
              return this._parseMultiselectList();
          } else if (lookahead === TOK_LBRACE) {
              this._match(TOK_LBRACE);
              return this._parseMultiselectHash();
          }
      },

      _parseProjectionRHS: function(rbp) {
          var right;
          if (bindingPower[this._lookahead(0)] < 10) {
              right = {type: "Identity"};
          } else if (this._lookahead(0) === TOK_LBRACKET) {
              right = this.expression(rbp);
          } else if (this._lookahead(0) === TOK_FILTER) {
              right = this.expression(rbp);
          } else if (this._lookahead(0) === TOK_DOT) {
              this._match(TOK_DOT);
              right = this._parseDotRHS(rbp);
          } else {
              var t = this._lookaheadToken(0);
              var error = new Error("Sytanx error, unexpected token: " +
                                    t.value + "(" + t.type + ")");
              error.name = "ParserError";
              throw error;
          }
          return right;
      },

      _parseMultiselectList: function() {
          var expressions = [];
          while (this._lookahead(0) !== TOK_RBRACKET) {
              var expression = this.expression(0);
              expressions.push(expression);
              if (this._lookahead(0) === TOK_COMMA) {
                  this._match(TOK_COMMA);
                  if (this._lookahead(0) === TOK_RBRACKET) {
                    throw new Error("Unexpected token Rbracket");
                  }
              }
          }
          this._match(TOK_RBRACKET);
          return {type: "MultiSelectList", children: expressions};
      },

      _parseMultiselectHash: function() {
        var pairs = [];
        var identifierTypes = [TOK_UNQUOTEDIDENTIFIER, TOK_QUOTEDIDENTIFIER];
        var keyToken, keyName, value, node;
        for (;;) {
          keyToken = this._lookaheadToken(0);
          if (identifierTypes.indexOf(keyToken.type) < 0) {
            throw new Error("Expecting an identifier token, got: " +
                            keyToken.type);
          }
          keyName = keyToken.value;
          this._advance();
          this._match(TOK_COLON);
          value = this.expression(0);
          node = {type: "KeyValuePair", name: keyName, value: value};
          pairs.push(node);
          if (this._lookahead(0) === TOK_COMMA) {
            this._match(TOK_COMMA);
          } else if (this._lookahead(0) === TOK_RBRACE) {
            this._match(TOK_RBRACE);
            break;
          }
        }
        return {type: "MultiSelectHash", children: pairs};
      }
  };


  function TreeInterpreter(runtime) {
    this.runtime = runtime;
  }

  TreeInterpreter.prototype = {
      search: function(node, value) {
          return this.visit(node, value);
      },

      visit: function(node, value) {
          var matched, current, result, first, second, field, left, right, collected, i;
          switch (node.type) {
            case "Field":
              if (value === null ) {
                  return null;
              } else if (isObject(value)) {
                  field = value[node.name];
                  if (field === undefined) {
                      return null;
                  } else {
                      return field;
                  }
              } else {
                return null;
              }
              break;
            case "Subexpression":
              result = this.visit(node.children[0], value);
              for (i = 1; i < node.children.length; i++) {
                  result = this.visit(node.children[1], result);
                  if (result === null) {
                      return null;
                  }
              }
              return result;
            case "IndexExpression":
              left = this.visit(node.children[0], value);
              right = this.visit(node.children[1], left);
              return right;
            case "Index":
              if (!isArray(value)) {
                return null;
              }
              var index = node.value;
              if (index < 0) {
                index = value.length + index;
              }
              result = value[index];
              if (result === undefined) {
                result = null;
              }
              return result;
            case "Slice":
              if (!isArray(value)) {
                return null;
              }
              var sliceParams = node.children.slice(0);
              var computed = this.computeSliceParams(value.length, sliceParams);
              var start = computed[0];
              var stop = computed[1];
              var step = computed[2];
              result = [];
              if (step > 0) {
                  for (i = start; i < stop; i += step) {
                      result.push(value[i]);
                  }
              } else {
                  for (i = start; i > stop; i += step) {
                      result.push(value[i]);
                  }
              }
              return result;
            case "Projection":
              // Evaluate left child.
              var base = this.visit(node.children[0], value);
              if (!isArray(base)) {
                return null;
              }
              collected = [];
              for (i = 0; i < base.length; i++) {
                current = this.visit(node.children[1], base[i]);
                if (current !== null) {
                  collected.push(current);
                }
              }
              return collected;
            case "ValueProjection":
              // Evaluate left child.
              base = this.visit(node.children[0], value);
              if (!isObject(base)) {
                return null;
              }
              collected = [];
              var values = objValues(base);
              for (i = 0; i < values.length; i++) {
                current = this.visit(node.children[1], values[i]);
                if (current !== null) {
                  collected.push(current);
                }
              }
              return collected;
            case "FilterProjection":
              base = this.visit(node.children[0], value);
              if (!isArray(base)) {
                return null;
              }
              var filtered = [];
              var finalResults = [];
              for (i = 0; i < base.length; i++) {
                matched = this.visit(node.children[2], base[i]);
                if (!isFalse(matched)) {
                  filtered.push(base[i]);
                }
              }
              for (var j = 0; j < filtered.length; j++) {
                current = this.visit(node.children[1], filtered[j]);
                if (current !== null) {
                  finalResults.push(current);
                }
              }
              return finalResults;
            case "Comparator":
              first = this.visit(node.children[0], value);
              second = this.visit(node.children[1], value);
              switch(node.name) {
                case TOK_EQ:
                  result = strictDeepEqual(first, second);
                  break;
                case TOK_NE:
                  result = !strictDeepEqual(first, second);
                  break;
                case TOK_GT:
                  result = first > second;
                  break;
                case TOK_GTE:
                  result = first >= second;
                  break;
                case TOK_LT:
                  result = first < second;
                  break;
                case TOK_LTE:
                  result = first <= second;
                  break;
                default:
                  throw new Error("Unknown comparator: " + node.name);
              }
              return result;
            case TOK_FLATTEN:
              var original = this.visit(node.children[0], value);
              if (!isArray(original)) {
                return null;
              }
              var merged = [];
              for (i = 0; i < original.length; i++) {
                current = original[i];
                if (isArray(current)) {
                  merged.push.apply(merged, current);
                } else {
                  merged.push(current);
                }
              }
              return merged;
            case "Identity":
              return value;
            case "MultiSelectList":
              if (value === null) {
                return null;
              }
              collected = [];
              for (i = 0; i < node.children.length; i++) {
                  collected.push(this.visit(node.children[i], value));
              }
              return collected;
            case "MultiSelectHash":
              if (value === null) {
                return null;
              }
              collected = {};
              var child;
              for (i = 0; i < node.children.length; i++) {
                child = node.children[i];
                collected[child.name] = this.visit(child.value, value);
              }
              return collected;
            case "OrExpression":
              matched = this.visit(node.children[0], value);
              if (isFalse(matched)) {
                  matched = this.visit(node.children[1], value);
              }
              return matched;
            case "AndExpression":
              first = this.visit(node.children[0], value);

              if (isFalse(first) === true) {
                return first;
              }
              return this.visit(node.children[1], value);
            case "NotExpression":
              first = this.visit(node.children[0], value);
              return isFalse(first);
            case "Literal":
              return node.value;
            case TOK_PIPE:
              left = this.visit(node.children[0], value);
              return this.visit(node.children[1], left);
            case TOK_CURRENT:
              return value;
            case "Function":
              var resolvedArgs = [];
              for (i = 0; i < node.children.length; i++) {
                  resolvedArgs.push(this.visit(node.children[i], value));
              }
              return this.runtime.callFunction(node.name, resolvedArgs);
            case "ExpressionReference":
              var refNode = node.children[0];
              // Tag the node with a specific attribute so the type
              // checker verify the type.
              refNode.jmespathType = TOK_EXPREF;
              return refNode;
            default:
              throw new Error("Unknown node type: " + node.type);
          }
      },

      computeSliceParams: function(arrayLength, sliceParams) {
        var start = sliceParams[0];
        var stop = sliceParams[1];
        var step = sliceParams[2];
        var computed = [null, null, null];
        if (step === null) {
          step = 1;
        } else if (step === 0) {
          var error = new Error("Invalid slice, step cannot be 0");
          error.name = "RuntimeError";
          throw error;
        }
        var stepValueNegative = step < 0 ? true : false;

        if (start === null) {
            start = stepValueNegative ? arrayLength - 1 : 0;
        } else {
            start = this.capSliceRange(arrayLength, start, step);
        }

        if (stop === null) {
            stop = stepValueNegative ? -1 : arrayLength;
        } else {
            stop = this.capSliceRange(arrayLength, stop, step);
        }
        computed[0] = start;
        computed[1] = stop;
        computed[2] = step;
        return computed;
      },

      capSliceRange: function(arrayLength, actualValue, step) {
          if (actualValue < 0) {
              actualValue += arrayLength;
              if (actualValue < 0) {
                  actualValue = step < 0 ? -1 : 0;
              }
          } else if (actualValue >= arrayLength) {
              actualValue = step < 0 ? arrayLength - 1 : arrayLength;
          }
          return actualValue;
      }

  };

  function Runtime(interpreter) {
    this._interpreter = interpreter;
    this.functionTable = {
        // name: [function, <signature>]
        // The <signature> can be:
        //
        // {
        //   args: [[type1, type2], [type1, type2]],
        //   variadic: true|false
        // }
        //
        // Each arg in the arg list is a list of valid types
        // (if the function is overloaded and supports multiple
        // types.  If the type is "any" then no type checking
        // occurs on the argument.  Variadic is optional
        // and if not provided is assumed to be false.
        abs: {_func: this._functionAbs, _signature: [{types: [TYPE_NUMBER]}]},
        avg: {_func: this._functionAvg, _signature: [{types: [TYPE_ARRAY_NUMBER]}]},
        ceil: {_func: this._functionCeil, _signature: [{types: [TYPE_NUMBER]}]},
        contains: {
            _func: this._functionContains,
            _signature: [{types: [TYPE_STRING, TYPE_ARRAY]},
                        {types: [TYPE_ANY]}]},
        "ends_with": {
            _func: this._functionEndsWith,
            _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]},
        floor: {_func: this._functionFloor, _signature: [{types: [TYPE_NUMBER]}]},
        length: {
            _func: this._functionLength,
            _signature: [{types: [TYPE_STRING, TYPE_ARRAY, TYPE_OBJECT]}]},
        map: {
            _func: this._functionMap,
            _signature: [{types: [TYPE_EXPREF]}, {types: [TYPE_ARRAY]}]},
        max: {
            _func: this._functionMax,
            _signature: [{types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING]}]},
        "merge": {
            _func: this._functionMerge,
            _signature: [{types: [TYPE_OBJECT], variadic: true}]
        },
        "max_by": {
          _func: this._functionMaxBy,
          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
        },
        sum: {_func: this._functionSum, _signature: [{types: [TYPE_ARRAY_NUMBER]}]},
        "starts_with": {
            _func: this._functionStartsWith,
            _signature: [{types: [TYPE_STRING]}, {types: [TYPE_STRING]}]},
        min: {
            _func: this._functionMin,
            _signature: [{types: [TYPE_ARRAY_NUMBER, TYPE_ARRAY_STRING]}]},
        "min_by": {
          _func: this._functionMinBy,
          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
        },
        type: {_func: this._functionType, _signature: [{types: [TYPE_ANY]}]},
        keys: {_func: this._functionKeys, _signature: [{types: [TYPE_OBJECT]}]},
        values: {_func: this._functionValues, _signature: [{types: [TYPE_OBJECT]}]},
        sort: {_func: this._functionSort, _signature: [{types: [TYPE_ARRAY_STRING, TYPE_ARRAY_NUMBER]}]},
        "sort_by": {
          _func: this._functionSortBy,
          _signature: [{types: [TYPE_ARRAY]}, {types: [TYPE_EXPREF]}]
        },
        join: {
            _func: this._functionJoin,
            _signature: [
                {types: [TYPE_STRING]},
                {types: [TYPE_ARRAY_STRING]}
            ]
        },
        reverse: {
            _func: this._functionReverse,
            _signature: [{types: [TYPE_STRING, TYPE_ARRAY]}]},
        "to_array": {_func: this._functionToArray, _signature: [{types: [TYPE_ANY]}]},
        "to_string": {_func: this._functionToString, _signature: [{types: [TYPE_ANY]}]},
        "to_number": {_func: this._functionToNumber, _signature: [{types: [TYPE_ANY]}]},
        "not_null": {
            _func: this._functionNotNull,
            _signature: [{types: [TYPE_ANY], variadic: true}]
        }
    };
  }

  Runtime.prototype = {
    callFunction: function(name, resolvedArgs) {
      var functionEntry = this.functionTable[name];
      if (functionEntry === undefined) {
          throw new Error("Unknown function: " + name + "()");
      }
      this._validateArgs(name, resolvedArgs, functionEntry._signature);
      return functionEntry._func.call(this, resolvedArgs);
    },

    _validateArgs: function(name, args, signature) {
        // Validating the args requires validating
        // the correct arity and the correct type of each arg.
        // If the last argument is declared as variadic, then we need
        // a minimum number of args to be required.  Otherwise it has to
        // be an exact amount.
        var pluralized;
        if (signature[signature.length - 1].variadic) {
            if (args.length < signature.length) {
                pluralized = signature.length === 1 ? " argument" : " arguments";
                throw new Error("ArgumentError: " + name + "() " +
                                "takes at least" + signature.length + pluralized +
                                " but received " + args.length);
            }
        } else if (args.length !== signature.length) {
            pluralized = signature.length === 1 ? " argument" : " arguments";
            throw new Error("ArgumentError: " + name + "() " +
                            "takes " + signature.length + pluralized +
                            " but received " + args.length);
        }
        var currentSpec;
        var actualType;
        var typeMatched;
        for (var i = 0; i < signature.length; i++) {
            typeMatched = false;
            currentSpec = signature[i].types;
            actualType = this._getTypeName(args[i]);
            for (var j = 0; j < currentSpec.length; j++) {
                if (this._typeMatches(actualType, currentSpec[j], args[i])) {
                    typeMatched = true;
                    break;
                }
            }
            if (!typeMatched) {
                throw new Error("TypeError: " + name + "() " +
                                "expected argument " + (i + 1) +
                                " to be type " + currentSpec +
                                " but received type " + actualType +
                                " instead.");
            }
        }
    },

    _typeMatches: function(actual, expected, argValue) {
        if (expected === TYPE_ANY) {
            return true;
        }
        if (expected === TYPE_ARRAY_STRING ||
            expected === TYPE_ARRAY_NUMBER ||
            expected === TYPE_ARRAY) {
            // The expected type can either just be array,
            // or it can require a specific subtype (array of numbers).
            //
            // The simplest case is if "array" with no subtype is specified.
            if (expected === TYPE_ARRAY) {
                return actual === TYPE_ARRAY;
            } else if (actual === TYPE_ARRAY) {
                // Otherwise we need to check subtypes.
                // I think this has potential to be improved.
                var subtype;
                if (expected === TYPE_ARRAY_NUMBER) {
                  subtype = TYPE_NUMBER;
                } else if (expected === TYPE_ARRAY_STRING) {
                  subtype = TYPE_STRING;
                }
                for (var i = 0; i < argValue.length; i++) {
                    if (!this._typeMatches(
                            this._getTypeName(argValue[i]), subtype,
                                             argValue[i])) {
                        return false;
                    }
                }
                return true;
            }
        } else {
            return actual === expected;
        }
    },
    _getTypeName: function(obj) {
        switch (Object.prototype.toString.call(obj)) {
            case "[object String]":
              return TYPE_STRING;
            case "[object Number]":
              return TYPE_NUMBER;
            case "[object Array]":
              return TYPE_ARRAY;
            case "[object Boolean]":
              return TYPE_BOOLEAN;
            case "[object Null]":
              return TYPE_NULL;
            case "[object Object]":
              // Check if it's an expref.  If it has, it's been
              // tagged with a jmespathType attr of 'Expref';
              if (obj.jmespathType === TOK_EXPREF) {
                return TYPE_EXPREF;
              } else {
                return TYPE_OBJECT;
              }
        }
    },

    _functionStartsWith: function(resolvedArgs) {
        return resolvedArgs[0].lastIndexOf(resolvedArgs[1]) === 0;
    },

    _functionEndsWith: function(resolvedArgs) {
        var searchStr = resolvedArgs[0];
        var suffix = resolvedArgs[1];
        return searchStr.indexOf(suffix, searchStr.length - suffix.length) !== -1;
    },

    _functionReverse: function(resolvedArgs) {
        var typeName = this._getTypeName(resolvedArgs[0]);
        if (typeName === TYPE_STRING) {
          var originalStr = resolvedArgs[0];
          var reversedStr = "";
          for (var i = originalStr.length - 1; i >= 0; i--) {
              reversedStr += originalStr[i];
          }
          return reversedStr;
        } else {
          var reversedArray = resolvedArgs[0].slice(0);
          reversedArray.reverse();
          return reversedArray;
        }
    },

    _functionAbs: function(resolvedArgs) {
      return Math.abs(resolvedArgs[0]);
    },

    _functionCeil: function(resolvedArgs) {
        return Math.ceil(resolvedArgs[0]);
    },

    _functionAvg: function(resolvedArgs) {
        var sum = 0;
        var inputArray = resolvedArgs[0];
        for (var i = 0; i < inputArray.length; i++) {
            sum += inputArray[i];
        }
        return sum / inputArray.length;
    },

    _functionContains: function(resolvedArgs) {
        return resolvedArgs[0].indexOf(resolvedArgs[1]) >= 0;
    },

    _functionFloor: function(resolvedArgs) {
        return Math.floor(resolvedArgs[0]);
    },

    _functionLength: function(resolvedArgs) {
       if (!isObject(resolvedArgs[0])) {
         return resolvedArgs[0].length;
       } else {
         // As far as I can tell, there's no way to get the length
         // of an object without O(n) iteration through the object.
         return Object.keys(resolvedArgs[0]).length;
       }
    },

    _functionMap: function(resolvedArgs) {
      var mapped = [];
      var interpreter = this._interpreter;
      var exprefNode = resolvedArgs[0];
      var elements = resolvedArgs[1];
      for (var i = 0; i < elements.length; i++) {
          mapped.push(interpreter.visit(exprefNode, elements[i]));
      }
      return mapped;
    },

    _functionMerge: function(resolvedArgs) {
      var merged = {};
      for (var i = 0; i < resolvedArgs.length; i++) {
        var current = resolvedArgs[i];
        for (var key in current) {
          merged[key] = current[key];
        }
      }
      return merged;
    },

    _functionMax: function(resolvedArgs) {
      if (resolvedArgs[0].length > 0) {
        var typeName = this._getTypeName(resolvedArgs[0][0]);
        if (typeName === TYPE_NUMBER) {
          return Math.max.apply(Math, resolvedArgs[0]);
        } else {
          var elements = resolvedArgs[0];
          var maxElement = elements[0];
          for (var i = 1; i < elements.length; i++) {
              if (maxElement.localeCompare(elements[i]) < 0) {
                  maxElement = elements[i];
              }
          }
          return maxElement;
        }
      } else {
          return null;
      }
    },

    _functionMin: function(resolvedArgs) {
      if (resolvedArgs[0].length > 0) {
        var typeName = this._getTypeName(resolvedArgs[0][0]);
        if (typeName === TYPE_NUMBER) {
          return Math.min.apply(Math, resolvedArgs[0]);
        } else {
          var elements = resolvedArgs[0];
          var minElement = elements[0];
          for (var i = 1; i < elements.length; i++) {
              if (elements[i].localeCompare(minElement) < 0) {
                  minElement = elements[i];
              }
          }
          return minElement;
        }
      } else {
        return null;
      }
    },

    _functionSum: function(resolvedArgs) {
      var sum = 0;
      var listToSum = resolvedArgs[0];
      for (var i = 0; i < listToSum.length; i++) {
        sum += listToSum[i];
      }
      return sum;
    },

    _functionType: function(resolvedArgs) {
        switch (this._getTypeName(resolvedArgs[0])) {
          case TYPE_NUMBER:
            return "number";
          case TYPE_STRING:
            return "string";
          case TYPE_ARRAY:
            return "array";
          case TYPE_OBJECT:
            return "object";
          case TYPE_BOOLEAN:
            return "boolean";
          case TYPE_EXPREF:
            return "expref";
          case TYPE_NULL:
            return "null";
        }
    },

    _functionKeys: function(resolvedArgs) {
        return Object.keys(resolvedArgs[0]);
    },

    _functionValues: function(resolvedArgs) {
        var obj = resolvedArgs[0];
        var keys = Object.keys(obj);
        var values = [];
        for (var i = 0; i < keys.length; i++) {
            values.push(obj[keys[i]]);
        }
        return values;
    },

    _functionJoin: function(resolvedArgs) {
        var joinChar = resolvedArgs[0];
        var listJoin = resolvedArgs[1];
        return listJoin.join(joinChar);
    },

    _functionToArray: function(resolvedArgs) {
        if (this._getTypeName(resolvedArgs[0]) === TYPE_ARRAY) {
            return resolvedArgs[0];
        } else {
            return [resolvedArgs[0]];
        }
    },

    _functionToString: function(resolvedArgs) {
        if (this._getTypeName(resolvedArgs[0]) === TYPE_STRING) {
            return resolvedArgs[0];
        } else {
            return JSON.stringify(resolvedArgs[0]);
        }
    },

    _functionToNumber: function(resolvedArgs) {
        var typeName = this._getTypeName(resolvedArgs[0]);
        var convertedValue;
        if (typeName === TYPE_NUMBER) {
            return resolvedArgs[0];
        } else if (typeName === TYPE_STRING) {
            convertedValue = +resolvedArgs[0];
            if (!isNaN(convertedValue)) {
                return convertedValue;
            }
        }
        return null;
    },

    _functionNotNull: function(resolvedArgs) {
        for (var i = 0; i < resolvedArgs.length; i++) {
            if (this._getTypeName(resolvedArgs[i]) !== TYPE_NULL) {
                return resolvedArgs[i];
            }
        }
        return null;
    },

    _functionSort: function(resolvedArgs) {
        var sortedArray = resolvedArgs[0].slice(0);
        sortedArray.sort();
        return sortedArray;
    },

    _functionSortBy: function(resolvedArgs) {
        var sortedArray = resolvedArgs[0].slice(0);
        if (sortedArray.length === 0) {
            return sortedArray;
        }
        var interpreter = this._interpreter;
        var exprefNode = resolvedArgs[1];
        var requiredType = this._getTypeName(
            interpreter.visit(exprefNode, sortedArray[0]));
        if ([TYPE_NUMBER, TYPE_STRING].indexOf(requiredType) < 0) {
            throw new Error("TypeError");
        }
        var that = this;
        // In order to get a stable sort out of an unstable
        // sort algorithm, we decorate/sort/undecorate (DSU)
        // by creating a new list of [index, element] pairs.
        // In the cmp function, if the evaluated elements are
        // equal, then the index will be used as the tiebreaker.
        // After the decorated list has been sorted, it will be
        // undecorated to extract the original elements.
        var decorated = [];
        for (var i = 0; i < sortedArray.length; i++) {
          decorated.push([i, sortedArray[i]]);
        }
        decorated.sort(function(a, b) {
          var exprA = interpreter.visit(exprefNode, a[1]);
          var exprB = interpreter.visit(exprefNode, b[1]);
          if (that._getTypeName(exprA) !== requiredType) {
              throw new Error(
                  "TypeError: expected " + requiredType + ", received " +
                  that._getTypeName(exprA));
          } else if (that._getTypeName(exprB) !== requiredType) {
              throw new Error(
                  "TypeError: expected " + requiredType + ", received " +
                  that._getTypeName(exprB));
          }
          if (exprA > exprB) {
            return 1;
          } else if (exprA < exprB) {
            return -1;
          } else {
            // If they're equal compare the items by their
            // order to maintain relative order of equal keys
            // (i.e. to get a stable sort).
            return a[0] - b[0];
          }
        });
        // Undecorate: extract out the original list elements.
        for (var j = 0; j < decorated.length; j++) {
          sortedArray[j] = decorated[j][1];
        }
        return sortedArray;
    },

    _functionMaxBy: function(resolvedArgs) {
      var exprefNode = resolvedArgs[1];
      var resolvedArray = resolvedArgs[0];
      var keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
      var maxNumber = -Infinity;
      var maxRecord;
      var current;
      for (var i = 0; i < resolvedArray.length; i++) {
        current = keyFunction(resolvedArray[i]);
        if (current > maxNumber) {
          maxNumber = current;
          maxRecord = resolvedArray[i];
        }
      }
      return maxRecord;
    },

    _functionMinBy: function(resolvedArgs) {
      var exprefNode = resolvedArgs[1];
      var resolvedArray = resolvedArgs[0];
      var keyFunction = this.createKeyFunction(exprefNode, [TYPE_NUMBER, TYPE_STRING]);
      var minNumber = Infinity;
      var minRecord;
      var current;
      for (var i = 0; i < resolvedArray.length; i++) {
        current = keyFunction(resolvedArray[i]);
        if (current < minNumber) {
          minNumber = current;
          minRecord = resolvedArray[i];
        }
      }
      return minRecord;
    },

    createKeyFunction: function(exprefNode, allowedTypes) {
      var that = this;
      var interpreter = this._interpreter;
      var keyFunc = function(x) {
        var current = interpreter.visit(exprefNode, x);
        if (allowedTypes.indexOf(that._getTypeName(current)) < 0) {
          var msg = "TypeError: expected one of " + allowedTypes +
                    ", received " + that._getTypeName(current);
          throw new Error(msg);
        }
        return current;
      };
      return keyFunc;
    }

  };

  function compile(stream) {
    var parser = new Parser();
    var ast = parser.parse(stream);
    return ast;
  }

  function tokenize(stream) {
      var lexer = new Lexer();
      return lexer.tokenize(stream);
  }

  function search(data, expression) {
      var parser = new Parser();
      // This needs to be improved.  Both the interpreter and runtime depend on
      // each other.  The runtime needs the interpreter to support exprefs.
      // There's likely a clean way to avoid the cyclic dependency.
      var runtime = new Runtime();
      var interpreter = new TreeInterpreter(runtime);
      runtime._interpreter = interpreter;
      var node = parser.parse(expression);
      return interpreter.search(node, data);
  }

  exports.tokenize = tokenize;
  exports.compile = compile;
  exports.search = search;
  exports.strictDeepEqual = strictDeepEqual;
})( false ? this.jmespath = {} : exports);


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(19),
    root = __webpack_require__(12);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(644),
    mapCacheDelete = __webpack_require__(645),
    mapCacheGet = __webpack_require__(646),
    mapCacheHas = __webpack_require__(647),
    mapCacheSet = __webpack_require__(648);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(9),
    isSymbol = __webpack_require__(85);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(604),
    isObjectLike = __webpack_require__(39);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(12),
    stubFalse = __webpack_require__(676);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(145)(module)))

/***/ }),
/* 84 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(37),
    isObjectLike = __webpack_require__(39);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(608),
    baseUnary = __webpack_require__(618),
    nodeUtil = __webpack_require__(652);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// This is (almost) directly from Node.js utils
// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js

var getName = __webpack_require__(156);
var getProperties = __webpack_require__(707);
var getEnumerableProperties = __webpack_require__(704);

module.exports = inspect;

/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
 *    properties of objects.
 * @param {Number} depth Depth in which to descend in object. Default is 2.
 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
 *    output. Default is false (no coloring).
 * @namespace Utils
 * @name inspect
 */
function inspect(obj, showHidden, depth, colors) {
  var ctx = {
    showHidden: showHidden,
    seen: [],
    stylize: function (str) { return str; }
  };
  return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
}

// Returns true if object is a DOM element.
var isDOMElement = function (object) {
  if (typeof HTMLElement === 'object') {
    return object instanceof HTMLElement;
  } else {
    return object &&
      typeof object === 'object' &&
      object.nodeType === 1 &&
      typeof object.nodeName === 'string';
  }
};

function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (value && typeof value.inspect === 'function' &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes);
    if (typeof ret !== 'string') {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // If this is a DOM element, try to get the outer HTML.
  if (isDOMElement(value)) {
    if ('outerHTML' in value) {
      return value.outerHTML;
      // This value does not have an outerHTML attribute,
      //   it could still be an XML element
    } else {
      // Attempt to serialize it
      try {
        if (document.xmlVersion) {
          var xmlSerializer = new XMLSerializer();
          return xmlSerializer.serializeToString(value);
        } else {
          // Firefox 11- do not support outerHTML
          //   It does, however, support innerHTML
          //   Use the following to render the element
          var ns = "http://www.w3.org/1999/xhtml";
          var container = document.createElementNS(ns, '_');

          container.appendChild(value.cloneNode(false));
          html = container.innerHTML
            .replace('><', '>' + value.innerHTML + '<');
          container.innerHTML = '';
          return html;
        }
      } catch (err) {
        // This could be a non-native DOM implementation,
        //   continue with the normal flow:
        //   printing the element as if it is an object.
      }
    }
  }

  // Look up the keys of the object.
  var visibleKeys = getEnumerableProperties(value);
  var keys = ctx.showHidden ? getProperties(value) : visibleKeys;

  // Some type of object without properties can be shortcutted.
  // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
  // a `stack` plus `description` property; ignore those for consistency.
  if (keys.length === 0 || (isError(value) && (
      (keys.length === 1 && keys[0] === 'stack') ||
      (keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')
     ))) {
    if (typeof value === 'function') {
      var name = getName(value);
      var nameSuffix = name ? ': ' + name : '';
      return ctx.stylize('[Function' + nameSuffix + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (typeof value === 'function') {
    var name = getName(value);
    var nameSuffix = name ? ': ' + name : '';
    base = ' [Function' + nameSuffix + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    return formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  switch (typeof value) {
    case 'undefined':
      return ctx.stylize('undefined', 'undefined');

    case 'string':
      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                               .replace(/'/g, "\\'")
                                               .replace(/\\"/g, '"') + '\'';
      return ctx.stylize(simple, 'string');

    case 'number':
      if (value === 0 && (1/value) === -Infinity) {
        return ctx.stylize('-0', 'number');
      }
      return ctx.stylize('' + value, 'number');

    case 'boolean':
      return ctx.stylize('' + value, 'boolean');
  }
  // For some reason typeof null is "object", so special case here.
  if (value === null) {
    return ctx.stylize('null', 'null');
  }
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (Object.prototype.hasOwnProperty.call(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str;
  if (value.__lookupGetter__) {
    if (value.__lookupGetter__(key)) {
      if (value.__lookupSetter__(key)) {
        str = ctx.stylize('[Getter/Setter]', 'special');
      } else {
        str = ctx.stylize('[Getter]', 'special');
      }
    } else {
      if (value.__lookupSetter__(key)) {
        str = ctx.stylize('[Setter]', 'special');
      }
    }
  }
  if (visibleKeys.indexOf(key) < 0) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(value[key]) < 0) {
      if (recurseTimes === null) {
        str = formatValue(ctx, value[key], null);
      } else {
        str = formatValue(ctx, value[key], recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (typeof name === 'undefined') {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}

function isArray(ar) {
  return Array.isArray(ar) ||
         (typeof ar === 'object' && objectToString(ar) === '[object Array]');
}

function isRegExp(re) {
  return typeof re === 'object' && objectToString(re) === '[object RegExp]';
}

function isDate(d) {
  return typeof d === 'object' && objectToString(d) === '[object Date]';
}

function isError(e) {
  return typeof e === 'object' && objectToString(e) === '[object Error]';
}

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(717);


/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
var AWS = __webpack_require__(0);
var Service = __webpack_require__(3);
var apiLoader = __webpack_require__(2);

apiLoader.services['cognitoidentity'] = {};
AWS.CognitoIdentity = Service.defineService('cognitoidentity', ['2014-06-30']);
__webpack_require__(500);
Object.defineProperty(apiLoader.services['cognitoidentity'], '2014-06-30', {
  get: function get() {
    var model = __webpack_require__(206);
    model.paginators = __webpack_require__(207).pagination;
    return model;
  },
  enumerable: true,
  configurable: true
});

module.exports = AWS.CognitoIdentity;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);

/**
 * Represents your AWS security credentials, specifically the
 * {accessKeyId}, {secretAccessKey}, and optional {sessionToken}.
 * Creating a `Credentials` object allows you to pass around your
 * security information to configuration and service objects.
 *
 * Note that this class typically does not need to be constructed manually,
 * as the {AWS.Config} and {AWS.Service} classes both accept simple
 * options hashes with the three keys. These structures will be converted
 * into Credentials objects automatically.
 *
 * ## Expiring and Refreshing Credentials
 *
 * Occasionally credentials can expire in the middle of a long-running
 * application. In this case, the SDK will automatically attempt to
 * refresh the credentials from the storage location if the Credentials
 * class implements the {refresh} method.
 *
 * If you are implementing a credential storage location, you
 * will want to create a subclass of the `Credentials` class and
 * override the {refresh} method. This method allows credentials to be
 * retrieved from the backing store, be it a file system, database, or
 * some network storage. The method should reset the credential attributes
 * on the object.
 *
 * @!attribute expired
 *   @return [Boolean] whether the credentials have been expired and
 *     require a refresh. Used in conjunction with {expireTime}.
 * @!attribute expireTime
 *   @return [Date] a time when credentials should be considered expired. Used
 *     in conjunction with {expired}.
 * @!attribute accessKeyId
 *   @return [String] the AWS access key ID
 * @!attribute secretAccessKey
 *   @return [String] the AWS secret access key
 * @!attribute sessionToken
 *   @return [String] an optional AWS session token
 */
AWS.Credentials = AWS.util.inherit({
  /**
   * A credentials object can be created using positional arguments or an options
   * hash.
   *
   * @overload AWS.Credentials(accessKeyId, secretAccessKey, sessionToken=null)
   *   Creates a Credentials object with a given set of credential information
   *   as positional arguments.
   *   @param accessKeyId [String] the AWS access key ID
   *   @param secretAccessKey [String] the AWS secret access key
   *   @param sessionToken [String] the optional AWS session token
   *   @example Create a credentials object with AWS credentials
   *     var creds = new AWS.Credentials('akid', 'secret', 'session');
   * @overload AWS.Credentials(options)
   *   Creates a Credentials object with a given set of credential information
   *   as an options hash.
   *   @option options accessKeyId [String] the AWS access key ID
   *   @option options secretAccessKey [String] the AWS secret access key
   *   @option options sessionToken [String] the optional AWS session token
   *   @example Create a credentials object with AWS credentials
   *     var creds = new AWS.Credentials({
   *       accessKeyId: 'akid', secretAccessKey: 'secret', sessionToken: 'session'
   *     });
   */
  constructor: function Credentials() {
    // hide secretAccessKey from being displayed with util.inspect
    AWS.util.hideProperties(this, ['secretAccessKey']);

    this.expired = false;
    this.expireTime = null;
    if (arguments.length === 1 && typeof arguments[0] === 'object') {
      var creds = arguments[0].credentials || arguments[0];
      this.accessKeyId = creds.accessKeyId;
      this.secretAccessKey = creds.secretAccessKey;
      this.sessionToken = creds.sessionToken;
    } else {
      this.accessKeyId = arguments[0];
      this.secretAccessKey = arguments[1];
      this.sessionToken = arguments[2];
    }
  },

  /**
   * @return [Integer] the number of seconds before {expireTime} during which
   *   the credentials will be considered expired.
   */
  expiryWindow: 15,

  /**
   * @return [Boolean] whether the credentials object should call {refresh}
   * @note Subclasses should override this method to provide custom refresh
   *   logic.
   */
  needsRefresh: function needsRefresh() {
    var currentTime = AWS.util.date.getDate().getTime();
    var adjustedTime = new Date(currentTime + this.expiryWindow * 1000);

    if (this.expireTime && adjustedTime > this.expireTime) {
      return true;
    } else {
      return this.expired || !this.accessKeyId || !this.secretAccessKey;
    }
  },

  /**
   * Gets the existing credentials, refreshing them if they are not yet loaded
   * or have expired. Users should call this method before using {refresh},
   * as this will not attempt to reload credentials when they are already
   * loaded into the object.
   *
   * @callback callback function(err)
   *   When this callback is called with no error, it means either credentials
   *   do not need to be refreshed or refreshed credentials information has
   *   been loaded into the object (as the `accessKeyId`, `secretAccessKey`,
   *   and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   */
  get: function get(callback) {
    var self = this;
    if (this.needsRefresh()) {
      this.refresh(function(err) {
        if (!err) self.expired = false; // reset expired flag
        if (callback) callback(err);
      });
    } else if (callback) {
      callback();
    }
  },

  /**
   * @!method  getPromise()
   *   Returns a 'thenable' promise.
   *   Gets the existing credentials, refreshing them if they are not yet loaded
   *   or have expired. Users should call this method before using {refresh},
   *   as this will not attempt to reload credentials when they are already
   *   loaded into the object.
   *
   *   Two callbacks can be provided to the `then` method on the returned promise.
   *   The first callback will be called if the promise is fulfilled, and the second
   *   callback will be called if the promise is rejected.
   *   @callback fulfilledCallback function()
   *     Called if the promise is fulfilled. When this callback is called, it
   *     means either credentials do not need to be refreshed or refreshed
   *     credentials information has been loaded into the object (as the
   *     `accessKeyId`, `secretAccessKey`, and `sessionToken` properties).
   *   @callback rejectedCallback function(err)
   *     Called if the promise is rejected.
   *     @param err [Error] if an error occurred, this value will be filled
   *   @return [Promise] A promise that represents the state of the `get` call.
   *   @example Calling the `getPromise` method.
   *     var promise = credProvider.getPromise();
   *     promise.then(function() { ... }, function(err) { ... });
   */

  /**
   * @!method  refreshPromise()
   *   Returns a 'thenable' promise.
   *   Refreshes the credentials. Users should call {get} before attempting
   *   to forcibly refresh credentials.
   *
   *   Two callbacks can be provided to the `then` method on the returned promise.
   *   The first callback will be called if the promise is fulfilled, and the second
   *   callback will be called if the promise is rejected.
   *   @callback fulfilledCallback function()
   *     Called if the promise is fulfilled. When this callback is called, it
   *     means refreshed credentials information has been loaded into the object
   *     (as the `accessKeyId`, `secretAccessKey`, and `sessionToken` properties).
   *   @callback rejectedCallback function(err)
   *     Called if the promise is rejected.
   *     @param err [Error] if an error occurred, this value will be filled
   *   @return [Promise] A promise that represents the state of the `refresh` call.
   *   @example Calling the `refreshPromise` method.
   *     var promise = credProvider.refreshPromise();
   *     promise.then(function() { ... }, function(err) { ... });
   */

  /**
   * Refreshes the credentials. Users should call {get} before attempting
   * to forcibly refresh credentials.
   *
   * @callback callback function(err)
   *   When this callback is called with no error, it means refreshed
   *   credentials information has been loaded into the object (as the
   *   `accessKeyId`, `secretAccessKey`, and `sessionToken` properties).
   *   @param err [Error] if an error occurred, this value will be filled
   * @note Subclasses should override this class to reset the
   *   {accessKeyId}, {secretAccessKey} and optional {sessionToken}
   *   on the credentials object and then call the callback with
   *   any error information.
   * @see get
   */
  refresh: function refresh(callback) {
    this.expired = false;
    callback();
  }
});

/**
 * @api private
 */
AWS.Credentials.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
  this.prototype.getPromise = AWS.util.promisifyMethod('get', PromiseDependency);
  this.prototype.refreshPromise = AWS.util.promisifyMethod('refresh', PromiseDependency);
};

/**
 * @api private
 */
AWS.Credentials.deletePromisesFromClass = function deletePromisesFromClass() {
  delete this.prototype.getPromise;
  delete this.prototype.refreshPromise;
};

AWS.util.addPromises(AWS.Credentials);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);

/**
 * Creates a credential provider chain that searches for AWS credentials
 * in a list of credential providers specified by the {providers} property.
 *
 * By default, the chain will use the {defaultProviders} to resolve credentials.
 * These providers will look in the environment using the
 * {AWS.EnvironmentCredentials} class with the 'AWS' and 'AMAZON' prefixes.
 *
 * ## Setting Providers
 *
 * Each provider in the {providers} list should be a function that returns
 * a {AWS.Credentials} object, or a hardcoded credentials object. The function
 * form allows for delayed execution of the credential construction.
 *
 * ## Resolving Credentials from a Chain
 *
 * Call {resolve} to return the first valid credential object that can be
 * loaded by the provider chain.
 *
 * For example, to resolve a chain with a custom provider that checks a file
 * on disk after the set of {defaultProviders}:
 *
 * ```javascript
 * var diskProvider = new AWS.FileSystemCredentials('./creds.json');
 * var chain = new AWS.CredentialProviderChain();
 * chain.providers.push(diskProvider);
 * chain.resolve();
 * ```
 *
 * The above code will return the `diskProvider` object if the
 * file contains credentials and the `defaultProviders` do not contain
 * any credential settings.
 *
 * @!attribute providers
 *   @return [Array<AWS.Credentials, Function>]
 *     a list of credentials objects or functions that return credentials
 *     objects. If the provider is a function, the function will be
 *     executed lazily when the provider needs to be checked for valid
 *     credentials. By default, this object will be set to the
 *     {defaultProviders}.
 *   @see defaultProviders
 */
AWS.CredentialProviderChain = AWS.util.inherit(AWS.Credentials, {

  /**
   * Creates a new CredentialProviderChain with a default set of providers
   * specified by {defaultProviders}.
   */
  constructor: function CredentialProviderChain(providers) {
    if (providers) {
      this.providers = providers;
    } else {
      this.providers = AWS.CredentialProviderChain.defaultProviders.slice(0);
    }
  },

  /**
   * @!method  resolvePromise()
   *   Returns a 'thenable' promise.
   *   Resolves the provider chain by searching for the first set of
   *   credentials in {providers}.
   *
   *   Two callbacks can be provided to the `then` method on the returned promise.
   *   The first callback will be called if the promise is fulfilled, and the second
   *   callback will be called if the promise is rejected.
   *   @callback fulfilledCallback function(credentials)
   *     Called if the promise is fulfilled and the provider resolves the chain
   *     to a credentials object
   *     @param credentials [AWS.Credentials] the credentials object resolved
   *       by the provider chain.
   *   @callback rejectedCallback function(error)
   *     Called if the promise is rejected.
   *     @param err [Error] the error object returned if no credentials are found.
   *   @return [Promise] A promise that represents the state of the `resolve` method call.
   *   @example Calling the `resolvePromise` method.
   *     var promise = chain.resolvePromise();
   *     promise.then(function(credentials) { ... }, function(err) { ... });
   */

  /**
   * Resolves the provider chain by searching for the first set of
   * credentials in {providers}.
   *
   * @callback callback function(err, credentials)
   *   Called when the provider resolves the chain to a credentials object
   *   or null if no credentials can be found.
   *
   *   @param err [Error] the error object returned if no credentials are
   *     found.
   *   @param credentials [AWS.Credentials] the credentials object resolved
   *     by the provider chain.
   * @return [AWS.CredentialProviderChain] the provider, for chaining.
   */
  resolve: function resolve(callback) {
    if (this.providers.length === 0) {
      callback(new Error('No providers'));
      return this;
    }

    var index = 0;
    var providers = this.providers.slice(0);

    function resolveNext(err, creds) {
      if ((!err && creds) || index === providers.length) {
        callback(err, creds);
        return;
      }

      var provider = providers[index++];
      if (typeof provider === 'function') {
        creds = provider.call();
      } else {
        creds = provider;
      }

      if (creds.get) {
        creds.get(function(getErr) {
          resolveNext(getErr, getErr ? null : creds);
        });
      } else {
        resolveNext(null, creds);
      }
    }

    resolveNext();
    return this;
  }
});

/**
 * The default set of providers used by a vanilla CredentialProviderChain.
 *
 * In the browser:
 *
 * ```javascript
 * AWS.CredentialProviderChain.defaultProviders = []
 * ```
 *
 * In Node.js:
 *
 * ```javascript
 * AWS.CredentialProviderChain.defaultProviders = [
 *   function () { return new AWS.EnvironmentCredentials('AWS'); },
 *   function () { return new AWS.EnvironmentCredentials('AMAZON'); },
 *   function () { return new AWS.SharedIniFileCredentials(); },
 *   function () {
 *     // if AWS_CONTAINER_CREDENTIALS_RELATIVE_URI is set
 *       return new AWS.ECSCredentials();
 *     // else
 *       return new AWS.EC2MetadataCredentials();
 *   }
 * ]
 * ```
 */
AWS.CredentialProviderChain.defaultProviders = [];

/**
 * @api private
 */
AWS.CredentialProviderChain.addPromisesToClass = function addPromisesToClass(PromiseDependency) {
  this.prototype.resolvePromise = AWS.util.promisifyMethod('resolve', PromiseDependency);
};

/**
 * @api private
 */
AWS.CredentialProviderChain.deletePromisesFromClass = function deletePromisesFromClass() {
  delete this.prototype.resolvePromise;
};

AWS.util.addPromises(AWS.CredentialProviderChain);


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(0).util;
var typeOf = __webpack_require__(94).typeOf;

/**
 * @api private
 */
var DynamoDBSet = util.inherit({

  constructor: function Set(list, options) {
    options = options || {};
    this.initialize(list, options.validate);
  },

  initialize: function(list, validate) {
    var self = this;
    self.values = [].concat(list);
    self.detectType();
    if (validate) {
      self.validate();
    }
  },

  detectType: function() {
    var self = this;
    var value = self.values[0];
    if (typeOf(value) === 'String') {
      self.type = 'String';
    } else if (typeOf(value) === 'Number') {
      self.type = 'Number';
    } else if (typeOf(value) === 'Binary') {
      self.type = 'Binary';
    } else {
      throw util.error(new Error(), {
        code: 'InvalidSetType',
        message: 'Sets can contain string, number, or binary values'
      });
    }
  },

  validate: function() {
    var self = this;
    var length = self.values.length;
    var values = self.values;
    for (var i = 0; i < length; i++) {
      if (typeOf(values[i]) !== self.type) {
        throw util.error(new Error(), {
          code: 'InvalidType',
          message: self.type + ' Set contains ' + typeOf(values[i]) + ' value'
        });
      }
    }
  }

});

module.exports = DynamoDBSet;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(0).util;

function typeOf(data) {
  if (data === null && typeof data === 'object') {
    return 'null';
  } else if (data !== undefined && isBinary(data)) {
    return 'Binary';
  } else if (data !== undefined && data.constructor) {
    return util.typeName(data.constructor);
  } else if (data !== undefined && typeof data === 'object') {
    // this object is the result of Object.create(null), hence the absence of a
    // defined constructor
    return 'Object';
  } else {
    return 'undefined';
  }
}

function isBinary(data) {
  var types = [
    'Buffer', 'File', 'Blob', 'ArrayBuffer', 'DataView',
    'Int8Array', 'Uint8Array', 'Uint8ClampedArray',
    'Int16Array', 'Uint16Array', 'Int32Array', 'Uint32Array',
    'Float32Array', 'Float64Array'
  ];
  if (util.isNode()) {
    var Stream = util.stream.Stream;
    if (util.Buffer.isBuffer(data) || data instanceof Stream)
      return true;
  } else {
    for (var i = 0; i < types.length; i++) {
      if (data !== undefined && data.constructor) {
        if (util.isType(data, types[i])) return true;
        if (util.typeName(data.constructor) === types[i]) return true;
      }
    }
  }
  return false;
}

module.exports = {
  typeOf: typeOf,
  isBinary: isBinary
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var Collection = __webpack_require__(96);
var Operation = __webpack_require__(97);
var Shape = __webpack_require__(27);
var Paginator = __webpack_require__(98);
var ResourceWaiter = __webpack_require__(99);

var util = __webpack_require__(4);
var property = util.property;
var memoizedProperty = util.memoizedProperty;

function Api(api, options) {
  api = api || {};
  options = options || {};
  options.api = this;

  api.metadata = api.metadata || {};

  property(this, 'isApi', true, false);
  property(this, 'apiVersion', api.metadata.apiVersion);
  property(this, 'endpointPrefix', api.metadata.endpointPrefix);
  property(this, 'signingName', api.metadata.signingName);
  property(this, 'globalEndpoint', api.metadata.globalEndpoint);
  property(this, 'signatureVersion', api.metadata.signatureVersion);
  property(this, 'jsonVersion', api.metadata.jsonVersion);
  property(this, 'targetPrefix', api.metadata.targetPrefix);
  property(this, 'protocol', api.metadata.protocol);
  property(this, 'timestampFormat', api.metadata.timestampFormat);
  property(this, 'xmlNamespaceUri', api.metadata.xmlNamespace);
  property(this, 'abbreviation', api.metadata.serviceAbbreviation);
  property(this, 'fullName', api.metadata.serviceFullName);

  memoizedProperty(this, 'className', function() {
    var name = api.metadata.serviceAbbreviation || api.metadata.serviceFullName;
    if (!name) return null;

    name = name.replace(/^Amazon|AWS\s*|\(.*|\s+|\W+/g, '');
    if (name === 'ElasticLoadBalancing') name = 'ELB';
    return name;
  });

  property(this, 'operations', new Collection(api.operations, options, function(name, operation) {
    return new Operation(name, operation, options);
  }, util.string.lowerFirst));

  property(this, 'shapes', new Collection(api.shapes, options, function(name, shape) {
    return Shape.create(shape, options);
  }));

  property(this, 'paginators', new Collection(api.paginators, options, function(name, paginator) {
    return new Paginator(name, paginator, options);
  }));

  property(this, 'waiters', new Collection(api.waiters, options, function(name, waiter) {
    return new ResourceWaiter(name, waiter, options);
  }, util.string.lowerFirst));

  if (options.documentation) {
    property(this, 'documentation', api.documentation);
    property(this, 'documentationUrl', api.documentationUrl);
  }
}

module.exports = Api;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var memoizedProperty = __webpack_require__(4).memoizedProperty;

function memoize(name, value, fn, nameTr) {
  memoizedProperty(this, nameTr(name), function() {
    return fn(name, value);
  });
}

function Collection(iterable, options, fn, nameTr) {
  nameTr = nameTr || String;
  var self = this;

  for (var id in iterable) {
    if (Object.prototype.hasOwnProperty.call(iterable, id)) {
      memoize.call(self, id, iterable[id], fn, nameTr);
    }
  }
}

module.exports = Collection;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var Shape = __webpack_require__(27);

var util = __webpack_require__(4);
var property = util.property;
var memoizedProperty = util.memoizedProperty;

function Operation(name, operation, options) {
  var self = this;
  options = options || {};

  property(this, 'name', operation.name || name);
  property(this, 'api', options.api, false);

  operation.http = operation.http || {};
  property(this, 'httpMethod', operation.http.method || 'POST');
  property(this, 'httpPath', operation.http.requestUri || '/');
  property(this, 'authtype', operation.authtype || '');

  memoizedProperty(this, 'input', function() {
    if (!operation.input) {
      return new Shape.create({type: 'structure'}, options);
    }
    return Shape.create(operation.input, options);
  });

  memoizedProperty(this, 'output', function() {
    if (!operation.output) {
      return new Shape.create({type: 'structure'}, options);
    }
    return Shape.create(operation.output, options);
  });

  memoizedProperty(this, 'errors', function() {
    var list = [];
    if (!operation.errors) return null;

    for (var i = 0; i < operation.errors.length; i++) {
      list.push(Shape.create(operation.errors[i], options));
    }

    return list;
  });

  memoizedProperty(this, 'paginator', function() {
    return options.api.paginators[name];
  });

  if (options.documentation) {
    property(this, 'documentation', operation.documentation);
    property(this, 'documentationUrl', operation.documentationUrl);
  }

  // idempotentMembers only tracks top-level input shapes
  memoizedProperty(this, 'idempotentMembers', function() {
    var idempotentMembers = [];
    var input = self.input;
    var members = input.members;
    if (!input.members) {
      return idempotentMembers;
    }
    for (var name in members) {
      if (!members.hasOwnProperty(name)) {
        continue;
      }
      if (members[name].isIdempotent === true) {
        idempotentMembers.push(name);
      }
    }
    return idempotentMembers;
  });

}

module.exports = Operation;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var property = __webpack_require__(4).property;

function Paginator(name, paginator) {
  property(this, 'inputToken', paginator.input_token);
  property(this, 'limitKey', paginator.limit_key);
  property(this, 'moreResults', paginator.more_results);
  property(this, 'outputToken', paginator.output_token);
  property(this, 'resultKey', paginator.result_key);
}

module.exports = Paginator;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(4);
var property = util.property;

function ResourceWaiter(name, waiter, options) {
  options = options || {};
  property(this, 'name', name);
  property(this, 'api', options.api, false);

  if (waiter.operation) {
    property(this, 'operation', util.string.lowerFirst(waiter.operation));
  }

  var self = this;
  var keys = [
    'type',
    'description',
    'delay',
    'maxAttempts',
    'acceptors'
  ];

  keys.forEach(function(key) {
    var value = waiter[key];
    if (value) {
      property(self, key, value);
    }
  });
}

module.exports = ResourceWaiter;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var util = __webpack_require__(4);
var QueryParamSerializer = __webpack_require__(490);
var Shape = __webpack_require__(27);

function buildRequest(req) {
  var operation = req.service.api.operations[req.operation];
  var httpRequest = req.httpRequest;
  httpRequest.headers['Content-Type'] =
    'application/x-www-form-urlencoded; charset=utf-8';
  httpRequest.params = {
    Version: req.service.api.apiVersion,
    Action: operation.name
  };

  // convert the request parameters into a list of query params,
  // e.g. Deeply.NestedParam.0.Name=value
  var builder = new QueryParamSerializer();
  builder.serialize(req.params, operation.input, function(name, value) {
    httpRequest.params[name] = value;
  });
  httpRequest.body = util.queryParamsToString(httpRequest.params);
}

function extractError(resp) {
  var data, body = resp.httpResponse.body.toString();
  if (body.match('<UnknownOperationException')) {
    data = {
      Code: 'UnknownOperation',
      Message: 'Unknown operation ' + resp.request.operation
    };
  } else {
    try {
      data = new AWS.XML.Parser().parse(body);
    } catch (e) {
      data = {
        Code: resp.httpResponse.statusCode,
        Message: resp.httpResponse.statusMessage
      };
    }
  }

  if (data.requestId && !resp.requestId) resp.requestId = data.requestId;
  if (data.Errors) data = data.Errors;
  if (data.Error) data = data.Error;
  if (data.Code) {
    resp.error = util.error(new Error(), {
      code: data.Code,
      message: data.Message
    });
  } else {
    resp.error = util.error(new Error(), {
      code: resp.httpResponse.statusCode,
      message: null
    });
  }
}

function extractData(resp) {
  var req = resp.request;
  var operation = req.service.api.operations[req.operation];
  var shape = operation.output || {};
  var origRules = shape;

  if (origRules.resultWrapper) {
    var tmp = Shape.create({type: 'structure'});
    tmp.members[origRules.resultWrapper] = shape;
    tmp.memberNames = [origRules.resultWrapper];
    util.property(shape, 'name', shape.resultWrapper);
    shape = tmp;
  }

  var parser = new AWS.XML.Parser();

  // TODO: Refactor XML Parser to parse RequestId from response.
  if (shape && shape.members && !shape.members._XAMZRequestId) {
    var requestIdShape = Shape.create(
      { type: 'string' },
      { api: { protocol: 'query' } },
      'requestId'
    );
    shape.members._XAMZRequestId = requestIdShape;
  }

  var data = parser.parse(resp.httpResponse.body.toString(), shape);
  resp.requestId = data._XAMZRequestId || data.requestId;

  if (data._XAMZRequestId) delete data._XAMZRequestId;

  if (origRules.resultWrapper) {
    if (data[origRules.resultWrapper]) {
      util.update(data, data[origRules.resultWrapper]);
      delete data[origRules.resultWrapper];
    }
  }

  resp.data = data;
}

module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(4);
var Rest = __webpack_require__(28);
var Json = __webpack_require__(57);
var JsonBuilder = __webpack_require__(55);
var JsonParser = __webpack_require__(56);

function populateBody(req) {
  var builder = new JsonBuilder();
  var input = req.service.api.operations[req.operation].input;

  if (input.payload) {
    var params = {};
    var payloadShape = input.members[input.payload];
    params = req.params[input.payload];
    if (params === undefined) return;

    if (payloadShape.type === 'structure') {
      req.httpRequest.body = builder.build(params, payloadShape);
    } else { // non-JSON payload
      req.httpRequest.body = params;
    }
  } else {
    req.httpRequest.body = builder.build(req.params, input);
  }
}

function buildRequest(req) {
  Rest.buildRequest(req);

  // never send body payload on GET/HEAD/DELETE
  if (['GET', 'HEAD', 'DELETE'].indexOf(req.httpRequest.method) < 0) {
    populateBody(req);
  }
}

function extractError(resp) {
  Json.extractError(resp);
}

function extractData(resp) {
  Rest.extractData(resp);

  var req = resp.request;
  var rules = req.service.api.operations[req.operation].output || {};
  if (rules.payload) {
    var payloadMember = rules.members[rules.payload];
    var body = resp.httpResponse.body;
    if (payloadMember.isStreaming) {
      resp.data[rules.payload] = body;
    } else if (payloadMember.type === 'structure' || payloadMember.type === 'list') {
      var parser = new JsonParser();
      resp.data[rules.payload] = parser.parse(body, payloadMember);
    } else {
      resp.data[rules.payload] = body.toString();
    }
  } else {
    var data = resp.data;
    Json.extractData(resp);
    resp.data = util.merge(data, resp.data);
  }
}

module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var util = __webpack_require__(4);
var Rest = __webpack_require__(28);

function populateBody(req) {
  var input = req.service.api.operations[req.operation].input;
  var builder = new AWS.XML.Builder();
  var params = req.params;

  var payload = input.payload;
  if (payload) {
    var payloadMember = input.members[payload];
    params = params[payload];
    if (params === undefined) return;

    if (payloadMember.type === 'structure') {
      var rootElement = payloadMember.name;
      req.httpRequest.body = builder.toXML(params, payloadMember, rootElement, true);
    } else { // non-xml payload
      req.httpRequest.body = params;
    }
  } else {
    req.httpRequest.body = builder.toXML(params, input, input.name ||
      input.shape || util.string.upperFirst(req.operation) + 'Request');
  }
}

function buildRequest(req) {
  Rest.buildRequest(req);

  // never send body payload on GET/HEAD
  if (['GET', 'HEAD'].indexOf(req.httpRequest.method) < 0) {
    populateBody(req);
  }
}

function extractError(resp) {
  Rest.extractError(resp);

  var data;
  try {
    data = new AWS.XML.Parser().parse(resp.httpResponse.body.toString());
  } catch (e) {
    data = {
      Code: resp.httpResponse.statusCode,
      Message: resp.httpResponse.statusMessage
    };
  }

  if (data.Errors) data = data.Errors;
  if (data.Error) data = data.Error;
  if (data.Code) {
    resp.error = util.error(new Error(), {
      code: data.Code,
      message: data.Message
    });
  } else {
    resp.error = util.error(new Error(), {
      code: resp.httpResponse.statusCode,
      message: null
    });
  }
}

function extractData(resp) {
  Rest.extractData(resp);

  var parser;
  var req = resp.request;
  var body = resp.httpResponse.body;
  var operation = req.service.api.operations[req.operation];
  var output = operation.output;

  var payload = output.payload;
  if (payload) {
    var payloadMember = output.members[payload];
    if (payloadMember.isStreaming) {
      resp.data[payload] = body;
    } else if (payloadMember.type === 'structure') {
      parser = new AWS.XML.Parser();
      resp.data[payload] = parser.parse(body.toString(), payloadMember);
    } else {
      resp.data[payload] = body.toString();
    }
  } else if (body.length > 0) {
    parser = new AWS.XML.Parser();
    var data = parser.parse(body.toString(), output);
    util.update(resp.data, data);
  }
}

module.exports = {
  buildRequest: buildRequest,
  extractError: extractError,
  extractData: extractData
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);

/**
 * @api private
 * @!method on(eventName, callback)
 *   Registers an event listener callback for the event given by `eventName`.
 *   Parameters passed to the callback function depend on the individual event
 *   being triggered. See the event documentation for those parameters.
 *
 *   @param eventName [String] the event name to register the listener for
 *   @param callback [Function] the listener callback function
 *   @return [AWS.SequentialExecutor] the same object for chaining
 */
AWS.SequentialExecutor = AWS.util.inherit({

  constructor: function SequentialExecutor() {
    this._events = {};
  },

  /**
   * @api private
   */
  listeners: function listeners(eventName) {
    return this._events[eventName] ? this._events[eventName].slice(0) : [];
  },

  on: function on(eventName, listener) {
    if (this._events[eventName]) {
      this._events[eventName].push(listener);
    } else {
      this._events[eventName] = [listener];
    }
    return this;
  },

  /**
   * @api private
   */
  onAsync: function onAsync(eventName, listener) {
    listener._isAsync = true;
    return this.on(eventName, listener);
  },

  removeListener: function removeListener(eventName, listener) {
    var listeners = this._events[eventName];
    if (listeners) {
      var length = listeners.length;
      var position = -1;
      for (var i = 0; i < length; ++i) {
        if (listeners[i] === listener) {
          position = i;
        }
      }
      if (position > -1) {
        listeners.splice(position, 1);
      }
    }
    return this;
  },

  removeAllListeners: function removeAllListeners(eventName) {
    if (eventName) {
      delete this._events[eventName];
    } else {
      this._events = {};
    }
    return this;
  },

  /**
   * @api private
   */
  emit: function emit(eventName, eventArgs, doneCallback) {
    if (!doneCallback) doneCallback = function() { };
    var listeners = this.listeners(eventName);
    var count = listeners.length;
    this.callListeners(listeners, eventArgs, doneCallback);
    return count > 0;
  },

  /**
   * @api private
   */
  callListeners: function callListeners(listeners, args, doneCallback, prevError) {
    var self = this;
    var error = prevError || null;

    function callNextListener(err) {
      if (err) {
        error = AWS.util.error(error || new Error(), err);
        if (self._haltHandlersOnError) {
          return doneCallback.call(self, error);
        }
      }
      self.callListeners(listeners, args, doneCallback, error);
    }

    while (listeners.length > 0) {
      var listener = listeners.shift();
      if (listener._isAsync) { // asynchronous listener
        listener.apply(self, args.concat([callNextListener]));
        return; // stop here, callNextListener will continue
      } else { // synchronous listener
        try {
          listener.apply(self, args);
        } catch (err) {
          error = AWS.util.error(error || new Error(), err);
        }
        if (error && self._haltHandlersOnError) {
          doneCallback.call(self, error);
          return;
        }
      }
    }
    doneCallback.call(self, error);
  },

  /**
   * Adds or copies a set of listeners from another list of
   * listeners or SequentialExecutor object.
   *
   * @param listeners [map<String,Array<Function>>, AWS.SequentialExecutor]
   *   a list of events and callbacks, or an event emitter object
   *   containing listeners to add to this emitter object.
   * @return [AWS.SequentialExecutor] the emitter object, for chaining.
   * @example Adding listeners from a map of listeners
   *   emitter.addListeners({
   *     event1: [function() { ... }, function() { ... }],
   *     event2: [function() { ... }]
   *   });
   *   emitter.emit('event1'); // emitter has event1
   *   emitter.emit('event2'); // emitter has event2
   * @example Adding listeners from another emitter object
   *   var emitter1 = new AWS.SequentialExecutor();
   *   emitter1.on('event1', function() { ... });
   *   emitter1.on('event2', function() { ... });
   *   var emitter2 = new AWS.SequentialExecutor();
   *   emitter2.addListeners(emitter1);
   *   emitter2.emit('event1'); // emitter2 has event1
   *   emitter2.emit('event2'); // emitter2 has event2
   */
  addListeners: function addListeners(listeners) {
    var self = this;

    // extract listeners if parameter is an SequentialExecutor object
    if (listeners._events) listeners = listeners._events;

    AWS.util.each(listeners, function(event, callbacks) {
      if (typeof callbacks === 'function') callbacks = [callbacks];
      AWS.util.arrayEach(callbacks, function(callback) {
        self.on(event, callback);
      });
    });

    return self;
  },

  /**
   * Registers an event with {on} and saves the callback handle function
   * as a property on the emitter object using a given `name`.
   *
   * @param name [String] the property name to set on this object containing
   *   the callback function handle so that the listener can be removed in
   *   the future.
   * @param (see on)
   * @return (see on)
   * @example Adding a named listener DATA_CALLBACK
   *   var listener = function() { doSomething(); };
   *   emitter.addNamedListener('DATA_CALLBACK', 'data', listener);
   *
   *   // the following prints: true
   *   console.log(emitter.DATA_CALLBACK == listener);
   */
  addNamedListener: function addNamedListener(name, eventName, callback) {
    this[name] = callback;
    this.addListener(eventName, callback);
    return this;
  },

  /**
   * @api private
   */
  addNamedAsyncListener: function addNamedAsyncListener(name, eventName, callback) {
    callback._isAsync = true;
    return this.addNamedListener(name, eventName, callback);
  },

  /**
   * Helper method to add a set of named listeners using
   * {addNamedListener}. The callback contains a parameter
   * with a handle to the `addNamedListener` method.
   *
   * @callback callback function(add)
   *   The callback function is called immediately in order to provide
   *   the `add` function to the block. This simplifies the addition of
   *   a large group of named listeners.
   *   @param add [Function] the {addNamedListener} function to call
   *     when registering listeners.
   * @example Adding a set of named listeners
   *   emitter.addNamedListeners(function(add) {
   *     add('DATA_CALLBACK', 'data', function() { ... });
   *     add('OTHER', 'otherEvent', function() { ... });
   *     add('LAST', 'lastEvent', function() { ... });
   *   });
   *
   *   // these properties are now set:
   *   emitter.DATA_CALLBACK;
   *   emitter.OTHER;
   *   emitter.LAST;
   */
  addNamedListeners: function addNamedListeners(callback) {
    var self = this;
    callback(
      function() {
        self.addNamedListener.apply(self, arguments);
      },
      function() {
        self.addNamedAsyncListener.apply(self, arguments);
      }
    );
    return this;
  }
});

/**
 * {on} is the prefered method.
 * @api private
 */
AWS.SequentialExecutor.prototype.addListener = AWS.SequentialExecutor.prototype.on;

module.exports = AWS.SequentialExecutor;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);
var inherit = AWS.util.inherit;

/**
 * @api private
 */
AWS.Signers.V3 = inherit(AWS.Signers.RequestSigner, {
  addAuthorization: function addAuthorization(credentials, date) {

    var datetime = AWS.util.date.rfc822(date);

    this.request.headers['X-Amz-Date'] = datetime;

    if (credentials.sessionToken) {
      this.request.headers['x-amz-security-token'] = credentials.sessionToken;
    }

    this.request.headers['X-Amzn-Authorization'] =
      this.authorization(credentials, datetime);

  },

  authorization: function authorization(credentials) {
    return 'AWS3 ' +
      'AWSAccessKeyId=' + credentials.accessKeyId + ',' +
      'Algorithm=HmacSHA256,' +
      'SignedHeaders=' + this.signedHeaders() + ',' +
      'Signature=' + this.signature(credentials);
  },

  signedHeaders: function signedHeaders() {
    var headers = [];
    AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
      headers.push(h.toLowerCase());
    });
    return headers.sort().join(';');
  },

  canonicalHeaders: function canonicalHeaders() {
    var headers = this.request.headers;
    var parts = [];
    AWS.util.arrayEach(this.headersToSign(), function iterator(h) {
      parts.push(h.toLowerCase().trim() + ':' + String(headers[h]).trim());
    });
    return parts.sort().join('\n') + '\n';
  },

  headersToSign: function headersToSign() {
    var headers = [];
    AWS.util.each(this.request.headers, function iterator(k) {
      if (k === 'Host' || k === 'Content-Encoding' || k.match(/^X-Amz/i)) {
        headers.push(k);
      }
    });
    return headers;
  },

  signature: function signature(credentials) {
    return AWS.util.crypto.hmac(credentials.secretAccessKey, this.stringToSign(), 'base64');
  },

  stringToSign: function stringToSign() {
    var parts = [];
    parts.push(this.request.method);
    parts.push('/');
    parts.push('');
    parts.push(this.canonicalHeaders());
    parts.push(this.request.body);
    return AWS.util.crypto.sha256(parts.join('\n'));
  }

});

module.exports = AWS.Signers.V3;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var AWS = __webpack_require__(0);

/**
 * @api private
 */
var cachedSecret = {};

/**
 * @api private
 */
var cacheQueue = [];

/**
 * @api private
 */
var maxCacheEntries = 50;

/**
 * @api private
 */
var v4Identifier = 'aws4_request';

module.exports = {
  /**
   * @api private
   *
   * @param date [String]
   * @param region [String]
   * @param serviceName [String]
   * @return [String]
   */
  createScope: function createScope(date, region, serviceName) {
    return [
      date.substr(0, 8),
      region,
      serviceName,
      v4Identifier
    ].join('/');
  },

  /**
   * @api private
   *
   * @param credentials [Credentials]
   * @param date [String]
   * @param region [String]
   * @param service [String]
   * @param shouldCache [Boolean]
   * @return [String]
   */
  getSigningKey: function getSigningKey(
    credentials,
    date,
    region,
    service,
    shouldCache
  ) {
    var credsIdentifier = AWS.util.crypto
      .hmac(credentials.secretAccessKey, credentials.accessKeyId, 'base64');
    var cacheKey = [credsIdentifier, date, region, service].join('_');
    shouldCache = shouldCache !== false;
    if (shouldCache && (cacheKey in cachedSecret)) {
      return cachedSecret[cacheKey];
    }

    var kDate = AWS.util.crypto.hmac(
      'AWS4' + credentials.secretAccessKey,
      date,
      'buffer'
    );
    var kRegion = AWS.util.crypto.hmac(kDate, region, 'buffer');
    var kService = AWS.util.crypto.hmac(kRegion, service, 'buffer');

    var signingKey = AWS.util.crypto.hmac(kService, v4Identifier, 'buffer');
    if (shouldCache) {
      cachedSecret[cacheKey] = signingKey;
      cacheQueue.push(cacheKey);
      if (cacheQueue.length > maxCacheEntries) {
        // remove the oldest entry (not the least recently used)
        delete cachedSecret[cacheQueue.shift()];
      }
    }

    return signingKey;
  },

  /**
   * @api private
   *
   * Empties the derived signing key cache. Made available for testing purposes
   * only.
   */
  emptyCache: function emptyCache() {
    cachedSecret = {};
    cacheQueue = [];
  }
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GetData = __webpack_require__(524);

Object.defineProperty(exports, 'GetData', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GetData).default;
  }
});

var _GetItem = __webpack_require__(525);

Object.defineProperty(exports, 'GetItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GetItem).default;
  }
});

var _PutData = __webpack_require__(526);

Object.defineProperty(exports, 'PutData', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PutData).default;
  }
});

var _PutItem = __webpack_require__(527);

Object.defineProperty(exports, 'PutItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PutItem).default;
  }
});

var _DeleteData = __webpack_require__(523);

Object.defineProperty(exports, 'DeleteData', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DeleteData).default;
  }
});

var _utils = __webpack_require__(41);

Object.defineProperty(exports, 'isObject', {
  enumerable: true,
  get: function get() {
    return _utils.isObject;
  }
});
Object.defineProperty(exports, 'isNumber', {
  enumerable: true,
  get: function get() {
    return _utils.isNumber;
  }
});
Object.defineProperty(exports, 'Put', {
  enumerable: true,
  get: function get() {
    return _utils.Put;
  }
});
Object.defineProperty(exports, 'toPaths', {
  enumerable: true,
  get: function get() {
    return _utils.toPaths;
  }
});
Object.defineProperty(exports, 'fromPaths', {
  enumerable: true,
  get: function get() {
    return _utils.fromPaths;
  }
});
Object.defineProperty(exports, 'docClient', {
  enumerable: true,
  get: function get() {
    return _utils.docClient;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(111);

var _extends3 = _interopRequireDefault(_extends2);

var _awsSdk = __webpack_require__(470);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(config) {
  _awsSdk2.default.config.update((0, _extends3.default)({
    region: 'us-east-1'
  }, config));
  return new _awsSdk2.default.DynamoDB.DocumentClient();
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/serverless/functions/utils/DolliDB/src/utils/CreateDocClient.js');
}();

;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(58);

var _assign2 = _interopRequireDefault(_assign);

var _promise = __webpack_require__(29);

var _promise2 = _interopRequireDefault(_promise);

var _docClient = __webpack_require__(22);

var _docClient2 = _interopRequireDefault(_docClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var putItem = function putItem(TableName) {
  return function (params, meta) {
    return new _promise2.default(function (resolve, reject) {
      var query = (0, _assign2.default)({ TableName: TableName }, params);
      _docClient2.default.put(query, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve({
            data: data,
            meta: meta
          });
        }
      });
    });
  };
};

var _default = putItem;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(putItem, 'putItem', '/Users/realseanp1/Projects/archadon/serverless/functions/utils/DolliDB/src/utils/Put.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/serverless/functions/utils/DolliDB/src/utils/Put.js');
}();

;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(113);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = fromPaths;

var _index = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getRef = function getRef(key) {
  return (0, _index.isNumber)(key) ? [] : {};
}; //eslint-disable-line

var setter = function setter(obj) {
  return function (path, value) {
    var list = path.split('.');
    var last = list.length - 1;

    return list.reduce(function (context, key, i) {
      // eslint-disable-line
      if (i < last) {
        var nextKey = list[i + 1];
        context[key] = context[key] ? context[key] : getRef(nextKey);
        return context[key];
      } else {
        if (value === '<<EmptyArray>>') {
          value = [];
        }
        context[key] = value;
      }
    }, obj);
  };
};

function fromPaths(paths) {
  var obj = {};
  var set = setter(obj);
  paths.forEach(function (tuple) {
    return set.apply(undefined, (0, _toConsumableArray3.default)(tuple));
  });
  return obj;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fromPaths, 'fromPaths', '/Users/realseanp1/Projects/archadon/serverless/functions/utils/DolliDB/src/utils/fromPaths.js');

  __REACT_HOT_LOADER__.register(getRef, 'getRef', '/Users/realseanp1/Projects/archadon/serverless/functions/utils/DolliDB/src/utils/fromPaths.js');

  __REACT_HOT_LOADER__.register(setter, 'setter', '/Users/realseanp1/Projects/archadon/serverless/functions/utils/DolliDB/src/utils/fromPaths.js');
}();

;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(112);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = __webpack_require__(534);

var _entries2 = _interopRequireDefault(_entries);

var _toConsumableArray2 = __webpack_require__(113);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

exports.default = toPaths;

var _index = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function arrayToPaths(arr, prefix) {
  var output = [];
  arr.forEach(function (val, i) {
    var name = prefix + '.' + i;
    if ((0, _index.isObject)(val)) {
      output.push.apply(output, (0, _toConsumableArray3.default)(reduceObject(val, [], name)));
    } else if (Array.isArray(val)) {
      output.push.apply(output, (0, _toConsumableArray3.default)(arrayToPaths(val, name)));
    } else {
      output.push([name, val]);
    }
  });
  return output;
}

function reduceObject(object, initialValue, prefix) {
  return (0, _entries2.default)(object).reduce(function (a, _ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    var name = prefix ? prefix + '.' + key : key;
    if ((0, _index.isNumber)(key)) {
      throw new Error('Object has key ' + name + ' which is a number. This is not allowed.');
    }
    if ((0, _index.isObject)(value)) {
      a.push.apply(a, (0, _toConsumableArray3.default)(reduceObject(value, [], name)));
    } else if (Array.isArray(value) && value.length > 0) {
      a.push.apply(a, (0, _toConsumableArray3.default)(arrayToPaths(value, name)));
    } else if (Array.isArray(value) && value.length === 0) {
      a.push([name, '<<EmptyArray>>']);
    } else {
      a.push([name, value]);
    }
    return a;
  }, initialValue);
}

function toPaths(d) {
  if (!(0, _index.isObject)(d)) {
    throw new Error('toPaths expects an Object got ' + d);
  }
  return reduceObject(d, []);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(arrayToPaths, 'arrayToPaths', '/Users/realseanp1/Projects/archadon/serverless/functions/utils/DolliDB/src/utils/toPaths.js');

  __REACT_HOT_LOADER__.register(reduceObject, 'reduceObject', '/Users/realseanp1/Projects/archadon/serverless/functions/utils/DolliDB/src/utils/toPaths.js');

  __REACT_HOT_LOADER__.register(toPaths, 'toPaths', '/Users/realseanp1/Projects/archadon/serverless/functions/utils/DolliDB/src/utils/toPaths.js');
}();

;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(58);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(532);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(531);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(530);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8).document && document.documentElement;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(14) && !__webpack_require__(32)(function(){
  return Object.defineProperty(__webpack_require__(63)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(30);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(23)
  , ITERATOR   = __webpack_require__(5)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(13);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(42)
  , $export        = __webpack_require__(16)
  , redefine       = __webpack_require__(124)
  , hide           = __webpack_require__(18)
  , has            = __webpack_require__(17)
  , Iterators      = __webpack_require__(23)
  , $iterCreate    = __webpack_require__(555)
  , setToStringTag = __webpack_require__(43)
  , getPrototypeOf = __webpack_require__(564)
  , ITERATOR       = __webpack_require__(5)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(5)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(13)
  , dPs         = __webpack_require__(561)
  , enumBugKeys = __webpack_require__(64)
  , IE_PROTO    = __webpack_require__(66)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(63)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(114).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(123)
  , hiddenKeys = __webpack_require__(64).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(17)
  , toIObject    = __webpack_require__(15)
  , arrayIndexOf = __webpack_require__(549)(false)
  , IE_PROTO     = __webpack_require__(66)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(31)
  , invoke             = __webpack_require__(553)
  , html               = __webpack_require__(114)
  , cel                = __webpack_require__(63)
  , global             = __webpack_require__(8)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(30)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 126 */
/***/ (function(module, exports) {



/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(46),
    stackClear = __webpack_require__(661),
    stackDelete = __webpack_require__(662),
    stackGet = __webpack_require__(663),
    stackHas = __webpack_require__(664),
    stackSet = __webpack_require__(665);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(129),
    eq = __webpack_require__(52);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(135);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(133),
    toKey = __webpack_require__(51);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(605),
    isObjectLike = __webpack_require__(39);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(80),
    nativeKeys = __webpack_require__(651);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(9),
    isKey = __webpack_require__(79),
    stringToPath = __webpack_require__(666),
    toString = __webpack_require__(677);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(128),
    baseAssignValue = __webpack_require__(129);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(19);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(586),
    arraySome = __webpack_require__(595),
    cacheHas = __webpack_require__(619);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(582),
    Map = __webpack_require__(76),
    Promise = __webpack_require__(584),
    Set = __webpack_require__(585),
    WeakMap = __webpack_require__(588),
    baseGetTag = __webpack_require__(37),
    toSource = __webpack_require__(142);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(52),
    isArrayLike = __webpack_require__(38),
    isIndex = __webpack_require__(78),
    isObject = __webpack_require__(10);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 142 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 143 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// Unique ID creation requires a high quality random # generator.  In node.js
// this is prett straight-forward - we use the crypto API.

var rb = __webpack_require__(162).randomBytes;

function rng() {
  return rb(16);
};

module.exports = rng;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLCData, XMLNode, create,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  create = __webpack_require__(7);

  XMLNode = __webpack_require__(25);

  module.exports = XMLCData = (function(superClass) {
    extend(XMLCData, superClass);

    function XMLCData(parent, text) {
      XMLCData.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing CDATA text");
      }
      this.text = this.stringify.cdata(text);
    }

    XMLCData.prototype.clone = function() {
      return create(XMLCData.prototype, this);
    };

    XMLCData.prototype.toString = function(options, level) {
      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      r += '<![CDATA[' + this.text + ']]>';
      if (pretty) {
        r += newline;
      }
      return r;
    };

    return XMLCData;

  })(XMLNode);

}).call(this);


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLComment, XMLNode, create,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  create = __webpack_require__(7);

  XMLNode = __webpack_require__(25);

  module.exports = XMLComment = (function(superClass) {
    extend(XMLComment, superClass);

    function XMLComment(parent, text) {
      XMLComment.__super__.constructor.call(this, parent);
      if (text == null) {
        throw new Error("Missing comment text");
      }
      this.text = this.stringify.comment(text);
    }

    XMLComment.prototype.clone = function() {
      return create(XMLComment.prototype, this);
    };

    XMLComment.prototype.toString = function(options, level) {
      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      r += '<!-- ' + this.text + ' -->';
      if (pretty) {
        r += newline;
      }
      return r;
    };

    return XMLComment;

  })(XMLNode);

}).call(this);


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLDeclaration, XMLNode, create, isObject,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  create = __webpack_require__(7);

  isObject = __webpack_require__(10);

  XMLNode = __webpack_require__(25);

  module.exports = XMLDeclaration = (function(superClass) {
    extend(XMLDeclaration, superClass);

    function XMLDeclaration(parent, version, encoding, standalone) {
      var ref;
      XMLDeclaration.__super__.constructor.call(this, parent);
      if (isObject(version)) {
        ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
      }
      if (!version) {
        version = '1.0';
      }
      this.version = this.stringify.xmlVersion(version);
      if (encoding != null) {
        this.encoding = this.stringify.xmlEncoding(encoding);
      }
      if (standalone != null) {
        this.standalone = this.stringify.xmlStandalone(standalone);
      }
    }

    XMLDeclaration.prototype.toString = function(options, level) {
      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      r += '<?xml';
      r += ' version="' + this.version + '"';
      if (this.encoding != null) {
        r += ' encoding="' + this.encoding + '"';
      }
      if (this.standalone != null) {
        r += ' standalone="' + this.standalone + '"';
      }
      r += '?>';
      if (pretty) {
        r += newline;
      }
      return r;
    };

    return XMLDeclaration;

  })(XMLNode);

}).call(this);


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDocType, XMLProcessingInstruction, create, isObject;

  create = __webpack_require__(7);

  isObject = __webpack_require__(10);

  XMLCData = __webpack_require__(146);

  XMLComment = __webpack_require__(147);

  XMLDTDAttList = __webpack_require__(687);

  XMLDTDEntity = __webpack_require__(689);

  XMLDTDElement = __webpack_require__(688);

  XMLDTDNotation = __webpack_require__(690);

  XMLProcessingInstruction = __webpack_require__(151);

  module.exports = XMLDocType = (function() {
    function XMLDocType(parent, pubID, sysID) {
      var ref, ref1;
      this.documentObject = parent;
      this.stringify = this.documentObject.stringify;
      this.children = [];
      if (isObject(pubID)) {
        ref = pubID, pubID = ref.pubID, sysID = ref.sysID;
      }
      if (sysID == null) {
        ref1 = [pubID, sysID], sysID = ref1[0], pubID = ref1[1];
      }
      if (pubID != null) {
        this.pubID = this.stringify.dtdPubID(pubID);
      }
      if (sysID != null) {
        this.sysID = this.stringify.dtdSysID(sysID);
      }
    }

    XMLDocType.prototype.element = function(name, value) {
      var child;
      child = new XMLDTDElement(this, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      var child;
      child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.entity = function(name, value) {
      var child;
      child = new XMLDTDEntity(this, false, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.pEntity = function(name, value) {
      var child;
      child = new XMLDTDEntity(this, true, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.notation = function(name, value) {
      var child;
      child = new XMLDTDNotation(this, name, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.cdata = function(value) {
      var child;
      child = new XMLCData(this, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.comment = function(value) {
      var child;
      child = new XMLComment(this, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.instruction = function(target, value) {
      var child;
      child = new XMLProcessingInstruction(this, target, value);
      this.children.push(child);
      return this;
    };

    XMLDocType.prototype.root = function() {
      return this.documentObject.root();
    };

    XMLDocType.prototype.document = function() {
      return this.documentObject;
    };

    XMLDocType.prototype.toString = function(options, level) {
      var child, i, indent, len, newline, offset, pretty, r, ref, ref1, ref2, ref3, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      r += '<!DOCTYPE ' + this.root().name;
      if (this.pubID && this.sysID) {
        r += ' PUBLIC "' + this.pubID + '" "' + this.sysID + '"';
      } else if (this.sysID) {
        r += ' SYSTEM "' + this.sysID + '"';
      }
      if (this.children.length > 0) {
        r += ' [';
        if (pretty) {
          r += newline;
        }
        ref3 = this.children;
        for (i = 0, len = ref3.length; i < len; i++) {
          child = ref3[i];
          r += child.toString(options, level + 1);
        }
        r += ']';
      }
      r += '>';
      if (pretty) {
        r += newline;
      }
      return r;
    };

    XMLDocType.prototype.ele = function(name, value) {
      return this.element(name, value);
    };

    XMLDocType.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
      return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
    };

    XMLDocType.prototype.ent = function(name, value) {
      return this.entity(name, value);
    };

    XMLDocType.prototype.pent = function(name, value) {
      return this.pEntity(name, value);
    };

    XMLDocType.prototype.not = function(name, value) {
      return this.notation(name, value);
    };

    XMLDocType.prototype.dat = function(value) {
      return this.cdata(value);
    };

    XMLDocType.prototype.com = function(value) {
      return this.comment(value);
    };

    XMLDocType.prototype.ins = function(target, value) {
      return this.instruction(target, value);
    };

    XMLDocType.prototype.up = function() {
      return this.root();
    };

    XMLDocType.prototype.doc = function() {
      return this.document();
    };

    return XMLDocType;

  })();

}).call(this);


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLAttribute, XMLElement, XMLNode, XMLProcessingInstruction, create, every, isFunction, isObject,
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  create = __webpack_require__(7);

  isObject = __webpack_require__(10);

  isFunction = __webpack_require__(53);

  every = __webpack_require__(669);

  XMLNode = __webpack_require__(25);

  XMLAttribute = __webpack_require__(685);

  XMLProcessingInstruction = __webpack_require__(151);

  module.exports = XMLElement = (function(superClass) {
    extend(XMLElement, superClass);

    function XMLElement(parent, name, attributes) {
      XMLElement.__super__.constructor.call(this, parent);
      if (name == null) {
        throw new Error("Missing element name");
      }
      this.name = this.stringify.eleName(name);
      this.children = [];
      this.instructions = [];
      this.attributes = {};
      if (attributes != null) {
        this.attribute(attributes);
      }
    }

    XMLElement.prototype.clone = function() {
      var att, attName, clonedSelf, i, len, pi, ref, ref1;
      clonedSelf = create(XMLElement.prototype, this);
      if (clonedSelf.isRoot) {
        clonedSelf.documentObject = null;
      }
      clonedSelf.attributes = {};
      ref = this.attributes;
      for (attName in ref) {
        if (!hasProp.call(ref, attName)) continue;
        att = ref[attName];
        clonedSelf.attributes[attName] = att.clone();
      }
      clonedSelf.instructions = [];
      ref1 = this.instructions;
      for (i = 0, len = ref1.length; i < len; i++) {
        pi = ref1[i];
        clonedSelf.instructions.push(pi.clone());
      }
      clonedSelf.children = [];
      this.children.forEach(function(child) {
        var clonedChild;
        clonedChild = child.clone();
        clonedChild.parent = clonedSelf;
        return clonedSelf.children.push(clonedChild);
      });
      return clonedSelf;
    };

    XMLElement.prototype.attribute = function(name, value) {
      var attName, attValue;
      if (name != null) {
        name = name.valueOf();
      }
      if (isObject(name)) {
        for (attName in name) {
          if (!hasProp.call(name, attName)) continue;
          attValue = name[attName];
          this.attribute(attName, attValue);
        }
      } else {
        if (isFunction(value)) {
          value = value.apply();
        }
        if (!this.options.skipNullAttributes || (value != null)) {
          this.attributes[name] = new XMLAttribute(this, name, value);
        }
      }
      return this;
    };

    XMLElement.prototype.removeAttribute = function(name) {
      var attName, i, len;
      if (name == null) {
        throw new Error("Missing attribute name");
      }
      name = name.valueOf();
      if (Array.isArray(name)) {
        for (i = 0, len = name.length; i < len; i++) {
          attName = name[i];
          delete this.attributes[attName];
        }
      } else {
        delete this.attributes[name];
      }
      return this;
    };

    XMLElement.prototype.instruction = function(target, value) {
      var i, insTarget, insValue, instruction, len;
      if (target != null) {
        target = target.valueOf();
      }
      if (value != null) {
        value = value.valueOf();
      }
      if (Array.isArray(target)) {
        for (i = 0, len = target.length; i < len; i++) {
          insTarget = target[i];
          this.instruction(insTarget);
        }
      } else if (isObject(target)) {
        for (insTarget in target) {
          if (!hasProp.call(target, insTarget)) continue;
          insValue = target[insTarget];
          this.instruction(insTarget, insValue);
        }
      } else {
        if (isFunction(value)) {
          value = value.apply();
        }
        instruction = new XMLProcessingInstruction(this, target, value);
        this.instructions.push(instruction);
      }
      return this;
    };

    XMLElement.prototype.toString = function(options, level) {
      var att, child, i, indent, instruction, j, len, len1, name, newline, offset, pretty, r, ref, ref1, ref2, ref3, ref4, ref5, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      ref3 = this.instructions;
      for (i = 0, len = ref3.length; i < len; i++) {
        instruction = ref3[i];
        r += instruction.toString(options, level);
      }
      if (pretty) {
        r += space;
      }
      r += '<' + this.name;
      ref4 = this.attributes;
      for (name in ref4) {
        if (!hasProp.call(ref4, name)) continue;
        att = ref4[name];
        r += att.toString(options);
      }
      if (this.children.length === 0 || every(this.children, function(e) {
        return e.value === '';
      })) {
        r += '/>';
        if (pretty) {
          r += newline;
        }
      } else if (pretty && this.children.length === 1 && (this.children[0].value != null)) {
        r += '>';
        r += this.children[0].value;
        r += '</' + this.name + '>';
        r += newline;
      } else {
        r += '>';
        if (pretty) {
          r += newline;
        }
        ref5 = this.children;
        for (j = 0, len1 = ref5.length; j < len1; j++) {
          child = ref5[j];
          r += child.toString(options, level + 1);
        }
        if (pretty) {
          r += space;
        }
        r += '</' + this.name + '>';
        if (pretty) {
          r += newline;
        }
      }
      return r;
    };

    XMLElement.prototype.att = function(name, value) {
      return this.attribute(name, value);
    };

    XMLElement.prototype.ins = function(target, value) {
      return this.instruction(target, value);
    };

    XMLElement.prototype.a = function(name, value) {
      return this.attribute(name, value);
    };

    XMLElement.prototype.i = function(target, value) {
      return this.instruction(target, value);
    };

    return XMLElement;

  })(XMLNode);

}).call(this);


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLProcessingInstruction, create;

  create = __webpack_require__(7);

  module.exports = XMLProcessingInstruction = (function() {
    function XMLProcessingInstruction(parent, target, value) {
      this.stringify = parent.stringify;
      if (target == null) {
        throw new Error("Missing instruction target");
      }
      this.target = this.stringify.insTarget(target);
      if (value) {
        this.value = this.stringify.insValue(value);
      }
    }

    XMLProcessingInstruction.prototype.clone = function() {
      return create(XMLProcessingInstruction.prototype, this);
    };

    XMLProcessingInstruction.prototype.toString = function(options, level) {
      var indent, newline, offset, pretty, r, ref, ref1, ref2, space;
      pretty = (options != null ? options.pretty : void 0) || false;
      indent = (ref = options != null ? options.indent : void 0) != null ? ref : '  ';
      offset = (ref1 = options != null ? options.offset : void 0) != null ? ref1 : 0;
      newline = (ref2 = options != null ? options.newline : void 0) != null ? ref2 : '\n';
      level || (level = 0);
      space = new Array(level + offset + 1).join(indent);
      r = '';
      if (pretty) {
        r += space;
      }
      r += '<?';
      r += this.target;
      if (this.value) {
        r += ' ' + this.value;
      }
      r += '?>';
      if (pretty) {
        r += newline;
      }
      return r;
    };

    return XMLProcessingInstruction;

  })();

}).call(this);


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// Generated by CoffeeScript 1.9.1
(function() {
  var XMLBuilder, assign;

  assign = __webpack_require__(667);

  XMLBuilder = __webpack_require__(686);

  module.exports.create = function(name, xmldec, doctype, options) {
    options = assign({}, xmldec, doctype, options);
    return new XMLBuilder(name, options).root();
  };

}).call(this);


/***/ }),
/* 153 */
/***/ (function(module, exports) {

/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */

/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */

function exclude () {
  var excludes = [].slice.call(arguments);

  function excludeProps (res, obj) {
    Object.keys(obj).forEach(function (key) {
      if (!~excludes.indexOf(key)) res[key] = obj[key];
    });
  }

  return function extendExclude () {
    var args = [].slice.call(arguments)
      , i = 0
      , res = {};

    for (; i < args.length; i++) {
      excludeProps(res, args[i]);
    }

    return res;
  };
};

/*!
 * Primary Exports
 */

module.exports = AssertionError;

/**
 * ### AssertionError
 *
 * An extension of the JavaScript `Error` constructor for
 * assertion and validation scenarios.
 *
 * @param {String} message
 * @param {Object} properties to include (optional)
 * @param {callee} start stack function (optional)
 */

function AssertionError (message, _props, ssf) {
  var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON')
    , props = extend(_props || {});

  // default values
  this.message = message || 'Unspecified AssertionError';
  this.showDiff = false;

  // copy from properties
  for (var key in props) {
    this[key] = props[key];
  }

  // capture stack trace
  ssf = ssf || arguments.callee;
  if (ssf && Error.captureStackTrace) {
    Error.captureStackTrace(this, ssf);
  } else {
    try {
      throw new Error();
    } catch(e) {
      this.stack = e.stack;
    }
  }
}

/*!
 * Inherit from Error.prototype
 */

AssertionError.prototype = Object.create(Error.prototype);

/*!
 * Statically set name
 */

AssertionError.prototype.name = 'AssertionError';

/*!
 * Ensure correct constructor
 */

AssertionError.prototype.constructor = AssertionError;

/**
 * Allow errors to be converted to JSON for static transfer.
 *
 * @param {Boolean} include stack (default: `true`)
 * @return {Object} object that can be `JSON.stringify`
 */

AssertionError.prototype.toJSON = function (stack) {
  var extend = exclude('constructor', 'toJSON', 'stack')
    , props = extend({ name: this.name }, this);

  // include stack if exists and not turned off
  if (false !== stack && this.stack) {
    props.stack = this.stack;
  }

  return props;
};


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(694);


/***/ }),
/* 155 */
/***/ (function(module, exports) {

/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * # getActual(object, [actual])
 *
 * Returns the `actual` value for an Assertion
 *
 * @param {Object} object (constructed Assertion)
 * @param {Arguments} chai.Assertion.prototype.assert arguments
 * @namespace Utils
 * @name getActual
 */

module.exports = function (obj, args) {
  return args.length > 4 ? args[4] : obj._obj;
};


/***/ }),
/* 156 */
/***/ (function(module, exports) {

/*!
 * Chai - getName utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * # getName(func)
 *
 * Gets the name of a function, in a cross-browser way.
 *
 * @param {Function} a function (usually a constructor)
 * @namespace Utils
 * @name getName
 */

module.exports = function (func) {
  if (func.name) return func.name;

  var match = /^\s?function ([^(]*)\(/.exec(func);
  return match && match[1] ? match[1] : "";
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - getPathInfo utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var hasProperty = __webpack_require__(158);

/**
 * ### .getPathInfo(path, object)
 *
 * This allows the retrieval of property info in an
 * object given a string path.
 *
 * The path info consists of an object with the
 * following properties:
 *
 * * parent - The parent object of the property referenced by `path`
 * * name - The name of the final property, a number if it was an array indexer
 * * value - The value of the property, if it exists, otherwise `undefined`
 * * exists - Whether the property exists or not
 *
 * @param {String} path
 * @param {Object} object
 * @returns {Object} info
 * @namespace Utils
 * @name getPathInfo
 * @api public
 */

module.exports = function getPathInfo(path, obj) {
  var parsed = parsePath(path),
      last = parsed[parsed.length - 1];

  var info = {
    parent: parsed.length > 1 ? _getPathValue(parsed, obj, parsed.length - 1) : obj,
    name: last.p || last.i,
    value: _getPathValue(parsed, obj)
  };
  info.exists = hasProperty(info.name, info.parent);

  return info;
};


/*!
 * ## parsePath(path)
 *
 * Helper function used to parse string object
 * paths. Use in conjunction with `_getPathValue`.
 *
 *      var parsed = parsePath('myobject.property.subprop');
 *
 * ### Paths:
 *
 * * Can be as near infinitely deep and nested
 * * Arrays are also valid using the formal `myobject.document[3].property`.
 * * Literal dots and brackets (not delimiter) must be backslash-escaped.
 *
 * @param {String} path
 * @returns {Object} parsed
 * @api private
 */

function parsePath (path) {
  var str = path.replace(/([^\\])\[/g, '$1.[')
    , parts = str.match(/(\\\.|[^.]+?)+/g);
  return parts.map(function (value) {
    var re = /^\[(\d+)\]$/
      , mArr = re.exec(value);
    if (mArr) return { i: parseFloat(mArr[1]) };
    else return { p: value.replace(/\\([.\[\]])/g, '$1') };
  });
}


/*!
 * ## _getPathValue(parsed, obj)
 *
 * Helper companion function for `.parsePath` that returns
 * the value located at the parsed address.
 *
 *      var value = getPathValue(parsed, obj);
 *
 * @param {Object} parsed definition from `parsePath`.
 * @param {Object} object to search against
 * @param {Number} object to search against
 * @returns {Object|Undefined} value
 * @api private
 */

function _getPathValue (parsed, obj, index) {
  var tmp = obj
    , res;

  index = (index === undefined ? parsed.length : index);

  for (var i = 0, l = index; i < l; i++) {
    var part = parsed[i];
    if (tmp) {
      if ('undefined' !== typeof part.p)
        tmp = tmp[part.p];
      else if ('undefined' !== typeof part.i)
        tmp = tmp[part.i];
      if (i == (l - 1)) res = tmp;
    } else {
      res = undefined;
    }
  }
  return res;
}


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - hasProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

var type = __webpack_require__(88);

/**
 * ### .hasProperty(object, name)
 *
 * This allows checking whether an object has
 * named property or numeric array index.
 *
 * Basically does the same thing as the `in`
 * operator but works properly with natives
 * and null/undefined values.
 *
 *     var obj = {
 *         arr: ['a', 'b', 'c']
 *       , str: 'Hello'
 *     }
 *
 * The following would be the results.
 *
 *     hasProperty('str', obj);  // true
 *     hasProperty('constructor', obj);  // true
 *     hasProperty('bar', obj);  // false
 *
 *     hasProperty('length', obj.str); // true
 *     hasProperty(1, obj.str);  // true
 *     hasProperty(5, obj.str);  // false
 *
 *     hasProperty('length', obj.arr);  // true
 *     hasProperty(2, obj.arr);  // true
 *     hasProperty(3, obj.arr);  // false
 *
 * @param {Objuect} object
 * @param {String|Number} name
 * @returns {Boolean} whether it exists
 * @namespace Utils
 * @name getPathInfo
 * @api public
 */

var literals = {
    'number': Number
  , 'string': String
};

module.exports = function hasProperty(name, obj) {
  var ot = type(obj);

  // Bad Object, obviously no props at all
  if(ot === 'null' || ot === 'undefined')
    return false;

  // The `in` operator does not work with certain literals
  // box these before the check
  if(literals[ot] && typeof obj !== 'object')
    obj = new literals[ot](obj);

  return name in obj;
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/*!
 * Module dependancies
 */

var inspect = __webpack_require__(87);
var config = __webpack_require__(26);

/**
 * ### .objDisplay (object)
 *
 * Determines if an object or an array matches
 * criteria to be inspected in-line for error
 * messages or should be truncated.
 *
 * @param {Mixed} javascript object to inspect
 * @name objDisplay
 * @namespace Utils
 * @api public
 */

module.exports = function (obj) {
  var str = inspect(obj)
    , type = Object.prototype.toString.call(obj);

  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
    if (type === '[object Function]') {
      return !obj.name || obj.name === ''
        ? '[Function]'
        : '[Function: ' + obj.name + ']';
    } else if (type === '[object Array]') {
      return '[ Array(' + obj.length + ') ]';
    } else if (type === '[object Object]') {
      var keys = Object.keys(obj)
        , kstr = keys.length > 2
          ? keys.splice(0, 2).join(', ') + ', ...'
          : keys.join(', ');
      return '{ Object (' + kstr + ') }';
    } else {
      return str;
    }
  } else {
    return str;
  }
};


/***/ }),
/* 160 */
/***/ (function(module, exports) {

/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

/**
 * ### transferFlags(assertion, object, includeAll = true)
 *
 * Transfer all the flags for `assertion` to `object`. If
 * `includeAll` is set to `false`, then the base Chai
 * assertion flags (namely `object`, `ssfi`, and `message`)
 * will not be transferred.
 *
 *
 *     var newAssertion = new Assertion();
 *     utils.transferFlags(assertion, newAssertion);
 *
 *     var anotherAsseriton = new Assertion(myObj);
 *     utils.transferFlags(assertion, anotherAssertion, false);
 *
 * @param {Assertion} assertion the assertion to transfer the flags from
 * @param {Object} object the object to transfer the flags to; usually a new assertion
 * @param {Boolean} includeAll
 * @namespace Utils
 * @name transferFlags
 * @api private
 */

module.exports = function (assertion, object, includeAll) {
  var flags = assertion.__flags || (assertion.__flags = Object.create(null));

  if (!object.__flags) {
    object.__flags = Object.create(null);
  }

  includeAll = arguments.length === 3 ? includeAll : true;

  for (var flag in flags) {
    if (includeAll ||
        (flag !== 'object' && flag !== 'ssfi' && flag != 'message')) {
      object.__flags[flag] = flags[flag];
    }
  }
};


/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./fromPaths.test.js": 528,
	"./toPaths.test.js": 529
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 165;

/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2015-12-08",
		"endpointPrefix": "acm",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceAbbreviation": "ACM",
		"serviceFullName": "AWS Certificate Manager",
		"signatureVersion": "v4",
		"targetPrefix": "CertificateManager",
		"uid": "acm-2015-12-08"
	},
	"operations": {
		"AddTagsToCertificate": {
			"input": {
				"type": "structure",
				"required": [
					"CertificateArn",
					"Tags"
				],
				"members": {
					"CertificateArn": {},
					"Tags": {
						"shape": "S3"
					}
				}
			}
		},
		"DeleteCertificate": {
			"input": {
				"type": "structure",
				"required": [
					"CertificateArn"
				],
				"members": {
					"CertificateArn": {}
				}
			}
		},
		"DescribeCertificate": {
			"input": {
				"type": "structure",
				"required": [
					"CertificateArn"
				],
				"members": {
					"CertificateArn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Certificate": {
						"type": "structure",
						"members": {
							"CertificateArn": {},
							"DomainName": {},
							"SubjectAlternativeNames": {
								"shape": "Sc"
							},
							"DomainValidationOptions": {
								"shape": "Sd"
							},
							"Serial": {},
							"Subject": {},
							"Issuer": {},
							"CreatedAt": {
								"type": "timestamp"
							},
							"IssuedAt": {
								"type": "timestamp"
							},
							"ImportedAt": {
								"type": "timestamp"
							},
							"Status": {},
							"RevokedAt": {
								"type": "timestamp"
							},
							"RevocationReason": {},
							"NotBefore": {
								"type": "timestamp"
							},
							"NotAfter": {
								"type": "timestamp"
							},
							"KeyAlgorithm": {},
							"SignatureAlgorithm": {},
							"InUseBy": {
								"type": "list",
								"member": {}
							},
							"FailureReason": {},
							"Type": {},
							"RenewalSummary": {
								"type": "structure",
								"required": [
									"RenewalStatus",
									"DomainValidationOptions"
								],
								"members": {
									"RenewalStatus": {},
									"DomainValidationOptions": {
										"shape": "Sd"
									}
								}
							}
						}
					}
				}
			}
		},
		"GetCertificate": {
			"input": {
				"type": "structure",
				"required": [
					"CertificateArn"
				],
				"members": {
					"CertificateArn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Certificate": {},
					"CertificateChain": {}
				}
			}
		},
		"ImportCertificate": {
			"input": {
				"type": "structure",
				"required": [
					"Certificate",
					"PrivateKey"
				],
				"members": {
					"CertificateArn": {},
					"Certificate": {
						"type": "blob"
					},
					"PrivateKey": {
						"type": "blob",
						"sensitive": true
					},
					"CertificateChain": {
						"type": "blob"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"CertificateArn": {}
				}
			}
		},
		"ListCertificates": {
			"input": {
				"type": "structure",
				"members": {
					"CertificateStatuses": {
						"type": "list",
						"member": {}
					},
					"NextToken": {},
					"MaxItems": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"NextToken": {},
					"CertificateSummaryList": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"CertificateArn": {},
								"DomainName": {}
							}
						}
					}
				}
			}
		},
		"ListTagsForCertificate": {
			"input": {
				"type": "structure",
				"required": [
					"CertificateArn"
				],
				"members": {
					"CertificateArn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Tags": {
						"shape": "S3"
					}
				}
			}
		},
		"RemoveTagsFromCertificate": {
			"input": {
				"type": "structure",
				"required": [
					"CertificateArn",
					"Tags"
				],
				"members": {
					"CertificateArn": {},
					"Tags": {
						"shape": "S3"
					}
				}
			}
		},
		"RequestCertificate": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {},
					"SubjectAlternativeNames": {
						"shape": "Sc"
					},
					"IdempotencyToken": {},
					"DomainValidationOptions": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"DomainName",
								"ValidationDomain"
							],
							"members": {
								"DomainName": {},
								"ValidationDomain": {}
							}
						}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"CertificateArn": {}
				}
			}
		},
		"ResendValidationEmail": {
			"input": {
				"type": "structure",
				"required": [
					"CertificateArn",
					"Domain",
					"ValidationDomain"
				],
				"members": {
					"CertificateArn": {},
					"Domain": {},
					"ValidationDomain": {}
				}
			}
		}
	},
	"shapes": {
		"S3": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"Key"
				],
				"members": {
					"Key": {},
					"Value": {}
				}
			}
		},
		"Sc": {
			"type": "list",
			"member": {}
		},
		"Sd": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {},
					"ValidationEmails": {
						"type": "list",
						"member": {}
					},
					"ValidationDomain": {},
					"ValidationStatus": {}
				}
			}
		}
	}
};

/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"ListCertificates": {
			"input_token": "NextToken",
			"limit_key": "MaxItems",
			"output_token": "NextToken",
			"result_key": "CertificateSummaryList"
		}
	}
};

/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2015-07-09",
		"endpointPrefix": "apigateway",
		"protocol": "rest-json",
		"serviceFullName": "Amazon API Gateway",
		"signatureVersion": "v4",
		"uid": "apigateway-2015-07-09"
	},
	"operations": {
		"CreateApiKey": {
			"http": {
				"requestUri": "/apikeys",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"members": {
					"name": {},
					"description": {},
					"enabled": {
						"type": "boolean"
					},
					"generateDistinctId": {
						"type": "boolean"
					},
					"value": {},
					"stageKeys": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"restApiId": {},
								"stageName": {}
							}
						}
					},
					"customerId": {}
				}
			},
			"output": {
				"shape": "S6"
			}
		},
		"CreateAuthorizer": {
			"http": {
				"requestUri": "/restapis/{restapi_id}/authorizers",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"name",
					"type",
					"identitySource"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"name": {},
					"type": {},
					"providerARNs": {
						"shape": "Sb"
					},
					"authType": {},
					"authorizerUri": {},
					"authorizerCredentials": {},
					"identitySource": {},
					"identityValidationExpression": {},
					"authorizerResultTtlInSeconds": {
						"type": "integer"
					}
				}
			},
			"output": {
				"shape": "Se"
			}
		},
		"CreateBasePathMapping": {
			"http": {
				"requestUri": "/domainnames/{domain_name}/basepathmappings",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"domainName",
					"restApiId"
				],
				"members": {
					"domainName": {
						"location": "uri",
						"locationName": "domain_name"
					},
					"basePath": {},
					"restApiId": {},
					"stage": {}
				}
			},
			"output": {
				"shape": "Sg"
			}
		},
		"CreateDeployment": {
			"http": {
				"requestUri": "/restapis/{restapi_id}/deployments",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"stageName": {},
					"stageDescription": {},
					"description": {},
					"cacheClusterEnabled": {
						"type": "boolean"
					},
					"cacheClusterSize": {},
					"variables": {
						"shape": "Sk"
					}
				}
			},
			"output": {
				"shape": "Sl"
			}
		},
		"CreateDocumentationPart": {
			"http": {
				"requestUri": "/restapis/{restapi_id}/documentation/parts",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"location",
					"properties"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"location": {
						"shape": "Sq"
					},
					"properties": {}
				}
			},
			"output": {
				"shape": "St"
			}
		},
		"CreateDocumentationVersion": {
			"http": {
				"requestUri": "/restapis/{restapi_id}/documentation/versions",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"documentationVersion"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"documentationVersion": {},
					"stageName": {},
					"description": {}
				}
			},
			"output": {
				"shape": "Sv"
			}
		},
		"CreateDomainName": {
			"http": {
				"requestUri": "/domainnames",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"domainName"
				],
				"members": {
					"domainName": {},
					"certificateName": {},
					"certificateBody": {},
					"certificatePrivateKey": {},
					"certificateChain": {},
					"certificateArn": {}
				}
			},
			"output": {
				"shape": "Sx"
			}
		},
		"CreateModel": {
			"http": {
				"requestUri": "/restapis/{restapi_id}/models",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"name",
					"contentType"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"name": {},
					"description": {},
					"schema": {},
					"contentType": {}
				}
			},
			"output": {
				"shape": "Sz"
			}
		},
		"CreateResource": {
			"http": {
				"requestUri": "/restapis/{restapi_id}/resources/{parent_id}",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"parentId",
					"pathPart"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"parentId": {
						"location": "uri",
						"locationName": "parent_id"
					},
					"pathPart": {}
				}
			},
			"output": {
				"shape": "S11"
			}
		},
		"CreateRestApi": {
			"http": {
				"requestUri": "/restapis",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"name"
				],
				"members": {
					"name": {},
					"description": {},
					"version": {},
					"cloneFrom": {},
					"binaryMediaTypes": {
						"shape": "S8"
					}
				}
			},
			"output": {
				"shape": "S1e"
			}
		},
		"CreateStage": {
			"http": {
				"requestUri": "/restapis/{restapi_id}/stages",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"stageName",
					"deploymentId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"stageName": {},
					"deploymentId": {},
					"description": {},
					"cacheClusterEnabled": {
						"type": "boolean"
					},
					"cacheClusterSize": {},
					"variables": {
						"shape": "Sk"
					},
					"documentationVersion": {}
				}
			},
			"output": {
				"shape": "S1g"
			}
		},
		"CreateUsagePlan": {
			"http": {
				"requestUri": "/usageplans",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"name"
				],
				"members": {
					"name": {},
					"description": {},
					"apiStages": {
						"shape": "S1o"
					},
					"throttle": {
						"shape": "S1q"
					},
					"quota": {
						"shape": "S1r"
					}
				}
			},
			"output": {
				"shape": "S1t"
			}
		},
		"CreateUsagePlanKey": {
			"http": {
				"requestUri": "/usageplans/{usageplanId}/keys",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"usagePlanId",
					"keyId",
					"keyType"
				],
				"members": {
					"usagePlanId": {
						"location": "uri",
						"locationName": "usageplanId"
					},
					"keyId": {},
					"keyType": {}
				}
			},
			"output": {
				"shape": "S1v"
			}
		},
		"DeleteApiKey": {
			"http": {
				"method": "DELETE",
				"requestUri": "/apikeys/{api_Key}",
				"responseCode": 202
			},
			"input": {
				"type": "structure",
				"required": [
					"apiKey"
				],
				"members": {
					"apiKey": {
						"location": "uri",
						"locationName": "api_Key"
					}
				}
			}
		},
		"DeleteAuthorizer": {
			"http": {
				"method": "DELETE",
				"requestUri": "/restapis/{restapi_id}/authorizers/{authorizer_id}",
				"responseCode": 202
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"authorizerId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"authorizerId": {
						"location": "uri",
						"locationName": "authorizer_id"
					}
				}
			}
		},
		"DeleteBasePathMapping": {
			"http": {
				"method": "DELETE",
				"requestUri": "/domainnames/{domain_name}/basepathmappings/{base_path}",
				"responseCode": 202
			},
			"input": {
				"type": "structure",
				"required": [
					"domainName",
					"basePath"
				],
				"members": {
					"domainName": {
						"location": "uri",
						"locationName": "domain_name"
					},
					"basePath": {
						"location": "uri",
						"locationName": "base_path"
					}
				}
			}
		},
		"DeleteClientCertificate": {
			"http": {
				"method": "DELETE",
				"requestUri": "/clientcertificates/{clientcertificate_id}",
				"responseCode": 202
			},
			"input": {
				"type": "structure",
				"required": [
					"clientCertificateId"
				],
				"members": {
					"clientCertificateId": {
						"location": "uri",
						"locationName": "clientcertificate_id"
					}
				}
			}
		},
		"DeleteDeployment": {
			"http": {
				"method": "DELETE",
				"requestUri": "/restapis/{restapi_id}/deployments/{deployment_id}",
				"responseCode": 202
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"deploymentId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"deploymentId": {
						"location": "uri",
						"locationName": "deployment_id"
					}
				}
			}
		},
		"DeleteDocumentationPart": {
			"http": {
				"method": "DELETE",
				"requestUri": "/restapis/{restapi_id}/documentation/parts/{part_id}",
				"responseCode": 202
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"documentationPartId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"documentationPartId": {
						"location": "uri",
						"locationName": "part_id"
					}
				}
			}
		},
		"DeleteDocumentationVersion": {
			"http": {
				"method": "DELETE",
				"requestUri": "/restapis/{restapi_id}/documentation/versions/{doc_version}",
				"responseCode": 202
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"documentationVersion"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"documentationVersion": {
						"location": "uri",
						"locationName": "doc_version"
					}
				}
			}
		},
		"DeleteDomainName": {
			"http": {
				"method": "DELETE",
				"requestUri": "/domainnames/{domain_name}",
				"responseCode": 202
			},
			"input": {
				"type": "structure",
				"required": [
					"domainName"
				],
				"members": {
					"domainName": {
						"location": "uri",
						"locationName": "domain_name"
					}
				}
			}
		},
		"DeleteIntegration": {
			"http": {
				"method": "DELETE",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration",
				"responseCode": 204
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId",
					"httpMethod"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"httpMethod": {
						"location": "uri",
						"locationName": "http_method"
					}
				}
			}
		},
		"DeleteIntegrationResponse": {
			"http": {
				"method": "DELETE",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}",
				"responseCode": 204
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId",
					"httpMethod",
					"statusCode"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"httpMethod": {
						"location": "uri",
						"locationName": "http_method"
					},
					"statusCode": {
						"location": "uri",
						"locationName": "status_code"
					}
				}
			}
		},
		"DeleteMethod": {
			"http": {
				"method": "DELETE",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}",
				"responseCode": 204
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId",
					"httpMethod"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"httpMethod": {
						"location": "uri",
						"locationName": "http_method"
					}
				}
			}
		},
		"DeleteMethodResponse": {
			"http": {
				"method": "DELETE",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}",
				"responseCode": 204
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId",
					"httpMethod",
					"statusCode"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"httpMethod": {
						"location": "uri",
						"locationName": "http_method"
					},
					"statusCode": {
						"location": "uri",
						"locationName": "status_code"
					}
				}
			}
		},
		"DeleteModel": {
			"http": {
				"method": "DELETE",
				"requestUri": "/restapis/{restapi_id}/models/{model_name}",
				"responseCode": 202
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"modelName"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"modelName": {
						"location": "uri",
						"locationName": "model_name"
					}
				}
			}
		},
		"DeleteResource": {
			"http": {
				"method": "DELETE",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}",
				"responseCode": 202
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					}
				}
			}
		},
		"DeleteRestApi": {
			"http": {
				"method": "DELETE",
				"requestUri": "/restapis/{restapi_id}",
				"responseCode": 202
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					}
				}
			}
		},
		"DeleteStage": {
			"http": {
				"method": "DELETE",
				"requestUri": "/restapis/{restapi_id}/stages/{stage_name}",
				"responseCode": 202
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"stageName"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"stageName": {
						"location": "uri",
						"locationName": "stage_name"
					}
				}
			}
		},
		"DeleteUsagePlan": {
			"http": {
				"method": "DELETE",
				"requestUri": "/usageplans/{usageplanId}",
				"responseCode": 202
			},
			"input": {
				"type": "structure",
				"required": [
					"usagePlanId"
				],
				"members": {
					"usagePlanId": {
						"location": "uri",
						"locationName": "usageplanId"
					}
				}
			}
		},
		"DeleteUsagePlanKey": {
			"http": {
				"method": "DELETE",
				"requestUri": "/usageplans/{usageplanId}/keys/{keyId}",
				"responseCode": 202
			},
			"input": {
				"type": "structure",
				"required": [
					"usagePlanId",
					"keyId"
				],
				"members": {
					"usagePlanId": {
						"location": "uri",
						"locationName": "usageplanId"
					},
					"keyId": {
						"location": "uri",
						"locationName": "keyId"
					}
				}
			}
		},
		"FlushStageAuthorizersCache": {
			"http": {
				"method": "DELETE",
				"requestUri": "/restapis/{restapi_id}/stages/{stage_name}/cache/authorizers",
				"responseCode": 202
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"stageName"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"stageName": {
						"location": "uri",
						"locationName": "stage_name"
					}
				}
			}
		},
		"FlushStageCache": {
			"http": {
				"method": "DELETE",
				"requestUri": "/restapis/{restapi_id}/stages/{stage_name}/cache/data",
				"responseCode": 202
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"stageName"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"stageName": {
						"location": "uri",
						"locationName": "stage_name"
					}
				}
			}
		},
		"GenerateClientCertificate": {
			"http": {
				"requestUri": "/clientcertificates",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"members": {
					"description": {}
				}
			},
			"output": {
				"shape": "S2h"
			}
		},
		"GetAccount": {
			"http": {
				"method": "GET",
				"requestUri": "/account"
			},
			"input": {
				"type": "structure",
				"members": {}
			},
			"output": {
				"shape": "S2j"
			}
		},
		"GetApiKey": {
			"http": {
				"method": "GET",
				"requestUri": "/apikeys/{api_Key}"
			},
			"input": {
				"type": "structure",
				"required": [
					"apiKey"
				],
				"members": {
					"apiKey": {
						"location": "uri",
						"locationName": "api_Key"
					},
					"includeValue": {
						"location": "querystring",
						"locationName": "includeValue",
						"type": "boolean"
					}
				}
			},
			"output": {
				"shape": "S6"
			}
		},
		"GetApiKeys": {
			"http": {
				"method": "GET",
				"requestUri": "/apikeys"
			},
			"input": {
				"type": "structure",
				"members": {
					"position": {
						"location": "querystring",
						"locationName": "position"
					},
					"limit": {
						"location": "querystring",
						"locationName": "limit",
						"type": "integer"
					},
					"nameQuery": {
						"location": "querystring",
						"locationName": "name"
					},
					"customerId": {
						"location": "querystring",
						"locationName": "customerId"
					},
					"includeValues": {
						"location": "querystring",
						"locationName": "includeValues",
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"warnings": {
						"shape": "S8"
					},
					"position": {},
					"items": {
						"locationName": "item",
						"type": "list",
						"member": {
							"shape": "S6"
						}
					}
				}
			}
		},
		"GetAuthorizer": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/authorizers/{authorizer_id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"authorizerId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"authorizerId": {
						"location": "uri",
						"locationName": "authorizer_id"
					}
				}
			},
			"output": {
				"shape": "Se"
			}
		},
		"GetAuthorizers": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/authorizers"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"position": {
						"location": "querystring",
						"locationName": "position"
					},
					"limit": {
						"location": "querystring",
						"locationName": "limit",
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"position": {},
					"items": {
						"locationName": "item",
						"type": "list",
						"member": {
							"shape": "Se"
						}
					}
				}
			}
		},
		"GetBasePathMapping": {
			"http": {
				"method": "GET",
				"requestUri": "/domainnames/{domain_name}/basepathmappings/{base_path}"
			},
			"input": {
				"type": "structure",
				"required": [
					"domainName",
					"basePath"
				],
				"members": {
					"domainName": {
						"location": "uri",
						"locationName": "domain_name"
					},
					"basePath": {
						"location": "uri",
						"locationName": "base_path"
					}
				}
			},
			"output": {
				"shape": "Sg"
			}
		},
		"GetBasePathMappings": {
			"http": {
				"method": "GET",
				"requestUri": "/domainnames/{domain_name}/basepathmappings"
			},
			"input": {
				"type": "structure",
				"required": [
					"domainName"
				],
				"members": {
					"domainName": {
						"location": "uri",
						"locationName": "domain_name"
					},
					"position": {
						"location": "querystring",
						"locationName": "position"
					},
					"limit": {
						"location": "querystring",
						"locationName": "limit",
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"position": {},
					"items": {
						"locationName": "item",
						"type": "list",
						"member": {
							"shape": "Sg"
						}
					}
				}
			}
		},
		"GetClientCertificate": {
			"http": {
				"method": "GET",
				"requestUri": "/clientcertificates/{clientcertificate_id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"clientCertificateId"
				],
				"members": {
					"clientCertificateId": {
						"location": "uri",
						"locationName": "clientcertificate_id"
					}
				}
			},
			"output": {
				"shape": "S2h"
			}
		},
		"GetClientCertificates": {
			"http": {
				"method": "GET",
				"requestUri": "/clientcertificates"
			},
			"input": {
				"type": "structure",
				"members": {
					"position": {
						"location": "querystring",
						"locationName": "position"
					},
					"limit": {
						"location": "querystring",
						"locationName": "limit",
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"position": {},
					"items": {
						"locationName": "item",
						"type": "list",
						"member": {
							"shape": "S2h"
						}
					}
				}
			}
		},
		"GetDeployment": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/deployments/{deployment_id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"deploymentId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"deploymentId": {
						"location": "uri",
						"locationName": "deployment_id"
					}
				}
			},
			"output": {
				"shape": "Sl"
			}
		},
		"GetDeployments": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/deployments"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"position": {
						"location": "querystring",
						"locationName": "position"
					},
					"limit": {
						"location": "querystring",
						"locationName": "limit",
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"position": {},
					"items": {
						"locationName": "item",
						"type": "list",
						"member": {
							"shape": "Sl"
						}
					}
				}
			}
		},
		"GetDocumentationPart": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/documentation/parts/{part_id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"documentationPartId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"documentationPartId": {
						"location": "uri",
						"locationName": "part_id"
					}
				}
			},
			"output": {
				"shape": "St"
			}
		},
		"GetDocumentationParts": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/documentation/parts"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"type": {
						"location": "querystring",
						"locationName": "type"
					},
					"nameQuery": {
						"location": "querystring",
						"locationName": "name"
					},
					"path": {
						"location": "querystring",
						"locationName": "path"
					},
					"position": {
						"location": "querystring",
						"locationName": "position"
					},
					"limit": {
						"location": "querystring",
						"locationName": "limit",
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"position": {},
					"items": {
						"locationName": "item",
						"type": "list",
						"member": {
							"shape": "St"
						}
					}
				}
			}
		},
		"GetDocumentationVersion": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/documentation/versions/{doc_version}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"documentationVersion"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"documentationVersion": {
						"location": "uri",
						"locationName": "doc_version"
					}
				}
			},
			"output": {
				"shape": "Sv"
			}
		},
		"GetDocumentationVersions": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/documentation/versions"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"position": {
						"location": "querystring",
						"locationName": "position"
					},
					"limit": {
						"location": "querystring",
						"locationName": "limit",
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"position": {},
					"items": {
						"locationName": "item",
						"type": "list",
						"member": {
							"shape": "Sv"
						}
					}
				}
			}
		},
		"GetDomainName": {
			"http": {
				"method": "GET",
				"requestUri": "/domainnames/{domain_name}"
			},
			"input": {
				"type": "structure",
				"required": [
					"domainName"
				],
				"members": {
					"domainName": {
						"location": "uri",
						"locationName": "domain_name"
					}
				}
			},
			"output": {
				"shape": "Sx"
			}
		},
		"GetDomainNames": {
			"http": {
				"method": "GET",
				"requestUri": "/domainnames"
			},
			"input": {
				"type": "structure",
				"members": {
					"position": {
						"location": "querystring",
						"locationName": "position"
					},
					"limit": {
						"location": "querystring",
						"locationName": "limit",
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"position": {},
					"items": {
						"locationName": "item",
						"type": "list",
						"member": {
							"shape": "Sx"
						}
					}
				}
			}
		},
		"GetExport": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/stages/{stage_name}/exports/{export_type}",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"stageName",
					"exportType"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"stageName": {
						"location": "uri",
						"locationName": "stage_name"
					},
					"exportType": {
						"location": "uri",
						"locationName": "export_type"
					},
					"parameters": {
						"shape": "Sk",
						"location": "querystring"
					},
					"accepts": {
						"location": "header",
						"locationName": "Accept"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"contentType": {
						"location": "header",
						"locationName": "Content-Type"
					},
					"contentDisposition": {
						"location": "header",
						"locationName": "Content-Disposition"
					},
					"body": {
						"type": "blob"
					}
				},
				"payload": "body"
			}
		},
		"GetIntegration": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId",
					"httpMethod"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"httpMethod": {
						"location": "uri",
						"locationName": "http_method"
					}
				}
			},
			"output": {
				"shape": "S18"
			}
		},
		"GetIntegrationResponse": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId",
					"httpMethod",
					"statusCode"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"httpMethod": {
						"location": "uri",
						"locationName": "http_method"
					},
					"statusCode": {
						"location": "uri",
						"locationName": "status_code"
					}
				}
			},
			"output": {
				"shape": "S1c"
			}
		},
		"GetMethod": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId",
					"httpMethod"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"httpMethod": {
						"location": "uri",
						"locationName": "http_method"
					}
				}
			},
			"output": {
				"shape": "S13"
			}
		},
		"GetMethodResponse": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId",
					"httpMethod",
					"statusCode"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"httpMethod": {
						"location": "uri",
						"locationName": "http_method"
					},
					"statusCode": {
						"location": "uri",
						"locationName": "status_code"
					}
				}
			},
			"output": {
				"shape": "S16"
			}
		},
		"GetModel": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/models/{model_name}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"modelName"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"modelName": {
						"location": "uri",
						"locationName": "model_name"
					},
					"flatten": {
						"location": "querystring",
						"locationName": "flatten",
						"type": "boolean"
					}
				}
			},
			"output": {
				"shape": "Sz"
			}
		},
		"GetModelTemplate": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/models/{model_name}/default_template"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"modelName"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"modelName": {
						"location": "uri",
						"locationName": "model_name"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"value": {}
				}
			}
		},
		"GetModels": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/models"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"position": {
						"location": "querystring",
						"locationName": "position"
					},
					"limit": {
						"location": "querystring",
						"locationName": "limit",
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"position": {},
					"items": {
						"locationName": "item",
						"type": "list",
						"member": {
							"shape": "Sz"
						}
					}
				}
			}
		},
		"GetResource": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					}
				}
			},
			"output": {
				"shape": "S11"
			}
		},
		"GetResources": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/resources"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"position": {
						"location": "querystring",
						"locationName": "position"
					},
					"limit": {
						"location": "querystring",
						"locationName": "limit",
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"position": {},
					"items": {
						"locationName": "item",
						"type": "list",
						"member": {
							"shape": "S11"
						}
					}
				}
			}
		},
		"GetRestApi": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					}
				}
			},
			"output": {
				"shape": "S1e"
			}
		},
		"GetRestApis": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis"
			},
			"input": {
				"type": "structure",
				"members": {
					"position": {
						"location": "querystring",
						"locationName": "position"
					},
					"limit": {
						"location": "querystring",
						"locationName": "limit",
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"position": {},
					"items": {
						"locationName": "item",
						"type": "list",
						"member": {
							"shape": "S1e"
						}
					}
				}
			}
		},
		"GetSdk": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/stages/{stage_name}/sdks/{sdk_type}",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"stageName",
					"sdkType"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"stageName": {
						"location": "uri",
						"locationName": "stage_name"
					},
					"sdkType": {
						"location": "uri",
						"locationName": "sdk_type"
					},
					"parameters": {
						"shape": "Sk",
						"location": "querystring"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"contentType": {
						"location": "header",
						"locationName": "Content-Type"
					},
					"contentDisposition": {
						"location": "header",
						"locationName": "Content-Disposition"
					},
					"body": {
						"type": "blob"
					}
				},
				"payload": "body"
			}
		},
		"GetSdkType": {
			"http": {
				"method": "GET",
				"requestUri": "/sdktypes/{sdktype_id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"id"
				],
				"members": {
					"id": {
						"location": "uri",
						"locationName": "sdktype_id"
					}
				}
			},
			"output": {
				"shape": "S44"
			}
		},
		"GetSdkTypes": {
			"http": {
				"method": "GET",
				"requestUri": "/sdktypes"
			},
			"input": {
				"type": "structure",
				"members": {
					"position": {
						"location": "querystring",
						"locationName": "position"
					},
					"limit": {
						"location": "querystring",
						"locationName": "limit",
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"position": {},
					"items": {
						"locationName": "item",
						"type": "list",
						"member": {
							"shape": "S44"
						}
					}
				}
			}
		},
		"GetStage": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/stages/{stage_name}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"stageName"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"stageName": {
						"location": "uri",
						"locationName": "stage_name"
					}
				}
			},
			"output": {
				"shape": "S1g"
			}
		},
		"GetStages": {
			"http": {
				"method": "GET",
				"requestUri": "/restapis/{restapi_id}/stages"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"deploymentId": {
						"location": "querystring",
						"locationName": "deploymentId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"item": {
						"type": "list",
						"member": {
							"shape": "S1g"
						}
					}
				}
			}
		},
		"GetUsage": {
			"http": {
				"method": "GET",
				"requestUri": "/usageplans/{usageplanId}/usage"
			},
			"input": {
				"type": "structure",
				"required": [
					"usagePlanId",
					"startDate",
					"endDate"
				],
				"members": {
					"usagePlanId": {
						"location": "uri",
						"locationName": "usageplanId"
					},
					"keyId": {
						"location": "querystring",
						"locationName": "keyId"
					},
					"startDate": {
						"location": "querystring",
						"locationName": "startDate"
					},
					"endDate": {
						"location": "querystring",
						"locationName": "endDate"
					},
					"position": {
						"location": "querystring",
						"locationName": "position"
					},
					"limit": {
						"location": "querystring",
						"locationName": "limit",
						"type": "integer"
					}
				}
			},
			"output": {
				"shape": "S4f"
			}
		},
		"GetUsagePlan": {
			"http": {
				"method": "GET",
				"requestUri": "/usageplans/{usageplanId}"
			},
			"input": {
				"type": "structure",
				"required": [
					"usagePlanId"
				],
				"members": {
					"usagePlanId": {
						"location": "uri",
						"locationName": "usageplanId"
					}
				}
			},
			"output": {
				"shape": "S1t"
			}
		},
		"GetUsagePlanKey": {
			"http": {
				"method": "GET",
				"requestUri": "/usageplans/{usageplanId}/keys/{keyId}",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"usagePlanId",
					"keyId"
				],
				"members": {
					"usagePlanId": {
						"location": "uri",
						"locationName": "usageplanId"
					},
					"keyId": {
						"location": "uri",
						"locationName": "keyId"
					}
				}
			},
			"output": {
				"shape": "S1v"
			}
		},
		"GetUsagePlanKeys": {
			"http": {
				"method": "GET",
				"requestUri": "/usageplans/{usageplanId}/keys"
			},
			"input": {
				"type": "structure",
				"required": [
					"usagePlanId"
				],
				"members": {
					"usagePlanId": {
						"location": "uri",
						"locationName": "usageplanId"
					},
					"position": {
						"location": "querystring",
						"locationName": "position"
					},
					"limit": {
						"location": "querystring",
						"locationName": "limit",
						"type": "integer"
					},
					"nameQuery": {
						"location": "querystring",
						"locationName": "name"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"position": {},
					"items": {
						"locationName": "item",
						"type": "list",
						"member": {
							"shape": "S1v"
						}
					}
				}
			}
		},
		"GetUsagePlans": {
			"http": {
				"method": "GET",
				"requestUri": "/usageplans"
			},
			"input": {
				"type": "structure",
				"members": {
					"position": {
						"location": "querystring",
						"locationName": "position"
					},
					"keyId": {
						"location": "querystring",
						"locationName": "keyId"
					},
					"limit": {
						"location": "querystring",
						"locationName": "limit",
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"position": {},
					"items": {
						"locationName": "item",
						"type": "list",
						"member": {
							"shape": "S1t"
						}
					}
				}
			}
		},
		"ImportApiKeys": {
			"http": {
				"requestUri": "/apikeys?mode=import",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"body",
					"format"
				],
				"members": {
					"body": {
						"type": "blob"
					},
					"format": {
						"location": "querystring",
						"locationName": "format"
					},
					"failOnWarnings": {
						"location": "querystring",
						"locationName": "failonwarnings",
						"type": "boolean"
					}
				},
				"payload": "body"
			},
			"output": {
				"type": "structure",
				"members": {
					"ids": {
						"shape": "S8"
					},
					"warnings": {
						"shape": "S8"
					}
				}
			}
		},
		"ImportDocumentationParts": {
			"http": {
				"method": "PUT",
				"requestUri": "/restapis/{restapi_id}/documentation/parts"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"body"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"mode": {
						"location": "querystring",
						"locationName": "mode"
					},
					"failOnWarnings": {
						"location": "querystring",
						"locationName": "failonwarnings",
						"type": "boolean"
					},
					"body": {
						"type": "blob"
					}
				},
				"payload": "body"
			},
			"output": {
				"type": "structure",
				"members": {
					"ids": {
						"shape": "S8"
					},
					"warnings": {
						"shape": "S8"
					}
				}
			}
		},
		"ImportRestApi": {
			"http": {
				"requestUri": "/restapis?mode=import",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"body"
				],
				"members": {
					"failOnWarnings": {
						"location": "querystring",
						"locationName": "failonwarnings",
						"type": "boolean"
					},
					"parameters": {
						"shape": "Sk",
						"location": "querystring"
					},
					"body": {
						"type": "blob"
					}
				},
				"payload": "body"
			},
			"output": {
				"shape": "S1e"
			}
		},
		"PutIntegration": {
			"http": {
				"method": "PUT",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId",
					"httpMethod",
					"type"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"httpMethod": {
						"location": "uri",
						"locationName": "http_method"
					},
					"type": {},
					"integrationHttpMethod": {
						"locationName": "httpMethod"
					},
					"uri": {},
					"credentials": {},
					"requestParameters": {
						"shape": "Sk"
					},
					"requestTemplates": {
						"shape": "Sk"
					},
					"passthroughBehavior": {},
					"cacheNamespace": {},
					"cacheKeyParameters": {
						"shape": "S8"
					},
					"contentHandling": {}
				}
			},
			"output": {
				"shape": "S18"
			}
		},
		"PutIntegrationResponse": {
			"http": {
				"method": "PUT",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId",
					"httpMethod",
					"statusCode"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"httpMethod": {
						"location": "uri",
						"locationName": "http_method"
					},
					"statusCode": {
						"location": "uri",
						"locationName": "status_code"
					},
					"selectionPattern": {},
					"responseParameters": {
						"shape": "Sk"
					},
					"responseTemplates": {
						"shape": "Sk"
					},
					"contentHandling": {}
				}
			},
			"output": {
				"shape": "S1c"
			}
		},
		"PutMethod": {
			"http": {
				"method": "PUT",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId",
					"httpMethod",
					"authorizationType"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"httpMethod": {
						"location": "uri",
						"locationName": "http_method"
					},
					"authorizationType": {},
					"authorizerId": {},
					"apiKeyRequired": {
						"type": "boolean"
					},
					"operationName": {},
					"requestParameters": {
						"shape": "S14"
					},
					"requestModels": {
						"shape": "Sk"
					}
				}
			},
			"output": {
				"shape": "S13"
			}
		},
		"PutMethodResponse": {
			"http": {
				"method": "PUT",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId",
					"httpMethod",
					"statusCode"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"httpMethod": {
						"location": "uri",
						"locationName": "http_method"
					},
					"statusCode": {
						"location": "uri",
						"locationName": "status_code"
					},
					"responseParameters": {
						"shape": "S14"
					},
					"responseModels": {
						"shape": "Sk"
					}
				}
			},
			"output": {
				"shape": "S16"
			}
		},
		"PutRestApi": {
			"http": {
				"method": "PUT",
				"requestUri": "/restapis/{restapi_id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"body"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"mode": {
						"location": "querystring",
						"locationName": "mode"
					},
					"failOnWarnings": {
						"location": "querystring",
						"locationName": "failonwarnings",
						"type": "boolean"
					},
					"parameters": {
						"shape": "Sk",
						"location": "querystring"
					},
					"body": {
						"type": "blob"
					}
				},
				"payload": "body"
			},
			"output": {
				"shape": "S1e"
			}
		},
		"TestInvokeAuthorizer": {
			"http": {
				"requestUri": "/restapis/{restapi_id}/authorizers/{authorizer_id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"authorizerId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"authorizerId": {
						"location": "uri",
						"locationName": "authorizer_id"
					},
					"headers": {
						"shape": "S55"
					},
					"pathWithQueryString": {},
					"body": {},
					"stageVariables": {
						"shape": "Sk"
					},
					"additionalContext": {
						"shape": "Sk"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"clientStatus": {
						"type": "integer"
					},
					"log": {},
					"latency": {
						"type": "long"
					},
					"principalId": {},
					"policy": {},
					"authorization": {
						"type": "map",
						"key": {},
						"value": {
							"shape": "S8"
						}
					},
					"claims": {
						"shape": "Sk"
					}
				}
			}
		},
		"TestInvokeMethod": {
			"http": {
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId",
					"httpMethod"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"httpMethod": {
						"location": "uri",
						"locationName": "http_method"
					},
					"pathWithQueryString": {},
					"body": {},
					"headers": {
						"shape": "S55"
					},
					"clientCertificateId": {},
					"stageVariables": {
						"shape": "Sk"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"status": {
						"type": "integer"
					},
					"body": {},
					"headers": {
						"shape": "S55"
					},
					"log": {},
					"latency": {
						"type": "long"
					}
				}
			}
		},
		"UpdateAccount": {
			"http": {
				"method": "PATCH",
				"requestUri": "/account"
			},
			"input": {
				"type": "structure",
				"members": {
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "S2j"
			}
		},
		"UpdateApiKey": {
			"http": {
				"method": "PATCH",
				"requestUri": "/apikeys/{api_Key}"
			},
			"input": {
				"type": "structure",
				"required": [
					"apiKey"
				],
				"members": {
					"apiKey": {
						"location": "uri",
						"locationName": "api_Key"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "S6"
			}
		},
		"UpdateAuthorizer": {
			"http": {
				"method": "PATCH",
				"requestUri": "/restapis/{restapi_id}/authorizers/{authorizer_id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"authorizerId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"authorizerId": {
						"location": "uri",
						"locationName": "authorizer_id"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "Se"
			}
		},
		"UpdateBasePathMapping": {
			"http": {
				"method": "PATCH",
				"requestUri": "/domainnames/{domain_name}/basepathmappings/{base_path}"
			},
			"input": {
				"type": "structure",
				"required": [
					"domainName",
					"basePath"
				],
				"members": {
					"domainName": {
						"location": "uri",
						"locationName": "domain_name"
					},
					"basePath": {
						"location": "uri",
						"locationName": "base_path"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "Sg"
			}
		},
		"UpdateClientCertificate": {
			"http": {
				"method": "PATCH",
				"requestUri": "/clientcertificates/{clientcertificate_id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"clientCertificateId"
				],
				"members": {
					"clientCertificateId": {
						"location": "uri",
						"locationName": "clientcertificate_id"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "S2h"
			}
		},
		"UpdateDeployment": {
			"http": {
				"method": "PATCH",
				"requestUri": "/restapis/{restapi_id}/deployments/{deployment_id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"deploymentId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"deploymentId": {
						"location": "uri",
						"locationName": "deployment_id"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "Sl"
			}
		},
		"UpdateDocumentationPart": {
			"http": {
				"method": "PATCH",
				"requestUri": "/restapis/{restapi_id}/documentation/parts/{part_id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"documentationPartId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"documentationPartId": {
						"location": "uri",
						"locationName": "part_id"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "St"
			}
		},
		"UpdateDocumentationVersion": {
			"http": {
				"method": "PATCH",
				"requestUri": "/restapis/{restapi_id}/documentation/versions/{doc_version}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"documentationVersion"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"documentationVersion": {
						"location": "uri",
						"locationName": "doc_version"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "Sv"
			}
		},
		"UpdateDomainName": {
			"http": {
				"method": "PATCH",
				"requestUri": "/domainnames/{domain_name}"
			},
			"input": {
				"type": "structure",
				"required": [
					"domainName"
				],
				"members": {
					"domainName": {
						"location": "uri",
						"locationName": "domain_name"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "Sx"
			}
		},
		"UpdateIntegration": {
			"http": {
				"method": "PATCH",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId",
					"httpMethod"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"httpMethod": {
						"location": "uri",
						"locationName": "http_method"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "S18"
			}
		},
		"UpdateIntegrationResponse": {
			"http": {
				"method": "PATCH",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/integration/responses/{status_code}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId",
					"httpMethod",
					"statusCode"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"httpMethod": {
						"location": "uri",
						"locationName": "http_method"
					},
					"statusCode": {
						"location": "uri",
						"locationName": "status_code"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "S1c"
			}
		},
		"UpdateMethod": {
			"http": {
				"method": "PATCH",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId",
					"httpMethod"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"httpMethod": {
						"location": "uri",
						"locationName": "http_method"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "S13"
			}
		},
		"UpdateMethodResponse": {
			"http": {
				"method": "PATCH",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}/methods/{http_method}/responses/{status_code}",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId",
					"httpMethod",
					"statusCode"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"httpMethod": {
						"location": "uri",
						"locationName": "http_method"
					},
					"statusCode": {
						"location": "uri",
						"locationName": "status_code"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "S16"
			}
		},
		"UpdateModel": {
			"http": {
				"method": "PATCH",
				"requestUri": "/restapis/{restapi_id}/models/{model_name}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"modelName"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"modelName": {
						"location": "uri",
						"locationName": "model_name"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "Sz"
			}
		},
		"UpdateResource": {
			"http": {
				"method": "PATCH",
				"requestUri": "/restapis/{restapi_id}/resources/{resource_id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"resourceId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"resourceId": {
						"location": "uri",
						"locationName": "resource_id"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "S11"
			}
		},
		"UpdateRestApi": {
			"http": {
				"method": "PATCH",
				"requestUri": "/restapis/{restapi_id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "S1e"
			}
		},
		"UpdateStage": {
			"http": {
				"method": "PATCH",
				"requestUri": "/restapis/{restapi_id}/stages/{stage_name}"
			},
			"input": {
				"type": "structure",
				"required": [
					"restApiId",
					"stageName"
				],
				"members": {
					"restApiId": {
						"location": "uri",
						"locationName": "restapi_id"
					},
					"stageName": {
						"location": "uri",
						"locationName": "stage_name"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "S1g"
			}
		},
		"UpdateUsage": {
			"http": {
				"method": "PATCH",
				"requestUri": "/usageplans/{usageplanId}/keys/{keyId}/usage"
			},
			"input": {
				"type": "structure",
				"required": [
					"usagePlanId",
					"keyId"
				],
				"members": {
					"usagePlanId": {
						"location": "uri",
						"locationName": "usageplanId"
					},
					"keyId": {
						"location": "uri",
						"locationName": "keyId"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "S4f"
			}
		},
		"UpdateUsagePlan": {
			"http": {
				"method": "PATCH",
				"requestUri": "/usageplans/{usageplanId}"
			},
			"input": {
				"type": "structure",
				"required": [
					"usagePlanId"
				],
				"members": {
					"usagePlanId": {
						"location": "uri",
						"locationName": "usageplanId"
					},
					"patchOperations": {
						"shape": "S5b"
					}
				}
			},
			"output": {
				"shape": "S1t"
			}
		}
	},
	"shapes": {
		"S6": {
			"type": "structure",
			"members": {
				"id": {},
				"value": {},
				"name": {},
				"customerId": {},
				"description": {},
				"enabled": {
					"type": "boolean"
				},
				"createdDate": {
					"type": "timestamp"
				},
				"lastUpdatedDate": {
					"type": "timestamp"
				},
				"stageKeys": {
					"shape": "S8"
				}
			}
		},
		"S8": {
			"type": "list",
			"member": {}
		},
		"Sb": {
			"type": "list",
			"member": {}
		},
		"Se": {
			"type": "structure",
			"members": {
				"id": {},
				"name": {},
				"type": {},
				"providerARNs": {
					"shape": "Sb"
				},
				"authType": {},
				"authorizerUri": {},
				"authorizerCredentials": {},
				"identitySource": {},
				"identityValidationExpression": {},
				"authorizerResultTtlInSeconds": {
					"type": "integer"
				}
			}
		},
		"Sg": {
			"type": "structure",
			"members": {
				"basePath": {},
				"restApiId": {},
				"stage": {}
			}
		},
		"Sk": {
			"type": "map",
			"key": {},
			"value": {}
		},
		"Sl": {
			"type": "structure",
			"members": {
				"id": {},
				"description": {},
				"createdDate": {
					"type": "timestamp"
				},
				"apiSummary": {
					"type": "map",
					"key": {},
					"value": {
						"type": "map",
						"key": {},
						"value": {
							"type": "structure",
							"members": {
								"authorizationType": {},
								"apiKeyRequired": {
									"type": "boolean"
								}
							}
						}
					}
				}
			}
		},
		"Sq": {
			"type": "structure",
			"required": [
				"type"
			],
			"members": {
				"type": {},
				"path": {},
				"method": {},
				"statusCode": {},
				"name": {}
			}
		},
		"St": {
			"type": "structure",
			"members": {
				"id": {},
				"location": {
					"shape": "Sq"
				},
				"properties": {}
			}
		},
		"Sv": {
			"type": "structure",
			"members": {
				"version": {},
				"createdDate": {
					"type": "timestamp"
				},
				"description": {}
			}
		},
		"Sx": {
			"type": "structure",
			"members": {
				"domainName": {},
				"certificateName": {},
				"certificateArn": {},
				"certificateUploadDate": {
					"type": "timestamp"
				},
				"distributionDomainName": {}
			}
		},
		"Sz": {
			"type": "structure",
			"members": {
				"id": {},
				"name": {},
				"description": {},
				"schema": {},
				"contentType": {}
			}
		},
		"S11": {
			"type": "structure",
			"members": {
				"id": {},
				"parentId": {},
				"pathPart": {},
				"path": {},
				"resourceMethods": {
					"type": "map",
					"key": {},
					"value": {
						"shape": "S13"
					}
				}
			}
		},
		"S13": {
			"type": "structure",
			"members": {
				"httpMethod": {},
				"authorizationType": {},
				"authorizerId": {},
				"apiKeyRequired": {
					"type": "boolean"
				},
				"operationName": {},
				"requestParameters": {
					"shape": "S14"
				},
				"requestModels": {
					"shape": "Sk"
				},
				"methodResponses": {
					"type": "map",
					"key": {},
					"value": {
						"shape": "S16"
					}
				},
				"methodIntegration": {
					"shape": "S18"
				}
			}
		},
		"S14": {
			"type": "map",
			"key": {},
			"value": {
				"type": "boolean"
			}
		},
		"S16": {
			"type": "structure",
			"members": {
				"statusCode": {},
				"responseParameters": {
					"shape": "S14"
				},
				"responseModels": {
					"shape": "Sk"
				}
			}
		},
		"S18": {
			"type": "structure",
			"members": {
				"type": {},
				"httpMethod": {},
				"uri": {},
				"credentials": {},
				"requestParameters": {
					"shape": "Sk"
				},
				"requestTemplates": {
					"shape": "Sk"
				},
				"passthroughBehavior": {},
				"contentHandling": {},
				"cacheNamespace": {},
				"cacheKeyParameters": {
					"shape": "S8"
				},
				"integrationResponses": {
					"type": "map",
					"key": {},
					"value": {
						"shape": "S1c"
					}
				}
			}
		},
		"S1c": {
			"type": "structure",
			"members": {
				"statusCode": {},
				"selectionPattern": {},
				"responseParameters": {
					"shape": "Sk"
				},
				"responseTemplates": {
					"shape": "Sk"
				},
				"contentHandling": {}
			}
		},
		"S1e": {
			"type": "structure",
			"members": {
				"id": {},
				"name": {},
				"description": {},
				"createdDate": {
					"type": "timestamp"
				},
				"version": {},
				"warnings": {
					"shape": "S8"
				},
				"binaryMediaTypes": {
					"shape": "S8"
				}
			}
		},
		"S1g": {
			"type": "structure",
			"members": {
				"deploymentId": {},
				"clientCertificateId": {},
				"stageName": {},
				"description": {},
				"cacheClusterEnabled": {
					"type": "boolean"
				},
				"cacheClusterSize": {},
				"cacheClusterStatus": {},
				"methodSettings": {
					"type": "map",
					"key": {},
					"value": {
						"type": "structure",
						"members": {
							"metricsEnabled": {
								"type": "boolean"
							},
							"loggingLevel": {},
							"dataTraceEnabled": {
								"type": "boolean"
							},
							"throttlingBurstLimit": {
								"type": "integer"
							},
							"throttlingRateLimit": {
								"type": "double"
							},
							"cachingEnabled": {
								"type": "boolean"
							},
							"cacheTtlInSeconds": {
								"type": "integer"
							},
							"cacheDataEncrypted": {
								"type": "boolean"
							},
							"requireAuthorizationForCacheControl": {
								"type": "boolean"
							},
							"unauthorizedCacheControlHeaderStrategy": {}
						}
					}
				},
				"variables": {
					"shape": "Sk"
				},
				"documentationVersion": {},
				"createdDate": {
					"type": "timestamp"
				},
				"lastUpdatedDate": {
					"type": "timestamp"
				}
			}
		},
		"S1o": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"apiId": {},
					"stage": {}
				}
			}
		},
		"S1q": {
			"type": "structure",
			"members": {
				"burstLimit": {
					"type": "integer"
				},
				"rateLimit": {
					"type": "double"
				}
			}
		},
		"S1r": {
			"type": "structure",
			"members": {
				"limit": {
					"type": "integer"
				},
				"offset": {
					"type": "integer"
				},
				"period": {}
			}
		},
		"S1t": {
			"type": "structure",
			"members": {
				"id": {},
				"name": {},
				"description": {},
				"apiStages": {
					"shape": "S1o"
				},
				"throttle": {
					"shape": "S1q"
				},
				"quota": {
					"shape": "S1r"
				},
				"productCode": {}
			}
		},
		"S1v": {
			"type": "structure",
			"members": {
				"id": {},
				"type": {},
				"value": {},
				"name": {}
			}
		},
		"S2h": {
			"type": "structure",
			"members": {
				"clientCertificateId": {},
				"description": {},
				"pemEncodedCertificate": {},
				"createdDate": {
					"type": "timestamp"
				},
				"expirationDate": {
					"type": "timestamp"
				}
			}
		},
		"S2j": {
			"type": "structure",
			"members": {
				"cloudwatchRoleArn": {},
				"throttleSettings": {
					"shape": "S1q"
				},
				"features": {
					"shape": "S8"
				},
				"apiKeyVersion": {}
			}
		},
		"S44": {
			"type": "structure",
			"members": {
				"id": {},
				"friendlyName": {},
				"description": {},
				"configurationProperties": {
					"type": "list",
					"member": {
						"type": "structure",
						"members": {
							"name": {},
							"friendlyName": {},
							"description": {},
							"required": {
								"type": "boolean"
							},
							"defaultValue": {}
						}
					}
				}
			}
		},
		"S4f": {
			"type": "structure",
			"members": {
				"usagePlanId": {},
				"startDate": {},
				"endDate": {},
				"position": {},
				"items": {
					"locationName": "values",
					"type": "map",
					"key": {},
					"value": {
						"type": "list",
						"member": {
							"type": "list",
							"member": {
								"type": "long"
							}
						}
					}
				}
			}
		},
		"S55": {
			"type": "map",
			"key": {},
			"value": {}
		},
		"S5b": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"op": {},
					"path": {},
					"value": {},
					"from": {}
				}
			}
		}
	}
};

/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"GetApiKeys": {
			"input_token": "position",
			"limit_key": "limit",
			"output_token": "position",
			"result_key": "items"
		},
		"GetBasePathMappings": {
			"input_token": "position",
			"limit_key": "limit",
			"output_token": "position",
			"result_key": "items"
		},
		"GetClientCertificates": {
			"input_token": "position",
			"limit_key": "limit",
			"output_token": "position",
			"result_key": "items"
		},
		"GetDeployments": {
			"input_token": "position",
			"limit_key": "limit",
			"output_token": "position",
			"result_key": "items"
		},
		"GetDomainNames": {
			"input_token": "position",
			"limit_key": "limit",
			"output_token": "position",
			"result_key": "items"
		},
		"GetModels": {
			"input_token": "position",
			"limit_key": "limit",
			"output_token": "position",
			"result_key": "items"
		},
		"GetResources": {
			"input_token": "position",
			"limit_key": "limit",
			"output_token": "position",
			"result_key": "items"
		},
		"GetRestApis": {
			"input_token": "position",
			"limit_key": "limit",
			"output_token": "position",
			"result_key": "items"
		},
		"GetUsage": {
			"input_token": "position",
			"limit_key": "limit",
			"output_token": "position",
			"result_key": "items"
		},
		"GetUsagePlanKeys": {
			"input_token": "position",
			"limit_key": "limit",
			"output_token": "position",
			"result_key": "items"
		},
		"GetUsagePlans": {
			"input_token": "position",
			"limit_key": "limit",
			"output_token": "position",
			"result_key": "items"
		}
	}
};

/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2016-02-06",
		"endpointPrefix": "autoscaling",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceFullName": "Application Auto Scaling",
		"signatureVersion": "v4",
		"signingName": "application-autoscaling",
		"targetPrefix": "AnyScaleFrontendService",
		"uid": "application-autoscaling-2016-02-06"
	},
	"operations": {
		"DeleteScalingPolicy": {
			"input": {
				"type": "structure",
				"required": [
					"PolicyName",
					"ServiceNamespace",
					"ResourceId",
					"ScalableDimension"
				],
				"members": {
					"PolicyName": {},
					"ServiceNamespace": {},
					"ResourceId": {},
					"ScalableDimension": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeregisterScalableTarget": {
			"input": {
				"type": "structure",
				"required": [
					"ServiceNamespace",
					"ResourceId",
					"ScalableDimension"
				],
				"members": {
					"ServiceNamespace": {},
					"ResourceId": {},
					"ScalableDimension": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DescribeScalableTargets": {
			"input": {
				"type": "structure",
				"required": [
					"ServiceNamespace"
				],
				"members": {
					"ServiceNamespace": {},
					"ResourceIds": {
						"shape": "S9"
					},
					"ScalableDimension": {},
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ScalableTargets": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"ServiceNamespace",
								"ResourceId",
								"ScalableDimension",
								"MinCapacity",
								"MaxCapacity",
								"RoleARN",
								"CreationTime"
							],
							"members": {
								"ServiceNamespace": {},
								"ResourceId": {},
								"ScalableDimension": {},
								"MinCapacity": {
									"type": "integer"
								},
								"MaxCapacity": {
									"type": "integer"
								},
								"RoleARN": {},
								"CreationTime": {
									"type": "timestamp"
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeScalingActivities": {
			"input": {
				"type": "structure",
				"required": [
					"ServiceNamespace"
				],
				"members": {
					"ServiceNamespace": {},
					"ResourceId": {},
					"ScalableDimension": {},
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ScalingActivities": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"ActivityId",
								"ServiceNamespace",
								"ResourceId",
								"ScalableDimension",
								"Description",
								"Cause",
								"StartTime",
								"StatusCode"
							],
							"members": {
								"ActivityId": {},
								"ServiceNamespace": {},
								"ResourceId": {},
								"ScalableDimension": {},
								"Description": {},
								"Cause": {},
								"StartTime": {
									"type": "timestamp"
								},
								"EndTime": {
									"type": "timestamp"
								},
								"StatusCode": {},
								"StatusMessage": {},
								"Details": {}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeScalingPolicies": {
			"input": {
				"type": "structure",
				"required": [
					"ServiceNamespace"
				],
				"members": {
					"PolicyNames": {
						"shape": "S9"
					},
					"ServiceNamespace": {},
					"ResourceId": {},
					"ScalableDimension": {},
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ScalingPolicies": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"PolicyARN",
								"PolicyName",
								"ServiceNamespace",
								"ResourceId",
								"ScalableDimension",
								"PolicyType",
								"CreationTime"
							],
							"members": {
								"PolicyARN": {},
								"PolicyName": {},
								"ServiceNamespace": {},
								"ResourceId": {},
								"ScalableDimension": {},
								"PolicyType": {},
								"StepScalingPolicyConfiguration": {
									"shape": "St"
								},
								"Alarms": {
									"type": "list",
									"member": {
										"type": "structure",
										"required": [
											"AlarmName",
											"AlarmARN"
										],
										"members": {
											"AlarmName": {},
											"AlarmARN": {}
										}
									}
								},
								"CreationTime": {
									"type": "timestamp"
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"PutScalingPolicy": {
			"input": {
				"type": "structure",
				"required": [
					"PolicyName",
					"ServiceNamespace",
					"ResourceId",
					"ScalableDimension"
				],
				"members": {
					"PolicyName": {},
					"ServiceNamespace": {},
					"ResourceId": {},
					"ScalableDimension": {},
					"PolicyType": {},
					"StepScalingPolicyConfiguration": {
						"shape": "St"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"PolicyARN"
				],
				"members": {
					"PolicyARN": {}
				}
			}
		},
		"RegisterScalableTarget": {
			"input": {
				"type": "structure",
				"required": [
					"ServiceNamespace",
					"ResourceId",
					"ScalableDimension"
				],
				"members": {
					"ServiceNamespace": {},
					"ResourceId": {},
					"ScalableDimension": {},
					"MinCapacity": {
						"type": "integer"
					},
					"MaxCapacity": {
						"type": "integer"
					},
					"RoleARN": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		}
	},
	"shapes": {
		"S9": {
			"type": "list",
			"member": {}
		},
		"St": {
			"type": "structure",
			"members": {
				"AdjustmentType": {},
				"StepAdjustments": {
					"type": "list",
					"member": {
						"type": "structure",
						"required": [
							"ScalingAdjustment"
						],
						"members": {
							"MetricIntervalLowerBound": {
								"type": "double"
							},
							"MetricIntervalUpperBound": {
								"type": "double"
							},
							"ScalingAdjustment": {
								"type": "integer"
							}
						}
					}
				},
				"MinAdjustmentMagnitude": {
					"type": "integer"
				},
				"Cooldown": {
					"type": "integer"
				},
				"MetricAggregationType": {}
			}
		}
	}
};

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"DescribeScalableTargets": {
			"input_token": "NextToken",
			"limit_key": "MaxResults",
			"output_token": "NextToken",
			"result_key": "ScalableTargets"
		},
		"DescribeScalingActivities": {
			"input_token": "NextToken",
			"limit_key": "MaxResults",
			"output_token": "NextToken",
			"result_key": "ScalingActivities"
		},
		"DescribeScalingPolicies": {
			"input_token": "NextToken",
			"limit_key": "MaxResults",
			"output_token": "NextToken",
			"result_key": "ScalingPolicies"
		}
	}
};

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2016-12-01",
		"endpointPrefix": "appstream2",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceFullName": "Amazon AppStream",
		"signatureVersion": "v4",
		"signingName": "appstream",
		"targetPrefix": "PhotonAdminProxyService",
		"uid": "appstream-2016-12-01"
	},
	"operations": {
		"AssociateFleet": {
			"input": {
				"type": "structure",
				"required": [
					"FleetName",
					"StackName"
				],
				"members": {
					"FleetName": {},
					"StackName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"CreateFleet": {
			"input": {
				"type": "structure",
				"required": [
					"Name",
					"ImageName",
					"InstanceType",
					"ComputeCapacity"
				],
				"members": {
					"Name": {},
					"ImageName": {},
					"InstanceType": {},
					"ComputeCapacity": {
						"shape": "S6"
					},
					"VpcConfig": {
						"shape": "S8"
					},
					"MaxUserDurationInSeconds": {
						"type": "integer"
					},
					"DisconnectTimeoutInSeconds": {
						"type": "integer"
					},
					"Description": {},
					"DisplayName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Fleet": {
						"shape": "Sd"
					}
				}
			}
		},
		"CreateStack": {
			"input": {
				"type": "structure",
				"required": [
					"Name"
				],
				"members": {
					"Name": {},
					"Description": {},
					"DisplayName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Stack": {
						"shape": "Sn"
					}
				}
			}
		},
		"CreateStreamingURL": {
			"input": {
				"type": "structure",
				"required": [
					"StackName",
					"FleetName",
					"UserId"
				],
				"members": {
					"StackName": {},
					"FleetName": {},
					"UserId": {},
					"ApplicationId": {},
					"Validity": {
						"type": "long"
					},
					"SessionContext": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"StreamingURL": {},
					"Expires": {
						"type": "timestamp"
					}
				}
			}
		},
		"DeleteFleet": {
			"input": {
				"type": "structure",
				"required": [
					"Name"
				],
				"members": {
					"Name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeleteStack": {
			"input": {
				"type": "structure",
				"required": [
					"Name"
				],
				"members": {
					"Name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DescribeFleets": {
			"input": {
				"type": "structure",
				"members": {
					"Names": {
						"shape": "Sx"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Fleets": {
						"type": "list",
						"member": {
							"shape": "Sd"
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeImages": {
			"input": {
				"type": "structure",
				"members": {
					"Names": {
						"shape": "Sx"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Images": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"Name"
							],
							"members": {
								"Name": {},
								"Arn": {},
								"BaseImageArn": {},
								"DisplayName": {},
								"State": {},
								"Visibility": {},
								"Platform": {},
								"Description": {},
								"StateChangeReason": {
									"type": "structure",
									"members": {
										"Code": {},
										"Message": {}
									}
								},
								"Applications": {
									"type": "list",
									"member": {
										"type": "structure",
										"members": {
											"Name": {},
											"DisplayName": {},
											"IconURL": {},
											"LaunchPath": {},
											"LaunchParameters": {},
											"Enabled": {
												"type": "boolean"
											},
											"Metadata": {
												"type": "map",
												"key": {},
												"value": {}
											}
										}
									}
								},
								"CreatedTime": {
									"type": "timestamp"
								}
							}
						}
					}
				}
			}
		},
		"DescribeSessions": {
			"input": {
				"type": "structure",
				"required": [
					"StackName",
					"FleetName"
				],
				"members": {
					"StackName": {},
					"FleetName": {},
					"UserId": {},
					"NextToken": {},
					"Limit": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Sessions": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"Id",
								"UserId",
								"StackName",
								"FleetName",
								"State"
							],
							"members": {
								"Id": {},
								"UserId": {},
								"StackName": {},
								"FleetName": {},
								"State": {}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeStacks": {
			"input": {
				"type": "structure",
				"members": {
					"Names": {
						"shape": "Sx"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Stacks": {
						"type": "list",
						"member": {
							"shape": "Sn"
						}
					},
					"NextToken": {}
				}
			}
		},
		"DisassociateFleet": {
			"input": {
				"type": "structure",
				"required": [
					"FleetName",
					"StackName"
				],
				"members": {
					"FleetName": {},
					"StackName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"ExpireSession": {
			"input": {
				"type": "structure",
				"required": [
					"SessionId"
				],
				"members": {
					"SessionId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"ListAssociatedFleets": {
			"input": {
				"type": "structure",
				"required": [
					"StackName"
				],
				"members": {
					"StackName": {},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Names": {
						"shape": "Sx"
					},
					"NextToken": {}
				}
			}
		},
		"ListAssociatedStacks": {
			"input": {
				"type": "structure",
				"required": [
					"FleetName"
				],
				"members": {
					"FleetName": {},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Names": {
						"shape": "Sx"
					},
					"NextToken": {}
				}
			}
		},
		"StartFleet": {
			"input": {
				"type": "structure",
				"required": [
					"Name"
				],
				"members": {
					"Name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"StopFleet": {
			"input": {
				"type": "structure",
				"required": [
					"Name"
				],
				"members": {
					"Name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"UpdateFleet": {
			"input": {
				"type": "structure",
				"required": [
					"Name"
				],
				"members": {
					"ImageName": {},
					"Name": {},
					"InstanceType": {},
					"ComputeCapacity": {
						"shape": "S6"
					},
					"VpcConfig": {
						"shape": "S8"
					},
					"MaxUserDurationInSeconds": {
						"type": "integer"
					},
					"DisconnectTimeoutInSeconds": {
						"type": "integer"
					},
					"DeleteVpcConfig": {
						"type": "boolean"
					},
					"Description": {},
					"DisplayName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Fleet": {
						"shape": "Sd"
					}
				}
			}
		},
		"UpdateStack": {
			"input": {
				"type": "structure",
				"required": [
					"Name"
				],
				"members": {
					"DisplayName": {},
					"Description": {},
					"Name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Stack": {
						"shape": "Sn"
					}
				}
			}
		}
	},
	"shapes": {
		"S6": {
			"type": "structure",
			"required": [
				"DesiredInstances"
			],
			"members": {
				"DesiredInstances": {
					"type": "integer"
				}
			}
		},
		"S8": {
			"type": "structure",
			"required": [
				"SubnetIds"
			],
			"members": {
				"SubnetIds": {
					"type": "list",
					"member": {}
				}
			}
		},
		"Sd": {
			"type": "structure",
			"required": [
				"Arn",
				"Name",
				"ImageName",
				"InstanceType",
				"ComputeCapacityStatus",
				"State"
			],
			"members": {
				"Arn": {},
				"Name": {},
				"DisplayName": {},
				"Description": {},
				"ImageName": {},
				"InstanceType": {},
				"ComputeCapacityStatus": {
					"type": "structure",
					"required": [
						"Desired"
					],
					"members": {
						"Desired": {
							"type": "integer"
						},
						"Running": {
							"type": "integer"
						},
						"InUse": {
							"type": "integer"
						},
						"Available": {
							"type": "integer"
						}
					}
				},
				"MaxUserDurationInSeconds": {
					"type": "integer"
				},
				"DisconnectTimeoutInSeconds": {
					"type": "integer"
				},
				"State": {},
				"VpcConfig": {
					"shape": "S8"
				},
				"CreatedTime": {
					"type": "timestamp"
				},
				"FleetErrors": {
					"type": "list",
					"member": {
						"type": "structure",
						"members": {
							"ErrorCode": {},
							"ErrorMessage": {}
						}
					}
				}
			}
		},
		"Sn": {
			"type": "structure",
			"required": [
				"Name"
			],
			"members": {
				"Arn": {},
				"Name": {},
				"Description": {},
				"DisplayName": {},
				"CreatedTime": {
					"type": "timestamp"
				}
			}
		},
		"Sx": {
			"type": "list",
			"member": {}
		}
	}
};

/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = {
	"version": 2,
	"waiters": {
		"FleetStarted": {
			"delay": 30,
			"maxAttempts": 40,
			"operation": "DescribeFleets",
			"acceptors": [
				{
					"state": "success",
					"matcher": "pathAll",
					"argument": "fleets[].state",
					"expected": "ACTIVE"
				},
				{
					"state": "failure",
					"matcher": "pathAny",
					"argument": "fleets[].state",
					"expected": "PENDING_DEACTIVATE"
				},
				{
					"state": "failure",
					"matcher": "pathAny",
					"argument": "fleets[].state",
					"expected": "INACTIVE"
				}
			]
		},
		"FleetStopped": {
			"delay": 30,
			"maxAttempts": 40,
			"operation": "DescribeFleets",
			"acceptors": [
				{
					"state": "success",
					"matcher": "pathAll",
					"argument": "fleets[].state",
					"expected": "INACTIVE"
				},
				{
					"state": "failure",
					"matcher": "pathAny",
					"argument": "fleets[].state",
					"expected": "PENDING_ACTIVATE"
				},
				{
					"state": "failure",
					"matcher": "pathAny",
					"argument": "fleets[].state",
					"expected": "ACTIVE"
				}
			]
		}
	}
};

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2011-01-01",
		"endpointPrefix": "autoscaling",
		"protocol": "query",
		"serviceFullName": "Auto Scaling",
		"signatureVersion": "v4",
		"uid": "autoscaling-2011-01-01",
		"xmlNamespace": "http://autoscaling.amazonaws.com/doc/2011-01-01/"
	},
	"operations": {
		"AttachInstances": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName"
				],
				"members": {
					"InstanceIds": {
						"shape": "S2"
					},
					"AutoScalingGroupName": {}
				}
			}
		},
		"AttachLoadBalancerTargetGroups": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName",
					"TargetGroupARNs"
				],
				"members": {
					"AutoScalingGroupName": {},
					"TargetGroupARNs": {
						"shape": "S6"
					}
				}
			},
			"output": {
				"resultWrapper": "AttachLoadBalancerTargetGroupsResult",
				"type": "structure",
				"members": {}
			}
		},
		"AttachLoadBalancers": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName",
					"LoadBalancerNames"
				],
				"members": {
					"AutoScalingGroupName": {},
					"LoadBalancerNames": {
						"shape": "Sa"
					}
				}
			},
			"output": {
				"resultWrapper": "AttachLoadBalancersResult",
				"type": "structure",
				"members": {}
			}
		},
		"CompleteLifecycleAction": {
			"input": {
				"type": "structure",
				"required": [
					"LifecycleHookName",
					"AutoScalingGroupName",
					"LifecycleActionResult"
				],
				"members": {
					"LifecycleHookName": {},
					"AutoScalingGroupName": {},
					"LifecycleActionToken": {},
					"LifecycleActionResult": {},
					"InstanceId": {}
				}
			},
			"output": {
				"resultWrapper": "CompleteLifecycleActionResult",
				"type": "structure",
				"members": {}
			}
		},
		"CreateAutoScalingGroup": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName",
					"MinSize",
					"MaxSize"
				],
				"members": {
					"AutoScalingGroupName": {},
					"LaunchConfigurationName": {},
					"InstanceId": {},
					"MinSize": {
						"type": "integer"
					},
					"MaxSize": {
						"type": "integer"
					},
					"DesiredCapacity": {
						"type": "integer"
					},
					"DefaultCooldown": {
						"type": "integer"
					},
					"AvailabilityZones": {
						"shape": "Sn"
					},
					"LoadBalancerNames": {
						"shape": "Sa"
					},
					"TargetGroupARNs": {
						"shape": "S6"
					},
					"HealthCheckType": {},
					"HealthCheckGracePeriod": {
						"type": "integer"
					},
					"PlacementGroup": {},
					"VPCZoneIdentifier": {},
					"TerminationPolicies": {
						"shape": "Sr"
					},
					"NewInstancesProtectedFromScaleIn": {
						"type": "boolean"
					},
					"Tags": {
						"shape": "Su"
					}
				}
			}
		},
		"CreateLaunchConfiguration": {
			"input": {
				"type": "structure",
				"required": [
					"LaunchConfigurationName"
				],
				"members": {
					"LaunchConfigurationName": {},
					"ImageId": {},
					"KeyName": {},
					"SecurityGroups": {
						"shape": "S11"
					},
					"ClassicLinkVPCId": {},
					"ClassicLinkVPCSecurityGroups": {
						"shape": "S12"
					},
					"UserData": {},
					"InstanceId": {},
					"InstanceType": {},
					"KernelId": {},
					"RamdiskId": {},
					"BlockDeviceMappings": {
						"shape": "S14"
					},
					"InstanceMonitoring": {
						"shape": "S1d"
					},
					"SpotPrice": {},
					"IamInstanceProfile": {},
					"EbsOptimized": {
						"type": "boolean"
					},
					"AssociatePublicIpAddress": {
						"type": "boolean"
					},
					"PlacementTenancy": {}
				}
			}
		},
		"CreateOrUpdateTags": {
			"input": {
				"type": "structure",
				"required": [
					"Tags"
				],
				"members": {
					"Tags": {
						"shape": "Su"
					}
				}
			}
		},
		"DeleteAutoScalingGroup": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName"
				],
				"members": {
					"AutoScalingGroupName": {},
					"ForceDelete": {
						"type": "boolean"
					}
				}
			}
		},
		"DeleteLaunchConfiguration": {
			"input": {
				"type": "structure",
				"required": [
					"LaunchConfigurationName"
				],
				"members": {
					"LaunchConfigurationName": {}
				}
			}
		},
		"DeleteLifecycleHook": {
			"input": {
				"type": "structure",
				"required": [
					"LifecycleHookName",
					"AutoScalingGroupName"
				],
				"members": {
					"LifecycleHookName": {},
					"AutoScalingGroupName": {}
				}
			},
			"output": {
				"resultWrapper": "DeleteLifecycleHookResult",
				"type": "structure",
				"members": {}
			}
		},
		"DeleteNotificationConfiguration": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName",
					"TopicARN"
				],
				"members": {
					"AutoScalingGroupName": {},
					"TopicARN": {}
				}
			}
		},
		"DeletePolicy": {
			"input": {
				"type": "structure",
				"required": [
					"PolicyName"
				],
				"members": {
					"AutoScalingGroupName": {},
					"PolicyName": {}
				}
			}
		},
		"DeleteScheduledAction": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName",
					"ScheduledActionName"
				],
				"members": {
					"AutoScalingGroupName": {},
					"ScheduledActionName": {}
				}
			}
		},
		"DeleteTags": {
			"input": {
				"type": "structure",
				"required": [
					"Tags"
				],
				"members": {
					"Tags": {
						"shape": "Su"
					}
				}
			}
		},
		"DescribeAccountLimits": {
			"output": {
				"resultWrapper": "DescribeAccountLimitsResult",
				"type": "structure",
				"members": {
					"MaxNumberOfAutoScalingGroups": {
						"type": "integer"
					},
					"MaxNumberOfLaunchConfigurations": {
						"type": "integer"
					},
					"NumberOfAutoScalingGroups": {
						"type": "integer"
					},
					"NumberOfLaunchConfigurations": {
						"type": "integer"
					}
				}
			}
		},
		"DescribeAdjustmentTypes": {
			"output": {
				"resultWrapper": "DescribeAdjustmentTypesResult",
				"type": "structure",
				"members": {
					"AdjustmentTypes": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"AdjustmentType": {}
							}
						}
					}
				}
			}
		},
		"DescribeAutoScalingGroups": {
			"input": {
				"type": "structure",
				"members": {
					"AutoScalingGroupNames": {
						"shape": "S22"
					},
					"NextToken": {},
					"MaxRecords": {
						"type": "integer"
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeAutoScalingGroupsResult",
				"type": "structure",
				"required": [
					"AutoScalingGroups"
				],
				"members": {
					"AutoScalingGroups": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"AutoScalingGroupName",
								"MinSize",
								"MaxSize",
								"DesiredCapacity",
								"DefaultCooldown",
								"AvailabilityZones",
								"HealthCheckType",
								"CreatedTime"
							],
							"members": {
								"AutoScalingGroupName": {},
								"AutoScalingGroupARN": {},
								"LaunchConfigurationName": {},
								"MinSize": {
									"type": "integer"
								},
								"MaxSize": {
									"type": "integer"
								},
								"DesiredCapacity": {
									"type": "integer"
								},
								"DefaultCooldown": {
									"type": "integer"
								},
								"AvailabilityZones": {
									"shape": "Sn"
								},
								"LoadBalancerNames": {
									"shape": "Sa"
								},
								"TargetGroupARNs": {
									"shape": "S6"
								},
								"HealthCheckType": {},
								"HealthCheckGracePeriod": {
									"type": "integer"
								},
								"Instances": {
									"type": "list",
									"member": {
										"type": "structure",
										"required": [
											"InstanceId",
											"AvailabilityZone",
											"LifecycleState",
											"HealthStatus",
											"LaunchConfigurationName",
											"ProtectedFromScaleIn"
										],
										"members": {
											"InstanceId": {},
											"AvailabilityZone": {},
											"LifecycleState": {},
											"HealthStatus": {},
											"LaunchConfigurationName": {},
											"ProtectedFromScaleIn": {
												"type": "boolean"
											}
										}
									}
								},
								"CreatedTime": {
									"type": "timestamp"
								},
								"SuspendedProcesses": {
									"type": "list",
									"member": {
										"type": "structure",
										"members": {
											"ProcessName": {},
											"SuspensionReason": {}
										}
									}
								},
								"PlacementGroup": {},
								"VPCZoneIdentifier": {},
								"EnabledMetrics": {
									"type": "list",
									"member": {
										"type": "structure",
										"members": {
											"Metric": {},
											"Granularity": {}
										}
									}
								},
								"Status": {},
								"Tags": {
									"shape": "S2f"
								},
								"TerminationPolicies": {
									"shape": "Sr"
								},
								"NewInstancesProtectedFromScaleIn": {
									"type": "boolean"
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeAutoScalingInstances": {
			"input": {
				"type": "structure",
				"members": {
					"InstanceIds": {
						"shape": "S2"
					},
					"MaxRecords": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"resultWrapper": "DescribeAutoScalingInstancesResult",
				"type": "structure",
				"members": {
					"AutoScalingInstances": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"InstanceId",
								"AutoScalingGroupName",
								"AvailabilityZone",
								"LifecycleState",
								"HealthStatus",
								"LaunchConfigurationName",
								"ProtectedFromScaleIn"
							],
							"members": {
								"InstanceId": {},
								"AutoScalingGroupName": {},
								"AvailabilityZone": {},
								"LifecycleState": {},
								"HealthStatus": {},
								"LaunchConfigurationName": {},
								"ProtectedFromScaleIn": {
									"type": "boolean"
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeAutoScalingNotificationTypes": {
			"output": {
				"resultWrapper": "DescribeAutoScalingNotificationTypesResult",
				"type": "structure",
				"members": {
					"AutoScalingNotificationTypes": {
						"shape": "S2m"
					}
				}
			}
		},
		"DescribeLaunchConfigurations": {
			"input": {
				"type": "structure",
				"members": {
					"LaunchConfigurationNames": {
						"type": "list",
						"member": {}
					},
					"NextToken": {},
					"MaxRecords": {
						"type": "integer"
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeLaunchConfigurationsResult",
				"type": "structure",
				"required": [
					"LaunchConfigurations"
				],
				"members": {
					"LaunchConfigurations": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"LaunchConfigurationName",
								"ImageId",
								"InstanceType",
								"CreatedTime"
							],
							"members": {
								"LaunchConfigurationName": {},
								"LaunchConfigurationARN": {},
								"ImageId": {},
								"KeyName": {},
								"SecurityGroups": {
									"shape": "S11"
								},
								"ClassicLinkVPCId": {},
								"ClassicLinkVPCSecurityGroups": {
									"shape": "S12"
								},
								"UserData": {},
								"InstanceType": {},
								"KernelId": {},
								"RamdiskId": {},
								"BlockDeviceMappings": {
									"shape": "S14"
								},
								"InstanceMonitoring": {
									"shape": "S1d"
								},
								"SpotPrice": {},
								"IamInstanceProfile": {},
								"CreatedTime": {
									"type": "timestamp"
								},
								"EbsOptimized": {
									"type": "boolean"
								},
								"AssociatePublicIpAddress": {
									"type": "boolean"
								},
								"PlacementTenancy": {}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeLifecycleHookTypes": {
			"output": {
				"resultWrapper": "DescribeLifecycleHookTypesResult",
				"type": "structure",
				"members": {
					"LifecycleHookTypes": {
						"shape": "S2m"
					}
				}
			}
		},
		"DescribeLifecycleHooks": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName"
				],
				"members": {
					"AutoScalingGroupName": {},
					"LifecycleHookNames": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeLifecycleHooksResult",
				"type": "structure",
				"members": {
					"LifecycleHooks": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"LifecycleHookName": {},
								"AutoScalingGroupName": {},
								"LifecycleTransition": {},
								"NotificationTargetARN": {},
								"RoleARN": {},
								"NotificationMetadata": {},
								"HeartbeatTimeout": {
									"type": "integer"
								},
								"GlobalTimeout": {
									"type": "integer"
								},
								"DefaultResult": {}
							}
						}
					}
				}
			}
		},
		"DescribeLoadBalancerTargetGroups": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName"
				],
				"members": {
					"AutoScalingGroupName": {},
					"NextToken": {},
					"MaxRecords": {
						"type": "integer"
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeLoadBalancerTargetGroupsResult",
				"type": "structure",
				"members": {
					"LoadBalancerTargetGroups": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"LoadBalancerTargetGroupARN": {},
								"State": {}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeLoadBalancers": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName"
				],
				"members": {
					"AutoScalingGroupName": {},
					"NextToken": {},
					"MaxRecords": {
						"type": "integer"
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeLoadBalancersResult",
				"type": "structure",
				"members": {
					"LoadBalancers": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"LoadBalancerName": {},
								"State": {}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeMetricCollectionTypes": {
			"output": {
				"resultWrapper": "DescribeMetricCollectionTypesResult",
				"type": "structure",
				"members": {
					"Metrics": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"Metric": {}
							}
						}
					},
					"Granularities": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"Granularity": {}
							}
						}
					}
				}
			}
		},
		"DescribeNotificationConfigurations": {
			"input": {
				"type": "structure",
				"members": {
					"AutoScalingGroupNames": {
						"shape": "S22"
					},
					"NextToken": {},
					"MaxRecords": {
						"type": "integer"
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeNotificationConfigurationsResult",
				"type": "structure",
				"required": [
					"NotificationConfigurations"
				],
				"members": {
					"NotificationConfigurations": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"AutoScalingGroupName": {},
								"TopicARN": {},
								"NotificationType": {}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribePolicies": {
			"input": {
				"type": "structure",
				"members": {
					"AutoScalingGroupName": {},
					"PolicyNames": {
						"type": "list",
						"member": {}
					},
					"PolicyTypes": {
						"type": "list",
						"member": {}
					},
					"NextToken": {},
					"MaxRecords": {
						"type": "integer"
					}
				}
			},
			"output": {
				"resultWrapper": "DescribePoliciesResult",
				"type": "structure",
				"members": {
					"ScalingPolicies": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"AutoScalingGroupName": {},
								"PolicyName": {},
								"PolicyARN": {},
								"PolicyType": {},
								"AdjustmentType": {},
								"MinAdjustmentStep": {
									"shape": "S3p"
								},
								"MinAdjustmentMagnitude": {
									"type": "integer"
								},
								"ScalingAdjustment": {
									"type": "integer"
								},
								"Cooldown": {
									"type": "integer"
								},
								"StepAdjustments": {
									"shape": "S3s"
								},
								"MetricAggregationType": {},
								"EstimatedInstanceWarmup": {
									"type": "integer"
								},
								"Alarms": {
									"type": "list",
									"member": {
										"type": "structure",
										"members": {
											"AlarmName": {},
											"AlarmARN": {}
										}
									}
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeScalingActivities": {
			"input": {
				"type": "structure",
				"members": {
					"ActivityIds": {
						"type": "list",
						"member": {}
					},
					"AutoScalingGroupName": {},
					"MaxRecords": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"resultWrapper": "DescribeScalingActivitiesResult",
				"type": "structure",
				"required": [
					"Activities"
				],
				"members": {
					"Activities": {
						"shape": "S41"
					},
					"NextToken": {}
				}
			}
		},
		"DescribeScalingProcessTypes": {
			"output": {
				"resultWrapper": "DescribeScalingProcessTypesResult",
				"type": "structure",
				"members": {
					"Processes": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"ProcessName"
							],
							"members": {
								"ProcessName": {}
							}
						}
					}
				}
			}
		},
		"DescribeScheduledActions": {
			"input": {
				"type": "structure",
				"members": {
					"AutoScalingGroupName": {},
					"ScheduledActionNames": {
						"type": "list",
						"member": {}
					},
					"StartTime": {
						"type": "timestamp"
					},
					"EndTime": {
						"type": "timestamp"
					},
					"NextToken": {},
					"MaxRecords": {
						"type": "integer"
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeScheduledActionsResult",
				"type": "structure",
				"members": {
					"ScheduledUpdateGroupActions": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"AutoScalingGroupName": {},
								"ScheduledActionName": {},
								"ScheduledActionARN": {},
								"Time": {
									"type": "timestamp"
								},
								"StartTime": {
									"type": "timestamp"
								},
								"EndTime": {
									"type": "timestamp"
								},
								"Recurrence": {},
								"MinSize": {
									"type": "integer"
								},
								"MaxSize": {
									"type": "integer"
								},
								"DesiredCapacity": {
									"type": "integer"
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeTags": {
			"input": {
				"type": "structure",
				"members": {
					"Filters": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"Name": {},
								"Values": {
									"type": "list",
									"member": {}
								}
							}
						}
					},
					"NextToken": {},
					"MaxRecords": {
						"type": "integer"
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeTagsResult",
				"type": "structure",
				"members": {
					"Tags": {
						"shape": "S2f"
					},
					"NextToken": {}
				}
			}
		},
		"DescribeTerminationPolicyTypes": {
			"output": {
				"resultWrapper": "DescribeTerminationPolicyTypesResult",
				"type": "structure",
				"members": {
					"TerminationPolicyTypes": {
						"shape": "Sr"
					}
				}
			}
		},
		"DetachInstances": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName",
					"ShouldDecrementDesiredCapacity"
				],
				"members": {
					"InstanceIds": {
						"shape": "S2"
					},
					"AutoScalingGroupName": {},
					"ShouldDecrementDesiredCapacity": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"resultWrapper": "DetachInstancesResult",
				"type": "structure",
				"members": {
					"Activities": {
						"shape": "S41"
					}
				}
			}
		},
		"DetachLoadBalancerTargetGroups": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName",
					"TargetGroupARNs"
				],
				"members": {
					"AutoScalingGroupName": {},
					"TargetGroupARNs": {
						"shape": "S6"
					}
				}
			},
			"output": {
				"resultWrapper": "DetachLoadBalancerTargetGroupsResult",
				"type": "structure",
				"members": {}
			}
		},
		"DetachLoadBalancers": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName",
					"LoadBalancerNames"
				],
				"members": {
					"AutoScalingGroupName": {},
					"LoadBalancerNames": {
						"shape": "Sa"
					}
				}
			},
			"output": {
				"resultWrapper": "DetachLoadBalancersResult",
				"type": "structure",
				"members": {}
			}
		},
		"DisableMetricsCollection": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName"
				],
				"members": {
					"AutoScalingGroupName": {},
					"Metrics": {
						"shape": "S4r"
					}
				}
			}
		},
		"EnableMetricsCollection": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName",
					"Granularity"
				],
				"members": {
					"AutoScalingGroupName": {},
					"Metrics": {
						"shape": "S4r"
					},
					"Granularity": {}
				}
			}
		},
		"EnterStandby": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName",
					"ShouldDecrementDesiredCapacity"
				],
				"members": {
					"InstanceIds": {
						"shape": "S2"
					},
					"AutoScalingGroupName": {},
					"ShouldDecrementDesiredCapacity": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"resultWrapper": "EnterStandbyResult",
				"type": "structure",
				"members": {
					"Activities": {
						"shape": "S41"
					}
				}
			}
		},
		"ExecutePolicy": {
			"input": {
				"type": "structure",
				"required": [
					"PolicyName"
				],
				"members": {
					"AutoScalingGroupName": {},
					"PolicyName": {},
					"HonorCooldown": {
						"type": "boolean"
					},
					"MetricValue": {
						"type": "double"
					},
					"BreachThreshold": {
						"type": "double"
					}
				}
			}
		},
		"ExitStandby": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName"
				],
				"members": {
					"InstanceIds": {
						"shape": "S2"
					},
					"AutoScalingGroupName": {}
				}
			},
			"output": {
				"resultWrapper": "ExitStandbyResult",
				"type": "structure",
				"members": {
					"Activities": {
						"shape": "S41"
					}
				}
			}
		},
		"PutLifecycleHook": {
			"input": {
				"type": "structure",
				"required": [
					"LifecycleHookName",
					"AutoScalingGroupName"
				],
				"members": {
					"LifecycleHookName": {},
					"AutoScalingGroupName": {},
					"LifecycleTransition": {},
					"RoleARN": {},
					"NotificationTargetARN": {},
					"NotificationMetadata": {},
					"HeartbeatTimeout": {
						"type": "integer"
					},
					"DefaultResult": {}
				}
			},
			"output": {
				"resultWrapper": "PutLifecycleHookResult",
				"type": "structure",
				"members": {}
			}
		},
		"PutNotificationConfiguration": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName",
					"TopicARN",
					"NotificationTypes"
				],
				"members": {
					"AutoScalingGroupName": {},
					"TopicARN": {},
					"NotificationTypes": {
						"shape": "S2m"
					}
				}
			}
		},
		"PutScalingPolicy": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName",
					"PolicyName",
					"AdjustmentType"
				],
				"members": {
					"AutoScalingGroupName": {},
					"PolicyName": {},
					"PolicyType": {},
					"AdjustmentType": {},
					"MinAdjustmentStep": {
						"shape": "S3p"
					},
					"MinAdjustmentMagnitude": {
						"type": "integer"
					},
					"ScalingAdjustment": {
						"type": "integer"
					},
					"Cooldown": {
						"type": "integer"
					},
					"MetricAggregationType": {},
					"StepAdjustments": {
						"shape": "S3s"
					},
					"EstimatedInstanceWarmup": {
						"type": "integer"
					}
				}
			},
			"output": {
				"resultWrapper": "PutScalingPolicyResult",
				"type": "structure",
				"members": {
					"PolicyARN": {}
				}
			}
		},
		"PutScheduledUpdateGroupAction": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName",
					"ScheduledActionName"
				],
				"members": {
					"AutoScalingGroupName": {},
					"ScheduledActionName": {},
					"Time": {
						"type": "timestamp"
					},
					"StartTime": {
						"type": "timestamp"
					},
					"EndTime": {
						"type": "timestamp"
					},
					"Recurrence": {},
					"MinSize": {
						"type": "integer"
					},
					"MaxSize": {
						"type": "integer"
					},
					"DesiredCapacity": {
						"type": "integer"
					}
				}
			}
		},
		"RecordLifecycleActionHeartbeat": {
			"input": {
				"type": "structure",
				"required": [
					"LifecycleHookName",
					"AutoScalingGroupName"
				],
				"members": {
					"LifecycleHookName": {},
					"AutoScalingGroupName": {},
					"LifecycleActionToken": {},
					"InstanceId": {}
				}
			},
			"output": {
				"resultWrapper": "RecordLifecycleActionHeartbeatResult",
				"type": "structure",
				"members": {}
			}
		},
		"ResumeProcesses": {
			"input": {
				"shape": "S58"
			}
		},
		"SetDesiredCapacity": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName",
					"DesiredCapacity"
				],
				"members": {
					"AutoScalingGroupName": {},
					"DesiredCapacity": {
						"type": "integer"
					},
					"HonorCooldown": {
						"type": "boolean"
					}
				}
			}
		},
		"SetInstanceHealth": {
			"input": {
				"type": "structure",
				"required": [
					"InstanceId",
					"HealthStatus"
				],
				"members": {
					"InstanceId": {},
					"HealthStatus": {},
					"ShouldRespectGracePeriod": {
						"type": "boolean"
					}
				}
			}
		},
		"SetInstanceProtection": {
			"input": {
				"type": "structure",
				"required": [
					"InstanceIds",
					"AutoScalingGroupName",
					"ProtectedFromScaleIn"
				],
				"members": {
					"InstanceIds": {
						"shape": "S2"
					},
					"AutoScalingGroupName": {},
					"ProtectedFromScaleIn": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"resultWrapper": "SetInstanceProtectionResult",
				"type": "structure",
				"members": {}
			}
		},
		"SuspendProcesses": {
			"input": {
				"shape": "S58"
			}
		},
		"TerminateInstanceInAutoScalingGroup": {
			"input": {
				"type": "structure",
				"required": [
					"InstanceId",
					"ShouldDecrementDesiredCapacity"
				],
				"members": {
					"InstanceId": {},
					"ShouldDecrementDesiredCapacity": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"resultWrapper": "TerminateInstanceInAutoScalingGroupResult",
				"type": "structure",
				"members": {
					"Activity": {
						"shape": "S42"
					}
				}
			}
		},
		"UpdateAutoScalingGroup": {
			"input": {
				"type": "structure",
				"required": [
					"AutoScalingGroupName"
				],
				"members": {
					"AutoScalingGroupName": {},
					"LaunchConfigurationName": {},
					"MinSize": {
						"type": "integer"
					},
					"MaxSize": {
						"type": "integer"
					},
					"DesiredCapacity": {
						"type": "integer"
					},
					"DefaultCooldown": {
						"type": "integer"
					},
					"AvailabilityZones": {
						"shape": "Sn"
					},
					"HealthCheckType": {},
					"HealthCheckGracePeriod": {
						"type": "integer"
					},
					"PlacementGroup": {},
					"VPCZoneIdentifier": {},
					"TerminationPolicies": {
						"shape": "Sr"
					},
					"NewInstancesProtectedFromScaleIn": {
						"type": "boolean"
					}
				}
			}
		}
	},
	"shapes": {
		"S2": {
			"type": "list",
			"member": {}
		},
		"S6": {
			"type": "list",
			"member": {}
		},
		"Sa": {
			"type": "list",
			"member": {}
		},
		"Sn": {
			"type": "list",
			"member": {}
		},
		"Sr": {
			"type": "list",
			"member": {}
		},
		"Su": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"Key"
				],
				"members": {
					"ResourceId": {},
					"ResourceType": {},
					"Key": {},
					"Value": {},
					"PropagateAtLaunch": {
						"type": "boolean"
					}
				}
			}
		},
		"S11": {
			"type": "list",
			"member": {}
		},
		"S12": {
			"type": "list",
			"member": {}
		},
		"S14": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"DeviceName"
				],
				"members": {
					"VirtualName": {},
					"DeviceName": {},
					"Ebs": {
						"type": "structure",
						"members": {
							"SnapshotId": {},
							"VolumeSize": {
								"type": "integer"
							},
							"VolumeType": {},
							"DeleteOnTermination": {
								"type": "boolean"
							},
							"Iops": {
								"type": "integer"
							},
							"Encrypted": {
								"type": "boolean"
							}
						}
					},
					"NoDevice": {
						"type": "boolean"
					}
				}
			}
		},
		"S1d": {
			"type": "structure",
			"members": {
				"Enabled": {
					"type": "boolean"
				}
			}
		},
		"S22": {
			"type": "list",
			"member": {}
		},
		"S2f": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"ResourceId": {},
					"ResourceType": {},
					"Key": {},
					"Value": {},
					"PropagateAtLaunch": {
						"type": "boolean"
					}
				}
			}
		},
		"S2m": {
			"type": "list",
			"member": {}
		},
		"S3p": {
			"type": "integer",
			"deprecated": true
		},
		"S3s": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"ScalingAdjustment"
				],
				"members": {
					"MetricIntervalLowerBound": {
						"type": "double"
					},
					"MetricIntervalUpperBound": {
						"type": "double"
					},
					"ScalingAdjustment": {
						"type": "integer"
					}
				}
			}
		},
		"S41": {
			"type": "list",
			"member": {
				"shape": "S42"
			}
		},
		"S42": {
			"type": "structure",
			"required": [
				"ActivityId",
				"AutoScalingGroupName",
				"Cause",
				"StartTime",
				"StatusCode"
			],
			"members": {
				"ActivityId": {},
				"AutoScalingGroupName": {},
				"Description": {},
				"Cause": {},
				"StartTime": {
					"type": "timestamp"
				},
				"EndTime": {
					"type": "timestamp"
				},
				"StatusCode": {},
				"StatusMessage": {},
				"Progress": {
					"type": "integer"
				},
				"Details": {}
			}
		},
		"S4r": {
			"type": "list",
			"member": {}
		},
		"S58": {
			"type": "structure",
			"required": [
				"AutoScalingGroupName"
			],
			"members": {
				"AutoScalingGroupName": {},
				"ScalingProcesses": {
					"type": "list",
					"member": {}
				}
			}
		}
	}
};

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"DescribeAutoScalingGroups": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxRecords",
			"result_key": "AutoScalingGroups"
		},
		"DescribeAutoScalingInstances": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxRecords",
			"result_key": "AutoScalingInstances"
		},
		"DescribeLaunchConfigurations": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxRecords",
			"result_key": "LaunchConfigurations"
		},
		"DescribeNotificationConfigurations": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxRecords",
			"result_key": "NotificationConfigurations"
		},
		"DescribePolicies": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxRecords",
			"result_key": "ScalingPolicies"
		},
		"DescribeScalingActivities": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxRecords",
			"result_key": "Activities"
		},
		"DescribeScheduledActions": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxRecords",
			"result_key": "ScheduledUpdateGroupActions"
		},
		"DescribeTags": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxRecords",
			"result_key": "Tags"
		}
	}
};

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2016-08-10",
		"endpointPrefix": "batch",
		"jsonVersion": "1.1",
		"protocol": "rest-json",
		"serviceAbbreviation": "AWS Batch",
		"serviceFullName": "AWS Batch",
		"signatureVersion": "v4",
		"uid": "batch-2016-08-10"
	},
	"operations": {
		"CancelJob": {
			"http": {
				"requestUri": "/v1/canceljob"
			},
			"input": {
				"type": "structure",
				"required": [
					"jobId",
					"reason"
				],
				"members": {
					"jobId": {},
					"reason": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"CreateComputeEnvironment": {
			"http": {
				"requestUri": "/v1/createcomputeenvironment"
			},
			"input": {
				"type": "structure",
				"required": [
					"computeEnvironmentName",
					"type",
					"serviceRole"
				],
				"members": {
					"computeEnvironmentName": {},
					"type": {},
					"state": {},
					"computeResources": {
						"shape": "S7"
					},
					"serviceRole": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"computeEnvironmentName": {},
					"computeEnvironmentArn": {}
				}
			}
		},
		"CreateJobQueue": {
			"http": {
				"requestUri": "/v1/createjobqueue"
			},
			"input": {
				"type": "structure",
				"required": [
					"jobQueueName",
					"priority",
					"computeEnvironmentOrder"
				],
				"members": {
					"jobQueueName": {},
					"state": {},
					"priority": {
						"type": "integer"
					},
					"computeEnvironmentOrder": {
						"shape": "Sf"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"jobQueueName",
					"jobQueueArn"
				],
				"members": {
					"jobQueueName": {},
					"jobQueueArn": {}
				}
			}
		},
		"DeleteComputeEnvironment": {
			"http": {
				"requestUri": "/v1/deletecomputeenvironment"
			},
			"input": {
				"type": "structure",
				"required": [
					"computeEnvironment"
				],
				"members": {
					"computeEnvironment": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeleteJobQueue": {
			"http": {
				"requestUri": "/v1/deletejobqueue"
			},
			"input": {
				"type": "structure",
				"required": [
					"jobQueue"
				],
				"members": {
					"jobQueue": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeregisterJobDefinition": {
			"http": {
				"requestUri": "/v1/deregisterjobdefinition"
			},
			"input": {
				"type": "structure",
				"required": [
					"jobDefinition"
				],
				"members": {
					"jobDefinition": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DescribeComputeEnvironments": {
			"http": {
				"requestUri": "/v1/describecomputeenvironments"
			},
			"input": {
				"type": "structure",
				"members": {
					"computeEnvironments": {
						"shape": "Sa"
					},
					"maxResults": {
						"type": "integer"
					},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"computeEnvironments": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"computeEnvironmentName",
								"computeEnvironmentArn",
								"ecsClusterArn"
							],
							"members": {
								"computeEnvironmentName": {},
								"computeEnvironmentArn": {},
								"ecsClusterArn": {},
								"type": {},
								"state": {},
								"status": {},
								"statusReason": {},
								"computeResources": {
									"shape": "S7"
								},
								"serviceRole": {}
							}
						}
					},
					"nextToken": {}
				}
			}
		},
		"DescribeJobDefinitions": {
			"http": {
				"requestUri": "/v1/describejobdefinitions"
			},
			"input": {
				"type": "structure",
				"members": {
					"jobDefinitions": {
						"shape": "Sa"
					},
					"maxResults": {
						"type": "integer"
					},
					"jobDefinitionName": {},
					"status": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"jobDefinitions": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"jobDefinitionName",
								"jobDefinitionArn",
								"revision",
								"type"
							],
							"members": {
								"jobDefinitionName": {},
								"jobDefinitionArn": {},
								"revision": {
									"type": "integer"
								},
								"status": {},
								"type": {},
								"parameters": {
									"shape": "Sx"
								},
								"retryStrategy": {
									"shape": "Sy"
								},
								"containerProperties": {
									"shape": "Sz"
								}
							}
						}
					},
					"nextToken": {}
				}
			}
		},
		"DescribeJobQueues": {
			"http": {
				"requestUri": "/v1/describejobqueues"
			},
			"input": {
				"type": "structure",
				"members": {
					"jobQueues": {
						"shape": "Sa"
					},
					"maxResults": {
						"type": "integer"
					},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"jobQueues": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"jobQueueName",
								"jobQueueArn",
								"state",
								"priority",
								"computeEnvironmentOrder"
							],
							"members": {
								"jobQueueName": {},
								"jobQueueArn": {},
								"state": {},
								"status": {},
								"statusReason": {},
								"priority": {
									"type": "integer"
								},
								"computeEnvironmentOrder": {
									"shape": "Sf"
								}
							}
						}
					},
					"nextToken": {}
				}
			}
		},
		"DescribeJobs": {
			"http": {
				"requestUri": "/v1/describejobs"
			},
			"input": {
				"type": "structure",
				"required": [
					"jobs"
				],
				"members": {
					"jobs": {
						"shape": "Sa"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"jobs": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"jobName",
								"jobId",
								"jobQueue",
								"status",
								"startedAt",
								"jobDefinition"
							],
							"members": {
								"jobName": {},
								"jobId": {},
								"jobQueue": {},
								"status": {},
								"attempts": {
									"type": "list",
									"member": {
										"type": "structure",
										"members": {
											"container": {
												"type": "structure",
												"members": {
													"containerInstanceArn": {},
													"taskArn": {},
													"exitCode": {
														"type": "integer"
													},
													"reason": {}
												}
											},
											"startedAt": {
												"type": "long"
											},
											"stoppedAt": {
												"type": "long"
											},
											"statusReason": {}
										}
									}
								},
								"statusReason": {},
								"createdAt": {
									"type": "long"
								},
								"retryStrategy": {
									"shape": "Sy"
								},
								"startedAt": {
									"type": "long"
								},
								"stoppedAt": {
									"type": "long"
								},
								"dependsOn": {
									"shape": "S1o"
								},
								"jobDefinition": {},
								"parameters": {
									"shape": "Sx"
								},
								"container": {
									"type": "structure",
									"members": {
										"image": {},
										"vcpus": {
											"type": "integer"
										},
										"memory": {
											"type": "integer"
										},
										"command": {
											"shape": "Sa"
										},
										"jobRoleArn": {},
										"volumes": {
											"shape": "S10"
										},
										"environment": {
											"shape": "S13"
										},
										"mountPoints": {
											"shape": "S15"
										},
										"readonlyRootFilesystem": {
											"type": "boolean"
										},
										"ulimits": {
											"shape": "S18"
										},
										"privileged": {
											"type": "boolean"
										},
										"user": {},
										"exitCode": {
											"type": "integer"
										},
										"reason": {},
										"containerInstanceArn": {},
										"taskArn": {}
									}
								}
							}
						}
					}
				}
			}
		},
		"ListJobs": {
			"http": {
				"requestUri": "/v1/listjobs"
			},
			"input": {
				"type": "structure",
				"required": [
					"jobQueue"
				],
				"members": {
					"jobQueue": {},
					"jobStatus": {},
					"maxResults": {
						"type": "integer"
					},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"jobSummaryList"
				],
				"members": {
					"jobSummaryList": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"jobId",
								"jobName"
							],
							"members": {
								"jobId": {},
								"jobName": {}
							}
						}
					},
					"nextToken": {}
				}
			}
		},
		"RegisterJobDefinition": {
			"http": {
				"requestUri": "/v1/registerjobdefinition"
			},
			"input": {
				"type": "structure",
				"required": [
					"jobDefinitionName",
					"type"
				],
				"members": {
					"jobDefinitionName": {},
					"type": {},
					"parameters": {
						"shape": "Sx"
					},
					"containerProperties": {
						"shape": "Sz"
					},
					"retryStrategy": {
						"shape": "Sy"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"jobDefinitionName",
					"jobDefinitionArn",
					"revision"
				],
				"members": {
					"jobDefinitionName": {},
					"jobDefinitionArn": {},
					"revision": {
						"type": "integer"
					}
				}
			}
		},
		"SubmitJob": {
			"http": {
				"requestUri": "/v1/submitjob"
			},
			"input": {
				"type": "structure",
				"required": [
					"jobName",
					"jobQueue",
					"jobDefinition"
				],
				"members": {
					"jobName": {},
					"jobQueue": {},
					"dependsOn": {
						"shape": "S1o"
					},
					"jobDefinition": {},
					"parameters": {
						"shape": "Sx"
					},
					"containerOverrides": {
						"type": "structure",
						"members": {
							"vcpus": {
								"type": "integer"
							},
							"memory": {
								"type": "integer"
							},
							"command": {
								"shape": "Sa"
							},
							"environment": {
								"shape": "S13"
							}
						}
					},
					"retryStrategy": {
						"shape": "Sy"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"jobName",
					"jobId"
				],
				"members": {
					"jobName": {},
					"jobId": {}
				}
			}
		},
		"TerminateJob": {
			"http": {
				"requestUri": "/v1/terminatejob"
			},
			"input": {
				"type": "structure",
				"required": [
					"jobId",
					"reason"
				],
				"members": {
					"jobId": {},
					"reason": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"UpdateComputeEnvironment": {
			"http": {
				"requestUri": "/v1/updatecomputeenvironment"
			},
			"input": {
				"type": "structure",
				"required": [
					"computeEnvironment"
				],
				"members": {
					"computeEnvironment": {},
					"state": {},
					"computeResources": {
						"type": "structure",
						"members": {
							"minvCpus": {
								"type": "integer"
							},
							"maxvCpus": {
								"type": "integer"
							},
							"desiredvCpus": {
								"type": "integer"
							}
						}
					},
					"serviceRole": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"computeEnvironmentName": {},
					"computeEnvironmentArn": {}
				}
			}
		},
		"UpdateJobQueue": {
			"http": {
				"requestUri": "/v1/updatejobqueue"
			},
			"input": {
				"type": "structure",
				"required": [
					"jobQueue"
				],
				"members": {
					"jobQueue": {},
					"state": {},
					"priority": {
						"type": "integer"
					},
					"computeEnvironmentOrder": {
						"shape": "Sf"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"jobQueueName": {},
					"jobQueueArn": {}
				}
			}
		}
	},
	"shapes": {
		"S7": {
			"type": "structure",
			"required": [
				"type",
				"minvCpus",
				"maxvCpus",
				"instanceTypes",
				"subnets",
				"securityGroupIds",
				"instanceRole"
			],
			"members": {
				"type": {},
				"minvCpus": {
					"type": "integer"
				},
				"maxvCpus": {
					"type": "integer"
				},
				"desiredvCpus": {
					"type": "integer"
				},
				"instanceTypes": {
					"shape": "Sa"
				},
				"subnets": {
					"shape": "Sa"
				},
				"securityGroupIds": {
					"shape": "Sa"
				},
				"ec2KeyPair": {},
				"instanceRole": {},
				"tags": {
					"type": "map",
					"key": {},
					"value": {}
				},
				"bidPercentage": {
					"type": "integer"
				},
				"spotIamFleetRole": {}
			}
		},
		"Sa": {
			"type": "list",
			"member": {}
		},
		"Sf": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"order",
					"computeEnvironment"
				],
				"members": {
					"order": {
						"type": "integer"
					},
					"computeEnvironment": {}
				}
			}
		},
		"Sx": {
			"type": "map",
			"key": {},
			"value": {}
		},
		"Sy": {
			"type": "structure",
			"members": {
				"attempts": {
					"type": "integer"
				}
			}
		},
		"Sz": {
			"type": "structure",
			"required": [
				"image",
				"vcpus",
				"memory"
			],
			"members": {
				"image": {},
				"vcpus": {
					"type": "integer"
				},
				"memory": {
					"type": "integer"
				},
				"command": {
					"shape": "Sa"
				},
				"jobRoleArn": {},
				"volumes": {
					"shape": "S10"
				},
				"environment": {
					"shape": "S13"
				},
				"mountPoints": {
					"shape": "S15"
				},
				"readonlyRootFilesystem": {
					"type": "boolean"
				},
				"privileged": {
					"type": "boolean"
				},
				"ulimits": {
					"shape": "S18"
				},
				"user": {}
			}
		},
		"S10": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"host": {
						"type": "structure",
						"members": {
							"sourcePath": {}
						}
					},
					"name": {}
				}
			}
		},
		"S13": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"name": {},
					"value": {}
				}
			}
		},
		"S15": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"containerPath": {},
					"readOnly": {
						"type": "boolean"
					},
					"sourceVolume": {}
				}
			}
		},
		"S18": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"hardLimit",
					"name",
					"softLimit"
				],
				"members": {
					"hardLimit": {
						"type": "integer"
					},
					"name": {},
					"softLimit": {
						"type": "integer"
					}
				}
			}
		},
		"S1o": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"jobId": {}
				}
			}
		}
	}
};

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2016-10-20",
		"endpointPrefix": "budgets",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceAbbreviation": "AWSBudgets",
		"serviceFullName": "AWS Budgets",
		"signatureVersion": "v4",
		"targetPrefix": "AWSBudgetServiceGateway",
		"uid": "budgets-2016-10-20"
	},
	"operations": {
		"CreateBudget": {
			"input": {
				"type": "structure",
				"required": [
					"AccountId",
					"Budget"
				],
				"members": {
					"AccountId": {},
					"Budget": {
						"shape": "S3"
					},
					"NotificationsWithSubscribers": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"Notification",
								"Subscribers"
							],
							"members": {
								"Notification": {
									"shape": "Sj"
								},
								"Subscribers": {
									"shape": "Sn"
								}
							}
						}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"CreateNotification": {
			"input": {
				"type": "structure",
				"required": [
					"AccountId",
					"BudgetName",
					"Notification",
					"Subscribers"
				],
				"members": {
					"AccountId": {},
					"BudgetName": {},
					"Notification": {
						"shape": "Sj"
					},
					"Subscribers": {
						"shape": "Sn"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"CreateSubscriber": {
			"input": {
				"type": "structure",
				"required": [
					"AccountId",
					"BudgetName",
					"Notification",
					"Subscriber"
				],
				"members": {
					"AccountId": {},
					"BudgetName": {},
					"Notification": {
						"shape": "Sj"
					},
					"Subscriber": {
						"shape": "So"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeleteBudget": {
			"input": {
				"type": "structure",
				"required": [
					"AccountId",
					"BudgetName"
				],
				"members": {
					"AccountId": {},
					"BudgetName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeleteNotification": {
			"input": {
				"type": "structure",
				"required": [
					"AccountId",
					"BudgetName",
					"Notification"
				],
				"members": {
					"AccountId": {},
					"BudgetName": {},
					"Notification": {
						"shape": "Sj"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeleteSubscriber": {
			"input": {
				"type": "structure",
				"required": [
					"AccountId",
					"BudgetName",
					"Notification",
					"Subscriber"
				],
				"members": {
					"AccountId": {},
					"BudgetName": {},
					"Notification": {
						"shape": "Sj"
					},
					"Subscriber": {
						"shape": "So"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DescribeBudget": {
			"input": {
				"type": "structure",
				"required": [
					"AccountId",
					"BudgetName"
				],
				"members": {
					"AccountId": {},
					"BudgetName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Budget": {
						"shape": "S3"
					}
				}
			}
		},
		"DescribeBudgets": {
			"input": {
				"type": "structure",
				"required": [
					"AccountId"
				],
				"members": {
					"AccountId": {},
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Budgets": {
						"type": "list",
						"member": {
							"shape": "S3"
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeNotificationsForBudget": {
			"input": {
				"type": "structure",
				"required": [
					"AccountId",
					"BudgetName"
				],
				"members": {
					"AccountId": {},
					"BudgetName": {},
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Notifications": {
						"type": "list",
						"member": {
							"shape": "Sj"
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeSubscribersForNotification": {
			"input": {
				"type": "structure",
				"required": [
					"AccountId",
					"BudgetName",
					"Notification"
				],
				"members": {
					"AccountId": {},
					"BudgetName": {},
					"Notification": {
						"shape": "Sj"
					},
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Subscribers": {
						"shape": "Sn"
					},
					"NextToken": {}
				}
			}
		},
		"UpdateBudget": {
			"input": {
				"type": "structure",
				"required": [
					"AccountId",
					"NewBudget"
				],
				"members": {
					"AccountId": {},
					"NewBudget": {
						"shape": "S3"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"UpdateNotification": {
			"input": {
				"type": "structure",
				"required": [
					"AccountId",
					"BudgetName",
					"OldNotification",
					"NewNotification"
				],
				"members": {
					"AccountId": {},
					"BudgetName": {},
					"OldNotification": {
						"shape": "Sj"
					},
					"NewNotification": {
						"shape": "Sj"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"UpdateSubscriber": {
			"input": {
				"type": "structure",
				"required": [
					"AccountId",
					"BudgetName",
					"Notification",
					"OldSubscriber",
					"NewSubscriber"
				],
				"members": {
					"AccountId": {},
					"BudgetName": {},
					"Notification": {
						"shape": "Sj"
					},
					"OldSubscriber": {
						"shape": "So"
					},
					"NewSubscriber": {
						"shape": "So"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		}
	},
	"shapes": {
		"S3": {
			"type": "structure",
			"required": [
				"BudgetName",
				"BudgetLimit",
				"CostTypes",
				"TimeUnit",
				"TimePeriod",
				"BudgetType"
			],
			"members": {
				"BudgetName": {},
				"BudgetLimit": {
					"shape": "S5"
				},
				"CostFilters": {
					"type": "map",
					"key": {},
					"value": {
						"type": "list",
						"member": {}
					}
				},
				"CostTypes": {
					"type": "structure",
					"required": [
						"IncludeTax",
						"IncludeSubscription",
						"UseBlended"
					],
					"members": {
						"IncludeTax": {
							"type": "boolean"
						},
						"IncludeSubscription": {
							"type": "boolean"
						},
						"UseBlended": {
							"type": "boolean"
						}
					}
				},
				"TimeUnit": {},
				"TimePeriod": {
					"type": "structure",
					"required": [
						"Start",
						"End"
					],
					"members": {
						"Start": {
							"type": "timestamp"
						},
						"End": {
							"type": "timestamp"
						}
					}
				},
				"CalculatedSpend": {
					"type": "structure",
					"required": [
						"ActualSpend"
					],
					"members": {
						"ActualSpend": {
							"shape": "S5"
						},
						"ForecastedSpend": {
							"shape": "S5"
						}
					}
				},
				"BudgetType": {}
			}
		},
		"S5": {
			"type": "structure",
			"required": [
				"Amount",
				"Unit"
			],
			"members": {
				"Amount": {},
				"Unit": {}
			}
		},
		"Sj": {
			"type": "structure",
			"required": [
				"NotificationType",
				"ComparisonOperator",
				"Threshold"
			],
			"members": {
				"NotificationType": {},
				"ComparisonOperator": {},
				"Threshold": {
					"type": "double"
				}
			}
		},
		"Sn": {
			"type": "list",
			"member": {
				"shape": "So"
			}
		},
		"So": {
			"type": "structure",
			"required": [
				"SubscriptionType",
				"Address"
			],
			"members": {
				"SubscriptionType": {},
				"Address": {}
			}
		}
	}
};

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {}
};

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2016-05-10",
		"endpointPrefix": "clouddirectory",
		"protocol": "rest-json",
		"serviceFullName": "Amazon CloudDirectory",
		"signatureVersion": "v4",
		"signingName": "clouddirectory",
		"uid": "clouddirectory-2016-05-10"
	},
	"operations": {
		"AddFacetToObject": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/object/facets",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"SchemaFacet",
					"ObjectReference"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"SchemaFacet": {
						"shape": "S3"
					},
					"ObjectAttributeList": {
						"shape": "S5"
					},
					"ObjectReference": {
						"shape": "Sf"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"ApplySchema": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/schema/apply",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"PublishedSchemaArn",
					"DirectoryArn"
				],
				"members": {
					"PublishedSchemaArn": {},
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"AppliedSchemaArn": {},
					"DirectoryArn": {}
				}
			}
		},
		"AttachObject": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/object/attach",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"ParentReference",
					"ChildReference",
					"LinkName"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"ParentReference": {
						"shape": "Sf"
					},
					"ChildReference": {
						"shape": "Sf"
					},
					"LinkName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"AttachedObjectIdentifier": {}
				}
			}
		},
		"AttachPolicy": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/policy/attach",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"PolicyReference",
					"ObjectReference"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"PolicyReference": {
						"shape": "Sf"
					},
					"ObjectReference": {
						"shape": "Sf"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"AttachToIndex": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/index/attach",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"IndexReference",
					"TargetReference"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"IndexReference": {
						"shape": "Sf"
					},
					"TargetReference": {
						"shape": "Sf"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"AttachedObjectIdentifier": {}
				}
			}
		},
		"BatchRead": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/batchread",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"Operations"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"Operations": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"ListObjectAttributes": {
									"type": "structure",
									"required": [
										"ObjectReference"
									],
									"members": {
										"ObjectReference": {
											"shape": "Sf"
										},
										"NextToken": {},
										"MaxResults": {
											"type": "integer"
										},
										"FacetFilter": {
											"shape": "S3"
										}
									}
								},
								"ListObjectChildren": {
									"type": "structure",
									"required": [
										"ObjectReference"
									],
									"members": {
										"ObjectReference": {
											"shape": "Sf"
										},
										"NextToken": {},
										"MaxResults": {
											"type": "integer"
										}
									}
								}
							}
						}
					},
					"ConsistencyLevel": {
						"location": "header",
						"locationName": "x-amz-consistency-level"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Responses": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"SuccessfulResponse": {
									"type": "structure",
									"members": {
										"ListObjectAttributes": {
											"type": "structure",
											"members": {
												"Attributes": {
													"shape": "S5"
												},
												"NextToken": {}
											}
										},
										"ListObjectChildren": {
											"type": "structure",
											"members": {
												"Children": {
													"shape": "S16"
												},
												"NextToken": {}
											}
										}
									}
								},
								"ExceptionResponse": {
									"type": "structure",
									"members": {
										"Type": {},
										"Message": {}
									}
								}
							}
						}
					}
				}
			}
		},
		"BatchWrite": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/batchwrite",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"Operations"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"Operations": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"CreateObject": {
									"type": "structure",
									"required": [
										"SchemaFacet",
										"ObjectAttributeList",
										"ParentReference",
										"LinkName",
										"BatchReferenceName"
									],
									"members": {
										"SchemaFacet": {
											"shape": "S1e"
										},
										"ObjectAttributeList": {
											"shape": "S5"
										},
										"ParentReference": {
											"shape": "Sf"
										},
										"LinkName": {},
										"BatchReferenceName": {}
									}
								},
								"AttachObject": {
									"type": "structure",
									"required": [
										"ParentReference",
										"ChildReference",
										"LinkName"
									],
									"members": {
										"ParentReference": {
											"shape": "Sf"
										},
										"ChildReference": {
											"shape": "Sf"
										},
										"LinkName": {}
									}
								},
								"DetachObject": {
									"type": "structure",
									"required": [
										"ParentReference",
										"LinkName",
										"BatchReferenceName"
									],
									"members": {
										"ParentReference": {
											"shape": "Sf"
										},
										"LinkName": {},
										"BatchReferenceName": {}
									}
								},
								"UpdateObjectAttributes": {
									"type": "structure",
									"required": [
										"ObjectReference",
										"AttributeUpdates"
									],
									"members": {
										"ObjectReference": {
											"shape": "Sf"
										},
										"AttributeUpdates": {
											"shape": "S1j"
										}
									}
								},
								"DeleteObject": {
									"type": "structure",
									"required": [
										"ObjectReference"
									],
									"members": {
										"ObjectReference": {
											"shape": "Sf"
										}
									}
								},
								"AddFacetToObject": {
									"type": "structure",
									"required": [
										"SchemaFacet",
										"ObjectAttributeList",
										"ObjectReference"
									],
									"members": {
										"SchemaFacet": {
											"shape": "S3"
										},
										"ObjectAttributeList": {
											"shape": "S5"
										},
										"ObjectReference": {
											"shape": "Sf"
										}
									}
								},
								"RemoveFacetFromObject": {
									"type": "structure",
									"required": [
										"SchemaFacet",
										"ObjectReference"
									],
									"members": {
										"SchemaFacet": {
											"shape": "S3"
										},
										"ObjectReference": {
											"shape": "Sf"
										}
									}
								}
							}
						}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Responses": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"CreateObject": {
									"type": "structure",
									"members": {
										"ObjectIdentifier": {}
									}
								},
								"AttachObject": {
									"type": "structure",
									"members": {
										"attachedObjectIdentifier": {}
									}
								},
								"DetachObject": {
									"type": "structure",
									"members": {
										"detachedObjectIdentifier": {}
									}
								},
								"UpdateObjectAttributes": {
									"type": "structure",
									"members": {
										"ObjectIdentifier": {}
									}
								},
								"DeleteObject": {
									"type": "structure",
									"members": {}
								},
								"AddFacetToObject": {
									"type": "structure",
									"members": {}
								},
								"RemoveFacetFromObject": {
									"type": "structure",
									"members": {}
								}
							}
						}
					}
				}
			}
		},
		"CreateDirectory": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/directory/create",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"Name",
					"SchemaArn"
				],
				"members": {
					"Name": {},
					"SchemaArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"Name",
					"ObjectIdentifier",
					"AppliedSchemaArn"
				],
				"members": {
					"DirectoryArn": {},
					"Name": {},
					"ObjectIdentifier": {},
					"AppliedSchemaArn": {}
				}
			}
		},
		"CreateFacet": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/facet/create",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"SchemaArn",
					"Name",
					"ObjectType"
				],
				"members": {
					"SchemaArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"Name": {},
					"Attributes": {
						"shape": "S25"
					},
					"ObjectType": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"CreateIndex": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/index",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"OrderedIndexedAttributeList",
					"IsUnique"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"OrderedIndexedAttributeList": {
						"type": "list",
						"member": {
							"shape": "S7"
						}
					},
					"IsUnique": {
						"type": "boolean"
					},
					"ParentReference": {
						"shape": "Sf"
					},
					"LinkName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ObjectIdentifier": {}
				}
			}
		},
		"CreateObject": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/object",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"SchemaFacets"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"SchemaFacets": {
						"shape": "S1e"
					},
					"ObjectAttributeList": {
						"shape": "S5"
					},
					"ParentReference": {
						"shape": "Sf"
					},
					"LinkName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ObjectIdentifier": {}
				}
			}
		},
		"CreateSchema": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/schema/create",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"Name"
				],
				"members": {
					"Name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"SchemaArn": {}
				}
			}
		},
		"DeleteDirectory": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/directory",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"DirectoryArn"
				],
				"members": {
					"DirectoryArn": {}
				}
			}
		},
		"DeleteFacet": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/facet/delete",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"SchemaArn",
					"Name"
				],
				"members": {
					"SchemaArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"Name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeleteObject": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/object/delete",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"ObjectReference"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"ObjectReference": {
						"shape": "Sf"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeleteSchema": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/schema",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"SchemaArn"
				],
				"members": {
					"SchemaArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"SchemaArn": {}
				}
			}
		},
		"DetachFromIndex": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/index/detach",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"IndexReference",
					"TargetReference"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"IndexReference": {
						"shape": "Sf"
					},
					"TargetReference": {
						"shape": "Sf"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DetachedObjectIdentifier": {}
				}
			}
		},
		"DetachObject": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/object/detach",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"ParentReference",
					"LinkName"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"ParentReference": {
						"shape": "Sf"
					},
					"LinkName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DetachedObjectIdentifier": {}
				}
			}
		},
		"DetachPolicy": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/policy/detach",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"PolicyReference",
					"ObjectReference"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"PolicyReference": {
						"shape": "Sf"
					},
					"ObjectReference": {
						"shape": "Sf"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DisableDirectory": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/directory/disable",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"DirectoryArn"
				],
				"members": {
					"DirectoryArn": {}
				}
			}
		},
		"EnableDirectory": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/directory/enable",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"DirectoryArn"
				],
				"members": {
					"DirectoryArn": {}
				}
			}
		},
		"GetDirectory": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/directory/get",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"Directory"
				],
				"members": {
					"Directory": {
						"shape": "S3d"
					}
				}
			}
		},
		"GetFacet": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/facet",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"SchemaArn",
					"Name"
				],
				"members": {
					"SchemaArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"Name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Facet": {
						"type": "structure",
						"members": {
							"Name": {},
							"ObjectType": {}
						}
					}
				}
			}
		},
		"GetObjectInformation": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/object/information",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"ObjectReference"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"ObjectReference": {
						"shape": "Sf"
					},
					"ConsistencyLevel": {
						"location": "header",
						"locationName": "x-amz-consistency-level"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"SchemaFacets": {
						"shape": "S1e"
					},
					"ObjectIdentifier": {}
				}
			}
		},
		"GetSchemaAsJson": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/schema/json",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"SchemaArn"
				],
				"members": {
					"SchemaArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Name": {},
					"Document": {}
				}
			}
		},
		"ListAppliedSchemaArns": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/schema/applied",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn"
				],
				"members": {
					"DirectoryArn": {},
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"SchemaArns": {
						"shape": "S3q"
					},
					"NextToken": {}
				}
			}
		},
		"ListAttachedIndices": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/object/indices",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"TargetReference"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"TargetReference": {
						"shape": "Sf"
					},
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					},
					"ConsistencyLevel": {
						"location": "header",
						"locationName": "x-amz-consistency-level"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IndexAttachments": {
						"shape": "S3t"
					},
					"NextToken": {}
				}
			}
		},
		"ListDevelopmentSchemaArns": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/schema/development",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"members": {
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"SchemaArns": {
						"shape": "S3q"
					},
					"NextToken": {}
				}
			}
		},
		"ListDirectories": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/directory/list",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"members": {
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					},
					"state": {}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"Directories"
				],
				"members": {
					"Directories": {
						"type": "list",
						"member": {
							"shape": "S3d"
						}
					},
					"NextToken": {}
				}
			}
		},
		"ListFacetAttributes": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/facet/attributes",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"SchemaArn",
					"Name"
				],
				"members": {
					"SchemaArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"Name": {},
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Attributes": {
						"shape": "S25"
					},
					"NextToken": {}
				}
			}
		},
		"ListFacetNames": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/facet/list",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"SchemaArn"
				],
				"members": {
					"SchemaArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"FacetNames": {
						"type": "list",
						"member": {}
					},
					"NextToken": {}
				}
			}
		},
		"ListIndex": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/index/targets",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"IndexReference"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"RangesOnIndexedValues": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"AttributeKey": {
									"shape": "S7"
								},
								"Range": {
									"type": "structure",
									"required": [
										"StartMode",
										"EndMode"
									],
									"members": {
										"StartMode": {},
										"StartValue": {
											"shape": "S9"
										},
										"EndMode": {},
										"EndValue": {
											"shape": "S9"
										}
									}
								}
							}
						}
					},
					"IndexReference": {
						"shape": "Sf"
					},
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {},
					"ConsistencyLevel": {
						"location": "header",
						"locationName": "x-amz-consistency-level"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IndexAttachments": {
						"shape": "S3t"
					},
					"NextToken": {}
				}
			}
		},
		"ListObjectAttributes": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/object/attributes",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"ObjectReference"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"ObjectReference": {
						"shape": "Sf"
					},
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					},
					"ConsistencyLevel": {
						"location": "header",
						"locationName": "x-amz-consistency-level"
					},
					"FacetFilter": {
						"shape": "S3"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Attributes": {
						"shape": "S5"
					},
					"NextToken": {}
				}
			}
		},
		"ListObjectChildren": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/object/children",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"ObjectReference"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"ObjectReference": {
						"shape": "Sf"
					},
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					},
					"ConsistencyLevel": {
						"location": "header",
						"locationName": "x-amz-consistency-level"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Children": {
						"shape": "S16"
					},
					"NextToken": {}
				}
			}
		},
		"ListObjectParentPaths": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/object/parentpaths",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"ObjectReference"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"ObjectReference": {
						"shape": "Sf"
					},
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"PathToObjectIdentifiersList": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"Path": {},
								"ObjectIdentifiers": {
									"shape": "S4k"
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"ListObjectParents": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/object/parent",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"ObjectReference"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"ObjectReference": {
						"shape": "Sf"
					},
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					},
					"ConsistencyLevel": {
						"location": "header",
						"locationName": "x-amz-consistency-level"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Parents": {
						"type": "map",
						"key": {},
						"value": {}
					},
					"NextToken": {}
				}
			}
		},
		"ListObjectPolicies": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/object/policy",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"ObjectReference"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"ObjectReference": {
						"shape": "Sf"
					},
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					},
					"ConsistencyLevel": {
						"location": "header",
						"locationName": "x-amz-consistency-level"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"AttachedPolicyIds": {
						"shape": "S4k"
					},
					"NextToken": {}
				}
			}
		},
		"ListPolicyAttachments": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/policy/attachment",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"PolicyReference"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"PolicyReference": {
						"shape": "Sf"
					},
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					},
					"ConsistencyLevel": {
						"location": "header",
						"locationName": "x-amz-consistency-level"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ObjectIdentifiers": {
						"shape": "S4k"
					},
					"NextToken": {}
				}
			}
		},
		"ListPublishedSchemaArns": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/schema/published",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"members": {
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"SchemaArns": {
						"shape": "S3q"
					},
					"NextToken": {}
				}
			}
		},
		"ListTagsForResource": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/tags",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"ResourceArn"
				],
				"members": {
					"ResourceArn": {},
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Tags": {
						"shape": "S4x"
					},
					"NextToken": {}
				}
			}
		},
		"LookupPolicy": {
			"http": {
				"requestUri": "/amazonclouddirectory/2017-01-11/policy/lookup",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"ObjectReference"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"ObjectReference": {
						"shape": "Sf"
					},
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"PolicyToPathList": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"Path": {},
								"Policies": {
									"type": "list",
									"member": {
										"type": "structure",
										"members": {
											"PolicyId": {},
											"ObjectIdentifier": {},
											"PolicyType": {}
										}
									}
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"PublishSchema": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/schema/publish",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DevelopmentSchemaArn",
					"Version"
				],
				"members": {
					"DevelopmentSchemaArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"Version": {},
					"Name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"PublishedSchemaArn": {}
				}
			}
		},
		"PutSchemaFromJson": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/schema/json",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"SchemaArn",
					"Document"
				],
				"members": {
					"SchemaArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"Document": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Arn": {}
				}
			}
		},
		"RemoveFacetFromObject": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/object/facets/delete",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"SchemaFacet",
					"ObjectReference"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"SchemaFacet": {
						"shape": "S3"
					},
					"ObjectReference": {
						"shape": "Sf"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"TagResource": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/tags/add",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"ResourceArn",
					"Tags"
				],
				"members": {
					"ResourceArn": {},
					"Tags": {
						"shape": "S4x"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"UntagResource": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/tags/remove",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"ResourceArn",
					"TagKeys"
				],
				"members": {
					"ResourceArn": {},
					"TagKeys": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"UpdateFacet": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/facet",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"SchemaArn",
					"Name"
				],
				"members": {
					"SchemaArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"Name": {},
					"AttributeUpdates": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"Attribute": {
									"shape": "S26"
								},
								"Action": {}
							}
						}
					},
					"ObjectType": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"UpdateObjectAttributes": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/object/update",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"DirectoryArn",
					"ObjectReference",
					"AttributeUpdates"
				],
				"members": {
					"DirectoryArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"ObjectReference": {
						"shape": "Sf"
					},
					"AttributeUpdates": {
						"shape": "S1j"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ObjectIdentifier": {}
				}
			}
		},
		"UpdateSchema": {
			"http": {
				"method": "PUT",
				"requestUri": "/amazonclouddirectory/2017-01-11/schema/update",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"SchemaArn",
					"Name"
				],
				"members": {
					"SchemaArn": {
						"location": "header",
						"locationName": "x-amz-data-partition"
					},
					"Name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"SchemaArn": {}
				}
			}
		}
	},
	"shapes": {
		"S3": {
			"type": "structure",
			"members": {
				"SchemaArn": {},
				"FacetName": {}
			}
		},
		"S5": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"Key",
					"Value"
				],
				"members": {
					"Key": {
						"shape": "S7"
					},
					"Value": {
						"shape": "S9"
					}
				}
			}
		},
		"S7": {
			"type": "structure",
			"required": [
				"SchemaArn",
				"FacetName",
				"Name"
			],
			"members": {
				"SchemaArn": {},
				"FacetName": {},
				"Name": {}
			}
		},
		"S9": {
			"type": "structure",
			"members": {
				"StringValue": {},
				"BinaryValue": {
					"type": "blob"
				},
				"BooleanValue": {
					"type": "boolean"
				},
				"NumberValue": {},
				"DatetimeValue": {
					"type": "timestamp"
				}
			}
		},
		"Sf": {
			"type": "structure",
			"members": {
				"Selector": {}
			}
		},
		"S16": {
			"type": "map",
			"key": {},
			"value": {}
		},
		"S1e": {
			"type": "list",
			"member": {
				"shape": "S3"
			}
		},
		"S1j": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"ObjectAttributeKey": {
						"shape": "S7"
					},
					"ObjectAttributeAction": {
						"type": "structure",
						"members": {
							"ObjectAttributeActionType": {},
							"ObjectAttributeUpdateValue": {
								"shape": "S9"
							}
						}
					}
				}
			}
		},
		"S25": {
			"type": "list",
			"member": {
				"shape": "S26"
			}
		},
		"S26": {
			"type": "structure",
			"required": [
				"Name"
			],
			"members": {
				"Name": {},
				"AttributeDefinition": {
					"type": "structure",
					"required": [
						"Type"
					],
					"members": {
						"Type": {},
						"DefaultValue": {
							"shape": "S9"
						},
						"IsImmutable": {
							"type": "boolean"
						},
						"Rules": {
							"type": "map",
							"key": {},
							"value": {
								"type": "structure",
								"members": {
									"Type": {},
									"Parameters": {
										"type": "map",
										"key": {},
										"value": {}
									}
								}
							}
						}
					}
				},
				"AttributeReference": {
					"type": "structure",
					"required": [
						"TargetFacetName",
						"TargetAttributeName"
					],
					"members": {
						"TargetFacetName": {},
						"TargetAttributeName": {}
					}
				},
				"RequiredBehavior": {}
			}
		},
		"S3d": {
			"type": "structure",
			"members": {
				"Name": {},
				"DirectoryArn": {},
				"State": {},
				"CreationDateTime": {
					"type": "timestamp"
				}
			}
		},
		"S3q": {
			"type": "list",
			"member": {}
		},
		"S3t": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"IndexedAttributes": {
						"shape": "S5"
					},
					"ObjectIdentifier": {}
				}
			}
		},
		"S4k": {
			"type": "list",
			"member": {}
		},
		"S4x": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"Key": {},
					"Value": {}
				}
			}
		}
	}
};

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"ListAppliedSchemaArns": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxResults"
		},
		"ListAttachedIndices": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxResults"
		},
		"ListDevelopmentSchemaArns": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxResults"
		},
		"ListDirectories": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxResults"
		},
		"ListFacetAttributes": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxResults"
		},
		"ListFacetNames": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxResults"
		},
		"ListIndex": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxResults"
		},
		"ListObjectAttributes": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxResults"
		},
		"ListObjectChildren": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxResults"
		},
		"ListObjectParentPaths": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxResults"
		},
		"ListObjectParents": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxResults"
		},
		"ListObjectPolicies": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxResults"
		},
		"ListPolicyAttachments": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxResults"
		},
		"ListPublishedSchemaArns": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxResults"
		},
		"ListTagsForResource": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxResults"
		},
		"LookupPolicy": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxResults"
		}
	}
};

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2010-05-15",
		"endpointPrefix": "cloudformation",
		"protocol": "query",
		"serviceFullName": "AWS CloudFormation",
		"signatureVersion": "v4",
		"uid": "cloudformation-2010-05-15",
		"xmlNamespace": "http://cloudformation.amazonaws.com/doc/2010-05-15/"
	},
	"operations": {
		"CancelUpdateStack": {
			"input": {
				"type": "structure",
				"required": [
					"StackName"
				],
				"members": {
					"StackName": {}
				}
			}
		},
		"ContinueUpdateRollback": {
			"input": {
				"type": "structure",
				"required": [
					"StackName"
				],
				"members": {
					"StackName": {},
					"RoleARN": {},
					"ResourcesToSkip": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"resultWrapper": "ContinueUpdateRollbackResult",
				"type": "structure",
				"members": {}
			}
		},
		"CreateChangeSet": {
			"input": {
				"type": "structure",
				"required": [
					"StackName",
					"ChangeSetName"
				],
				"members": {
					"StackName": {},
					"TemplateBody": {},
					"TemplateURL": {},
					"UsePreviousTemplate": {
						"type": "boolean"
					},
					"Parameters": {
						"shape": "Sd"
					},
					"Capabilities": {
						"shape": "Si"
					},
					"ResourceTypes": {
						"shape": "Sk"
					},
					"RoleARN": {},
					"NotificationARNs": {
						"shape": "Sm"
					},
					"Tags": {
						"shape": "So"
					},
					"ChangeSetName": {},
					"ClientToken": {},
					"Description": {},
					"ChangeSetType": {}
				}
			},
			"output": {
				"resultWrapper": "CreateChangeSetResult",
				"type": "structure",
				"members": {
					"Id": {},
					"StackId": {}
				}
			}
		},
		"CreateStack": {
			"input": {
				"type": "structure",
				"required": [
					"StackName"
				],
				"members": {
					"StackName": {},
					"TemplateBody": {},
					"TemplateURL": {},
					"Parameters": {
						"shape": "Sd"
					},
					"DisableRollback": {
						"type": "boolean"
					},
					"TimeoutInMinutes": {
						"type": "integer"
					},
					"NotificationARNs": {
						"shape": "Sm"
					},
					"Capabilities": {
						"shape": "Si"
					},
					"ResourceTypes": {
						"shape": "Sk"
					},
					"RoleARN": {},
					"OnFailure": {},
					"StackPolicyBody": {},
					"StackPolicyURL": {},
					"Tags": {
						"shape": "So"
					}
				}
			},
			"output": {
				"resultWrapper": "CreateStackResult",
				"type": "structure",
				"members": {
					"StackId": {}
				}
			}
		},
		"DeleteChangeSet": {
			"input": {
				"type": "structure",
				"required": [
					"ChangeSetName"
				],
				"members": {
					"ChangeSetName": {},
					"StackName": {}
				}
			},
			"output": {
				"resultWrapper": "DeleteChangeSetResult",
				"type": "structure",
				"members": {}
			}
		},
		"DeleteStack": {
			"input": {
				"type": "structure",
				"required": [
					"StackName"
				],
				"members": {
					"StackName": {},
					"RetainResources": {
						"type": "list",
						"member": {}
					},
					"RoleARN": {}
				}
			}
		},
		"DescribeAccountLimits": {
			"input": {
				"type": "structure",
				"members": {
					"NextToken": {}
				}
			},
			"output": {
				"resultWrapper": "DescribeAccountLimitsResult",
				"type": "structure",
				"members": {
					"AccountLimits": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"Name": {},
								"Value": {
									"type": "integer"
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeChangeSet": {
			"input": {
				"type": "structure",
				"required": [
					"ChangeSetName"
				],
				"members": {
					"ChangeSetName": {},
					"StackName": {},
					"NextToken": {}
				}
			},
			"output": {
				"resultWrapper": "DescribeChangeSetResult",
				"type": "structure",
				"members": {
					"ChangeSetName": {},
					"ChangeSetId": {},
					"StackId": {},
					"StackName": {},
					"Description": {},
					"Parameters": {
						"shape": "Sd"
					},
					"CreationTime": {
						"type": "timestamp"
					},
					"ExecutionStatus": {},
					"Status": {},
					"StatusReason": {},
					"NotificationARNs": {
						"shape": "Sm"
					},
					"Capabilities": {
						"shape": "Si"
					},
					"Tags": {
						"shape": "So"
					},
					"Changes": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"Type": {},
								"ResourceChange": {
									"type": "structure",
									"members": {
										"Action": {},
										"LogicalResourceId": {},
										"PhysicalResourceId": {},
										"ResourceType": {},
										"Replacement": {},
										"Scope": {
											"type": "list",
											"member": {}
										},
										"Details": {
											"type": "list",
											"member": {
												"type": "structure",
												"members": {
													"Target": {
														"type": "structure",
														"members": {
															"Attribute": {},
															"Name": {},
															"RequiresRecreation": {}
														}
													},
													"Evaluation": {},
													"ChangeSource": {},
													"CausingEntity": {}
												}
											}
										}
									}
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeStackEvents": {
			"input": {
				"type": "structure",
				"members": {
					"StackName": {},
					"NextToken": {}
				}
			},
			"output": {
				"resultWrapper": "DescribeStackEventsResult",
				"type": "structure",
				"members": {
					"StackEvents": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"StackId",
								"EventId",
								"StackName",
								"Timestamp"
							],
							"members": {
								"StackId": {},
								"EventId": {},
								"StackName": {},
								"LogicalResourceId": {},
								"PhysicalResourceId": {},
								"ResourceType": {},
								"Timestamp": {
									"type": "timestamp"
								},
								"ResourceStatus": {},
								"ResourceStatusReason": {},
								"ResourceProperties": {}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeStackResource": {
			"input": {
				"type": "structure",
				"required": [
					"StackName",
					"LogicalResourceId"
				],
				"members": {
					"StackName": {},
					"LogicalResourceId": {}
				}
			},
			"output": {
				"resultWrapper": "DescribeStackResourceResult",
				"type": "structure",
				"members": {
					"StackResourceDetail": {
						"type": "structure",
						"required": [
							"LogicalResourceId",
							"ResourceType",
							"LastUpdatedTimestamp",
							"ResourceStatus"
						],
						"members": {
							"StackName": {},
							"StackId": {},
							"LogicalResourceId": {},
							"PhysicalResourceId": {},
							"ResourceType": {},
							"LastUpdatedTimestamp": {
								"type": "timestamp"
							},
							"ResourceStatus": {},
							"ResourceStatusReason": {},
							"Description": {},
							"Metadata": {}
						}
					}
				}
			}
		},
		"DescribeStackResources": {
			"input": {
				"type": "structure",
				"members": {
					"StackName": {},
					"LogicalResourceId": {},
					"PhysicalResourceId": {}
				}
			},
			"output": {
				"resultWrapper": "DescribeStackResourcesResult",
				"type": "structure",
				"members": {
					"StackResources": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"LogicalResourceId",
								"ResourceType",
								"Timestamp",
								"ResourceStatus"
							],
							"members": {
								"StackName": {},
								"StackId": {},
								"LogicalResourceId": {},
								"PhysicalResourceId": {},
								"ResourceType": {},
								"Timestamp": {
									"type": "timestamp"
								},
								"ResourceStatus": {},
								"ResourceStatusReason": {},
								"Description": {}
							}
						}
					}
				}
			}
		},
		"DescribeStacks": {
			"input": {
				"type": "structure",
				"members": {
					"StackName": {},
					"NextToken": {}
				}
			},
			"output": {
				"resultWrapper": "DescribeStacksResult",
				"type": "structure",
				"members": {
					"Stacks": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"StackName",
								"CreationTime",
								"StackStatus"
							],
							"members": {
								"StackId": {},
								"StackName": {},
								"ChangeSetId": {},
								"Description": {},
								"Parameters": {
									"shape": "Sd"
								},
								"CreationTime": {
									"type": "timestamp"
								},
								"LastUpdatedTime": {
									"type": "timestamp"
								},
								"StackStatus": {},
								"StackStatusReason": {},
								"DisableRollback": {
									"type": "boolean"
								},
								"NotificationARNs": {
									"shape": "Sm"
								},
								"TimeoutInMinutes": {
									"type": "integer"
								},
								"Capabilities": {
									"shape": "Si"
								},
								"Outputs": {
									"type": "list",
									"member": {
										"type": "structure",
										"members": {
											"OutputKey": {},
											"OutputValue": {},
											"Description": {}
										}
									}
								},
								"RoleARN": {},
								"Tags": {
									"shape": "So"
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"EstimateTemplateCost": {
			"input": {
				"type": "structure",
				"members": {
					"TemplateBody": {},
					"TemplateURL": {},
					"Parameters": {
						"shape": "Sd"
					}
				}
			},
			"output": {
				"resultWrapper": "EstimateTemplateCostResult",
				"type": "structure",
				"members": {
					"Url": {}
				}
			}
		},
		"ExecuteChangeSet": {
			"input": {
				"type": "structure",
				"required": [
					"ChangeSetName"
				],
				"members": {
					"ChangeSetName": {},
					"StackName": {}
				}
			},
			"output": {
				"resultWrapper": "ExecuteChangeSetResult",
				"type": "structure",
				"members": {}
			}
		},
		"GetStackPolicy": {
			"input": {
				"type": "structure",
				"required": [
					"StackName"
				],
				"members": {
					"StackName": {}
				}
			},
			"output": {
				"resultWrapper": "GetStackPolicyResult",
				"type": "structure",
				"members": {
					"StackPolicyBody": {}
				}
			}
		},
		"GetTemplate": {
			"input": {
				"type": "structure",
				"members": {
					"StackName": {},
					"ChangeSetName": {},
					"TemplateStage": {}
				}
			},
			"output": {
				"resultWrapper": "GetTemplateResult",
				"type": "structure",
				"members": {
					"TemplateBody": {},
					"StagesAvailable": {
						"type": "list",
						"member": {}
					}
				}
			}
		},
		"GetTemplateSummary": {
			"input": {
				"type": "structure",
				"members": {
					"TemplateBody": {},
					"TemplateURL": {},
					"StackName": {}
				}
			},
			"output": {
				"resultWrapper": "GetTemplateSummaryResult",
				"type": "structure",
				"members": {
					"Parameters": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"ParameterKey": {},
								"DefaultValue": {},
								"ParameterType": {},
								"NoEcho": {
									"type": "boolean"
								},
								"Description": {},
								"ParameterConstraints": {
									"type": "structure",
									"members": {
										"AllowedValues": {
											"type": "list",
											"member": {}
										}
									}
								}
							}
						}
					},
					"Description": {},
					"Capabilities": {
						"shape": "Si"
					},
					"CapabilitiesReason": {},
					"ResourceTypes": {
						"shape": "Sk"
					},
					"Version": {},
					"Metadata": {},
					"DeclaredTransforms": {
						"shape": "S3k"
					}
				}
			}
		},
		"ListChangeSets": {
			"input": {
				"type": "structure",
				"required": [
					"StackName"
				],
				"members": {
					"StackName": {},
					"NextToken": {}
				}
			},
			"output": {
				"resultWrapper": "ListChangeSetsResult",
				"type": "structure",
				"members": {
					"Summaries": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"StackId": {},
								"StackName": {},
								"ChangeSetId": {},
								"ChangeSetName": {},
								"ExecutionStatus": {},
								"Status": {},
								"StatusReason": {},
								"CreationTime": {
									"type": "timestamp"
								},
								"Description": {}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"ListExports": {
			"input": {
				"type": "structure",
				"members": {
					"NextToken": {}
				}
			},
			"output": {
				"resultWrapper": "ListExportsResult",
				"type": "structure",
				"members": {
					"Exports": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"ExportingStackId": {},
								"Name": {},
								"Value": {}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"ListImports": {
			"input": {
				"type": "structure",
				"required": [
					"ExportName"
				],
				"members": {
					"ExportName": {},
					"NextToken": {}
				}
			},
			"output": {
				"resultWrapper": "ListImportsResult",
				"type": "structure",
				"members": {
					"Imports": {
						"type": "list",
						"member": {}
					},
					"NextToken": {}
				}
			}
		},
		"ListStackResources": {
			"input": {
				"type": "structure",
				"required": [
					"StackName"
				],
				"members": {
					"StackName": {},
					"NextToken": {}
				}
			},
			"output": {
				"resultWrapper": "ListStackResourcesResult",
				"type": "structure",
				"members": {
					"StackResourceSummaries": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"LogicalResourceId",
								"ResourceType",
								"LastUpdatedTimestamp",
								"ResourceStatus"
							],
							"members": {
								"LogicalResourceId": {},
								"PhysicalResourceId": {},
								"ResourceType": {},
								"LastUpdatedTimestamp": {
									"type": "timestamp"
								},
								"ResourceStatus": {},
								"ResourceStatusReason": {}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"ListStacks": {
			"input": {
				"type": "structure",
				"members": {
					"NextToken": {},
					"StackStatusFilter": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"resultWrapper": "ListStacksResult",
				"type": "structure",
				"members": {
					"StackSummaries": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"StackName",
								"CreationTime",
								"StackStatus"
							],
							"members": {
								"StackId": {},
								"StackName": {},
								"TemplateDescription": {},
								"CreationTime": {
									"type": "timestamp"
								},
								"LastUpdatedTime": {
									"type": "timestamp"
								},
								"DeletionTime": {
									"type": "timestamp"
								},
								"StackStatus": {},
								"StackStatusReason": {}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"SetStackPolicy": {
			"input": {
				"type": "structure",
				"required": [
					"StackName"
				],
				"members": {
					"StackName": {},
					"StackPolicyBody": {},
					"StackPolicyURL": {}
				}
			}
		},
		"SignalResource": {
			"input": {
				"type": "structure",
				"required": [
					"StackName",
					"LogicalResourceId",
					"UniqueId",
					"Status"
				],
				"members": {
					"StackName": {},
					"LogicalResourceId": {},
					"UniqueId": {},
					"Status": {}
				}
			}
		},
		"UpdateStack": {
			"input": {
				"type": "structure",
				"required": [
					"StackName"
				],
				"members": {
					"StackName": {},
					"TemplateBody": {},
					"TemplateURL": {},
					"UsePreviousTemplate": {
						"type": "boolean"
					},
					"StackPolicyDuringUpdateBody": {},
					"StackPolicyDuringUpdateURL": {},
					"Parameters": {
						"shape": "Sd"
					},
					"Capabilities": {
						"shape": "Si"
					},
					"ResourceTypes": {
						"shape": "Sk"
					},
					"RoleARN": {},
					"StackPolicyBody": {},
					"StackPolicyURL": {},
					"NotificationARNs": {
						"shape": "Sm"
					},
					"Tags": {
						"shape": "So"
					}
				}
			},
			"output": {
				"resultWrapper": "UpdateStackResult",
				"type": "structure",
				"members": {
					"StackId": {}
				}
			}
		},
		"ValidateTemplate": {
			"input": {
				"type": "structure",
				"members": {
					"TemplateBody": {},
					"TemplateURL": {}
				}
			},
			"output": {
				"resultWrapper": "ValidateTemplateResult",
				"type": "structure",
				"members": {
					"Parameters": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"ParameterKey": {},
								"DefaultValue": {},
								"NoEcho": {
									"type": "boolean"
								},
								"Description": {}
							}
						}
					},
					"Description": {},
					"Capabilities": {
						"shape": "Si"
					},
					"CapabilitiesReason": {},
					"DeclaredTransforms": {
						"shape": "S3k"
					}
				}
			}
		}
	},
	"shapes": {
		"Sd": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"ParameterKey": {},
					"ParameterValue": {},
					"UsePreviousValue": {
						"type": "boolean"
					}
				}
			}
		},
		"Si": {
			"type": "list",
			"member": {}
		},
		"Sk": {
			"type": "list",
			"member": {}
		},
		"Sm": {
			"type": "list",
			"member": {}
		},
		"So": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"Key": {},
					"Value": {}
				}
			}
		},
		"S3k": {
			"type": "list",
			"member": {}
		}
	}
};

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"DescribeStackEvents": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"result_key": "StackEvents"
		},
		"DescribeStackResources": {
			"result_key": "StackResources"
		},
		"DescribeStacks": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"result_key": "Stacks"
		},
		"ListExports": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"result_key": "Exports"
		},
		"ListImports": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"result_key": "Imports"
		},
		"ListStackResources": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"result_key": "StackResourceSummaries"
		},
		"ListStacks": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"result_key": "StackSummaries"
		}
	}
};

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = {
	"version": 2,
	"waiters": {
		"StackExists": {
			"delay": 5,
			"operation": "DescribeStacks",
			"maxAttempts": 20,
			"acceptors": [
				{
					"matcher": "status",
					"expected": 200,
					"state": "success"
				},
				{
					"matcher": "error",
					"expected": "ValidationError",
					"state": "retry"
				}
			]
		},
		"StackCreateComplete": {
			"delay": 30,
			"operation": "DescribeStacks",
			"maxAttempts": 120,
			"description": "Wait until stack status is CREATE_COMPLETE.",
			"acceptors": [
				{
					"argument": "Stacks[].StackStatus",
					"expected": "CREATE_COMPLETE",
					"matcher": "pathAll",
					"state": "success"
				},
				{
					"argument": "Stacks[].StackStatus",
					"expected": "CREATE_FAILED",
					"matcher": "pathAny",
					"state": "failure"
				},
				{
					"argument": "Stacks[].StackStatus",
					"expected": "DELETE_COMPLETE",
					"matcher": "pathAny",
					"state": "failure"
				},
				{
					"argument": "Stacks[].StackStatus",
					"expected": "DELETE_FAILED",
					"matcher": "pathAny",
					"state": "failure"
				},
				{
					"argument": "Stacks[].StackStatus",
					"expected": "ROLLBACK_FAILED",
					"matcher": "pathAny",
					"state": "failure"
				},
				{
					"argument": "Stacks[].StackStatus",
					"expected": "ROLLBACK_COMPLETE",
					"matcher": "pathAny",
					"state": "failure"
				},
				{
					"expected": "ValidationError",
					"matcher": "error",
					"state": "failure"
				}
			]
		},
		"StackDeleteComplete": {
			"delay": 30,
			"operation": "DescribeStacks",
			"maxAttempts": 120,
			"description": "Wait until stack status is DELETE_COMPLETE.",
			"acceptors": [
				{
					"argument": "Stacks[].StackStatus",
					"expected": "DELETE_COMPLETE",
					"matcher": "pathAll",
					"state": "success"
				},
				{
					"expected": "ValidationError",
					"matcher": "error",
					"state": "success"
				},
				{
					"argument": "Stacks[].StackStatus",
					"expected": "DELETE_FAILED",
					"matcher": "pathAny",
					"state": "failure"
				},
				{
					"argument": "Stacks[].StackStatus",
					"expected": "CREATE_FAILED",
					"matcher": "pathAny",
					"state": "failure"
				},
				{
					"argument": "Stacks[].StackStatus",
					"expected": "ROLLBACK_FAILED",
					"matcher": "pathAny",
					"state": "failure"
				},
				{
					"argument": "Stacks[].StackStatus",
					"expected": "UPDATE_ROLLBACK_FAILED",
					"matcher": "pathAny",
					"state": "failure"
				},
				{
					"argument": "Stacks[].StackStatus",
					"expected": "UPDATE_ROLLBACK_IN_PROGRESS",
					"matcher": "pathAny",
					"state": "failure"
				}
			]
		},
		"StackUpdateComplete": {
			"delay": 30,
			"maxAttempts": 120,
			"operation": "DescribeStacks",
			"description": "Wait until stack status is UPDATE_COMPLETE.",
			"acceptors": [
				{
					"argument": "Stacks[].StackStatus",
					"expected": "UPDATE_COMPLETE",
					"matcher": "pathAll",
					"state": "success"
				},
				{
					"expected": "UPDATE_FAILED",
					"matcher": "pathAny",
					"state": "failure",
					"argument": "Stacks[].StackStatus"
				},
				{
					"argument": "Stacks[].StackStatus",
					"expected": "UPDATE_ROLLBACK_FAILED",
					"matcher": "pathAny",
					"state": "failure"
				},
				{
					"expected": "UPDATE_ROLLBACK_COMPLETE",
					"matcher": "pathAny",
					"state": "failure",
					"argument": "Stacks[].StackStatus"
				},
				{
					"expected": "ValidationError",
					"matcher": "error",
					"state": "failure"
				}
			]
		},
		"ChangeSetCreateComplete": {
			"delay": 30,
			"operation": "DescribeChangeSet",
			"maxAttempts": 120,
			"description": "Wait until change set status is CREATE_COMPLETE.",
			"acceptors": [
				{
					"argument": "Status",
					"expected": "CREATE_COMPLETE",
					"matcher": "path",
					"state": "success"
				},
				{
					"argument": "Status",
					"expected": "FAILED",
					"matcher": "path",
					"state": "failure"
				},
				{
					"expected": "ValidationError",
					"matcher": "error",
					"state": "failure"
				}
			]
		}
	}
};

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2016-11-25",
		"endpointPrefix": "cloudfront",
		"globalEndpoint": "cloudfront.amazonaws.com",
		"protocol": "rest-xml",
		"serviceAbbreviation": "CloudFront",
		"serviceFullName": "Amazon CloudFront",
		"signatureVersion": "v4",
		"uid": "cloudfront-2016-11-25"
	},
	"operations": {
		"CreateCloudFrontOriginAccessIdentity": {
			"http": {
				"requestUri": "/2016-11-25/origin-access-identity/cloudfront",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"CloudFrontOriginAccessIdentityConfig"
				],
				"members": {
					"CloudFrontOriginAccessIdentityConfig": {
						"shape": "S2",
						"locationName": "CloudFrontOriginAccessIdentityConfig",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2016-11-25/"
						}
					}
				},
				"payload": "CloudFrontOriginAccessIdentityConfig"
			},
			"output": {
				"type": "structure",
				"members": {
					"CloudFrontOriginAccessIdentity": {
						"shape": "S5"
					},
					"Location": {
						"location": "header",
						"locationName": "Location"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "CloudFrontOriginAccessIdentity"
			}
		},
		"CreateDistribution": {
			"http": {
				"requestUri": "/2016-11-25/distribution",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"DistributionConfig"
				],
				"members": {
					"DistributionConfig": {
						"shape": "S7",
						"locationName": "DistributionConfig",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2016-11-25/"
						}
					}
				},
				"payload": "DistributionConfig"
			},
			"output": {
				"type": "structure",
				"members": {
					"Distribution": {
						"shape": "S1s"
					},
					"Location": {
						"location": "header",
						"locationName": "Location"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "Distribution"
			}
		},
		"CreateDistributionWithTags": {
			"http": {
				"requestUri": "/2016-11-25/distribution?WithTags",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"DistributionConfigWithTags"
				],
				"members": {
					"DistributionConfigWithTags": {
						"locationName": "DistributionConfigWithTags",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2016-11-25/"
						},
						"type": "structure",
						"required": [
							"DistributionConfig",
							"Tags"
						],
						"members": {
							"DistributionConfig": {
								"shape": "S7"
							},
							"Tags": {
								"shape": "S21"
							}
						}
					}
				},
				"payload": "DistributionConfigWithTags"
			},
			"output": {
				"type": "structure",
				"members": {
					"Distribution": {
						"shape": "S1s"
					},
					"Location": {
						"location": "header",
						"locationName": "Location"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "Distribution"
			}
		},
		"CreateInvalidation": {
			"http": {
				"requestUri": "/2016-11-25/distribution/{DistributionId}/invalidation",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"DistributionId",
					"InvalidationBatch"
				],
				"members": {
					"DistributionId": {
						"location": "uri",
						"locationName": "DistributionId"
					},
					"InvalidationBatch": {
						"shape": "S28",
						"locationName": "InvalidationBatch",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2016-11-25/"
						}
					}
				},
				"payload": "InvalidationBatch"
			},
			"output": {
				"type": "structure",
				"members": {
					"Location": {
						"location": "header",
						"locationName": "Location"
					},
					"Invalidation": {
						"shape": "S2c"
					}
				},
				"payload": "Invalidation"
			}
		},
		"CreateStreamingDistribution": {
			"http": {
				"requestUri": "/2016-11-25/streaming-distribution",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"StreamingDistributionConfig"
				],
				"members": {
					"StreamingDistributionConfig": {
						"shape": "S2e",
						"locationName": "StreamingDistributionConfig",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2016-11-25/"
						}
					}
				},
				"payload": "StreamingDistributionConfig"
			},
			"output": {
				"type": "structure",
				"members": {
					"StreamingDistribution": {
						"shape": "S2i"
					},
					"Location": {
						"location": "header",
						"locationName": "Location"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "StreamingDistribution"
			}
		},
		"CreateStreamingDistributionWithTags": {
			"http": {
				"requestUri": "/2016-11-25/streaming-distribution?WithTags",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"StreamingDistributionConfigWithTags"
				],
				"members": {
					"StreamingDistributionConfigWithTags": {
						"locationName": "StreamingDistributionConfigWithTags",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2016-11-25/"
						},
						"type": "structure",
						"required": [
							"StreamingDistributionConfig",
							"Tags"
						],
						"members": {
							"StreamingDistributionConfig": {
								"shape": "S2e"
							},
							"Tags": {
								"shape": "S21"
							}
						}
					}
				},
				"payload": "StreamingDistributionConfigWithTags"
			},
			"output": {
				"type": "structure",
				"members": {
					"StreamingDistribution": {
						"shape": "S2i"
					},
					"Location": {
						"location": "header",
						"locationName": "Location"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "StreamingDistribution"
			}
		},
		"DeleteCloudFrontOriginAccessIdentity": {
			"http": {
				"method": "DELETE",
				"requestUri": "/2016-11-25/origin-access-identity/cloudfront/{Id}",
				"responseCode": 204
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					},
					"IfMatch": {
						"location": "header",
						"locationName": "If-Match"
					}
				}
			}
		},
		"DeleteDistribution": {
			"http": {
				"method": "DELETE",
				"requestUri": "/2016-11-25/distribution/{Id}",
				"responseCode": 204
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					},
					"IfMatch": {
						"location": "header",
						"locationName": "If-Match"
					}
				}
			}
		},
		"DeleteStreamingDistribution": {
			"http": {
				"method": "DELETE",
				"requestUri": "/2016-11-25/streaming-distribution/{Id}",
				"responseCode": 204
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					},
					"IfMatch": {
						"location": "header",
						"locationName": "If-Match"
					}
				}
			}
		},
		"GetCloudFrontOriginAccessIdentity": {
			"http": {
				"method": "GET",
				"requestUri": "/2016-11-25/origin-access-identity/cloudfront/{Id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"CloudFrontOriginAccessIdentity": {
						"shape": "S5"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "CloudFrontOriginAccessIdentity"
			}
		},
		"GetCloudFrontOriginAccessIdentityConfig": {
			"http": {
				"method": "GET",
				"requestUri": "/2016-11-25/origin-access-identity/cloudfront/{Id}/config"
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"CloudFrontOriginAccessIdentityConfig": {
						"shape": "S2"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "CloudFrontOriginAccessIdentityConfig"
			}
		},
		"GetDistribution": {
			"http": {
				"method": "GET",
				"requestUri": "/2016-11-25/distribution/{Id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Distribution": {
						"shape": "S1s"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "Distribution"
			}
		},
		"GetDistributionConfig": {
			"http": {
				"method": "GET",
				"requestUri": "/2016-11-25/distribution/{Id}/config"
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DistributionConfig": {
						"shape": "S7"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "DistributionConfig"
			}
		},
		"GetInvalidation": {
			"http": {
				"method": "GET",
				"requestUri": "/2016-11-25/distribution/{DistributionId}/invalidation/{Id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"DistributionId",
					"Id"
				],
				"members": {
					"DistributionId": {
						"location": "uri",
						"locationName": "DistributionId"
					},
					"Id": {
						"location": "uri",
						"locationName": "Id"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Invalidation": {
						"shape": "S2c"
					}
				},
				"payload": "Invalidation"
			}
		},
		"GetStreamingDistribution": {
			"http": {
				"method": "GET",
				"requestUri": "/2016-11-25/streaming-distribution/{Id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"StreamingDistribution": {
						"shape": "S2i"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "StreamingDistribution"
			}
		},
		"GetStreamingDistributionConfig": {
			"http": {
				"method": "GET",
				"requestUri": "/2016-11-25/streaming-distribution/{Id}/config"
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"StreamingDistributionConfig": {
						"shape": "S2e"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "StreamingDistributionConfig"
			}
		},
		"ListCloudFrontOriginAccessIdentities": {
			"http": {
				"method": "GET",
				"requestUri": "/2016-11-25/origin-access-identity/cloudfront"
			},
			"input": {
				"type": "structure",
				"members": {
					"Marker": {
						"location": "querystring",
						"locationName": "Marker"
					},
					"MaxItems": {
						"location": "querystring",
						"locationName": "MaxItems"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"CloudFrontOriginAccessIdentityList": {
						"type": "structure",
						"required": [
							"Marker",
							"MaxItems",
							"IsTruncated",
							"Quantity"
						],
						"members": {
							"Marker": {},
							"NextMarker": {},
							"MaxItems": {
								"type": "integer"
							},
							"IsTruncated": {
								"type": "boolean"
							},
							"Quantity": {
								"type": "integer"
							},
							"Items": {
								"type": "list",
								"member": {
									"locationName": "CloudFrontOriginAccessIdentitySummary",
									"type": "structure",
									"required": [
										"Id",
										"S3CanonicalUserId",
										"Comment"
									],
									"members": {
										"Id": {},
										"S3CanonicalUserId": {},
										"Comment": {}
									}
								}
							}
						}
					}
				},
				"payload": "CloudFrontOriginAccessIdentityList"
			}
		},
		"ListDistributions": {
			"http": {
				"method": "GET",
				"requestUri": "/2016-11-25/distribution"
			},
			"input": {
				"type": "structure",
				"members": {
					"Marker": {
						"location": "querystring",
						"locationName": "Marker"
					},
					"MaxItems": {
						"location": "querystring",
						"locationName": "MaxItems"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DistributionList": {
						"shape": "S3a"
					}
				},
				"payload": "DistributionList"
			}
		},
		"ListDistributionsByWebACLId": {
			"http": {
				"method": "GET",
				"requestUri": "/2016-11-25/distributionsByWebACLId/{WebACLId}"
			},
			"input": {
				"type": "structure",
				"required": [
					"WebACLId"
				],
				"members": {
					"Marker": {
						"location": "querystring",
						"locationName": "Marker"
					},
					"MaxItems": {
						"location": "querystring",
						"locationName": "MaxItems"
					},
					"WebACLId": {
						"location": "uri",
						"locationName": "WebACLId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DistributionList": {
						"shape": "S3a"
					}
				},
				"payload": "DistributionList"
			}
		},
		"ListInvalidations": {
			"http": {
				"method": "GET",
				"requestUri": "/2016-11-25/distribution/{DistributionId}/invalidation"
			},
			"input": {
				"type": "structure",
				"required": [
					"DistributionId"
				],
				"members": {
					"DistributionId": {
						"location": "uri",
						"locationName": "DistributionId"
					},
					"Marker": {
						"location": "querystring",
						"locationName": "Marker"
					},
					"MaxItems": {
						"location": "querystring",
						"locationName": "MaxItems"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"InvalidationList": {
						"type": "structure",
						"required": [
							"Marker",
							"MaxItems",
							"IsTruncated",
							"Quantity"
						],
						"members": {
							"Marker": {},
							"NextMarker": {},
							"MaxItems": {
								"type": "integer"
							},
							"IsTruncated": {
								"type": "boolean"
							},
							"Quantity": {
								"type": "integer"
							},
							"Items": {
								"type": "list",
								"member": {
									"locationName": "InvalidationSummary",
									"type": "structure",
									"required": [
										"Id",
										"CreateTime",
										"Status"
									],
									"members": {
										"Id": {},
										"CreateTime": {
											"type": "timestamp"
										},
										"Status": {}
									}
								}
							}
						}
					}
				},
				"payload": "InvalidationList"
			}
		},
		"ListStreamingDistributions": {
			"http": {
				"method": "GET",
				"requestUri": "/2016-11-25/streaming-distribution"
			},
			"input": {
				"type": "structure",
				"members": {
					"Marker": {
						"location": "querystring",
						"locationName": "Marker"
					},
					"MaxItems": {
						"location": "querystring",
						"locationName": "MaxItems"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"StreamingDistributionList": {
						"type": "structure",
						"required": [
							"Marker",
							"MaxItems",
							"IsTruncated",
							"Quantity"
						],
						"members": {
							"Marker": {},
							"NextMarker": {},
							"MaxItems": {
								"type": "integer"
							},
							"IsTruncated": {
								"type": "boolean"
							},
							"Quantity": {
								"type": "integer"
							},
							"Items": {
								"type": "list",
								"member": {
									"locationName": "StreamingDistributionSummary",
									"type": "structure",
									"required": [
										"Id",
										"ARN",
										"Status",
										"LastModifiedTime",
										"DomainName",
										"S3Origin",
										"Aliases",
										"TrustedSigners",
										"Comment",
										"PriceClass",
										"Enabled"
									],
									"members": {
										"Id": {},
										"ARN": {},
										"Status": {},
										"LastModifiedTime": {
											"type": "timestamp"
										},
										"DomainName": {},
										"S3Origin": {
											"shape": "S2f"
										},
										"Aliases": {
											"shape": "S8"
										},
										"TrustedSigners": {
											"shape": "Sy"
										},
										"Comment": {},
										"PriceClass": {},
										"Enabled": {
											"type": "boolean"
										}
									}
								}
							}
						}
					}
				},
				"payload": "StreamingDistributionList"
			}
		},
		"ListTagsForResource": {
			"http": {
				"method": "GET",
				"requestUri": "/2016-11-25/tagging"
			},
			"input": {
				"type": "structure",
				"required": [
					"Resource"
				],
				"members": {
					"Resource": {
						"location": "querystring",
						"locationName": "Resource"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"Tags"
				],
				"members": {
					"Tags": {
						"shape": "S21"
					}
				},
				"payload": "Tags"
			}
		},
		"TagResource": {
			"http": {
				"requestUri": "/2016-11-25/tagging?Operation=Tag",
				"responseCode": 204
			},
			"input": {
				"type": "structure",
				"required": [
					"Resource",
					"Tags"
				],
				"members": {
					"Resource": {
						"location": "querystring",
						"locationName": "Resource"
					},
					"Tags": {
						"shape": "S21",
						"locationName": "Tags",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2016-11-25/"
						}
					}
				},
				"payload": "Tags"
			}
		},
		"UntagResource": {
			"http": {
				"requestUri": "/2016-11-25/tagging?Operation=Untag",
				"responseCode": 204
			},
			"input": {
				"type": "structure",
				"required": [
					"Resource",
					"TagKeys"
				],
				"members": {
					"Resource": {
						"location": "querystring",
						"locationName": "Resource"
					},
					"TagKeys": {
						"locationName": "TagKeys",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2016-11-25/"
						},
						"type": "structure",
						"members": {
							"Items": {
								"type": "list",
								"member": {
									"locationName": "Key"
								}
							}
						}
					}
				},
				"payload": "TagKeys"
			}
		},
		"UpdateCloudFrontOriginAccessIdentity": {
			"http": {
				"method": "PUT",
				"requestUri": "/2016-11-25/origin-access-identity/cloudfront/{Id}/config"
			},
			"input": {
				"type": "structure",
				"required": [
					"CloudFrontOriginAccessIdentityConfig",
					"Id"
				],
				"members": {
					"CloudFrontOriginAccessIdentityConfig": {
						"shape": "S2",
						"locationName": "CloudFrontOriginAccessIdentityConfig",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2016-11-25/"
						}
					},
					"Id": {
						"location": "uri",
						"locationName": "Id"
					},
					"IfMatch": {
						"location": "header",
						"locationName": "If-Match"
					}
				},
				"payload": "CloudFrontOriginAccessIdentityConfig"
			},
			"output": {
				"type": "structure",
				"members": {
					"CloudFrontOriginAccessIdentity": {
						"shape": "S5"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "CloudFrontOriginAccessIdentity"
			}
		},
		"UpdateDistribution": {
			"http": {
				"method": "PUT",
				"requestUri": "/2016-11-25/distribution/{Id}/config"
			},
			"input": {
				"type": "structure",
				"required": [
					"DistributionConfig",
					"Id"
				],
				"members": {
					"DistributionConfig": {
						"shape": "S7",
						"locationName": "DistributionConfig",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2016-11-25/"
						}
					},
					"Id": {
						"location": "uri",
						"locationName": "Id"
					},
					"IfMatch": {
						"location": "header",
						"locationName": "If-Match"
					}
				},
				"payload": "DistributionConfig"
			},
			"output": {
				"type": "structure",
				"members": {
					"Distribution": {
						"shape": "S1s"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "Distribution"
			}
		},
		"UpdateStreamingDistribution": {
			"http": {
				"method": "PUT",
				"requestUri": "/2016-11-25/streaming-distribution/{Id}/config"
			},
			"input": {
				"type": "structure",
				"required": [
					"StreamingDistributionConfig",
					"Id"
				],
				"members": {
					"StreamingDistributionConfig": {
						"shape": "S2e",
						"locationName": "StreamingDistributionConfig",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2016-11-25/"
						}
					},
					"Id": {
						"location": "uri",
						"locationName": "Id"
					},
					"IfMatch": {
						"location": "header",
						"locationName": "If-Match"
					}
				},
				"payload": "StreamingDistributionConfig"
			},
			"output": {
				"type": "structure",
				"members": {
					"StreamingDistribution": {
						"shape": "S2i"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "StreamingDistribution"
			}
		}
	},
	"shapes": {
		"S2": {
			"type": "structure",
			"required": [
				"CallerReference",
				"Comment"
			],
			"members": {
				"CallerReference": {},
				"Comment": {}
			}
		},
		"S5": {
			"type": "structure",
			"required": [
				"Id",
				"S3CanonicalUserId"
			],
			"members": {
				"Id": {},
				"S3CanonicalUserId": {},
				"CloudFrontOriginAccessIdentityConfig": {
					"shape": "S2"
				}
			}
		},
		"S7": {
			"type": "structure",
			"required": [
				"CallerReference",
				"Origins",
				"DefaultCacheBehavior",
				"Comment",
				"Enabled"
			],
			"members": {
				"CallerReference": {},
				"Aliases": {
					"shape": "S8"
				},
				"DefaultRootObject": {},
				"Origins": {
					"shape": "Sb"
				},
				"DefaultCacheBehavior": {
					"shape": "Sn"
				},
				"CacheBehaviors": {
					"shape": "S1a"
				},
				"CustomErrorResponses": {
					"shape": "S1d"
				},
				"Comment": {},
				"Logging": {
					"type": "structure",
					"required": [
						"Enabled",
						"IncludeCookies",
						"Bucket",
						"Prefix"
					],
					"members": {
						"Enabled": {
							"type": "boolean"
						},
						"IncludeCookies": {
							"type": "boolean"
						},
						"Bucket": {},
						"Prefix": {}
					}
				},
				"PriceClass": {},
				"Enabled": {
					"type": "boolean"
				},
				"ViewerCertificate": {
					"shape": "S1i"
				},
				"Restrictions": {
					"shape": "S1m"
				},
				"WebACLId": {},
				"HttpVersion": {},
				"IsIPV6Enabled": {
					"type": "boolean"
				}
			}
		},
		"S8": {
			"type": "structure",
			"required": [
				"Quantity"
			],
			"members": {
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"type": "list",
					"member": {
						"locationName": "CNAME"
					}
				}
			}
		},
		"Sb": {
			"type": "structure",
			"required": [
				"Quantity"
			],
			"members": {
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"type": "list",
					"member": {
						"locationName": "Origin",
						"type": "structure",
						"required": [
							"Id",
							"DomainName"
						],
						"members": {
							"Id": {},
							"DomainName": {},
							"OriginPath": {},
							"CustomHeaders": {
								"type": "structure",
								"required": [
									"Quantity"
								],
								"members": {
									"Quantity": {
										"type": "integer"
									},
									"Items": {
										"type": "list",
										"member": {
											"locationName": "OriginCustomHeader",
											"type": "structure",
											"required": [
												"HeaderName",
												"HeaderValue"
											],
											"members": {
												"HeaderName": {},
												"HeaderValue": {}
											}
										}
									}
								}
							},
							"S3OriginConfig": {
								"type": "structure",
								"required": [
									"OriginAccessIdentity"
								],
								"members": {
									"OriginAccessIdentity": {}
								}
							},
							"CustomOriginConfig": {
								"type": "structure",
								"required": [
									"HTTPPort",
									"HTTPSPort",
									"OriginProtocolPolicy"
								],
								"members": {
									"HTTPPort": {
										"type": "integer"
									},
									"HTTPSPort": {
										"type": "integer"
									},
									"OriginProtocolPolicy": {},
									"OriginSslProtocols": {
										"type": "structure",
										"required": [
											"Quantity",
											"Items"
										],
										"members": {
											"Quantity": {
												"type": "integer"
											},
											"Items": {
												"type": "list",
												"member": {
													"locationName": "SslProtocol"
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		"Sn": {
			"type": "structure",
			"required": [
				"TargetOriginId",
				"ForwardedValues",
				"TrustedSigners",
				"ViewerProtocolPolicy",
				"MinTTL"
			],
			"members": {
				"TargetOriginId": {},
				"ForwardedValues": {
					"shape": "So"
				},
				"TrustedSigners": {
					"shape": "Sy"
				},
				"ViewerProtocolPolicy": {},
				"MinTTL": {
					"type": "long"
				},
				"AllowedMethods": {
					"shape": "S12"
				},
				"SmoothStreaming": {
					"type": "boolean"
				},
				"DefaultTTL": {
					"type": "long"
				},
				"MaxTTL": {
					"type": "long"
				},
				"Compress": {
					"type": "boolean"
				},
				"LambdaFunctionAssociations": {
					"shape": "S16"
				}
			}
		},
		"So": {
			"type": "structure",
			"required": [
				"QueryString",
				"Cookies"
			],
			"members": {
				"QueryString": {
					"type": "boolean"
				},
				"Cookies": {
					"type": "structure",
					"required": [
						"Forward"
					],
					"members": {
						"Forward": {},
						"WhitelistedNames": {
							"type": "structure",
							"required": [
								"Quantity"
							],
							"members": {
								"Quantity": {
									"type": "integer"
								},
								"Items": {
									"type": "list",
									"member": {
										"locationName": "Name"
									}
								}
							}
						}
					}
				},
				"Headers": {
					"type": "structure",
					"required": [
						"Quantity"
					],
					"members": {
						"Quantity": {
							"type": "integer"
						},
						"Items": {
							"type": "list",
							"member": {
								"locationName": "Name"
							}
						}
					}
				},
				"QueryStringCacheKeys": {
					"type": "structure",
					"required": [
						"Quantity"
					],
					"members": {
						"Quantity": {
							"type": "integer"
						},
						"Items": {
							"type": "list",
							"member": {
								"locationName": "Name"
							}
						}
					}
				}
			}
		},
		"Sy": {
			"type": "structure",
			"required": [
				"Enabled",
				"Quantity"
			],
			"members": {
				"Enabled": {
					"type": "boolean"
				},
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"type": "list",
					"member": {
						"locationName": "AwsAccountNumber"
					}
				}
			}
		},
		"S12": {
			"type": "structure",
			"required": [
				"Quantity",
				"Items"
			],
			"members": {
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"shape": "S13"
				},
				"CachedMethods": {
					"type": "structure",
					"required": [
						"Quantity",
						"Items"
					],
					"members": {
						"Quantity": {
							"type": "integer"
						},
						"Items": {
							"shape": "S13"
						}
					}
				}
			}
		},
		"S13": {
			"type": "list",
			"member": {
				"locationName": "Method"
			}
		},
		"S16": {
			"type": "structure",
			"required": [
				"Quantity"
			],
			"members": {
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"type": "list",
					"member": {
						"locationName": "LambdaFunctionAssociation",
						"type": "structure",
						"members": {
							"LambdaFunctionARN": {},
							"EventType": {}
						}
					}
				}
			}
		},
		"S1a": {
			"type": "structure",
			"required": [
				"Quantity"
			],
			"members": {
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"type": "list",
					"member": {
						"locationName": "CacheBehavior",
						"type": "structure",
						"required": [
							"PathPattern",
							"TargetOriginId",
							"ForwardedValues",
							"TrustedSigners",
							"ViewerProtocolPolicy",
							"MinTTL"
						],
						"members": {
							"PathPattern": {},
							"TargetOriginId": {},
							"ForwardedValues": {
								"shape": "So"
							},
							"TrustedSigners": {
								"shape": "Sy"
							},
							"ViewerProtocolPolicy": {},
							"MinTTL": {
								"type": "long"
							},
							"AllowedMethods": {
								"shape": "S12"
							},
							"SmoothStreaming": {
								"type": "boolean"
							},
							"DefaultTTL": {
								"type": "long"
							},
							"MaxTTL": {
								"type": "long"
							},
							"Compress": {
								"type": "boolean"
							},
							"LambdaFunctionAssociations": {
								"shape": "S16"
							}
						}
					}
				}
			}
		},
		"S1d": {
			"type": "structure",
			"required": [
				"Quantity"
			],
			"members": {
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"type": "list",
					"member": {
						"locationName": "CustomErrorResponse",
						"type": "structure",
						"required": [
							"ErrorCode"
						],
						"members": {
							"ErrorCode": {
								"type": "integer"
							},
							"ResponsePagePath": {},
							"ResponseCode": {},
							"ErrorCachingMinTTL": {
								"type": "long"
							}
						}
					}
				}
			}
		},
		"S1i": {
			"type": "structure",
			"members": {
				"CloudFrontDefaultCertificate": {
					"type": "boolean"
				},
				"IAMCertificateId": {},
				"ACMCertificateArn": {},
				"SSLSupportMethod": {},
				"MinimumProtocolVersion": {},
				"Certificate": {
					"deprecated": true
				},
				"CertificateSource": {
					"deprecated": true
				}
			}
		},
		"S1m": {
			"type": "structure",
			"required": [
				"GeoRestriction"
			],
			"members": {
				"GeoRestriction": {
					"type": "structure",
					"required": [
						"RestrictionType",
						"Quantity"
					],
					"members": {
						"RestrictionType": {},
						"Quantity": {
							"type": "integer"
						},
						"Items": {
							"type": "list",
							"member": {
								"locationName": "Location"
							}
						}
					}
				}
			}
		},
		"S1s": {
			"type": "structure",
			"required": [
				"Id",
				"ARN",
				"Status",
				"LastModifiedTime",
				"InProgressInvalidationBatches",
				"DomainName",
				"ActiveTrustedSigners",
				"DistributionConfig"
			],
			"members": {
				"Id": {},
				"ARN": {},
				"Status": {},
				"LastModifiedTime": {
					"type": "timestamp"
				},
				"InProgressInvalidationBatches": {
					"type": "integer"
				},
				"DomainName": {},
				"ActiveTrustedSigners": {
					"shape": "S1u"
				},
				"DistributionConfig": {
					"shape": "S7"
				}
			}
		},
		"S1u": {
			"type": "structure",
			"required": [
				"Enabled",
				"Quantity"
			],
			"members": {
				"Enabled": {
					"type": "boolean"
				},
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"type": "list",
					"member": {
						"locationName": "Signer",
						"type": "structure",
						"members": {
							"AwsAccountNumber": {},
							"KeyPairIds": {
								"type": "structure",
								"required": [
									"Quantity"
								],
								"members": {
									"Quantity": {
										"type": "integer"
									},
									"Items": {
										"type": "list",
										"member": {
											"locationName": "KeyPairId"
										}
									}
								}
							}
						}
					}
				}
			}
		},
		"S21": {
			"type": "structure",
			"members": {
				"Items": {
					"type": "list",
					"member": {
						"locationName": "Tag",
						"type": "structure",
						"required": [
							"Key"
						],
						"members": {
							"Key": {},
							"Value": {}
						}
					}
				}
			}
		},
		"S28": {
			"type": "structure",
			"required": [
				"Paths",
				"CallerReference"
			],
			"members": {
				"Paths": {
					"type": "structure",
					"required": [
						"Quantity"
					],
					"members": {
						"Quantity": {
							"type": "integer"
						},
						"Items": {
							"type": "list",
							"member": {
								"locationName": "Path"
							}
						}
					}
				},
				"CallerReference": {}
			}
		},
		"S2c": {
			"type": "structure",
			"required": [
				"Id",
				"Status",
				"CreateTime",
				"InvalidationBatch"
			],
			"members": {
				"Id": {},
				"Status": {},
				"CreateTime": {
					"type": "timestamp"
				},
				"InvalidationBatch": {
					"shape": "S28"
				}
			}
		},
		"S2e": {
			"type": "structure",
			"required": [
				"CallerReference",
				"S3Origin",
				"Comment",
				"TrustedSigners",
				"Enabled"
			],
			"members": {
				"CallerReference": {},
				"S3Origin": {
					"shape": "S2f"
				},
				"Aliases": {
					"shape": "S8"
				},
				"Comment": {},
				"Logging": {
					"type": "structure",
					"required": [
						"Enabled",
						"Bucket",
						"Prefix"
					],
					"members": {
						"Enabled": {
							"type": "boolean"
						},
						"Bucket": {},
						"Prefix": {}
					}
				},
				"TrustedSigners": {
					"shape": "Sy"
				},
				"PriceClass": {},
				"Enabled": {
					"type": "boolean"
				}
			}
		},
		"S2f": {
			"type": "structure",
			"required": [
				"DomainName",
				"OriginAccessIdentity"
			],
			"members": {
				"DomainName": {},
				"OriginAccessIdentity": {}
			}
		},
		"S2i": {
			"type": "structure",
			"required": [
				"Id",
				"ARN",
				"Status",
				"DomainName",
				"ActiveTrustedSigners",
				"StreamingDistributionConfig"
			],
			"members": {
				"Id": {},
				"ARN": {},
				"Status": {},
				"LastModifiedTime": {
					"type": "timestamp"
				},
				"DomainName": {},
				"ActiveTrustedSigners": {
					"shape": "S1u"
				},
				"StreamingDistributionConfig": {
					"shape": "S2e"
				}
			}
		},
		"S3a": {
			"type": "structure",
			"required": [
				"Marker",
				"MaxItems",
				"IsTruncated",
				"Quantity"
			],
			"members": {
				"Marker": {},
				"NextMarker": {},
				"MaxItems": {
					"type": "integer"
				},
				"IsTruncated": {
					"type": "boolean"
				},
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"type": "list",
					"member": {
						"locationName": "DistributionSummary",
						"type": "structure",
						"required": [
							"Id",
							"ARN",
							"Status",
							"LastModifiedTime",
							"DomainName",
							"Aliases",
							"Origins",
							"DefaultCacheBehavior",
							"CacheBehaviors",
							"CustomErrorResponses",
							"Comment",
							"PriceClass",
							"Enabled",
							"ViewerCertificate",
							"Restrictions",
							"WebACLId",
							"HttpVersion",
							"IsIPV6Enabled"
						],
						"members": {
							"Id": {},
							"ARN": {},
							"Status": {},
							"LastModifiedTime": {
								"type": "timestamp"
							},
							"DomainName": {},
							"Aliases": {
								"shape": "S8"
							},
							"Origins": {
								"shape": "Sb"
							},
							"DefaultCacheBehavior": {
								"shape": "Sn"
							},
							"CacheBehaviors": {
								"shape": "S1a"
							},
							"CustomErrorResponses": {
								"shape": "S1d"
							},
							"Comment": {},
							"PriceClass": {},
							"Enabled": {
								"type": "boolean"
							},
							"ViewerCertificate": {
								"shape": "S1i"
							},
							"Restrictions": {
								"shape": "S1m"
							},
							"WebACLId": {},
							"HttpVersion": {},
							"IsIPV6Enabled": {
								"type": "boolean"
							}
						}
					}
				}
			}
		}
	}
};

/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"ListCloudFrontOriginAccessIdentities": {
			"input_token": "Marker",
			"output_token": "CloudFrontOriginAccessIdentityList.NextMarker",
			"limit_key": "MaxItems",
			"more_results": "CloudFrontOriginAccessIdentityList.IsTruncated",
			"result_key": "CloudFrontOriginAccessIdentityList.Items"
		},
		"ListDistributions": {
			"input_token": "Marker",
			"output_token": "DistributionList.NextMarker",
			"limit_key": "MaxItems",
			"more_results": "DistributionList.IsTruncated",
			"result_key": "DistributionList.Items"
		},
		"ListInvalidations": {
			"input_token": "Marker",
			"output_token": "InvalidationList.NextMarker",
			"limit_key": "MaxItems",
			"more_results": "InvalidationList.IsTruncated",
			"result_key": "InvalidationList.Items"
		},
		"ListStreamingDistributions": {
			"input_token": "Marker",
			"output_token": "StreamingDistributionList.NextMarker",
			"limit_key": "MaxItems",
			"more_results": "StreamingDistributionList.IsTruncated",
			"result_key": "StreamingDistributionList.Items"
		}
	}
};

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = {
	"version": 2,
	"waiters": {
		"DistributionDeployed": {
			"delay": 60,
			"operation": "GetDistribution",
			"maxAttempts": 25,
			"description": "Wait until a distribution is deployed.",
			"acceptors": [
				{
					"expected": "Deployed",
					"matcher": "path",
					"state": "success",
					"argument": "Distribution.Status"
				}
			]
		},
		"InvalidationCompleted": {
			"delay": 20,
			"operation": "GetInvalidation",
			"maxAttempts": 30,
			"description": "Wait until an invalidation has completed.",
			"acceptors": [
				{
					"expected": "Completed",
					"matcher": "path",
					"state": "success",
					"argument": "Invalidation.Status"
				}
			]
		},
		"StreamingDistributionDeployed": {
			"delay": 60,
			"operation": "GetStreamingDistribution",
			"maxAttempts": 25,
			"description": "Wait until a streaming distribution is deployed.",
			"acceptors": [
				{
					"expected": "Deployed",
					"matcher": "path",
					"state": "success",
					"argument": "StreamingDistribution.Status"
				}
			]
		}
	}
};

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2017-03-25",
		"endpointPrefix": "cloudfront",
		"globalEndpoint": "cloudfront.amazonaws.com",
		"protocol": "rest-xml",
		"serviceAbbreviation": "CloudFront",
		"serviceFullName": "Amazon CloudFront",
		"signatureVersion": "v4",
		"uid": "cloudfront-2017-03-25"
	},
	"operations": {
		"CreateCloudFrontOriginAccessIdentity": {
			"http": {
				"requestUri": "/2017-03-25/origin-access-identity/cloudfront",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"CloudFrontOriginAccessIdentityConfig"
				],
				"members": {
					"CloudFrontOriginAccessIdentityConfig": {
						"shape": "S2",
						"locationName": "CloudFrontOriginAccessIdentityConfig",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2017-03-25/"
						}
					}
				},
				"payload": "CloudFrontOriginAccessIdentityConfig"
			},
			"output": {
				"type": "structure",
				"members": {
					"CloudFrontOriginAccessIdentity": {
						"shape": "S5"
					},
					"Location": {
						"location": "header",
						"locationName": "Location"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "CloudFrontOriginAccessIdentity"
			}
		},
		"CreateDistribution": {
			"http": {
				"requestUri": "/2017-03-25/distribution",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"DistributionConfig"
				],
				"members": {
					"DistributionConfig": {
						"shape": "S7",
						"locationName": "DistributionConfig",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2017-03-25/"
						}
					}
				},
				"payload": "DistributionConfig"
			},
			"output": {
				"type": "structure",
				"members": {
					"Distribution": {
						"shape": "S1s"
					},
					"Location": {
						"location": "header",
						"locationName": "Location"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "Distribution"
			}
		},
		"CreateDistributionWithTags": {
			"http": {
				"requestUri": "/2017-03-25/distribution?WithTags",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"DistributionConfigWithTags"
				],
				"members": {
					"DistributionConfigWithTags": {
						"locationName": "DistributionConfigWithTags",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2017-03-25/"
						},
						"type": "structure",
						"required": [
							"DistributionConfig",
							"Tags"
						],
						"members": {
							"DistributionConfig": {
								"shape": "S7"
							},
							"Tags": {
								"shape": "S21"
							}
						}
					}
				},
				"payload": "DistributionConfigWithTags"
			},
			"output": {
				"type": "structure",
				"members": {
					"Distribution": {
						"shape": "S1s"
					},
					"Location": {
						"location": "header",
						"locationName": "Location"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "Distribution"
			}
		},
		"CreateInvalidation": {
			"http": {
				"requestUri": "/2017-03-25/distribution/{DistributionId}/invalidation",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"DistributionId",
					"InvalidationBatch"
				],
				"members": {
					"DistributionId": {
						"location": "uri",
						"locationName": "DistributionId"
					},
					"InvalidationBatch": {
						"shape": "S28",
						"locationName": "InvalidationBatch",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2017-03-25/"
						}
					}
				},
				"payload": "InvalidationBatch"
			},
			"output": {
				"type": "structure",
				"members": {
					"Location": {
						"location": "header",
						"locationName": "Location"
					},
					"Invalidation": {
						"shape": "S2c"
					}
				},
				"payload": "Invalidation"
			}
		},
		"CreateStreamingDistribution": {
			"http": {
				"requestUri": "/2017-03-25/streaming-distribution",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"StreamingDistributionConfig"
				],
				"members": {
					"StreamingDistributionConfig": {
						"shape": "S2e",
						"locationName": "StreamingDistributionConfig",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2017-03-25/"
						}
					}
				},
				"payload": "StreamingDistributionConfig"
			},
			"output": {
				"type": "structure",
				"members": {
					"StreamingDistribution": {
						"shape": "S2i"
					},
					"Location": {
						"location": "header",
						"locationName": "Location"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "StreamingDistribution"
			}
		},
		"CreateStreamingDistributionWithTags": {
			"http": {
				"requestUri": "/2017-03-25/streaming-distribution?WithTags",
				"responseCode": 201
			},
			"input": {
				"type": "structure",
				"required": [
					"StreamingDistributionConfigWithTags"
				],
				"members": {
					"StreamingDistributionConfigWithTags": {
						"locationName": "StreamingDistributionConfigWithTags",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2017-03-25/"
						},
						"type": "structure",
						"required": [
							"StreamingDistributionConfig",
							"Tags"
						],
						"members": {
							"StreamingDistributionConfig": {
								"shape": "S2e"
							},
							"Tags": {
								"shape": "S21"
							}
						}
					}
				},
				"payload": "StreamingDistributionConfigWithTags"
			},
			"output": {
				"type": "structure",
				"members": {
					"StreamingDistribution": {
						"shape": "S2i"
					},
					"Location": {
						"location": "header",
						"locationName": "Location"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "StreamingDistribution"
			}
		},
		"DeleteCloudFrontOriginAccessIdentity": {
			"http": {
				"method": "DELETE",
				"requestUri": "/2017-03-25/origin-access-identity/cloudfront/{Id}",
				"responseCode": 204
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					},
					"IfMatch": {
						"location": "header",
						"locationName": "If-Match"
					}
				}
			}
		},
		"DeleteDistribution": {
			"http": {
				"method": "DELETE",
				"requestUri": "/2017-03-25/distribution/{Id}",
				"responseCode": 204
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					},
					"IfMatch": {
						"location": "header",
						"locationName": "If-Match"
					}
				}
			}
		},
		"DeleteStreamingDistribution": {
			"http": {
				"method": "DELETE",
				"requestUri": "/2017-03-25/streaming-distribution/{Id}",
				"responseCode": 204
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					},
					"IfMatch": {
						"location": "header",
						"locationName": "If-Match"
					}
				}
			}
		},
		"GetCloudFrontOriginAccessIdentity": {
			"http": {
				"method": "GET",
				"requestUri": "/2017-03-25/origin-access-identity/cloudfront/{Id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"CloudFrontOriginAccessIdentity": {
						"shape": "S5"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "CloudFrontOriginAccessIdentity"
			}
		},
		"GetCloudFrontOriginAccessIdentityConfig": {
			"http": {
				"method": "GET",
				"requestUri": "/2017-03-25/origin-access-identity/cloudfront/{Id}/config"
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"CloudFrontOriginAccessIdentityConfig": {
						"shape": "S2"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "CloudFrontOriginAccessIdentityConfig"
			}
		},
		"GetDistribution": {
			"http": {
				"method": "GET",
				"requestUri": "/2017-03-25/distribution/{Id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Distribution": {
						"shape": "S1s"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "Distribution"
			}
		},
		"GetDistributionConfig": {
			"http": {
				"method": "GET",
				"requestUri": "/2017-03-25/distribution/{Id}/config"
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DistributionConfig": {
						"shape": "S7"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "DistributionConfig"
			}
		},
		"GetInvalidation": {
			"http": {
				"method": "GET",
				"requestUri": "/2017-03-25/distribution/{DistributionId}/invalidation/{Id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"DistributionId",
					"Id"
				],
				"members": {
					"DistributionId": {
						"location": "uri",
						"locationName": "DistributionId"
					},
					"Id": {
						"location": "uri",
						"locationName": "Id"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Invalidation": {
						"shape": "S2c"
					}
				},
				"payload": "Invalidation"
			}
		},
		"GetStreamingDistribution": {
			"http": {
				"method": "GET",
				"requestUri": "/2017-03-25/streaming-distribution/{Id}"
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"StreamingDistribution": {
						"shape": "S2i"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "StreamingDistribution"
			}
		},
		"GetStreamingDistributionConfig": {
			"http": {
				"method": "GET",
				"requestUri": "/2017-03-25/streaming-distribution/{Id}/config"
			},
			"input": {
				"type": "structure",
				"required": [
					"Id"
				],
				"members": {
					"Id": {
						"location": "uri",
						"locationName": "Id"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"StreamingDistributionConfig": {
						"shape": "S2e"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "StreamingDistributionConfig"
			}
		},
		"ListCloudFrontOriginAccessIdentities": {
			"http": {
				"method": "GET",
				"requestUri": "/2017-03-25/origin-access-identity/cloudfront"
			},
			"input": {
				"type": "structure",
				"members": {
					"Marker": {
						"location": "querystring",
						"locationName": "Marker"
					},
					"MaxItems": {
						"location": "querystring",
						"locationName": "MaxItems"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"CloudFrontOriginAccessIdentityList": {
						"type": "structure",
						"required": [
							"Marker",
							"MaxItems",
							"IsTruncated",
							"Quantity"
						],
						"members": {
							"Marker": {},
							"NextMarker": {},
							"MaxItems": {
								"type": "integer"
							},
							"IsTruncated": {
								"type": "boolean"
							},
							"Quantity": {
								"type": "integer"
							},
							"Items": {
								"type": "list",
								"member": {
									"locationName": "CloudFrontOriginAccessIdentitySummary",
									"type": "structure",
									"required": [
										"Id",
										"S3CanonicalUserId",
										"Comment"
									],
									"members": {
										"Id": {},
										"S3CanonicalUserId": {},
										"Comment": {}
									}
								}
							}
						}
					}
				},
				"payload": "CloudFrontOriginAccessIdentityList"
			}
		},
		"ListDistributions": {
			"http": {
				"method": "GET",
				"requestUri": "/2017-03-25/distribution"
			},
			"input": {
				"type": "structure",
				"members": {
					"Marker": {
						"location": "querystring",
						"locationName": "Marker"
					},
					"MaxItems": {
						"location": "querystring",
						"locationName": "MaxItems"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DistributionList": {
						"shape": "S3a"
					}
				},
				"payload": "DistributionList"
			}
		},
		"ListDistributionsByWebACLId": {
			"http": {
				"method": "GET",
				"requestUri": "/2017-03-25/distributionsByWebACLId/{WebACLId}"
			},
			"input": {
				"type": "structure",
				"required": [
					"WebACLId"
				],
				"members": {
					"Marker": {
						"location": "querystring",
						"locationName": "Marker"
					},
					"MaxItems": {
						"location": "querystring",
						"locationName": "MaxItems"
					},
					"WebACLId": {
						"location": "uri",
						"locationName": "WebACLId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DistributionList": {
						"shape": "S3a"
					}
				},
				"payload": "DistributionList"
			}
		},
		"ListInvalidations": {
			"http": {
				"method": "GET",
				"requestUri": "/2017-03-25/distribution/{DistributionId}/invalidation"
			},
			"input": {
				"type": "structure",
				"required": [
					"DistributionId"
				],
				"members": {
					"DistributionId": {
						"location": "uri",
						"locationName": "DistributionId"
					},
					"Marker": {
						"location": "querystring",
						"locationName": "Marker"
					},
					"MaxItems": {
						"location": "querystring",
						"locationName": "MaxItems"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"InvalidationList": {
						"type": "structure",
						"required": [
							"Marker",
							"MaxItems",
							"IsTruncated",
							"Quantity"
						],
						"members": {
							"Marker": {},
							"NextMarker": {},
							"MaxItems": {
								"type": "integer"
							},
							"IsTruncated": {
								"type": "boolean"
							},
							"Quantity": {
								"type": "integer"
							},
							"Items": {
								"type": "list",
								"member": {
									"locationName": "InvalidationSummary",
									"type": "structure",
									"required": [
										"Id",
										"CreateTime",
										"Status"
									],
									"members": {
										"Id": {},
										"CreateTime": {
											"type": "timestamp"
										},
										"Status": {}
									}
								}
							}
						}
					}
				},
				"payload": "InvalidationList"
			}
		},
		"ListStreamingDistributions": {
			"http": {
				"method": "GET",
				"requestUri": "/2017-03-25/streaming-distribution"
			},
			"input": {
				"type": "structure",
				"members": {
					"Marker": {
						"location": "querystring",
						"locationName": "Marker"
					},
					"MaxItems": {
						"location": "querystring",
						"locationName": "MaxItems"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"StreamingDistributionList": {
						"type": "structure",
						"required": [
							"Marker",
							"MaxItems",
							"IsTruncated",
							"Quantity"
						],
						"members": {
							"Marker": {},
							"NextMarker": {},
							"MaxItems": {
								"type": "integer"
							},
							"IsTruncated": {
								"type": "boolean"
							},
							"Quantity": {
								"type": "integer"
							},
							"Items": {
								"type": "list",
								"member": {
									"locationName": "StreamingDistributionSummary",
									"type": "structure",
									"required": [
										"Id",
										"ARN",
										"Status",
										"LastModifiedTime",
										"DomainName",
										"S3Origin",
										"Aliases",
										"TrustedSigners",
										"Comment",
										"PriceClass",
										"Enabled"
									],
									"members": {
										"Id": {},
										"ARN": {},
										"Status": {},
										"LastModifiedTime": {
											"type": "timestamp"
										},
										"DomainName": {},
										"S3Origin": {
											"shape": "S2f"
										},
										"Aliases": {
											"shape": "S8"
										},
										"TrustedSigners": {
											"shape": "Sy"
										},
										"Comment": {},
										"PriceClass": {},
										"Enabled": {
											"type": "boolean"
										}
									}
								}
							}
						}
					}
				},
				"payload": "StreamingDistributionList"
			}
		},
		"ListTagsForResource": {
			"http": {
				"method": "GET",
				"requestUri": "/2017-03-25/tagging"
			},
			"input": {
				"type": "structure",
				"required": [
					"Resource"
				],
				"members": {
					"Resource": {
						"location": "querystring",
						"locationName": "Resource"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"Tags"
				],
				"members": {
					"Tags": {
						"shape": "S21"
					}
				},
				"payload": "Tags"
			}
		},
		"TagResource": {
			"http": {
				"requestUri": "/2017-03-25/tagging?Operation=Tag",
				"responseCode": 204
			},
			"input": {
				"type": "structure",
				"required": [
					"Resource",
					"Tags"
				],
				"members": {
					"Resource": {
						"location": "querystring",
						"locationName": "Resource"
					},
					"Tags": {
						"shape": "S21",
						"locationName": "Tags",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2017-03-25/"
						}
					}
				},
				"payload": "Tags"
			}
		},
		"UntagResource": {
			"http": {
				"requestUri": "/2017-03-25/tagging?Operation=Untag",
				"responseCode": 204
			},
			"input": {
				"type": "structure",
				"required": [
					"Resource",
					"TagKeys"
				],
				"members": {
					"Resource": {
						"location": "querystring",
						"locationName": "Resource"
					},
					"TagKeys": {
						"locationName": "TagKeys",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2017-03-25/"
						},
						"type": "structure",
						"members": {
							"Items": {
								"type": "list",
								"member": {
									"locationName": "Key"
								}
							}
						}
					}
				},
				"payload": "TagKeys"
			}
		},
		"UpdateCloudFrontOriginAccessIdentity": {
			"http": {
				"method": "PUT",
				"requestUri": "/2017-03-25/origin-access-identity/cloudfront/{Id}/config"
			},
			"input": {
				"type": "structure",
				"required": [
					"CloudFrontOriginAccessIdentityConfig",
					"Id"
				],
				"members": {
					"CloudFrontOriginAccessIdentityConfig": {
						"shape": "S2",
						"locationName": "CloudFrontOriginAccessIdentityConfig",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2017-03-25/"
						}
					},
					"Id": {
						"location": "uri",
						"locationName": "Id"
					},
					"IfMatch": {
						"location": "header",
						"locationName": "If-Match"
					}
				},
				"payload": "CloudFrontOriginAccessIdentityConfig"
			},
			"output": {
				"type": "structure",
				"members": {
					"CloudFrontOriginAccessIdentity": {
						"shape": "S5"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "CloudFrontOriginAccessIdentity"
			}
		},
		"UpdateDistribution": {
			"http": {
				"method": "PUT",
				"requestUri": "/2017-03-25/distribution/{Id}/config"
			},
			"input": {
				"type": "structure",
				"required": [
					"DistributionConfig",
					"Id"
				],
				"members": {
					"DistributionConfig": {
						"shape": "S7",
						"locationName": "DistributionConfig",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2017-03-25/"
						}
					},
					"Id": {
						"location": "uri",
						"locationName": "Id"
					},
					"IfMatch": {
						"location": "header",
						"locationName": "If-Match"
					}
				},
				"payload": "DistributionConfig"
			},
			"output": {
				"type": "structure",
				"members": {
					"Distribution": {
						"shape": "S1s"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "Distribution"
			}
		},
		"UpdateStreamingDistribution": {
			"http": {
				"method": "PUT",
				"requestUri": "/2017-03-25/streaming-distribution/{Id}/config"
			},
			"input": {
				"type": "structure",
				"required": [
					"StreamingDistributionConfig",
					"Id"
				],
				"members": {
					"StreamingDistributionConfig": {
						"shape": "S2e",
						"locationName": "StreamingDistributionConfig",
						"xmlNamespace": {
							"uri": "http://cloudfront.amazonaws.com/doc/2017-03-25/"
						}
					},
					"Id": {
						"location": "uri",
						"locationName": "Id"
					},
					"IfMatch": {
						"location": "header",
						"locationName": "If-Match"
					}
				},
				"payload": "StreamingDistributionConfig"
			},
			"output": {
				"type": "structure",
				"members": {
					"StreamingDistribution": {
						"shape": "S2i"
					},
					"ETag": {
						"location": "header",
						"locationName": "ETag"
					}
				},
				"payload": "StreamingDistribution"
			}
		}
	},
	"shapes": {
		"S2": {
			"type": "structure",
			"required": [
				"CallerReference",
				"Comment"
			],
			"members": {
				"CallerReference": {},
				"Comment": {}
			}
		},
		"S5": {
			"type": "structure",
			"required": [
				"Id",
				"S3CanonicalUserId"
			],
			"members": {
				"Id": {},
				"S3CanonicalUserId": {},
				"CloudFrontOriginAccessIdentityConfig": {
					"shape": "S2"
				}
			}
		},
		"S7": {
			"type": "structure",
			"required": [
				"CallerReference",
				"Origins",
				"DefaultCacheBehavior",
				"Comment",
				"Enabled"
			],
			"members": {
				"CallerReference": {},
				"Aliases": {
					"shape": "S8"
				},
				"DefaultRootObject": {},
				"Origins": {
					"shape": "Sb"
				},
				"DefaultCacheBehavior": {
					"shape": "Sn"
				},
				"CacheBehaviors": {
					"shape": "S1a"
				},
				"CustomErrorResponses": {
					"shape": "S1d"
				},
				"Comment": {},
				"Logging": {
					"type": "structure",
					"required": [
						"Enabled",
						"IncludeCookies",
						"Bucket",
						"Prefix"
					],
					"members": {
						"Enabled": {
							"type": "boolean"
						},
						"IncludeCookies": {
							"type": "boolean"
						},
						"Bucket": {},
						"Prefix": {}
					}
				},
				"PriceClass": {},
				"Enabled": {
					"type": "boolean"
				},
				"ViewerCertificate": {
					"shape": "S1i"
				},
				"Restrictions": {
					"shape": "S1m"
				},
				"WebACLId": {},
				"HttpVersion": {},
				"IsIPV6Enabled": {
					"type": "boolean"
				}
			}
		},
		"S8": {
			"type": "structure",
			"required": [
				"Quantity"
			],
			"members": {
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"type": "list",
					"member": {
						"locationName": "CNAME"
					}
				}
			}
		},
		"Sb": {
			"type": "structure",
			"required": [
				"Quantity"
			],
			"members": {
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"type": "list",
					"member": {
						"locationName": "Origin",
						"type": "structure",
						"required": [
							"Id",
							"DomainName"
						],
						"members": {
							"Id": {},
							"DomainName": {},
							"OriginPath": {},
							"CustomHeaders": {
								"type": "structure",
								"required": [
									"Quantity"
								],
								"members": {
									"Quantity": {
										"type": "integer"
									},
									"Items": {
										"type": "list",
										"member": {
											"locationName": "OriginCustomHeader",
											"type": "structure",
											"required": [
												"HeaderName",
												"HeaderValue"
											],
											"members": {
												"HeaderName": {},
												"HeaderValue": {}
											}
										}
									}
								}
							},
							"S3OriginConfig": {
								"type": "structure",
								"required": [
									"OriginAccessIdentity"
								],
								"members": {
									"OriginAccessIdentity": {}
								}
							},
							"CustomOriginConfig": {
								"type": "structure",
								"required": [
									"HTTPPort",
									"HTTPSPort",
									"OriginProtocolPolicy"
								],
								"members": {
									"HTTPPort": {
										"type": "integer"
									},
									"HTTPSPort": {
										"type": "integer"
									},
									"OriginProtocolPolicy": {},
									"OriginSslProtocols": {
										"type": "structure",
										"required": [
											"Quantity",
											"Items"
										],
										"members": {
											"Quantity": {
												"type": "integer"
											},
											"Items": {
												"type": "list",
												"member": {
													"locationName": "SslProtocol"
												}
											}
										}
									},
									"OriginReadTimeout": {
										"type": "integer"
									},
									"OriginKeepaliveTimeout": {
										"type": "integer"
									}
								}
							}
						}
					}
				}
			}
		},
		"Sn": {
			"type": "structure",
			"required": [
				"TargetOriginId",
				"ForwardedValues",
				"TrustedSigners",
				"ViewerProtocolPolicy",
				"MinTTL"
			],
			"members": {
				"TargetOriginId": {},
				"ForwardedValues": {
					"shape": "So"
				},
				"TrustedSigners": {
					"shape": "Sy"
				},
				"ViewerProtocolPolicy": {},
				"MinTTL": {
					"type": "long"
				},
				"AllowedMethods": {
					"shape": "S12"
				},
				"SmoothStreaming": {
					"type": "boolean"
				},
				"DefaultTTL": {
					"type": "long"
				},
				"MaxTTL": {
					"type": "long"
				},
				"Compress": {
					"type": "boolean"
				},
				"LambdaFunctionAssociations": {
					"shape": "S16"
				}
			}
		},
		"So": {
			"type": "structure",
			"required": [
				"QueryString",
				"Cookies"
			],
			"members": {
				"QueryString": {
					"type": "boolean"
				},
				"Cookies": {
					"type": "structure",
					"required": [
						"Forward"
					],
					"members": {
						"Forward": {},
						"WhitelistedNames": {
							"type": "structure",
							"required": [
								"Quantity"
							],
							"members": {
								"Quantity": {
									"type": "integer"
								},
								"Items": {
									"type": "list",
									"member": {
										"locationName": "Name"
									}
								}
							}
						}
					}
				},
				"Headers": {
					"type": "structure",
					"required": [
						"Quantity"
					],
					"members": {
						"Quantity": {
							"type": "integer"
						},
						"Items": {
							"type": "list",
							"member": {
								"locationName": "Name"
							}
						}
					}
				},
				"QueryStringCacheKeys": {
					"type": "structure",
					"required": [
						"Quantity"
					],
					"members": {
						"Quantity": {
							"type": "integer"
						},
						"Items": {
							"type": "list",
							"member": {
								"locationName": "Name"
							}
						}
					}
				}
			}
		},
		"Sy": {
			"type": "structure",
			"required": [
				"Enabled",
				"Quantity"
			],
			"members": {
				"Enabled": {
					"type": "boolean"
				},
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"type": "list",
					"member": {
						"locationName": "AwsAccountNumber"
					}
				}
			}
		},
		"S12": {
			"type": "structure",
			"required": [
				"Quantity",
				"Items"
			],
			"members": {
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"shape": "S13"
				},
				"CachedMethods": {
					"type": "structure",
					"required": [
						"Quantity",
						"Items"
					],
					"members": {
						"Quantity": {
							"type": "integer"
						},
						"Items": {
							"shape": "S13"
						}
					}
				}
			}
		},
		"S13": {
			"type": "list",
			"member": {
				"locationName": "Method"
			}
		},
		"S16": {
			"type": "structure",
			"required": [
				"Quantity"
			],
			"members": {
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"type": "list",
					"member": {
						"locationName": "LambdaFunctionAssociation",
						"type": "structure",
						"members": {
							"LambdaFunctionARN": {},
							"EventType": {}
						}
					}
				}
			}
		},
		"S1a": {
			"type": "structure",
			"required": [
				"Quantity"
			],
			"members": {
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"type": "list",
					"member": {
						"locationName": "CacheBehavior",
						"type": "structure",
						"required": [
							"PathPattern",
							"TargetOriginId",
							"ForwardedValues",
							"TrustedSigners",
							"ViewerProtocolPolicy",
							"MinTTL"
						],
						"members": {
							"PathPattern": {},
							"TargetOriginId": {},
							"ForwardedValues": {
								"shape": "So"
							},
							"TrustedSigners": {
								"shape": "Sy"
							},
							"ViewerProtocolPolicy": {},
							"MinTTL": {
								"type": "long"
							},
							"AllowedMethods": {
								"shape": "S12"
							},
							"SmoothStreaming": {
								"type": "boolean"
							},
							"DefaultTTL": {
								"type": "long"
							},
							"MaxTTL": {
								"type": "long"
							},
							"Compress": {
								"type": "boolean"
							},
							"LambdaFunctionAssociations": {
								"shape": "S16"
							}
						}
					}
				}
			}
		},
		"S1d": {
			"type": "structure",
			"required": [
				"Quantity"
			],
			"members": {
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"type": "list",
					"member": {
						"locationName": "CustomErrorResponse",
						"type": "structure",
						"required": [
							"ErrorCode"
						],
						"members": {
							"ErrorCode": {
								"type": "integer"
							},
							"ResponsePagePath": {},
							"ResponseCode": {},
							"ErrorCachingMinTTL": {
								"type": "long"
							}
						}
					}
				}
			}
		},
		"S1i": {
			"type": "structure",
			"members": {
				"CloudFrontDefaultCertificate": {
					"type": "boolean"
				},
				"IAMCertificateId": {},
				"ACMCertificateArn": {},
				"SSLSupportMethod": {},
				"MinimumProtocolVersion": {},
				"Certificate": {
					"deprecated": true
				},
				"CertificateSource": {
					"deprecated": true
				}
			}
		},
		"S1m": {
			"type": "structure",
			"required": [
				"GeoRestriction"
			],
			"members": {
				"GeoRestriction": {
					"type": "structure",
					"required": [
						"RestrictionType",
						"Quantity"
					],
					"members": {
						"RestrictionType": {},
						"Quantity": {
							"type": "integer"
						},
						"Items": {
							"type": "list",
							"member": {
								"locationName": "Location"
							}
						}
					}
				}
			}
		},
		"S1s": {
			"type": "structure",
			"required": [
				"Id",
				"ARN",
				"Status",
				"LastModifiedTime",
				"InProgressInvalidationBatches",
				"DomainName",
				"ActiveTrustedSigners",
				"DistributionConfig"
			],
			"members": {
				"Id": {},
				"ARN": {},
				"Status": {},
				"LastModifiedTime": {
					"type": "timestamp"
				},
				"InProgressInvalidationBatches": {
					"type": "integer"
				},
				"DomainName": {},
				"ActiveTrustedSigners": {
					"shape": "S1u"
				},
				"DistributionConfig": {
					"shape": "S7"
				}
			}
		},
		"S1u": {
			"type": "structure",
			"required": [
				"Enabled",
				"Quantity"
			],
			"members": {
				"Enabled": {
					"type": "boolean"
				},
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"type": "list",
					"member": {
						"locationName": "Signer",
						"type": "structure",
						"members": {
							"AwsAccountNumber": {},
							"KeyPairIds": {
								"type": "structure",
								"required": [
									"Quantity"
								],
								"members": {
									"Quantity": {
										"type": "integer"
									},
									"Items": {
										"type": "list",
										"member": {
											"locationName": "KeyPairId"
										}
									}
								}
							}
						}
					}
				}
			}
		},
		"S21": {
			"type": "structure",
			"members": {
				"Items": {
					"type": "list",
					"member": {
						"locationName": "Tag",
						"type": "structure",
						"required": [
							"Key"
						],
						"members": {
							"Key": {},
							"Value": {}
						}
					}
				}
			}
		},
		"S28": {
			"type": "structure",
			"required": [
				"Paths",
				"CallerReference"
			],
			"members": {
				"Paths": {
					"type": "structure",
					"required": [
						"Quantity"
					],
					"members": {
						"Quantity": {
							"type": "integer"
						},
						"Items": {
							"type": "list",
							"member": {
								"locationName": "Path"
							}
						}
					}
				},
				"CallerReference": {}
			}
		},
		"S2c": {
			"type": "structure",
			"required": [
				"Id",
				"Status",
				"CreateTime",
				"InvalidationBatch"
			],
			"members": {
				"Id": {},
				"Status": {},
				"CreateTime": {
					"type": "timestamp"
				},
				"InvalidationBatch": {
					"shape": "S28"
				}
			}
		},
		"S2e": {
			"type": "structure",
			"required": [
				"CallerReference",
				"S3Origin",
				"Comment",
				"TrustedSigners",
				"Enabled"
			],
			"members": {
				"CallerReference": {},
				"S3Origin": {
					"shape": "S2f"
				},
				"Aliases": {
					"shape": "S8"
				},
				"Comment": {},
				"Logging": {
					"type": "structure",
					"required": [
						"Enabled",
						"Bucket",
						"Prefix"
					],
					"members": {
						"Enabled": {
							"type": "boolean"
						},
						"Bucket": {},
						"Prefix": {}
					}
				},
				"TrustedSigners": {
					"shape": "Sy"
				},
				"PriceClass": {},
				"Enabled": {
					"type": "boolean"
				}
			}
		},
		"S2f": {
			"type": "structure",
			"required": [
				"DomainName",
				"OriginAccessIdentity"
			],
			"members": {
				"DomainName": {},
				"OriginAccessIdentity": {}
			}
		},
		"S2i": {
			"type": "structure",
			"required": [
				"Id",
				"ARN",
				"Status",
				"DomainName",
				"ActiveTrustedSigners",
				"StreamingDistributionConfig"
			],
			"members": {
				"Id": {},
				"ARN": {},
				"Status": {},
				"LastModifiedTime": {
					"type": "timestamp"
				},
				"DomainName": {},
				"ActiveTrustedSigners": {
					"shape": "S1u"
				},
				"StreamingDistributionConfig": {
					"shape": "S2e"
				}
			}
		},
		"S3a": {
			"type": "structure",
			"required": [
				"Marker",
				"MaxItems",
				"IsTruncated",
				"Quantity"
			],
			"members": {
				"Marker": {},
				"NextMarker": {},
				"MaxItems": {
					"type": "integer"
				},
				"IsTruncated": {
					"type": "boolean"
				},
				"Quantity": {
					"type": "integer"
				},
				"Items": {
					"type": "list",
					"member": {
						"locationName": "DistributionSummary",
						"type": "structure",
						"required": [
							"Id",
							"ARN",
							"Status",
							"LastModifiedTime",
							"DomainName",
							"Aliases",
							"Origins",
							"DefaultCacheBehavior",
							"CacheBehaviors",
							"CustomErrorResponses",
							"Comment",
							"PriceClass",
							"Enabled",
							"ViewerCertificate",
							"Restrictions",
							"WebACLId",
							"HttpVersion",
							"IsIPV6Enabled"
						],
						"members": {
							"Id": {},
							"ARN": {},
							"Status": {},
							"LastModifiedTime": {
								"type": "timestamp"
							},
							"DomainName": {},
							"Aliases": {
								"shape": "S8"
							},
							"Origins": {
								"shape": "Sb"
							},
							"DefaultCacheBehavior": {
								"shape": "Sn"
							},
							"CacheBehaviors": {
								"shape": "S1a"
							},
							"CustomErrorResponses": {
								"shape": "S1d"
							},
							"Comment": {},
							"PriceClass": {},
							"Enabled": {
								"type": "boolean"
							},
							"ViewerCertificate": {
								"shape": "S1i"
							},
							"Restrictions": {
								"shape": "S1m"
							},
							"WebACLId": {},
							"HttpVersion": {},
							"IsIPV6Enabled": {
								"type": "boolean"
							}
						}
					}
				}
			}
		}
	}
};

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"ListCloudFrontOriginAccessIdentities": {
			"input_token": "Marker",
			"limit_key": "MaxItems",
			"more_results": "CloudFrontOriginAccessIdentityList.IsTruncated",
			"output_token": "CloudFrontOriginAccessIdentityList.NextMarker",
			"result_key": "CloudFrontOriginAccessIdentityList.Items"
		},
		"ListDistributions": {
			"input_token": "Marker",
			"limit_key": "MaxItems",
			"more_results": "DistributionList.IsTruncated",
			"output_token": "DistributionList.NextMarker",
			"result_key": "DistributionList.Items"
		},
		"ListInvalidations": {
			"input_token": "Marker",
			"limit_key": "MaxItems",
			"more_results": "InvalidationList.IsTruncated",
			"output_token": "InvalidationList.NextMarker",
			"result_key": "InvalidationList.Items"
		},
		"ListStreamingDistributions": {
			"input_token": "Marker",
			"limit_key": "MaxItems",
			"more_results": "StreamingDistributionList.IsTruncated",
			"output_token": "StreamingDistributionList.NextMarker",
			"result_key": "StreamingDistributionList.Items"
		}
	}
};

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = {
	"version": 2,
	"waiters": {
		"DistributionDeployed": {
			"delay": 60,
			"operation": "GetDistribution",
			"maxAttempts": 25,
			"description": "Wait until a distribution is deployed.",
			"acceptors": [
				{
					"expected": "Deployed",
					"matcher": "path",
					"state": "success",
					"argument": "Distribution.Status"
				}
			]
		},
		"InvalidationCompleted": {
			"delay": 20,
			"operation": "GetInvalidation",
			"maxAttempts": 30,
			"description": "Wait until an invalidation has completed.",
			"acceptors": [
				{
					"expected": "Completed",
					"matcher": "path",
					"state": "success",
					"argument": "Invalidation.Status"
				}
			]
		},
		"StreamingDistributionDeployed": {
			"delay": 60,
			"operation": "GetStreamingDistribution",
			"maxAttempts": 25,
			"description": "Wait until a streaming distribution is deployed.",
			"acceptors": [
				{
					"expected": "Deployed",
					"matcher": "path",
					"state": "success",
					"argument": "StreamingDistribution.Status"
				}
			]
		}
	}
};

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2014-05-30",
		"endpointPrefix": "cloudhsm",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceAbbreviation": "CloudHSM",
		"serviceFullName": "Amazon CloudHSM",
		"signatureVersion": "v4",
		"targetPrefix": "CloudHsmFrontendService",
		"uid": "cloudhsm-2014-05-30"
	},
	"operations": {
		"AddTagsToResource": {
			"input": {
				"type": "structure",
				"required": [
					"ResourceArn",
					"TagList"
				],
				"members": {
					"ResourceArn": {},
					"TagList": {
						"shape": "S3"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"Status"
				],
				"members": {
					"Status": {}
				}
			}
		},
		"CreateHapg": {
			"input": {
				"type": "structure",
				"required": [
					"Label"
				],
				"members": {
					"Label": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"HapgArn": {}
				}
			}
		},
		"CreateHsm": {
			"input": {
				"type": "structure",
				"required": [
					"SubnetId",
					"SshKey",
					"IamRoleArn",
					"SubscriptionType"
				],
				"members": {
					"SubnetId": {
						"locationName": "SubnetId"
					},
					"SshKey": {
						"locationName": "SshKey"
					},
					"EniIp": {
						"locationName": "EniIp"
					},
					"IamRoleArn": {
						"locationName": "IamRoleArn"
					},
					"ExternalId": {
						"locationName": "ExternalId"
					},
					"SubscriptionType": {
						"locationName": "SubscriptionType"
					},
					"ClientToken": {
						"locationName": "ClientToken"
					},
					"SyslogIp": {
						"locationName": "SyslogIp"
					}
				},
				"locationName": "CreateHsmRequest"
			},
			"output": {
				"type": "structure",
				"members": {
					"HsmArn": {}
				}
			}
		},
		"CreateLunaClient": {
			"input": {
				"type": "structure",
				"required": [
					"Certificate"
				],
				"members": {
					"Label": {},
					"Certificate": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ClientArn": {}
				}
			}
		},
		"DeleteHapg": {
			"input": {
				"type": "structure",
				"required": [
					"HapgArn"
				],
				"members": {
					"HapgArn": {}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"Status"
				],
				"members": {
					"Status": {}
				}
			}
		},
		"DeleteHsm": {
			"input": {
				"type": "structure",
				"required": [
					"HsmArn"
				],
				"members": {
					"HsmArn": {
						"locationName": "HsmArn"
					}
				},
				"locationName": "DeleteHsmRequest"
			},
			"output": {
				"type": "structure",
				"required": [
					"Status"
				],
				"members": {
					"Status": {}
				}
			}
		},
		"DeleteLunaClient": {
			"input": {
				"type": "structure",
				"required": [
					"ClientArn"
				],
				"members": {
					"ClientArn": {}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"Status"
				],
				"members": {
					"Status": {}
				}
			}
		},
		"DescribeHapg": {
			"input": {
				"type": "structure",
				"required": [
					"HapgArn"
				],
				"members": {
					"HapgArn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"HapgArn": {},
					"HapgSerial": {},
					"HsmsLastActionFailed": {
						"shape": "Sz"
					},
					"HsmsPendingDeletion": {
						"shape": "Sz"
					},
					"HsmsPendingRegistration": {
						"shape": "Sz"
					},
					"Label": {},
					"LastModifiedTimestamp": {},
					"PartitionSerialList": {
						"shape": "S11"
					},
					"State": {}
				}
			}
		},
		"DescribeHsm": {
			"input": {
				"type": "structure",
				"members": {
					"HsmArn": {},
					"HsmSerialNumber": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"HsmArn": {},
					"Status": {},
					"StatusDetails": {},
					"AvailabilityZone": {},
					"EniId": {},
					"EniIp": {},
					"SubscriptionType": {},
					"SubscriptionStartDate": {},
					"SubscriptionEndDate": {},
					"VpcId": {},
					"SubnetId": {},
					"IamRoleArn": {},
					"SerialNumber": {},
					"VendorName": {},
					"HsmType": {},
					"SoftwareVersion": {},
					"SshPublicKey": {},
					"SshKeyLastUpdated": {},
					"ServerCertUri": {},
					"ServerCertLastUpdated": {},
					"Partitions": {
						"type": "list",
						"member": {}
					}
				}
			}
		},
		"DescribeLunaClient": {
			"input": {
				"type": "structure",
				"members": {
					"ClientArn": {},
					"CertificateFingerprint": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ClientArn": {},
					"Certificate": {},
					"CertificateFingerprint": {},
					"LastModifiedTimestamp": {},
					"Label": {}
				}
			}
		},
		"GetConfig": {
			"input": {
				"type": "structure",
				"required": [
					"ClientArn",
					"ClientVersion",
					"HapgList"
				],
				"members": {
					"ClientArn": {},
					"ClientVersion": {},
					"HapgList": {
						"shape": "S1i"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ConfigType": {},
					"ConfigFile": {},
					"ConfigCred": {}
				}
			}
		},
		"ListAvailableZones": {
			"input": {
				"type": "structure",
				"members": {}
			},
			"output": {
				"type": "structure",
				"members": {
					"AZList": {
						"type": "list",
						"member": {}
					}
				}
			}
		},
		"ListHapgs": {
			"input": {
				"type": "structure",
				"members": {
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"HapgList"
				],
				"members": {
					"HapgList": {
						"shape": "S1i"
					},
					"NextToken": {}
				}
			}
		},
		"ListHsms": {
			"input": {
				"type": "structure",
				"members": {
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"HsmList": {
						"shape": "Sz"
					},
					"NextToken": {}
				}
			}
		},
		"ListLunaClients": {
			"input": {
				"type": "structure",
				"members": {
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"ClientList"
				],
				"members": {
					"ClientList": {
						"type": "list",
						"member": {}
					},
					"NextToken": {}
				}
			}
		},
		"ListTagsForResource": {
			"input": {
				"type": "structure",
				"required": [
					"ResourceArn"
				],
				"members": {
					"ResourceArn": {}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"TagList"
				],
				"members": {
					"TagList": {
						"shape": "S3"
					}
				}
			}
		},
		"ModifyHapg": {
			"input": {
				"type": "structure",
				"required": [
					"HapgArn"
				],
				"members": {
					"HapgArn": {},
					"Label": {},
					"PartitionSerialList": {
						"shape": "S11"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"HapgArn": {}
				}
			}
		},
		"ModifyHsm": {
			"input": {
				"type": "structure",
				"required": [
					"HsmArn"
				],
				"members": {
					"HsmArn": {
						"locationName": "HsmArn"
					},
					"SubnetId": {
						"locationName": "SubnetId"
					},
					"EniIp": {
						"locationName": "EniIp"
					},
					"IamRoleArn": {
						"locationName": "IamRoleArn"
					},
					"ExternalId": {
						"locationName": "ExternalId"
					},
					"SyslogIp": {
						"locationName": "SyslogIp"
					}
				},
				"locationName": "ModifyHsmRequest"
			},
			"output": {
				"type": "structure",
				"members": {
					"HsmArn": {}
				}
			}
		},
		"ModifyLunaClient": {
			"input": {
				"type": "structure",
				"required": [
					"ClientArn",
					"Certificate"
				],
				"members": {
					"ClientArn": {},
					"Certificate": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ClientArn": {}
				}
			}
		},
		"RemoveTagsFromResource": {
			"input": {
				"type": "structure",
				"required": [
					"ResourceArn",
					"TagKeyList"
				],
				"members": {
					"ResourceArn": {},
					"TagKeyList": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"Status"
				],
				"members": {
					"Status": {}
				}
			}
		}
	},
	"shapes": {
		"S3": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"Key",
					"Value"
				],
				"members": {
					"Key": {},
					"Value": {}
				}
			}
		},
		"Sz": {
			"type": "list",
			"member": {}
		},
		"S11": {
			"type": "list",
			"member": {}
		},
		"S1i": {
			"type": "list",
			"member": {}
		}
	}
};

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = {
	"metadata": {
		"apiVersion": "2011-02-01",
		"endpointPrefix": "cloudsearch",
		"serviceFullName": "Amazon CloudSearch",
		"signatureVersion": "v4",
		"xmlNamespace": "http://cloudsearch.amazonaws.com/doc/2011-02-01/",
		"protocol": "query"
	},
	"operations": {
		"CreateDomain": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {}
				}
			},
			"output": {
				"resultWrapper": "CreateDomainResult",
				"type": "structure",
				"members": {
					"DomainStatus": {
						"shape": "S4"
					}
				}
			}
		},
		"DefineIndexField": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"IndexField"
				],
				"members": {
					"DomainName": {},
					"IndexField": {
						"shape": "Sf"
					}
				}
			},
			"output": {
				"resultWrapper": "DefineIndexFieldResult",
				"type": "structure",
				"required": [
					"IndexField"
				],
				"members": {
					"IndexField": {
						"shape": "Sx"
					}
				}
			}
		},
		"DefineRankExpression": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"RankExpression"
				],
				"members": {
					"DomainName": {},
					"RankExpression": {
						"shape": "S12"
					}
				}
			},
			"output": {
				"resultWrapper": "DefineRankExpressionResult",
				"type": "structure",
				"required": [
					"RankExpression"
				],
				"members": {
					"RankExpression": {
						"shape": "S15"
					}
				}
			}
		},
		"DeleteDomain": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {}
				}
			},
			"output": {
				"resultWrapper": "DeleteDomainResult",
				"type": "structure",
				"members": {
					"DomainStatus": {
						"shape": "S4"
					}
				}
			}
		},
		"DeleteIndexField": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"IndexFieldName"
				],
				"members": {
					"DomainName": {},
					"IndexFieldName": {}
				}
			},
			"output": {
				"resultWrapper": "DeleteIndexFieldResult",
				"type": "structure",
				"required": [
					"IndexField"
				],
				"members": {
					"IndexField": {
						"shape": "Sx"
					}
				}
			}
		},
		"DeleteRankExpression": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"RankName"
				],
				"members": {
					"DomainName": {},
					"RankName": {}
				}
			},
			"output": {
				"resultWrapper": "DeleteRankExpressionResult",
				"type": "structure",
				"required": [
					"RankExpression"
				],
				"members": {
					"RankExpression": {
						"shape": "S15"
					}
				}
			}
		},
		"DescribeAvailabilityOptions": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {}
				}
			},
			"output": {
				"resultWrapper": "DescribeAvailabilityOptionsResult",
				"type": "structure",
				"members": {
					"AvailabilityOptions": {
						"shape": "S1e"
					}
				}
			}
		},
		"DescribeDefaultSearchField": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {}
				}
			},
			"output": {
				"resultWrapper": "DescribeDefaultSearchFieldResult",
				"type": "structure",
				"required": [
					"DefaultSearchField"
				],
				"members": {
					"DefaultSearchField": {
						"shape": "S1i"
					}
				}
			}
		},
		"DescribeDomains": {
			"input": {
				"type": "structure",
				"members": {
					"DomainNames": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeDomainsResult",
				"type": "structure",
				"required": [
					"DomainStatusList"
				],
				"members": {
					"DomainStatusList": {
						"type": "list",
						"member": {
							"shape": "S4"
						}
					}
				}
			}
		},
		"DescribeIndexFields": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {},
					"FieldNames": {
						"shape": "S1o"
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeIndexFieldsResult",
				"type": "structure",
				"required": [
					"IndexFields"
				],
				"members": {
					"IndexFields": {
						"type": "list",
						"member": {
							"shape": "Sx"
						}
					}
				}
			}
		},
		"DescribeRankExpressions": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {},
					"RankNames": {
						"shape": "S1o"
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeRankExpressionsResult",
				"type": "structure",
				"required": [
					"RankExpressions"
				],
				"members": {
					"RankExpressions": {
						"type": "list",
						"member": {
							"shape": "S15"
						}
					}
				}
			}
		},
		"DescribeServiceAccessPolicies": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {}
				}
			},
			"output": {
				"resultWrapper": "DescribeServiceAccessPoliciesResult",
				"type": "structure",
				"required": [
					"AccessPolicies"
				],
				"members": {
					"AccessPolicies": {
						"shape": "S1w"
					}
				}
			}
		},
		"DescribeStemmingOptions": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {}
				}
			},
			"output": {
				"resultWrapper": "DescribeStemmingOptionsResult",
				"type": "structure",
				"required": [
					"Stems"
				],
				"members": {
					"Stems": {
						"shape": "S20"
					}
				}
			}
		},
		"DescribeStopwordOptions": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {}
				}
			},
			"output": {
				"resultWrapper": "DescribeStopwordOptionsResult",
				"type": "structure",
				"required": [
					"Stopwords"
				],
				"members": {
					"Stopwords": {
						"shape": "S24"
					}
				}
			}
		},
		"DescribeSynonymOptions": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {}
				}
			},
			"output": {
				"resultWrapper": "DescribeSynonymOptionsResult",
				"type": "structure",
				"required": [
					"Synonyms"
				],
				"members": {
					"Synonyms": {
						"shape": "S28"
					}
				}
			}
		},
		"IndexDocuments": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {}
				}
			},
			"output": {
				"resultWrapper": "IndexDocumentsResult",
				"type": "structure",
				"members": {
					"FieldNames": {
						"shape": "S1o"
					}
				}
			}
		},
		"UpdateAvailabilityOptions": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"MultiAZ"
				],
				"members": {
					"DomainName": {},
					"MultiAZ": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"resultWrapper": "UpdateAvailabilityOptionsResult",
				"type": "structure",
				"members": {
					"AvailabilityOptions": {
						"shape": "S1e"
					}
				}
			}
		},
		"UpdateDefaultSearchField": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"DefaultSearchField"
				],
				"members": {
					"DomainName": {},
					"DefaultSearchField": {}
				}
			},
			"output": {
				"resultWrapper": "UpdateDefaultSearchFieldResult",
				"type": "structure",
				"required": [
					"DefaultSearchField"
				],
				"members": {
					"DefaultSearchField": {
						"shape": "S1i"
					}
				}
			}
		},
		"UpdateServiceAccessPolicies": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"AccessPolicies"
				],
				"members": {
					"DomainName": {},
					"AccessPolicies": {}
				}
			},
			"output": {
				"resultWrapper": "UpdateServiceAccessPoliciesResult",
				"type": "structure",
				"required": [
					"AccessPolicies"
				],
				"members": {
					"AccessPolicies": {
						"shape": "S1w"
					}
				}
			}
		},
		"UpdateStemmingOptions": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"Stems"
				],
				"members": {
					"DomainName": {},
					"Stems": {}
				}
			},
			"output": {
				"resultWrapper": "UpdateStemmingOptionsResult",
				"type": "structure",
				"required": [
					"Stems"
				],
				"members": {
					"Stems": {
						"shape": "S20"
					}
				}
			}
		},
		"UpdateStopwordOptions": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"Stopwords"
				],
				"members": {
					"DomainName": {},
					"Stopwords": {}
				}
			},
			"output": {
				"resultWrapper": "UpdateStopwordOptionsResult",
				"type": "structure",
				"required": [
					"Stopwords"
				],
				"members": {
					"Stopwords": {
						"shape": "S24"
					}
				}
			}
		},
		"UpdateSynonymOptions": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"Synonyms"
				],
				"members": {
					"DomainName": {},
					"Synonyms": {}
				}
			},
			"output": {
				"resultWrapper": "UpdateSynonymOptionsResult",
				"type": "structure",
				"required": [
					"Synonyms"
				],
				"members": {
					"Synonyms": {
						"shape": "S28"
					}
				}
			}
		}
	},
	"shapes": {
		"S4": {
			"type": "structure",
			"required": [
				"DomainId",
				"DomainName",
				"RequiresIndexDocuments"
			],
			"members": {
				"DomainId": {},
				"DomainName": {},
				"Created": {
					"type": "boolean"
				},
				"Deleted": {
					"type": "boolean"
				},
				"NumSearchableDocs": {
					"type": "long"
				},
				"DocService": {
					"shape": "S8"
				},
				"SearchService": {
					"shape": "S8"
				},
				"RequiresIndexDocuments": {
					"type": "boolean"
				},
				"Processing": {
					"type": "boolean"
				},
				"SearchInstanceType": {},
				"SearchPartitionCount": {
					"type": "integer"
				},
				"SearchInstanceCount": {
					"type": "integer"
				}
			}
		},
		"S8": {
			"type": "structure",
			"members": {
				"Arn": {},
				"Endpoint": {}
			}
		},
		"Sf": {
			"type": "structure",
			"required": [
				"IndexFieldName",
				"IndexFieldType"
			],
			"members": {
				"IndexFieldName": {},
				"IndexFieldType": {},
				"UIntOptions": {
					"type": "structure",
					"members": {
						"DefaultValue": {
							"type": "integer"
						}
					}
				},
				"LiteralOptions": {
					"type": "structure",
					"members": {
						"DefaultValue": {},
						"SearchEnabled": {
							"type": "boolean"
						},
						"FacetEnabled": {
							"type": "boolean"
						},
						"ResultEnabled": {
							"type": "boolean"
						}
					}
				},
				"TextOptions": {
					"type": "structure",
					"members": {
						"DefaultValue": {},
						"FacetEnabled": {
							"type": "boolean"
						},
						"ResultEnabled": {
							"type": "boolean"
						},
						"TextProcessor": {}
					}
				},
				"SourceAttributes": {
					"type": "list",
					"member": {
						"type": "structure",
						"required": [
							"SourceDataFunction"
						],
						"members": {
							"SourceDataFunction": {},
							"SourceDataCopy": {
								"type": "structure",
								"required": [
									"SourceName"
								],
								"members": {
									"SourceName": {},
									"DefaultValue": {}
								}
							},
							"SourceDataTrimTitle": {
								"type": "structure",
								"required": [
									"SourceName"
								],
								"members": {
									"SourceName": {},
									"DefaultValue": {},
									"Separator": {},
									"Language": {}
								}
							},
							"SourceDataMap": {
								"type": "structure",
								"required": [
									"SourceName"
								],
								"members": {
									"SourceName": {},
									"DefaultValue": {},
									"Cases": {
										"type": "map",
										"key": {},
										"value": {}
									}
								}
							}
						}
					}
				}
			}
		},
		"Sx": {
			"type": "structure",
			"required": [
				"Options",
				"Status"
			],
			"members": {
				"Options": {
					"shape": "Sf"
				},
				"Status": {
					"shape": "Sy"
				}
			}
		},
		"Sy": {
			"type": "structure",
			"required": [
				"CreationDate",
				"UpdateDate",
				"State"
			],
			"members": {
				"CreationDate": {
					"type": "timestamp"
				},
				"UpdateDate": {
					"type": "timestamp"
				},
				"UpdateVersion": {
					"type": "integer"
				},
				"State": {},
				"PendingDeletion": {
					"type": "boolean"
				}
			}
		},
		"S12": {
			"type": "structure",
			"required": [
				"RankName",
				"RankExpression"
			],
			"members": {
				"RankName": {},
				"RankExpression": {}
			}
		},
		"S15": {
			"type": "structure",
			"required": [
				"Options",
				"Status"
			],
			"members": {
				"Options": {
					"shape": "S12"
				},
				"Status": {
					"shape": "Sy"
				}
			}
		},
		"S1e": {
			"type": "structure",
			"required": [
				"Options",
				"Status"
			],
			"members": {
				"Options": {
					"type": "boolean"
				},
				"Status": {
					"shape": "Sy"
				}
			}
		},
		"S1i": {
			"type": "structure",
			"required": [
				"Options",
				"Status"
			],
			"members": {
				"Options": {},
				"Status": {
					"shape": "Sy"
				}
			}
		},
		"S1o": {
			"type": "list",
			"member": {}
		},
		"S1w": {
			"type": "structure",
			"required": [
				"Options",
				"Status"
			],
			"members": {
				"Options": {},
				"Status": {
					"shape": "Sy"
				}
			}
		},
		"S20": {
			"type": "structure",
			"required": [
				"Options",
				"Status"
			],
			"members": {
				"Options": {},
				"Status": {
					"shape": "Sy"
				}
			}
		},
		"S24": {
			"type": "structure",
			"required": [
				"Options",
				"Status"
			],
			"members": {
				"Options": {},
				"Status": {
					"shape": "Sy"
				}
			}
		},
		"S28": {
			"type": "structure",
			"required": [
				"Options",
				"Status"
			],
			"members": {
				"Options": {},
				"Status": {
					"shape": "Sy"
				}
			}
		}
	}
};

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"DescribeDomains": {
			"result_key": "DomainStatusList"
		},
		"DescribeIndexFields": {
			"result_key": "IndexFields"
		},
		"DescribeRankExpressions": {
			"result_key": "RankExpressions"
		}
	}
};

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2013-01-01",
		"endpointPrefix": "cloudsearch",
		"serviceFullName": "Amazon CloudSearch",
		"signatureVersion": "v4",
		"xmlNamespace": "http://cloudsearch.amazonaws.com/doc/2013-01-01/",
		"protocol": "query",
		"uid": "cloudsearch-2013-01-01"
	},
	"operations": {
		"BuildSuggesters": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {}
				}
			},
			"output": {
				"resultWrapper": "BuildSuggestersResult",
				"type": "structure",
				"members": {
					"FieldNames": {
						"shape": "S4"
					}
				}
			}
		},
		"CreateDomain": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {}
				}
			},
			"output": {
				"resultWrapper": "CreateDomainResult",
				"type": "structure",
				"members": {
					"DomainStatus": {
						"shape": "S8"
					}
				}
			}
		},
		"DefineAnalysisScheme": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"AnalysisScheme"
				],
				"members": {
					"DomainName": {},
					"AnalysisScheme": {
						"shape": "Sl"
					}
				}
			},
			"output": {
				"resultWrapper": "DefineAnalysisSchemeResult",
				"type": "structure",
				"required": [
					"AnalysisScheme"
				],
				"members": {
					"AnalysisScheme": {
						"shape": "Ss"
					}
				}
			}
		},
		"DefineExpression": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"Expression"
				],
				"members": {
					"DomainName": {},
					"Expression": {
						"shape": "Sy"
					}
				}
			},
			"output": {
				"resultWrapper": "DefineExpressionResult",
				"type": "structure",
				"required": [
					"Expression"
				],
				"members": {
					"Expression": {
						"shape": "S11"
					}
				}
			}
		},
		"DefineIndexField": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"IndexField"
				],
				"members": {
					"DomainName": {},
					"IndexField": {
						"shape": "S13"
					}
				}
			},
			"output": {
				"resultWrapper": "DefineIndexFieldResult",
				"type": "structure",
				"required": [
					"IndexField"
				],
				"members": {
					"IndexField": {
						"shape": "S1n"
					}
				}
			}
		},
		"DefineSuggester": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"Suggester"
				],
				"members": {
					"DomainName": {},
					"Suggester": {
						"shape": "S1p"
					}
				}
			},
			"output": {
				"resultWrapper": "DefineSuggesterResult",
				"type": "structure",
				"required": [
					"Suggester"
				],
				"members": {
					"Suggester": {
						"shape": "S1t"
					}
				}
			}
		},
		"DeleteAnalysisScheme": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"AnalysisSchemeName"
				],
				"members": {
					"DomainName": {},
					"AnalysisSchemeName": {}
				}
			},
			"output": {
				"resultWrapper": "DeleteAnalysisSchemeResult",
				"type": "structure",
				"required": [
					"AnalysisScheme"
				],
				"members": {
					"AnalysisScheme": {
						"shape": "Ss"
					}
				}
			}
		},
		"DeleteDomain": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {}
				}
			},
			"output": {
				"resultWrapper": "DeleteDomainResult",
				"type": "structure",
				"members": {
					"DomainStatus": {
						"shape": "S8"
					}
				}
			}
		},
		"DeleteExpression": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"ExpressionName"
				],
				"members": {
					"DomainName": {},
					"ExpressionName": {}
				}
			},
			"output": {
				"resultWrapper": "DeleteExpressionResult",
				"type": "structure",
				"required": [
					"Expression"
				],
				"members": {
					"Expression": {
						"shape": "S11"
					}
				}
			}
		},
		"DeleteIndexField": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"IndexFieldName"
				],
				"members": {
					"DomainName": {},
					"IndexFieldName": {}
				}
			},
			"output": {
				"resultWrapper": "DeleteIndexFieldResult",
				"type": "structure",
				"required": [
					"IndexField"
				],
				"members": {
					"IndexField": {
						"shape": "S1n"
					}
				}
			}
		},
		"DeleteSuggester": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"SuggesterName"
				],
				"members": {
					"DomainName": {},
					"SuggesterName": {}
				}
			},
			"output": {
				"resultWrapper": "DeleteSuggesterResult",
				"type": "structure",
				"required": [
					"Suggester"
				],
				"members": {
					"Suggester": {
						"shape": "S1t"
					}
				}
			}
		},
		"DescribeAnalysisSchemes": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {},
					"AnalysisSchemeNames": {
						"shape": "S25"
					},
					"Deployed": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeAnalysisSchemesResult",
				"type": "structure",
				"required": [
					"AnalysisSchemes"
				],
				"members": {
					"AnalysisSchemes": {
						"type": "list",
						"member": {
							"shape": "Ss"
						}
					}
				}
			}
		},
		"DescribeAvailabilityOptions": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {},
					"Deployed": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeAvailabilityOptionsResult",
				"type": "structure",
				"members": {
					"AvailabilityOptions": {
						"shape": "S2a"
					}
				}
			}
		},
		"DescribeDomains": {
			"input": {
				"type": "structure",
				"members": {
					"DomainNames": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeDomainsResult",
				"type": "structure",
				"required": [
					"DomainStatusList"
				],
				"members": {
					"DomainStatusList": {
						"type": "list",
						"member": {
							"shape": "S8"
						}
					}
				}
			}
		},
		"DescribeExpressions": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {},
					"ExpressionNames": {
						"shape": "S25"
					},
					"Deployed": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeExpressionsResult",
				"type": "structure",
				"required": [
					"Expressions"
				],
				"members": {
					"Expressions": {
						"type": "list",
						"member": {
							"shape": "S11"
						}
					}
				}
			}
		},
		"DescribeIndexFields": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {},
					"FieldNames": {
						"type": "list",
						"member": {}
					},
					"Deployed": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeIndexFieldsResult",
				"type": "structure",
				"required": [
					"IndexFields"
				],
				"members": {
					"IndexFields": {
						"type": "list",
						"member": {
							"shape": "S1n"
						}
					}
				}
			}
		},
		"DescribeScalingParameters": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {}
				}
			},
			"output": {
				"resultWrapper": "DescribeScalingParametersResult",
				"type": "structure",
				"required": [
					"ScalingParameters"
				],
				"members": {
					"ScalingParameters": {
						"shape": "S2p"
					}
				}
			}
		},
		"DescribeServiceAccessPolicies": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {},
					"Deployed": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeServiceAccessPoliciesResult",
				"type": "structure",
				"required": [
					"AccessPolicies"
				],
				"members": {
					"AccessPolicies": {
						"shape": "S2u"
					}
				}
			}
		},
		"DescribeSuggesters": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {},
					"SuggesterNames": {
						"shape": "S25"
					},
					"Deployed": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"resultWrapper": "DescribeSuggestersResult",
				"type": "structure",
				"required": [
					"Suggesters"
				],
				"members": {
					"Suggesters": {
						"type": "list",
						"member": {
							"shape": "S1t"
						}
					}
				}
			}
		},
		"IndexDocuments": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName"
				],
				"members": {
					"DomainName": {}
				}
			},
			"output": {
				"resultWrapper": "IndexDocumentsResult",
				"type": "structure",
				"members": {
					"FieldNames": {
						"shape": "S4"
					}
				}
			}
		},
		"ListDomainNames": {
			"output": {
				"resultWrapper": "ListDomainNamesResult",
				"type": "structure",
				"members": {
					"DomainNames": {
						"type": "map",
						"key": {},
						"value": {}
					}
				}
			}
		},
		"UpdateAvailabilityOptions": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"MultiAZ"
				],
				"members": {
					"DomainName": {},
					"MultiAZ": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"resultWrapper": "UpdateAvailabilityOptionsResult",
				"type": "structure",
				"members": {
					"AvailabilityOptions": {
						"shape": "S2a"
					}
				}
			}
		},
		"UpdateScalingParameters": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"ScalingParameters"
				],
				"members": {
					"DomainName": {},
					"ScalingParameters": {
						"shape": "S2q"
					}
				}
			},
			"output": {
				"resultWrapper": "UpdateScalingParametersResult",
				"type": "structure",
				"required": [
					"ScalingParameters"
				],
				"members": {
					"ScalingParameters": {
						"shape": "S2p"
					}
				}
			}
		},
		"UpdateServiceAccessPolicies": {
			"input": {
				"type": "structure",
				"required": [
					"DomainName",
					"AccessPolicies"
				],
				"members": {
					"DomainName": {},
					"AccessPolicies": {}
				}
			},
			"output": {
				"resultWrapper": "UpdateServiceAccessPoliciesResult",
				"type": "structure",
				"required": [
					"AccessPolicies"
				],
				"members": {
					"AccessPolicies": {
						"shape": "S2u"
					}
				}
			}
		}
	},
	"shapes": {
		"S4": {
			"type": "list",
			"member": {}
		},
		"S8": {
			"type": "structure",
			"required": [
				"DomainId",
				"DomainName",
				"RequiresIndexDocuments"
			],
			"members": {
				"DomainId": {},
				"DomainName": {},
				"ARN": {},
				"Created": {
					"type": "boolean"
				},
				"Deleted": {
					"type": "boolean"
				},
				"DocService": {
					"shape": "Sc"
				},
				"SearchService": {
					"shape": "Sc"
				},
				"RequiresIndexDocuments": {
					"type": "boolean"
				},
				"Processing": {
					"type": "boolean"
				},
				"SearchInstanceType": {},
				"SearchPartitionCount": {
					"type": "integer"
				},
				"SearchInstanceCount": {
					"type": "integer"
				},
				"Limits": {
					"type": "structure",
					"required": [
						"MaximumReplicationCount",
						"MaximumPartitionCount"
					],
					"members": {
						"MaximumReplicationCount": {
							"type": "integer"
						},
						"MaximumPartitionCount": {
							"type": "integer"
						}
					}
				}
			}
		},
		"Sc": {
			"type": "structure",
			"members": {
				"Endpoint": {}
			}
		},
		"Sl": {
			"type": "structure",
			"required": [
				"AnalysisSchemeName",
				"AnalysisSchemeLanguage"
			],
			"members": {
				"AnalysisSchemeName": {},
				"AnalysisSchemeLanguage": {},
				"AnalysisOptions": {
					"type": "structure",
					"members": {
						"Synonyms": {},
						"Stopwords": {},
						"StemmingDictionary": {},
						"JapaneseTokenizationDictionary": {},
						"AlgorithmicStemming": {}
					}
				}
			}
		},
		"Ss": {
			"type": "structure",
			"required": [
				"Options",
				"Status"
			],
			"members": {
				"Options": {
					"shape": "Sl"
				},
				"Status": {
					"shape": "St"
				}
			}
		},
		"St": {
			"type": "structure",
			"required": [
				"CreationDate",
				"UpdateDate",
				"State"
			],
			"members": {
				"CreationDate": {
					"type": "timestamp"
				},
				"UpdateDate": {
					"type": "timestamp"
				},
				"UpdateVersion": {
					"type": "integer"
				},
				"State": {},
				"PendingDeletion": {
					"type": "boolean"
				}
			}
		},
		"Sy": {
			"type": "structure",
			"required": [
				"ExpressionName",
				"ExpressionValue"
			],
			"members": {
				"ExpressionName": {},
				"ExpressionValue": {}
			}
		},
		"S11": {
			"type": "structure",
			"required": [
				"Options",
				"Status"
			],
			"members": {
				"Options": {
					"shape": "Sy"
				},
				"Status": {
					"shape": "St"
				}
			}
		},
		"S13": {
			"type": "structure",
			"required": [
				"IndexFieldName",
				"IndexFieldType"
			],
			"members": {
				"IndexFieldName": {},
				"IndexFieldType": {},
				"IntOptions": {
					"type": "structure",
					"members": {
						"DefaultValue": {
							"type": "long"
						},
						"SourceField": {},
						"FacetEnabled": {
							"type": "boolean"
						},
						"SearchEnabled": {
							"type": "boolean"
						},
						"ReturnEnabled": {
							"type": "boolean"
						},
						"SortEnabled": {
							"type": "boolean"
						}
					}
				},
				"DoubleOptions": {
					"type": "structure",
					"members": {
						"DefaultValue": {
							"type": "double"
						},
						"SourceField": {},
						"FacetEnabled": {
							"type": "boolean"
						},
						"SearchEnabled": {
							"type": "boolean"
						},
						"ReturnEnabled": {
							"type": "boolean"
						},
						"SortEnabled": {
							"type": "boolean"
						}
					}
				},
				"LiteralOptions": {
					"type": "structure",
					"members": {
						"DefaultValue": {},
						"SourceField": {},
						"FacetEnabled": {
							"type": "boolean"
						},
						"SearchEnabled": {
							"type": "boolean"
						},
						"ReturnEnabled": {
							"type": "boolean"
						},
						"SortEnabled": {
							"type": "boolean"
						}
					}
				},
				"TextOptions": {
					"type": "structure",
					"members": {
						"DefaultValue": {},
						"SourceField": {},
						"ReturnEnabled": {
							"type": "boolean"
						},
						"SortEnabled": {
							"type": "boolean"
						},
						"HighlightEnabled": {
							"type": "boolean"
						},
						"AnalysisScheme": {}
					}
				},
				"DateOptions": {
					"type": "structure",
					"members": {
						"DefaultValue": {},
						"SourceField": {},
						"FacetEnabled": {
							"type": "boolean"
						},
						"SearchEnabled": {
							"type": "boolean"
						},
						"ReturnEnabled": {
							"type": "boolean"
						},
						"SortEnabled": {
							"type": "boolean"
						}
					}
				},
				"LatLonOptions": {
					"type": "structure",
					"members": {
						"DefaultValue": {},
						"SourceField": {},
						"FacetEnabled": {
							"type": "boolean"
						},
						"SearchEnabled": {
							"type": "boolean"
						},
						"ReturnEnabled": {
							"type": "boolean"
						},
						"SortEnabled": {
							"type": "boolean"
						}
					}
				},
				"IntArrayOptions": {
					"type": "structure",
					"members": {
						"DefaultValue": {
							"type": "long"
						},
						"SourceFields": {},
						"FacetEnabled": {
							"type": "boolean"
						},
						"SearchEnabled": {
							"type": "boolean"
						},
						"ReturnEnabled": {
							"type": "boolean"
						}
					}
				},
				"DoubleArrayOptions": {
					"type": "structure",
					"members": {
						"DefaultValue": {
							"type": "double"
						},
						"SourceFields": {},
						"FacetEnabled": {
							"type": "boolean"
						},
						"SearchEnabled": {
							"type": "boolean"
						},
						"ReturnEnabled": {
							"type": "boolean"
						}
					}
				},
				"LiteralArrayOptions": {
					"type": "structure",
					"members": {
						"DefaultValue": {},
						"SourceFields": {},
						"FacetEnabled": {
							"type": "boolean"
						},
						"SearchEnabled": {
							"type": "boolean"
						},
						"ReturnEnabled": {
							"type": "boolean"
						}
					}
				},
				"TextArrayOptions": {
					"type": "structure",
					"members": {
						"DefaultValue": {},
						"SourceFields": {},
						"ReturnEnabled": {
							"type": "boolean"
						},
						"HighlightEnabled": {
							"type": "boolean"
						},
						"AnalysisScheme": {}
					}
				},
				"DateArrayOptions": {
					"type": "structure",
					"members": {
						"DefaultValue": {},
						"SourceFields": {},
						"FacetEnabled": {
							"type": "boolean"
						},
						"SearchEnabled": {
							"type": "boolean"
						},
						"ReturnEnabled": {
							"type": "boolean"
						}
					}
				}
			}
		},
		"S1n": {
			"type": "structure",
			"required": [
				"Options",
				"Status"
			],
			"members": {
				"Options": {
					"shape": "S13"
				},
				"Status": {
					"shape": "St"
				}
			}
		},
		"S1p": {
			"type": "structure",
			"required": [
				"SuggesterName",
				"DocumentSuggesterOptions"
			],
			"members": {
				"SuggesterName": {},
				"DocumentSuggesterOptions": {
					"type": "structure",
					"required": [
						"SourceField"
					],
					"members": {
						"SourceField": {},
						"FuzzyMatching": {},
						"SortExpression": {}
					}
				}
			}
		},
		"S1t": {
			"type": "structure",
			"required": [
				"Options",
				"Status"
			],
			"members": {
				"Options": {
					"shape": "S1p"
				},
				"Status": {
					"shape": "St"
				}
			}
		},
		"S25": {
			"type": "list",
			"member": {}
		},
		"S2a": {
			"type": "structure",
			"required": [
				"Options",
				"Status"
			],
			"members": {
				"Options": {
					"type": "boolean"
				},
				"Status": {
					"shape": "St"
				}
			}
		},
		"S2p": {
			"type": "structure",
			"required": [
				"Options",
				"Status"
			],
			"members": {
				"Options": {
					"shape": "S2q"
				},
				"Status": {
					"shape": "St"
				}
			}
		},
		"S2q": {
			"type": "structure",
			"members": {
				"DesiredInstanceType": {},
				"DesiredReplicationCount": {
					"type": "integer"
				},
				"DesiredPartitionCount": {
					"type": "integer"
				}
			}
		},
		"S2u": {
			"type": "structure",
			"required": [
				"Options",
				"Status"
			],
			"members": {
				"Options": {},
				"Status": {
					"shape": "St"
				}
			}
		}
	}
};

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"DescribeAnalysisSchemes": {
			"result_key": "AnalysisSchemes"
		},
		"DescribeDomains": {
			"result_key": "DomainStatusList"
		},
		"DescribeExpressions": {
			"result_key": "Expressions"
		},
		"DescribeIndexFields": {
			"result_key": "IndexFields"
		},
		"DescribeSuggesters": {
			"result_key": "Suggesters"
		}
	}
};

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2013-01-01",
		"endpointPrefix": "cloudsearchdomain",
		"jsonVersion": "1.1",
		"protocol": "rest-json",
		"serviceFullName": "Amazon CloudSearch Domain",
		"signatureVersion": "v4",
		"signingName": "cloudsearch",
		"uid": "cloudsearchdomain-2013-01-01"
	},
	"operations": {
		"Search": {
			"http": {
				"method": "GET",
				"requestUri": "/2013-01-01/search?format=sdk&pretty=true"
			},
			"input": {
				"type": "structure",
				"required": [
					"query"
				],
				"members": {
					"cursor": {
						"location": "querystring",
						"locationName": "cursor"
					},
					"expr": {
						"location": "querystring",
						"locationName": "expr"
					},
					"facet": {
						"location": "querystring",
						"locationName": "facet"
					},
					"filterQuery": {
						"location": "querystring",
						"locationName": "fq"
					},
					"highlight": {
						"location": "querystring",
						"locationName": "highlight"
					},
					"partial": {
						"location": "querystring",
						"locationName": "partial",
						"type": "boolean"
					},
					"query": {
						"location": "querystring",
						"locationName": "q"
					},
					"queryOptions": {
						"location": "querystring",
						"locationName": "q.options"
					},
					"queryParser": {
						"location": "querystring",
						"locationName": "q.parser"
					},
					"return": {
						"location": "querystring",
						"locationName": "return"
					},
					"size": {
						"location": "querystring",
						"locationName": "size",
						"type": "long"
					},
					"sort": {
						"location": "querystring",
						"locationName": "sort"
					},
					"start": {
						"location": "querystring",
						"locationName": "start",
						"type": "long"
					},
					"stats": {
						"location": "querystring",
						"locationName": "stats"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"status": {
						"type": "structure",
						"members": {
							"timems": {
								"type": "long"
							},
							"rid": {}
						}
					},
					"hits": {
						"type": "structure",
						"members": {
							"found": {
								"type": "long"
							},
							"start": {
								"type": "long"
							},
							"cursor": {},
							"hit": {
								"type": "list",
								"member": {
									"type": "structure",
									"members": {
										"id": {},
										"fields": {
											"type": "map",
											"key": {},
											"value": {
												"type": "list",
												"member": {}
											}
										},
										"exprs": {
											"type": "map",
											"key": {},
											"value": {}
										},
										"highlights": {
											"type": "map",
											"key": {},
											"value": {}
										}
									}
								}
							}
						}
					},
					"facets": {
						"type": "map",
						"key": {},
						"value": {
							"type": "structure",
							"members": {
								"buckets": {
									"type": "list",
									"member": {
										"type": "structure",
										"members": {
											"value": {},
											"count": {
												"type": "long"
											}
										}
									}
								}
							}
						}
					},
					"stats": {
						"type": "map",
						"key": {},
						"value": {
							"type": "structure",
							"members": {
								"min": {},
								"max": {},
								"count": {
									"type": "long"
								},
								"missing": {
									"type": "long"
								},
								"sum": {
									"type": "double"
								},
								"sumOfSquares": {
									"type": "double"
								},
								"mean": {},
								"stddev": {
									"type": "double"
								}
							}
						}
					}
				}
			}
		},
		"Suggest": {
			"http": {
				"method": "GET",
				"requestUri": "/2013-01-01/suggest?format=sdk&pretty=true"
			},
			"input": {
				"type": "structure",
				"required": [
					"query",
					"suggester"
				],
				"members": {
					"query": {
						"location": "querystring",
						"locationName": "q"
					},
					"suggester": {
						"location": "querystring",
						"locationName": "suggester"
					},
					"size": {
						"location": "querystring",
						"locationName": "size",
						"type": "long"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"status": {
						"type": "structure",
						"members": {
							"timems": {
								"type": "long"
							},
							"rid": {}
						}
					},
					"suggest": {
						"type": "structure",
						"members": {
							"query": {},
							"found": {
								"type": "long"
							},
							"suggestions": {
								"type": "list",
								"member": {
									"type": "structure",
									"members": {
										"suggestion": {},
										"score": {
											"type": "long"
										},
										"id": {}
									}
								}
							}
						}
					}
				}
			}
		},
		"UploadDocuments": {
			"http": {
				"requestUri": "/2013-01-01/documents/batch?format=sdk"
			},
			"input": {
				"type": "structure",
				"required": [
					"documents",
					"contentType"
				],
				"members": {
					"documents": {
						"type": "blob",
						"streaming": true
					},
					"contentType": {
						"location": "header",
						"locationName": "Content-Type"
					}
				},
				"payload": "documents"
			},
			"output": {
				"type": "structure",
				"members": {
					"status": {},
					"adds": {
						"type": "long"
					},
					"deletes": {
						"type": "long"
					},
					"warnings": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"message": {}
							}
						}
					}
				}
			}
		}
	},
	"shapes": {}
};

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2013-11-01",
		"endpointPrefix": "cloudtrail",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceAbbreviation": "CloudTrail",
		"serviceFullName": "AWS CloudTrail",
		"signatureVersion": "v4",
		"targetPrefix": "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101",
		"uid": "cloudtrail-2013-11-01"
	},
	"operations": {
		"AddTags": {
			"input": {
				"type": "structure",
				"required": [
					"ResourceId"
				],
				"members": {
					"ResourceId": {},
					"TagsList": {
						"shape": "S3"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			},
			"idempotent": true
		},
		"CreateTrail": {
			"input": {
				"type": "structure",
				"required": [
					"Name",
					"S3BucketName"
				],
				"members": {
					"Name": {},
					"S3BucketName": {},
					"S3KeyPrefix": {},
					"SnsTopicName": {},
					"IncludeGlobalServiceEvents": {
						"type": "boolean"
					},
					"IsMultiRegionTrail": {
						"type": "boolean"
					},
					"EnableLogFileValidation": {
						"type": "boolean"
					},
					"CloudWatchLogsLogGroupArn": {},
					"CloudWatchLogsRoleArn": {},
					"KmsKeyId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Name": {},
					"S3BucketName": {},
					"S3KeyPrefix": {},
					"SnsTopicName": {
						"deprecated": true
					},
					"SnsTopicARN": {},
					"IncludeGlobalServiceEvents": {
						"type": "boolean"
					},
					"IsMultiRegionTrail": {
						"type": "boolean"
					},
					"TrailARN": {},
					"LogFileValidationEnabled": {
						"type": "boolean"
					},
					"CloudWatchLogsLogGroupArn": {},
					"CloudWatchLogsRoleArn": {},
					"KmsKeyId": {}
				}
			},
			"idempotent": true
		},
		"DeleteTrail": {
			"input": {
				"type": "structure",
				"required": [
					"Name"
				],
				"members": {
					"Name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			},
			"idempotent": true
		},
		"DescribeTrails": {
			"input": {
				"type": "structure",
				"members": {
					"trailNameList": {
						"type": "list",
						"member": {}
					},
					"includeShadowTrails": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"trailList": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"Name": {},
								"S3BucketName": {},
								"S3KeyPrefix": {},
								"SnsTopicName": {
									"deprecated": true
								},
								"SnsTopicARN": {},
								"IncludeGlobalServiceEvents": {
									"type": "boolean"
								},
								"IsMultiRegionTrail": {
									"type": "boolean"
								},
								"HomeRegion": {},
								"TrailARN": {},
								"LogFileValidationEnabled": {
									"type": "boolean"
								},
								"CloudWatchLogsLogGroupArn": {},
								"CloudWatchLogsRoleArn": {},
								"KmsKeyId": {},
								"HasCustomEventSelectors": {
									"type": "boolean"
								}
							}
						}
					}
				}
			},
			"idempotent": true
		},
		"GetEventSelectors": {
			"input": {
				"type": "structure",
				"required": [
					"TrailName"
				],
				"members": {
					"TrailName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"TrailARN": {},
					"EventSelectors": {
						"shape": "Si"
					}
				}
			},
			"idempotent": true
		},
		"GetTrailStatus": {
			"input": {
				"type": "structure",
				"required": [
					"Name"
				],
				"members": {
					"Name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IsLogging": {
						"type": "boolean"
					},
					"LatestDeliveryError": {},
					"LatestNotificationError": {},
					"LatestDeliveryTime": {
						"type": "timestamp"
					},
					"LatestNotificationTime": {
						"type": "timestamp"
					},
					"StartLoggingTime": {
						"type": "timestamp"
					},
					"StopLoggingTime": {
						"type": "timestamp"
					},
					"LatestCloudWatchLogsDeliveryError": {},
					"LatestCloudWatchLogsDeliveryTime": {
						"type": "timestamp"
					},
					"LatestDigestDeliveryTime": {
						"type": "timestamp"
					},
					"LatestDigestDeliveryError": {},
					"LatestDeliveryAttemptTime": {},
					"LatestNotificationAttemptTime": {},
					"LatestNotificationAttemptSucceeded": {},
					"LatestDeliveryAttemptSucceeded": {},
					"TimeLoggingStarted": {},
					"TimeLoggingStopped": {}
				}
			},
			"idempotent": true
		},
		"ListPublicKeys": {
			"input": {
				"type": "structure",
				"members": {
					"StartTime": {
						"type": "timestamp"
					},
					"EndTime": {
						"type": "timestamp"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"PublicKeyList": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"Value": {
									"type": "blob"
								},
								"ValidityStartTime": {
									"type": "timestamp"
								},
								"ValidityEndTime": {
									"type": "timestamp"
								},
								"Fingerprint": {}
							}
						}
					},
					"NextToken": {}
				}
			},
			"idempotent": true
		},
		"ListTags": {
			"input": {
				"type": "structure",
				"required": [
					"ResourceIdList"
				],
				"members": {
					"ResourceIdList": {
						"type": "list",
						"member": {}
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ResourceTagList": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"ResourceId": {},
								"TagsList": {
									"shape": "S3"
								}
							}
						}
					},
					"NextToken": {}
				}
			},
			"idempotent": true
		},
		"LookupEvents": {
			"input": {
				"type": "structure",
				"members": {
					"LookupAttributes": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"AttributeKey",
								"AttributeValue"
							],
							"members": {
								"AttributeKey": {},
								"AttributeValue": {}
							}
						}
					},
					"StartTime": {
						"type": "timestamp"
					},
					"EndTime": {
						"type": "timestamp"
					},
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Events": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"EventId": {},
								"EventName": {},
								"EventTime": {
									"type": "timestamp"
								},
								"EventSource": {},
								"Username": {},
								"Resources": {
									"type": "list",
									"member": {
										"type": "structure",
										"members": {
											"ResourceType": {},
											"ResourceName": {}
										}
									}
								},
								"CloudTrailEvent": {}
							}
						}
					},
					"NextToken": {}
				}
			},
			"idempotent": true
		},
		"PutEventSelectors": {
			"input": {
				"type": "structure",
				"required": [
					"TrailName",
					"EventSelectors"
				],
				"members": {
					"TrailName": {},
					"EventSelectors": {
						"shape": "Si"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"TrailARN": {},
					"EventSelectors": {
						"shape": "Si"
					}
				}
			},
			"idempotent": true
		},
		"RemoveTags": {
			"input": {
				"type": "structure",
				"required": [
					"ResourceId"
				],
				"members": {
					"ResourceId": {},
					"TagsList": {
						"shape": "S3"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			},
			"idempotent": true
		},
		"StartLogging": {
			"input": {
				"type": "structure",
				"required": [
					"Name"
				],
				"members": {
					"Name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			},
			"idempotent": true
		},
		"StopLogging": {
			"input": {
				"type": "structure",
				"required": [
					"Name"
				],
				"members": {
					"Name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			},
			"idempotent": true
		},
		"UpdateTrail": {
			"input": {
				"type": "structure",
				"required": [
					"Name"
				],
				"members": {
					"Name": {},
					"S3BucketName": {},
					"S3KeyPrefix": {},
					"SnsTopicName": {},
					"IncludeGlobalServiceEvents": {
						"type": "boolean"
					},
					"IsMultiRegionTrail": {
						"type": "boolean"
					},
					"EnableLogFileValidation": {
						"type": "boolean"
					},
					"CloudWatchLogsLogGroupArn": {},
					"CloudWatchLogsRoleArn": {},
					"KmsKeyId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Name": {},
					"S3BucketName": {},
					"S3KeyPrefix": {},
					"SnsTopicName": {
						"deprecated": true
					},
					"SnsTopicARN": {},
					"IncludeGlobalServiceEvents": {
						"type": "boolean"
					},
					"IsMultiRegionTrail": {
						"type": "boolean"
					},
					"TrailARN": {},
					"LogFileValidationEnabled": {
						"type": "boolean"
					},
					"CloudWatchLogsLogGroupArn": {},
					"CloudWatchLogsRoleArn": {},
					"KmsKeyId": {}
				}
			},
			"idempotent": true
		}
	},
	"shapes": {
		"S3": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"Key"
				],
				"members": {
					"Key": {},
					"Value": {}
				}
			}
		},
		"Si": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"ReadWriteType": {},
					"IncludeManagementEvents": {
						"type": "boolean"
					},
					"DataResources": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"Type": {},
								"Values": {
									"type": "list",
									"member": {}
								}
							}
						}
					}
				}
			}
		}
	}
};

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"DescribeTrails": {
			"result_key": "trailList"
		},
		"LookupEvents": {
			"input_token": "NextToken",
			"limit_key": "MaxResults",
			"output_token": "NextToken",
			"result_key": "Events"
		}
	}
};

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2016-10-06",
		"endpointPrefix": "codebuild",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceFullName": "AWS CodeBuild",
		"signatureVersion": "v4",
		"targetPrefix": "CodeBuild_20161006",
		"uid": "codebuild-2016-10-06"
	},
	"operations": {
		"BatchGetBuilds": {
			"input": {
				"type": "structure",
				"required": [
					"ids"
				],
				"members": {
					"ids": {
						"shape": "S2"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"builds": {
						"type": "list",
						"member": {
							"shape": "S6"
						}
					},
					"buildsNotFound": {
						"shape": "S2"
					}
				}
			}
		},
		"BatchGetProjects": {
			"input": {
				"type": "structure",
				"required": [
					"names"
				],
				"members": {
					"names": {
						"shape": "Su"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"projects": {
						"type": "list",
						"member": {
							"shape": "Sx"
						}
					},
					"projectsNotFound": {
						"shape": "Su"
					}
				}
			}
		},
		"CreateProject": {
			"input": {
				"type": "structure",
				"required": [
					"name",
					"source",
					"artifacts",
					"environment"
				],
				"members": {
					"name": {},
					"description": {},
					"source": {
						"shape": "Sg"
					},
					"artifacts": {
						"shape": "S10"
					},
					"environment": {
						"shape": "Sl"
					},
					"serviceRole": {},
					"timeoutInMinutes": {
						"type": "integer"
					},
					"encryptionKey": {},
					"tags": {
						"shape": "S15"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"project": {
						"shape": "Sx"
					}
				}
			}
		},
		"DeleteProject": {
			"input": {
				"type": "structure",
				"required": [
					"name"
				],
				"members": {
					"name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"ListBuilds": {
			"input": {
				"type": "structure",
				"members": {
					"sortOrder": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ids": {
						"shape": "S2"
					},
					"nextToken": {}
				}
			}
		},
		"ListBuildsForProject": {
			"input": {
				"type": "structure",
				"required": [
					"projectName"
				],
				"members": {
					"projectName": {},
					"sortOrder": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ids": {
						"shape": "S2"
					},
					"nextToken": {}
				}
			}
		},
		"ListCuratedEnvironmentImages": {
			"input": {
				"type": "structure",
				"members": {}
			},
			"output": {
				"type": "structure",
				"members": {
					"platforms": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"platform": {},
								"languages": {
									"type": "list",
									"member": {
										"type": "structure",
										"members": {
											"language": {},
											"images": {
												"type": "list",
												"member": {
													"type": "structure",
													"members": {
														"name": {},
														"description": {}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		"ListProjects": {
			"input": {
				"type": "structure",
				"members": {
					"sortBy": {},
					"sortOrder": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"nextToken": {},
					"projects": {
						"shape": "Su"
					}
				}
			}
		},
		"StartBuild": {
			"input": {
				"type": "structure",
				"required": [
					"projectName"
				],
				"members": {
					"projectName": {},
					"sourceVersion": {},
					"artifactsOverride": {
						"shape": "S10"
					},
					"environmentVariablesOverride": {
						"shape": "So"
					},
					"buildspecOverride": {},
					"timeoutInMinutesOverride": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"build": {
						"shape": "S6"
					}
				}
			}
		},
		"StopBuild": {
			"input": {
				"type": "structure",
				"required": [
					"id"
				],
				"members": {
					"id": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"build": {
						"shape": "S6"
					}
				}
			}
		},
		"UpdateProject": {
			"input": {
				"type": "structure",
				"required": [
					"name"
				],
				"members": {
					"name": {},
					"description": {},
					"source": {
						"shape": "Sg"
					},
					"artifacts": {
						"shape": "S10"
					},
					"environment": {
						"shape": "Sl"
					},
					"serviceRole": {},
					"timeoutInMinutes": {
						"type": "integer"
					},
					"encryptionKey": {},
					"tags": {
						"shape": "S15"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"project": {
						"shape": "Sx"
					}
				}
			}
		}
	},
	"shapes": {
		"S2": {
			"type": "list",
			"member": {}
		},
		"S6": {
			"type": "structure",
			"members": {
				"id": {},
				"arn": {},
				"startTime": {
					"type": "timestamp"
				},
				"endTime": {
					"type": "timestamp"
				},
				"currentPhase": {},
				"buildStatus": {},
				"sourceVersion": {},
				"projectName": {},
				"phases": {
					"type": "list",
					"member": {
						"type": "structure",
						"members": {
							"phaseType": {},
							"phaseStatus": {},
							"startTime": {
								"type": "timestamp"
							},
							"endTime": {
								"type": "timestamp"
							},
							"durationInSeconds": {
								"type": "long"
							},
							"contexts": {
								"type": "list",
								"member": {
									"type": "structure",
									"members": {
										"statusCode": {},
										"message": {}
									}
								}
							}
						}
					}
				},
				"source": {
					"shape": "Sg"
				},
				"artifacts": {
					"type": "structure",
					"members": {
						"location": {},
						"sha256sum": {},
						"md5sum": {}
					}
				},
				"environment": {
					"shape": "Sl"
				},
				"logs": {
					"type": "structure",
					"members": {
						"groupName": {},
						"streamName": {},
						"deepLink": {}
					}
				},
				"timeoutInMinutes": {
					"type": "integer"
				},
				"buildComplete": {
					"type": "boolean"
				},
				"initiator": {}
			}
		},
		"Sg": {
			"type": "structure",
			"required": [
				"type"
			],
			"members": {
				"type": {},
				"location": {},
				"buildspec": {},
				"auth": {
					"type": "structure",
					"required": [
						"type"
					],
					"members": {
						"type": {},
						"resource": {}
					}
				}
			}
		},
		"Sl": {
			"type": "structure",
			"required": [
				"type",
				"image",
				"computeType"
			],
			"members": {
				"type": {},
				"image": {},
				"computeType": {},
				"environmentVariables": {
					"shape": "So"
				}
			}
		},
		"So": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"name",
					"value"
				],
				"members": {
					"name": {},
					"value": {}
				}
			}
		},
		"Su": {
			"type": "list",
			"member": {}
		},
		"Sx": {
			"type": "structure",
			"members": {
				"name": {},
				"arn": {},
				"description": {},
				"source": {
					"shape": "Sg"
				},
				"artifacts": {
					"shape": "S10"
				},
				"environment": {
					"shape": "Sl"
				},
				"serviceRole": {},
				"timeoutInMinutes": {
					"type": "integer"
				},
				"encryptionKey": {},
				"tags": {
					"shape": "S15"
				},
				"created": {
					"type": "timestamp"
				},
				"lastModified": {
					"type": "timestamp"
				}
			}
		},
		"S10": {
			"type": "structure",
			"required": [
				"type"
			],
			"members": {
				"type": {},
				"location": {},
				"path": {},
				"namespaceType": {},
				"name": {},
				"packaging": {}
			}
		},
		"S15": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"key": {},
					"value": {}
				}
			}
		}
	}
};

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {}
};

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2015-04-13",
		"endpointPrefix": "codecommit",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceAbbreviation": "CodeCommit",
		"serviceFullName": "AWS CodeCommit",
		"signatureVersion": "v4",
		"targetPrefix": "CodeCommit_20150413",
		"uid": "codecommit-2015-04-13"
	},
	"operations": {
		"BatchGetRepositories": {
			"input": {
				"type": "structure",
				"required": [
					"repositoryNames"
				],
				"members": {
					"repositoryNames": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"repositories": {
						"type": "list",
						"member": {
							"shape": "S6"
						}
					},
					"repositoriesNotFound": {
						"type": "list",
						"member": {}
					}
				}
			}
		},
		"CreateBranch": {
			"input": {
				"type": "structure",
				"required": [
					"repositoryName",
					"branchName",
					"commitId"
				],
				"members": {
					"repositoryName": {},
					"branchName": {},
					"commitId": {}
				}
			}
		},
		"CreateRepository": {
			"input": {
				"type": "structure",
				"required": [
					"repositoryName"
				],
				"members": {
					"repositoryName": {},
					"repositoryDescription": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"repositoryMetadata": {
						"shape": "S6"
					}
				}
			}
		},
		"DeleteRepository": {
			"input": {
				"type": "structure",
				"required": [
					"repositoryName"
				],
				"members": {
					"repositoryName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"repositoryId": {}
				}
			}
		},
		"GetBlob": {
			"input": {
				"type": "structure",
				"required": [
					"repositoryName",
					"blobId"
				],
				"members": {
					"repositoryName": {},
					"blobId": {}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"content"
				],
				"members": {
					"content": {
						"type": "blob"
					}
				}
			}
		},
		"GetBranch": {
			"input": {
				"type": "structure",
				"members": {
					"repositoryName": {},
					"branchName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"branch": {
						"type": "structure",
						"members": {
							"branchName": {},
							"commitId": {}
						}
					}
				}
			}
		},
		"GetCommit": {
			"input": {
				"type": "structure",
				"required": [
					"repositoryName",
					"commitId"
				],
				"members": {
					"repositoryName": {},
					"commitId": {}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"commit"
				],
				"members": {
					"commit": {
						"type": "structure",
						"members": {
							"treeId": {},
							"parents": {
								"type": "list",
								"member": {}
							},
							"message": {},
							"author": {
								"shape": "Sz"
							},
							"committer": {
								"shape": "Sz"
							},
							"additionalData": {}
						}
					}
				}
			}
		},
		"GetDifferences": {
			"input": {
				"type": "structure",
				"required": [
					"repositoryName",
					"afterCommitSpecifier"
				],
				"members": {
					"repositoryName": {},
					"beforeCommitSpecifier": {},
					"afterCommitSpecifier": {},
					"beforePath": {},
					"afterPath": {},
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"differences": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"beforeBlob": {
									"shape": "S1c"
								},
								"afterBlob": {
									"shape": "S1c"
								},
								"changeType": {}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"GetRepository": {
			"input": {
				"type": "structure",
				"required": [
					"repositoryName"
				],
				"members": {
					"repositoryName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"repositoryMetadata": {
						"shape": "S6"
					}
				}
			}
		},
		"GetRepositoryTriggers": {
			"input": {
				"type": "structure",
				"required": [
					"repositoryName"
				],
				"members": {
					"repositoryName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"configurationId": {},
					"triggers": {
						"shape": "S1k"
					}
				}
			}
		},
		"ListBranches": {
			"input": {
				"type": "structure",
				"required": [
					"repositoryName"
				],
				"members": {
					"repositoryName": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"branches": {
						"shape": "S1o"
					},
					"nextToken": {}
				}
			}
		},
		"ListRepositories": {
			"input": {
				"type": "structure",
				"members": {
					"nextToken": {},
					"sortBy": {},
					"order": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"repositories": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"repositoryName": {},
								"repositoryId": {}
							}
						}
					},
					"nextToken": {}
				}
			}
		},
		"PutRepositoryTriggers": {
			"input": {
				"type": "structure",
				"required": [
					"repositoryName",
					"triggers"
				],
				"members": {
					"repositoryName": {},
					"triggers": {
						"shape": "S1k"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"configurationId": {}
				}
			}
		},
		"TestRepositoryTriggers": {
			"input": {
				"type": "structure",
				"required": [
					"repositoryName",
					"triggers"
				],
				"members": {
					"repositoryName": {},
					"triggers": {
						"shape": "S1k"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"successfulExecutions": {
						"type": "list",
						"member": {}
					},
					"failedExecutions": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"trigger": {},
								"failureMessage": {}
							}
						}
					}
				}
			}
		},
		"UpdateDefaultBranch": {
			"input": {
				"type": "structure",
				"required": [
					"repositoryName",
					"defaultBranchName"
				],
				"members": {
					"repositoryName": {},
					"defaultBranchName": {}
				}
			}
		},
		"UpdateRepositoryDescription": {
			"input": {
				"type": "structure",
				"required": [
					"repositoryName"
				],
				"members": {
					"repositoryName": {},
					"repositoryDescription": {}
				}
			}
		},
		"UpdateRepositoryName": {
			"input": {
				"type": "structure",
				"required": [
					"oldName",
					"newName"
				],
				"members": {
					"oldName": {},
					"newName": {}
				}
			}
		}
	},
	"shapes": {
		"S6": {
			"type": "structure",
			"members": {
				"accountId": {},
				"repositoryId": {},
				"repositoryName": {},
				"repositoryDescription": {},
				"defaultBranch": {},
				"lastModifiedDate": {
					"type": "timestamp"
				},
				"creationDate": {
					"type": "timestamp"
				},
				"cloneUrlHttp": {},
				"cloneUrlSsh": {},
				"Arn": {}
			}
		},
		"Sz": {
			"type": "structure",
			"members": {
				"name": {},
				"email": {},
				"date": {}
			}
		},
		"S1c": {
			"type": "structure",
			"members": {
				"blobId": {},
				"path": {},
				"mode": {}
			}
		},
		"S1k": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"name",
					"destinationArn",
					"events"
				],
				"members": {
					"name": {},
					"destinationArn": {},
					"customData": {},
					"branches": {
						"shape": "S1o"
					},
					"events": {
						"type": "list",
						"member": {}
					}
				}
			}
		},
		"S1o": {
			"type": "list",
			"member": {}
		}
	}
};

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"GetDifferences": {
			"input_token": "NextToken",
			"limit_key": "MaxResults",
			"output_token": "NextToken"
		},
		"ListBranches": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "branches"
		},
		"ListRepositories": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "repositories"
		}
	}
};

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2014-10-06",
		"endpointPrefix": "codedeploy",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceAbbreviation": "CodeDeploy",
		"serviceFullName": "AWS CodeDeploy",
		"signatureVersion": "v4",
		"targetPrefix": "CodeDeploy_20141006",
		"timestampFormat": "unixTimestamp",
		"uid": "codedeploy-2014-10-06"
	},
	"operations": {
		"AddTagsToOnPremisesInstances": {
			"input": {
				"type": "structure",
				"required": [
					"tags",
					"instanceNames"
				],
				"members": {
					"tags": {
						"shape": "S2"
					},
					"instanceNames": {
						"shape": "S6"
					}
				}
			}
		},
		"BatchGetApplicationRevisions": {
			"input": {
				"type": "structure",
				"required": [
					"applicationName",
					"revisions"
				],
				"members": {
					"applicationName": {},
					"revisions": {
						"shape": "Sa"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"applicationName": {},
					"errorMessage": {},
					"revisions": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"revisionLocation": {
									"shape": "Sb"
								},
								"genericRevisionInfo": {
									"shape": "Sq"
								}
							}
						}
					}
				}
			}
		},
		"BatchGetApplications": {
			"input": {
				"type": "structure",
				"members": {
					"applicationNames": {
						"shape": "Sw"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"applicationsInfo": {
						"type": "list",
						"member": {
							"shape": "Sz"
						}
					}
				}
			}
		},
		"BatchGetDeploymentGroups": {
			"input": {
				"type": "structure",
				"required": [
					"applicationName",
					"deploymentGroupNames"
				],
				"members": {
					"applicationName": {},
					"deploymentGroupNames": {
						"shape": "Ss"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"deploymentGroupsInfo": {
						"type": "list",
						"member": {
							"shape": "S15"
						}
					},
					"errorMessage": {}
				}
			}
		},
		"BatchGetDeploymentInstances": {
			"input": {
				"type": "structure",
				"required": [
					"deploymentId",
					"instanceIds"
				],
				"members": {
					"deploymentId": {},
					"instanceIds": {
						"shape": "S2d"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"instancesSummary": {
						"type": "list",
						"member": {
							"shape": "S2h"
						}
					},
					"errorMessage": {}
				}
			}
		},
		"BatchGetDeployments": {
			"input": {
				"type": "structure",
				"members": {
					"deploymentIds": {
						"shape": "S2u"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"deploymentsInfo": {
						"type": "list",
						"member": {
							"shape": "S2x"
						}
					}
				}
			}
		},
		"BatchGetOnPremisesInstances": {
			"input": {
				"type": "structure",
				"members": {
					"instanceNames": {
						"shape": "S6"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"instanceInfos": {
						"type": "list",
						"member": {
							"shape": "S3b"
						}
					}
				}
			}
		},
		"ContinueDeployment": {
			"input": {
				"type": "structure",
				"members": {
					"deploymentId": {}
				}
			}
		},
		"CreateApplication": {
			"input": {
				"type": "structure",
				"required": [
					"applicationName"
				],
				"members": {
					"applicationName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"applicationId": {}
				}
			}
		},
		"CreateDeployment": {
			"input": {
				"type": "structure",
				"required": [
					"applicationName"
				],
				"members": {
					"applicationName": {},
					"deploymentGroupName": {},
					"revision": {
						"shape": "Sb"
					},
					"deploymentConfigName": {},
					"description": {},
					"ignoreApplicationStopFailures": {
						"type": "boolean"
					},
					"targetInstances": {
						"shape": "S35"
					},
					"autoRollbackConfiguration": {
						"shape": "S1t"
					},
					"updateOutdatedInstancesOnly": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"deploymentId": {}
				}
			}
		},
		"CreateDeploymentConfig": {
			"input": {
				"type": "structure",
				"required": [
					"deploymentConfigName"
				],
				"members": {
					"deploymentConfigName": {},
					"minimumHealthyHosts": {
						"shape": "S3l"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"deploymentConfigId": {}
				}
			}
		},
		"CreateDeploymentGroup": {
			"input": {
				"type": "structure",
				"required": [
					"applicationName",
					"deploymentGroupName",
					"serviceRoleArn"
				],
				"members": {
					"applicationName": {},
					"deploymentGroupName": {},
					"deploymentConfigName": {},
					"ec2TagFilters": {
						"shape": "S18"
					},
					"onPremisesInstanceTagFilters": {
						"shape": "S1b"
					},
					"autoScalingGroups": {
						"shape": "S36"
					},
					"serviceRoleArn": {},
					"triggerConfigurations": {
						"shape": "S1j"
					},
					"alarmConfiguration": {
						"shape": "S1p"
					},
					"autoRollbackConfiguration": {
						"shape": "S1t"
					},
					"deploymentStyle": {
						"shape": "S1w"
					},
					"blueGreenDeploymentConfiguration": {
						"shape": "S1z"
					},
					"loadBalancerInfo": {
						"shape": "S27"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"deploymentGroupId": {}
				}
			}
		},
		"DeleteApplication": {
			"input": {
				"type": "structure",
				"required": [
					"applicationName"
				],
				"members": {
					"applicationName": {}
				}
			}
		},
		"DeleteDeploymentConfig": {
			"input": {
				"type": "structure",
				"required": [
					"deploymentConfigName"
				],
				"members": {
					"deploymentConfigName": {}
				}
			}
		},
		"DeleteDeploymentGroup": {
			"input": {
				"type": "structure",
				"required": [
					"applicationName",
					"deploymentGroupName"
				],
				"members": {
					"applicationName": {},
					"deploymentGroupName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"hooksNotCleanedUp": {
						"shape": "S1e"
					}
				}
			}
		},
		"DeregisterOnPremisesInstance": {
			"input": {
				"type": "structure",
				"required": [
					"instanceName"
				],
				"members": {
					"instanceName": {}
				}
			}
		},
		"GetApplication": {
			"input": {
				"type": "structure",
				"required": [
					"applicationName"
				],
				"members": {
					"applicationName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"application": {
						"shape": "Sz"
					}
				}
			}
		},
		"GetApplicationRevision": {
			"input": {
				"type": "structure",
				"required": [
					"applicationName",
					"revision"
				],
				"members": {
					"applicationName": {},
					"revision": {
						"shape": "Sb"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"applicationName": {},
					"revision": {
						"shape": "Sb"
					},
					"revisionInfo": {
						"shape": "Sq"
					}
				}
			}
		},
		"GetDeployment": {
			"input": {
				"type": "structure",
				"required": [
					"deploymentId"
				],
				"members": {
					"deploymentId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"deploymentInfo": {
						"shape": "S2x"
					}
				}
			}
		},
		"GetDeploymentConfig": {
			"input": {
				"type": "structure",
				"required": [
					"deploymentConfigName"
				],
				"members": {
					"deploymentConfigName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"deploymentConfigInfo": {
						"type": "structure",
						"members": {
							"deploymentConfigId": {},
							"deploymentConfigName": {},
							"minimumHealthyHosts": {
								"shape": "S3l"
							},
							"createTime": {
								"type": "timestamp"
							}
						}
					}
				}
			}
		},
		"GetDeploymentGroup": {
			"input": {
				"type": "structure",
				"required": [
					"applicationName",
					"deploymentGroupName"
				],
				"members": {
					"applicationName": {},
					"deploymentGroupName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"deploymentGroupInfo": {
						"shape": "S15"
					}
				}
			}
		},
		"GetDeploymentInstance": {
			"input": {
				"type": "structure",
				"required": [
					"deploymentId",
					"instanceId"
				],
				"members": {
					"deploymentId": {},
					"instanceId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"instanceSummary": {
						"shape": "S2h"
					}
				}
			}
		},
		"GetOnPremisesInstance": {
			"input": {
				"type": "structure",
				"required": [
					"instanceName"
				],
				"members": {
					"instanceName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"instanceInfo": {
						"shape": "S3b"
					}
				}
			}
		},
		"ListApplicationRevisions": {
			"input": {
				"type": "structure",
				"required": [
					"applicationName"
				],
				"members": {
					"applicationName": {},
					"sortBy": {},
					"sortOrder": {},
					"s3Bucket": {},
					"s3KeyPrefix": {},
					"deployed": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"revisions": {
						"shape": "Sa"
					},
					"nextToken": {}
				}
			}
		},
		"ListApplications": {
			"input": {
				"type": "structure",
				"members": {
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"applications": {
						"shape": "Sw"
					},
					"nextToken": {}
				}
			}
		},
		"ListDeploymentConfigs": {
			"input": {
				"type": "structure",
				"members": {
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"deploymentConfigsList": {
						"type": "list",
						"member": {}
					},
					"nextToken": {}
				}
			}
		},
		"ListDeploymentGroups": {
			"input": {
				"type": "structure",
				"required": [
					"applicationName"
				],
				"members": {
					"applicationName": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"applicationName": {},
					"deploymentGroups": {
						"shape": "Ss"
					},
					"nextToken": {}
				}
			}
		},
		"ListDeploymentInstances": {
			"input": {
				"type": "structure",
				"required": [
					"deploymentId"
				],
				"members": {
					"deploymentId": {},
					"nextToken": {},
					"instanceStatusFilter": {
						"type": "list",
						"member": {}
					},
					"instanceTypeFilter": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"instancesList": {
						"shape": "S2d"
					},
					"nextToken": {}
				}
			}
		},
		"ListDeployments": {
			"input": {
				"type": "structure",
				"members": {
					"applicationName": {},
					"deploymentGroupName": {},
					"includeOnlyStatuses": {
						"type": "list",
						"member": {}
					},
					"createTimeRange": {
						"type": "structure",
						"members": {
							"start": {
								"type": "timestamp"
							},
							"end": {
								"type": "timestamp"
							}
						}
					},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"deployments": {
						"shape": "S2u"
					},
					"nextToken": {}
				}
			}
		},
		"ListOnPremisesInstances": {
			"input": {
				"type": "structure",
				"members": {
					"registrationStatus": {},
					"tagFilters": {
						"shape": "S1b"
					},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"instanceNames": {
						"shape": "S6"
					},
					"nextToken": {}
				}
			}
		},
		"RegisterApplicationRevision": {
			"input": {
				"type": "structure",
				"required": [
					"applicationName",
					"revision"
				],
				"members": {
					"applicationName": {},
					"description": {},
					"revision": {
						"shape": "Sb"
					}
				}
			}
		},
		"RegisterOnPremisesInstance": {
			"input": {
				"type": "structure",
				"required": [
					"instanceName"
				],
				"members": {
					"instanceName": {},
					"iamSessionArn": {},
					"iamUserArn": {}
				}
			}
		},
		"RemoveTagsFromOnPremisesInstances": {
			"input": {
				"type": "structure",
				"required": [
					"tags",
					"instanceNames"
				],
				"members": {
					"tags": {
						"shape": "S2"
					},
					"instanceNames": {
						"shape": "S6"
					}
				}
			}
		},
		"SkipWaitTimeForInstanceTermination": {
			"input": {
				"type": "structure",
				"members": {
					"deploymentId": {}
				}
			}
		},
		"StopDeployment": {
			"input": {
				"type": "structure",
				"required": [
					"deploymentId"
				],
				"members": {
					"deploymentId": {},
					"autoRollbackEnabled": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"status": {},
					"statusMessage": {}
				}
			}
		},
		"UpdateApplication": {
			"input": {
				"type": "structure",
				"members": {
					"applicationName": {},
					"newApplicationName": {}
				}
			}
		},
		"UpdateDeploymentGroup": {
			"input": {
				"type": "structure",
				"required": [
					"applicationName",
					"currentDeploymentGroupName"
				],
				"members": {
					"applicationName": {},
					"currentDeploymentGroupName": {},
					"newDeploymentGroupName": {},
					"deploymentConfigName": {},
					"ec2TagFilters": {
						"shape": "S18"
					},
					"onPremisesInstanceTagFilters": {
						"shape": "S1b"
					},
					"autoScalingGroups": {
						"shape": "S36"
					},
					"serviceRoleArn": {},
					"triggerConfigurations": {
						"shape": "S1j"
					},
					"alarmConfiguration": {
						"shape": "S1p"
					},
					"autoRollbackConfiguration": {
						"shape": "S1t"
					},
					"deploymentStyle": {
						"shape": "S1w"
					},
					"blueGreenDeploymentConfiguration": {
						"shape": "S1z"
					},
					"loadBalancerInfo": {
						"shape": "S27"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"hooksNotCleanedUp": {
						"shape": "S1e"
					}
				}
			}
		}
	},
	"shapes": {
		"S2": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"Key": {},
					"Value": {}
				}
			}
		},
		"S6": {
			"type": "list",
			"member": {}
		},
		"Sa": {
			"type": "list",
			"member": {
				"shape": "Sb"
			}
		},
		"Sb": {
			"type": "structure",
			"members": {
				"revisionType": {},
				"s3Location": {
					"type": "structure",
					"members": {
						"bucket": {},
						"key": {},
						"bundleType": {},
						"version": {},
						"eTag": {}
					}
				},
				"gitHubLocation": {
					"type": "structure",
					"members": {
						"repository": {},
						"commitId": {}
					}
				}
			}
		},
		"Sq": {
			"type": "structure",
			"members": {
				"description": {},
				"deploymentGroups": {
					"shape": "Ss"
				},
				"firstUsedTime": {
					"type": "timestamp"
				},
				"lastUsedTime": {
					"type": "timestamp"
				},
				"registerTime": {
					"type": "timestamp"
				}
			}
		},
		"Ss": {
			"type": "list",
			"member": {}
		},
		"Sw": {
			"type": "list",
			"member": {}
		},
		"Sz": {
			"type": "structure",
			"members": {
				"applicationId": {},
				"applicationName": {},
				"createTime": {
					"type": "timestamp"
				},
				"linkedToGitHub": {
					"type": "boolean"
				}
			}
		},
		"S15": {
			"type": "structure",
			"members": {
				"applicationName": {},
				"deploymentGroupId": {},
				"deploymentGroupName": {},
				"deploymentConfigName": {},
				"ec2TagFilters": {
					"shape": "S18"
				},
				"onPremisesInstanceTagFilters": {
					"shape": "S1b"
				},
				"autoScalingGroups": {
					"shape": "S1e"
				},
				"serviceRoleArn": {},
				"targetRevision": {
					"shape": "Sb"
				},
				"triggerConfigurations": {
					"shape": "S1j"
				},
				"alarmConfiguration": {
					"shape": "S1p"
				},
				"autoRollbackConfiguration": {
					"shape": "S1t"
				},
				"deploymentStyle": {
					"shape": "S1w"
				},
				"blueGreenDeploymentConfiguration": {
					"shape": "S1z"
				},
				"loadBalancerInfo": {
					"shape": "S27"
				}
			}
		},
		"S18": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"Key": {},
					"Value": {},
					"Type": {}
				}
			}
		},
		"S1b": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"Key": {},
					"Value": {},
					"Type": {}
				}
			}
		},
		"S1e": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"name": {},
					"hook": {}
				}
			}
		},
		"S1j": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"triggerName": {},
					"triggerTargetArn": {},
					"triggerEvents": {
						"type": "list",
						"member": {}
					}
				}
			}
		},
		"S1p": {
			"type": "structure",
			"members": {
				"enabled": {
					"type": "boolean"
				},
				"ignorePollAlarmFailure": {
					"type": "boolean"
				},
				"alarms": {
					"type": "list",
					"member": {
						"type": "structure",
						"members": {
							"name": {}
						}
					}
				}
			}
		},
		"S1t": {
			"type": "structure",
			"members": {
				"enabled": {
					"type": "boolean"
				},
				"events": {
					"type": "list",
					"member": {}
				}
			}
		},
		"S1w": {
			"type": "structure",
			"members": {
				"deploymentType": {},
				"deploymentOption": {}
			}
		},
		"S1z": {
			"type": "structure",
			"members": {
				"terminateBlueInstancesOnDeploymentSuccess": {
					"type": "structure",
					"members": {
						"action": {},
						"terminationWaitTimeInMinutes": {
							"type": "integer"
						}
					}
				},
				"deploymentReadyOption": {
					"type": "structure",
					"members": {
						"actionOnTimeout": {},
						"waitTimeInMinutes": {
							"type": "integer"
						}
					}
				},
				"greenFleetProvisioningOption": {
					"type": "structure",
					"members": {
						"action": {}
					}
				}
			}
		},
		"S27": {
			"type": "structure",
			"members": {
				"elbInfoList": {
					"type": "list",
					"member": {
						"type": "structure",
						"members": {
							"name": {}
						}
					}
				}
			}
		},
		"S2d": {
			"type": "list",
			"member": {}
		},
		"S2h": {
			"type": "structure",
			"members": {
				"deploymentId": {},
				"instanceId": {},
				"status": {},
				"lastUpdatedAt": {
					"type": "timestamp"
				},
				"lifecycleEvents": {
					"type": "list",
					"member": {
						"type": "structure",
						"members": {
							"lifecycleEventName": {},
							"diagnostics": {
								"type": "structure",
								"members": {
									"errorCode": {},
									"scriptName": {},
									"message": {},
									"logTail": {}
								}
							},
							"startTime": {
								"type": "timestamp"
							},
							"endTime": {
								"type": "timestamp"
							},
							"status": {}
						}
					}
				},
				"instanceType": {}
			}
		},
		"S2u": {
			"type": "list",
			"member": {}
		},
		"S2x": {
			"type": "structure",
			"members": {
				"applicationName": {},
				"deploymentGroupName": {},
				"deploymentConfigName": {},
				"deploymentId": {},
				"revision": {
					"shape": "Sb"
				},
				"status": {},
				"errorInformation": {
					"type": "structure",
					"members": {
						"code": {},
						"message": {}
					}
				},
				"createTime": {
					"type": "timestamp"
				},
				"startTime": {
					"type": "timestamp"
				},
				"completeTime": {
					"type": "timestamp"
				},
				"deploymentOverview": {
					"type": "structure",
					"members": {
						"Pending": {
							"type": "long"
						},
						"InProgress": {
							"type": "long"
						},
						"Succeeded": {
							"type": "long"
						},
						"Failed": {
							"type": "long"
						},
						"Skipped": {
							"type": "long"
						},
						"Ready": {
							"type": "long"
						}
					}
				},
				"description": {},
				"creator": {},
				"ignoreApplicationStopFailures": {
					"type": "boolean"
				},
				"autoRollbackConfiguration": {
					"shape": "S1t"
				},
				"updateOutdatedInstancesOnly": {
					"type": "boolean"
				},
				"rollbackInfo": {
					"type": "structure",
					"members": {
						"rollbackDeploymentId": {},
						"rollbackTriggeringDeploymentId": {},
						"rollbackMessage": {}
					}
				},
				"deploymentStyle": {
					"shape": "S1w"
				},
				"targetInstances": {
					"shape": "S35"
				},
				"instanceTerminationWaitTimeStarted": {
					"type": "boolean"
				},
				"blueGreenDeploymentConfiguration": {
					"shape": "S1z"
				},
				"loadBalancerInfo": {
					"shape": "S27"
				},
				"additionalDeploymentStatusInfo": {}
			}
		},
		"S35": {
			"type": "structure",
			"members": {
				"tagFilters": {
					"shape": "S18"
				},
				"autoScalingGroups": {
					"shape": "S36"
				}
			}
		},
		"S36": {
			"type": "list",
			"member": {}
		},
		"S3b": {
			"type": "structure",
			"members": {
				"instanceName": {},
				"iamSessionArn": {},
				"iamUserArn": {},
				"instanceArn": {},
				"registerTime": {
					"type": "timestamp"
				},
				"deregisterTime": {
					"type": "timestamp"
				},
				"tags": {
					"shape": "S2"
				}
			}
		},
		"S3l": {
			"type": "structure",
			"members": {
				"value": {
					"type": "integer"
				},
				"type": {}
			}
		}
	}
};

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"ListApplicationRevisions": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "revisions"
		},
		"ListApplications": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "applications"
		},
		"ListDeploymentConfigs": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "deploymentConfigsList"
		},
		"ListDeploymentGroups": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "deploymentGroups"
		},
		"ListDeploymentInstances": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "instancesList"
		},
		"ListDeployments": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "deployments"
		}
	}
};

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = {
	"version": 2,
	"waiters": {
		"DeploymentSuccessful": {
			"delay": 15,
			"operation": "GetDeployment",
			"maxAttempts": 120,
			"acceptors": [
				{
					"expected": "Succeeded",
					"matcher": "path",
					"state": "success",
					"argument": "deploymentInfo.status"
				},
				{
					"expected": "Failed",
					"matcher": "path",
					"state": "failure",
					"argument": "deploymentInfo.status"
				},
				{
					"expected": "Stopped",
					"matcher": "path",
					"state": "failure",
					"argument": "deploymentInfo.status"
				}
			]
		}
	}
};

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2015-07-09",
		"endpointPrefix": "codepipeline",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceAbbreviation": "CodePipeline",
		"serviceFullName": "AWS CodePipeline",
		"signatureVersion": "v4",
		"targetPrefix": "CodePipeline_20150709",
		"uid": "codepipeline-2015-07-09"
	},
	"operations": {
		"AcknowledgeJob": {
			"input": {
				"type": "structure",
				"required": [
					"jobId",
					"nonce"
				],
				"members": {
					"jobId": {},
					"nonce": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"status": {}
				}
			}
		},
		"AcknowledgeThirdPartyJob": {
			"input": {
				"type": "structure",
				"required": [
					"jobId",
					"nonce",
					"clientToken"
				],
				"members": {
					"jobId": {},
					"nonce": {},
					"clientToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"status": {}
				}
			}
		},
		"CreateCustomActionType": {
			"input": {
				"type": "structure",
				"required": [
					"category",
					"provider",
					"version",
					"inputArtifactDetails",
					"outputArtifactDetails"
				],
				"members": {
					"category": {},
					"provider": {},
					"version": {},
					"settings": {
						"shape": "Se"
					},
					"configurationProperties": {
						"shape": "Sh"
					},
					"inputArtifactDetails": {
						"shape": "Sn"
					},
					"outputArtifactDetails": {
						"shape": "Sn"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"actionType"
				],
				"members": {
					"actionType": {
						"shape": "Sr"
					}
				}
			}
		},
		"CreatePipeline": {
			"input": {
				"type": "structure",
				"required": [
					"pipeline"
				],
				"members": {
					"pipeline": {
						"shape": "Sv"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"pipeline": {
						"shape": "Sv"
					}
				}
			}
		},
		"DeleteCustomActionType": {
			"input": {
				"type": "structure",
				"required": [
					"category",
					"provider",
					"version"
				],
				"members": {
					"category": {},
					"provider": {},
					"version": {}
				}
			}
		},
		"DeletePipeline": {
			"input": {
				"type": "structure",
				"required": [
					"name"
				],
				"members": {
					"name": {}
				}
			}
		},
		"DisableStageTransition": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineName",
					"stageName",
					"transitionType",
					"reason"
				],
				"members": {
					"pipelineName": {},
					"stageName": {},
					"transitionType": {},
					"reason": {}
				}
			}
		},
		"EnableStageTransition": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineName",
					"stageName",
					"transitionType"
				],
				"members": {
					"pipelineName": {},
					"stageName": {},
					"transitionType": {}
				}
			}
		},
		"GetJobDetails": {
			"input": {
				"type": "structure",
				"required": [
					"jobId"
				],
				"members": {
					"jobId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"jobDetails": {
						"type": "structure",
						"members": {
							"id": {},
							"data": {
								"shape": "S1x"
							},
							"accountId": {}
						}
					}
				}
			}
		},
		"GetPipeline": {
			"input": {
				"type": "structure",
				"required": [
					"name"
				],
				"members": {
					"name": {},
					"version": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"pipeline": {
						"shape": "Sv"
					}
				}
			}
		},
		"GetPipelineExecution": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineName",
					"pipelineExecutionId"
				],
				"members": {
					"pipelineName": {},
					"pipelineExecutionId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"pipelineExecution": {
						"type": "structure",
						"members": {
							"pipelineName": {},
							"pipelineVersion": {
								"type": "integer"
							},
							"pipelineExecutionId": {},
							"status": {},
							"artifactRevisions": {
								"type": "list",
								"member": {
									"type": "structure",
									"members": {
										"name": {},
										"revisionId": {},
										"revisionChangeIdentifier": {},
										"revisionSummary": {},
										"created": {
											"type": "timestamp"
										},
										"revisionUrl": {}
									}
								}
							}
						}
					}
				}
			}
		},
		"GetPipelineState": {
			"input": {
				"type": "structure",
				"required": [
					"name"
				],
				"members": {
					"name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"pipelineName": {},
					"pipelineVersion": {
						"type": "integer"
					},
					"stageStates": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"stageName": {},
								"inboundTransitionState": {
									"type": "structure",
									"members": {
										"enabled": {
											"type": "boolean"
										},
										"lastChangedBy": {},
										"lastChangedAt": {
											"type": "timestamp"
										},
										"disabledReason": {}
									}
								},
								"actionStates": {
									"type": "list",
									"member": {
										"type": "structure",
										"members": {
											"actionName": {},
											"currentRevision": {
												"shape": "S32"
											},
											"latestExecution": {
												"type": "structure",
												"members": {
													"status": {},
													"summary": {},
													"lastStatusChange": {
														"type": "timestamp"
													},
													"token": {},
													"lastUpdatedBy": {},
													"externalExecutionId": {},
													"externalExecutionUrl": {},
													"percentComplete": {
														"type": "integer"
													},
													"errorDetails": {
														"type": "structure",
														"members": {
															"code": {},
															"message": {}
														}
													}
												}
											},
											"entityUrl": {},
											"revisionUrl": {}
										}
									}
								},
								"latestExecution": {
									"type": "structure",
									"required": [
										"pipelineExecutionId",
										"status"
									],
									"members": {
										"pipelineExecutionId": {},
										"status": {}
									}
								}
							}
						}
					},
					"created": {
						"type": "timestamp"
					},
					"updated": {
						"type": "timestamp"
					}
				}
			}
		},
		"GetThirdPartyJobDetails": {
			"input": {
				"type": "structure",
				"required": [
					"jobId",
					"clientToken"
				],
				"members": {
					"jobId": {},
					"clientToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"jobDetails": {
						"type": "structure",
						"members": {
							"id": {},
							"data": {
								"type": "structure",
								"members": {
									"actionTypeId": {
										"shape": "Ss"
									},
									"actionConfiguration": {
										"shape": "S1y"
									},
									"pipelineContext": {
										"shape": "S1z"
									},
									"inputArtifacts": {
										"shape": "S22"
									},
									"outputArtifacts": {
										"shape": "S22"
									},
									"artifactCredentials": {
										"shape": "S2a"
									},
									"continuationToken": {},
									"encryptionKey": {
										"shape": "S11"
									}
								}
							},
							"nonce": {}
						}
					}
				}
			}
		},
		"ListActionTypes": {
			"input": {
				"type": "structure",
				"members": {
					"actionOwnerFilter": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"actionTypes"
				],
				"members": {
					"actionTypes": {
						"type": "list",
						"member": {
							"shape": "Sr"
						}
					},
					"nextToken": {}
				}
			}
		},
		"ListPipelines": {
			"input": {
				"type": "structure",
				"members": {
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"pipelines": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"name": {},
								"version": {
									"type": "integer"
								},
								"created": {
									"type": "timestamp"
								},
								"updated": {
									"type": "timestamp"
								}
							}
						}
					},
					"nextToken": {}
				}
			}
		},
		"PollForJobs": {
			"input": {
				"type": "structure",
				"required": [
					"actionTypeId"
				],
				"members": {
					"actionTypeId": {
						"shape": "Ss"
					},
					"maxBatchSize": {
						"type": "integer"
					},
					"queryParam": {
						"type": "map",
						"key": {},
						"value": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"jobs": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"id": {},
								"data": {
									"shape": "S1x"
								},
								"nonce": {},
								"accountId": {}
							}
						}
					}
				}
			}
		},
		"PollForThirdPartyJobs": {
			"input": {
				"type": "structure",
				"required": [
					"actionTypeId"
				],
				"members": {
					"actionTypeId": {
						"shape": "Ss"
					},
					"maxBatchSize": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"jobs": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"clientId": {},
								"jobId": {}
							}
						}
					}
				}
			}
		},
		"PutActionRevision": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineName",
					"stageName",
					"actionName",
					"actionRevision"
				],
				"members": {
					"pipelineName": {},
					"stageName": {},
					"actionName": {},
					"actionRevision": {
						"shape": "S32"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"newRevision": {
						"type": "boolean"
					},
					"pipelineExecutionId": {}
				}
			}
		},
		"PutApprovalResult": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineName",
					"stageName",
					"actionName",
					"result",
					"token"
				],
				"members": {
					"pipelineName": {},
					"stageName": {},
					"actionName": {},
					"result": {
						"type": "structure",
						"required": [
							"summary",
							"status"
						],
						"members": {
							"summary": {},
							"status": {}
						}
					},
					"token": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"approvedAt": {
						"type": "timestamp"
					}
				}
			}
		},
		"PutJobFailureResult": {
			"input": {
				"type": "structure",
				"required": [
					"jobId",
					"failureDetails"
				],
				"members": {
					"jobId": {},
					"failureDetails": {
						"shape": "S4c"
					}
				}
			}
		},
		"PutJobSuccessResult": {
			"input": {
				"type": "structure",
				"required": [
					"jobId"
				],
				"members": {
					"jobId": {},
					"currentRevision": {
						"shape": "S4f"
					},
					"continuationToken": {},
					"executionDetails": {
						"shape": "S4h"
					}
				}
			}
		},
		"PutThirdPartyJobFailureResult": {
			"input": {
				"type": "structure",
				"required": [
					"jobId",
					"clientToken",
					"failureDetails"
				],
				"members": {
					"jobId": {},
					"clientToken": {},
					"failureDetails": {
						"shape": "S4c"
					}
				}
			}
		},
		"PutThirdPartyJobSuccessResult": {
			"input": {
				"type": "structure",
				"required": [
					"jobId",
					"clientToken"
				],
				"members": {
					"jobId": {},
					"clientToken": {},
					"currentRevision": {
						"shape": "S4f"
					},
					"continuationToken": {},
					"executionDetails": {
						"shape": "S4h"
					}
				}
			}
		},
		"RetryStageExecution": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineName",
					"stageName",
					"pipelineExecutionId",
					"retryMode"
				],
				"members": {
					"pipelineName": {},
					"stageName": {},
					"pipelineExecutionId": {},
					"retryMode": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"pipelineExecutionId": {}
				}
			}
		},
		"StartPipelineExecution": {
			"input": {
				"type": "structure",
				"required": [
					"name"
				],
				"members": {
					"name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"pipelineExecutionId": {}
				}
			}
		},
		"UpdatePipeline": {
			"input": {
				"type": "structure",
				"required": [
					"pipeline"
				],
				"members": {
					"pipeline": {
						"shape": "Sv"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"pipeline": {
						"shape": "Sv"
					}
				}
			}
		}
	},
	"shapes": {
		"Se": {
			"type": "structure",
			"members": {
				"thirdPartyConfigurationUrl": {},
				"entityUrlTemplate": {},
				"executionUrlTemplate": {},
				"revisionUrlTemplate": {}
			}
		},
		"Sh": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"name",
					"required",
					"key",
					"secret"
				],
				"members": {
					"name": {},
					"required": {
						"type": "boolean"
					},
					"key": {
						"type": "boolean"
					},
					"secret": {
						"type": "boolean"
					},
					"queryable": {
						"type": "boolean"
					},
					"description": {},
					"type": {}
				}
			}
		},
		"Sn": {
			"type": "structure",
			"required": [
				"minimumCount",
				"maximumCount"
			],
			"members": {
				"minimumCount": {
					"type": "integer"
				},
				"maximumCount": {
					"type": "integer"
				}
			}
		},
		"Sr": {
			"type": "structure",
			"required": [
				"id",
				"inputArtifactDetails",
				"outputArtifactDetails"
			],
			"members": {
				"id": {
					"shape": "Ss"
				},
				"settings": {
					"shape": "Se"
				},
				"actionConfigurationProperties": {
					"shape": "Sh"
				},
				"inputArtifactDetails": {
					"shape": "Sn"
				},
				"outputArtifactDetails": {
					"shape": "Sn"
				}
			}
		},
		"Ss": {
			"type": "structure",
			"required": [
				"category",
				"owner",
				"provider",
				"version"
			],
			"members": {
				"category": {},
				"owner": {},
				"provider": {},
				"version": {}
			}
		},
		"Sv": {
			"type": "structure",
			"required": [
				"name",
				"roleArn",
				"artifactStore",
				"stages"
			],
			"members": {
				"name": {},
				"roleArn": {},
				"artifactStore": {
					"type": "structure",
					"required": [
						"type",
						"location"
					],
					"members": {
						"type": {},
						"location": {},
						"encryptionKey": {
							"shape": "S11"
						}
					}
				},
				"stages": {
					"type": "list",
					"member": {
						"type": "structure",
						"required": [
							"name",
							"actions"
						],
						"members": {
							"name": {},
							"blockers": {
								"type": "list",
								"member": {
									"type": "structure",
									"required": [
										"name",
										"type"
									],
									"members": {
										"name": {},
										"type": {}
									}
								}
							},
							"actions": {
								"type": "list",
								"member": {
									"type": "structure",
									"required": [
										"name",
										"actionTypeId"
									],
									"members": {
										"name": {},
										"actionTypeId": {
											"shape": "Ss"
										},
										"runOrder": {
											"type": "integer"
										},
										"configuration": {
											"shape": "S1f"
										},
										"outputArtifacts": {
											"type": "list",
											"member": {
												"type": "structure",
												"required": [
													"name"
												],
												"members": {
													"name": {}
												}
											}
										},
										"inputArtifacts": {
											"type": "list",
											"member": {
												"type": "structure",
												"required": [
													"name"
												],
												"members": {
													"name": {}
												}
											}
										},
										"roleArn": {}
									}
								}
							}
						}
					}
				},
				"version": {
					"type": "integer"
				}
			}
		},
		"S11": {
			"type": "structure",
			"required": [
				"id",
				"type"
			],
			"members": {
				"id": {},
				"type": {}
			}
		},
		"S1f": {
			"type": "map",
			"key": {},
			"value": {}
		},
		"S1x": {
			"type": "structure",
			"members": {
				"actionTypeId": {
					"shape": "Ss"
				},
				"actionConfiguration": {
					"shape": "S1y"
				},
				"pipelineContext": {
					"shape": "S1z"
				},
				"inputArtifacts": {
					"shape": "S22"
				},
				"outputArtifacts": {
					"shape": "S22"
				},
				"artifactCredentials": {
					"shape": "S2a"
				},
				"continuationToken": {},
				"encryptionKey": {
					"shape": "S11"
				}
			}
		},
		"S1y": {
			"type": "structure",
			"members": {
				"configuration": {
					"shape": "S1f"
				}
			}
		},
		"S1z": {
			"type": "structure",
			"members": {
				"pipelineName": {},
				"stage": {
					"type": "structure",
					"members": {
						"name": {}
					}
				},
				"action": {
					"type": "structure",
					"members": {
						"name": {}
					}
				}
			}
		},
		"S22": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"name": {},
					"revision": {},
					"location": {
						"type": "structure",
						"members": {
							"type": {},
							"s3Location": {
								"type": "structure",
								"required": [
									"bucketName",
									"objectKey"
								],
								"members": {
									"bucketName": {},
									"objectKey": {}
								}
							}
						}
					}
				}
			}
		},
		"S2a": {
			"type": "structure",
			"required": [
				"accessKeyId",
				"secretAccessKey",
				"sessionToken"
			],
			"members": {
				"accessKeyId": {},
				"secretAccessKey": {},
				"sessionToken": {}
			},
			"sensitive": true
		},
		"S32": {
			"type": "structure",
			"required": [
				"revisionId",
				"revisionChangeId",
				"created"
			],
			"members": {
				"revisionId": {},
				"revisionChangeId": {},
				"created": {
					"type": "timestamp"
				}
			}
		},
		"S4c": {
			"type": "structure",
			"required": [
				"type",
				"message"
			],
			"members": {
				"type": {},
				"message": {},
				"externalExecutionId": {}
			}
		},
		"S4f": {
			"type": "structure",
			"required": [
				"revision",
				"changeIdentifier"
			],
			"members": {
				"revision": {},
				"changeIdentifier": {},
				"created": {
					"type": "timestamp"
				},
				"revisionSummary": {}
			}
		},
		"S4h": {
			"type": "structure",
			"members": {
				"summary": {},
				"externalExecutionId": {},
				"percentComplete": {
					"type": "integer"
				}
			}
		}
	}
};

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2014-06-30",
		"endpointPrefix": "cognito-identity",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceFullName": "Amazon Cognito Identity",
		"signatureVersion": "v4",
		"targetPrefix": "AWSCognitoIdentityService",
		"uid": "cognito-identity-2014-06-30"
	},
	"operations": {
		"CreateIdentityPool": {
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolName",
					"AllowUnauthenticatedIdentities"
				],
				"members": {
					"IdentityPoolName": {},
					"AllowUnauthenticatedIdentities": {
						"type": "boolean"
					},
					"SupportedLoginProviders": {
						"shape": "S4"
					},
					"DeveloperProviderName": {},
					"OpenIdConnectProviderARNs": {
						"shape": "S8"
					},
					"CognitoIdentityProviders": {
						"shape": "Sa"
					},
					"SamlProviderARNs": {
						"shape": "Sf"
					}
				}
			},
			"output": {
				"shape": "Sg"
			}
		},
		"DeleteIdentities": {
			"input": {
				"type": "structure",
				"required": [
					"IdentityIdsToDelete"
				],
				"members": {
					"IdentityIdsToDelete": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UnprocessedIdentityIds": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"IdentityId": {},
								"ErrorCode": {}
							}
						}
					}
				}
			}
		},
		"DeleteIdentityPool": {
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId"
				],
				"members": {
					"IdentityPoolId": {}
				}
			}
		},
		"DescribeIdentity": {
			"input": {
				"type": "structure",
				"required": [
					"IdentityId"
				],
				"members": {
					"IdentityId": {}
				}
			},
			"output": {
				"shape": "Sr"
			}
		},
		"DescribeIdentityPool": {
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId"
				],
				"members": {
					"IdentityPoolId": {}
				}
			},
			"output": {
				"shape": "Sg"
			}
		},
		"GetCredentialsForIdentity": {
			"input": {
				"type": "structure",
				"required": [
					"IdentityId"
				],
				"members": {
					"IdentityId": {},
					"Logins": {
						"shape": "Sw"
					},
					"CustomRoleArn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IdentityId": {},
					"Credentials": {
						"type": "structure",
						"members": {
							"AccessKeyId": {},
							"SecretKey": {},
							"SessionToken": {},
							"Expiration": {
								"type": "timestamp"
							}
						}
					}
				}
			}
		},
		"GetId": {
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId"
				],
				"members": {
					"AccountId": {},
					"IdentityPoolId": {},
					"Logins": {
						"shape": "Sw"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IdentityId": {}
				}
			}
		},
		"GetIdentityPoolRoles": {
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId"
				],
				"members": {
					"IdentityPoolId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IdentityPoolId": {},
					"Roles": {
						"shape": "S18"
					},
					"RoleMappings": {
						"shape": "S1a"
					}
				}
			}
		},
		"GetOpenIdToken": {
			"input": {
				"type": "structure",
				"required": [
					"IdentityId"
				],
				"members": {
					"IdentityId": {},
					"Logins": {
						"shape": "Sw"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IdentityId": {},
					"Token": {}
				}
			}
		},
		"GetOpenIdTokenForDeveloperIdentity": {
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId",
					"Logins"
				],
				"members": {
					"IdentityPoolId": {},
					"IdentityId": {},
					"Logins": {
						"shape": "Sw"
					},
					"TokenDuration": {
						"type": "long"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IdentityId": {},
					"Token": {}
				}
			}
		},
		"ListIdentities": {
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId",
					"MaxResults"
				],
				"members": {
					"IdentityPoolId": {},
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {},
					"HideDisabled": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IdentityPoolId": {},
					"Identities": {
						"type": "list",
						"member": {
							"shape": "Sr"
						}
					},
					"NextToken": {}
				}
			}
		},
		"ListIdentityPools": {
			"input": {
				"type": "structure",
				"required": [
					"MaxResults"
				],
				"members": {
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IdentityPools": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"IdentityPoolId": {},
								"IdentityPoolName": {}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"LookupDeveloperIdentity": {
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId"
				],
				"members": {
					"IdentityPoolId": {},
					"IdentityId": {},
					"DeveloperUserIdentifier": {},
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IdentityId": {},
					"DeveloperUserIdentifierList": {
						"type": "list",
						"member": {}
					},
					"NextToken": {}
				}
			}
		},
		"MergeDeveloperIdentities": {
			"input": {
				"type": "structure",
				"required": [
					"SourceUserIdentifier",
					"DestinationUserIdentifier",
					"DeveloperProviderName",
					"IdentityPoolId"
				],
				"members": {
					"SourceUserIdentifier": {},
					"DestinationUserIdentifier": {},
					"DeveloperProviderName": {},
					"IdentityPoolId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IdentityId": {}
				}
			}
		},
		"SetIdentityPoolRoles": {
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId",
					"Roles"
				],
				"members": {
					"IdentityPoolId": {},
					"Roles": {
						"shape": "S18"
					},
					"RoleMappings": {
						"shape": "S1a"
					}
				}
			}
		},
		"UnlinkDeveloperIdentity": {
			"input": {
				"type": "structure",
				"required": [
					"IdentityId",
					"IdentityPoolId",
					"DeveloperProviderName",
					"DeveloperUserIdentifier"
				],
				"members": {
					"IdentityId": {},
					"IdentityPoolId": {},
					"DeveloperProviderName": {},
					"DeveloperUserIdentifier": {}
				}
			}
		},
		"UnlinkIdentity": {
			"input": {
				"type": "structure",
				"required": [
					"IdentityId",
					"Logins",
					"LoginsToRemove"
				],
				"members": {
					"IdentityId": {},
					"Logins": {
						"shape": "Sw"
					},
					"LoginsToRemove": {
						"shape": "Ss"
					}
				}
			}
		},
		"UpdateIdentityPool": {
			"input": {
				"shape": "Sg"
			},
			"output": {
				"shape": "Sg"
			}
		}
	},
	"shapes": {
		"S4": {
			"type": "map",
			"key": {},
			"value": {}
		},
		"S8": {
			"type": "list",
			"member": {}
		},
		"Sa": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"ProviderName": {},
					"ClientId": {},
					"ServerSideTokenCheck": {
						"type": "boolean"
					}
				}
			}
		},
		"Sf": {
			"type": "list",
			"member": {}
		},
		"Sg": {
			"type": "structure",
			"required": [
				"IdentityPoolId",
				"IdentityPoolName",
				"AllowUnauthenticatedIdentities"
			],
			"members": {
				"IdentityPoolId": {},
				"IdentityPoolName": {},
				"AllowUnauthenticatedIdentities": {
					"type": "boolean"
				},
				"SupportedLoginProviders": {
					"shape": "S4"
				},
				"DeveloperProviderName": {},
				"OpenIdConnectProviderARNs": {
					"shape": "S8"
				},
				"CognitoIdentityProviders": {
					"shape": "Sa"
				},
				"SamlProviderARNs": {
					"shape": "Sf"
				}
			}
		},
		"Sr": {
			"type": "structure",
			"members": {
				"IdentityId": {},
				"Logins": {
					"shape": "Ss"
				},
				"CreationDate": {
					"type": "timestamp"
				},
				"LastModifiedDate": {
					"type": "timestamp"
				}
			}
		},
		"Ss": {
			"type": "list",
			"member": {}
		},
		"Sw": {
			"type": "map",
			"key": {},
			"value": {}
		},
		"S18": {
			"type": "map",
			"key": {},
			"value": {}
		},
		"S1a": {
			"type": "map",
			"key": {},
			"value": {
				"type": "structure",
				"required": [
					"Type"
				],
				"members": {
					"Type": {},
					"AmbiguousRoleResolution": {},
					"RulesConfiguration": {
						"type": "structure",
						"required": [
							"Rules"
						],
						"members": {
							"Rules": {
								"type": "list",
								"member": {
									"type": "structure",
									"required": [
										"Claim",
										"MatchType",
										"Value",
										"RoleARN"
									],
									"members": {
										"Claim": {},
										"MatchType": {},
										"Value": {},
										"RoleARN": {}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {}
};

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2016-04-18",
		"endpointPrefix": "cognito-idp",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceFullName": "Amazon Cognito Identity Provider",
		"signatureVersion": "v4",
		"targetPrefix": "AWSCognitoIdentityProviderService",
		"uid": "cognito-idp-2016-04-18"
	},
	"operations": {
		"AddCustomAttributes": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"CustomAttributes"
				],
				"members": {
					"UserPoolId": {},
					"CustomAttributes": {
						"type": "list",
						"member": {
							"shape": "S4"
						}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"AdminAddUserToGroup": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"Username",
					"GroupName"
				],
				"members": {
					"UserPoolId": {},
					"Username": {
						"shape": "Sd"
					},
					"GroupName": {}
				}
			}
		},
		"AdminConfirmSignUp": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"Username"
				],
				"members": {
					"UserPoolId": {},
					"Username": {
						"shape": "Sd"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"AdminCreateUser": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"Username"
				],
				"members": {
					"UserPoolId": {},
					"Username": {
						"shape": "Sd"
					},
					"UserAttributes": {
						"shape": "Si"
					},
					"ValidationData": {
						"shape": "Si"
					},
					"TemporaryPassword": {
						"shape": "Sm"
					},
					"ForceAliasCreation": {
						"type": "boolean"
					},
					"MessageAction": {},
					"DesiredDeliveryMediums": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"User": {
						"shape": "Ss"
					}
				}
			}
		},
		"AdminDeleteUser": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"Username"
				],
				"members": {
					"UserPoolId": {},
					"Username": {
						"shape": "Sd"
					}
				}
			}
		},
		"AdminDeleteUserAttributes": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"Username",
					"UserAttributeNames"
				],
				"members": {
					"UserPoolId": {},
					"Username": {
						"shape": "Sd"
					},
					"UserAttributeNames": {
						"shape": "Sz"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"AdminDisableUser": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"Username"
				],
				"members": {
					"UserPoolId": {},
					"Username": {
						"shape": "Sd"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"AdminEnableUser": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"Username"
				],
				"members": {
					"UserPoolId": {},
					"Username": {
						"shape": "Sd"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"AdminForgetDevice": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"Username",
					"DeviceKey"
				],
				"members": {
					"UserPoolId": {},
					"Username": {
						"shape": "Sd"
					},
					"DeviceKey": {}
				}
			}
		},
		"AdminGetDevice": {
			"input": {
				"type": "structure",
				"required": [
					"DeviceKey",
					"UserPoolId",
					"Username"
				],
				"members": {
					"DeviceKey": {},
					"UserPoolId": {},
					"Username": {
						"shape": "Sd"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"Device"
				],
				"members": {
					"Device": {
						"shape": "S19"
					}
				}
			}
		},
		"AdminGetUser": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"Username"
				],
				"members": {
					"UserPoolId": {},
					"Username": {
						"shape": "Sd"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"Username"
				],
				"members": {
					"Username": {
						"shape": "Sd"
					},
					"UserAttributes": {
						"shape": "Si"
					},
					"UserCreateDate": {
						"type": "timestamp"
					},
					"UserLastModifiedDate": {
						"type": "timestamp"
					},
					"Enabled": {
						"type": "boolean"
					},
					"UserStatus": {},
					"MFAOptions": {
						"shape": "Sv"
					}
				}
			}
		},
		"AdminInitiateAuth": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"ClientId",
					"AuthFlow"
				],
				"members": {
					"UserPoolId": {},
					"ClientId": {
						"shape": "S1d"
					},
					"AuthFlow": {},
					"AuthParameters": {
						"shape": "S1f"
					},
					"ClientMetadata": {
						"shape": "S1g"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ChallengeName": {},
					"Session": {},
					"ChallengeParameters": {
						"shape": "S1k"
					},
					"AuthenticationResult": {
						"shape": "S1l"
					}
				}
			}
		},
		"AdminListDevices": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"Username"
				],
				"members": {
					"UserPoolId": {},
					"Username": {
						"shape": "Sd"
					},
					"Limit": {
						"type": "integer"
					},
					"PaginationToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Devices": {
						"shape": "S1t"
					},
					"PaginationToken": {}
				}
			}
		},
		"AdminListGroupsForUser": {
			"input": {
				"type": "structure",
				"required": [
					"Username",
					"UserPoolId"
				],
				"members": {
					"Username": {
						"shape": "Sd"
					},
					"UserPoolId": {},
					"Limit": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Groups": {
						"shape": "S1x"
					},
					"NextToken": {}
				}
			}
		},
		"AdminRemoveUserFromGroup": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"Username",
					"GroupName"
				],
				"members": {
					"UserPoolId": {},
					"Username": {
						"shape": "Sd"
					},
					"GroupName": {}
				}
			}
		},
		"AdminResetUserPassword": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"Username"
				],
				"members": {
					"UserPoolId": {},
					"Username": {
						"shape": "Sd"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"AdminRespondToAuthChallenge": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"ClientId",
					"ChallengeName"
				],
				"members": {
					"UserPoolId": {},
					"ClientId": {
						"shape": "S1d"
					},
					"ChallengeName": {},
					"ChallengeResponses": {
						"shape": "S26"
					},
					"Session": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ChallengeName": {},
					"Session": {},
					"ChallengeParameters": {
						"shape": "S1k"
					},
					"AuthenticationResult": {
						"shape": "S1l"
					}
				}
			}
		},
		"AdminSetUserSettings": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"Username",
					"MFAOptions"
				],
				"members": {
					"UserPoolId": {},
					"Username": {
						"shape": "Sd"
					},
					"MFAOptions": {
						"shape": "Sv"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"AdminUpdateDeviceStatus": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"Username",
					"DeviceKey"
				],
				"members": {
					"UserPoolId": {},
					"Username": {
						"shape": "Sd"
					},
					"DeviceKey": {},
					"DeviceRememberedStatus": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"AdminUpdateUserAttributes": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"Username",
					"UserAttributes"
				],
				"members": {
					"UserPoolId": {},
					"Username": {
						"shape": "Sd"
					},
					"UserAttributes": {
						"shape": "Si"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"AdminUserGlobalSignOut": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"Username"
				],
				"members": {
					"UserPoolId": {},
					"Username": {
						"shape": "Sd"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"ChangePassword": {
			"input": {
				"type": "structure",
				"required": [
					"PreviousPassword",
					"ProposedPassword"
				],
				"members": {
					"PreviousPassword": {
						"shape": "Sm"
					},
					"ProposedPassword": {
						"shape": "Sm"
					},
					"AccessToken": {
						"shape": "S1m"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			},
			"authtype": "none"
		},
		"ConfirmDevice": {
			"input": {
				"type": "structure",
				"required": [
					"AccessToken",
					"DeviceKey"
				],
				"members": {
					"AccessToken": {
						"shape": "S1m"
					},
					"DeviceKey": {},
					"DeviceSecretVerifierConfig": {
						"type": "structure",
						"members": {
							"PasswordVerifier": {},
							"Salt": {}
						}
					},
					"DeviceName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UserConfirmationNecessary": {
						"type": "boolean"
					}
				}
			}
		},
		"ConfirmForgotPassword": {
			"input": {
				"type": "structure",
				"required": [
					"ClientId",
					"Username",
					"ConfirmationCode",
					"Password"
				],
				"members": {
					"ClientId": {
						"shape": "S1d"
					},
					"SecretHash": {
						"shape": "S2o"
					},
					"Username": {
						"shape": "Sd"
					},
					"ConfirmationCode": {},
					"Password": {
						"shape": "Sm"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			},
			"authtype": "none"
		},
		"ConfirmSignUp": {
			"input": {
				"type": "structure",
				"required": [
					"ClientId",
					"Username",
					"ConfirmationCode"
				],
				"members": {
					"ClientId": {
						"shape": "S1d"
					},
					"SecretHash": {
						"shape": "S2o"
					},
					"Username": {
						"shape": "Sd"
					},
					"ConfirmationCode": {},
					"ForceAliasCreation": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			},
			"authtype": "none"
		},
		"CreateGroup": {
			"input": {
				"type": "structure",
				"required": [
					"GroupName",
					"UserPoolId"
				],
				"members": {
					"GroupName": {},
					"UserPoolId": {},
					"Description": {},
					"RoleArn": {},
					"Precedence": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Group": {
						"shape": "S1y"
					}
				}
			}
		},
		"CreateUserImportJob": {
			"input": {
				"type": "structure",
				"required": [
					"JobName",
					"UserPoolId",
					"CloudWatchLogsRoleArn"
				],
				"members": {
					"JobName": {},
					"UserPoolId": {},
					"CloudWatchLogsRoleArn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UserImportJob": {
						"shape": "S2y"
					}
				}
			}
		},
		"CreateUserPool": {
			"input": {
				"type": "structure",
				"required": [
					"PoolName"
				],
				"members": {
					"PoolName": {},
					"Policies": {
						"shape": "S36"
					},
					"LambdaConfig": {
						"shape": "S39"
					},
					"AutoVerifiedAttributes": {
						"shape": "S3a"
					},
					"AliasAttributes": {
						"shape": "S3c"
					},
					"SmsVerificationMessage": {},
					"EmailVerificationMessage": {},
					"EmailVerificationSubject": {},
					"SmsAuthenticationMessage": {},
					"MfaConfiguration": {},
					"DeviceConfiguration": {
						"shape": "S3i"
					},
					"EmailConfiguration": {
						"shape": "S3j"
					},
					"SmsConfiguration": {
						"shape": "S3l"
					},
					"UserPoolTags": {
						"shape": "S3m"
					},
					"AdminCreateUserConfig": {
						"shape": "S3n"
					},
					"Schema": {
						"shape": "S3q"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UserPool": {
						"shape": "S3s"
					}
				}
			}
		},
		"CreateUserPoolClient": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"ClientName"
				],
				"members": {
					"UserPoolId": {},
					"ClientName": {},
					"GenerateSecret": {
						"type": "boolean"
					},
					"RefreshTokenValidity": {
						"type": "integer"
					},
					"ReadAttributes": {
						"shape": "S3y"
					},
					"WriteAttributes": {
						"shape": "S3y"
					},
					"ExplicitAuthFlows": {
						"shape": "S40"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UserPoolClient": {
						"shape": "S43"
					}
				}
			}
		},
		"DeleteGroup": {
			"input": {
				"type": "structure",
				"required": [
					"GroupName",
					"UserPoolId"
				],
				"members": {
					"GroupName": {},
					"UserPoolId": {}
				}
			}
		},
		"DeleteUser": {
			"input": {
				"type": "structure",
				"members": {
					"AccessToken": {
						"shape": "S1m"
					}
				}
			},
			"authtype": "none"
		},
		"DeleteUserAttributes": {
			"input": {
				"type": "structure",
				"required": [
					"UserAttributeNames"
				],
				"members": {
					"UserAttributeNames": {
						"shape": "Sz"
					},
					"AccessToken": {
						"shape": "S1m"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			},
			"authtype": "none"
		},
		"DeleteUserPool": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId"
				],
				"members": {
					"UserPoolId": {}
				}
			}
		},
		"DeleteUserPoolClient": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"ClientId"
				],
				"members": {
					"UserPoolId": {},
					"ClientId": {
						"shape": "S1d"
					}
				}
			}
		},
		"DescribeUserImportJob": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"JobId"
				],
				"members": {
					"UserPoolId": {},
					"JobId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UserImportJob": {
						"shape": "S2y"
					}
				}
			}
		},
		"DescribeUserPool": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId"
				],
				"members": {
					"UserPoolId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UserPool": {
						"shape": "S3s"
					}
				}
			}
		},
		"DescribeUserPoolClient": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"ClientId"
				],
				"members": {
					"UserPoolId": {},
					"ClientId": {
						"shape": "S1d"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UserPoolClient": {
						"shape": "S43"
					}
				}
			}
		},
		"ForgetDevice": {
			"input": {
				"type": "structure",
				"required": [
					"DeviceKey"
				],
				"members": {
					"AccessToken": {
						"shape": "S1m"
					},
					"DeviceKey": {}
				}
			}
		},
		"ForgotPassword": {
			"input": {
				"type": "structure",
				"required": [
					"ClientId",
					"Username"
				],
				"members": {
					"ClientId": {
						"shape": "S1d"
					},
					"SecretHash": {
						"shape": "S2o"
					},
					"Username": {
						"shape": "Sd"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"CodeDeliveryDetails": {
						"shape": "S4k"
					}
				}
			},
			"authtype": "none"
		},
		"GetCSVHeader": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId"
				],
				"members": {
					"UserPoolId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UserPoolId": {},
					"CSVHeader": {
						"type": "list",
						"member": {}
					}
				}
			}
		},
		"GetDevice": {
			"input": {
				"type": "structure",
				"required": [
					"DeviceKey"
				],
				"members": {
					"DeviceKey": {},
					"AccessToken": {
						"shape": "S1m"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"Device"
				],
				"members": {
					"Device": {
						"shape": "S19"
					}
				}
			}
		},
		"GetGroup": {
			"input": {
				"type": "structure",
				"required": [
					"GroupName",
					"UserPoolId"
				],
				"members": {
					"GroupName": {},
					"UserPoolId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Group": {
						"shape": "S1y"
					}
				}
			}
		},
		"GetUser": {
			"input": {
				"type": "structure",
				"members": {
					"AccessToken": {
						"shape": "S1m"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"Username",
					"UserAttributes"
				],
				"members": {
					"Username": {
						"shape": "Sd"
					},
					"UserAttributes": {
						"shape": "Si"
					},
					"MFAOptions": {
						"shape": "Sv"
					}
				}
			},
			"authtype": "none"
		},
		"GetUserAttributeVerificationCode": {
			"input": {
				"type": "structure",
				"required": [
					"AttributeName"
				],
				"members": {
					"AccessToken": {
						"shape": "S1m"
					},
					"AttributeName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"CodeDeliveryDetails": {
						"shape": "S4k"
					}
				}
			},
			"authtype": "none"
		},
		"GlobalSignOut": {
			"input": {
				"type": "structure",
				"members": {
					"AccessToken": {
						"shape": "S1m"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"InitiateAuth": {
			"input": {
				"type": "structure",
				"required": [
					"AuthFlow",
					"ClientId"
				],
				"members": {
					"AuthFlow": {},
					"AuthParameters": {
						"shape": "S1f"
					},
					"ClientMetadata": {
						"shape": "S1g"
					},
					"ClientId": {
						"shape": "S1d"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ChallengeName": {},
					"Session": {},
					"ChallengeParameters": {
						"shape": "S1k"
					},
					"AuthenticationResult": {
						"shape": "S1l"
					}
				}
			}
		},
		"ListDevices": {
			"input": {
				"type": "structure",
				"required": [
					"AccessToken"
				],
				"members": {
					"AccessToken": {
						"shape": "S1m"
					},
					"Limit": {
						"type": "integer"
					},
					"PaginationToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Devices": {
						"shape": "S1t"
					},
					"PaginationToken": {}
				}
			}
		},
		"ListGroups": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId"
				],
				"members": {
					"UserPoolId": {},
					"Limit": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Groups": {
						"shape": "S1x"
					},
					"NextToken": {}
				}
			}
		},
		"ListUserImportJobs": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"MaxResults"
				],
				"members": {
					"UserPoolId": {},
					"MaxResults": {
						"type": "integer"
					},
					"PaginationToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UserImportJobs": {
						"type": "list",
						"member": {
							"shape": "S2y"
						}
					},
					"PaginationToken": {}
				}
			}
		},
		"ListUserPoolClients": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId"
				],
				"members": {
					"UserPoolId": {},
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UserPoolClients": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"ClientId": {
									"shape": "S1d"
								},
								"UserPoolId": {},
								"ClientName": {}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"ListUserPools": {
			"input": {
				"type": "structure",
				"required": [
					"MaxResults"
				],
				"members": {
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UserPools": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"Id": {},
								"Name": {},
								"LambdaConfig": {
									"shape": "S39"
								},
								"Status": {},
								"LastModifiedDate": {
									"type": "timestamp"
								},
								"CreationDate": {
									"type": "timestamp"
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"ListUsers": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId"
				],
				"members": {
					"UserPoolId": {},
					"AttributesToGet": {
						"type": "list",
						"member": {}
					},
					"Limit": {
						"type": "integer"
					},
					"PaginationToken": {},
					"Filter": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Users": {
						"shape": "S5m"
					},
					"PaginationToken": {}
				}
			}
		},
		"ListUsersInGroup": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"GroupName"
				],
				"members": {
					"UserPoolId": {},
					"GroupName": {},
					"Limit": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Users": {
						"shape": "S5m"
					},
					"NextToken": {}
				}
			}
		},
		"ResendConfirmationCode": {
			"input": {
				"type": "structure",
				"required": [
					"ClientId",
					"Username"
				],
				"members": {
					"ClientId": {
						"shape": "S1d"
					},
					"SecretHash": {
						"shape": "S2o"
					},
					"Username": {
						"shape": "Sd"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"CodeDeliveryDetails": {
						"shape": "S4k"
					}
				}
			},
			"authtype": "none"
		},
		"RespondToAuthChallenge": {
			"input": {
				"type": "structure",
				"required": [
					"ClientId",
					"ChallengeName"
				],
				"members": {
					"ClientId": {
						"shape": "S1d"
					},
					"ChallengeName": {},
					"Session": {},
					"ChallengeResponses": {
						"shape": "S26"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ChallengeName": {},
					"Session": {},
					"ChallengeParameters": {
						"shape": "S1k"
					},
					"AuthenticationResult": {
						"shape": "S1l"
					}
				}
			}
		},
		"SetUserSettings": {
			"input": {
				"type": "structure",
				"required": [
					"AccessToken",
					"MFAOptions"
				],
				"members": {
					"AccessToken": {
						"shape": "S1m"
					},
					"MFAOptions": {
						"shape": "Sv"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			},
			"authtype": "none"
		},
		"SignUp": {
			"input": {
				"type": "structure",
				"required": [
					"ClientId",
					"Username",
					"Password"
				],
				"members": {
					"ClientId": {
						"shape": "S1d"
					},
					"SecretHash": {
						"shape": "S2o"
					},
					"Username": {
						"shape": "Sd"
					},
					"Password": {
						"shape": "Sm"
					},
					"UserAttributes": {
						"shape": "Si"
					},
					"ValidationData": {
						"shape": "Si"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UserConfirmed": {
						"type": "boolean"
					},
					"CodeDeliveryDetails": {
						"shape": "S4k"
					}
				}
			},
			"authtype": "none"
		},
		"StartUserImportJob": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"JobId"
				],
				"members": {
					"UserPoolId": {},
					"JobId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UserImportJob": {
						"shape": "S2y"
					}
				}
			}
		},
		"StopUserImportJob": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"JobId"
				],
				"members": {
					"UserPoolId": {},
					"JobId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UserImportJob": {
						"shape": "S2y"
					}
				}
			}
		},
		"UpdateDeviceStatus": {
			"input": {
				"type": "structure",
				"required": [
					"AccessToken",
					"DeviceKey"
				],
				"members": {
					"AccessToken": {
						"shape": "S1m"
					},
					"DeviceKey": {},
					"DeviceRememberedStatus": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"UpdateGroup": {
			"input": {
				"type": "structure",
				"required": [
					"GroupName",
					"UserPoolId"
				],
				"members": {
					"GroupName": {},
					"UserPoolId": {},
					"Description": {},
					"RoleArn": {},
					"Precedence": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Group": {
						"shape": "S1y"
					}
				}
			}
		},
		"UpdateUserAttributes": {
			"input": {
				"type": "structure",
				"required": [
					"UserAttributes"
				],
				"members": {
					"UserAttributes": {
						"shape": "Si"
					},
					"AccessToken": {
						"shape": "S1m"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"CodeDeliveryDetailsList": {
						"type": "list",
						"member": {
							"shape": "S4k"
						}
					}
				}
			},
			"authtype": "none"
		},
		"UpdateUserPool": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId"
				],
				"members": {
					"UserPoolId": {},
					"Policies": {
						"shape": "S36"
					},
					"LambdaConfig": {
						"shape": "S39"
					},
					"AutoVerifiedAttributes": {
						"shape": "S3a"
					},
					"SmsVerificationMessage": {},
					"EmailVerificationMessage": {},
					"EmailVerificationSubject": {},
					"SmsAuthenticationMessage": {},
					"MfaConfiguration": {},
					"DeviceConfiguration": {
						"shape": "S3i"
					},
					"EmailConfiguration": {
						"shape": "S3j"
					},
					"SmsConfiguration": {
						"shape": "S3l"
					},
					"UserPoolTags": {
						"shape": "S3m"
					},
					"AdminCreateUserConfig": {
						"shape": "S3n"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"UpdateUserPoolClient": {
			"input": {
				"type": "structure",
				"required": [
					"UserPoolId",
					"ClientId"
				],
				"members": {
					"UserPoolId": {},
					"ClientId": {
						"shape": "S1d"
					},
					"ClientName": {},
					"RefreshTokenValidity": {
						"type": "integer"
					},
					"ReadAttributes": {
						"shape": "S3y"
					},
					"WriteAttributes": {
						"shape": "S3y"
					},
					"ExplicitAuthFlows": {
						"shape": "S40"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UserPoolClient": {
						"shape": "S43"
					}
				}
			}
		},
		"VerifyUserAttribute": {
			"input": {
				"type": "structure",
				"required": [
					"AttributeName",
					"Code"
				],
				"members": {
					"AccessToken": {
						"shape": "S1m"
					},
					"AttributeName": {},
					"Code": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			},
			"authtype": "none"
		}
	},
	"shapes": {
		"S4": {
			"type": "structure",
			"members": {
				"Name": {},
				"AttributeDataType": {},
				"DeveloperOnlyAttribute": {
					"type": "boolean"
				},
				"Mutable": {
					"type": "boolean"
				},
				"Required": {
					"type": "boolean"
				},
				"NumberAttributeConstraints": {
					"type": "structure",
					"members": {
						"MinValue": {},
						"MaxValue": {}
					}
				},
				"StringAttributeConstraints": {
					"type": "structure",
					"members": {
						"MinLength": {},
						"MaxLength": {}
					}
				}
			}
		},
		"Sd": {
			"type": "string",
			"sensitive": true
		},
		"Si": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"Name"
				],
				"members": {
					"Name": {},
					"Value": {
						"type": "string",
						"sensitive": true
					}
				}
			}
		},
		"Sm": {
			"type": "string",
			"sensitive": true
		},
		"Ss": {
			"type": "structure",
			"members": {
				"Username": {
					"shape": "Sd"
				},
				"Attributes": {
					"shape": "Si"
				},
				"UserCreateDate": {
					"type": "timestamp"
				},
				"UserLastModifiedDate": {
					"type": "timestamp"
				},
				"Enabled": {
					"type": "boolean"
				},
				"UserStatus": {},
				"MFAOptions": {
					"shape": "Sv"
				}
			}
		},
		"Sv": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"DeliveryMedium": {},
					"AttributeName": {}
				}
			}
		},
		"Sz": {
			"type": "list",
			"member": {}
		},
		"S19": {
			"type": "structure",
			"members": {
				"DeviceKey": {},
				"DeviceAttributes": {
					"shape": "Si"
				},
				"DeviceCreateDate": {
					"type": "timestamp"
				},
				"DeviceLastModifiedDate": {
					"type": "timestamp"
				},
				"DeviceLastAuthenticatedDate": {
					"type": "timestamp"
				}
			}
		},
		"S1d": {
			"type": "string",
			"sensitive": true
		},
		"S1f": {
			"type": "map",
			"key": {},
			"value": {}
		},
		"S1g": {
			"type": "map",
			"key": {},
			"value": {}
		},
		"S1k": {
			"type": "map",
			"key": {},
			"value": {}
		},
		"S1l": {
			"type": "structure",
			"members": {
				"AccessToken": {
					"shape": "S1m"
				},
				"ExpiresIn": {
					"type": "integer"
				},
				"TokenType": {},
				"RefreshToken": {
					"shape": "S1m"
				},
				"IdToken": {
					"shape": "S1m"
				},
				"NewDeviceMetadata": {
					"type": "structure",
					"members": {
						"DeviceKey": {},
						"DeviceGroupKey": {}
					}
				}
			}
		},
		"S1m": {
			"type": "string",
			"sensitive": true
		},
		"S1t": {
			"type": "list",
			"member": {
				"shape": "S19"
			}
		},
		"S1x": {
			"type": "list",
			"member": {
				"shape": "S1y"
			}
		},
		"S1y": {
			"type": "structure",
			"members": {
				"GroupName": {},
				"UserPoolId": {},
				"Description": {},
				"RoleArn": {},
				"Precedence": {
					"type": "integer"
				},
				"LastModifiedDate": {
					"type": "timestamp"
				},
				"CreationDate": {
					"type": "timestamp"
				}
			}
		},
		"S26": {
			"type": "map",
			"key": {},
			"value": {}
		},
		"S2o": {
			"type": "string",
			"sensitive": true
		},
		"S2y": {
			"type": "structure",
			"members": {
				"JobName": {},
				"JobId": {},
				"UserPoolId": {},
				"PreSignedUrl": {},
				"CreationDate": {
					"type": "timestamp"
				},
				"StartDate": {
					"type": "timestamp"
				},
				"CompletionDate": {
					"type": "timestamp"
				},
				"Status": {},
				"CloudWatchLogsRoleArn": {},
				"ImportedUsers": {
					"type": "long"
				},
				"SkippedUsers": {
					"type": "long"
				},
				"FailedUsers": {
					"type": "long"
				},
				"CompletionMessage": {}
			}
		},
		"S36": {
			"type": "structure",
			"members": {
				"PasswordPolicy": {
					"type": "structure",
					"members": {
						"MinimumLength": {
							"type": "integer"
						},
						"RequireUppercase": {
							"type": "boolean"
						},
						"RequireLowercase": {
							"type": "boolean"
						},
						"RequireNumbers": {
							"type": "boolean"
						},
						"RequireSymbols": {
							"type": "boolean"
						}
					}
				}
			}
		},
		"S39": {
			"type": "structure",
			"members": {
				"PreSignUp": {},
				"CustomMessage": {},
				"PostConfirmation": {},
				"PreAuthentication": {},
				"PostAuthentication": {},
				"DefineAuthChallenge": {},
				"CreateAuthChallenge": {},
				"VerifyAuthChallengeResponse": {}
			}
		},
		"S3a": {
			"type": "list",
			"member": {}
		},
		"S3c": {
			"type": "list",
			"member": {}
		},
		"S3i": {
			"type": "structure",
			"members": {
				"ChallengeRequiredOnNewDevice": {
					"type": "boolean"
				},
				"DeviceOnlyRememberedOnUserPrompt": {
					"type": "boolean"
				}
			}
		},
		"S3j": {
			"type": "structure",
			"members": {
				"SourceArn": {},
				"ReplyToEmailAddress": {}
			}
		},
		"S3l": {
			"type": "structure",
			"required": [
				"SnsCallerArn"
			],
			"members": {
				"SnsCallerArn": {},
				"ExternalId": {}
			}
		},
		"S3m": {
			"type": "map",
			"key": {},
			"value": {}
		},
		"S3n": {
			"type": "structure",
			"members": {
				"AllowAdminCreateUserOnly": {
					"type": "boolean"
				},
				"UnusedAccountValidityDays": {
					"type": "integer"
				},
				"InviteMessageTemplate": {
					"type": "structure",
					"members": {
						"SMSMessage": {},
						"EmailMessage": {},
						"EmailSubject": {}
					}
				}
			}
		},
		"S3q": {
			"type": "list",
			"member": {
				"shape": "S4"
			}
		},
		"S3s": {
			"type": "structure",
			"members": {
				"Id": {},
				"Name": {},
				"Policies": {
					"shape": "S36"
				},
				"LambdaConfig": {
					"shape": "S39"
				},
				"Status": {},
				"LastModifiedDate": {
					"type": "timestamp"
				},
				"CreationDate": {
					"type": "timestamp"
				},
				"SchemaAttributes": {
					"shape": "S3q"
				},
				"AutoVerifiedAttributes": {
					"shape": "S3a"
				},
				"AliasAttributes": {
					"shape": "S3c"
				},
				"SmsVerificationMessage": {},
				"EmailVerificationMessage": {},
				"EmailVerificationSubject": {},
				"SmsAuthenticationMessage": {},
				"MfaConfiguration": {},
				"DeviceConfiguration": {
					"shape": "S3i"
				},
				"EstimatedNumberOfUsers": {
					"type": "integer"
				},
				"EmailConfiguration": {
					"shape": "S3j"
				},
				"SmsConfiguration": {
					"shape": "S3l"
				},
				"UserPoolTags": {
					"shape": "S3m"
				},
				"SmsConfigurationFailure": {},
				"EmailConfigurationFailure": {},
				"AdminCreateUserConfig": {
					"shape": "S3n"
				}
			}
		},
		"S3y": {
			"type": "list",
			"member": {}
		},
		"S40": {
			"type": "list",
			"member": {}
		},
		"S43": {
			"type": "structure",
			"members": {
				"UserPoolId": {},
				"ClientName": {},
				"ClientId": {
					"shape": "S1d"
				},
				"ClientSecret": {
					"type": "string",
					"sensitive": true
				},
				"LastModifiedDate": {
					"type": "timestamp"
				},
				"CreationDate": {
					"type": "timestamp"
				},
				"RefreshTokenValidity": {
					"type": "integer"
				},
				"ReadAttributes": {
					"shape": "S3y"
				},
				"WriteAttributes": {
					"shape": "S3y"
				},
				"ExplicitAuthFlows": {
					"shape": "S40"
				}
			}
		},
		"S4k": {
			"type": "structure",
			"members": {
				"Destination": {},
				"DeliveryMedium": {},
				"AttributeName": {}
			}
		},
		"S5m": {
			"type": "list",
			"member": {
				"shape": "Ss"
			}
		}
	}
};

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2014-06-30",
		"endpointPrefix": "cognito-sync",
		"jsonVersion": "1.1",
		"serviceFullName": "Amazon Cognito Sync",
		"signatureVersion": "v4",
		"protocol": "rest-json",
		"uid": "cognito-sync-2014-06-30"
	},
	"operations": {
		"BulkPublish": {
			"http": {
				"requestUri": "/identitypools/{IdentityPoolId}/bulkpublish",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId"
				],
				"members": {
					"IdentityPoolId": {
						"location": "uri",
						"locationName": "IdentityPoolId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IdentityPoolId": {}
				}
			}
		},
		"DeleteDataset": {
			"http": {
				"method": "DELETE",
				"requestUri": "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId",
					"IdentityId",
					"DatasetName"
				],
				"members": {
					"IdentityPoolId": {
						"location": "uri",
						"locationName": "IdentityPoolId"
					},
					"IdentityId": {
						"location": "uri",
						"locationName": "IdentityId"
					},
					"DatasetName": {
						"location": "uri",
						"locationName": "DatasetName"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Dataset": {
						"shape": "S8"
					}
				}
			}
		},
		"DescribeDataset": {
			"http": {
				"method": "GET",
				"requestUri": "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId",
					"IdentityId",
					"DatasetName"
				],
				"members": {
					"IdentityPoolId": {
						"location": "uri",
						"locationName": "IdentityPoolId"
					},
					"IdentityId": {
						"location": "uri",
						"locationName": "IdentityId"
					},
					"DatasetName": {
						"location": "uri",
						"locationName": "DatasetName"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Dataset": {
						"shape": "S8"
					}
				}
			}
		},
		"DescribeIdentityPoolUsage": {
			"http": {
				"method": "GET",
				"requestUri": "/identitypools/{IdentityPoolId}",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId"
				],
				"members": {
					"IdentityPoolId": {
						"location": "uri",
						"locationName": "IdentityPoolId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IdentityPoolUsage": {
						"shape": "Sg"
					}
				}
			}
		},
		"DescribeIdentityUsage": {
			"http": {
				"method": "GET",
				"requestUri": "/identitypools/{IdentityPoolId}/identities/{IdentityId}",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId",
					"IdentityId"
				],
				"members": {
					"IdentityPoolId": {
						"location": "uri",
						"locationName": "IdentityPoolId"
					},
					"IdentityId": {
						"location": "uri",
						"locationName": "IdentityId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IdentityUsage": {
						"type": "structure",
						"members": {
							"IdentityId": {},
							"IdentityPoolId": {},
							"LastModifiedDate": {
								"type": "timestamp"
							},
							"DatasetCount": {
								"type": "integer"
							},
							"DataStorage": {
								"type": "long"
							}
						}
					}
				}
			}
		},
		"GetBulkPublishDetails": {
			"http": {
				"requestUri": "/identitypools/{IdentityPoolId}/getBulkPublishDetails",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId"
				],
				"members": {
					"IdentityPoolId": {
						"location": "uri",
						"locationName": "IdentityPoolId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IdentityPoolId": {},
					"BulkPublishStartTime": {
						"type": "timestamp"
					},
					"BulkPublishCompleteTime": {
						"type": "timestamp"
					},
					"BulkPublishStatus": {},
					"FailureMessage": {}
				}
			}
		},
		"GetCognitoEvents": {
			"http": {
				"method": "GET",
				"requestUri": "/identitypools/{IdentityPoolId}/events",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId"
				],
				"members": {
					"IdentityPoolId": {
						"location": "uri",
						"locationName": "IdentityPoolId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Events": {
						"shape": "Sq"
					}
				}
			}
		},
		"GetIdentityPoolConfiguration": {
			"http": {
				"method": "GET",
				"requestUri": "/identitypools/{IdentityPoolId}/configuration",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId"
				],
				"members": {
					"IdentityPoolId": {
						"location": "uri",
						"locationName": "IdentityPoolId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IdentityPoolId": {},
					"PushSync": {
						"shape": "Sv"
					},
					"CognitoStreams": {
						"shape": "Sz"
					}
				}
			}
		},
		"ListDatasets": {
			"http": {
				"method": "GET",
				"requestUri": "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"IdentityId",
					"IdentityPoolId"
				],
				"members": {
					"IdentityPoolId": {
						"location": "uri",
						"locationName": "IdentityPoolId"
					},
					"IdentityId": {
						"location": "uri",
						"locationName": "IdentityId"
					},
					"NextToken": {
						"location": "querystring",
						"locationName": "nextToken"
					},
					"MaxResults": {
						"location": "querystring",
						"locationName": "maxResults",
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Datasets": {
						"type": "list",
						"member": {
							"shape": "S8"
						}
					},
					"Count": {
						"type": "integer"
					},
					"NextToken": {}
				}
			}
		},
		"ListIdentityPoolUsage": {
			"http": {
				"method": "GET",
				"requestUri": "/identitypools",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"members": {
					"NextToken": {
						"location": "querystring",
						"locationName": "nextToken"
					},
					"MaxResults": {
						"location": "querystring",
						"locationName": "maxResults",
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IdentityPoolUsages": {
						"type": "list",
						"member": {
							"shape": "Sg"
						}
					},
					"MaxResults": {
						"type": "integer"
					},
					"Count": {
						"type": "integer"
					},
					"NextToken": {}
				}
			}
		},
		"ListRecords": {
			"http": {
				"method": "GET",
				"requestUri": "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/records",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId",
					"IdentityId",
					"DatasetName"
				],
				"members": {
					"IdentityPoolId": {
						"location": "uri",
						"locationName": "IdentityPoolId"
					},
					"IdentityId": {
						"location": "uri",
						"locationName": "IdentityId"
					},
					"DatasetName": {
						"location": "uri",
						"locationName": "DatasetName"
					},
					"LastSyncCount": {
						"location": "querystring",
						"locationName": "lastSyncCount",
						"type": "long"
					},
					"NextToken": {
						"location": "querystring",
						"locationName": "nextToken"
					},
					"MaxResults": {
						"location": "querystring",
						"locationName": "maxResults",
						"type": "integer"
					},
					"SyncSessionToken": {
						"location": "querystring",
						"locationName": "syncSessionToken"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Records": {
						"shape": "S1c"
					},
					"NextToken": {},
					"Count": {
						"type": "integer"
					},
					"DatasetSyncCount": {
						"type": "long"
					},
					"LastModifiedBy": {},
					"MergedDatasetNames": {
						"type": "list",
						"member": {}
					},
					"DatasetExists": {
						"type": "boolean"
					},
					"DatasetDeletedAfterRequestedSyncCount": {
						"type": "boolean"
					},
					"SyncSessionToken": {}
				}
			}
		},
		"RegisterDevice": {
			"http": {
				"requestUri": "/identitypools/{IdentityPoolId}/identity/{IdentityId}/device",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId",
					"IdentityId",
					"Platform",
					"Token"
				],
				"members": {
					"IdentityPoolId": {
						"location": "uri",
						"locationName": "IdentityPoolId"
					},
					"IdentityId": {
						"location": "uri",
						"locationName": "IdentityId"
					},
					"Platform": {},
					"Token": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DeviceId": {}
				}
			}
		},
		"SetCognitoEvents": {
			"http": {
				"requestUri": "/identitypools/{IdentityPoolId}/events",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId",
					"Events"
				],
				"members": {
					"IdentityPoolId": {
						"location": "uri",
						"locationName": "IdentityPoolId"
					},
					"Events": {
						"shape": "Sq"
					}
				}
			}
		},
		"SetIdentityPoolConfiguration": {
			"http": {
				"requestUri": "/identitypools/{IdentityPoolId}/configuration",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId"
				],
				"members": {
					"IdentityPoolId": {
						"location": "uri",
						"locationName": "IdentityPoolId"
					},
					"PushSync": {
						"shape": "Sv"
					},
					"CognitoStreams": {
						"shape": "Sz"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IdentityPoolId": {},
					"PushSync": {
						"shape": "Sv"
					},
					"CognitoStreams": {
						"shape": "Sz"
					}
				}
			}
		},
		"SubscribeToDataset": {
			"http": {
				"requestUri": "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId",
					"IdentityId",
					"DatasetName",
					"DeviceId"
				],
				"members": {
					"IdentityPoolId": {
						"location": "uri",
						"locationName": "IdentityPoolId"
					},
					"IdentityId": {
						"location": "uri",
						"locationName": "IdentityId"
					},
					"DatasetName": {
						"location": "uri",
						"locationName": "DatasetName"
					},
					"DeviceId": {
						"location": "uri",
						"locationName": "DeviceId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"UnsubscribeFromDataset": {
			"http": {
				"method": "DELETE",
				"requestUri": "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}/subscriptions/{DeviceId}",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId",
					"IdentityId",
					"DatasetName",
					"DeviceId"
				],
				"members": {
					"IdentityPoolId": {
						"location": "uri",
						"locationName": "IdentityPoolId"
					},
					"IdentityId": {
						"location": "uri",
						"locationName": "IdentityId"
					},
					"DatasetName": {
						"location": "uri",
						"locationName": "DatasetName"
					},
					"DeviceId": {
						"location": "uri",
						"locationName": "DeviceId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"UpdateRecords": {
			"http": {
				"requestUri": "/identitypools/{IdentityPoolId}/identities/{IdentityId}/datasets/{DatasetName}",
				"responseCode": 200
			},
			"input": {
				"type": "structure",
				"required": [
					"IdentityPoolId",
					"IdentityId",
					"DatasetName",
					"SyncSessionToken"
				],
				"members": {
					"IdentityPoolId": {
						"location": "uri",
						"locationName": "IdentityPoolId"
					},
					"IdentityId": {
						"location": "uri",
						"locationName": "IdentityId"
					},
					"DatasetName": {
						"location": "uri",
						"locationName": "DatasetName"
					},
					"DeviceId": {},
					"RecordPatches": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"Op",
								"Key",
								"SyncCount"
							],
							"members": {
								"Op": {},
								"Key": {},
								"Value": {},
								"SyncCount": {
									"type": "long"
								},
								"DeviceLastModifiedDate": {
									"type": "timestamp"
								}
							}
						}
					},
					"SyncSessionToken": {},
					"ClientContext": {
						"location": "header",
						"locationName": "x-amz-Client-Context"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Records": {
						"shape": "S1c"
					}
				}
			}
		}
	},
	"shapes": {
		"S8": {
			"type": "structure",
			"members": {
				"IdentityId": {},
				"DatasetName": {},
				"CreationDate": {
					"type": "timestamp"
				},
				"LastModifiedDate": {
					"type": "timestamp"
				},
				"LastModifiedBy": {},
				"DataStorage": {
					"type": "long"
				},
				"NumRecords": {
					"type": "long"
				}
			}
		},
		"Sg": {
			"type": "structure",
			"members": {
				"IdentityPoolId": {},
				"SyncSessionsCount": {
					"type": "long"
				},
				"DataStorage": {
					"type": "long"
				},
				"LastModifiedDate": {
					"type": "timestamp"
				}
			}
		},
		"Sq": {
			"type": "map",
			"key": {},
			"value": {}
		},
		"Sv": {
			"type": "structure",
			"members": {
				"ApplicationArns": {
					"type": "list",
					"member": {}
				},
				"RoleArn": {}
			}
		},
		"Sz": {
			"type": "structure",
			"members": {
				"StreamName": {},
				"RoleArn": {},
				"StreamingStatus": {}
			}
		},
		"S1c": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"Key": {},
					"Value": {},
					"SyncCount": {
						"type": "long"
					},
					"LastModifiedDate": {
						"type": "timestamp"
					},
					"LastModifiedBy": {},
					"DeviceLastModifiedDate": {
						"type": "timestamp"
					}
				}
			}
		}
	},
	"examples": {}
};

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2014-11-12",
		"endpointPrefix": "config",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceAbbreviation": "Config Service",
		"serviceFullName": "AWS Config",
		"signatureVersion": "v4",
		"targetPrefix": "StarlingDoveService",
		"uid": "config-2014-11-12"
	},
	"operations": {
		"DeleteConfigRule": {
			"input": {
				"type": "structure",
				"required": [
					"ConfigRuleName"
				],
				"members": {
					"ConfigRuleName": {}
				}
			}
		},
		"DeleteConfigurationRecorder": {
			"input": {
				"type": "structure",
				"required": [
					"ConfigurationRecorderName"
				],
				"members": {
					"ConfigurationRecorderName": {}
				}
			}
		},
		"DeleteDeliveryChannel": {
			"input": {
				"type": "structure",
				"required": [
					"DeliveryChannelName"
				],
				"members": {
					"DeliveryChannelName": {}
				}
			}
		},
		"DeleteEvaluationResults": {
			"input": {
				"type": "structure",
				"required": [
					"ConfigRuleName"
				],
				"members": {
					"ConfigRuleName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeliverConfigSnapshot": {
			"input": {
				"type": "structure",
				"required": [
					"deliveryChannelName"
				],
				"members": {
					"deliveryChannelName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"configSnapshotId": {}
				}
			}
		},
		"DescribeComplianceByConfigRule": {
			"input": {
				"type": "structure",
				"members": {
					"ConfigRuleNames": {
						"shape": "Sd"
					},
					"ComplianceTypes": {
						"shape": "Se"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ComplianceByConfigRules": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"ConfigRuleName": {},
								"Compliance": {
									"shape": "Sj"
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeComplianceByResource": {
			"input": {
				"type": "structure",
				"members": {
					"ResourceType": {},
					"ResourceId": {},
					"ComplianceTypes": {
						"shape": "Se"
					},
					"Limit": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ComplianceByResources": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"ResourceType": {},
								"ResourceId": {},
								"Compliance": {
									"shape": "Sj"
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeConfigRuleEvaluationStatus": {
			"input": {
				"type": "structure",
				"members": {
					"ConfigRuleNames": {
						"shape": "Sd"
					},
					"NextToken": {},
					"Limit": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ConfigRulesEvaluationStatus": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"ConfigRuleName": {},
								"ConfigRuleArn": {},
								"ConfigRuleId": {},
								"LastSuccessfulInvocationTime": {
									"type": "timestamp"
								},
								"LastFailedInvocationTime": {
									"type": "timestamp"
								},
								"LastSuccessfulEvaluationTime": {
									"type": "timestamp"
								},
								"LastFailedEvaluationTime": {
									"type": "timestamp"
								},
								"FirstActivatedTime": {
									"type": "timestamp"
								},
								"LastErrorCode": {},
								"LastErrorMessage": {},
								"FirstEvaluationStarted": {
									"type": "boolean"
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeConfigRules": {
			"input": {
				"type": "structure",
				"members": {
					"ConfigRuleNames": {
						"shape": "Sd"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ConfigRules": {
						"type": "list",
						"member": {
							"shape": "S13"
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeConfigurationRecorderStatus": {
			"input": {
				"type": "structure",
				"members": {
					"ConfigurationRecorderNames": {
						"shape": "S1i"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ConfigurationRecordersStatus": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"name": {},
								"lastStartTime": {
									"type": "timestamp"
								},
								"lastStopTime": {
									"type": "timestamp"
								},
								"recording": {
									"type": "boolean"
								},
								"lastStatus": {},
								"lastErrorCode": {},
								"lastErrorMessage": {},
								"lastStatusChangeTime": {
									"type": "timestamp"
								}
							}
						}
					}
				}
			}
		},
		"DescribeConfigurationRecorders": {
			"input": {
				"type": "structure",
				"members": {
					"ConfigurationRecorderNames": {
						"shape": "S1i"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ConfigurationRecorders": {
						"type": "list",
						"member": {
							"shape": "S1q"
						}
					}
				}
			}
		},
		"DescribeDeliveryChannelStatus": {
			"input": {
				"type": "structure",
				"members": {
					"DeliveryChannelNames": {
						"shape": "S1x"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DeliveryChannelsStatus": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"name": {},
								"configSnapshotDeliveryInfo": {
									"shape": "S21"
								},
								"configHistoryDeliveryInfo": {
									"shape": "S21"
								},
								"configStreamDeliveryInfo": {
									"type": "structure",
									"members": {
										"lastStatus": {},
										"lastErrorCode": {},
										"lastErrorMessage": {},
										"lastStatusChangeTime": {
											"type": "timestamp"
										}
									}
								}
							}
						}
					}
				}
			}
		},
		"DescribeDeliveryChannels": {
			"input": {
				"type": "structure",
				"members": {
					"DeliveryChannelNames": {
						"shape": "S1x"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DeliveryChannels": {
						"type": "list",
						"member": {
							"shape": "S27"
						}
					}
				}
			}
		},
		"GetComplianceDetailsByConfigRule": {
			"input": {
				"type": "structure",
				"required": [
					"ConfigRuleName"
				],
				"members": {
					"ConfigRuleName": {},
					"ComplianceTypes": {
						"shape": "Se"
					},
					"Limit": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"EvaluationResults": {
						"shape": "S2b"
					},
					"NextToken": {}
				}
			}
		},
		"GetComplianceDetailsByResource": {
			"input": {
				"type": "structure",
				"required": [
					"ResourceType",
					"ResourceId"
				],
				"members": {
					"ResourceType": {},
					"ResourceId": {},
					"ComplianceTypes": {
						"shape": "Se"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"EvaluationResults": {
						"shape": "S2b"
					},
					"NextToken": {}
				}
			}
		},
		"GetComplianceSummaryByConfigRule": {
			"output": {
				"type": "structure",
				"members": {
					"ComplianceSummary": {
						"shape": "S2i"
					}
				}
			}
		},
		"GetComplianceSummaryByResourceType": {
			"input": {
				"type": "structure",
				"members": {
					"ResourceTypes": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ComplianceSummariesByResourceType": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"ResourceType": {},
								"ComplianceSummary": {
									"shape": "S2i"
								}
							}
						}
					}
				}
			}
		},
		"GetResourceConfigHistory": {
			"input": {
				"type": "structure",
				"required": [
					"resourceType",
					"resourceId"
				],
				"members": {
					"resourceType": {},
					"resourceId": {},
					"laterTime": {
						"type": "timestamp"
					},
					"earlierTime": {
						"type": "timestamp"
					},
					"chronologicalOrder": {},
					"limit": {
						"type": "integer"
					},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"configurationItems": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"version": {},
								"accountId": {},
								"configurationItemCaptureTime": {
									"type": "timestamp"
								},
								"configurationItemStatus": {},
								"configurationStateId": {},
								"configurationItemMD5Hash": {},
								"arn": {},
								"resourceType": {},
								"resourceId": {},
								"resourceName": {},
								"awsRegion": {},
								"availabilityZone": {},
								"resourceCreationTime": {
									"type": "timestamp"
								},
								"tags": {
									"type": "map",
									"key": {},
									"value": {}
								},
								"relatedEvents": {
									"type": "list",
									"member": {}
								},
								"relationships": {
									"type": "list",
									"member": {
										"type": "structure",
										"members": {
											"resourceType": {},
											"resourceId": {},
											"resourceName": {},
											"relationshipName": {}
										}
									}
								},
								"configuration": {},
								"supplementaryConfiguration": {
									"type": "map",
									"key": {},
									"value": {}
								}
							}
						}
					},
					"nextToken": {}
				}
			}
		},
		"ListDiscoveredResources": {
			"input": {
				"type": "structure",
				"required": [
					"resourceType"
				],
				"members": {
					"resourceType": {},
					"resourceIds": {
						"type": "list",
						"member": {}
					},
					"resourceName": {},
					"limit": {
						"type": "integer"
					},
					"includeDeletedResources": {
						"type": "boolean"
					},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"resourceIdentifiers": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"resourceType": {},
								"resourceId": {},
								"resourceName": {},
								"resourceDeletionTime": {
									"type": "timestamp"
								}
							}
						}
					},
					"nextToken": {}
				}
			}
		},
		"PutConfigRule": {
			"input": {
				"type": "structure",
				"required": [
					"ConfigRule"
				],
				"members": {
					"ConfigRule": {
						"shape": "S13"
					}
				}
			}
		},
		"PutConfigurationRecorder": {
			"input": {
				"type": "structure",
				"required": [
					"ConfigurationRecorder"
				],
				"members": {
					"ConfigurationRecorder": {
						"shape": "S1q"
					}
				}
			}
		},
		"PutDeliveryChannel": {
			"input": {
				"type": "structure",
				"required": [
					"DeliveryChannel"
				],
				"members": {
					"DeliveryChannel": {
						"shape": "S27"
					}
				}
			}
		},
		"PutEvaluations": {
			"input": {
				"type": "structure",
				"required": [
					"ResultToken"
				],
				"members": {
					"Evaluations": {
						"shape": "S3t"
					},
					"ResultToken": {},
					"TestMode": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"FailedEvaluations": {
						"shape": "S3t"
					}
				}
			}
		},
		"StartConfigRulesEvaluation": {
			"input": {
				"type": "structure",
				"members": {
					"ConfigRuleNames": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"StartConfigurationRecorder": {
			"input": {
				"type": "structure",
				"required": [
					"ConfigurationRecorderName"
				],
				"members": {
					"ConfigurationRecorderName": {}
				}
			}
		},
		"StopConfigurationRecorder": {
			"input": {
				"type": "structure",
				"required": [
					"ConfigurationRecorderName"
				],
				"members": {
					"ConfigurationRecorderName": {}
				}
			}
		}
	},
	"shapes": {
		"Sd": {
			"type": "list",
			"member": {}
		},
		"Se": {
			"type": "list",
			"member": {}
		},
		"Sj": {
			"type": "structure",
			"members": {
				"ComplianceType": {},
				"ComplianceContributorCount": {
					"shape": "Sk"
				}
			}
		},
		"Sk": {
			"type": "structure",
			"members": {
				"CappedCount": {
					"type": "integer"
				},
				"CapExceeded": {
					"type": "boolean"
				}
			}
		},
		"S13": {
			"type": "structure",
			"required": [
				"Source"
			],
			"members": {
				"ConfigRuleName": {},
				"ConfigRuleArn": {},
				"ConfigRuleId": {},
				"Description": {},
				"Scope": {
					"type": "structure",
					"members": {
						"ComplianceResourceTypes": {
							"type": "list",
							"member": {}
						},
						"TagKey": {},
						"TagValue": {},
						"ComplianceResourceId": {}
					}
				},
				"Source": {
					"type": "structure",
					"required": [
						"Owner",
						"SourceIdentifier"
					],
					"members": {
						"Owner": {},
						"SourceIdentifier": {},
						"SourceDetails": {
							"type": "list",
							"member": {
								"type": "structure",
								"members": {
									"EventSource": {},
									"MessageType": {},
									"MaximumExecutionFrequency": {}
								}
							}
						}
					}
				},
				"InputParameters": {},
				"MaximumExecutionFrequency": {},
				"ConfigRuleState": {}
			}
		},
		"S1i": {
			"type": "list",
			"member": {}
		},
		"S1q": {
			"type": "structure",
			"members": {
				"name": {},
				"roleARN": {},
				"recordingGroup": {
					"type": "structure",
					"members": {
						"allSupported": {
							"type": "boolean"
						},
						"includeGlobalResourceTypes": {
							"type": "boolean"
						},
						"resourceTypes": {
							"type": "list",
							"member": {}
						}
					}
				}
			}
		},
		"S1x": {
			"type": "list",
			"member": {}
		},
		"S21": {
			"type": "structure",
			"members": {
				"lastStatus": {},
				"lastErrorCode": {},
				"lastErrorMessage": {},
				"lastAttemptTime": {
					"type": "timestamp"
				},
				"lastSuccessfulTime": {
					"type": "timestamp"
				},
				"nextDeliveryTime": {
					"type": "timestamp"
				}
			}
		},
		"S27": {
			"type": "structure",
			"members": {
				"name": {},
				"s3BucketName": {},
				"s3KeyPrefix": {},
				"snsTopicARN": {},
				"configSnapshotDeliveryProperties": {
					"type": "structure",
					"members": {
						"deliveryFrequency": {}
					}
				}
			}
		},
		"S2b": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"EvaluationResultIdentifier": {
						"type": "structure",
						"members": {
							"EvaluationResultQualifier": {
								"type": "structure",
								"members": {
									"ConfigRuleName": {},
									"ResourceType": {},
									"ResourceId": {}
								}
							},
							"OrderingTimestamp": {
								"type": "timestamp"
							}
						}
					},
					"ComplianceType": {},
					"ResultRecordedTime": {
						"type": "timestamp"
					},
					"ConfigRuleInvokedTime": {
						"type": "timestamp"
					},
					"Annotation": {},
					"ResultToken": {}
				}
			}
		},
		"S2i": {
			"type": "structure",
			"members": {
				"CompliantResourceCount": {
					"shape": "Sk"
				},
				"NonCompliantResourceCount": {
					"shape": "Sk"
				},
				"ComplianceSummaryTimestamp": {
					"type": "timestamp"
				}
			}
		},
		"S3t": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"ComplianceResourceType",
					"ComplianceResourceId",
					"ComplianceType",
					"OrderingTimestamp"
				],
				"members": {
					"ComplianceResourceType": {},
					"ComplianceResourceId": {},
					"ComplianceType": {},
					"Annotation": {},
					"OrderingTimestamp": {
						"type": "timestamp"
					}
				}
			}
		}
	}
};

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"GetResourceConfigHistory": {
			"input_token": "nextToken",
			"limit_key": "limit",
			"output_token": "nextToken",
			"result_key": "configurationItems"
		}
	}
};

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2017-01-06",
		"endpointPrefix": "cur",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceFullName": "AWS Cost and Usage Report Service",
		"signatureVersion": "v4",
		"signingName": "cur",
		"targetPrefix": "AWSOrigamiServiceGatewayService",
		"uid": "cur-2017-01-06"
	},
	"operations": {
		"DeleteReportDefinition": {
			"input": {
				"type": "structure",
				"members": {
					"ReportName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ResponseMessage": {}
				}
			}
		},
		"DescribeReportDefinitions": {
			"input": {
				"type": "structure",
				"members": {
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ReportDefinitions": {
						"type": "list",
						"member": {
							"shape": "Sa"
						}
					},
					"NextToken": {}
				}
			}
		},
		"PutReportDefinition": {
			"input": {
				"type": "structure",
				"required": [
					"ReportDefinition"
				],
				"members": {
					"ReportDefinition": {
						"shape": "Sa"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		}
	},
	"shapes": {
		"Sa": {
			"type": "structure",
			"required": [
				"ReportName",
				"TimeUnit",
				"Format",
				"Compression",
				"AdditionalSchemaElements",
				"S3Bucket",
				"S3Prefix",
				"S3Region"
			],
			"members": {
				"ReportName": {},
				"TimeUnit": {},
				"Format": {},
				"Compression": {},
				"AdditionalSchemaElements": {
					"type": "list",
					"member": {}
				},
				"S3Bucket": {},
				"S3Prefix": {},
				"S3Region": {},
				"AdditionalArtifacts": {
					"type": "list",
					"member": {}
				}
			}
		}
	}
};

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"DescribeReportDefinitions": {
			"input_token": "NextToken",
			"output_token": "NextToken",
			"limit_key": "MaxResults"
		}
	}
};

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2012-10-29",
		"endpointPrefix": "datapipeline",
		"jsonVersion": "1.1",
		"serviceFullName": "AWS Data Pipeline",
		"signatureVersion": "v4",
		"targetPrefix": "DataPipeline",
		"protocol": "json",
		"uid": "datapipeline-2012-10-29"
	},
	"operations": {
		"ActivatePipeline": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineId"
				],
				"members": {
					"pipelineId": {},
					"parameterValues": {
						"shape": "S3"
					},
					"startTimestamp": {
						"type": "timestamp"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"AddTags": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineId",
					"tags"
				],
				"members": {
					"pipelineId": {},
					"tags": {
						"shape": "Sa"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"CreatePipeline": {
			"input": {
				"type": "structure",
				"required": [
					"name",
					"uniqueId"
				],
				"members": {
					"name": {},
					"uniqueId": {},
					"description": {},
					"tags": {
						"shape": "Sa"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"pipelineId"
				],
				"members": {
					"pipelineId": {}
				}
			}
		},
		"DeactivatePipeline": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineId"
				],
				"members": {
					"pipelineId": {},
					"cancelActive": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeletePipeline": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineId"
				],
				"members": {
					"pipelineId": {}
				}
			}
		},
		"DescribeObjects": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineId",
					"objectIds"
				],
				"members": {
					"pipelineId": {},
					"objectIds": {
						"shape": "Sn"
					},
					"evaluateExpressions": {
						"type": "boolean"
					},
					"marker": {}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"pipelineObjects"
				],
				"members": {
					"pipelineObjects": {
						"shape": "Sq"
					},
					"marker": {},
					"hasMoreResults": {
						"type": "boolean"
					}
				}
			}
		},
		"DescribePipelines": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineIds"
				],
				"members": {
					"pipelineIds": {
						"shape": "Sn"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"pipelineDescriptionList"
				],
				"members": {
					"pipelineDescriptionList": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"pipelineId",
								"name",
								"fields"
							],
							"members": {
								"pipelineId": {},
								"name": {},
								"fields": {
									"shape": "Ss"
								},
								"description": {},
								"tags": {
									"shape": "Sa"
								}
							}
						}
					}
				}
			}
		},
		"EvaluateExpression": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineId",
					"objectId",
					"expression"
				],
				"members": {
					"pipelineId": {},
					"objectId": {},
					"expression": {}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"evaluatedExpression"
				],
				"members": {
					"evaluatedExpression": {}
				}
			}
		},
		"GetPipelineDefinition": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineId"
				],
				"members": {
					"pipelineId": {},
					"version": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"pipelineObjects": {
						"shape": "Sq"
					},
					"parameterObjects": {
						"shape": "S13"
					},
					"parameterValues": {
						"shape": "S3"
					}
				}
			}
		},
		"ListPipelines": {
			"input": {
				"type": "structure",
				"members": {
					"marker": {}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"pipelineIdList"
				],
				"members": {
					"pipelineIdList": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"id": {},
								"name": {}
							}
						}
					},
					"marker": {},
					"hasMoreResults": {
						"type": "boolean"
					}
				}
			}
		},
		"PollForTask": {
			"input": {
				"type": "structure",
				"required": [
					"workerGroup"
				],
				"members": {
					"workerGroup": {},
					"hostname": {},
					"instanceIdentity": {
						"type": "structure",
						"members": {
							"document": {},
							"signature": {}
						}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"taskObject": {
						"type": "structure",
						"members": {
							"taskId": {},
							"pipelineId": {},
							"attemptId": {},
							"objects": {
								"type": "map",
								"key": {},
								"value": {
									"shape": "Sr"
								}
							}
						}
					}
				}
			}
		},
		"PutPipelineDefinition": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineId",
					"pipelineObjects"
				],
				"members": {
					"pipelineId": {},
					"pipelineObjects": {
						"shape": "Sq"
					},
					"parameterObjects": {
						"shape": "S13"
					},
					"parameterValues": {
						"shape": "S3"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"errored"
				],
				"members": {
					"validationErrors": {
						"shape": "S1l"
					},
					"validationWarnings": {
						"shape": "S1p"
					},
					"errored": {
						"type": "boolean"
					}
				}
			}
		},
		"QueryObjects": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineId",
					"sphere"
				],
				"members": {
					"pipelineId": {},
					"query": {
						"type": "structure",
						"members": {
							"selectors": {
								"type": "list",
								"member": {
									"type": "structure",
									"members": {
										"fieldName": {},
										"operator": {
											"type": "structure",
											"members": {
												"type": {},
												"values": {
													"shape": "S1x"
												}
											}
										}
									}
								}
							}
						}
					},
					"sphere": {},
					"marker": {},
					"limit": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ids": {
						"shape": "Sn"
					},
					"marker": {},
					"hasMoreResults": {
						"type": "boolean"
					}
				}
			}
		},
		"RemoveTags": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineId",
					"tagKeys"
				],
				"members": {
					"pipelineId": {},
					"tagKeys": {
						"shape": "S1x"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"ReportTaskProgress": {
			"input": {
				"type": "structure",
				"required": [
					"taskId"
				],
				"members": {
					"taskId": {},
					"fields": {
						"shape": "Ss"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"canceled"
				],
				"members": {
					"canceled": {
						"type": "boolean"
					}
				}
			}
		},
		"ReportTaskRunnerHeartbeat": {
			"input": {
				"type": "structure",
				"required": [
					"taskrunnerId"
				],
				"members": {
					"taskrunnerId": {},
					"workerGroup": {},
					"hostname": {}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"terminate"
				],
				"members": {
					"terminate": {
						"type": "boolean"
					}
				}
			}
		},
		"SetStatus": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineId",
					"objectIds",
					"status"
				],
				"members": {
					"pipelineId": {},
					"objectIds": {
						"shape": "Sn"
					},
					"status": {}
				}
			}
		},
		"SetTaskStatus": {
			"input": {
				"type": "structure",
				"required": [
					"taskId",
					"taskStatus"
				],
				"members": {
					"taskId": {},
					"taskStatus": {},
					"errorId": {},
					"errorMessage": {},
					"errorStackTrace": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"ValidatePipelineDefinition": {
			"input": {
				"type": "structure",
				"required": [
					"pipelineId",
					"pipelineObjects"
				],
				"members": {
					"pipelineId": {},
					"pipelineObjects": {
						"shape": "Sq"
					},
					"parameterObjects": {
						"shape": "S13"
					},
					"parameterValues": {
						"shape": "S3"
					}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"errored"
				],
				"members": {
					"validationErrors": {
						"shape": "S1l"
					},
					"validationWarnings": {
						"shape": "S1p"
					},
					"errored": {
						"type": "boolean"
					}
				}
			}
		}
	},
	"shapes": {
		"S3": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"id",
					"stringValue"
				],
				"members": {
					"id": {},
					"stringValue": {}
				}
			}
		},
		"Sa": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"key",
					"value"
				],
				"members": {
					"key": {},
					"value": {}
				}
			}
		},
		"Sn": {
			"type": "list",
			"member": {}
		},
		"Sq": {
			"type": "list",
			"member": {
				"shape": "Sr"
			}
		},
		"Sr": {
			"type": "structure",
			"required": [
				"id",
				"name",
				"fields"
			],
			"members": {
				"id": {},
				"name": {},
				"fields": {
					"shape": "Ss"
				}
			}
		},
		"Ss": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"key"
				],
				"members": {
					"key": {},
					"stringValue": {},
					"refValue": {}
				}
			}
		},
		"S13": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"id",
					"attributes"
				],
				"members": {
					"id": {},
					"attributes": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"key",
								"stringValue"
							],
							"members": {
								"key": {},
								"stringValue": {}
							}
						}
					}
				}
			}
		},
		"S1l": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"id": {},
					"errors": {
						"shape": "S1n"
					}
				}
			}
		},
		"S1n": {
			"type": "list",
			"member": {}
		},
		"S1p": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"id": {},
					"warnings": {
						"shape": "S1n"
					}
				}
			}
		},
		"S1x": {
			"type": "list",
			"member": {}
		}
	}
};

/***/ }),
/* 215 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"ListPipelines": {
			"input_token": "marker",
			"output_token": "marker",
			"more_results": "hasMoreResults",
			"result_key": "pipelineIdList"
		},
		"DescribeObjects": {
			"input_token": "marker",
			"output_token": "marker",
			"more_results": "hasMoreResults",
			"result_key": "pipelineObjects"
		},
		"DescribePipelines": {
			"result_key": "pipelineDescriptionList"
		},
		"QueryObjects": {
			"input_token": "marker",
			"output_token": "marker",
			"more_results": "hasMoreResults",
			"limit_key": "limit",
			"result_key": "ids"
		}
	}
};

/***/ }),
/* 216 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2015-06-23",
		"endpointPrefix": "devicefarm",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceFullName": "AWS Device Farm",
		"signatureVersion": "v4",
		"targetPrefix": "DeviceFarm_20150623",
		"uid": "devicefarm-2015-06-23"
	},
	"operations": {
		"CreateDevicePool": {
			"input": {
				"type": "structure",
				"required": [
					"projectArn",
					"name",
					"rules"
				],
				"members": {
					"projectArn": {},
					"name": {},
					"description": {},
					"rules": {
						"shape": "S5"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"devicePool": {
						"shape": "Sb"
					}
				}
			}
		},
		"CreateNetworkProfile": {
			"input": {
				"type": "structure",
				"required": [
					"projectArn",
					"name"
				],
				"members": {
					"projectArn": {},
					"name": {},
					"description": {},
					"type": {},
					"uplinkBandwidthBits": {
						"type": "long"
					},
					"downlinkBandwidthBits": {
						"type": "long"
					},
					"uplinkDelayMs": {
						"type": "long"
					},
					"downlinkDelayMs": {
						"type": "long"
					},
					"uplinkJitterMs": {
						"type": "long"
					},
					"downlinkJitterMs": {
						"type": "long"
					},
					"uplinkLossPercent": {
						"type": "integer"
					},
					"downlinkLossPercent": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"networkProfile": {
						"shape": "Si"
					}
				}
			}
		},
		"CreateProject": {
			"input": {
				"type": "structure",
				"required": [
					"name"
				],
				"members": {
					"name": {},
					"defaultJobTimeoutMinutes": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"project": {
						"shape": "Sm"
					}
				}
			}
		},
		"CreateRemoteAccessSession": {
			"input": {
				"type": "structure",
				"required": [
					"projectArn",
					"deviceArn"
				],
				"members": {
					"projectArn": {},
					"deviceArn": {},
					"name": {},
					"configuration": {
						"type": "structure",
						"members": {
							"billingMethod": {}
						}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"remoteAccessSession": {
						"shape": "Ss"
					}
				}
			}
		},
		"CreateUpload": {
			"input": {
				"type": "structure",
				"required": [
					"projectArn",
					"name",
					"type"
				],
				"members": {
					"projectArn": {},
					"name": {},
					"type": {},
					"contentType": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"upload": {
						"shape": "S18"
					}
				}
			}
		},
		"DeleteDevicePool": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeleteNetworkProfile": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeleteProject": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeleteRemoteAccessSession": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeleteRun": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeleteUpload": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"GetAccountSettings": {
			"input": {
				"type": "structure",
				"members": {}
			},
			"output": {
				"type": "structure",
				"members": {
					"accountSettings": {
						"type": "structure",
						"members": {
							"awsAccountNumber": {},
							"unmeteredDevices": {
								"shape": "S1s"
							},
							"unmeteredRemoteAccessDevices": {
								"shape": "S1s"
							},
							"maxJobTimeoutMinutes": {
								"type": "integer"
							},
							"defaultJobTimeoutMinutes": {
								"type": "integer"
							}
						}
					}
				}
			}
		},
		"GetDevice": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"device": {
						"shape": "Sv"
					}
				}
			}
		},
		"GetDevicePool": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"devicePool": {
						"shape": "Sb"
					}
				}
			}
		},
		"GetDevicePoolCompatibility": {
			"input": {
				"type": "structure",
				"required": [
					"devicePoolArn"
				],
				"members": {
					"devicePoolArn": {},
					"appArn": {},
					"testType": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"compatibleDevices": {
						"shape": "S20"
					},
					"incompatibleDevices": {
						"shape": "S20"
					}
				}
			}
		},
		"GetJob": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"job": {
						"shape": "S26"
					}
				}
			}
		},
		"GetNetworkProfile": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"networkProfile": {
						"shape": "Si"
					}
				}
			}
		},
		"GetOfferingStatus": {
			"input": {
				"type": "structure",
				"members": {
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"current": {
						"shape": "S2d"
					},
					"nextPeriod": {
						"shape": "S2d"
					},
					"nextToken": {}
				}
			}
		},
		"GetProject": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"project": {
						"shape": "Sm"
					}
				}
			}
		},
		"GetRemoteAccessSession": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"remoteAccessSession": {
						"shape": "Ss"
					}
				}
			}
		},
		"GetRun": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"run": {
						"shape": "S2u"
					}
				}
			}
		},
		"GetSuite": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"suite": {
						"shape": "S2x"
					}
				}
			}
		},
		"GetTest": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"test": {
						"shape": "S30"
					}
				}
			}
		},
		"GetUpload": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"upload": {
						"shape": "S18"
					}
				}
			}
		},
		"InstallToRemoteAccessSession": {
			"input": {
				"type": "structure",
				"required": [
					"remoteAccessSessionArn",
					"appArn"
				],
				"members": {
					"remoteAccessSessionArn": {},
					"appArn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"appUpload": {
						"shape": "S18"
					}
				}
			}
		},
		"ListArtifacts": {
			"input": {
				"type": "structure",
				"required": [
					"arn",
					"type"
				],
				"members": {
					"arn": {},
					"type": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"artifacts": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"arn": {},
								"name": {},
								"type": {},
								"extension": {},
								"url": {}
							}
						}
					},
					"nextToken": {}
				}
			}
		},
		"ListDevicePools": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {},
					"type": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"devicePools": {
						"type": "list",
						"member": {
							"shape": "Sb"
						}
					},
					"nextToken": {}
				}
			}
		},
		"ListDevices": {
			"input": {
				"type": "structure",
				"members": {
					"arn": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"devices": {
						"type": "list",
						"member": {
							"shape": "Sv"
						}
					},
					"nextToken": {}
				}
			}
		},
		"ListJobs": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"jobs": {
						"type": "list",
						"member": {
							"shape": "S26"
						}
					},
					"nextToken": {}
				}
			}
		},
		"ListNetworkProfiles": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {},
					"type": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"networkProfiles": {
						"type": "list",
						"member": {
							"shape": "Si"
						}
					},
					"nextToken": {}
				}
			}
		},
		"ListOfferingTransactions": {
			"input": {
				"type": "structure",
				"members": {
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"offeringTransactions": {
						"type": "list",
						"member": {
							"shape": "S3q"
						}
					},
					"nextToken": {}
				}
			}
		},
		"ListOfferings": {
			"input": {
				"type": "structure",
				"members": {
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"offerings": {
						"type": "list",
						"member": {
							"shape": "S2h"
						}
					},
					"nextToken": {}
				}
			}
		},
		"ListProjects": {
			"input": {
				"type": "structure",
				"members": {
					"arn": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"projects": {
						"type": "list",
						"member": {
							"shape": "Sm"
						}
					},
					"nextToken": {}
				}
			}
		},
		"ListRemoteAccessSessions": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"remoteAccessSessions": {
						"type": "list",
						"member": {
							"shape": "Ss"
						}
					},
					"nextToken": {}
				}
			}
		},
		"ListRuns": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"runs": {
						"type": "list",
						"member": {
							"shape": "S2u"
						}
					},
					"nextToken": {}
				}
			}
		},
		"ListSamples": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"samples": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"arn": {},
								"type": {},
								"url": {}
							}
						}
					},
					"nextToken": {}
				}
			}
		},
		"ListSuites": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"suites": {
						"type": "list",
						"member": {
							"shape": "S2x"
						}
					},
					"nextToken": {}
				}
			}
		},
		"ListTests": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"tests": {
						"type": "list",
						"member": {
							"shape": "S30"
						}
					},
					"nextToken": {}
				}
			}
		},
		"ListUniqueProblems": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"uniqueProblems": {
						"type": "map",
						"key": {},
						"value": {
							"type": "list",
							"member": {
								"type": "structure",
								"members": {
									"message": {},
									"problems": {
										"type": "list",
										"member": {
											"type": "structure",
											"members": {
												"run": {
													"shape": "S4m"
												},
												"job": {
													"shape": "S4m"
												},
												"suite": {
													"shape": "S4m"
												},
												"test": {
													"shape": "S4m"
												},
												"device": {
													"shape": "Sv"
												},
												"result": {},
												"message": {}
											}
										}
									}
								}
							}
						}
					},
					"nextToken": {}
				}
			}
		},
		"ListUploads": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"uploads": {
						"type": "list",
						"member": {
							"shape": "S18"
						}
					},
					"nextToken": {}
				}
			}
		},
		"PurchaseOffering": {
			"input": {
				"type": "structure",
				"members": {
					"offeringId": {},
					"quantity": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"offeringTransaction": {
						"shape": "S3q"
					}
				}
			}
		},
		"RenewOffering": {
			"input": {
				"type": "structure",
				"members": {
					"offeringId": {},
					"quantity": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"offeringTransaction": {
						"shape": "S3q"
					}
				}
			}
		},
		"ScheduleRun": {
			"input": {
				"type": "structure",
				"required": [
					"projectArn",
					"devicePoolArn",
					"test"
				],
				"members": {
					"projectArn": {},
					"appArn": {},
					"devicePoolArn": {},
					"name": {},
					"test": {
						"type": "structure",
						"required": [
							"type"
						],
						"members": {
							"type": {},
							"testPackageArn": {},
							"filter": {},
							"parameters": {
								"type": "map",
								"key": {},
								"value": {}
							}
						}
					},
					"configuration": {
						"type": "structure",
						"members": {
							"extraDataPackageArn": {},
							"networkProfileArn": {},
							"locale": {},
							"location": {
								"type": "structure",
								"required": [
									"latitude",
									"longitude"
								],
								"members": {
									"latitude": {
										"type": "double"
									},
									"longitude": {
										"type": "double"
									}
								}
							},
							"radios": {
								"type": "structure",
								"members": {
									"wifi": {
										"type": "boolean"
									},
									"bluetooth": {
										"type": "boolean"
									},
									"nfc": {
										"type": "boolean"
									},
									"gps": {
										"type": "boolean"
									}
								}
							},
							"auxiliaryApps": {
								"type": "list",
								"member": {}
							},
							"billingMethod": {}
						}
					},
					"executionConfiguration": {
						"type": "structure",
						"members": {
							"jobTimeoutMinutes": {
								"type": "integer"
							}
						}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"run": {
						"shape": "S2u"
					}
				}
			}
		},
		"StopRemoteAccessSession": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"remoteAccessSession": {
						"shape": "Ss"
					}
				}
			}
		},
		"StopRun": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"run": {
						"shape": "S2u"
					}
				}
			}
		},
		"UpdateDevicePool": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {},
					"name": {},
					"description": {},
					"rules": {
						"shape": "S5"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"devicePool": {
						"shape": "Sb"
					}
				}
			}
		},
		"UpdateNetworkProfile": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {},
					"name": {},
					"description": {},
					"type": {},
					"uplinkBandwidthBits": {
						"type": "long"
					},
					"downlinkBandwidthBits": {
						"type": "long"
					},
					"uplinkDelayMs": {
						"type": "long"
					},
					"downlinkDelayMs": {
						"type": "long"
					},
					"uplinkJitterMs": {
						"type": "long"
					},
					"downlinkJitterMs": {
						"type": "long"
					},
					"uplinkLossPercent": {
						"type": "integer"
					},
					"downlinkLossPercent": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"networkProfile": {
						"shape": "Si"
					}
				}
			}
		},
		"UpdateProject": {
			"input": {
				"type": "structure",
				"required": [
					"arn"
				],
				"members": {
					"arn": {},
					"name": {},
					"defaultJobTimeoutMinutes": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"project": {
						"shape": "Sm"
					}
				}
			}
		}
	},
	"shapes": {
		"S5": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"attribute": {},
					"operator": {},
					"value": {}
				}
			}
		},
		"Sb": {
			"type": "structure",
			"members": {
				"arn": {},
				"name": {},
				"description": {},
				"type": {},
				"rules": {
					"shape": "S5"
				}
			}
		},
		"Si": {
			"type": "structure",
			"members": {
				"arn": {},
				"name": {},
				"description": {},
				"type": {},
				"uplinkBandwidthBits": {
					"type": "long"
				},
				"downlinkBandwidthBits": {
					"type": "long"
				},
				"uplinkDelayMs": {
					"type": "long"
				},
				"downlinkDelayMs": {
					"type": "long"
				},
				"uplinkJitterMs": {
					"type": "long"
				},
				"downlinkJitterMs": {
					"type": "long"
				},
				"uplinkLossPercent": {
					"type": "integer"
				},
				"downlinkLossPercent": {
					"type": "integer"
				}
			}
		},
		"Sm": {
			"type": "structure",
			"members": {
				"arn": {},
				"name": {},
				"defaultJobTimeoutMinutes": {
					"type": "integer"
				},
				"created": {
					"type": "timestamp"
				}
			}
		},
		"Ss": {
			"type": "structure",
			"members": {
				"arn": {},
				"name": {},
				"created": {
					"type": "timestamp"
				},
				"status": {},
				"result": {},
				"message": {},
				"started": {
					"type": "timestamp"
				},
				"stopped": {
					"type": "timestamp"
				},
				"device": {
					"shape": "Sv"
				},
				"billingMethod": {},
				"deviceMinutes": {
					"shape": "S13"
				},
				"endpoint": {}
			}
		},
		"Sv": {
			"type": "structure",
			"members": {
				"arn": {},
				"name": {},
				"manufacturer": {},
				"model": {},
				"formFactor": {},
				"platform": {},
				"os": {},
				"cpu": {
					"type": "structure",
					"members": {
						"frequency": {},
						"architecture": {},
						"clock": {
							"type": "double"
						}
					}
				},
				"resolution": {
					"type": "structure",
					"members": {
						"width": {
							"type": "integer"
						},
						"height": {
							"type": "integer"
						}
					}
				},
				"heapSize": {
					"type": "long"
				},
				"memory": {
					"type": "long"
				},
				"image": {},
				"carrier": {},
				"radio": {},
				"remoteAccessEnabled": {
					"type": "boolean"
				},
				"fleetType": {},
				"fleetName": {}
			}
		},
		"S13": {
			"type": "structure",
			"members": {
				"total": {
					"type": "double"
				},
				"metered": {
					"type": "double"
				},
				"unmetered": {
					"type": "double"
				}
			}
		},
		"S18": {
			"type": "structure",
			"members": {
				"arn": {},
				"name": {},
				"created": {
					"type": "timestamp"
				},
				"type": {},
				"status": {},
				"url": {},
				"metadata": {},
				"contentType": {},
				"message": {}
			}
		},
		"S1s": {
			"type": "map",
			"key": {},
			"value": {
				"type": "integer"
			}
		},
		"S20": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"device": {
						"shape": "Sv"
					},
					"compatible": {
						"type": "boolean"
					},
					"incompatibilityMessages": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"message": {},
								"type": {}
							}
						}
					}
				}
			}
		},
		"S26": {
			"type": "structure",
			"members": {
				"arn": {},
				"name": {},
				"type": {},
				"created": {
					"type": "timestamp"
				},
				"status": {},
				"result": {},
				"started": {
					"type": "timestamp"
				},
				"stopped": {
					"type": "timestamp"
				},
				"counters": {
					"shape": "S27"
				},
				"message": {},
				"device": {
					"shape": "Sv"
				},
				"deviceMinutes": {
					"shape": "S13"
				}
			}
		},
		"S27": {
			"type": "structure",
			"members": {
				"total": {
					"type": "integer"
				},
				"passed": {
					"type": "integer"
				},
				"failed": {
					"type": "integer"
				},
				"warned": {
					"type": "integer"
				},
				"errored": {
					"type": "integer"
				},
				"stopped": {
					"type": "integer"
				},
				"skipped": {
					"type": "integer"
				}
			}
		},
		"S2d": {
			"type": "map",
			"key": {},
			"value": {
				"shape": "S2f"
			}
		},
		"S2f": {
			"type": "structure",
			"members": {
				"type": {},
				"offering": {
					"shape": "S2h"
				},
				"quantity": {
					"type": "integer"
				},
				"effectiveOn": {
					"type": "timestamp"
				}
			}
		},
		"S2h": {
			"type": "structure",
			"members": {
				"id": {},
				"description": {},
				"type": {},
				"platform": {},
				"recurringCharges": {
					"type": "list",
					"member": {
						"type": "structure",
						"members": {
							"cost": {
								"shape": "S2l"
							},
							"frequency": {}
						}
					}
				}
			}
		},
		"S2l": {
			"type": "structure",
			"members": {
				"amount": {
					"type": "double"
				},
				"currencyCode": {}
			}
		},
		"S2u": {
			"type": "structure",
			"members": {
				"arn": {},
				"name": {},
				"type": {},
				"platform": {},
				"created": {
					"type": "timestamp"
				},
				"status": {},
				"result": {},
				"started": {
					"type": "timestamp"
				},
				"stopped": {
					"type": "timestamp"
				},
				"counters": {
					"shape": "S27"
				},
				"message": {},
				"totalJobs": {
					"type": "integer"
				},
				"completedJobs": {
					"type": "integer"
				},
				"billingMethod": {},
				"deviceMinutes": {
					"shape": "S13"
				},
				"networkProfile": {
					"shape": "Si"
				}
			}
		},
		"S2x": {
			"type": "structure",
			"members": {
				"arn": {},
				"name": {},
				"type": {},
				"created": {
					"type": "timestamp"
				},
				"status": {},
				"result": {},
				"started": {
					"type": "timestamp"
				},
				"stopped": {
					"type": "timestamp"
				},
				"counters": {
					"shape": "S27"
				},
				"message": {},
				"deviceMinutes": {
					"shape": "S13"
				}
			}
		},
		"S30": {
			"type": "structure",
			"members": {
				"arn": {},
				"name": {},
				"type": {},
				"created": {
					"type": "timestamp"
				},
				"status": {},
				"result": {},
				"started": {
					"type": "timestamp"
				},
				"stopped": {
					"type": "timestamp"
				},
				"counters": {
					"shape": "S27"
				},
				"message": {},
				"deviceMinutes": {
					"shape": "S13"
				}
			}
		},
		"S3q": {
			"type": "structure",
			"members": {
				"offeringStatus": {
					"shape": "S2f"
				},
				"transactionId": {},
				"createdOn": {
					"type": "timestamp"
				},
				"cost": {
					"shape": "S2l"
				}
			}
		},
		"S4m": {
			"type": "structure",
			"members": {
				"arn": {},
				"name": {}
			}
		}
	}
};

/***/ }),
/* 217 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"GetOfferingStatus": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": [
				"current",
				"nextPeriod"
			]
		},
		"ListArtifacts": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "artifacts"
		},
		"ListDevicePools": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "devicePools"
		},
		"ListDevices": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "devices"
		},
		"ListJobs": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "jobs"
		},
		"ListOfferingTransactions": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "offeringTransactions"
		},
		"ListOfferings": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "offerings"
		},
		"ListProjects": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "projects"
		},
		"ListRuns": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "runs"
		},
		"ListSamples": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "samples"
		},
		"ListSuites": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "suites"
		},
		"ListTests": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "tests"
		},
		"ListUniqueProblems": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "uniqueProblems"
		},
		"ListUploads": {
			"input_token": "nextToken",
			"output_token": "nextToken",
			"result_key": "uploads"
		}
	}
};

/***/ }),
/* 218 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2012-10-25",
		"endpointPrefix": "directconnect",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceFullName": "AWS Direct Connect",
		"signatureVersion": "v4",
		"targetPrefix": "OvertureService",
		"uid": "directconnect-2012-10-25"
	},
	"operations": {
		"AllocateConnectionOnInterconnect": {
			"input": {
				"type": "structure",
				"required": [
					"bandwidth",
					"connectionName",
					"ownerAccount",
					"interconnectId",
					"vlan"
				],
				"members": {
					"bandwidth": {},
					"connectionName": {},
					"ownerAccount": {},
					"interconnectId": {},
					"vlan": {
						"type": "integer"
					}
				}
			},
			"output": {
				"shape": "S7"
			},
			"deprecated": true
		},
		"AllocateHostedConnection": {
			"input": {
				"type": "structure",
				"required": [
					"connectionId",
					"ownerAccount",
					"bandwidth",
					"connectionName",
					"vlan"
				],
				"members": {
					"connectionId": {},
					"ownerAccount": {},
					"bandwidth": {},
					"connectionName": {},
					"vlan": {
						"type": "integer"
					}
				}
			},
			"output": {
				"shape": "S7"
			}
		},
		"AllocatePrivateVirtualInterface": {
			"input": {
				"type": "structure",
				"required": [
					"connectionId",
					"ownerAccount",
					"newPrivateVirtualInterfaceAllocation"
				],
				"members": {
					"connectionId": {},
					"ownerAccount": {},
					"newPrivateVirtualInterfaceAllocation": {
						"type": "structure",
						"required": [
							"virtualInterfaceName",
							"vlan",
							"asn"
						],
						"members": {
							"virtualInterfaceName": {},
							"vlan": {
								"type": "integer"
							},
							"asn": {
								"type": "integer"
							},
							"authKey": {},
							"amazonAddress": {},
							"addressFamily": {},
							"customerAddress": {}
						}
					}
				}
			},
			"output": {
				"shape": "Sp"
			}
		},
		"AllocatePublicVirtualInterface": {
			"input": {
				"type": "structure",
				"required": [
					"connectionId",
					"ownerAccount",
					"newPublicVirtualInterfaceAllocation"
				],
				"members": {
					"connectionId": {},
					"ownerAccount": {},
					"newPublicVirtualInterfaceAllocation": {
						"type": "structure",
						"required": [
							"virtualInterfaceName",
							"vlan",
							"asn"
						],
						"members": {
							"virtualInterfaceName": {},
							"vlan": {
								"type": "integer"
							},
							"asn": {
								"type": "integer"
							},
							"authKey": {},
							"amazonAddress": {},
							"customerAddress": {},
							"addressFamily": {},
							"routeFilterPrefixes": {
								"shape": "Sv"
							}
						}
					}
				}
			},
			"output": {
				"shape": "Sp"
			}
		},
		"AssociateConnectionWithLag": {
			"input": {
				"type": "structure",
				"required": [
					"connectionId",
					"lagId"
				],
				"members": {
					"connectionId": {},
					"lagId": {}
				}
			},
			"output": {
				"shape": "S7"
			}
		},
		"AssociateHostedConnection": {
			"input": {
				"type": "structure",
				"required": [
					"connectionId",
					"parentConnectionId"
				],
				"members": {
					"connectionId": {},
					"parentConnectionId": {}
				}
			},
			"output": {
				"shape": "S7"
			}
		},
		"AssociateVirtualInterface": {
			"input": {
				"type": "structure",
				"required": [
					"virtualInterfaceId",
					"connectionId"
				],
				"members": {
					"virtualInterfaceId": {},
					"connectionId": {}
				}
			},
			"output": {
				"shape": "Sp"
			}
		},
		"ConfirmConnection": {
			"input": {
				"type": "structure",
				"required": [
					"connectionId"
				],
				"members": {
					"connectionId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"connectionState": {}
				}
			}
		},
		"ConfirmPrivateVirtualInterface": {
			"input": {
				"type": "structure",
				"required": [
					"virtualInterfaceId",
					"virtualGatewayId"
				],
				"members": {
					"virtualInterfaceId": {},
					"virtualGatewayId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"virtualInterfaceState": {}
				}
			}
		},
		"ConfirmPublicVirtualInterface": {
			"input": {
				"type": "structure",
				"required": [
					"virtualInterfaceId"
				],
				"members": {
					"virtualInterfaceId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"virtualInterfaceState": {}
				}
			}
		},
		"CreateBGPPeer": {
			"input": {
				"type": "structure",
				"members": {
					"virtualInterfaceId": {},
					"newBGPPeer": {
						"type": "structure",
						"members": {
							"asn": {
								"type": "integer"
							},
							"authKey": {},
							"addressFamily": {},
							"amazonAddress": {},
							"customerAddress": {}
						}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"virtualInterface": {
						"shape": "Sp"
					}
				}
			}
		},
		"CreateConnection": {
			"input": {
				"type": "structure",
				"required": [
					"location",
					"bandwidth",
					"connectionName"
				],
				"members": {
					"location": {},
					"bandwidth": {},
					"connectionName": {},
					"lagId": {}
				}
			},
			"output": {
				"shape": "S7"
			}
		},
		"CreateInterconnect": {
			"input": {
				"type": "structure",
				"required": [
					"interconnectName",
					"bandwidth",
					"location"
				],
				"members": {
					"interconnectName": {},
					"bandwidth": {},
					"location": {},
					"lagId": {}
				}
			},
			"output": {
				"shape": "S1j"
			}
		},
		"CreateLag": {
			"input": {
				"type": "structure",
				"required": [
					"numberOfConnections",
					"location",
					"connectionsBandwidth",
					"lagName"
				],
				"members": {
					"numberOfConnections": {
						"type": "integer"
					},
					"location": {},
					"connectionsBandwidth": {},
					"lagName": {},
					"connectionId": {}
				}
			},
			"output": {
				"shape": "S1o"
			}
		},
		"CreatePrivateVirtualInterface": {
			"input": {
				"type": "structure",
				"required": [
					"connectionId",
					"newPrivateVirtualInterface"
				],
				"members": {
					"connectionId": {},
					"newPrivateVirtualInterface": {
						"type": "structure",
						"required": [
							"virtualInterfaceName",
							"vlan",
							"asn",
							"virtualGatewayId"
						],
						"members": {
							"virtualInterfaceName": {},
							"vlan": {
								"type": "integer"
							},
							"asn": {
								"type": "integer"
							},
							"authKey": {},
							"amazonAddress": {},
							"customerAddress": {},
							"addressFamily": {},
							"virtualGatewayId": {}
						}
					}
				}
			},
			"output": {
				"shape": "Sp"
			}
		},
		"CreatePublicVirtualInterface": {
			"input": {
				"type": "structure",
				"required": [
					"connectionId",
					"newPublicVirtualInterface"
				],
				"members": {
					"connectionId": {},
					"newPublicVirtualInterface": {
						"type": "structure",
						"required": [
							"virtualInterfaceName",
							"vlan",
							"asn"
						],
						"members": {
							"virtualInterfaceName": {},
							"vlan": {
								"type": "integer"
							},
							"asn": {
								"type": "integer"
							},
							"authKey": {},
							"amazonAddress": {},
							"customerAddress": {},
							"addressFamily": {},
							"routeFilterPrefixes": {
								"shape": "Sv"
							}
						}
					}
				}
			},
			"output": {
				"shape": "Sp"
			}
		},
		"DeleteBGPPeer": {
			"input": {
				"type": "structure",
				"members": {
					"virtualInterfaceId": {},
					"asn": {
						"type": "integer"
					},
					"customerAddress": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"virtualInterface": {
						"shape": "Sp"
					}
				}
			}
		},
		"DeleteConnection": {
			"input": {
				"type": "structure",
				"required": [
					"connectionId"
				],
				"members": {
					"connectionId": {}
				}
			},
			"output": {
				"shape": "S7"
			}
		},
		"DeleteInterconnect": {
			"input": {
				"type": "structure",
				"required": [
					"interconnectId"
				],
				"members": {
					"interconnectId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"interconnectState": {}
				}
			}
		},
		"DeleteLag": {
			"input": {
				"type": "structure",
				"required": [
					"lagId"
				],
				"members": {
					"lagId": {}
				}
			},
			"output": {
				"shape": "S1o"
			}
		},
		"DeleteVirtualInterface": {
			"input": {
				"type": "structure",
				"required": [
					"virtualInterfaceId"
				],
				"members": {
					"virtualInterfaceId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"virtualInterfaceState": {}
				}
			}
		},
		"DescribeConnectionLoa": {
			"input": {
				"type": "structure",
				"required": [
					"connectionId"
				],
				"members": {
					"connectionId": {},
					"providerName": {},
					"loaContentType": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"loa": {
						"shape": "S28"
					}
				}
			},
			"deprecated": true
		},
		"DescribeConnections": {
			"input": {
				"type": "structure",
				"members": {
					"connectionId": {}
				}
			},
			"output": {
				"shape": "S2b"
			}
		},
		"DescribeConnectionsOnInterconnect": {
			"input": {
				"type": "structure",
				"required": [
					"interconnectId"
				],
				"members": {
					"interconnectId": {}
				}
			},
			"output": {
				"shape": "S2b"
			},
			"deprecated": true
		},
		"DescribeHostedConnections": {
			"input": {
				"type": "structure",
				"required": [
					"connectionId"
				],
				"members": {
					"connectionId": {}
				}
			},
			"output": {
				"shape": "S2b"
			}
		},
		"DescribeInterconnectLoa": {
			"input": {
				"type": "structure",
				"required": [
					"interconnectId"
				],
				"members": {
					"interconnectId": {},
					"providerName": {},
					"loaContentType": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"loa": {
						"shape": "S28"
					}
				}
			},
			"deprecated": true
		},
		"DescribeInterconnects": {
			"input": {
				"type": "structure",
				"members": {
					"interconnectId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"interconnects": {
						"type": "list",
						"member": {
							"shape": "S1j"
						}
					}
				}
			}
		},
		"DescribeLags": {
			"input": {
				"type": "structure",
				"members": {
					"lagId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"lags": {
						"type": "list",
						"member": {
							"shape": "S1o"
						}
					}
				}
			}
		},
		"DescribeLoa": {
			"input": {
				"type": "structure",
				"required": [
					"connectionId"
				],
				"members": {
					"connectionId": {},
					"providerName": {},
					"loaContentType": {}
				}
			},
			"output": {
				"shape": "S28"
			}
		},
		"DescribeLocations": {
			"output": {
				"type": "structure",
				"members": {
					"locations": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"locationCode": {},
								"locationName": {}
							}
						}
					}
				}
			}
		},
		"DescribeTags": {
			"input": {
				"type": "structure",
				"required": [
					"resourceArns"
				],
				"members": {
					"resourceArns": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"resourceTags": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"resourceArn": {},
								"tags": {
									"shape": "S2x"
								}
							}
						}
					}
				}
			}
		},
		"DescribeVirtualGateways": {
			"output": {
				"type": "structure",
				"members": {
					"virtualGateways": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"virtualGatewayId": {},
								"virtualGatewayState": {}
							}
						}
					}
				}
			}
		},
		"DescribeVirtualInterfaces": {
			"input": {
				"type": "structure",
				"members": {
					"connectionId": {},
					"virtualInterfaceId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"virtualInterfaces": {
						"type": "list",
						"member": {
							"shape": "Sp"
						}
					}
				}
			}
		},
		"DisassociateConnectionFromLag": {
			"input": {
				"type": "structure",
				"required": [
					"connectionId",
					"lagId"
				],
				"members": {
					"connectionId": {},
					"lagId": {}
				}
			},
			"output": {
				"shape": "S7"
			}
		},
		"TagResource": {
			"input": {
				"type": "structure",
				"required": [
					"resourceArn",
					"tags"
				],
				"members": {
					"resourceArn": {},
					"tags": {
						"shape": "S2x"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"UntagResource": {
			"input": {
				"type": "structure",
				"required": [
					"resourceArn",
					"tagKeys"
				],
				"members": {
					"resourceArn": {},
					"tagKeys": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"UpdateLag": {
			"input": {
				"type": "structure",
				"required": [
					"lagId"
				],
				"members": {
					"lagId": {},
					"lagName": {},
					"minimumLinks": {
						"type": "integer"
					}
				}
			},
			"output": {
				"shape": "S1o"
			}
		}
	},
	"shapes": {
		"S7": {
			"type": "structure",
			"members": {
				"ownerAccount": {},
				"connectionId": {},
				"connectionName": {},
				"connectionState": {},
				"region": {},
				"location": {},
				"bandwidth": {},
				"vlan": {
					"type": "integer"
				},
				"partnerName": {},
				"loaIssueTime": {
					"type": "timestamp"
				},
				"lagId": {},
				"awsDevice": {}
			}
		},
		"Sp": {
			"type": "structure",
			"members": {
				"ownerAccount": {},
				"virtualInterfaceId": {},
				"location": {},
				"connectionId": {},
				"virtualInterfaceType": {},
				"virtualInterfaceName": {},
				"vlan": {
					"type": "integer"
				},
				"asn": {
					"type": "integer"
				},
				"authKey": {},
				"amazonAddress": {},
				"customerAddress": {},
				"addressFamily": {},
				"virtualInterfaceState": {},
				"customerRouterConfig": {},
				"virtualGatewayId": {},
				"routeFilterPrefixes": {
					"shape": "Sv"
				},
				"bgpPeers": {
					"type": "list",
					"member": {
						"type": "structure",
						"members": {
							"asn": {
								"type": "integer"
							},
							"authKey": {},
							"addressFamily": {},
							"amazonAddress": {},
							"customerAddress": {},
							"bgpPeerState": {},
							"bgpStatus": {}
						}
					}
				}
			}
		},
		"Sv": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"cidr": {}
				}
			}
		},
		"S1j": {
			"type": "structure",
			"members": {
				"interconnectId": {},
				"interconnectName": {},
				"interconnectState": {},
				"region": {},
				"location": {},
				"bandwidth": {},
				"loaIssueTime": {
					"type": "timestamp"
				},
				"lagId": {},
				"awsDevice": {}
			}
		},
		"S1o": {
			"type": "structure",
			"members": {
				"connectionsBandwidth": {},
				"numberOfConnections": {
					"type": "integer"
				},
				"lagId": {},
				"ownerAccount": {},
				"lagName": {},
				"lagState": {},
				"location": {},
				"region": {},
				"minimumLinks": {
					"type": "integer"
				},
				"awsDevice": {},
				"connections": {
					"shape": "S1q"
				},
				"allowsHostedConnections": {
					"type": "boolean"
				}
			}
		},
		"S1q": {
			"type": "list",
			"member": {
				"shape": "S7"
			}
		},
		"S28": {
			"type": "structure",
			"members": {
				"loaContent": {
					"type": "blob"
				},
				"loaContentType": {}
			}
		},
		"S2b": {
			"type": "structure",
			"members": {
				"connections": {
					"shape": "S1q"
				}
			}
		},
		"S2x": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"key"
				],
				"members": {
					"key": {},
					"value": {}
				}
			}
		}
	}
};

/***/ }),
/* 219 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"DescribeConnections": {
			"result_key": "connections"
		},
		"DescribeConnectionsOnInterconnect": {
			"result_key": "connections"
		},
		"DescribeInterconnects": {
			"result_key": "interconnects"
		},
		"DescribeLocations": {
			"result_key": "locations"
		},
		"DescribeVirtualGateways": {
			"result_key": "virtualGateways"
		},
		"DescribeVirtualInterfaces": {
			"result_key": "virtualInterfaces"
		}
	}
};

/***/ }),
/* 220 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2015-11-01",
		"endpointPrefix": "discovery",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceFullName": "AWS Application Discovery Service",
		"signatureVersion": "v4",
		"targetPrefix": "AWSPoseidonService_V2015_11_01",
		"uid": "discovery-2015-11-01"
	},
	"operations": {
		"AssociateConfigurationItemsToApplication": {
			"input": {
				"type": "structure",
				"required": [
					"applicationConfigurationId",
					"configurationIds"
				],
				"members": {
					"applicationConfigurationId": {},
					"configurationIds": {
						"shape": "S3"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"CreateApplication": {
			"input": {
				"type": "structure",
				"required": [
					"name"
				],
				"members": {
					"name": {},
					"description": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"configurationId": {}
				}
			}
		},
		"CreateTags": {
			"input": {
				"type": "structure",
				"required": [
					"configurationIds",
					"tags"
				],
				"members": {
					"configurationIds": {
						"shape": "S3"
					},
					"tags": {
						"shape": "Sa"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeleteApplications": {
			"input": {
				"type": "structure",
				"required": [
					"configurationIds"
				],
				"members": {
					"configurationIds": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeleteTags": {
			"input": {
				"type": "structure",
				"required": [
					"configurationIds"
				],
				"members": {
					"configurationIds": {
						"shape": "S3"
					},
					"tags": {
						"shape": "Sa"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DescribeAgents": {
			"input": {
				"type": "structure",
				"members": {
					"agentIds": {
						"shape": "Sl"
					},
					"filters": {
						"shape": "Sn"
					},
					"maxResults": {
						"type": "integer"
					},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"agentsInfo": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"agentId": {},
								"hostName": {},
								"agentNetworkInfoList": {
									"type": "list",
									"member": {
										"type": "structure",
										"members": {
											"ipAddress": {},
											"macAddress": {}
										}
									}
								},
								"connectorId": {},
								"version": {},
								"health": {},
								"lastHealthPingTime": {},
								"collectionStatus": {},
								"agentType": {},
								"registeredTime": {}
							}
						}
					},
					"nextToken": {}
				}
			}
		},
		"DescribeConfigurations": {
			"input": {
				"type": "structure",
				"required": [
					"configurationIds"
				],
				"members": {
					"configurationIds": {
						"shape": "S3"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"configurations": {
						"type": "list",
						"member": {
							"type": "map",
							"key": {},
							"value": {}
						}
					}
				}
			}
		},
		"DescribeExportConfigurations": {
			"input": {
				"type": "structure",
				"members": {
					"exportIds": {
						"shape": "S15"
					},
					"maxResults": {
						"type": "integer"
					},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"exportsInfo": {
						"shape": "S18"
					},
					"nextToken": {}
				}
			},
			"deprecated": true
		},
		"DescribeExportTasks": {
			"input": {
				"type": "structure",
				"members": {
					"exportIds": {
						"shape": "S15"
					},
					"maxResults": {
						"type": "integer"
					},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"exportsInfo": {
						"shape": "S18"
					},
					"nextToken": {}
				}
			}
		},
		"DescribeTags": {
			"input": {
				"type": "structure",
				"members": {
					"filters": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"name",
								"values"
							],
							"members": {
								"name": {},
								"values": {
									"shape": "Sp"
								}
							}
						}
					},
					"maxResults": {
						"type": "integer"
					},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"tags": {
						"type": "list",
						"member": {
							"locationName": "item",
							"type": "structure",
							"members": {
								"configurationType": {},
								"configurationId": {},
								"key": {},
								"value": {},
								"timeOfCreation": {
									"type": "timestamp"
								}
							}
						}
					},
					"nextToken": {}
				}
			}
		},
		"DisassociateConfigurationItemsFromApplication": {
			"input": {
				"type": "structure",
				"required": [
					"applicationConfigurationId",
					"configurationIds"
				],
				"members": {
					"applicationConfigurationId": {},
					"configurationIds": {
						"shape": "S3"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"ExportConfigurations": {
			"output": {
				"type": "structure",
				"members": {
					"exportId": {}
				}
			},
			"deprecated": true
		},
		"GetDiscoverySummary": {
			"input": {
				"type": "structure",
				"members": {}
			},
			"output": {
				"type": "structure",
				"members": {
					"servers": {
						"type": "long"
					},
					"applications": {
						"type": "long"
					},
					"serversMappedToApplications": {
						"type": "long"
					},
					"serversMappedtoTags": {
						"type": "long"
					},
					"agentSummary": {
						"type": "structure",
						"required": [
							"activeAgents",
							"healthyAgents",
							"blackListedAgents",
							"shutdownAgents",
							"unhealthyAgents",
							"totalAgents",
							"unknownAgents"
						],
						"members": {
							"activeAgents": {
								"type": "integer"
							},
							"healthyAgents": {
								"type": "integer"
							},
							"blackListedAgents": {
								"type": "integer"
							},
							"shutdownAgents": {
								"type": "integer"
							},
							"unhealthyAgents": {
								"type": "integer"
							},
							"totalAgents": {
								"type": "integer"
							},
							"unknownAgents": {
								"type": "integer"
							}
						}
					},
					"connectorSummary": {
						"type": "structure",
						"required": [
							"activeConnectors",
							"healthyConnectors",
							"blackListedConnectors",
							"shutdownConnectors",
							"unhealthyConnectors",
							"totalConnectors",
							"unknownConnectors"
						],
						"members": {
							"activeConnectors": {
								"type": "integer"
							},
							"healthyConnectors": {
								"type": "integer"
							},
							"blackListedConnectors": {
								"type": "integer"
							},
							"shutdownConnectors": {
								"type": "integer"
							},
							"unhealthyConnectors": {
								"type": "integer"
							},
							"totalConnectors": {
								"type": "integer"
							},
							"unknownConnectors": {
								"type": "integer"
							}
						}
					}
				}
			}
		},
		"ListConfigurations": {
			"input": {
				"type": "structure",
				"required": [
					"configurationType"
				],
				"members": {
					"configurationType": {},
					"filters": {
						"shape": "Sn"
					},
					"maxResults": {
						"type": "integer"
					},
					"nextToken": {},
					"orderBy": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"fieldName"
							],
							"members": {
								"fieldName": {},
								"sortOrder": {}
							}
						}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"configurations": {
						"type": "list",
						"member": {
							"type": "map",
							"key": {},
							"value": {}
						}
					},
					"nextToken": {}
				}
			}
		},
		"ListServerNeighbors": {
			"input": {
				"type": "structure",
				"required": [
					"configurationId"
				],
				"members": {
					"configurationId": {},
					"portInformationNeeded": {
						"type": "boolean"
					},
					"neighborConfigurationIds": {
						"shape": "S3"
					},
					"maxResults": {
						"type": "integer"
					},
					"nextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"required": [
					"neighbors"
				],
				"members": {
					"neighbors": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"sourceServerId",
								"destinationServerId",
								"connectionsCount"
							],
							"members": {
								"sourceServerId": {},
								"destinationServerId": {},
								"destinationPort": {
									"type": "integer"
								},
								"transportProtocol": {},
								"connectionsCount": {
									"type": "long"
								}
							}
						}
					},
					"nextToken": {},
					"knownDependencyCount": {
						"type": "long"
					}
				}
			}
		},
		"StartDataCollectionByAgentIds": {
			"input": {
				"type": "structure",
				"required": [
					"agentIds"
				],
				"members": {
					"agentIds": {
						"shape": "Sl"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"agentsConfigurationStatus": {
						"shape": "S2c"
					}
				}
			}
		},
		"StartExportTask": {
			"input": {
				"type": "structure",
				"members": {
					"exportDataFormat": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"exportId": {}
				}
			}
		},
		"StopDataCollectionByAgentIds": {
			"input": {
				"type": "structure",
				"required": [
					"agentIds"
				],
				"members": {
					"agentIds": {
						"shape": "Sl"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"agentsConfigurationStatus": {
						"shape": "S2c"
					}
				}
			}
		},
		"UpdateApplication": {
			"input": {
				"type": "structure",
				"required": [
					"configurationId"
				],
				"members": {
					"configurationId": {},
					"name": {},
					"description": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		}
	},
	"shapes": {
		"S3": {
			"type": "list",
			"member": {}
		},
		"Sa": {
			"type": "list",
			"member": {
				"locationName": "item",
				"type": "structure",
				"required": [
					"key",
					"value"
				],
				"members": {
					"key": {},
					"value": {}
				}
			}
		},
		"Sl": {
			"type": "list",
			"member": {}
		},
		"Sn": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"name",
					"values",
					"condition"
				],
				"members": {
					"name": {},
					"values": {
						"shape": "Sp"
					},
					"condition": {}
				}
			}
		},
		"Sp": {
			"type": "list",
			"member": {
				"locationName": "item"
			}
		},
		"S15": {
			"type": "list",
			"member": {}
		},
		"S18": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"exportId",
					"exportStatus",
					"statusMessage",
					"exportRequestTime"
				],
				"members": {
					"exportId": {},
					"exportStatus": {},
					"statusMessage": {},
					"configurationsDownloadUrl": {},
					"exportRequestTime": {
						"type": "timestamp"
					}
				}
			}
		},
		"S2c": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"agentId": {},
					"operationSucceeded": {
						"type": "boolean"
					},
					"description": {}
				}
			}
		}
	}
};

/***/ }),
/* 221 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {}
};

/***/ }),
/* 222 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2016-01-01",
		"endpointPrefix": "dms",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceFullName": "AWS Database Migration Service",
		"signatureVersion": "v4",
		"targetPrefix": "AmazonDMSv20160101",
		"uid": "dms-2016-01-01"
	},
	"operations": {
		"AddTagsToResource": {
			"input": {
				"type": "structure",
				"required": [
					"ResourceArn",
					"Tags"
				],
				"members": {
					"ResourceArn": {},
					"Tags": {
						"shape": "S3"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"CreateEndpoint": {
			"input": {
				"type": "structure",
				"required": [
					"EndpointIdentifier",
					"EndpointType",
					"EngineName"
				],
				"members": {
					"EndpointIdentifier": {},
					"EndpointType": {},
					"EngineName": {},
					"Username": {},
					"Password": {
						"shape": "S8"
					},
					"ServerName": {},
					"Port": {
						"type": "integer"
					},
					"DatabaseName": {},
					"ExtraConnectionAttributes": {},
					"KmsKeyId": {},
					"Tags": {
						"shape": "S3"
					},
					"CertificateArn": {},
					"SslMode": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Endpoint": {
						"shape": "Sc"
					}
				}
			}
		},
		"CreateReplicationInstance": {
			"input": {
				"type": "structure",
				"required": [
					"ReplicationInstanceIdentifier",
					"ReplicationInstanceClass"
				],
				"members": {
					"ReplicationInstanceIdentifier": {},
					"AllocatedStorage": {
						"type": "integer"
					},
					"ReplicationInstanceClass": {},
					"VpcSecurityGroupIds": {
						"shape": "Se"
					},
					"AvailabilityZone": {},
					"ReplicationSubnetGroupIdentifier": {},
					"PreferredMaintenanceWindow": {},
					"MultiAZ": {
						"type": "boolean"
					},
					"EngineVersion": {},
					"AutoMinorVersionUpgrade": {
						"type": "boolean"
					},
					"Tags": {
						"shape": "S3"
					},
					"KmsKeyId": {},
					"PubliclyAccessible": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ReplicationInstance": {
						"shape": "Sh"
					}
				}
			}
		},
		"CreateReplicationSubnetGroup": {
			"input": {
				"type": "structure",
				"required": [
					"ReplicationSubnetGroupIdentifier",
					"ReplicationSubnetGroupDescription",
					"SubnetIds"
				],
				"members": {
					"ReplicationSubnetGroupIdentifier": {},
					"ReplicationSubnetGroupDescription": {},
					"SubnetIds": {
						"shape": "Sv"
					},
					"Tags": {
						"shape": "S3"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ReplicationSubnetGroup": {
						"shape": "Sm"
					}
				}
			}
		},
		"CreateReplicationTask": {
			"input": {
				"type": "structure",
				"required": [
					"ReplicationTaskIdentifier",
					"SourceEndpointArn",
					"TargetEndpointArn",
					"ReplicationInstanceArn",
					"MigrationType",
					"TableMappings"
				],
				"members": {
					"ReplicationTaskIdentifier": {},
					"SourceEndpointArn": {},
					"TargetEndpointArn": {},
					"ReplicationInstanceArn": {},
					"MigrationType": {},
					"TableMappings": {},
					"ReplicationTaskSettings": {},
					"CdcStartTime": {
						"type": "timestamp"
					},
					"Tags": {
						"shape": "S3"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ReplicationTask": {
						"shape": "S10"
					}
				}
			}
		},
		"DeleteCertificate": {
			"input": {
				"type": "structure",
				"required": [
					"CertificateArn"
				],
				"members": {
					"CertificateArn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Certificate": {
						"shape": "S15"
					}
				}
			}
		},
		"DeleteEndpoint": {
			"input": {
				"type": "structure",
				"required": [
					"EndpointArn"
				],
				"members": {
					"EndpointArn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Endpoint": {
						"shape": "Sc"
					}
				}
			}
		},
		"DeleteReplicationInstance": {
			"input": {
				"type": "structure",
				"required": [
					"ReplicationInstanceArn"
				],
				"members": {
					"ReplicationInstanceArn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ReplicationInstance": {
						"shape": "Sh"
					}
				}
			}
		},
		"DeleteReplicationSubnetGroup": {
			"input": {
				"type": "structure",
				"required": [
					"ReplicationSubnetGroupIdentifier"
				],
				"members": {
					"ReplicationSubnetGroupIdentifier": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeleteReplicationTask": {
			"input": {
				"type": "structure",
				"required": [
					"ReplicationTaskArn"
				],
				"members": {
					"ReplicationTaskArn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ReplicationTask": {
						"shape": "S10"
					}
				}
			}
		},
		"DescribeAccountAttributes": {
			"input": {
				"type": "structure",
				"members": {}
			},
			"output": {
				"type": "structure",
				"members": {
					"AccountQuotas": {
						"type": "list",
						"member": {
							"locationName": "AccountQuota",
							"type": "structure",
							"members": {
								"AccountQuotaName": {},
								"Used": {
									"type": "long"
								},
								"Max": {
									"type": "long"
								}
							}
						}
					}
				}
			}
		},
		"DescribeCertificates": {
			"input": {
				"type": "structure",
				"members": {
					"Filters": {
						"shape": "S1k"
					},
					"MaxRecords": {
						"type": "integer"
					},
					"Marker": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Marker": {},
					"Certificates": {
						"type": "list",
						"member": {
							"shape": "S15",
							"locationName": "Certificate"
						}
					}
				}
			}
		},
		"DescribeConnections": {
			"input": {
				"type": "structure",
				"members": {
					"Filters": {
						"shape": "S1k"
					},
					"MaxRecords": {
						"type": "integer"
					},
					"Marker": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Marker": {},
					"Connections": {
						"type": "list",
						"member": {
							"shape": "S1s",
							"locationName": "Connection"
						}
					}
				}
			}
		},
		"DescribeEndpointTypes": {
			"input": {
				"type": "structure",
				"members": {
					"Filters": {
						"shape": "S1k"
					},
					"MaxRecords": {
						"type": "integer"
					},
					"Marker": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Marker": {},
					"SupportedEndpointTypes": {
						"type": "list",
						"member": {
							"locationName": "SupportedEndpointType",
							"type": "structure",
							"members": {
								"EngineName": {},
								"SupportsCDC": {
									"type": "boolean"
								},
								"EndpointType": {}
							}
						}
					}
				}
			}
		},
		"DescribeEndpoints": {
			"input": {
				"type": "structure",
				"members": {
					"Filters": {
						"shape": "S1k"
					},
					"MaxRecords": {
						"type": "integer"
					},
					"Marker": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Marker": {},
					"Endpoints": {
						"type": "list",
						"member": {
							"shape": "Sc",
							"locationName": "Endpoint"
						}
					}
				}
			}
		},
		"DescribeOrderableReplicationInstances": {
			"input": {
				"type": "structure",
				"members": {
					"MaxRecords": {
						"type": "integer"
					},
					"Marker": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"OrderableReplicationInstances": {
						"type": "list",
						"member": {
							"locationName": "OrderableReplicationInstance",
							"type": "structure",
							"members": {
								"EngineVersion": {},
								"ReplicationInstanceClass": {},
								"StorageType": {},
								"MinAllocatedStorage": {
									"type": "integer"
								},
								"MaxAllocatedStorage": {
									"type": "integer"
								},
								"DefaultAllocatedStorage": {
									"type": "integer"
								},
								"IncludedAllocatedStorage": {
									"type": "integer"
								}
							}
						}
					},
					"Marker": {}
				}
			}
		},
		"DescribeRefreshSchemasStatus": {
			"input": {
				"type": "structure",
				"required": [
					"EndpointArn"
				],
				"members": {
					"EndpointArn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"RefreshSchemasStatus": {
						"shape": "S26"
					}
				}
			}
		},
		"DescribeReplicationInstances": {
			"input": {
				"type": "structure",
				"members": {
					"Filters": {
						"shape": "S1k"
					},
					"MaxRecords": {
						"type": "integer"
					},
					"Marker": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Marker": {},
					"ReplicationInstances": {
						"type": "list",
						"member": {
							"shape": "Sh",
							"locationName": "ReplicationInstance"
						}
					}
				}
			}
		},
		"DescribeReplicationSubnetGroups": {
			"input": {
				"type": "structure",
				"members": {
					"Filters": {
						"shape": "S1k"
					},
					"MaxRecords": {
						"type": "integer"
					},
					"Marker": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Marker": {},
					"ReplicationSubnetGroups": {
						"type": "list",
						"member": {
							"shape": "Sm",
							"locationName": "ReplicationSubnetGroup"
						}
					}
				}
			}
		},
		"DescribeReplicationTasks": {
			"input": {
				"type": "structure",
				"members": {
					"Filters": {
						"shape": "S1k"
					},
					"MaxRecords": {
						"type": "integer"
					},
					"Marker": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Marker": {},
					"ReplicationTasks": {
						"type": "list",
						"member": {
							"shape": "S10",
							"locationName": "ReplicationTask"
						}
					}
				}
			}
		},
		"DescribeSchemas": {
			"input": {
				"type": "structure",
				"required": [
					"EndpointArn"
				],
				"members": {
					"EndpointArn": {},
					"MaxRecords": {
						"type": "integer"
					},
					"Marker": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Marker": {},
					"Schemas": {
						"type": "list",
						"member": {}
					}
				}
			}
		},
		"DescribeTableStatistics": {
			"input": {
				"type": "structure",
				"required": [
					"ReplicationTaskArn"
				],
				"members": {
					"ReplicationTaskArn": {},
					"MaxRecords": {
						"type": "integer"
					},
					"Marker": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ReplicationTaskArn": {},
					"TableStatistics": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"SchemaName": {},
								"TableName": {},
								"Inserts": {
									"type": "long"
								},
								"Deletes": {
									"type": "long"
								},
								"Updates": {
									"type": "long"
								},
								"Ddls": {
									"type": "long"
								},
								"FullLoadRows": {
									"type": "long"
								},
								"LastUpdateTime": {
									"type": "timestamp"
								},
								"TableState": {}
							}
						}
					},
					"Marker": {}
				}
			}
		},
		"ImportCertificate": {
			"input": {
				"type": "structure",
				"required": [
					"CertificateIdentifier"
				],
				"members": {
					"CertificateIdentifier": {},
					"CertificatePem": {},
					"CertificateWallet": {
						"type": "blob"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Certificate": {
						"shape": "S15"
					}
				}
			}
		},
		"ListTagsForResource": {
			"input": {
				"type": "structure",
				"required": [
					"ResourceArn"
				],
				"members": {
					"ResourceArn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"TagList": {
						"shape": "S3"
					}
				}
			}
		},
		"ModifyEndpoint": {
			"input": {
				"type": "structure",
				"required": [
					"EndpointArn"
				],
				"members": {
					"EndpointArn": {},
					"EndpointIdentifier": {},
					"EndpointType": {},
					"EngineName": {},
					"Username": {},
					"Password": {
						"shape": "S8"
					},
					"ServerName": {},
					"Port": {
						"type": "integer"
					},
					"DatabaseName": {},
					"ExtraConnectionAttributes": {},
					"CertificateArn": {},
					"SslMode": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Endpoint": {
						"shape": "Sc"
					}
				}
			}
		},
		"ModifyReplicationInstance": {
			"input": {
				"type": "structure",
				"required": [
					"ReplicationInstanceArn"
				],
				"members": {
					"ReplicationInstanceArn": {},
					"AllocatedStorage": {
						"type": "integer"
					},
					"ApplyImmediately": {
						"type": "boolean"
					},
					"ReplicationInstanceClass": {},
					"VpcSecurityGroupIds": {
						"shape": "Se"
					},
					"PreferredMaintenanceWindow": {},
					"MultiAZ": {
						"type": "boolean"
					},
					"EngineVersion": {},
					"AllowMajorVersionUpgrade": {
						"type": "boolean"
					},
					"AutoMinorVersionUpgrade": {
						"type": "boolean"
					},
					"ReplicationInstanceIdentifier": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ReplicationInstance": {
						"shape": "Sh"
					}
				}
			}
		},
		"ModifyReplicationSubnetGroup": {
			"input": {
				"type": "structure",
				"required": [
					"ReplicationSubnetGroupIdentifier",
					"SubnetIds"
				],
				"members": {
					"ReplicationSubnetGroupIdentifier": {},
					"ReplicationSubnetGroupDescription": {},
					"SubnetIds": {
						"shape": "Sv"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ReplicationSubnetGroup": {
						"shape": "Sm"
					}
				}
			}
		},
		"ModifyReplicationTask": {
			"input": {
				"type": "structure",
				"required": [
					"ReplicationTaskArn"
				],
				"members": {
					"ReplicationTaskArn": {},
					"ReplicationTaskIdentifier": {},
					"MigrationType": {},
					"TableMappings": {},
					"ReplicationTaskSettings": {},
					"CdcStartTime": {
						"type": "timestamp"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ReplicationTask": {
						"shape": "S10"
					}
				}
			}
		},
		"RefreshSchemas": {
			"input": {
				"type": "structure",
				"required": [
					"EndpointArn",
					"ReplicationInstanceArn"
				],
				"members": {
					"EndpointArn": {},
					"ReplicationInstanceArn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"RefreshSchemasStatus": {
						"shape": "S26"
					}
				}
			}
		},
		"RemoveTagsFromResource": {
			"input": {
				"type": "structure",
				"required": [
					"ResourceArn",
					"TagKeys"
				],
				"members": {
					"ResourceArn": {},
					"TagKeys": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"StartReplicationTask": {
			"input": {
				"type": "structure",
				"required": [
					"ReplicationTaskArn",
					"StartReplicationTaskType"
				],
				"members": {
					"ReplicationTaskArn": {},
					"StartReplicationTaskType": {},
					"CdcStartTime": {
						"type": "timestamp"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ReplicationTask": {
						"shape": "S10"
					}
				}
			}
		},
		"StopReplicationTask": {
			"input": {
				"type": "structure",
				"required": [
					"ReplicationTaskArn"
				],
				"members": {
					"ReplicationTaskArn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ReplicationTask": {
						"shape": "S10"
					}
				}
			}
		},
		"TestConnection": {
			"input": {
				"type": "structure",
				"required": [
					"ReplicationInstanceArn",
					"EndpointArn"
				],
				"members": {
					"ReplicationInstanceArn": {},
					"EndpointArn": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Connection": {
						"shape": "S1s"
					}
				}
			}
		}
	},
	"shapes": {
		"S3": {
			"type": "list",
			"member": {
				"locationName": "Tag",
				"type": "structure",
				"members": {
					"Key": {},
					"Value": {}
				}
			}
		},
		"S8": {
			"type": "string",
			"sensitive": true
		},
		"Sc": {
			"type": "structure",
			"members": {
				"EndpointIdentifier": {},
				"EndpointType": {},
				"EngineName": {},
				"Username": {},
				"ServerName": {},
				"Port": {
					"type": "integer"
				},
				"DatabaseName": {},
				"ExtraConnectionAttributes": {},
				"Status": {},
				"KmsKeyId": {},
				"EndpointArn": {},
				"CertificateArn": {},
				"SslMode": {}
			}
		},
		"Se": {
			"type": "list",
			"member": {
				"locationName": "VpcSecurityGroupId"
			}
		},
		"Sh": {
			"type": "structure",
			"members": {
				"ReplicationInstanceIdentifier": {},
				"ReplicationInstanceClass": {},
				"ReplicationInstanceStatus": {},
				"AllocatedStorage": {
					"type": "integer"
				},
				"InstanceCreateTime": {
					"type": "timestamp"
				},
				"VpcSecurityGroups": {
					"type": "list",
					"member": {
						"locationName": "VpcSecurityGroupMembership",
						"type": "structure",
						"members": {
							"VpcSecurityGroupId": {},
							"Status": {}
						}
					}
				},
				"AvailabilityZone": {},
				"ReplicationSubnetGroup": {
					"shape": "Sm"
				},
				"PreferredMaintenanceWindow": {},
				"PendingModifiedValues": {
					"type": "structure",
					"members": {
						"ReplicationInstanceClass": {},
						"AllocatedStorage": {
							"type": "integer"
						},
						"MultiAZ": {
							"type": "boolean"
						},
						"EngineVersion": {}
					}
				},
				"MultiAZ": {
					"type": "boolean"
				},
				"EngineVersion": {},
				"AutoMinorVersionUpgrade": {
					"type": "boolean"
				},
				"KmsKeyId": {},
				"ReplicationInstanceArn": {},
				"ReplicationInstancePublicIpAddress": {
					"deprecated": true
				},
				"ReplicationInstancePrivateIpAddress": {
					"deprecated": true
				},
				"ReplicationInstancePublicIpAddresses": {
					"type": "list",
					"member": {}
				},
				"ReplicationInstancePrivateIpAddresses": {
					"type": "list",
					"member": {}
				},
				"PubliclyAccessible": {
					"type": "boolean"
				},
				"SecondaryAvailabilityZone": {}
			}
		},
		"Sm": {
			"type": "structure",
			"members": {
				"ReplicationSubnetGroupIdentifier": {},
				"ReplicationSubnetGroupDescription": {},
				"VpcId": {},
				"SubnetGroupStatus": {},
				"Subnets": {
					"type": "list",
					"member": {
						"locationName": "Subnet",
						"type": "structure",
						"members": {
							"SubnetIdentifier": {},
							"SubnetAvailabilityZone": {
								"type": "structure",
								"members": {
									"Name": {}
								}
							},
							"SubnetStatus": {}
						}
					}
				}
			}
		},
		"Sv": {
			"type": "list",
			"member": {
				"locationName": "SubnetIdentifier"
			}
		},
		"S10": {
			"type": "structure",
			"members": {
				"ReplicationTaskIdentifier": {},
				"SourceEndpointArn": {},
				"TargetEndpointArn": {},
				"ReplicationInstanceArn": {},
				"MigrationType": {},
				"TableMappings": {},
				"ReplicationTaskSettings": {},
				"Status": {},
				"LastFailureMessage": {},
				"StopReason": {},
				"ReplicationTaskCreationDate": {
					"type": "timestamp"
				},
				"ReplicationTaskStartDate": {
					"type": "timestamp"
				},
				"ReplicationTaskArn": {},
				"ReplicationTaskStats": {
					"type": "structure",
					"members": {
						"FullLoadProgressPercent": {
							"type": "integer"
						},
						"ElapsedTimeMillis": {
							"type": "long"
						},
						"TablesLoaded": {
							"type": "integer"
						},
						"TablesLoading": {
							"type": "integer"
						},
						"TablesQueued": {
							"type": "integer"
						},
						"TablesErrored": {
							"type": "integer"
						}
					}
				}
			}
		},
		"S15": {
			"type": "structure",
			"members": {
				"CertificateIdentifier": {},
				"CertificateCreationDate": {
					"type": "timestamp"
				},
				"CertificatePem": {},
				"CertificateWallet": {
					"type": "blob"
				},
				"CertificateArn": {},
				"CertificateOwner": {},
				"ValidFromDate": {
					"type": "timestamp"
				},
				"ValidToDate": {
					"type": "timestamp"
				},
				"SigningAlgorithm": {},
				"KeyLength": {
					"type": "integer"
				}
			}
		},
		"S1k": {
			"type": "list",
			"member": {
				"locationName": "Filter",
				"type": "structure",
				"required": [
					"Name",
					"Values"
				],
				"members": {
					"Name": {},
					"Values": {
						"type": "list",
						"member": {
							"locationName": "Value"
						}
					}
				}
			}
		},
		"S1s": {
			"type": "structure",
			"members": {
				"ReplicationInstanceArn": {},
				"EndpointArn": {},
				"Status": {},
				"LastFailureMessage": {},
				"EndpointIdentifier": {},
				"ReplicationInstanceIdentifier": {}
			}
		},
		"S26": {
			"type": "structure",
			"members": {
				"EndpointArn": {},
				"ReplicationInstanceArn": {},
				"Status": {},
				"LastRefreshDate": {
					"type": "timestamp"
				},
				"LastFailureMessage": {}
			}
		}
	}
};

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2015-04-16",
		"endpointPrefix": "ds",
		"jsonVersion": "1.1",
		"protocol": "json",
		"serviceAbbreviation": "Directory Service",
		"serviceFullName": "AWS Directory Service",
		"signatureVersion": "v4",
		"targetPrefix": "DirectoryService_20150416",
		"uid": "ds-2015-04-16"
	},
	"operations": {
		"AddIpRoutes": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId",
					"IpRoutes"
				],
				"members": {
					"DirectoryId": {},
					"IpRoutes": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"CidrIp": {},
								"Description": {}
							}
						}
					},
					"UpdateSecurityGroupForDirectoryControllers": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"AddTagsToResource": {
			"input": {
				"type": "structure",
				"required": [
					"ResourceId",
					"Tags"
				],
				"members": {
					"ResourceId": {},
					"Tags": {
						"shape": "Sb"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"CancelSchemaExtension": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId",
					"SchemaExtensionId"
				],
				"members": {
					"DirectoryId": {},
					"SchemaExtensionId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"ConnectDirectory": {
			"input": {
				"type": "structure",
				"required": [
					"Name",
					"Password",
					"Size",
					"ConnectSettings"
				],
				"members": {
					"Name": {},
					"ShortName": {},
					"Password": {
						"shape": "Sm"
					},
					"Description": {},
					"Size": {},
					"ConnectSettings": {
						"type": "structure",
						"required": [
							"VpcId",
							"SubnetIds",
							"CustomerDnsIps",
							"CustomerUserName"
						],
						"members": {
							"VpcId": {},
							"SubnetIds": {
								"shape": "Sq"
							},
							"CustomerDnsIps": {
								"shape": "Ss"
							},
							"CustomerUserName": {}
						}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DirectoryId": {}
				}
			}
		},
		"CreateAlias": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId",
					"Alias"
				],
				"members": {
					"DirectoryId": {},
					"Alias": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DirectoryId": {},
					"Alias": {}
				}
			}
		},
		"CreateComputer": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId",
					"ComputerName",
					"Password"
				],
				"members": {
					"DirectoryId": {},
					"ComputerName": {},
					"Password": {
						"type": "string",
						"sensitive": true
					},
					"OrganizationalUnitDistinguishedName": {},
					"ComputerAttributes": {
						"shape": "S13"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Computer": {
						"type": "structure",
						"members": {
							"ComputerId": {},
							"ComputerName": {},
							"ComputerAttributes": {
								"shape": "S13"
							}
						}
					}
				}
			}
		},
		"CreateConditionalForwarder": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId",
					"RemoteDomainName",
					"DnsIpAddrs"
				],
				"members": {
					"DirectoryId": {},
					"RemoteDomainName": {},
					"DnsIpAddrs": {
						"shape": "Ss"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"CreateDirectory": {
			"input": {
				"type": "structure",
				"required": [
					"Name",
					"Password",
					"Size"
				],
				"members": {
					"Name": {},
					"ShortName": {},
					"Password": {
						"shape": "S1e"
					},
					"Description": {},
					"Size": {},
					"VpcSettings": {
						"shape": "S1f"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DirectoryId": {}
				}
			}
		},
		"CreateMicrosoftAD": {
			"input": {
				"type": "structure",
				"required": [
					"Name",
					"Password",
					"VpcSettings"
				],
				"members": {
					"Name": {},
					"ShortName": {},
					"Password": {
						"shape": "S1e"
					},
					"Description": {},
					"VpcSettings": {
						"shape": "S1f"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DirectoryId": {}
				}
			}
		},
		"CreateSnapshot": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId"
				],
				"members": {
					"DirectoryId": {},
					"Name": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"SnapshotId": {}
				}
			}
		},
		"CreateTrust": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId",
					"RemoteDomainName",
					"TrustPassword",
					"TrustDirection"
				],
				"members": {
					"DirectoryId": {},
					"RemoteDomainName": {},
					"TrustPassword": {
						"type": "string",
						"sensitive": true
					},
					"TrustDirection": {},
					"TrustType": {},
					"ConditionalForwarderIpAddrs": {
						"shape": "Ss"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"TrustId": {}
				}
			}
		},
		"DeleteConditionalForwarder": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId",
					"RemoteDomainName"
				],
				"members": {
					"DirectoryId": {},
					"RemoteDomainName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DeleteDirectory": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId"
				],
				"members": {
					"DirectoryId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DirectoryId": {}
				}
			}
		},
		"DeleteSnapshot": {
			"input": {
				"type": "structure",
				"required": [
					"SnapshotId"
				],
				"members": {
					"SnapshotId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"SnapshotId": {}
				}
			}
		},
		"DeleteTrust": {
			"input": {
				"type": "structure",
				"required": [
					"TrustId"
				],
				"members": {
					"TrustId": {},
					"DeleteAssociatedConditionalForwarder": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"TrustId": {}
				}
			}
		},
		"DeregisterEventTopic": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId",
					"TopicName"
				],
				"members": {
					"DirectoryId": {},
					"TopicName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DescribeConditionalForwarders": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId"
				],
				"members": {
					"DirectoryId": {},
					"RemoteDomainNames": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ConditionalForwarders": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"RemoteDomainName": {},
								"DnsIpAddrs": {
									"shape": "Ss"
								},
								"ReplicationScope": {}
							}
						}
					}
				}
			}
		},
		"DescribeDirectories": {
			"input": {
				"type": "structure",
				"members": {
					"DirectoryIds": {
						"type": "list",
						"member": {}
					},
					"NextToken": {},
					"Limit": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DirectoryDescriptions": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"DirectoryId": {},
								"Name": {},
								"ShortName": {},
								"Size": {},
								"Alias": {},
								"AccessUrl": {},
								"Description": {},
								"DnsIpAddrs": {
									"shape": "Ss"
								},
								"Stage": {},
								"LaunchTime": {
									"type": "timestamp"
								},
								"StageLastUpdatedDateTime": {
									"type": "timestamp"
								},
								"Type": {},
								"VpcSettings": {
									"type": "structure",
									"members": {
										"VpcId": {},
										"SubnetIds": {
											"shape": "Sq"
										},
										"SecurityGroupId": {},
										"AvailabilityZones": {
											"shape": "S2p"
										}
									}
								},
								"ConnectSettings": {
									"type": "structure",
									"members": {
										"VpcId": {},
										"SubnetIds": {
											"shape": "Sq"
										},
										"CustomerUserName": {},
										"SecurityGroupId": {},
										"AvailabilityZones": {
											"shape": "S2p"
										},
										"ConnectIps": {
											"type": "list",
											"member": {}
										}
									}
								},
								"RadiusSettings": {
									"shape": "S2t"
								},
								"RadiusStatus": {},
								"StageReason": {},
								"SsoEnabled": {
									"type": "boolean"
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeEventTopics": {
			"input": {
				"type": "structure",
				"members": {
					"DirectoryId": {},
					"TopicNames": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"EventTopics": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"DirectoryId": {},
								"TopicName": {},
								"TopicArn": {},
								"CreatedDateTime": {
									"type": "timestamp"
								},
								"Status": {}
							}
						}
					}
				}
			}
		},
		"DescribeSnapshots": {
			"input": {
				"type": "structure",
				"members": {
					"DirectoryId": {},
					"SnapshotIds": {
						"type": "list",
						"member": {}
					},
					"NextToken": {},
					"Limit": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Snapshots": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"DirectoryId": {},
								"SnapshotId": {},
								"Type": {},
								"Name": {},
								"Status": {},
								"StartTime": {
									"type": "timestamp"
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DescribeTrusts": {
			"input": {
				"type": "structure",
				"members": {
					"DirectoryId": {},
					"TrustIds": {
						"type": "list",
						"member": {}
					},
					"NextToken": {},
					"Limit": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Trusts": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"DirectoryId": {},
								"TrustId": {},
								"RemoteDomainName": {},
								"TrustType": {},
								"TrustDirection": {},
								"TrustState": {},
								"CreatedDateTime": {
									"type": "timestamp"
								},
								"LastUpdatedDateTime": {
									"type": "timestamp"
								},
								"StateLastUpdatedDateTime": {
									"type": "timestamp"
								},
								"TrustStateReason": {}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"DisableRadius": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId"
				],
				"members": {
					"DirectoryId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"DisableSso": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId"
				],
				"members": {
					"DirectoryId": {},
					"UserName": {},
					"Password": {
						"shape": "Sm"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"EnableRadius": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId",
					"RadiusSettings"
				],
				"members": {
					"DirectoryId": {},
					"RadiusSettings": {
						"shape": "S2t"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"EnableSso": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId"
				],
				"members": {
					"DirectoryId": {},
					"UserName": {},
					"Password": {
						"shape": "Sm"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"GetDirectoryLimits": {
			"input": {
				"type": "structure",
				"members": {}
			},
			"output": {
				"type": "structure",
				"members": {
					"DirectoryLimits": {
						"type": "structure",
						"members": {
							"CloudOnlyDirectoriesLimit": {
								"type": "integer"
							},
							"CloudOnlyDirectoriesCurrentCount": {
								"type": "integer"
							},
							"CloudOnlyDirectoriesLimitReached": {
								"type": "boolean"
							},
							"CloudOnlyMicrosoftADLimit": {
								"type": "integer"
							},
							"CloudOnlyMicrosoftADCurrentCount": {
								"type": "integer"
							},
							"CloudOnlyMicrosoftADLimitReached": {
								"type": "boolean"
							},
							"ConnectedDirectoriesLimit": {
								"type": "integer"
							},
							"ConnectedDirectoriesCurrentCount": {
								"type": "integer"
							},
							"ConnectedDirectoriesLimitReached": {
								"type": "boolean"
							}
						}
					}
				}
			}
		},
		"GetSnapshotLimits": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId"
				],
				"members": {
					"DirectoryId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"SnapshotLimits": {
						"type": "structure",
						"members": {
							"ManualSnapshotsLimit": {
								"type": "integer"
							},
							"ManualSnapshotsCurrentCount": {
								"type": "integer"
							},
							"ManualSnapshotsLimitReached": {
								"type": "boolean"
							}
						}
					}
				}
			}
		},
		"ListIpRoutes": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId"
				],
				"members": {
					"DirectoryId": {},
					"NextToken": {},
					"Limit": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IpRoutesInfo": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"DirectoryId": {},
								"CidrIp": {},
								"IpRouteStatusMsg": {},
								"AddedDateTime": {
									"type": "timestamp"
								},
								"IpRouteStatusReason": {},
								"Description": {}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"ListSchemaExtensions": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId"
				],
				"members": {
					"DirectoryId": {},
					"NextToken": {},
					"Limit": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"SchemaExtensionsInfo": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"DirectoryId": {},
								"SchemaExtensionId": {},
								"Description": {},
								"SchemaExtensionStatus": {},
								"SchemaExtensionStatusReason": {},
								"StartDateTime": {
									"type": "timestamp"
								},
								"EndDateTime": {
									"type": "timestamp"
								}
							}
						}
					},
					"NextToken": {}
				}
			}
		},
		"ListTagsForResource": {
			"input": {
				"type": "structure",
				"required": [
					"ResourceId"
				],
				"members": {
					"ResourceId": {},
					"NextToken": {},
					"Limit": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Tags": {
						"shape": "Sb"
					},
					"NextToken": {}
				}
			}
		},
		"RegisterEventTopic": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId",
					"TopicName"
				],
				"members": {
					"DirectoryId": {},
					"TopicName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"RemoveIpRoutes": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId",
					"CidrIps"
				],
				"members": {
					"DirectoryId": {},
					"CidrIps": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"RemoveTagsFromResource": {
			"input": {
				"type": "structure",
				"required": [
					"ResourceId",
					"TagKeys"
				],
				"members": {
					"ResourceId": {},
					"TagKeys": {
						"type": "list",
						"member": {}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"RestoreFromSnapshot": {
			"input": {
				"type": "structure",
				"required": [
					"SnapshotId"
				],
				"members": {
					"SnapshotId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"StartSchemaExtension": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId",
					"CreateSnapshotBeforeSchemaExtension",
					"LdifContent",
					"Description"
				],
				"members": {
					"DirectoryId": {},
					"CreateSnapshotBeforeSchemaExtension": {
						"type": "boolean"
					},
					"LdifContent": {},
					"Description": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"SchemaExtensionId": {}
				}
			}
		},
		"UpdateConditionalForwarder": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId",
					"RemoteDomainName",
					"DnsIpAddrs"
				],
				"members": {
					"DirectoryId": {},
					"RemoteDomainName": {},
					"DnsIpAddrs": {
						"shape": "Ss"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"UpdateRadius": {
			"input": {
				"type": "structure",
				"required": [
					"DirectoryId",
					"RadiusSettings"
				],
				"members": {
					"DirectoryId": {},
					"RadiusSettings": {
						"shape": "S2t"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {}
			}
		},
		"VerifyTrust": {
			"input": {
				"type": "structure",
				"required": [
					"TrustId"
				],
				"members": {
					"TrustId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"TrustId": {}
				}
			}
		}
	},
	"shapes": {
		"Sb": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"Key",
					"Value"
				],
				"members": {
					"Key": {},
					"Value": {}
				}
			}
		},
		"Sm": {
			"type": "string",
			"sensitive": true
		},
		"Sq": {
			"type": "list",
			"member": {}
		},
		"Ss": {
			"type": "list",
			"member": {}
		},
		"S13": {
			"type": "list",
			"member": {
				"type": "structure",
				"members": {
					"Name": {},
					"Value": {}
				}
			}
		},
		"S1e": {
			"type": "string",
			"sensitive": true
		},
		"S1f": {
			"type": "structure",
			"required": [
				"VpcId",
				"SubnetIds"
			],
			"members": {
				"VpcId": {},
				"SubnetIds": {
					"shape": "Sq"
				}
			}
		},
		"S2p": {
			"type": "list",
			"member": {}
		},
		"S2t": {
			"type": "structure",
			"members": {
				"RadiusServers": {
					"type": "list",
					"member": {}
				},
				"RadiusPort": {
					"type": "integer"
				},
				"RadiusTimeout": {
					"type": "integer"
				},
				"RadiusRetries": {
					"type": "integer"
				},
				"SharedSecret": {
					"type": "string",
					"sensitive": true
				},
				"AuthenticationProtocol": {},
				"DisplayLabel": {},
				"UseSameUsername": {
					"type": "boolean"
				}
			}
		}
	}
};

/***/ }),
/* 224 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2011-12-05",
		"endpointPrefix": "dynamodb",
		"jsonVersion": "1.0",
		"protocol": "json",
		"serviceAbbreviation": "DynamoDB",
		"serviceFullName": "Amazon DynamoDB",
		"signatureVersion": "v4",
		"targetPrefix": "DynamoDB_20111205",
		"uid": "dynamodb-2011-12-05"
	},
	"operations": {
		"BatchGetItem": {
			"input": {
				"type": "structure",
				"required": [
					"RequestItems"
				],
				"members": {
					"RequestItems": {
						"shape": "S2"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Responses": {
						"type": "map",
						"key": {},
						"value": {
							"type": "structure",
							"members": {
								"Items": {
									"shape": "Sk"
								},
								"ConsumedCapacityUnits": {
									"type": "double"
								}
							}
						}
					},
					"UnprocessedKeys": {
						"shape": "S2"
					}
				}
			}
		},
		"BatchWriteItem": {
			"input": {
				"type": "structure",
				"required": [
					"RequestItems"
				],
				"members": {
					"RequestItems": {
						"shape": "So"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Responses": {
						"type": "map",
						"key": {},
						"value": {
							"type": "structure",
							"members": {
								"ConsumedCapacityUnits": {
									"type": "double"
								}
							}
						}
					},
					"UnprocessedItems": {
						"shape": "So"
					}
				}
			}
		},
		"CreateTable": {
			"input": {
				"type": "structure",
				"required": [
					"TableName",
					"KeySchema",
					"ProvisionedThroughput"
				],
				"members": {
					"TableName": {},
					"KeySchema": {
						"shape": "Sy"
					},
					"ProvisionedThroughput": {
						"shape": "S12"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"TableDescription": {
						"shape": "S15"
					}
				}
			}
		},
		"DeleteItem": {
			"input": {
				"type": "structure",
				"required": [
					"TableName",
					"Key"
				],
				"members": {
					"TableName": {},
					"Key": {
						"shape": "S6"
					},
					"Expected": {
						"shape": "S1b"
					},
					"ReturnValues": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Attributes": {
						"shape": "Sl"
					},
					"ConsumedCapacityUnits": {
						"type": "double"
					}
				}
			}
		},
		"DeleteTable": {
			"input": {
				"type": "structure",
				"required": [
					"TableName"
				],
				"members": {
					"TableName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"TableDescription": {
						"shape": "S15"
					}
				}
			}
		},
		"DescribeTable": {
			"input": {
				"type": "structure",
				"required": [
					"TableName"
				],
				"members": {
					"TableName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Table": {
						"shape": "S15"
					}
				}
			}
		},
		"GetItem": {
			"input": {
				"type": "structure",
				"required": [
					"TableName",
					"Key"
				],
				"members": {
					"TableName": {},
					"Key": {
						"shape": "S6"
					},
					"AttributesToGet": {
						"shape": "Se"
					},
					"ConsistentRead": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Item": {
						"shape": "Sl"
					},
					"ConsumedCapacityUnits": {
						"type": "double"
					}
				}
			}
		},
		"ListTables": {
			"input": {
				"type": "structure",
				"members": {
					"ExclusiveStartTableName": {},
					"Limit": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"TableNames": {
						"type": "list",
						"member": {}
					},
					"LastEvaluatedTableName": {}
				}
			}
		},
		"PutItem": {
			"input": {
				"type": "structure",
				"required": [
					"TableName",
					"Item"
				],
				"members": {
					"TableName": {},
					"Item": {
						"shape": "Ss"
					},
					"Expected": {
						"shape": "S1b"
					},
					"ReturnValues": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Attributes": {
						"shape": "Sl"
					},
					"ConsumedCapacityUnits": {
						"type": "double"
					}
				}
			}
		},
		"Query": {
			"input": {
				"type": "structure",
				"required": [
					"TableName",
					"HashKeyValue"
				],
				"members": {
					"TableName": {},
					"AttributesToGet": {
						"shape": "Se"
					},
					"Limit": {
						"type": "integer"
					},
					"ConsistentRead": {
						"type": "boolean"
					},
					"Count": {
						"type": "boolean"
					},
					"HashKeyValue": {
						"shape": "S7"
					},
					"RangeKeyCondition": {
						"shape": "S1u"
					},
					"ScanIndexForward": {
						"type": "boolean"
					},
					"ExclusiveStartKey": {
						"shape": "S6"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Items": {
						"shape": "Sk"
					},
					"Count": {
						"type": "integer"
					},
					"LastEvaluatedKey": {
						"shape": "S6"
					},
					"ConsumedCapacityUnits": {
						"type": "double"
					}
				}
			}
		},
		"Scan": {
			"input": {
				"type": "structure",
				"required": [
					"TableName"
				],
				"members": {
					"TableName": {},
					"AttributesToGet": {
						"shape": "Se"
					},
					"Limit": {
						"type": "integer"
					},
					"Count": {
						"type": "boolean"
					},
					"ScanFilter": {
						"type": "map",
						"key": {},
						"value": {
							"shape": "S1u"
						}
					},
					"ExclusiveStartKey": {
						"shape": "S6"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Items": {
						"shape": "Sk"
					},
					"Count": {
						"type": "integer"
					},
					"ScannedCount": {
						"type": "integer"
					},
					"LastEvaluatedKey": {
						"shape": "S6"
					},
					"ConsumedCapacityUnits": {
						"type": "double"
					}
				}
			}
		},
		"UpdateItem": {
			"input": {
				"type": "structure",
				"required": [
					"TableName",
					"Key",
					"AttributeUpdates"
				],
				"members": {
					"TableName": {},
					"Key": {
						"shape": "S6"
					},
					"AttributeUpdates": {
						"type": "map",
						"key": {},
						"value": {
							"type": "structure",
							"members": {
								"Value": {
									"shape": "S7"
								},
								"Action": {}
							}
						}
					},
					"Expected": {
						"shape": "S1b"
					},
					"ReturnValues": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Attributes": {
						"shape": "Sl"
					},
					"ConsumedCapacityUnits": {
						"type": "double"
					}
				}
			}
		},
		"UpdateTable": {
			"input": {
				"type": "structure",
				"required": [
					"TableName",
					"ProvisionedThroughput"
				],
				"members": {
					"TableName": {},
					"ProvisionedThroughput": {
						"shape": "S12"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"TableDescription": {
						"shape": "S15"
					}
				}
			}
		}
	},
	"shapes": {
		"S2": {
			"type": "map",
			"key": {},
			"value": {
				"type": "structure",
				"required": [
					"Keys"
				],
				"members": {
					"Keys": {
						"type": "list",
						"member": {
							"shape": "S6"
						}
					},
					"AttributesToGet": {
						"shape": "Se"
					},
					"ConsistentRead": {
						"type": "boolean"
					}
				}
			}
		},
		"S6": {
			"type": "structure",
			"required": [
				"HashKeyElement"
			],
			"members": {
				"HashKeyElement": {
					"shape": "S7"
				},
				"RangeKeyElement": {
					"shape": "S7"
				}
			}
		},
		"S7": {
			"type": "structure",
			"members": {
				"S": {},
				"N": {},
				"B": {
					"type": "blob"
				},
				"SS": {
					"type": "list",
					"member": {}
				},
				"NS": {
					"type": "list",
					"member": {}
				},
				"BS": {
					"type": "list",
					"member": {
						"type": "blob"
					}
				}
			}
		},
		"Se": {
			"type": "list",
			"member": {}
		},
		"Sk": {
			"type": "list",
			"member": {
				"shape": "Sl"
			}
		},
		"Sl": {
			"type": "map",
			"key": {},
			"value": {
				"shape": "S7"
			}
		},
		"So": {
			"type": "map",
			"key": {},
			"value": {
				"type": "list",
				"member": {
					"type": "structure",
					"members": {
						"PutRequest": {
							"type": "structure",
							"required": [
								"Item"
							],
							"members": {
								"Item": {
									"shape": "Ss"
								}
							}
						},
						"DeleteRequest": {
							"type": "structure",
							"required": [
								"Key"
							],
							"members": {
								"Key": {
									"shape": "S6"
								}
							}
						}
					}
				}
			}
		},
		"Ss": {
			"type": "map",
			"key": {},
			"value": {
				"shape": "S7"
			}
		},
		"Sy": {
			"type": "structure",
			"required": [
				"HashKeyElement"
			],
			"members": {
				"HashKeyElement": {
					"shape": "Sz"
				},
				"RangeKeyElement": {
					"shape": "Sz"
				}
			}
		},
		"Sz": {
			"type": "structure",
			"required": [
				"AttributeName",
				"AttributeType"
			],
			"members": {
				"AttributeName": {},
				"AttributeType": {}
			}
		},
		"S12": {
			"type": "structure",
			"required": [
				"ReadCapacityUnits",
				"WriteCapacityUnits"
			],
			"members": {
				"ReadCapacityUnits": {
					"type": "long"
				},
				"WriteCapacityUnits": {
					"type": "long"
				}
			}
		},
		"S15": {
			"type": "structure",
			"members": {
				"TableName": {},
				"KeySchema": {
					"shape": "Sy"
				},
				"TableStatus": {},
				"CreationDateTime": {
					"type": "timestamp"
				},
				"ProvisionedThroughput": {
					"type": "structure",
					"members": {
						"LastIncreaseDateTime": {
							"type": "timestamp"
						},
						"LastDecreaseDateTime": {
							"type": "timestamp"
						},
						"NumberOfDecreasesToday": {
							"type": "long"
						},
						"ReadCapacityUnits": {
							"type": "long"
						},
						"WriteCapacityUnits": {
							"type": "long"
						}
					}
				},
				"TableSizeBytes": {
					"type": "long"
				},
				"ItemCount": {
					"type": "long"
				}
			}
		},
		"S1b": {
			"type": "map",
			"key": {},
			"value": {
				"type": "structure",
				"members": {
					"Value": {
						"shape": "S7"
					},
					"Exists": {
						"type": "boolean"
					}
				}
			}
		},
		"S1u": {
			"type": "structure",
			"required": [
				"ComparisonOperator"
			],
			"members": {
				"AttributeValueList": {
					"type": "list",
					"member": {
						"shape": "S7"
					}
				},
				"ComparisonOperator": {}
			}
		}
	}
};

/***/ }),
/* 225 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"BatchGetItem": {
			"input_token": "RequestItems",
			"output_token": "UnprocessedKeys"
		},
		"ListTables": {
			"input_token": "ExclusiveStartTableName",
			"limit_key": "Limit",
			"output_token": "LastEvaluatedTableName",
			"result_key": "TableNames"
		},
		"Query": {
			"input_token": "ExclusiveStartKey",
			"limit_key": "Limit",
			"output_token": "LastEvaluatedKey",
			"result_key": "Items"
		},
		"Scan": {
			"input_token": "ExclusiveStartKey",
			"limit_key": "Limit",
			"output_token": "LastEvaluatedKey",
			"result_key": "Items"
		}
	}
};

/***/ }),
/* 226 */
/***/ (function(module, exports) {

module.exports = {
	"version": 2,
	"waiters": {
		"TableExists": {
			"delay": 20,
			"operation": "DescribeTable",
			"maxAttempts": 25,
			"acceptors": [
				{
					"expected": "ACTIVE",
					"matcher": "path",
					"state": "success",
					"argument": "Table.TableStatus"
				},
				{
					"expected": "ResourceNotFoundException",
					"matcher": "error",
					"state": "retry"
				}
			]
		},
		"TableNotExists": {
			"delay": 20,
			"operation": "DescribeTable",
			"maxAttempts": 25,
			"acceptors": [
				{
					"expected": "ResourceNotFoundException",
					"matcher": "error",
					"state": "success"
				}
			]
		}
	}
};

/***/ }),
/* 227 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2012-08-10",
		"endpointPrefix": "dynamodb",
		"jsonVersion": "1.0",
		"protocol": "json",
		"serviceAbbreviation": "DynamoDB",
		"serviceFullName": "Amazon DynamoDB",
		"signatureVersion": "v4",
		"targetPrefix": "DynamoDB_20120810",
		"uid": "dynamodb-2012-08-10"
	},
	"operations": {
		"BatchGetItem": {
			"input": {
				"type": "structure",
				"required": [
					"RequestItems"
				],
				"members": {
					"RequestItems": {
						"shape": "S2"
					},
					"ReturnConsumedCapacity": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Responses": {
						"type": "map",
						"key": {},
						"value": {
							"shape": "Sr"
						}
					},
					"UnprocessedKeys": {
						"shape": "S2"
					},
					"ConsumedCapacity": {
						"shape": "St"
					}
				}
			}
		},
		"BatchWriteItem": {
			"input": {
				"type": "structure",
				"required": [
					"RequestItems"
				],
				"members": {
					"RequestItems": {
						"shape": "S10"
					},
					"ReturnConsumedCapacity": {},
					"ReturnItemCollectionMetrics": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UnprocessedItems": {
						"shape": "S10"
					},
					"ItemCollectionMetrics": {
						"type": "map",
						"key": {},
						"value": {
							"type": "list",
							"member": {
								"shape": "S1a"
							}
						}
					},
					"ConsumedCapacity": {
						"shape": "St"
					}
				}
			}
		},
		"CreateTable": {
			"input": {
				"type": "structure",
				"required": [
					"AttributeDefinitions",
					"TableName",
					"KeySchema",
					"ProvisionedThroughput"
				],
				"members": {
					"AttributeDefinitions": {
						"shape": "S1f"
					},
					"TableName": {},
					"KeySchema": {
						"shape": "S1j"
					},
					"LocalSecondaryIndexes": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"IndexName",
								"KeySchema",
								"Projection"
							],
							"members": {
								"IndexName": {},
								"KeySchema": {
									"shape": "S1j"
								},
								"Projection": {
									"shape": "S1o"
								}
							}
						}
					},
					"GlobalSecondaryIndexes": {
						"type": "list",
						"member": {
							"type": "structure",
							"required": [
								"IndexName",
								"KeySchema",
								"Projection",
								"ProvisionedThroughput"
							],
							"members": {
								"IndexName": {},
								"KeySchema": {
									"shape": "S1j"
								},
								"Projection": {
									"shape": "S1o"
								},
								"ProvisionedThroughput": {
									"shape": "S1u"
								}
							}
						}
					},
					"ProvisionedThroughput": {
						"shape": "S1u"
					},
					"StreamSpecification": {
						"shape": "S1w"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"TableDescription": {
						"shape": "S20"
					}
				}
			}
		},
		"DeleteItem": {
			"input": {
				"type": "structure",
				"required": [
					"TableName",
					"Key"
				],
				"members": {
					"TableName": {},
					"Key": {
						"shape": "S6"
					},
					"Expected": {
						"shape": "S2e"
					},
					"ConditionalOperator": {},
					"ReturnValues": {},
					"ReturnConsumedCapacity": {},
					"ReturnItemCollectionMetrics": {},
					"ConditionExpression": {},
					"ExpressionAttributeNames": {
						"shape": "Sm"
					},
					"ExpressionAttributeValues": {
						"shape": "S2m"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Attributes": {
						"shape": "Ss"
					},
					"ConsumedCapacity": {
						"shape": "Su"
					},
					"ItemCollectionMetrics": {
						"shape": "S1a"
					}
				}
			}
		},
		"DeleteTable": {
			"input": {
				"type": "structure",
				"required": [
					"TableName"
				],
				"members": {
					"TableName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"TableDescription": {
						"shape": "S20"
					}
				}
			}
		},
		"DescribeLimits": {
			"input": {
				"type": "structure",
				"members": {}
			},
			"output": {
				"type": "structure",
				"members": {
					"AccountMaxReadCapacityUnits": {
						"type": "long"
					},
					"AccountMaxWriteCapacityUnits": {
						"type": "long"
					},
					"TableMaxReadCapacityUnits": {
						"type": "long"
					},
					"TableMaxWriteCapacityUnits": {
						"type": "long"
					}
				}
			}
		},
		"DescribeTable": {
			"input": {
				"type": "structure",
				"required": [
					"TableName"
				],
				"members": {
					"TableName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Table": {
						"shape": "S20"
					}
				}
			}
		},
		"DescribeTimeToLive": {
			"input": {
				"type": "structure",
				"required": [
					"TableName"
				],
				"members": {
					"TableName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"TimeToLiveDescription": {
						"type": "structure",
						"members": {
							"TimeToLiveStatus": {},
							"AttributeName": {}
						}
					}
				}
			}
		},
		"GetItem": {
			"input": {
				"type": "structure",
				"required": [
					"TableName",
					"Key"
				],
				"members": {
					"TableName": {},
					"Key": {
						"shape": "S6"
					},
					"AttributesToGet": {
						"shape": "Sj"
					},
					"ConsistentRead": {
						"type": "boolean"
					},
					"ReturnConsumedCapacity": {},
					"ProjectionExpression": {},
					"ExpressionAttributeNames": {
						"shape": "Sm"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Item": {
						"shape": "Ss"
					},
					"ConsumedCapacity": {
						"shape": "Su"
					}
				}
			}
		},
		"ListTables": {
			"input": {
				"type": "structure",
				"members": {
					"ExclusiveStartTableName": {},
					"Limit": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"TableNames": {
						"type": "list",
						"member": {}
					},
					"LastEvaluatedTableName": {}
				}
			}
		},
		"ListTagsOfResource": {
			"input": {
				"type": "structure",
				"required": [
					"ResourceArn"
				],
				"members": {
					"ResourceArn": {},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Tags": {
						"shape": "S3a"
					},
					"NextToken": {}
				}
			}
		},
		"PutItem": {
			"input": {
				"type": "structure",
				"required": [
					"TableName",
					"Item"
				],
				"members": {
					"TableName": {},
					"Item": {
						"shape": "S14"
					},
					"Expected": {
						"shape": "S2e"
					},
					"ReturnValues": {},
					"ReturnConsumedCapacity": {},
					"ReturnItemCollectionMetrics": {},
					"ConditionalOperator": {},
					"ConditionExpression": {},
					"ExpressionAttributeNames": {
						"shape": "Sm"
					},
					"ExpressionAttributeValues": {
						"shape": "S2m"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Attributes": {
						"shape": "Ss"
					},
					"ConsumedCapacity": {
						"shape": "Su"
					},
					"ItemCollectionMetrics": {
						"shape": "S1a"
					}
				}
			}
		},
		"Query": {
			"input": {
				"type": "structure",
				"required": [
					"TableName"
				],
				"members": {
					"TableName": {},
					"IndexName": {},
					"Select": {},
					"AttributesToGet": {
						"shape": "Sj"
					},
					"Limit": {
						"type": "integer"
					},
					"ConsistentRead": {
						"type": "boolean"
					},
					"KeyConditions": {
						"type": "map",
						"key": {},
						"value": {
							"shape": "S3k"
						}
					},
					"QueryFilter": {
						"shape": "S3l"
					},
					"ConditionalOperator": {},
					"ScanIndexForward": {
						"type": "boolean"
					},
					"ExclusiveStartKey": {
						"shape": "S6"
					},
					"ReturnConsumedCapacity": {},
					"ProjectionExpression": {},
					"FilterExpression": {},
					"KeyConditionExpression": {},
					"ExpressionAttributeNames": {
						"shape": "Sm"
					},
					"ExpressionAttributeValues": {
						"shape": "S2m"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Items": {
						"shape": "Sr"
					},
					"Count": {
						"type": "integer"
					},
					"ScannedCount": {
						"type": "integer"
					},
					"LastEvaluatedKey": {
						"shape": "S6"
					},
					"ConsumedCapacity": {
						"shape": "Su"
					}
				}
			}
		},
		"Scan": {
			"input": {
				"type": "structure",
				"required": [
					"TableName"
				],
				"members": {
					"TableName": {},
					"IndexName": {},
					"AttributesToGet": {
						"shape": "Sj"
					},
					"Limit": {
						"type": "integer"
					},
					"Select": {},
					"ScanFilter": {
						"shape": "S3l"
					},
					"ConditionalOperator": {},
					"ExclusiveStartKey": {
						"shape": "S6"
					},
					"ReturnConsumedCapacity": {},
					"TotalSegments": {
						"type": "integer"
					},
					"Segment": {
						"type": "integer"
					},
					"ProjectionExpression": {},
					"FilterExpression": {},
					"ExpressionAttributeNames": {
						"shape": "Sm"
					},
					"ExpressionAttributeValues": {
						"shape": "S2m"
					},
					"ConsistentRead": {
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Items": {
						"shape": "Sr"
					},
					"Count": {
						"type": "integer"
					},
					"ScannedCount": {
						"type": "integer"
					},
					"LastEvaluatedKey": {
						"shape": "S6"
					},
					"ConsumedCapacity": {
						"shape": "Su"
					}
				}
			}
		},
		"TagResource": {
			"input": {
				"type": "structure",
				"required": [
					"ResourceArn",
					"Tags"
				],
				"members": {
					"ResourceArn": {},
					"Tags": {
						"shape": "S3a"
					}
				}
			}
		},
		"UntagResource": {
			"input": {
				"type": "structure",
				"required": [
					"ResourceArn",
					"TagKeys"
				],
				"members": {
					"ResourceArn": {},
					"TagKeys": {
						"type": "list",
						"member": {}
					}
				}
			}
		},
		"UpdateItem": {
			"input": {
				"type": "structure",
				"required": [
					"TableName",
					"Key"
				],
				"members": {
					"TableName": {},
					"Key": {
						"shape": "S6"
					},
					"AttributeUpdates": {
						"type": "map",
						"key": {},
						"value": {
							"type": "structure",
							"members": {
								"Value": {
									"shape": "S8"
								},
								"Action": {}
							}
						}
					},
					"Expected": {
						"shape": "S2e"
					},
					"ConditionalOperator": {},
					"ReturnValues": {},
					"ReturnConsumedCapacity": {},
					"ReturnItemCollectionMetrics": {},
					"UpdateExpression": {},
					"ConditionExpression": {},
					"ExpressionAttributeNames": {
						"shape": "Sm"
					},
					"ExpressionAttributeValues": {
						"shape": "S2m"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Attributes": {
						"shape": "Ss"
					},
					"ConsumedCapacity": {
						"shape": "Su"
					},
					"ItemCollectionMetrics": {
						"shape": "S1a"
					}
				}
			}
		},
		"UpdateTable": {
			"input": {
				"type": "structure",
				"required": [
					"TableName"
				],
				"members": {
					"AttributeDefinitions": {
						"shape": "S1f"
					},
					"TableName": {},
					"ProvisionedThroughput": {
						"shape": "S1u"
					},
					"GlobalSecondaryIndexUpdates": {
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"Update": {
									"type": "structure",
									"required": [
										"IndexName",
										"ProvisionedThroughput"
									],
									"members": {
										"IndexName": {},
										"ProvisionedThroughput": {
											"shape": "S1u"
										}
									}
								},
								"Create": {
									"type": "structure",
									"required": [
										"IndexName",
										"KeySchema",
										"Projection",
										"ProvisionedThroughput"
									],
									"members": {
										"IndexName": {},
										"KeySchema": {
											"shape": "S1j"
										},
										"Projection": {
											"shape": "S1o"
										},
										"ProvisionedThroughput": {
											"shape": "S1u"
										}
									}
								},
								"Delete": {
									"type": "structure",
									"required": [
										"IndexName"
									],
									"members": {
										"IndexName": {}
									}
								}
							}
						}
					},
					"StreamSpecification": {
						"shape": "S1w"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"TableDescription": {
						"shape": "S20"
					}
				}
			}
		},
		"UpdateTimeToLive": {
			"input": {
				"type": "structure",
				"required": [
					"TableName",
					"TimeToLiveSpecification"
				],
				"members": {
					"TableName": {},
					"TimeToLiveSpecification": {
						"shape": "S4a"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"TimeToLiveSpecification": {
						"shape": "S4a"
					}
				}
			}
		}
	},
	"shapes": {
		"S2": {
			"type": "map",
			"key": {},
			"value": {
				"type": "structure",
				"required": [
					"Keys"
				],
				"members": {
					"Keys": {
						"type": "list",
						"member": {
							"shape": "S6"
						}
					},
					"AttributesToGet": {
						"shape": "Sj"
					},
					"ConsistentRead": {
						"type": "boolean"
					},
					"ProjectionExpression": {},
					"ExpressionAttributeNames": {
						"shape": "Sm"
					}
				}
			}
		},
		"S6": {
			"type": "map",
			"key": {},
			"value": {
				"shape": "S8"
			}
		},
		"S8": {
			"type": "structure",
			"members": {
				"S": {},
				"N": {},
				"B": {
					"type": "blob"
				},
				"SS": {
					"type": "list",
					"member": {}
				},
				"NS": {
					"type": "list",
					"member": {}
				},
				"BS": {
					"type": "list",
					"member": {
						"type": "blob"
					}
				},
				"M": {
					"type": "map",
					"key": {},
					"value": {
						"shape": "S8"
					}
				},
				"L": {
					"type": "list",
					"member": {
						"shape": "S8"
					}
				},
				"NULL": {
					"type": "boolean"
				},
				"BOOL": {
					"type": "boolean"
				}
			}
		},
		"Sj": {
			"type": "list",
			"member": {}
		},
		"Sm": {
			"type": "map",
			"key": {},
			"value": {}
		},
		"Sr": {
			"type": "list",
			"member": {
				"shape": "Ss"
			}
		},
		"Ss": {
			"type": "map",
			"key": {},
			"value": {
				"shape": "S8"
			}
		},
		"St": {
			"type": "list",
			"member": {
				"shape": "Su"
			}
		},
		"Su": {
			"type": "structure",
			"members": {
				"TableName": {},
				"CapacityUnits": {
					"type": "double"
				},
				"Table": {
					"shape": "Sw"
				},
				"LocalSecondaryIndexes": {
					"shape": "Sx"
				},
				"GlobalSecondaryIndexes": {
					"shape": "Sx"
				}
			}
		},
		"Sw": {
			"type": "structure",
			"members": {
				"CapacityUnits": {
					"type": "double"
				}
			}
		},
		"Sx": {
			"type": "map",
			"key": {},
			"value": {
				"shape": "Sw"
			}
		},
		"S10": {
			"type": "map",
			"key": {},
			"value": {
				"type": "list",
				"member": {
					"type": "structure",
					"members": {
						"PutRequest": {
							"type": "structure",
							"required": [
								"Item"
							],
							"members": {
								"Item": {
									"shape": "S14"
								}
							}
						},
						"DeleteRequest": {
							"type": "structure",
							"required": [
								"Key"
							],
							"members": {
								"Key": {
									"shape": "S6"
								}
							}
						}
					}
				}
			}
		},
		"S14": {
			"type": "map",
			"key": {},
			"value": {
				"shape": "S8"
			}
		},
		"S1a": {
			"type": "structure",
			"members": {
				"ItemCollectionKey": {
					"type": "map",
					"key": {},
					"value": {
						"shape": "S8"
					}
				},
				"SizeEstimateRangeGB": {
					"type": "list",
					"member": {
						"type": "double"
					}
				}
			}
		},
		"S1f": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"AttributeName",
					"AttributeType"
				],
				"members": {
					"AttributeName": {},
					"AttributeType": {}
				}
			}
		},
		"S1j": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"AttributeName",
					"KeyType"
				],
				"members": {
					"AttributeName": {},
					"KeyType": {}
				}
			}
		},
		"S1o": {
			"type": "structure",
			"members": {
				"ProjectionType": {},
				"NonKeyAttributes": {
					"type": "list",
					"member": {}
				}
			}
		},
		"S1u": {
			"type": "structure",
			"required": [
				"ReadCapacityUnits",
				"WriteCapacityUnits"
			],
			"members": {
				"ReadCapacityUnits": {
					"type": "long"
				},
				"WriteCapacityUnits": {
					"type": "long"
				}
			}
		},
		"S1w": {
			"type": "structure",
			"members": {
				"StreamEnabled": {
					"type": "boolean"
				},
				"StreamViewType": {}
			}
		},
		"S20": {
			"type": "structure",
			"members": {
				"AttributeDefinitions": {
					"shape": "S1f"
				},
				"TableName": {},
				"KeySchema": {
					"shape": "S1j"
				},
				"TableStatus": {},
				"CreationDateTime": {
					"type": "timestamp"
				},
				"ProvisionedThroughput": {
					"shape": "S23"
				},
				"TableSizeBytes": {
					"type": "long"
				},
				"ItemCount": {
					"type": "long"
				},
				"TableArn": {},
				"LocalSecondaryIndexes": {
					"type": "list",
					"member": {
						"type": "structure",
						"members": {
							"IndexName": {},
							"KeySchema": {
								"shape": "S1j"
							},
							"Projection": {
								"shape": "S1o"
							},
							"IndexSizeBytes": {
								"type": "long"
							},
							"ItemCount": {
								"type": "long"
							},
							"IndexArn": {}
						}
					}
				},
				"GlobalSecondaryIndexes": {
					"type": "list",
					"member": {
						"type": "structure",
						"members": {
							"IndexName": {},
							"KeySchema": {
								"shape": "S1j"
							},
							"Projection": {
								"shape": "S1o"
							},
							"IndexStatus": {},
							"Backfilling": {
								"type": "boolean"
							},
							"ProvisionedThroughput": {
								"shape": "S23"
							},
							"IndexSizeBytes": {
								"type": "long"
							},
							"ItemCount": {
								"type": "long"
							},
							"IndexArn": {}
						}
					}
				},
				"StreamSpecification": {
					"shape": "S1w"
				},
				"LatestStreamLabel": {},
				"LatestStreamArn": {}
			}
		},
		"S23": {
			"type": "structure",
			"members": {
				"LastIncreaseDateTime": {
					"type": "timestamp"
				},
				"LastDecreaseDateTime": {
					"type": "timestamp"
				},
				"NumberOfDecreasesToday": {
					"type": "long"
				},
				"ReadCapacityUnits": {
					"type": "long"
				},
				"WriteCapacityUnits": {
					"type": "long"
				}
			}
		},
		"S2e": {
			"type": "map",
			"key": {},
			"value": {
				"type": "structure",
				"members": {
					"Value": {
						"shape": "S8"
					},
					"Exists": {
						"type": "boolean"
					},
					"ComparisonOperator": {},
					"AttributeValueList": {
						"shape": "S2i"
					}
				}
			}
		},
		"S2i": {
			"type": "list",
			"member": {
				"shape": "S8"
			}
		},
		"S2m": {
			"type": "map",
			"key": {},
			"value": {
				"shape": "S8"
			}
		},
		"S3a": {
			"type": "list",
			"member": {
				"type": "structure",
				"required": [
					"Key",
					"Value"
				],
				"members": {
					"Key": {},
					"Value": {}
				}
			}
		},
		"S3k": {
			"type": "structure",
			"required": [
				"ComparisonOperator"
			],
			"members": {
				"AttributeValueList": {
					"shape": "S2i"
				},
				"ComparisonOperator": {}
			}
		},
		"S3l": {
			"type": "map",
			"key": {},
			"value": {
				"shape": "S3k"
			}
		},
		"S4a": {
			"type": "structure",
			"required": [
				"Enabled",
				"AttributeName"
			],
			"members": {
				"Enabled": {
					"type": "boolean"
				},
				"AttributeName": {}
			}
		}
	}
};

/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports = {
	"pagination": {
		"BatchGetItem": {
			"input_token": "RequestItems",
			"output_token": "UnprocessedKeys"
		},
		"ListTables": {
			"input_token": "ExclusiveStartTableName",
			"limit_key": "Limit",
			"output_token": "LastEvaluatedTableName",
			"result_key": "TableNames"
		},
		"Query": {
			"input_token": "ExclusiveStartKey",
			"limit_key": "Limit",
			"output_token": "LastEvaluatedKey",
			"result_key": "Items"
		},
		"Scan": {
			"input_token": "ExclusiveStartKey",
			"limit_key": "Limit",
			"output_token": "LastEvaluatedKey",
			"result_key": "Items"
		}
	}
};

/***/ }),
/* 229 */
/***/ (function(module, exports) {

module.exports = {
	"version": 2,
	"waiters": {
		"TableExists": {
			"delay": 20,
			"operation": "DescribeTable",
			"maxAttempts": 25,
			"acceptors": [
				{
					"expected": "ACTIVE",
					"matcher": "path",
					"state": "success",
					"argument": "Table.TableStatus"
				},
				{
					"expected": "ResourceNotFoundException",
					"matcher": "error",
					"state": "retry"
				}
			]
		},
		"TableNotExists": {
			"delay": 20,
			"operation": "DescribeTable",
			"maxAttempts": 25,
			"acceptors": [
				{
					"expected": "ResourceNotFoundException",
					"matcher": "error",
					"state": "success"
				}
			]
		}
	}
};

/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports = {
	"version": "2.0",
	"metadata": {
		"apiVersion": "2016-11-15",
		"endpointPrefix": "ec2",
		"protocol": "ec2",
		"serviceAbbreviation": "Amazon EC2",
		"serviceFullName": "Amazon Elastic Compute Cloud",
		"signatureVersion": "v4",
		"uid": "ec2-2016-11-15",
		"xmlNamespace": "http://ec2.amazonaws.com/doc/2016-11-15"
	},
	"operations": {
		"AcceptReservedInstancesExchangeQuote": {
			"input": {
				"type": "structure",
				"required": [
					"ReservedInstanceIds"
				],
				"members": {
					"DryRun": {
						"type": "boolean"
					},
					"ReservedInstanceIds": {
						"shape": "S3",
						"locationName": "ReservedInstanceId"
					},
					"TargetConfigurations": {
						"shape": "S5",
						"locationName": "TargetConfiguration"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ExchangeId": {
						"locationName": "exchangeId"
					}
				}
			}
		},
		"AcceptVpcPeeringConnection": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"VpcPeeringConnectionId": {
						"locationName": "vpcPeeringConnectionId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"VpcPeeringConnection": {
						"shape": "Sb",
						"locationName": "vpcPeeringConnection"
					}
				}
			}
		},
		"AllocateAddress": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"Domain": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"PublicIp": {
						"locationName": "publicIp"
					},
					"Domain": {
						"locationName": "domain"
					},
					"AllocationId": {
						"locationName": "allocationId"
					}
				}
			}
		},
		"AllocateHosts": {
			"input": {
				"type": "structure",
				"required": [
					"InstanceType",
					"Quantity",
					"AvailabilityZone"
				],
				"members": {
					"AutoPlacement": {
						"locationName": "autoPlacement"
					},
					"ClientToken": {
						"locationName": "clientToken"
					},
					"InstanceType": {
						"locationName": "instanceType"
					},
					"Quantity": {
						"locationName": "quantity",
						"type": "integer"
					},
					"AvailabilityZone": {
						"locationName": "availabilityZone"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"HostIds": {
						"shape": "Sr",
						"locationName": "hostIdSet"
					}
				}
			}
		},
		"AssignIpv6Addresses": {
			"input": {
				"type": "structure",
				"required": [
					"NetworkInterfaceId"
				],
				"members": {
					"NetworkInterfaceId": {
						"locationName": "networkInterfaceId"
					},
					"Ipv6Addresses": {
						"shape": "St",
						"locationName": "ipv6Addresses"
					},
					"Ipv6AddressCount": {
						"locationName": "ipv6AddressCount",
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"NetworkInterfaceId": {
						"locationName": "networkInterfaceId"
					},
					"AssignedIpv6Addresses": {
						"shape": "St",
						"locationName": "assignedIpv6Addresses"
					}
				}
			}
		},
		"AssignPrivateIpAddresses": {
			"input": {
				"type": "structure",
				"required": [
					"NetworkInterfaceId"
				],
				"members": {
					"NetworkInterfaceId": {
						"locationName": "networkInterfaceId"
					},
					"PrivateIpAddresses": {
						"shape": "Sw",
						"locationName": "privateIpAddress"
					},
					"SecondaryPrivateIpAddressCount": {
						"locationName": "secondaryPrivateIpAddressCount",
						"type": "integer"
					},
					"AllowReassignment": {
						"locationName": "allowReassignment",
						"type": "boolean"
					}
				}
			}
		},
		"AssociateAddress": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"InstanceId": {},
					"PublicIp": {},
					"AllocationId": {},
					"NetworkInterfaceId": {
						"locationName": "networkInterfaceId"
					},
					"PrivateIpAddress": {
						"locationName": "privateIpAddress"
					},
					"AllowReassociation": {
						"locationName": "allowReassociation",
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"AssociationId": {
						"locationName": "associationId"
					}
				}
			}
		},
		"AssociateDhcpOptions": {
			"input": {
				"type": "structure",
				"required": [
					"DhcpOptionsId",
					"VpcId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"DhcpOptionsId": {},
					"VpcId": {}
				}
			}
		},
		"AssociateIamInstanceProfile": {
			"input": {
				"type": "structure",
				"required": [
					"IamInstanceProfile",
					"InstanceId"
				],
				"members": {
					"IamInstanceProfile": {
						"shape": "S11"
					},
					"InstanceId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IamInstanceProfileAssociation": {
						"shape": "S13",
						"locationName": "iamInstanceProfileAssociation"
					}
				}
			}
		},
		"AssociateRouteTable": {
			"input": {
				"type": "structure",
				"required": [
					"SubnetId",
					"RouteTableId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"SubnetId": {
						"locationName": "subnetId"
					},
					"RouteTableId": {
						"locationName": "routeTableId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"AssociationId": {
						"locationName": "associationId"
					}
				}
			}
		},
		"AssociateSubnetCidrBlock": {
			"input": {
				"type": "structure",
				"required": [
					"SubnetId",
					"Ipv6CidrBlock"
				],
				"members": {
					"SubnetId": {
						"locationName": "subnetId"
					},
					"Ipv6CidrBlock": {
						"locationName": "ipv6CidrBlock"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"SubnetId": {
						"locationName": "subnetId"
					},
					"Ipv6CidrBlockAssociation": {
						"shape": "S1a",
						"locationName": "ipv6CidrBlockAssociation"
					}
				}
			}
		},
		"AssociateVpcCidrBlock": {
			"input": {
				"type": "structure",
				"required": [
					"VpcId"
				],
				"members": {
					"VpcId": {
						"locationName": "vpcId"
					},
					"AmazonProvidedIpv6CidrBlock": {
						"locationName": "amazonProvidedIpv6CidrBlock",
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"VpcId": {
						"locationName": "vpcId"
					},
					"Ipv6CidrBlockAssociation": {
						"shape": "S1f",
						"locationName": "ipv6CidrBlockAssociation"
					}
				}
			}
		},
		"AttachClassicLinkVpc": {
			"input": {
				"type": "structure",
				"required": [
					"InstanceId",
					"VpcId",
					"Groups"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"InstanceId": {
						"locationName": "instanceId"
					},
					"VpcId": {
						"locationName": "vpcId"
					},
					"Groups": {
						"shape": "S1j",
						"locationName": "SecurityGroupId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Return": {
						"locationName": "return",
						"type": "boolean"
					}
				}
			}
		},
		"AttachInternetGateway": {
			"input": {
				"type": "structure",
				"required": [
					"InternetGatewayId",
					"VpcId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"InternetGatewayId": {
						"locationName": "internetGatewayId"
					},
					"VpcId": {
						"locationName": "vpcId"
					}
				}
			}
		},
		"AttachNetworkInterface": {
			"input": {
				"type": "structure",
				"required": [
					"NetworkInterfaceId",
					"InstanceId",
					"DeviceIndex"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"NetworkInterfaceId": {
						"locationName": "networkInterfaceId"
					},
					"InstanceId": {
						"locationName": "instanceId"
					},
					"DeviceIndex": {
						"locationName": "deviceIndex",
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"AttachmentId": {
						"locationName": "attachmentId"
					}
				}
			}
		},
		"AttachVolume": {
			"input": {
				"type": "structure",
				"required": [
					"VolumeId",
					"InstanceId",
					"Device"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"VolumeId": {},
					"InstanceId": {},
					"Device": {}
				}
			},
			"output": {
				"shape": "S1p"
			}
		},
		"AttachVpnGateway": {
			"input": {
				"type": "structure",
				"required": [
					"VpnGatewayId",
					"VpcId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"VpnGatewayId": {},
					"VpcId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"VpcAttachment": {
						"shape": "S1t",
						"locationName": "attachment"
					}
				}
			}
		},
		"AuthorizeSecurityGroupEgress": {
			"input": {
				"type": "structure",
				"required": [
					"GroupId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"GroupId": {
						"locationName": "groupId"
					},
					"SourceSecurityGroupName": {
						"locationName": "sourceSecurityGroupName"
					},
					"SourceSecurityGroupOwnerId": {
						"locationName": "sourceSecurityGroupOwnerId"
					},
					"IpProtocol": {
						"locationName": "ipProtocol"
					},
					"FromPort": {
						"locationName": "fromPort",
						"type": "integer"
					},
					"ToPort": {
						"locationName": "toPort",
						"type": "integer"
					},
					"CidrIp": {
						"locationName": "cidrIp"
					},
					"IpPermissions": {
						"shape": "S1w",
						"locationName": "ipPermissions"
					}
				}
			}
		},
		"AuthorizeSecurityGroupIngress": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"GroupName": {},
					"GroupId": {},
					"SourceSecurityGroupName": {},
					"SourceSecurityGroupOwnerId": {},
					"IpProtocol": {},
					"FromPort": {
						"type": "integer"
					},
					"ToPort": {
						"type": "integer"
					},
					"CidrIp": {},
					"IpPermissions": {
						"shape": "S1w"
					}
				}
			}
		},
		"BundleInstance": {
			"input": {
				"type": "structure",
				"required": [
					"InstanceId",
					"Storage"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"InstanceId": {},
					"Storage": {
						"shape": "S28"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"BundleTask": {
						"shape": "S2c",
						"locationName": "bundleInstanceTask"
					}
				}
			}
		},
		"CancelBundleTask": {
			"input": {
				"type": "structure",
				"required": [
					"BundleId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"BundleId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"BundleTask": {
						"shape": "S2c",
						"locationName": "bundleInstanceTask"
					}
				}
			}
		},
		"CancelConversionTask": {
			"input": {
				"type": "structure",
				"required": [
					"ConversionTaskId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"ConversionTaskId": {
						"locationName": "conversionTaskId"
					},
					"ReasonMessage": {
						"locationName": "reasonMessage"
					}
				}
			}
		},
		"CancelExportTask": {
			"input": {
				"type": "structure",
				"required": [
					"ExportTaskId"
				],
				"members": {
					"ExportTaskId": {
						"locationName": "exportTaskId"
					}
				}
			}
		},
		"CancelImportTask": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"type": "boolean"
					},
					"ImportTaskId": {},
					"CancelReason": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ImportTaskId": {
						"locationName": "importTaskId"
					},
					"State": {
						"locationName": "state"
					},
					"PreviousState": {
						"locationName": "previousState"
					}
				}
			}
		},
		"CancelReservedInstancesListing": {
			"input": {
				"type": "structure",
				"required": [
					"ReservedInstancesListingId"
				],
				"members": {
					"ReservedInstancesListingId": {
						"locationName": "reservedInstancesListingId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ReservedInstancesListings": {
						"shape": "S2n",
						"locationName": "reservedInstancesListingsSet"
					}
				}
			}
		},
		"CancelSpotFleetRequests": {
			"input": {
				"type": "structure",
				"required": [
					"SpotFleetRequestIds",
					"TerminateInstances"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"SpotFleetRequestIds": {
						"shape": "S2z",
						"locationName": "spotFleetRequestId"
					},
					"TerminateInstances": {
						"locationName": "terminateInstances",
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"UnsuccessfulFleetRequests": {
						"locationName": "unsuccessfulFleetRequestSet",
						"type": "list",
						"member": {
							"locationName": "item",
							"type": "structure",
							"required": [
								"SpotFleetRequestId",
								"Error"
							],
							"members": {
								"SpotFleetRequestId": {
									"locationName": "spotFleetRequestId"
								},
								"Error": {
									"locationName": "error",
									"type": "structure",
									"required": [
										"Code",
										"Message"
									],
									"members": {
										"Code": {
											"locationName": "code"
										},
										"Message": {
											"locationName": "message"
										}
									}
								}
							}
						}
					},
					"SuccessfulFleetRequests": {
						"locationName": "successfulFleetRequestSet",
						"type": "list",
						"member": {
							"locationName": "item",
							"type": "structure",
							"required": [
								"SpotFleetRequestId",
								"CurrentSpotFleetRequestState",
								"PreviousSpotFleetRequestState"
							],
							"members": {
								"SpotFleetRequestId": {
									"locationName": "spotFleetRequestId"
								},
								"CurrentSpotFleetRequestState": {
									"locationName": "currentSpotFleetRequestState"
								},
								"PreviousSpotFleetRequestState": {
									"locationName": "previousSpotFleetRequestState"
								}
							}
						}
					}
				}
			}
		},
		"CancelSpotInstanceRequests": {
			"input": {
				"type": "structure",
				"required": [
					"SpotInstanceRequestIds"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"SpotInstanceRequestIds": {
						"shape": "S39",
						"locationName": "SpotInstanceRequestId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"CancelledSpotInstanceRequests": {
						"locationName": "spotInstanceRequestSet",
						"type": "list",
						"member": {
							"locationName": "item",
							"type": "structure",
							"members": {
								"SpotInstanceRequestId": {
									"locationName": "spotInstanceRequestId"
								},
								"State": {
									"locationName": "state"
								}
							}
						}
					}
				}
			}
		},
		"ConfirmProductInstance": {
			"input": {
				"type": "structure",
				"required": [
					"ProductCode",
					"InstanceId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"ProductCode": {},
					"InstanceId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"OwnerId": {
						"locationName": "ownerId"
					},
					"Return": {
						"locationName": "return",
						"type": "boolean"
					}
				}
			}
		},
		"CopyImage": {
			"input": {
				"type": "structure",
				"required": [
					"SourceRegion",
					"SourceImageId",
					"Name"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"SourceRegion": {},
					"SourceImageId": {},
					"Name": {},
					"Description": {},
					"ClientToken": {},
					"Encrypted": {
						"locationName": "encrypted",
						"type": "boolean"
					},
					"KmsKeyId": {
						"locationName": "kmsKeyId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ImageId": {
						"locationName": "imageId"
					}
				}
			}
		},
		"CopySnapshot": {
			"input": {
				"type": "structure",
				"required": [
					"SourceRegion",
					"SourceSnapshotId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"SourceRegion": {},
					"SourceSnapshotId": {},
					"Description": {},
					"DestinationRegion": {
						"locationName": "destinationRegion"
					},
					"PresignedUrl": {
						"locationName": "presignedUrl"
					},
					"Encrypted": {
						"locationName": "encrypted",
						"type": "boolean"
					},
					"KmsKeyId": {
						"locationName": "kmsKeyId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"SnapshotId": {
						"locationName": "snapshotId"
					}
				}
			}
		},
		"CreateCustomerGateway": {
			"input": {
				"type": "structure",
				"required": [
					"Type",
					"PublicIp",
					"BgpAsn"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"Type": {},
					"PublicIp": {
						"locationName": "IpAddress"
					},
					"BgpAsn": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"CustomerGateway": {
						"shape": "S3n",
						"locationName": "customerGateway"
					}
				}
			}
		},
		"CreateDhcpOptions": {
			"input": {
				"type": "structure",
				"required": [
					"DhcpConfigurations"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"DhcpConfigurations": {
						"locationName": "dhcpConfiguration",
						"type": "list",
						"member": {
							"locationName": "item",
							"type": "structure",
							"members": {
								"Key": {
									"locationName": "key"
								},
								"Values": {
									"shape": "S2z",
									"locationName": "Value"
								}
							}
						}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DhcpOptions": {
						"shape": "S3s",
						"locationName": "dhcpOptions"
					}
				}
			}
		},
		"CreateEgressOnlyInternetGateway": {
			"input": {
				"type": "structure",
				"required": [
					"VpcId"
				],
				"members": {
					"DryRun": {
						"type": "boolean"
					},
					"VpcId": {},
					"ClientToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"EgressOnlyInternetGateway": {
						"shape": "S3z",
						"locationName": "egressOnlyInternetGateway"
					},
					"ClientToken": {
						"locationName": "clientToken"
					}
				}
			}
		},
		"CreateFlowLogs": {
			"input": {
				"type": "structure",
				"required": [
					"ResourceIds",
					"ResourceType",
					"TrafficType",
					"LogGroupName",
					"DeliverLogsPermissionArn"
				],
				"members": {
					"ResourceIds": {
						"shape": "S2z",
						"locationName": "ResourceId"
					},
					"ResourceType": {},
					"TrafficType": {},
					"LogGroupName": {},
					"DeliverLogsPermissionArn": {},
					"ClientToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"FlowLogIds": {
						"shape": "S2z",
						"locationName": "flowLogIdSet"
					},
					"ClientToken": {
						"locationName": "clientToken"
					},
					"Unsuccessful": {
						"shape": "S47",
						"locationName": "unsuccessful"
					}
				}
			}
		},
		"CreateImage": {
			"input": {
				"type": "structure",
				"required": [
					"InstanceId",
					"Name"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"InstanceId": {
						"locationName": "instanceId"
					},
					"Name": {
						"locationName": "name"
					},
					"Description": {
						"locationName": "description"
					},
					"NoReboot": {
						"locationName": "noReboot",
						"type": "boolean"
					},
					"BlockDeviceMappings": {
						"shape": "S4b",
						"locationName": "blockDeviceMapping"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ImageId": {
						"locationName": "imageId"
					}
				}
			}
		},
		"CreateInstanceExportTask": {
			"input": {
				"type": "structure",
				"required": [
					"InstanceId"
				],
				"members": {
					"Description": {
						"locationName": "description"
					},
					"InstanceId": {
						"locationName": "instanceId"
					},
					"TargetEnvironment": {
						"locationName": "targetEnvironment"
					},
					"ExportToS3Task": {
						"locationName": "exportToS3",
						"type": "structure",
						"members": {
							"DiskImageFormat": {
								"locationName": "diskImageFormat"
							},
							"ContainerFormat": {
								"locationName": "containerFormat"
							},
							"S3Bucket": {
								"locationName": "s3Bucket"
							},
							"S3Prefix": {
								"locationName": "s3Prefix"
							}
						}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ExportTask": {
						"shape": "S4m",
						"locationName": "exportTask"
					}
				}
			}
		},
		"CreateInternetGateway": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"InternetGateway": {
						"shape": "S4s",
						"locationName": "internetGateway"
					}
				}
			}
		},
		"CreateKeyPair": {
			"input": {
				"type": "structure",
				"required": [
					"KeyName"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"KeyName": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"KeyName": {
						"locationName": "keyName"
					},
					"KeyFingerprint": {
						"locationName": "keyFingerprint"
					},
					"KeyMaterial": {
						"locationName": "keyMaterial"
					}
				}
			}
		},
		"CreateNatGateway": {
			"input": {
				"type": "structure",
				"required": [
					"SubnetId",
					"AllocationId"
				],
				"members": {
					"SubnetId": {},
					"AllocationId": {},
					"ClientToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"NatGateway": {
						"shape": "S4x",
						"locationName": "natGateway"
					},
					"ClientToken": {
						"locationName": "clientToken"
					}
				}
			}
		},
		"CreateNetworkAcl": {
			"input": {
				"type": "structure",
				"required": [
					"VpcId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"VpcId": {
						"locationName": "vpcId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"NetworkAcl": {
						"shape": "S54",
						"locationName": "networkAcl"
					}
				}
			}
		},
		"CreateNetworkAclEntry": {
			"input": {
				"type": "structure",
				"required": [
					"NetworkAclId",
					"RuleNumber",
					"Protocol",
					"RuleAction",
					"Egress"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"NetworkAclId": {
						"locationName": "networkAclId"
					},
					"RuleNumber": {
						"locationName": "ruleNumber",
						"type": "integer"
					},
					"Protocol": {
						"locationName": "protocol"
					},
					"RuleAction": {
						"locationName": "ruleAction"
					},
					"Egress": {
						"locationName": "egress",
						"type": "boolean"
					},
					"CidrBlock": {
						"locationName": "cidrBlock"
					},
					"Ipv6CidrBlock": {
						"locationName": "ipv6CidrBlock"
					},
					"IcmpTypeCode": {
						"shape": "S58",
						"locationName": "Icmp"
					},
					"PortRange": {
						"shape": "S59",
						"locationName": "portRange"
					}
				}
			}
		},
		"CreateNetworkInterface": {
			"input": {
				"type": "structure",
				"required": [
					"SubnetId"
				],
				"members": {
					"SubnetId": {
						"locationName": "subnetId"
					},
					"Description": {
						"locationName": "description"
					},
					"PrivateIpAddress": {
						"locationName": "privateIpAddress"
					},
					"Groups": {
						"shape": "S5e",
						"locationName": "SecurityGroupId"
					},
					"PrivateIpAddresses": {
						"shape": "S5f",
						"locationName": "privateIpAddresses"
					},
					"SecondaryPrivateIpAddressCount": {
						"locationName": "secondaryPrivateIpAddressCount",
						"type": "integer"
					},
					"Ipv6Addresses": {
						"shape": "S5h",
						"locationName": "ipv6Addresses"
					},
					"Ipv6AddressCount": {
						"locationName": "ipv6AddressCount",
						"type": "integer"
					},
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"NetworkInterface": {
						"shape": "S5k",
						"locationName": "networkInterface"
					}
				}
			}
		},
		"CreatePlacementGroup": {
			"input": {
				"type": "structure",
				"required": [
					"GroupName",
					"Strategy"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"GroupName": {
						"locationName": "groupName"
					},
					"Strategy": {
						"locationName": "strategy"
					}
				}
			}
		},
		"CreateReservedInstancesListing": {
			"input": {
				"type": "structure",
				"required": [
					"ReservedInstancesId",
					"InstanceCount",
					"PriceSchedules",
					"ClientToken"
				],
				"members": {
					"ReservedInstancesId": {
						"locationName": "reservedInstancesId"
					},
					"InstanceCount": {
						"locationName": "instanceCount",
						"type": "integer"
					},
					"PriceSchedules": {
						"locationName": "priceSchedules",
						"type": "list",
						"member": {
							"locationName": "item",
							"type": "structure",
							"members": {
								"Term": {
									"locationName": "term",
									"type": "long"
								},
								"Price": {
									"locationName": "price",
									"type": "double"
								},
								"CurrencyCode": {
									"locationName": "currencyCode"
								}
							}
						}
					},
					"ClientToken": {
						"locationName": "clientToken"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ReservedInstancesListings": {
						"shape": "S2n",
						"locationName": "reservedInstancesListingsSet"
					}
				}
			}
		},
		"CreateRoute": {
			"input": {
				"type": "structure",
				"required": [
					"RouteTableId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"RouteTableId": {
						"locationName": "routeTableId"
					},
					"DestinationCidrBlock": {
						"locationName": "destinationCidrBlock"
					},
					"GatewayId": {
						"locationName": "gatewayId"
					},
					"DestinationIpv6CidrBlock": {
						"locationName": "destinationIpv6CidrBlock"
					},
					"EgressOnlyInternetGatewayId": {
						"locationName": "egressOnlyInternetGatewayId"
					},
					"InstanceId": {
						"locationName": "instanceId"
					},
					"NetworkInterfaceId": {
						"locationName": "networkInterfaceId"
					},
					"VpcPeeringConnectionId": {
						"locationName": "vpcPeeringConnectionId"
					},
					"NatGatewayId": {
						"locationName": "natGatewayId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Return": {
						"locationName": "return",
						"type": "boolean"
					}
				}
			}
		},
		"CreateRouteTable": {
			"input": {
				"type": "structure",
				"required": [
					"VpcId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"VpcId": {
						"locationName": "vpcId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"RouteTable": {
						"shape": "S65",
						"locationName": "routeTable"
					}
				}
			}
		},
		"CreateSecurityGroup": {
			"input": {
				"type": "structure",
				"required": [
					"GroupName",
					"Description"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"GroupName": {},
					"Description": {
						"locationName": "GroupDescription"
					},
					"VpcId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"GroupId": {
						"locationName": "groupId"
					}
				}
			}
		},
		"CreateSnapshot": {
			"input": {
				"type": "structure",
				"required": [
					"VolumeId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"VolumeId": {},
					"Description": {}
				}
			},
			"output": {
				"shape": "S6h"
			}
		},
		"CreateSpotDatafeedSubscription": {
			"input": {
				"type": "structure",
				"required": [
					"Bucket"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"Bucket": {
						"locationName": "bucket"
					},
					"Prefix": {
						"locationName": "prefix"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"SpotDatafeedSubscription": {
						"shape": "S6l",
						"locationName": "spotDatafeedSubscription"
					}
				}
			}
		},
		"CreateSubnet": {
			"input": {
				"type": "structure",
				"required": [
					"VpcId",
					"CidrBlock"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"VpcId": {},
					"CidrBlock": {},
					"Ipv6CidrBlock": {},
					"AvailabilityZone": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Subnet": {
						"shape": "S6q",
						"locationName": "subnet"
					}
				}
			}
		},
		"CreateTags": {
			"input": {
				"type": "structure",
				"required": [
					"Resources",
					"Tags"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"Resources": {
						"shape": "S6u",
						"locationName": "ResourceId"
					},
					"Tags": {
						"shape": "Sj",
						"locationName": "Tag"
					}
				}
			}
		},
		"CreateVolume": {
			"input": {
				"type": "structure",
				"required": [
					"AvailabilityZone"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"Size": {
						"type": "integer"
					},
					"SnapshotId": {},
					"AvailabilityZone": {},
					"VolumeType": {},
					"Iops": {
						"type": "integer"
					},
					"Encrypted": {
						"locationName": "encrypted",
						"type": "boolean"
					},
					"KmsKeyId": {},
					"TagSpecifications": {
						"shape": "S6w",
						"locationName": "TagSpecification"
					}
				}
			},
			"output": {
				"shape": "S6z"
			}
		},
		"CreateVpc": {
			"input": {
				"type": "structure",
				"required": [
					"CidrBlock"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"CidrBlock": {},
					"InstanceTenancy": {
						"locationName": "instanceTenancy"
					},
					"AmazonProvidedIpv6CidrBlock": {
						"locationName": "amazonProvidedIpv6CidrBlock",
						"type": "boolean"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Vpc": {
						"shape": "S75",
						"locationName": "vpc"
					}
				}
			}
		},
		"CreateVpcEndpoint": {
			"input": {
				"type": "structure",
				"required": [
					"VpcId",
					"ServiceName"
				],
				"members": {
					"DryRun": {
						"type": "boolean"
					},
					"VpcId": {},
					"ServiceName": {},
					"PolicyDocument": {},
					"RouteTableIds": {
						"shape": "S2z",
						"locationName": "RouteTableId"
					},
					"ClientToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"VpcEndpoint": {
						"shape": "S7a",
						"locationName": "vpcEndpoint"
					},
					"ClientToken": {
						"locationName": "clientToken"
					}
				}
			}
		},
		"CreateVpcPeeringConnection": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"VpcId": {
						"locationName": "vpcId"
					},
					"PeerVpcId": {
						"locationName": "peerVpcId"
					},
					"PeerOwnerId": {
						"locationName": "peerOwnerId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"VpcPeeringConnection": {
						"shape": "Sb",
						"locationName": "vpcPeeringConnection"
					}
				}
			}
		},
		"CreateVpnConnection": {
			"input": {
				"type": "structure",
				"required": [
					"Type",
					"CustomerGatewayId",
					"VpnGatewayId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"Type": {},
					"CustomerGatewayId": {},
					"VpnGatewayId": {},
					"Options": {
						"locationName": "options",
						"type": "structure",
						"members": {
							"StaticRoutesOnly": {
								"locationName": "staticRoutesOnly",
								"type": "boolean"
							}
						}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"VpnConnection": {
						"shape": "S7h",
						"locationName": "vpnConnection"
					}
				}
			}
		},
		"CreateVpnConnectionRoute": {
			"input": {
				"type": "structure",
				"required": [
					"VpnConnectionId",
					"DestinationCidrBlock"
				],
				"members": {
					"VpnConnectionId": {},
					"DestinationCidrBlock": {}
				}
			}
		},
		"CreateVpnGateway": {
			"input": {
				"type": "structure",
				"required": [
					"Type"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"Type": {},
					"AvailabilityZone": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"VpnGateway": {
						"shape": "S7t",
						"locationName": "vpnGateway"
					}
				}
			}
		},
		"DeleteCustomerGateway": {
			"input": {
				"type": "structure",
				"required": [
					"CustomerGatewayId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"CustomerGatewayId": {}
				}
			}
		},
		"DeleteDhcpOptions": {
			"input": {
				"type": "structure",
				"required": [
					"DhcpOptionsId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"DhcpOptionsId": {}
				}
			}
		},
		"DeleteEgressOnlyInternetGateway": {
			"input": {
				"type": "structure",
				"required": [
					"EgressOnlyInternetGatewayId"
				],
				"members": {
					"DryRun": {
						"type": "boolean"
					},
					"EgressOnlyInternetGatewayId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ReturnCode": {
						"locationName": "returnCode",
						"type": "boolean"
					}
				}
			}
		},
		"DeleteFlowLogs": {
			"input": {
				"type": "structure",
				"required": [
					"FlowLogIds"
				],
				"members": {
					"FlowLogIds": {
						"shape": "S2z",
						"locationName": "FlowLogId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Unsuccessful": {
						"shape": "S47",
						"locationName": "unsuccessful"
					}
				}
			}
		},
		"DeleteInternetGateway": {
			"input": {
				"type": "structure",
				"required": [
					"InternetGatewayId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"InternetGatewayId": {
						"locationName": "internetGatewayId"
					}
				}
			}
		},
		"DeleteKeyPair": {
			"input": {
				"type": "structure",
				"required": [
					"KeyName"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"KeyName": {}
				}
			}
		},
		"DeleteNatGateway": {
			"input": {
				"type": "structure",
				"required": [
					"NatGatewayId"
				],
				"members": {
					"NatGatewayId": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"NatGatewayId": {
						"locationName": "natGatewayId"
					}
				}
			}
		},
		"DeleteNetworkAcl": {
			"input": {
				"type": "structure",
				"required": [
					"NetworkAclId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"NetworkAclId": {
						"locationName": "networkAclId"
					}
				}
			}
		},
		"DeleteNetworkAclEntry": {
			"input": {
				"type": "structure",
				"required": [
					"NetworkAclId",
					"RuleNumber",
					"Egress"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"NetworkAclId": {
						"locationName": "networkAclId"
					},
					"RuleNumber": {
						"locationName": "ruleNumber",
						"type": "integer"
					},
					"Egress": {
						"locationName": "egress",
						"type": "boolean"
					}
				}
			}
		},
		"DeleteNetworkInterface": {
			"input": {
				"type": "structure",
				"required": [
					"NetworkInterfaceId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"NetworkInterfaceId": {
						"locationName": "networkInterfaceId"
					}
				}
			}
		},
		"DeletePlacementGroup": {
			"input": {
				"type": "structure",
				"required": [
					"GroupName"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"GroupName": {
						"locationName": "groupName"
					}
				}
			}
		},
		"DeleteRoute": {
			"input": {
				"type": "structure",
				"required": [
					"RouteTableId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"RouteTableId": {
						"locationName": "routeTableId"
					},
					"DestinationCidrBlock": {
						"locationName": "destinationCidrBlock"
					},
					"DestinationIpv6CidrBlock": {
						"locationName": "destinationIpv6CidrBlock"
					}
				}
			}
		},
		"DeleteRouteTable": {
			"input": {
				"type": "structure",
				"required": [
					"RouteTableId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"RouteTableId": {
						"locationName": "routeTableId"
					}
				}
			}
		},
		"DeleteSecurityGroup": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"GroupName": {},
					"GroupId": {}
				}
			}
		},
		"DeleteSnapshot": {
			"input": {
				"type": "structure",
				"required": [
					"SnapshotId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"SnapshotId": {}
				}
			}
		},
		"DeleteSpotDatafeedSubscription": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					}
				}
			}
		},
		"DeleteSubnet": {
			"input": {
				"type": "structure",
				"required": [
					"SubnetId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"SubnetId": {}
				}
			}
		},
		"DeleteTags": {
			"input": {
				"type": "structure",
				"required": [
					"Resources"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"Resources": {
						"shape": "S6u",
						"locationName": "resourceId"
					},
					"Tags": {
						"shape": "Sj",
						"locationName": "tag"
					}
				}
			}
		},
		"DeleteVolume": {
			"input": {
				"type": "structure",
				"required": [
					"VolumeId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"VolumeId": {}
				}
			}
		},
		"DeleteVpc": {
			"input": {
				"type": "structure",
				"required": [
					"VpcId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"VpcId": {}
				}
			}
		},
		"DeleteVpcEndpoints": {
			"input": {
				"type": "structure",
				"required": [
					"VpcEndpointIds"
				],
				"members": {
					"DryRun": {
						"type": "boolean"
					},
					"VpcEndpointIds": {
						"shape": "S2z",
						"locationName": "VpcEndpointId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Unsuccessful": {
						"shape": "S47",
						"locationName": "unsuccessful"
					}
				}
			}
		},
		"DeleteVpcPeeringConnection": {
			"input": {
				"type": "structure",
				"required": [
					"VpcPeeringConnectionId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"VpcPeeringConnectionId": {
						"locationName": "vpcPeeringConnectionId"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Return": {
						"locationName": "return",
						"type": "boolean"
					}
				}
			}
		},
		"DeleteVpnConnection": {
			"input": {
				"type": "structure",
				"required": [
					"VpnConnectionId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"VpnConnectionId": {}
				}
			}
		},
		"DeleteVpnConnectionRoute": {
			"input": {
				"type": "structure",
				"required": [
					"VpnConnectionId",
					"DestinationCidrBlock"
				],
				"members": {
					"VpnConnectionId": {},
					"DestinationCidrBlock": {}
				}
			}
		},
		"DeleteVpnGateway": {
			"input": {
				"type": "structure",
				"required": [
					"VpnGatewayId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"VpnGatewayId": {}
				}
			}
		},
		"DeregisterImage": {
			"input": {
				"type": "structure",
				"required": [
					"ImageId"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"ImageId": {}
				}
			}
		},
		"DescribeAccountAttributes": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"AttributeNames": {
						"locationName": "attributeName",
						"type": "list",
						"member": {
							"locationName": "attributeName"
						}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"AccountAttributes": {
						"locationName": "accountAttributeSet",
						"type": "list",
						"member": {
							"locationName": "item",
							"type": "structure",
							"members": {
								"AttributeName": {
									"locationName": "attributeName"
								},
								"AttributeValues": {
									"locationName": "attributeValueSet",
									"type": "list",
									"member": {
										"locationName": "item",
										"type": "structure",
										"members": {
											"AttributeValue": {
												"locationName": "attributeValue"
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		"DescribeAddresses": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"PublicIps": {
						"locationName": "PublicIp",
						"type": "list",
						"member": {
							"locationName": "PublicIp"
						}
					},
					"Filters": {
						"shape": "S90",
						"locationName": "Filter"
					},
					"AllocationIds": {
						"locationName": "AllocationId",
						"type": "list",
						"member": {
							"locationName": "AllocationId"
						}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Addresses": {
						"locationName": "addressesSet",
						"type": "list",
						"member": {
							"locationName": "item",
							"type": "structure",
							"members": {
								"InstanceId": {
									"locationName": "instanceId"
								},
								"PublicIp": {
									"locationName": "publicIp"
								},
								"AllocationId": {
									"locationName": "allocationId"
								},
								"AssociationId": {
									"locationName": "associationId"
								},
								"Domain": {
									"locationName": "domain"
								},
								"NetworkInterfaceId": {
									"locationName": "networkInterfaceId"
								},
								"NetworkInterfaceOwnerId": {
									"locationName": "networkInterfaceOwnerId"
								},
								"PrivateIpAddress": {
									"locationName": "privateIpAddress"
								}
							}
						}
					}
				}
			}
		},
		"DescribeAvailabilityZones": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"ZoneNames": {
						"locationName": "ZoneName",
						"type": "list",
						"member": {
							"locationName": "ZoneName"
						}
					},
					"Filters": {
						"shape": "S90",
						"locationName": "Filter"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"AvailabilityZones": {
						"locationName": "availabilityZoneInfo",
						"type": "list",
						"member": {
							"locationName": "item",
							"type": "structure",
							"members": {
								"ZoneName": {
									"locationName": "zoneName"
								},
								"State": {
									"locationName": "zoneState"
								},
								"RegionName": {
									"locationName": "regionName"
								},
								"Messages": {
									"locationName": "messageSet",
									"type": "list",
									"member": {
										"locationName": "item",
										"type": "structure",
										"members": {
											"Message": {
												"locationName": "message"
											}
										}
									}
								}
							}
						}
					}
				}
			}
		},
		"DescribeBundleTasks": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"BundleIds": {
						"locationName": "BundleId",
						"type": "list",
						"member": {
							"locationName": "BundleId"
						}
					},
					"Filters": {
						"shape": "S90",
						"locationName": "Filter"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"BundleTasks": {
						"locationName": "bundleInstanceTasksSet",
						"type": "list",
						"member": {
							"shape": "S2c",
							"locationName": "item"
						}
					}
				}
			}
		},
		"DescribeClassicLinkInstances": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"InstanceIds": {
						"shape": "S9j",
						"locationName": "InstanceId"
					},
					"Filters": {
						"shape": "S90",
						"locationName": "Filter"
					},
					"NextToken": {
						"locationName": "nextToken"
					},
					"MaxResults": {
						"locationName": "maxResults",
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Instances": {
						"locationName": "instancesSet",
						"type": "list",
						"member": {
							"locationName": "item",
							"type": "structure",
							"members": {
								"InstanceId": {
									"locationName": "instanceId"
								},
								"VpcId": {
									"locationName": "vpcId"
								},
								"Groups": {
									"shape": "S5m",
									"locationName": "groupSet"
								},
								"Tags": {
									"shape": "Sj",
									"locationName": "tagSet"
								}
							}
						}
					},
					"NextToken": {
						"locationName": "nextToken"
					}
				}
			}
		},
		"DescribeConversionTasks": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"ConversionTaskIds": {
						"locationName": "conversionTaskId",
						"type": "list",
						"member": {
							"locationName": "item"
						}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ConversionTasks": {
						"locationName": "conversionTasks",
						"type": "list",
						"member": {
							"shape": "S9r",
							"locationName": "item"
						}
					}
				}
			}
		},
		"DescribeCustomerGateways": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"CustomerGatewayIds": {
						"locationName": "CustomerGatewayId",
						"type": "list",
						"member": {
							"locationName": "CustomerGatewayId"
						}
					},
					"Filters": {
						"shape": "S90",
						"locationName": "Filter"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"CustomerGateways": {
						"locationName": "customerGatewaySet",
						"type": "list",
						"member": {
							"shape": "S3n",
							"locationName": "item"
						}
					}
				}
			}
		},
		"DescribeDhcpOptions": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"DhcpOptionsIds": {
						"locationName": "DhcpOptionsId",
						"type": "list",
						"member": {
							"locationName": "DhcpOptionsId"
						}
					},
					"Filters": {
						"shape": "S90",
						"locationName": "Filter"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"DhcpOptions": {
						"locationName": "dhcpOptionsSet",
						"type": "list",
						"member": {
							"shape": "S3s",
							"locationName": "item"
						}
					}
				}
			}
		},
		"DescribeEgressOnlyInternetGateways": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"type": "boolean"
					},
					"EgressOnlyInternetGatewayIds": {
						"locationName": "EgressOnlyInternetGatewayId",
						"type": "list",
						"member": {
							"locationName": "item"
						}
					},
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"EgressOnlyInternetGateways": {
						"locationName": "egressOnlyInternetGatewaySet",
						"type": "list",
						"member": {
							"shape": "S3z",
							"locationName": "item"
						}
					},
					"NextToken": {
						"locationName": "nextToken"
					}
				}
			}
		},
		"DescribeExportTasks": {
			"input": {
				"type": "structure",
				"members": {
					"ExportTaskIds": {
						"locationName": "exportTaskId",
						"type": "list",
						"member": {
							"locationName": "ExportTaskId"
						}
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ExportTasks": {
						"locationName": "exportTaskSet",
						"type": "list",
						"member": {
							"shape": "S4m",
							"locationName": "item"
						}
					}
				}
			}
		},
		"DescribeFlowLogs": {
			"input": {
				"type": "structure",
				"members": {
					"FlowLogIds": {
						"shape": "S2z",
						"locationName": "FlowLogId"
					},
					"Filter": {
						"shape": "S90"
					},
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"FlowLogs": {
						"locationName": "flowLogSet",
						"type": "list",
						"member": {
							"locationName": "item",
							"type": "structure",
							"members": {
								"CreationTime": {
									"locationName": "creationTime",
									"type": "timestamp"
								},
								"FlowLogId": {
									"locationName": "flowLogId"
								},
								"FlowLogStatus": {
									"locationName": "flowLogStatus"
								},
								"ResourceId": {
									"locationName": "resourceId"
								},
								"TrafficType": {
									"locationName": "trafficType"
								},
								"LogGroupName": {
									"locationName": "logGroupName"
								},
								"DeliverLogsStatus": {
									"locationName": "deliverLogsStatus"
								},
								"DeliverLogsErrorMessage": {
									"locationName": "deliverLogsErrorMessage"
								},
								"DeliverLogsPermissionArn": {
									"locationName": "deliverLogsPermissionArn"
								}
							}
						}
					},
					"NextToken": {
						"locationName": "nextToken"
					}
				}
			}
		},
		"DescribeHostReservationOfferings": {
			"input": {
				"type": "structure",
				"members": {
					"OfferingId": {},
					"MinDuration": {
						"type": "integer"
					},
					"MaxDuration": {
						"type": "integer"
					},
					"Filter": {
						"shape": "S90"
					},
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"OfferingSet": {
						"locationName": "offeringSet",
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"OfferingId": {
									"locationName": "offeringId"
								},
								"InstanceFamily": {
									"locationName": "instanceFamily"
								},
								"PaymentOption": {
									"locationName": "paymentOption"
								},
								"UpfrontPrice": {
									"locationName": "upfrontPrice"
								},
								"HourlyPrice": {
									"locationName": "hourlyPrice"
								},
								"CurrencyCode": {
									"locationName": "currencyCode"
								},
								"Duration": {
									"locationName": "duration",
									"type": "integer"
								}
							}
						}
					},
					"NextToken": {
						"locationName": "nextToken"
					}
				}
			}
		},
		"DescribeHostReservations": {
			"input": {
				"type": "structure",
				"members": {
					"HostReservationIdSet": {
						"type": "list",
						"member": {
							"locationName": "item"
						}
					},
					"Filter": {
						"shape": "S90"
					},
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"HostReservationSet": {
						"locationName": "hostReservationSet",
						"type": "list",
						"member": {
							"type": "structure",
							"members": {
								"HostReservationId": {
									"locationName": "hostReservationId"
								},
								"HostIdSet": {
									"shape": "Sau",
									"locationName": "hostIdSet"
								},
								"OfferingId": {
									"locationName": "offeringId"
								},
								"InstanceFamily": {
									"locationName": "instanceFamily"
								},
								"PaymentOption": {
									"locationName": "paymentOption"
								},
								"HourlyPrice": {
									"locationName": "hourlyPrice"
								},
								"UpfrontPrice": {
									"locationName": "upfrontPrice"
								},
								"CurrencyCode": {
									"locationName": "currencyCode"
								},
								"Count": {
									"locationName": "count",
									"type": "integer"
								},
								"Duration": {
									"locationName": "duration",
									"type": "integer"
								},
								"End": {
									"locationName": "end",
									"type": "timestamp"
								},
								"Start": {
									"locationName": "start",
									"type": "timestamp"
								},
								"State": {
									"locationName": "state"
								}
							}
						}
					},
					"NextToken": {
						"locationName": "nextToken"
					}
				}
			}
		},
		"DescribeHosts": {
			"input": {
				"type": "structure",
				"members": {
					"HostIds": {
						"shape": "Sax",
						"locationName": "hostId"
					},
					"NextToken": {
						"locationName": "nextToken"
					},
					"MaxResults": {
						"locationName": "maxResults",
						"type": "integer"
					},
					"Filter": {
						"shape": "S90",
						"locationName": "filter"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Hosts": {
						"locationName": "hostSet",
						"type": "list",
						"member": {
							"locationName": "item",
							"type": "structure",
							"members": {
								"HostId": {
									"locationName": "hostId"
								},
								"AutoPlacement": {
									"locationName": "autoPlacement"
								},
								"HostReservationId": {
									"locationName": "hostReservationId"
								},
								"ClientToken": {
									"locationName": "clientToken"
								},
								"HostProperties": {
									"locationName": "hostProperties",
									"type": "structure",
									"members": {
										"Sockets": {
											"locationName": "sockets",
											"type": "integer"
										},
										"Cores": {
											"locationName": "cores",
											"type": "integer"
										},
										"TotalVCpus": {
											"locationName": "totalVCpus",
											"type": "integer"
										},
										"InstanceType": {
											"locationName": "instanceType"
										}
									}
								},
								"State": {
									"locationName": "state"
								},
								"AvailabilityZone": {
									"locationName": "availabilityZone"
								},
								"Instances": {
									"locationName": "instances",
									"type": "list",
									"member": {
										"locationName": "item",
										"type": "structure",
										"members": {
											"InstanceId": {
												"locationName": "instanceId"
											},
											"InstanceType": {
												"locationName": "instanceType"
											}
										}
									}
								},
								"AvailableCapacity": {
									"locationName": "availableCapacity",
									"type": "structure",
									"members": {
										"AvailableInstanceCapacity": {
											"locationName": "availableInstanceCapacity",
											"type": "list",
											"member": {
												"locationName": "item",
												"type": "structure",
												"members": {
													"InstanceType": {
														"locationName": "instanceType"
													},
													"AvailableCapacity": {
														"locationName": "availableCapacity",
														"type": "integer"
													},
													"TotalCapacity": {
														"locationName": "totalCapacity",
														"type": "integer"
													}
												}
											}
										},
										"AvailableVCpus": {
											"locationName": "availableVCpus",
											"type": "integer"
										}
									}
								}
							}
						}
					},
					"NextToken": {
						"locationName": "nextToken"
					}
				}
			}
		},
		"DescribeIamInstanceProfileAssociations": {
			"input": {
				"type": "structure",
				"members": {
					"AssociationIds": {
						"locationName": "AssociationId",
						"type": "list",
						"member": {
							"locationName": "AssociationId"
						}
					},
					"Filters": {
						"shape": "S90",
						"locationName": "Filter"
					},
					"MaxResults": {
						"type": "integer"
					},
					"NextToken": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"IamInstanceProfileAssociations": {
						"locationName": "iamInstanceProfileAssociationSet",
						"type": "list",
						"member": {
							"shape": "S13",
							"locationName": "item"
						}
					},
					"NextToken": {
						"locationName": "nextToken"
					}
				}
			}
		},
		"DescribeIdFormat": {
			"input": {
				"type": "structure",
				"members": {
					"Resource": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Statuses": {
						"shape": "Sbg",
						"locationName": "statusSet"
					}
				}
			}
		},
		"DescribeIdentityIdFormat": {
			"input": {
				"type": "structure",
				"required": [
					"PrincipalArn"
				],
				"members": {
					"Resource": {
						"locationName": "resource"
					},
					"PrincipalArn": {
						"locationName": "principalArn"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Statuses": {
						"shape": "Sbg",
						"locationName": "statusSet"
					}
				}
			}
		},
		"DescribeImageAttribute": {
			"input": {
				"type": "structure",
				"required": [
					"ImageId",
					"Attribute"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"ImageId": {},
					"Attribute": {}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ImageId": {
						"locationName": "imageId"
					},
					"LaunchPermissions": {
						"shape": "Sbn",
						"locationName": "launchPermission"
					},
					"ProductCodes": {
						"shape": "Sbq",
						"locationName": "productCodes"
					},
					"KernelId": {
						"shape": "S3w",
						"locationName": "kernel"
					},
					"RamdiskId": {
						"shape": "S3w",
						"locationName": "ramdisk"
					},
					"Description": {
						"shape": "S3w",
						"locationName": "description"
					},
					"SriovNetSupport": {
						"shape": "S3w",
						"locationName": "sriovNetSupport"
					},
					"BlockDeviceMappings": {
						"shape": "Sbt",
						"locationName": "blockDeviceMapping"
					}
				}
			}
		},
		"DescribeImages": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"ImageIds": {
						"locationName": "ImageId",
						"type": "list",
						"member": {
							"locationName": "ImageId"
						}
					},
					"Owners": {
						"shape": "Sbw",
						"locationName": "Owner"
					},
					"ExecutableUsers": {
						"locationName": "ExecutableBy",
						"type": "list",
						"member": {
							"locationName": "ExecutableBy"
						}
					},
					"Filters": {
						"shape": "S90",
						"locationName": "Filter"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"Images": {
						"locationName": "imagesSet",
						"type": "list",
						"member": {
							"locationName": "item",
							"type": "structure",
							"members": {
								"ImageId": {
									"locationName": "imageId"
								},
								"ImageLocation": {
									"locationName": "imageLocation"
								},
								"State": {
									"locationName": "imageState"
								},
								"OwnerId": {
									"locationName": "imageOwnerId"
								},
								"CreationDate": {
									"locationName": "creationDate"
								},
								"Public": {
									"locationName": "isPublic",
									"type": "boolean"
								},
								"ProductCodes": {
									"shape": "Sbq",
									"locationName": "productCodes"
								},
								"Architecture": {
									"locationName": "architecture"
								},
								"ImageType": {
									"locationName": "imageType"
								},
								"KernelId": {
									"locationName": "kernelId"
								},
								"RamdiskId": {
									"locationName": "ramdiskId"
								},
								"Platform": {
									"locationName": "platform"
								},
								"SriovNetSupport": {
									"locationName": "sriovNetSupport"
								},
								"EnaSupport": {
									"locationName": "enaSupport",
									"type": "boolean"
								},
								"StateReason": {
									"shape": "Sc4",
									"locationName": "stateReason"
								},
								"ImageOwnerAlias": {
									"locationName": "imageOwnerAlias"
								},
								"Name": {
									"locationName": "name"
								},
								"Description": {
									"locationName": "description"
								},
								"RootDeviceType": {
									"locationName": "rootDeviceType"
								},
								"RootDeviceName": {
									"locationName": "rootDeviceName"
								},
								"BlockDeviceMappings": {
									"shape": "Sbt",
									"locationName": "blockDeviceMapping"
								},
								"VirtualizationType": {
									"locationName": "virtualizationType"
								},
								"Tags": {
									"shape": "Sj",
									"locationName": "tagSet"
								},
								"Hypervisor": {
									"locationName": "hypervisor"
								}
							}
						}
					}
				}
			}
		},
		"DescribeImportImageTasks": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"type": "boolean"
					},
					"ImportTaskIds": {
						"shape": "Sc9",
						"locationName": "ImportTaskId"
					},
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					},
					"Filters": {
						"shape": "S90"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ImportImageTasks": {
						"locationName": "importImageTaskSet",
						"type": "list",
						"member": {
							"locationName": "item",
							"type": "structure",
							"members": {
								"ImportTaskId": {
									"locationName": "importTaskId"
								},
								"Architecture": {
									"locationName": "architecture"
								},
								"LicenseType": {
									"locationName": "licenseType"
								},
								"Platform": {
									"locationName": "platform"
								},
								"Hypervisor": {
									"locationName": "hypervisor"
								},
								"Description": {
									"locationName": "description"
								},
								"SnapshotDetails": {
									"shape": "Scd",
									"locationName": "snapshotDetailSet"
								},
								"ImageId": {
									"locationName": "imageId"
								},
								"Progress": {
									"locationName": "progress"
								},
								"StatusMessage": {
									"locationName": "statusMessage"
								},
								"Status": {
									"locationName": "status"
								}
							}
						}
					},
					"NextToken": {
						"locationName": "nextToken"
					}
				}
			}
		},
		"DescribeImportSnapshotTasks": {
			"input": {
				"type": "structure",
				"members": {
					"DryRun": {
						"type": "boolean"
					},
					"ImportTaskIds": {
						"shape": "Sc9",
						"locationName": "ImportTaskId"
					},
					"NextToken": {},
					"MaxResults": {
						"type": "integer"
					},
					"Filters": {
						"shape": "S90"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"ImportSnapshotTasks": {
						"locationName": "importSnapshotTaskSet",
						"type": "list",
						"member": {
							"locationName": "item",
							"type": "structure",
							"members": {
								"ImportTaskId": {
									"locationName": "importTaskId"
								},
								"SnapshotTaskDetail": {
									"shape": "Sck",
									"locationName": "snapshotTaskDetail"
								},
								"Description": {
									"locationName": "description"
								}
							}
						}
					},
					"NextToken": {
						"locationName": "nextToken"
					}
				}
			}
		},
		"DescribeInstanceAttribute": {
			"input": {
				"type": "structure",
				"required": [
					"InstanceId",
					"Attribute"
				],
				"members": {
					"DryRun": {
						"locationName": "dryRun",
						"type": "boolean"
					},
					"InstanceId": {
						"locationName": "instanceId"
					},
					"Attribute": {
						"locationName": "attribute"
					}
				}
			},
			"output": {
				"type": "structure",
				"members": {
					"InstanceId": {
						"locationName": "instanceId"
					},
					"InstanceType": {
						"shape": "S3w",
					},
					},
	}