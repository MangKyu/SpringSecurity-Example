"use strict";

exports.__esModule = true;
exports.default = exports.EmbedPlugin = void 0;

var _embed = require("./embed");

exports.BEmbed = _embed.BEmbed;

var _plugins = require("../../utils/plugins");

var EmbedPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BEmbed: _embed.BEmbed
  }
});
exports.EmbedPlugin = EmbedPlugin;
var _default = EmbedPlugin;
exports.default = _default;