"use strict";

exports.__esModule = true;
exports.concat = exports.arrayIncludes = exports.isArray = exports.from = void 0;
// --- Static ---
var from = Array.from;
exports.from = from;
var isArray = Array.isArray; // --- Instance ---

exports.isArray = isArray;

var arrayIncludes = function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
};

exports.arrayIncludes = arrayIncludes;

var concat = function concat() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Array.prototype.concat.apply([], args);
};

exports.concat = concat;