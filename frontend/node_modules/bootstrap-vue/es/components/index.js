"use strict";

exports.__esModule = true;
var _exportNames = {
  Alert: true,
  Badge: true,
  Breadcrumb: true,
  Button: true,
  ButtonGroup: true,
  ButtonToolbar: true,
  Card: true,
  Carousel: true,
  Collapse: true,
  Dropdown: true,
  Embed: true,
  Form: true,
  FormGroup: true,
  FormCheckbox: true,
  FormRadio: true,
  FormInput: true,
  FormTextarea: true,
  FormFile: true,
  FormSelect: true,
  Image: true,
  InputGroup: true,
  Jumbotron: true,
  Layout: true,
  Link: true,
  ListGroup: true,
  Media: true,
  Modal: true,
  Nav: true,
  Navbar: true,
  Pagination: true,
  PaginationNav: true,
  Popover: true,
  Progress: true,
  Spinner: true,
  Table: true,
  Tabs: true,
  Toast: true,
  Tooltip: true
};
exports.default = exports.Tooltip = exports.Toast = exports.Tabs = exports.Table = exports.Spinner = exports.Progress = exports.Popover = exports.PaginationNav = exports.Pagination = exports.Navbar = exports.Nav = exports.Modal = exports.Media = exports.ListGroup = exports.Link = exports.Layout = exports.Jumbotron = exports.InputGroup = exports.Image = exports.FormSelect = exports.FormFile = exports.FormTextarea = exports.FormInput = exports.FormRadio = exports.FormCheckbox = exports.FormGroup = exports.Form = exports.Embed = exports.Dropdown = exports.Collapse = exports.Carousel = exports.Card = exports.ButtonToolbar = exports.ButtonGroup = exports.Button = exports.Breadcrumb = exports.Badge = exports.Alert = void 0;

var _index = require("./index.esm");

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  exports[key] = _index[key];
});

var _alert = require("./alert");

exports.Alert = _alert.AlertPlugin;

var _badge = require("./badge");

exports.Badge = _badge.BadgePlugin;

var _breadcrumb = require("./breadcrumb");

exports.Breadcrumb = _breadcrumb.BreadcrumbPlugin;

var _button = require("./button");

exports.Button = _button.ButtonPlugin;

var _buttonGroup = require("./button-group");

exports.ButtonGroup = _buttonGroup.ButtonGroupPlugin;

var _buttonToolbar = require("./button-toolbar");

exports.ButtonToolbar = _buttonToolbar.ButtonToolbarPlugin;

var _card = require("./card");

exports.Card = _card.CardPlugin;

var _carousel = require("./carousel");

exports.Carousel = _carousel.CarouselPlugin;

var _collapse = require("./collapse");

exports.Collapse = _collapse.CollapsePlugin;

var _dropdown = require("./dropdown");

exports.Dropdown = _dropdown.DropdownPlugin;

var _embed = require("./embed");

exports.Embed = _embed.EmbedPlugin;

var _form = require("./form");

exports.Form = _form.FormPlugin;

var _formGroup = require("./form-group");

exports.FormGroup = _formGroup.FormGroupPlugin;

var _formCheckbox = require("./form-checkbox");

exports.FormCheckbox = _formCheckbox.FormCheckboxPlugin;

var _formRadio = require("./form-radio");

exports.FormRadio = _formRadio.FormRadioPlugin;

var _formInput = require("./form-input");

exports.FormInput = _formInput.FormInputPlugin;

var _formTextarea = require("./form-textarea");

exports.FormTextarea = _formTextarea.FormTextareaPlugin;

var _formFile = require("./form-file");

exports.FormFile = _formFile.FormFilePlugin;

var _formSelect = require("./form-select");

exports.FormSelect = _formSelect.FormSelectPlugin;

var _image = require("./image");

exports.Image = _image.ImagePlugin;

var _inputGroup = require("./input-group");

exports.InputGroup = _inputGroup.InputGroupPlugin;

var _jumbotron = require("./jumbotron");

exports.Jumbotron = _jumbotron.JumbotronPlugin;

var _layout = require("./layout");

exports.Layout = _layout.LayoutPlugin;

var _link = require("./link");

exports.Link = _link.LinkPlugin;

var _listGroup = require("./list-group");

exports.ListGroup = _listGroup.ListGroupPlugin;

var _media = require("./media");

exports.Media = _media.MediaPlugin;

var _modal = require("./modal");

exports.Modal = _modal.ModalPlugin;

var _nav = require("./nav");

exports.Nav = _nav.NavPlugin;

var _navbar = require("./navbar");

exports.Navbar = _navbar.NavbarPlugin;

var _pagination = require("./pagination");

exports.Pagination = _pagination.PaginationPlugin;

var _paginationNav = require("./pagination-nav");

exports.PaginationNav = _paginationNav.PaginationNavPlugin;

var _popover = require("./popover");

exports.Popover = _popover.PopoverPlugin;

var _progress = require("./progress");

exports.Progress = _progress.ProgressPlugin;

var _spinner = require("./spinner");

exports.Spinner = _spinner.SpinnerPlugin;

var _table = require("./table");

exports.Table = _table.TablePlugin;

var _tabs = require("./tabs");

exports.Tabs = _tabs.TabsPlugin;

var _toast = require("./toast");

exports.Toast = _toast.ToastPlugin;

var _tooltip = require("./tooltip");

exports.Tooltip = _tooltip.TooltipPlugin;
// Legacy index file supporting legacy plugin names and default export.
// This file is only here from transpilation purposes for `es/` build.
// src/index imports /src/components/index.esm so that we don't
// have top-level duplicate plugin names.
//
// TODO:
// Once `es/` build is removed, we will rename index.esm.js to index.js
// and update /src/index.js to import the new index.js
// Import the main components plugin
// Export all component group plugins and components as named exports
// Export all legacy named component group plugins as named exports
// To be removed in stable release
// Export default as a plugin that installs all the component group plugins
var _default = _index.componentsPlugin;
exports.default = _default;