require("source-map-support").install();
exports.ids = [0];
exports.modules = {

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\nexports.observer = undefined;\n\nvar _typeof2 = __webpack_require__(104);\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nvar _promise = __webpack_require__(13);\n\nvar _promise2 = _interopRequireDefault(_promise);\n\n__webpack_require__(103);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar options = {\n  root: null,\n  rootMargin: '150px 0px',\n  threshold: 0.01\n};\n\nvar webpSupport = void 0;\n\nfunction loadImage(src) {\n  return new _promise2.default(function (resolve, reject) {\n    var img = new Image();\n    img.addEventListener('load', resolve);\n    img.addEventListener('error', reject);\n    img.src = src;\n  });\n}\n\n//          const { webpsrcset, src, fallbacksrc, srcset } = child.dataset;\n\nfunction intersectionCb(entries, observer) {\n  var i = entries.length;\n\n  var _loop = function _loop() {\n    var entry = entries[i];\n    var node = entry.target;\n    if (entry.intersectionRatio > 0) {\n      if (!observer) return {\n          v: void 0\n        };\n      observer.unobserve(entry.target);\n\n      var _node$dataset = node.dataset,\n          webpsrcset = _node$dataset.webpsrcset,\n          src = _node$dataset.src,\n          fallbacksrc = _node$dataset.fallbacksrc,\n          srcset = _node$dataset.srcset;\n\n\n      if (src) {\n        loadImage(node.dataset.src).then(function () {\n          node.src = node.dataset.src;\n        }).catch(function () {\n          // noop\n        });\n      } else if (srcset || webpsrcset) {\n        node.srcset = webpSupport && webpsrcset ? webpsrcset : srcset;\n      }\n    }\n  };\n\n  for (; i--;) {\n    var _ret = _loop();\n\n    if ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === \"object\") return _ret.v;\n  }\n}\n\nvar observer = exports.observer = new IntersectionObserver(intersectionCb, options);\n\nfunction observe(node) {\n  if (webpSupport === void 0) {\n    checkWebP().then(function (isSupported) {\n      webpSupport = isSupported;\n      observer.observe(node);\n    });\n  } else {\n    observer.observe(node);\n  }\n}\n\nfunction checkWebP() {\n  var kTestImages = {\n    lossy: 'UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA',\n    lossless: 'UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==',\n    alpha: 'UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==',\n    animation: 'UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA'\n  };\n\n  return new _promise2.default(function (resolve) {\n    var img = new Image();\n    img.onload = function () {\n      var result = img.width > 0 && img.height > 0;\n      resolve(result);\n    };\n    img.onerror = function () {\n      resolve(false);\n    };\n    img.src = 'data:image/webp;base64,' + kTestImages.lossy;\n  });\n}\n\nvar _default = observe;\nexports.default = _default;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(options, 'options', '/Users/realseanp1/Projects/archadon/src/client/components/LazyLoad/observer.js');\n\n  __REACT_HOT_LOADER__.register(webpSupport, 'webpSupport', '/Users/realseanp1/Projects/archadon/src/client/components/LazyLoad/observer.js');\n\n  __REACT_HOT_LOADER__.register(loadImage, 'loadImage', '/Users/realseanp1/Projects/archadon/src/client/components/LazyLoad/observer.js');\n\n  __REACT_HOT_LOADER__.register(intersectionCb, 'intersectionCb', '/Users/realseanp1/Projects/archadon/src/client/components/LazyLoad/observer.js');\n\n  __REACT_HOT_LOADER__.register(observer, 'observer', '/Users/realseanp1/Projects/archadon/src/client/components/LazyLoad/observer.js');\n\n  __REACT_HOT_LOADER__.register(observe, 'observe', '/Users/realseanp1/Projects/archadon/src/client/components/LazyLoad/observer.js');\n\n  __REACT_HOT_LOADER__.register(checkWebP, 'checkWebP', '/Users/realseanp1/Projects/archadon/src/client/components/LazyLoad/observer.js');\n\n  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/realseanp1/Projects/archadon/src/client/components/LazyLoad/observer.js');\n}();\n\n;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/client/components/LazyLoad/observer.js\n// module id = 102\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/client/components/LazyLoad/observer.js?");

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Copyright 2016 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n(function (window, document) {\n  'use strict';\n\n  // Exits early if all IntersectionObserver and IntersectionObserverEntry\n  // features are natively supported.\n\n  if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {\n\n    // Minimal polyfill for Edge 15's lack of `isIntersecting`\n    // See: https://github.com/w3c/IntersectionObserver/issues/211\n    if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {\n      Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {\n        get: function get() {\n          return this.intersectionRatio > 0;\n        }\n      });\n    }\n    return;\n  }\n\n  /**\n   * An IntersectionObserver registry. This registry exists to hold a strong\n   * reference to IntersectionObserver instances currently observering a target\n   * element. Without this registry, instances without another reference may be\n   * garbage collected.\n   */\n  var registry = [];\n\n  /**\n   * Creates the global IntersectionObserverEntry constructor.\n   * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry\n   * @param {Object} entry A dictionary of instance properties.\n   * @constructor\n   */\n  function IntersectionObserverEntry(entry) {\n    this.time = entry.time;\n    this.target = entry.target;\n    this.rootBounds = entry.rootBounds;\n    this.boundingClientRect = entry.boundingClientRect;\n    this.intersectionRect = entry.intersectionRect || getEmptyRect();\n    this.isIntersecting = !!entry.intersectionRect;\n\n    // Calculates the intersection ratio.\n    var targetRect = this.boundingClientRect;\n    var targetArea = targetRect.width * targetRect.height;\n    var intersectionRect = this.intersectionRect;\n    var intersectionArea = intersectionRect.width * intersectionRect.height;\n\n    // Sets intersection ratio.\n    if (targetArea) {\n      this.intersectionRatio = intersectionArea / targetArea;\n    } else {\n      // If area is zero and is intersecting, sets to 1, otherwise to 0\n      this.intersectionRatio = this.isIntersecting ? 1 : 0;\n    }\n  }\n\n  /**\n   * Creates the global IntersectionObserver constructor.\n   * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface\n   * @param {Function} callback The function to be invoked after intersection\n   *     changes have queued. The function is not invoked if the queue has\n   *     been emptied by calling the `takeRecords` method.\n   * @param {Object=} opt_options Optional configuration options.\n   * @constructor\n   */\n  function IntersectionObserver(callback, opt_options) {\n\n    var options = opt_options || {};\n\n    if (typeof callback != 'function') {\n      throw new Error('callback must be a function');\n    }\n\n    if (options.root && options.root.nodeType != 1) {\n      throw new Error('root must be an Element');\n    }\n\n    // Binds and throttles `this._checkForIntersections`.\n    this._checkForIntersections = throttle(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);\n\n    // Private properties.\n    this._callback = callback;\n    this._observationTargets = [];\n    this._queuedEntries = [];\n    this._rootMarginValues = this._parseRootMargin(options.rootMargin);\n\n    // Public properties.\n    this.thresholds = this._initThresholds(options.threshold);\n    this.root = options.root || null;\n    this.rootMargin = this._rootMarginValues.map(function (margin) {\n      return margin.value + margin.unit;\n    }).join(' ');\n  }\n\n  /**\n   * The minimum interval within which the document will be checked for\n   * intersection changes.\n   */\n  IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;\n\n  /**\n   * The frequency in which the polyfill polls for intersection changes.\n   * this can be updated on a per instance basis and must be set prior to\n   * calling `observe` on the first target.\n   */\n  IntersectionObserver.prototype.POLL_INTERVAL = null;\n\n  /**\n   * Starts observing a target element for intersection changes based on\n   * the thresholds values.\n   * @param {Element} target The DOM element to observe.\n   */\n  IntersectionObserver.prototype.observe = function (target) {\n    // If the target is already being observed, do nothing.\n    if (this._observationTargets.some(function (item) {\n      return item.element == target;\n    })) {\n      return;\n    }\n\n    if (!(target && target.nodeType == 1)) {\n      throw new Error('target must be an Element');\n    }\n\n    this._registerInstance();\n    this._observationTargets.push({ element: target, entry: null });\n    this._monitorIntersections();\n    this._checkForIntersections();\n  };\n\n  /**\n   * Stops observing a target element for intersection changes.\n   * @param {Element} target The DOM element to observe.\n   */\n  IntersectionObserver.prototype.unobserve = function (target) {\n    this._observationTargets = this._observationTargets.filter(function (item) {\n\n      return item.element != target;\n    });\n    if (!this._observationTargets.length) {\n      this._unmonitorIntersections();\n      this._unregisterInstance();\n    }\n  };\n\n  /**\n   * Stops observing all target elements for intersection changes.\n   */\n  IntersectionObserver.prototype.disconnect = function () {\n    this._observationTargets = [];\n    this._unmonitorIntersections();\n    this._unregisterInstance();\n  };\n\n  /**\n   * Returns any queue entries that have not yet been reported to the\n   * callback and clears the queue. This can be used in conjunction with the\n   * callback to obtain the absolute most up-to-date intersection information.\n   * @return {Array} The currently queued entries.\n   */\n  IntersectionObserver.prototype.takeRecords = function () {\n    var records = this._queuedEntries.slice();\n    this._queuedEntries = [];\n    return records;\n  };\n\n  /**\n   * Accepts the threshold value from the user configuration object and\n   * returns a sorted array of unique threshold values. If a value is not\n   * between 0 and 1 and error is thrown.\n   * @private\n   * @param {Array|number=} opt_threshold An optional threshold value or\n   *     a list of threshold values, defaulting to [0].\n   * @return {Array} A sorted list of unique and valid threshold values.\n   */\n  IntersectionObserver.prototype._initThresholds = function (opt_threshold) {\n    var threshold = opt_threshold || [0];\n    if (!Array.isArray(threshold)) threshold = [threshold];\n\n    return threshold.sort().filter(function (t, i, a) {\n      if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {\n        throw new Error('threshold must be a number between 0 and 1 inclusively');\n      }\n      return t !== a[i - 1];\n    });\n  };\n\n  /**\n   * Accepts the rootMargin value from the user configuration object\n   * and returns an array of the four margin values as an object containing\n   * the value and unit properties. If any of the values are not properly\n   * formatted or use a unit other than px or %, and error is thrown.\n   * @private\n   * @param {string=} opt_rootMargin An optional rootMargin value,\n   *     defaulting to '0px'.\n   * @return {Array<Object>} An array of margin objects with the keys\n   *     value and unit.\n   */\n  IntersectionObserver.prototype._parseRootMargin = function (opt_rootMargin) {\n    var marginString = opt_rootMargin || '0px';\n    var margins = marginString.split(/\\s+/).map(function (margin) {\n      var parts = /^(-?\\d*\\.?\\d+)(px|%)$/.exec(margin);\n      if (!parts) {\n        throw new Error('rootMargin must be specified in pixels or percent');\n      }\n      return { value: parseFloat(parts[1]), unit: parts[2] };\n    });\n\n    // Handles shorthand.\n    margins[1] = margins[1] || margins[0];\n    margins[2] = margins[2] || margins[0];\n    margins[3] = margins[3] || margins[1];\n\n    return margins;\n  };\n\n  /**\n   * Starts polling for intersection changes if the polling is not already\n   * happening, and if the page's visibilty state is visible.\n   * @private\n   */\n  IntersectionObserver.prototype._monitorIntersections = function () {\n    if (!this._monitoringIntersections) {\n      this._monitoringIntersections = true;\n\n      // If a poll interval is set, use polling instead of listening to\n      // resize and scroll events or DOM mutations.\n      if (this.POLL_INTERVAL) {\n        this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL);\n      } else {\n        addEvent(window, 'resize', this._checkForIntersections, true);\n        addEvent(document, 'scroll', this._checkForIntersections, true);\n\n        if ('MutationObserver' in window) {\n          this._domObserver = new MutationObserver(this._checkForIntersections);\n          this._domObserver.observe(document, {\n            attributes: true,\n            childList: true,\n            characterData: true,\n            subtree: true\n          });\n        }\n      }\n    }\n  };\n\n  /**\n   * Stops polling for intersection changes.\n   * @private\n   */\n  IntersectionObserver.prototype._unmonitorIntersections = function () {\n    if (this._monitoringIntersections) {\n      this._monitoringIntersections = false;\n\n      clearInterval(this._monitoringInterval);\n      this._monitoringInterval = null;\n\n      removeEvent(window, 'resize', this._checkForIntersections, true);\n      removeEvent(document, 'scroll', this._checkForIntersections, true);\n\n      if (this._domObserver) {\n        this._domObserver.disconnect();\n        this._domObserver = null;\n      }\n    }\n  };\n\n  /**\n   * Scans each observation target for intersection changes and adds them\n   * to the internal entries queue. If new entries are found, it\n   * schedules the callback to be invoked.\n   * @private\n   */\n  IntersectionObserver.prototype._checkForIntersections = function () {\n    var rootIsInDom = this._rootIsInDom();\n    var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();\n\n    this._observationTargets.forEach(function (item) {\n      var target = item.element;\n      var targetRect = getBoundingClientRect(target);\n      var rootContainsTarget = this._rootContainsTarget(target);\n      var oldEntry = item.entry;\n      var intersectionRect = rootIsInDom && rootContainsTarget && this._computeTargetAndRootIntersection(target, rootRect);\n\n      var newEntry = item.entry = new IntersectionObserverEntry({\n        time: now(),\n        target: target,\n        boundingClientRect: targetRect,\n        rootBounds: rootRect,\n        intersectionRect: intersectionRect\n      });\n\n      if (!oldEntry) {\n        this._queuedEntries.push(newEntry);\n      } else if (rootIsInDom && rootContainsTarget) {\n        // If the new entry intersection ratio has crossed any of the\n        // thresholds, add a new entry.\n        if (this._hasCrossedThreshold(oldEntry, newEntry)) {\n          this._queuedEntries.push(newEntry);\n        }\n      } else {\n        // If the root is not in the DOM or target is not contained within\n        // root but the previous entry for this target had an intersection,\n        // add a new record indicating removal.\n        if (oldEntry && oldEntry.isIntersecting) {\n          this._queuedEntries.push(newEntry);\n        }\n      }\n    }, this);\n\n    if (this._queuedEntries.length) {\n      this._callback(this.takeRecords(), this);\n    }\n  };\n\n  /**\n   * Accepts a target and root rect computes the intersection between then\n   * following the algorithm in the spec.\n   * TODO(philipwalton): at this time clip-path is not considered.\n   * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo\n   * @param {Element} target The target DOM element\n   * @param {Object} rootRect The bounding rect of the root after being\n   *     expanded by the rootMargin value.\n   * @return {?Object} The final intersection rect object or undefined if no\n   *     intersection is found.\n   * @private\n   */\n  IntersectionObserver.prototype._computeTargetAndRootIntersection = function (target, rootRect) {\n\n    // If the element isn't displayed, an intersection can't happen.\n    if (window.getComputedStyle(target).display == 'none') return;\n\n    var targetRect = getBoundingClientRect(target);\n    var intersectionRect = targetRect;\n    var parent = getParentNode(target);\n    var atRoot = false;\n\n    while (!atRoot) {\n      var parentRect = null;\n      var parentComputedStyle = parent.nodeType == 1 ? window.getComputedStyle(parent) : {};\n\n      // If the parent isn't displayed, an intersection can't happen.\n      if (parentComputedStyle.display == 'none') return;\n\n      if (parent == this.root || parent == document) {\n        atRoot = true;\n        parentRect = rootRect;\n      } else {\n        // If the element has a non-visible overflow, and it's not the <body>\n        // or <html> element, update the intersection rect.\n        // Note: <body> and <html> cannot be clipped to a rect that's not also\n        // the document rect, so no need to compute a new intersection.\n        if (parent != document.body && parent != document.documentElement && parentComputedStyle.overflow != 'visible') {\n          parentRect = getBoundingClientRect(parent);\n        }\n      }\n\n      // If either of the above conditionals set a new parentRect,\n      // calculate new intersection data.\n      if (parentRect) {\n        intersectionRect = computeRectIntersection(parentRect, intersectionRect);\n\n        if (!intersectionRect) break;\n      }\n      parent = getParentNode(parent);\n    }\n    return intersectionRect;\n  };\n\n  /**\n   * Returns the root rect after being expanded by the rootMargin value.\n   * @return {Object} The expanded root rect.\n   * @private\n   */\n  IntersectionObserver.prototype._getRootRect = function () {\n    var rootRect;\n    if (this.root) {\n      rootRect = getBoundingClientRect(this.root);\n    } else {\n      // Use <html>/<body> instead of window since scroll bars affect size.\n      var html = document.documentElement;\n      var body = document.body;\n      rootRect = {\n        top: 0,\n        left: 0,\n        right: html.clientWidth || body.clientWidth,\n        width: html.clientWidth || body.clientWidth,\n        bottom: html.clientHeight || body.clientHeight,\n        height: html.clientHeight || body.clientHeight\n      };\n    }\n    return this._expandRectByRootMargin(rootRect);\n  };\n\n  /**\n   * Accepts a rect and expands it by the rootMargin value.\n   * @param {Object} rect The rect object to expand.\n   * @return {Object} The expanded rect.\n   * @private\n   */\n  IntersectionObserver.prototype._expandRectByRootMargin = function (rect) {\n    var margins = this._rootMarginValues.map(function (margin, i) {\n      return margin.unit == 'px' ? margin.value : margin.value * (i % 2 ? rect.width : rect.height) / 100;\n    });\n    var newRect = {\n      top: rect.top - margins[0],\n      right: rect.right + margins[1],\n      bottom: rect.bottom + margins[2],\n      left: rect.left - margins[3]\n    };\n    newRect.width = newRect.right - newRect.left;\n    newRect.height = newRect.bottom - newRect.top;\n\n    return newRect;\n  };\n\n  /**\n   * Accepts an old and new entry and returns true if at least one of the\n   * threshold values has been crossed.\n   * @param {?IntersectionObserverEntry} oldEntry The previous entry for a\n   *    particular target element or null if no previous entry exists.\n   * @param {IntersectionObserverEntry} newEntry The current entry for a\n   *    particular target element.\n   * @return {boolean} Returns true if a any threshold has been crossed.\n   * @private\n   */\n  IntersectionObserver.prototype._hasCrossedThreshold = function (oldEntry, newEntry) {\n\n    // To make comparing easier, an entry that has a ratio of 0\n    // but does not actually intersect is given a value of -1\n    var oldRatio = oldEntry && oldEntry.isIntersecting ? oldEntry.intersectionRatio || 0 : -1;\n    var newRatio = newEntry.isIntersecting ? newEntry.intersectionRatio || 0 : -1;\n\n    // Ignore unchanged ratios\n    if (oldRatio === newRatio) return;\n\n    for (var i = 0; i < this.thresholds.length; i++) {\n      var threshold = this.thresholds[i];\n\n      // Return true if an entry matches a threshold or if the new ratio\n      // and the old ratio are on the opposite sides of a threshold.\n      if (threshold == oldRatio || threshold == newRatio || threshold < oldRatio !== threshold < newRatio) {\n        return true;\n      }\n    }\n  };\n\n  /**\n   * Returns whether or not the root element is an element and is in the DOM.\n   * @return {boolean} True if the root element is an element and is in the DOM.\n   * @private\n   */\n  IntersectionObserver.prototype._rootIsInDom = function () {\n    return !this.root || containsDeep(document, this.root);\n  };\n\n  /**\n   * Returns whether or not the target element is a child of root.\n   * @param {Element} target The target element to check.\n   * @return {boolean} True if the target element is a child of root.\n   * @private\n   */\n  IntersectionObserver.prototype._rootContainsTarget = function (target) {\n    return containsDeep(this.root || document, target);\n  };\n\n  /**\n   * Adds the instance to the global IntersectionObserver registry if it isn't\n   * already present.\n   * @private\n   */\n  IntersectionObserver.prototype._registerInstance = function () {\n    if (registry.indexOf(this) < 0) {\n      registry.push(this);\n    }\n  };\n\n  /**\n   * Removes the instance from the global IntersectionObserver registry.\n   * @private\n   */\n  IntersectionObserver.prototype._unregisterInstance = function () {\n    var index = registry.indexOf(this);\n    if (index != -1) registry.splice(index, 1);\n  };\n\n  /**\n   * Returns the result of the performance.now() method or null in browsers\n   * that don't support the API.\n   * @return {number} The elapsed time since the page was requested.\n   */\n  function now() {\n    return window.performance && performance.now && performance.now();\n  }\n\n  /**\n   * Throttles a function and delays its executiong, so it's only called at most\n   * once within a given time period.\n   * @param {Function} fn The function to throttle.\n   * @param {number} timeout The amount of time that must pass before the\n   *     function can be called again.\n   * @return {Function} The throttled function.\n   */\n  function throttle(fn, timeout) {\n    var timer = null;\n    return function () {\n      if (!timer) {\n        timer = setTimeout(function () {\n          fn();\n          timer = null;\n        }, timeout);\n      }\n    };\n  }\n\n  /**\n   * Adds an event handler to a DOM node ensuring cross-browser compatibility.\n   * @param {Node} node The DOM node to add the event handler to.\n   * @param {string} event The event name.\n   * @param {Function} fn The event handler to add.\n   * @param {boolean} opt_useCapture Optionally adds the even to the capture\n   *     phase. Note: this only works in modern browsers.\n   */\n  function addEvent(node, event, fn, opt_useCapture) {\n    if (typeof node.addEventListener == 'function') {\n      node.addEventListener(event, fn, opt_useCapture || false);\n    } else if (typeof node.attachEvent == 'function') {\n      node.attachEvent('on' + event, fn);\n    }\n  }\n\n  /**\n   * Removes a previously added event handler from a DOM node.\n   * @param {Node} node The DOM node to remove the event handler from.\n   * @param {string} event The event name.\n   * @param {Function} fn The event handler to remove.\n   * @param {boolean} opt_useCapture If the event handler was added with this\n   *     flag set to true, it should be set to true here in order to remove it.\n   */\n  function removeEvent(node, event, fn, opt_useCapture) {\n    if (typeof node.removeEventListener == 'function') {\n      node.removeEventListener(event, fn, opt_useCapture || false);\n    } else if (typeof node.detatchEvent == 'function') {\n      node.detatchEvent('on' + event, fn);\n    }\n  }\n\n  /**\n   * Returns the intersection between two rect objects.\n   * @param {Object} rect1 The first rect.\n   * @param {Object} rect2 The second rect.\n   * @return {?Object} The intersection rect or undefined if no intersection\n   *     is found.\n   */\n  function computeRectIntersection(rect1, rect2) {\n    var top = Math.max(rect1.top, rect2.top);\n    var bottom = Math.min(rect1.bottom, rect2.bottom);\n    var left = Math.max(rect1.left, rect2.left);\n    var right = Math.min(rect1.right, rect2.right);\n    var width = right - left;\n    var height = bottom - top;\n\n    return width >= 0 && height >= 0 && {\n      top: top,\n      bottom: bottom,\n      left: left,\n      right: right,\n      width: width,\n      height: height\n    };\n  }\n\n  /**\n   * Shims the native getBoundingClientRect for compatibility with older IE.\n   * @param {Element} el The element whose bounding rect to get.\n   * @return {Object} The (possibly shimmed) rect of the element.\n   */\n  function getBoundingClientRect(el) {\n    var rect;\n\n    try {\n      rect = el.getBoundingClientRect();\n    } catch (err) {\n      // Ignore Windows 7 IE11 \"Unspecified error\"\n      // https://github.com/w3c/IntersectionObserver/pull/205\n    }\n\n    if (!rect) return getEmptyRect();\n\n    // Older IE\n    if (!(rect.width && rect.height)) {\n      rect = {\n        top: rect.top,\n        right: rect.right,\n        bottom: rect.bottom,\n        left: rect.left,\n        width: rect.right - rect.left,\n        height: rect.bottom - rect.top\n      };\n    }\n    return rect;\n  }\n\n  /**\n   * Returns an empty rect object. An empty rect is returned when an element\n   * is not in the DOM.\n   * @return {Object} The empty rect.\n   */\n  function getEmptyRect() {\n    return {\n      top: 0,\n      bottom: 0,\n      left: 0,\n      right: 0,\n      width: 0,\n      height: 0\n    };\n  }\n\n  /**\n   * Checks to see if a parent element contains a child elemnt (including inside\n   * shadow DOM).\n   * @param {Node} parent The parent element.\n   * @param {Node} child The child element.\n   * @return {boolean} True if the parent node contains the child node.\n   */\n  function containsDeep(parent, child) {\n    var node = child;\n    while (node) {\n      if (node == parent) return true;\n\n      node = getParentNode(node);\n    }\n    return false;\n  }\n\n  /**\n   * Gets the parent node of an element or its host element if the parent node\n   * is a shadow root.\n   * @param {Node} node The node whose parent to get.\n   * @return {Node|null} The parent node or null if no parent exists.\n   */\n  function getParentNode(node) {\n    var parent = node.parentNode;\n\n    if (parent && parent.nodeType == 11 && parent.host) {\n      // If the parent is a shadow root, return the host element.\n      return parent.host;\n    }\n    return parent;\n  }\n\n  // Exposes the constructors globally.\n  window.IntersectionObserver = IntersectionObserver;\n  window.IntersectionObserverEntry = IntersectionObserverEntry;\n})(window, document);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n}();\n\n;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/client/components/LazyLoad/poly.js\n// module id = 103\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/client/components/LazyLoad/poly.js?");

/***/ })

};;