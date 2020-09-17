"use strict";

exports.__esModule = true;
exports.default = exports.FormCheckboxPlugin = void 0;

var _formCheckbox = require("./form-checkbox");

exports.BFormCheckbox = _formCheckbox.BFormCheckbox;

var _formCheckboxGroup = require("./form-checkbox-group");

exports.BFormCheckboxGroup = _formCheckboxGroup.BFormCheckboxGroup;

var _plugins = require("../../utils/plugins");

var FormCheckboxPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BFormCheckbox: _formCheckbox.BFormCheckbox,
    BCheckbox: _formCheckbox.BFormCheckbox,
    BCheck: _formCheckbox.BFormCheckbox,
    BFormCheckboxGroup: _formCheckboxGroup.BFormCheckboxGroup,
    BCheckboxGroup: _formCheckboxGroup.BFormCheckboxGroup,
    BCheckGroup: _formCheckboxGroup.BFormCheckboxGroup
  }
});
exports.FormCheckboxPlugin = FormCheckboxPlugin;
var _default = FormCheckboxPlugin;
exports.default = _default;