"use strict";

exports.__esModule = true;
exports.default = exports.FormTextareaPlugin = void 0;

var _formTextarea = require("./form-textarea");

exports.BFormTextarea = _formTextarea.BFormTextarea;

var _plugins = require("../../utils/plugins");

var FormTextareaPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BFormTextarea: _formTextarea.BFormTextarea,
    BTextarea: _formTextarea.BFormTextarea
  }
});
exports.FormTextareaPlugin = FormTextareaPlugin;
var _default = FormTextareaPlugin;
exports.default = _default;