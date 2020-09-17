"use strict";

exports.__esModule = true;
var _exportNames = {
  Modal: true,
  Popover: true,
  Scrollspy: true,
  Toggle: true,
  Tooltip: true
};
exports.default = exports.Tooltip = exports.Toggle = exports.Scrollspy = exports.Popover = exports.Modal = void 0;

var _index = require("./index.esm");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _index[key];
});

var _modal = require("./modal");

exports.Modal = _modal.VBModalPlugin;

var _popover = require("./popover");

exports.Popover = _popover.VBPopoverPlugin;

var _scrollspy = require("./scrollspy");

exports.Scrollspy = _scrollspy.VBScrollspyPlugin;

var _toggle = require("./toggle");

exports.Toggle = _toggle.VBTogglePlugin;

var _tooltip = require("./tooltip");

exports.Tooltip = _tooltip.VBTooltipPlugin;
// Legacy index file supporting legacy plugin names.
// This file is only here from transpilation purposes for `es/` build.
// src/index imports /src/directives/index.esm so that we don't
// have top-level duplicate plugin names.
// Import the main directives plugin
// Export all directive group plugins and directives as named exports
// Export all legacy named directive group plugins as named exports
// To be removed in stable release
// Default export is a plugin that installs all plugins
var _default = _index.directivesPlugin;
exports.default = _default;