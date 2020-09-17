"use strict";

exports.__esModule = true;
exports.default = exports.FormGroupPlugin = void 0;

var _formGroup = require("./form-group");

exports.BFormGroup = _formGroup.BFormGroup;

var _plugins = require("../../utils/plugins");

var FormGroupPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BFormGroup: _formGroup.BFormGroup,
    BFormFieldset: _formGroup.BFormGroup
  }
});
exports.FormGroupPlugin = FormGroupPlugin;
var _default = FormGroupPlugin;
exports.default = _default;