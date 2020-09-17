"use strict";

exports.__esModule = true;
exports.default = exports.MediaPlugin = void 0;

var _media = require("./media");

exports.BMedia = _media.BMedia;

var _mediaAside = require("./media-aside");

exports.BMediaAside = _mediaAside.BMediaAside;

var _mediaBody = require("./media-body");

exports.BMediaBody = _mediaBody.BMediaBody;

var _plugins = require("../../utils/plugins");

var MediaPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BMedia: _media.BMedia,
    BMediaAside: _mediaAside.BMediaAside,
    BMediaBody: _mediaBody.BMediaBody
  }
});
exports.MediaPlugin = MediaPlugin;
var _default = MediaPlugin;
exports.default = _default;