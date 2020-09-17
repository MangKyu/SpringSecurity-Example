"use strict";

exports.__esModule = true;
exports.VBTooltip = exports.VBToggle = exports.VBScrollspy = exports.VBPopover = exports.VBModal = exports.directivesPlugin = void 0;

var _plugins = require("../utils/plugins");

var _modal = require("./modal");

exports.VBModalPlugin = _modal.VBModalPlugin;

var _popover = require("./popover");

exports.VBPopoverPlugin = _popover.VBPopoverPlugin;

var _scrollspy = require("./scrollspy");

exports.VBScrollspyPlugin = _scrollspy.VBScrollspyPlugin;

var _toggle = require("./toggle");

exports.VBTogglePlugin = _toggle.VBTogglePlugin;

var _tooltip = require("./tooltip");

exports.VBTooltipPlugin = _tooltip.VBTooltipPlugin;

var _modal2 = require("./modal/modal");

exports.VBModal = _modal2.VBModal;

var _popover2 = require("./popover/popover");

exports.VBPopover = _popover2.VBPopover;

var _scrollspy2 = require("./scrollspy/scrollspy");

exports.VBScrollspy = _scrollspy2.VBScrollspy;

var _toggle2 = require("./toggle/toggle");

exports.VBToggle = _toggle2.VBToggle;

var _tooltip2 = require("./tooltip/tooltip");

exports.VBTooltip = _tooltip2.VBTooltip;
// Index file used for the main builds, which does not include legacy plugin names
// Once es/ buld is removed, then this file will be renamed to index.js
// Main plugin for installing all directive plugins
var directivesPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  plugins: {
    VBModalPlugin: _modal.VBModalPlugin,
    VBPopoverPlugin: _popover.VBPopoverPlugin,
    VBScrollspyPlugin: _scrollspy.VBScrollspyPlugin,
    VBTogglePlugin: _toggle.VBTogglePlugin,
    VBTooltipPlugin: _tooltip.VBTooltipPlugin
  }
}); // Named exports of all directives (VB<Name>) and Plugins (VB<name>Plugin)
// See src/compinents/index.esm.js for notes/comment
// export * from './modal'

exports.directivesPlugin = directivesPlugin;