"use strict";

exports.__esModule = true;
exports.default = exports.LinkPlugin = void 0;

var _link = require("./link");

exports.BLink = _link.BLink;

var _plugins = require("../../utils/plugins");

var LinkPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BLink: _link.BLink
  }
});
exports.LinkPlugin = LinkPlugin;
var _default = LinkPlugin;
exports.default = _default;