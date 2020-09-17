"use strict";

exports.__esModule = true;
exports.default = exports.InputGroupPlugin = void 0;

var _inputGroup = require("./input-group");

exports.BInputGroup = _inputGroup.BInputGroup;

var _inputGroupAddon = require("./input-group-addon");

exports.BInputGroupAddon = _inputGroupAddon.BInputGroupAddon;

var _inputGroupPrepend = require("./input-group-prepend");

exports.BInputGroupPrepend = _inputGroupPrepend.BInputGroupPrepend;

var _inputGroupAppend = require("./input-group-append");

exports.BInputGroupAppend = _inputGroupAppend.BInputGroupAppend;

var _inputGroupText = require("./input-group-text");

exports.BInputGroupText = _inputGroupText.BInputGroupText;

var _plugins = require("../../utils/plugins");

var InputGroupPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BInputGroup: _inputGroup.BInputGroup,
    BInputGroupAddon: _inputGroupAddon.BInputGroupAddon,
    BInputGroupPrepend: _inputGroupPrepend.BInputGroupPrepend,
    BInputGroupAppend: _inputGroupAppend.BInputGroupAppend,
    BInputGroupText: _inputGroupText.BInputGroupText
  }
});
exports.InputGroupPlugin = InputGroupPlugin;
var _default = InputGroupPlugin;
exports.default = _default;