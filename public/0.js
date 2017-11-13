webpackJsonp([0],{"./src/client/components/LazyLoad/observer.js":function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function r(t){return new A.default(function(e,n){var o=new Image;o.addEventListener("load",e),o.addEventListener("error",n),o.src=t})}function i(t,e){for(var n=t.length;n--;){var o=function(){var o=t[n],i=o.target;if(o.intersectionRatio>0){if(!e)return{v:void 0};e.unobserve(o.target);var s=i.dataset,c=s.webpsrcset,h=s.src,a=(s.fallbacksrc,s.srcset);h?r(i.dataset.src).then(function(){i.src=i.dataset.src}).catch(function(){}):(a||c)&&(i.srcset=d&&c?c:a)}}();if("object"===(void 0===o?"undefined":(0,a.default)(o)))return o.v}}function s(t){void 0===d?c().then(function(e){d=e,f.observe(t)}):f.observe(t)}function c(){var t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return new A.default(function(e){var n=new Image;n.onload=function(){var t=n.width>0&&n.height>0;e(t)},n.onerror=function(){e(!1)},n.src="data:image/webp;base64,"+t.lossy})}e.__esModule=!0,e.observer=void 0;var h=n("./node_modules/babel-runtime/helpers/typeof.js"),a=o(h),u=n("./node_modules/babel-runtime/core-js/promise.js"),A=o(u);n("./src/client/components/LazyLoad/poly.js");var l={root:null,rootMargin:"50px 0px",threshold:.01},d=void 0,f=e.observer=new IntersectionObserver(i,l);e.default=s},"./src/client/components/LazyLoad/poly.js":function(t,e,n){"use strict";!function(t,e){function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||u(),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,o=this.intersectionRect,r=o.width*o.height;this.intersectionRatio=n?r/n:this.isIntersecting?1:0}function o(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=i(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function r(){return t.performance&&performance.now&&performance.now()}function i(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}function s(t,e,n,o){"function"==typeof t.addEventListener?t.addEventListener(e,n,o||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function c(t,e,n,o){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,o||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function h(t,e){var n=Math.max(t.top,e.top),o=Math.min(t.bottom,e.bottom),r=Math.max(t.left,e.left),i=Math.min(t.right,e.right),s=i-r,c=o-n;return s>=0&&c>=0&&{top:n,bottom:o,left:r,right:i,width:s,height:c}}function a(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):u()}function u(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function A(t,e){for(var n=e;n;){if(n==t)return!0;n=l(n)}return!1}function l(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)return void("isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}));var d=[];o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},o.prototype._parseRootMargin=function(t){var e=t||"0px",n=e.split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return n[1]=n[1]||n[0],n[2]=n[2]||n[0],n[3]=n[3]||n[1],n},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,c(t,"resize",this._checkForIntersections,!0),c(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():u();this._observationTargets.forEach(function(o){var i=o.element,s=a(i),c=this._rootContainsTarget(i),h=o.entry,u=t&&c&&this._computeTargetAndRootIntersection(i,e),A=o.entry=new n({time:r(),target:i,boundingClientRect:s,rootBounds:e,intersectionRect:u});h?t&&c?this._hasCrossedThreshold(h,A)&&this._queuedEntries.push(A):h&&h.isIntersecting&&this._queuedEntries.push(A):this._queuedEntries.push(A)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(n,o){if("none"!=t.getComputedStyle(n).display){for(var r=a(n),i=r,s=l(n),c=!1;!c;){var u=null,A=1==s.nodeType?t.getComputedStyle(s):{};if("none"==A.display)return;if(s==this.root||s==e?(c=!0,u=o):s!=e.body&&s!=e.documentElement&&"visible"!=A.overflow&&(u=a(s)),u&&!(i=h(u,i)))break;s=l(s)}return i}},o.prototype._getRootRect=function(){var t;if(this.root)t=a(this.root);else{var n=e.documentElement,o=e.body;t={top:0,left:0,right:n.clientWidth||o.clientWidth,width:n.clientWidth||o.clientWidth,bottom:n.clientHeight||o.clientHeight,height:n.clientHeight||o.clientHeight}}return this._expandRectByRootMargin(t)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},o.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==o)for(var r=0;r<this.thresholds.length;r++){var i=this.thresholds[r];if(i==n||i==o||i<n!=i<o)return!0}},o.prototype._rootIsInDom=function(){return!this.root||A(e,this.root)},o.prototype._rootContainsTarget=function(t){return A(this.root||e,t)},o.prototype._registerInstance=function(){d.indexOf(this)<0&&d.push(this)},o.prototype._unregisterInstance=function(){var t=d.indexOf(this);t!=-1&&d.splice(t,1)},t.IntersectionObserver=o,t.IntersectionObserverEntry=n}(window,document)}});