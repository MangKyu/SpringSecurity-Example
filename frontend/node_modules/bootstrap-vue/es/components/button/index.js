"use strict";

exports.__esModule = true;
exports.default = exports.ButtonPlugin = void 0;

var _button = require("./button");

exports.BButton = _button.BButton;

var _buttonClose = require("./button-close");

exports.BButtonClose = _buttonClose.BButtonClose;

var _plugins = require("../../utils/plugins");

var ButtonPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BButton: _button.BButton,
    BBtn: _button.BButton,
    BButtonClose: _buttonClose.BButtonClose,
    BBtnClose: _buttonClose.BButtonClose
  }
});
exports.ButtonPlugin = ButtonPlugin;
var _default = ButtonPlugin;
exports.default = _default;