"use strict";

exports.__esModule = true;
exports.default = exports.FormInputPlugin = void 0;

var _formInput = require("./form-input");

exports.BFormInput = _formInput.BFormInput;

var _plugins = require("../../utils/plugins");

var FormInputPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BFormInput: _formInput.BFormInput,
    BInput: _formInput.BFormInput
  }
});
exports.FormInputPlugin = FormInputPlugin;
var _default = FormInputPlugin;
exports.default = _default;