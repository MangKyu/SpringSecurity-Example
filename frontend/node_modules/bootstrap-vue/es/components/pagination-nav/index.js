"use strict";

exports.__esModule = true;
exports.default = exports.PaginationNavPlugin = void 0;

var _paginationNav = require("./pagination-nav");

exports.BPaginationNav = _paginationNav.BPaginationNav;

var _plugins = require("../../utils/plugins");

var PaginationNavPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BPaginationNav: _paginationNav.BPaginationNav
  }
});
exports.PaginationNavPlugin = PaginationNavPlugin;
var _default = PaginationNavPlugin;
exports.default = _default;