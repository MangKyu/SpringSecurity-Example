"use strict";

exports.__esModule = true;
exports.default = exports.JumbotronPlugin = void 0;

var _jumbotron = require("./jumbotron");

exports.BJumbotron = _jumbotron.BJumbotron;

var _plugins = require("../../utils/plugins");

var JumbotronPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BJumbotron: _jumbotron.BJumbotron
  }
});
exports.JumbotronPlugin = JumbotronPlugin;
var _default = JumbotronPlugin;
exports.default = _default;