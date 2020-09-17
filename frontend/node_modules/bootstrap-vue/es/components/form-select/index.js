"use strict";

exports.__esModule = true;
exports.default = exports.FormSelectPlugin = void 0;

var _formSelect = require("./form-select");

exports.BFormSelect = _formSelect.BFormSelect;

var _plugins = require("../../utils/plugins");

var FormSelectPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BFormSelect: _formSelect.BFormSelect,
    BSelect: _formSelect.BFormSelect
  }
});
exports.FormSelectPlugin = FormSelectPlugin;
var _default = FormSelectPlugin;
exports.default = _default;