"use strict";

exports.__esModule = true;
exports.default = exports.FormFilePlugin = void 0;

var _formFile = require("./form-file");

exports.BFormFile = _formFile.BFormFile;

var _plugins = require("../../utils/plugins");

var FormFilePlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BFormFile: _formFile.BFormFile,
    BFile: _formFile.BFormFile
  }
});
exports.FormFilePlugin = FormFilePlugin;
var _default = FormFilePlugin;
exports.default = _default;