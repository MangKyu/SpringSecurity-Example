"use strict";

exports.__esModule = true;
exports.default = exports.ProgressPlugin = void 0;

var _progress = require("./progress");

exports.BProgress = _progress.BProgress;

var _progressBar = require("./progress-bar");

exports.BProgressBar = _progressBar.BProgressBar;

var _plugins = require("../../utils/plugins");

var ProgressPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BProgress: _progress.BProgress,
    BProgressBar: _progressBar.BProgressBar
  }
});
exports.ProgressPlugin = ProgressPlugin;
var _default = ProgressPlugin;
exports.default = _default;