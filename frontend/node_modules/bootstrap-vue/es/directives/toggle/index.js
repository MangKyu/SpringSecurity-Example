"use strict";

exports.__esModule = true;
exports.default = exports.VBTogglePlugin = void 0;

var _toggle = require("./toggle");

exports.VBToggle = _toggle.VBToggle;

var _plugins = require("../../utils/plugins");

var VBTogglePlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  directives: {
    VBToggle: _toggle.VBToggle
  }
});
exports.VBTogglePlugin = VBTogglePlugin;
var _default = VBTogglePlugin;
exports.default = _default;