"use strict";

exports.__esModule = true;
exports.default = exports.ModalPlugin = void 0;

var _modal = require("./modal");

exports.BModal = _modal.BModal;

var _modal2 = require("../../directives/modal/modal");

var _bvModal = require("./helpers/bv-modal");

var _plugins = require("../../utils/plugins");

var ModalPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BModal: _modal.BModal
  },
  directives: {
    VBModal: _modal2.VBModal
  },
  // $bvModal injection
  plugins: {
    BVModalPlugin: _bvModal.BVModalPlugin
  }
});
exports.ModalPlugin = ModalPlugin;
var _default = ModalPlugin;
exports.default = _default;