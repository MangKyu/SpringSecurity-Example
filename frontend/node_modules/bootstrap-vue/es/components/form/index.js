"use strict";

exports.__esModule = true;
exports.default = exports.FormPlugin = void 0;

var _form = require("./form");

exports.BForm = _form.BForm;

var _formDatalist = require("./form-datalist");

exports.BFormDatalist = _formDatalist.BFormDatalist;

var _formText = require("./form-text");

exports.BFormText = _formText.BFormText;

var _formInvalidFeedback = require("./form-invalid-feedback");

exports.BFormInvalidFeedback = _formInvalidFeedback.BFormInvalidFeedback;

var _formValidFeedback = require("./form-valid-feedback");

exports.BFormValidFeedback = _formValidFeedback.BFormValidFeedback;

var _formRow = require("../layout/form-row");

var _plugins = require("../../utils/plugins");

var FormPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BForm: _form.BForm,
    BFormDatalist: _formDatalist.BFormDatalist,
    BDatalist: _formDatalist.BFormDatalist,
    BFormText: _formText.BFormText,
    BFormInvalidFeedback: _formInvalidFeedback.BFormInvalidFeedback,
    BFormFeedback: _formInvalidFeedback.BFormInvalidFeedback,
    BFormValidFeedback: _formValidFeedback.BFormValidFeedback,
    // Added here for convenience
    BFormRow: _formRow.BFormRow
  }
}); // BFormRow is not exported here as a named export, as it is exported by Layout

exports.FormPlugin = FormPlugin;
var _default = FormPlugin;
exports.default = _default;