"use strict";

exports.__esModule = true;
exports.default = exports.PaginationPlugin = void 0;

var _pagination = require("./pagination");

exports.BPagination = _pagination.BPagination;

var _plugins = require("../../utils/plugins");

var PaginationPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BPagination: _pagination.BPagination
  }
});
exports.PaginationPlugin = PaginationPlugin;
var _default = PaginationPlugin;
exports.default = _default;