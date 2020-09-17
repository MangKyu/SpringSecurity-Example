"use strict";

exports.__esModule = true;
exports.default = exports.TabsPlugin = void 0;

var _tabs = require("./tabs");

exports.BTabs = _tabs.BTabs;

var _tab = require("./tab");

exports.BTab = _tab.BTab;

var _plugins = require("../../utils/plugins");

var TabsPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BTabs: _tabs.BTabs,
    BTab: _tab.BTab
  }
});
exports.TabsPlugin = TabsPlugin;
var _default = TabsPlugin;
exports.default = _default;