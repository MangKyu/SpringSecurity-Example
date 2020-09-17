"use strict";

exports.__esModule = true;
exports.default = exports.FormRadioPlugin = void 0;

var _formRadio = require("./form-radio");

exports.BFormRadio = _formRadio.BFormRadio;

var _formRadioGroup = require("./form-radio-group");

exports.BFormRadioGroup = _formRadioGroup.BFormRadioGroup;

var _plugins = require("../../utils/plugins");

var FormRadioPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BFormRadio: _formRadio.BFormRadio,
    BRadio: _formRadio.BFormRadio,
    BFormRadioGroup: _formRadioGroup.BFormRadioGroup,
    BRadioGroup: _formRadioGroup.BFormRadioGroup
  }
});
exports.FormRadioPlugin = FormRadioPlugin;
var _default = FormRadioPlugin;
exports.default = _default;