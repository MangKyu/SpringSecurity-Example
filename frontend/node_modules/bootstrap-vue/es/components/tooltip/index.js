"use strict";

exports.__esModule = true;
exports.default = exports.TooltipPlugin = void 0;

var _tooltip = require("./tooltip");

exports.BTooltip = _tooltip.BTooltip;

var _tooltip2 = require("../../directives/tooltip/tooltip");

var _plugins = require("../../utils/plugins");

var TooltipPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BTooltip: _tooltip.BTooltip
  },
  directives: {
    VBTooltip: _tooltip2.VBTooltip
  }
});
exports.TooltipPlugin = TooltipPlugin;
var _default = TooltipPlugin;
exports.default = _default;