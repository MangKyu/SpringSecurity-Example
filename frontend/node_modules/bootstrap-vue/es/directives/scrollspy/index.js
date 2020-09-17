"use strict";

exports.__esModule = true;
exports.default = exports.VBScrollspyPlugin = void 0;

var _scrollspy = require("./scrollspy");

exports.VBScrollspy = _scrollspy.VBScrollspy;

var _plugins = require("../../utils/plugins");

var VBScrollspyPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  directives: {
    VBScrollspy: _scrollspy.VBScrollspy
  }
});
exports.VBScrollspyPlugin = VBScrollspyPlugin;
var _default = VBScrollspyPlugin;
exports.default = _default;