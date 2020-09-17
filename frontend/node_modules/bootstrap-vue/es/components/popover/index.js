"use strict";

exports.__esModule = true;
exports.default = exports.PopoverPlugin = void 0;

var _popover = require("./popover");

exports.BPopover = _popover.BPopover;

var _popover2 = require("../../directives/popover/popover");

var _plugins = require("../../utils/plugins");

var PopoverPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BPopover: _popover.BPopover
  },
  directives: {
    VBPopover: _popover2.VBPopover
  }
});
exports.PopoverPlugin = PopoverPlugin;
var _default = PopoverPlugin;
exports.default = _default;