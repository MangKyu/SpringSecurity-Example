"use strict";

exports.__esModule = true;
exports.default = exports.DropdownPlugin = void 0;

var _dropdown = require("./dropdown");

exports.BDropdown = _dropdown.BDropdown;

var _dropdownItem = require("./dropdown-item");

exports.BDropdownItem = _dropdownItem.BDropdownItem;

var _dropdownItemButton = require("./dropdown-item-button");

exports.BDropdownItemButton = _dropdownItemButton.BDropdownItemButton;

var _dropdownHeader = require("./dropdown-header");

exports.BDropdownHeader = _dropdownHeader.BDropdownHeader;

var _dropdownDivider = require("./dropdown-divider");

exports.BDropdownDivider = _dropdownDivider.BDropdownDivider;

var _dropdownForm = require("./dropdown-form");

exports.BDropdownForm = _dropdownForm.BDropdownForm;

var _dropdownText = require("./dropdown-text");

exports.BDropdownText = _dropdownText.BDropdownText;

var _dropdownGroup = require("./dropdown-group");

exports.BDropdownGroup = _dropdownGroup.BDropdownGroup;

var _plugins = require("../../utils/plugins");

var DropdownPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BDropdown: _dropdown.BDropdown,
    BDd: _dropdown.BDropdown,
    BDropdownItem: _dropdownItem.BDropdownItem,
    BDdItem: _dropdownItem.BDropdownItem,
    BDropdownItemButton: _dropdownItemButton.BDropdownItemButton,
    BDropdownItemBtn: _dropdownItemButton.BDropdownItemButton,
    BDdItemButton: _dropdownItemButton.BDropdownItemButton,
    BDdItemBtn: _dropdownItemButton.BDropdownItemButton,
    BDropdownHeader: _dropdownHeader.BDropdownHeader,
    BDdHeader: _dropdownHeader.BDropdownHeader,
    BDropdownDivider: _dropdownDivider.BDropdownDivider,
    BDdDivider: _dropdownDivider.BDropdownDivider,
    BDropdownForm: _dropdownForm.BDropdownForm,
    BDdForm: _dropdownForm.BDropdownForm,
    BDropdownText: _dropdownText.BDropdownText,
    BDdText: _dropdownText.BDropdownText,
    BDropdownGroup: _dropdownGroup.BDropdownGroup,
    BDdGroup: _dropdownGroup.BDropdownGroup
  }
});
exports.DropdownPlugin = DropdownPlugin;
var _default = DropdownPlugin;
exports.default = _default;