"use strict";

exports.__esModule = true;
exports.default = exports.NavPlugin = void 0;

var _nav = require("./nav");

exports.BNav = _nav.BNav;

var _navItem = require("./nav-item");

exports.BNavItem = _navItem.BNavItem;

var _navText = require("./nav-text");

exports.BNavText = _navText.BNavText;

var _navForm = require("./nav-form");

exports.BNavForm = _navForm.BNavForm;

var _navItemDropdown = require("./nav-item-dropdown");

exports.BNavItemDropdown = _navItemDropdown.BNavItemDropdown;

var _dropdown = require("../dropdown");

var _plugins = require("../../utils/plugins");

var NavPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BNav: _nav.BNav,
    BNavItem: _navItem.BNavItem,
    BNavText: _navText.BNavText,
    BNavForm: _navForm.BNavForm,
    BNavItemDropdown: _navItemDropdown.BNavItemDropdown,
    BNavItemDd: _navItemDropdown.BNavItemDropdown,
    BNavDropdown: _navItemDropdown.BNavItemDropdown,
    BNavDd: _navItemDropdown.BNavItemDropdown
  },
  plugins: {
    DropdownPlugin: _dropdown.DropdownPlugin
  }
});
exports.NavPlugin = NavPlugin;
var _default = NavPlugin;
exports.default = _default;