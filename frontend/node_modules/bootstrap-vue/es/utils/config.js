"use strict";

exports.__esModule = true;
exports.getBreakpointsDownCached = exports.getBreakpointsDown = exports.getBreakpointsUpCached = exports.getBreakpointsUp = exports.getBreakpointsCached = exports.getBreakpoints = exports.getComponentConfig = exports.getConfigValue = exports.getConfig = void 0;

var _vue = _interopRequireDefault(require("./vue"));

var _cloneDeep = _interopRequireDefault(require("./clone-deep"));

var _get = _interopRequireDefault(require("./get"));

var _memoize = _interopRequireDefault(require("./memoize"));

var _configDefaults = _interopRequireDefault(require("./config-defaults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --- Constants ---
var PROP_NAME = '$bvConfig';
var VueProto = _vue.default.prototype; // --- Getter methods ---
// All methods return a deep clone (immutable) copy of the config
// value, to prevent mutation of the user config object.
// Get the current user config. For testing purposes only

var getConfig = function getConfig() {
  return VueProto[PROP_NAME] ? VueProto[PROP_NAME].getConfig() : {};
}; // Method to grab a config value based on a dotted/array notation key


exports.getConfig = getConfig;

var getConfigValue = function getConfigValue(key) {
  return VueProto[PROP_NAME] ? VueProto[PROP_NAME].getConfigValue(key) : (0, _cloneDeep.default)((0, _get.default)(_configDefaults.default, key));
}; // Method to grab a config value for a particular component


exports.getConfigValue = getConfigValue;

var getComponentConfig = function getComponentConfig(cmpName) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  // Return the particular config value for key for if specified,
  // otherwise we return the full config (or an empty object if not found)
  return key ? getConfigValue("".concat(cmpName, ".").concat(key)) : getConfigValue(cmpName) || {};
}; // Convenience method for getting all breakpoint names


exports.getComponentConfig = getComponentConfig;

var getBreakpoints = function getBreakpoints() {
  return getConfigValue('breakpoints');
}; // Private function for caching / locking-in breakpoint names


exports.getBreakpoints = getBreakpoints;

var _getBreakpointsCached = (0, _memoize.default)(function () {
  return getBreakpoints();
}); // Convenience method for getting all breakpoint names.
// Caches the results after first access.


var getBreakpointsCached = function getBreakpointsCached() {
  return (0, _cloneDeep.default)(_getBreakpointsCached());
}; // Convenience method for getting breakpoints with
// the smallest breakpoint set as ''.
// Useful for components that create breakpoint specific props.


exports.getBreakpointsCached = getBreakpointsCached;

var getBreakpointsUp = function getBreakpointsUp() {
  var breakpoints = getBreakpoints();
  breakpoints[0] = '';
  return breakpoints;
}; // Convenience method for getting breakpoints with
// the smallest breakpoint set as ''.
// Useful for components that create breakpoint specific props.
// Caches the results after first access.


exports.getBreakpointsUp = getBreakpointsUp;
var getBreakpointsUpCached = (0, _memoize.default)(function () {
  var breakpoints = getBreakpointsCached();
  breakpoints[0] = '';
  return breakpoints;
}); // Convenience method for getting breakpoints with
// the largest breakpoint set as ''.
// Useful for components that create breakpoint specific props.

exports.getBreakpointsUpCached = getBreakpointsUpCached;

var getBreakpointsDown = function getBreakpointsDown() {
  var breakpoints = getBreakpoints();
  breakpoints[breakpoints.length - 1] = '';
  return breakpoints;
}; // Convenience method for getting breakpoints with
// the largest breakpoint set as ''.
// Useful for components that create breakpoint specific props.
// Caches the results after first access.

/* istanbul ignore next: we don't use this method anywhere, yet */


exports.getBreakpointsDown = getBreakpointsDown;

var getBreakpointsDownCached = function getBreakpointsDownCached()
/* istanbul ignore next */
{
  var breakpoints = getBreakpointsCached();
  breakpoints[breakpoints.length - 1] = '';
  return breakpoints;
};

exports.getBreakpointsDownCached = getBreakpointsDownCached;