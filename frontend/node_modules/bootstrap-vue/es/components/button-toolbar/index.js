"use strict";

exports.__esModule = true;
exports.default = exports.ButtonToolbarPlugin = void 0;

var _buttonToolbar = require("./button-toolbar");

exports.BButtonToolbar = _buttonToolbar.BButtonToolbar;

var _plugins = require("../../utils/plugins");

var ButtonToolbarPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BButtonToolbar: _buttonToolbar.BButtonToolbar,
    BBtnToolbar: _buttonToolbar.BButtonToolbar
  }
});
exports.ButtonToolbarPlugin = ButtonToolbarPlugin;
var _default = ButtonToolbarPlugin;
exports.default = _default;