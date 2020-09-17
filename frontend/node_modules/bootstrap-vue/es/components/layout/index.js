"use strict";

exports.__esModule = true;
exports.default = exports.LayoutPlugin = void 0;

var _container = require("./container");

exports.BContainer = _container.BContainer;

var _row = require("./row");

exports.BRow = _row.BRow;

var _col = require("./col");

exports.BCol = _col.BCol;

var _formRow = require("./form-row");

exports.BFormRow = _formRow.BFormRow;

var _plugins = require("../../utils/plugins");

var LayoutPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BContainer: _container.BContainer,
    BRow: _row.BRow,
    BCol: _col.BCol,
    BFormRow: _formRow.BFormRow
  }
});
exports.LayoutPlugin = LayoutPlugin;
var _default = LayoutPlugin;
exports.default = _default;