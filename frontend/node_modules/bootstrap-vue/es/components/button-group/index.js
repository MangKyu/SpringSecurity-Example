"use strict";

exports.__esModule = true;
exports.default = exports.ButtonGroupPlugin = void 0;

var _buttonGroup = require("./button-group");

exports.BButtonGroup = _buttonGroup.BButtonGroup;

var _plugins = require("../../utils/plugins");

var ButtonGroupPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BButtonGroup: _buttonGroup.BButtonGroup,
    BBtnGroup: _buttonGroup.BButtonGroup
  }
});
exports.ButtonGroupPlugin = ButtonGroupPlugin;
var _default = ButtonGroupPlugin;
exports.default = _default;