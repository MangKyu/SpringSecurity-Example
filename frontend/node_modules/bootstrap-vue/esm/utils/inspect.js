function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Convenience inspection utilities
 */
import { isArray } from './array';
import { isObject, isPlainObject } from './object';
export var toType = function toType(val) {
  return _typeof(val);
};
export var toRawType = function toRawType(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
};
export var toRawTypeLC = function toRawTypeLC(val) {
  return toRawType(val).toLowerCase();
};
export var isUndefined = function isUndefined(val) {
  return val === undefined;
};
export var isNull = function isNull(val) {
  return val === null;
};
export var isFunction = function isFunction(val) {
  return toType(val) === 'function';
};
export var isBoolean = function isBoolean(val) {
  return toType(val) === 'boolean';
};
export var isString = function isString(val) {
  return toType(val) === 'string';
};
export var isNumber = function isNumber(val) {
  return toType(val) === 'number';
};
export var isPrimitive = function isPrimitive(val) {
  return isBoolean(val) || isString(val) || isNumber(val);
};
export var isDate = function isDate(val) {
  return val instanceof Date;
};
export var isRegExp = function isRegExp(val) {
  return toRawType(val) === 'RegExp';
};
export var isPromise = function isPromise(val) {
  return !isUndefined(val) && !isNull(val) && isFunction(val.then) && isFunction(val.catch);
}; // Extra convenience named re-exports

export { isArray, isObject, isPlainObject };