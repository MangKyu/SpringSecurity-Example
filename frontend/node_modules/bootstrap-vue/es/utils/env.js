"use strict";

exports.__esModule = true;
exports.getNoWarn = exports.getEnv = exports.hasIntersectionObserverSupport = exports.hasPointerEventSupport = exports.hasTouchSupport = exports.hasPassiveEventSupport = exports.isIE = exports.isJSDOM = exports.userAgent = exports.isBrowser = exports.hasMutationObserverSupport = exports.hasPromiseSupport = exports.hasNavigatorSupport = exports.hasDocumentSupport = exports.hasWindowSupport = void 0;

/**
 * Utilities to get information about the current environment
 */
// --- Constants ---
var hasWindowSupport = typeof window !== 'undefined';
exports.hasWindowSupport = hasWindowSupport;
var hasDocumentSupport = typeof document !== 'undefined';
exports.hasDocumentSupport = hasDocumentSupport;
var hasNavigatorSupport = typeof navigator !== 'undefined';
exports.hasNavigatorSupport = hasNavigatorSupport;
var hasPromiseSupport = typeof Promise !== 'undefined';
exports.hasPromiseSupport = hasPromiseSupport;
var hasMutationObserverSupport = typeof MutationObserver !== 'undefined' || typeof WebKitMutationObserver !== 'undefined' || typeof MozMutationObserver !== 'undefined';
exports.hasMutationObserverSupport = hasMutationObserverSupport;
var isBrowser = hasWindowSupport && hasDocumentSupport && hasNavigatorSupport; // Browser type sniffing

exports.isBrowser = isBrowser;
var userAgent = isBrowser ? window.navigator.userAgent.toLowerCase() : '';
exports.userAgent = userAgent;
var isJSDOM = userAgent.indexOf('jsdom') > 0;
exports.isJSDOM = isJSDOM;
var isIE = /msie|trident/.test(userAgent); // Determine if the browser supports the option passive for events

exports.isIE = isIE;

var hasPassiveEventSupport = function () {
  var passiveEventSupported = false;

  if (isBrowser) {
    try {
      var options = {
        get passive() {
          // This function will be called when the browser
          // attempts to access the passive property.

          /* istanbul ignore next: will never be called in JSDOM */
          passiveEventSupported = true;
        }

      };
      window.addEventListener('test', options, options);
      window.removeEventListener('test', options, options);
    } catch (err) {
      /* istanbul ignore next: will never be called in JSDOM */
      passiveEventSupported = false;
    }
  }

  return passiveEventSupported;
}();

exports.hasPassiveEventSupport = hasPassiveEventSupport;
var hasTouchSupport = isBrowser && ('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0);
exports.hasTouchSupport = hasTouchSupport;
var hasPointerEventSupport = isBrowser && Boolean(window.PointerEvent || window.MSPointerEvent);
exports.hasPointerEventSupport = hasPointerEventSupport;
var hasIntersectionObserverSupport = isBrowser && 'IntersectionObserver' in window && 'IntersectionObserverEntry' in window && // Edge 15 and UC Browser lack support for `isIntersecting`
// but we an use intersectionRatio > 0 instead
// 'isIntersecting' in window.IntersectionObserverEntry.prototype &&
'intersectionRatio' in window.IntersectionObserverEntry.prototype; // --- Getters ---

exports.hasIntersectionObserverSupport = hasIntersectionObserverSupport;

var getEnv = function getEnv(key) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var env = typeof process !== 'undefined' && process ? process.env || {} : {};

  if (!key) {
    /* istanbul ignore next */
    return env;
  }

  return env[key] || fallback;
};

exports.getEnv = getEnv;

var getNoWarn = function getNoWarn() {
  return getEnv('BOOTSTRAP_VUE_NO_WARN');
};

exports.getNoWarn = getNoWarn;