"use strict";

exports.__esModule = true;
exports.default = exports.ImagePlugin = void 0;

var _img = require("./img");

exports.BImg = _img.BImg;

var _imgLazy = require("./img-lazy");

exports.BImgLazy = _imgLazy.BImgLazy;

var _plugins = require("../../utils/plugins");

var ImagePlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BImg: _img.BImg,
    BImgLazy: _imgLazy.BImgLazy
  }
});
exports.ImagePlugin = ImagePlugin;
var _default = ImagePlugin;
exports.default = _default;