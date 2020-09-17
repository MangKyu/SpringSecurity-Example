"use strict";

exports.__esModule = true;
exports.default = exports.ToastPlugin = void 0;

var _bvToast = require("./helpers/bv-toast");

var _toast = require("./toast");

exports.BToast = _toast.BToast;

var _toaster = require("./toaster");

exports.BToaster = _toaster.BToaster;

var _plugins = require("../../utils/plugins");

var ToastPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BToast: _toast.BToast,
    BToaster: _toaster.BToaster
  },
  // $bvToast injection
  plugins: {
    BVToastPlugin: _bvToast.BVToastPlugin
  }
});
exports.ToastPlugin = ToastPlugin;
var _default = ToastPlugin;
exports.default = _default;