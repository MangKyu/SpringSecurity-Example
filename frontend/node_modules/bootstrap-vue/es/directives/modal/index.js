"use strict";

exports.__esModule = true;
exports.default = exports.VBModalPlugin = void 0;

var _modal = require("./modal");

exports.VBModal = _modal.VBModal;

var _plugins = require("../../utils/plugins");

var VBModalPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  directives: {
    VBModal: _modal.VBModal
  }
});
exports.VBModalPlugin = VBModalPlugin;
var _default = VBModalPlugin;
exports.default = _default;