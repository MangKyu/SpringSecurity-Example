"use strict";

exports.__esModule = true;
exports.default = exports.VBTooltipPlugin = void 0;

var _tooltip = require("./tooltip");

exports.VBTooltip = _tooltip.VBTooltip;

var _plugins = require("../../utils/plugins");

var VBTooltipPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  directives: {
    VBTooltip: _tooltip.VBTooltip
  }
});
exports.VBTooltipPlugin = VBTooltipPlugin;
var _default = VBTooltipPlugin;
exports.default = _default;