"use strict";

exports.__esModule = true;
exports.default = exports.SpinnerPlugin = void 0;

var _spinner = require("./spinner");

exports.BSpinner = _spinner.BSpinner;

var _plugins = require("../../utils/plugins");

var SpinnerPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BSpinner: _spinner.BSpinner
  }
});
exports.SpinnerPlugin = SpinnerPlugin;
var _default = SpinnerPlugin;
exports.default = _default;