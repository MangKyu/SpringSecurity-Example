"use strict";

exports.__esModule = true;
exports.default = exports.NavbarPlugin = void 0;

var _navbar = require("./navbar");

exports.BNavbar = _navbar.BNavbar;

var _navbarNav = require("./navbar-nav");

exports.BNavbarNav = _navbarNav.BNavbarNav;

var _navbarBrand = require("./navbar-brand");

exports.BNavbarBrand = _navbarBrand.BNavbarBrand;

var _navbarToggle = require("./navbar-toggle");

exports.BNavbarToggle = _navbarToggle.BNavbarToggle;

var _nav = require("../nav");

var _collapse = require("../collapse");

var _dropdown = require("../dropdown");

var _plugins = require("../../utils/plugins");

var NavbarPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  components: {
    BNavbar: _navbar.BNavbar,
    BNavbarNav: _navbarNav.BNavbarNav,
    BNavbarBrand: _navbarBrand.BNavbarBrand,
    BNavbarToggle: _navbarToggle.BNavbarToggle,
    BNavToggle: _navbarToggle.BNavbarToggle
  },
  plugins: {
    NavPlugin: _nav.NavPlugin,
    CollapsePlugin: _collapse.CollapsePlugin,
    DropdownPlugin: _dropdown.DropdownPlugin
  }
});
exports.NavbarPlugin = NavbarPlugin;
var _default = NavbarPlugin;
exports.default = _default;