"use strict";

exports.__esModule = true;
exports.default = exports.AlertPlugin = void 0;

var _alert = require("./alert");

exports.BAlert = _alert.BAlert;

var _plugins = require("../../utils/plugins");

var AlertPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BAlert: _alert.BAlert
  }
});
exports.AlertPlugin = AlertPlugin;
var _default = AlertPlugin;
exports.default = _default;