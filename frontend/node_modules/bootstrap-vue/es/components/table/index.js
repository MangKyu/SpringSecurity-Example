"use strict";

exports.__esModule = true;
exports.default = exports.TablePlugin = void 0;

var _table = require("./table");

exports.BTable = _table.BTable;

var _tableLite = require("./table-lite");

exports.BTableLite = _tableLite.BTableLite;

var _plugins = require("../../utils/plugins");

var TablePlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BTable: _table.BTable,
    BTableLite: _tableLite.BTableLite
  }
});
exports.TablePlugin = TablePlugin;
var _default = TablePlugin;
exports.default = _default;