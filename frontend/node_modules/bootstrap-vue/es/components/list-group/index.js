"use strict";

exports.__esModule = true;
exports.default = exports.ListGroupPlugin = void 0;

var _listGroup = require("./list-group");

exports.BListGroup = _listGroup.BListGroup;

var _listGroupItem = require("./list-group-item");

exports.BListGroupItem = _listGroupItem.BListGroupItem;

var _plugins = require("../../utils/plugins");

var ListGroupPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BListGroup: _listGroup.BListGroup,
    BListGroupItem: _listGroupItem.BListGroupItem
  }
});
exports.ListGroupPlugin = ListGroupPlugin;
var _default = ListGroupPlugin;
exports.default = _default;