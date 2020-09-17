"use strict";

exports.__esModule = true;
exports.default = exports.BadgePlugin = void 0;

var _badge = require("./badge");

exports.BBadge = _badge.BBadge;

var _plugins = require("../../utils/plugins");

var BadgePlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BBadge: _badge.BBadge
  }
});
exports.BadgePlugin = BadgePlugin;
var _default = BadgePlugin;
exports.default = _default;