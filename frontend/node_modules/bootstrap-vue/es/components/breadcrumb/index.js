"use strict";

exports.__esModule = true;
exports.default = exports.BreadcrumbPlugin = void 0;

var _breadcrumb = require("./breadcrumb");

exports.BBreadcrumb = _breadcrumb.BBreadcrumb;

var _breadcrumbItem = require("./breadcrumb-item");

exports.BBreadcrumbItem = _breadcrumbItem.BBreadcrumbItem;

var _breadcrumbLink = require("./breadcrumb-link");

exports.BBreadcrumbLink = _breadcrumbLink.BBreadcrumbLink;

var _plugins = require("../../utils/plugins");

var BreadcrumbPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BBreadcrumb: _breadcrumb.BBreadcrumb,
    BBreadcrumbItem: _breadcrumbItem.BBreadcrumbItem,
    BBreadcrumbLink: _breadcrumbLink.BBreadcrumbLink
  }
});
exports.BreadcrumbPlugin = BreadcrumbPlugin;
var _default = BreadcrumbPlugin;
exports.default = _default;