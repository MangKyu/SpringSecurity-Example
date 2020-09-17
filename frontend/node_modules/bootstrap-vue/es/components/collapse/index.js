"use strict";

exports.__esModule = true;
exports.default = exports.CollapsePlugin = void 0;

var _collapse = require("./collapse");

exports.BCollapse = _collapse.BCollapse;

var _toggle = require("../../directives/toggle/toggle");

var _plugins = require("../../utils/plugins");

var CollapsePlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BCollapse: _collapse.BCollapse
  },
  directives: {
    VBToggle: _toggle.VBToggle
  }
});
exports.CollapsePlugin = CollapsePlugin;
var _default = CollapsePlugin;
exports.default = _default;