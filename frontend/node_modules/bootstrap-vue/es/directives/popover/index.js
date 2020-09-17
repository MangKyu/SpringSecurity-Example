"use strict";

exports.__esModule = true;
exports.default = exports.VBPopoverPlugin = void 0;

var _popover = require("./popover");

exports.VBPopover = _popover.VBPopover;

var _plugins = require("../../utils/plugins");

var VBPopoverPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  directives: {
    VBPopover: _popover.VBPopover
  }
});
exports.VBPopoverPlugin = VBPopoverPlugin;
var _default = VBPopoverPlugin;
exports.default = _default;