"use strict";

exports.__esModule = true;
exports.BTooltip = exports.BToaster = exports.BToast = exports.BTab = exports.BTabs = exports.BTableLite = exports.BTable = exports.BSpinner = exports.BProgressBar = exports.BProgress = exports.BPopover = exports.BPaginationNav = exports.BPagination = exports.BNavbarToggle = exports.BNavbarNav = exports.BNavbarBrand = exports.BNavbar = exports.BNavText = exports.BNavItemDropdown = exports.BNavItem = exports.BNavForm = exports.BNav = exports.BModal = exports.BMediaBody = exports.BMediaAside = exports.BMedia = exports.BListGroupItem = exports.BListGroup = exports.BLink = exports.BFormRow = exports.BCol = exports.BRow = exports.BContainer = exports.BJumbotron = exports.BInputGroupText = exports.BInputGroupPrepend = exports.BInputGroupAppend = exports.BInputGroupAddon = exports.BInputGroup = exports.BImgLazy = exports.BImg = exports.BFormTextarea = exports.BFormSelect = exports.BFormRadioGroup = exports.BFormRadio = exports.BFormInput = exports.BFormGroup = exports.BFormFile = exports.BFormCheckboxGroup = exports.BFormCheckbox = exports.BFormValidFeedback = exports.BFormInvalidFeedback = exports.BFormText = exports.BFormDatalist = exports.BForm = exports.BEmbed = exports.BDropdownText = exports.BDropdownHeader = exports.BDropdownGroup = exports.BDropdownForm = exports.BDropdownDivider = exports.BDropdownItemButton = exports.BDropdownItem = exports.BDropdown = exports.BCollapse = exports.BCarouselSlide = exports.BCarousel = exports.BCardTitle = exports.BCardText = exports.BCardSubTitle = exports.BCardImgLazy = exports.BCardImg = exports.BCardHeader = exports.BCardGroup = exports.BCardFooter = exports.BCardBody = exports.BCard = exports.BButtonToolbar = exports.BButtonGroup = exports.BButtonClose = exports.BButton = exports.BBreadcrumbItem = exports.BBreadcrumb = exports.BBadge = exports.BAlert = exports.BVToastPlugin = exports.BVModalPlugin = exports.componentsPlugin = void 0;

var _plugins = require("../utils/plugins");

var _alert = require("./alert");

exports.AlertPlugin = _alert.AlertPlugin;

var _badge = require("./badge");

exports.BadgePlugin = _badge.BadgePlugin;

var _breadcrumb = require("./breadcrumb");

exports.BreadcrumbPlugin = _breadcrumb.BreadcrumbPlugin;

var _button = require("./button");

exports.ButtonPlugin = _button.ButtonPlugin;

var _buttonGroup = require("./button-group");

exports.ButtonGroupPlugin = _buttonGroup.ButtonGroupPlugin;

var _buttonToolbar = require("./button-toolbar");

exports.ButtonToolbarPlugin = _buttonToolbar.ButtonToolbarPlugin;

var _card = require("./card");

exports.CardPlugin = _card.CardPlugin;

var _carousel = require("./carousel");

exports.CarouselPlugin = _carousel.CarouselPlugin;

var _collapse = require("./collapse");

exports.CollapsePlugin = _collapse.CollapsePlugin;

var _dropdown = require("./dropdown");

exports.DropdownPlugin = _dropdown.DropdownPlugin;

var _embed = require("./embed");

exports.EmbedPlugin = _embed.EmbedPlugin;

var _form = require("./form");

exports.FormPlugin = _form.FormPlugin;

var _formGroup = require("./form-group");

exports.FormGroupPlugin = _formGroup.FormGroupPlugin;

var _formCheckbox = require("./form-checkbox");

exports.FormCheckboxPlugin = _formCheckbox.FormCheckboxPlugin;

var _formRadio = require("./form-radio");

exports.FormRadioPlugin = _formRadio.FormRadioPlugin;

var _formInput = require("./form-input");

exports.FormInputPlugin = _formInput.FormInputPlugin;

var _formTextarea = require("./form-textarea");

exports.FormTextareaPlugin = _formTextarea.FormTextareaPlugin;

var _formFile = require("./form-file");

exports.FormFilePlugin = _formFile.FormFilePlugin;

var _formSelect = require("./form-select");

exports.FormSelectPlugin = _formSelect.FormSelectPlugin;

var _image = require("./image");

exports.ImagePlugin = _image.ImagePlugin;

var _inputGroup = require("./input-group");

exports.InputGroupPlugin = _inputGroup.InputGroupPlugin;

var _jumbotron = require("./jumbotron");

exports.JumbotronPlugin = _jumbotron.JumbotronPlugin;

var _layout = require("./layout");

exports.LayoutPlugin = _layout.LayoutPlugin;

var _link = require("./link");

exports.LinkPlugin = _link.LinkPlugin;

var _listGroup = require("./list-group");

exports.ListGroupPlugin = _listGroup.ListGroupPlugin;

var _media = require("./media");

exports.MediaPlugin = _media.MediaPlugin;

var _modal = require("./modal");

exports.ModalPlugin = _modal.ModalPlugin;

var _nav = require("./nav");

exports.NavPlugin = _nav.NavPlugin;

var _navbar = require("./navbar");

exports.NavbarPlugin = _navbar.NavbarPlugin;

var _pagination = require("./pagination");

exports.PaginationPlugin = _pagination.PaginationPlugin;

var _paginationNav = require("./pagination-nav");

exports.PaginationNavPlugin = _paginationNav.PaginationNavPlugin;

var _popover = require("./popover");

exports.PopoverPlugin = _popover.PopoverPlugin;

var _progress = require("./progress");

exports.ProgressPlugin = _progress.ProgressPlugin;

var _spinner = require("./spinner");

exports.SpinnerPlugin = _spinner.SpinnerPlugin;

var _table = require("./table");

exports.TablePlugin = _table.TablePlugin;

var _tabs = require("./tabs");

exports.TabsPlugin = _tabs.TabsPlugin;

var _toast = require("./toast");

exports.ToastPlugin = _toast.ToastPlugin;

var _tooltip = require("./tooltip");

exports.TooltipPlugin = _tooltip.TooltipPlugin;

var _bvModal = require("./modal/helpers/bv-modal");

exports.BVModalPlugin = _bvModal.BVModalPlugin;

var _bvToast = require("./toast/helpers/bv-toast");

exports.BVToastPlugin = _bvToast.BVToastPlugin;

var _alert2 = require("./alert/alert");

exports.BAlert = _alert2.BAlert;

var _badge2 = require("./badge/badge");

exports.BBadge = _badge2.BBadge;

var _breadcrumb2 = require("./breadcrumb/breadcrumb");

exports.BBreadcrumb = _breadcrumb2.BBreadcrumb;

var _breadcrumbItem = require("./breadcrumb/breadcrumb-item");

exports.BBreadcrumbItem = _breadcrumbItem.BBreadcrumbItem;

var _button2 = require("./button/button");

exports.BButton = _button2.BButton;

var _buttonClose = require("./button/button-close");

exports.BButtonClose = _buttonClose.BButtonClose;

var _buttonGroup2 = require("./button-group/button-group");

exports.BButtonGroup = _buttonGroup2.BButtonGroup;

var _buttonToolbar2 = require("./button-toolbar/button-toolbar");

exports.BButtonToolbar = _buttonToolbar2.BButtonToolbar;

var _card2 = require("./card/card");

exports.BCard = _card2.BCard;

var _cardBody = require("./card/card-body");

exports.BCardBody = _cardBody.BCardBody;

var _cardFooter = require("./card/card-footer");

exports.BCardFooter = _cardFooter.BCardFooter;

var _cardGroup = require("./card/card-group");

exports.BCardGroup = _cardGroup.BCardGroup;

var _cardHeader = require("./card/card-header");

exports.BCardHeader = _cardHeader.BCardHeader;

var _cardImg = require("./card/card-img");

exports.BCardImg = _cardImg.BCardImg;

var _cardImgLazy = require("./card/card-img-lazy");

exports.BCardImgLazy = _cardImgLazy.BCardImgLazy;

var _cardSubTitle = require("./card/card-sub-title");

exports.BCardSubTitle = _cardSubTitle.BCardSubTitle;

var _cardText = require("./card/card-text");

exports.BCardText = _cardText.BCardText;

var _cardTitle = require("./card/card-title");

exports.BCardTitle = _cardTitle.BCardTitle;

var _carousel2 = require("./carousel/carousel");

exports.BCarousel = _carousel2.BCarousel;

var _carouselSlide = require("./carousel/carousel-slide");

exports.BCarouselSlide = _carouselSlide.BCarouselSlide;

var _collapse2 = require("./collapse/collapse");

exports.BCollapse = _collapse2.BCollapse;

var _dropdown2 = require("./dropdown/dropdown");

exports.BDropdown = _dropdown2.BDropdown;

var _dropdownItem = require("./dropdown/dropdown-item");

exports.BDropdownItem = _dropdownItem.BDropdownItem;

var _dropdownItemButton = require("./dropdown/dropdown-item-button");

exports.BDropdownItemButton = _dropdownItemButton.BDropdownItemButton;

var _dropdownDivider = require("./dropdown/dropdown-divider");

exports.BDropdownDivider = _dropdownDivider.BDropdownDivider;

var _dropdownForm = require("./dropdown/dropdown-form");

exports.BDropdownForm = _dropdownForm.BDropdownForm;

var _dropdownGroup = require("./dropdown/dropdown-group");

exports.BDropdownGroup = _dropdownGroup.BDropdownGroup;

var _dropdownHeader = require("./dropdown/dropdown-header");

exports.BDropdownHeader = _dropdownHeader.BDropdownHeader;

var _dropdownText = require("./dropdown/dropdown-text");

exports.BDropdownText = _dropdownText.BDropdownText;

var _embed2 = require("./embed/embed");

exports.BEmbed = _embed2.BEmbed;

var _form2 = require("./form/form");

exports.BForm = _form2.BForm;

var _formDatalist = require("./form/form-datalist");

exports.BFormDatalist = _formDatalist.BFormDatalist;

var _formText = require("./form/form-text");

exports.BFormText = _formText.BFormText;

var _formInvalidFeedback = require("./form/form-invalid-feedback");

exports.BFormInvalidFeedback = _formInvalidFeedback.BFormInvalidFeedback;

var _formValidFeedback = require("./form/form-valid-feedback");

exports.BFormValidFeedback = _formValidFeedback.BFormValidFeedback;

var _formCheckbox2 = require("./form-checkbox/form-checkbox");

exports.BFormCheckbox = _formCheckbox2.BFormCheckbox;

var _formCheckboxGroup = require("./form-checkbox/form-checkbox-group");

exports.BFormCheckboxGroup = _formCheckboxGroup.BFormCheckboxGroup;

var _formFile2 = require("./form-file/form-file");

exports.BFormFile = _formFile2.BFormFile;

var _formGroup2 = require("./form-group/form-group");

exports.BFormGroup = _formGroup2.BFormGroup;

var _formInput2 = require("./form-input/form-input");

exports.BFormInput = _formInput2.BFormInput;

var _formRadio2 = require("./form-radio/form-radio");

exports.BFormRadio = _formRadio2.BFormRadio;

var _formRadioGroup = require("./form-radio/form-radio-group");

exports.BFormRadioGroup = _formRadioGroup.BFormRadioGroup;

var _formSelect2 = require("./form-select/form-select");

exports.BFormSelect = _formSelect2.BFormSelect;

var _formTextarea2 = require("./form-textarea/form-textarea");

exports.BFormTextarea = _formTextarea2.BFormTextarea;

var _img = require("./image/img");

exports.BImg = _img.BImg;

var _imgLazy = require("./image/img-lazy");

exports.BImgLazy = _imgLazy.BImgLazy;

var _inputGroup2 = require("./input-group/input-group");

exports.BInputGroup = _inputGroup2.BInputGroup;

var _inputGroupAddon = require("./input-group/input-group-addon");

exports.BInputGroupAddon = _inputGroupAddon.BInputGroupAddon;

var _inputGroupAppend = require("./input-group/input-group-append");

exports.BInputGroupAppend = _inputGroupAppend.BInputGroupAppend;

var _inputGroupPrepend = require("./input-group/input-group-prepend");

exports.BInputGroupPrepend = _inputGroupPrepend.BInputGroupPrepend;

var _inputGroupText = require("./input-group/input-group-text");

exports.BInputGroupText = _inputGroupText.BInputGroupText;

var _jumbotron2 = require("./jumbotron/jumbotron");

exports.BJumbotron = _jumbotron2.BJumbotron;

var _container = require("./layout/container");

exports.BContainer = _container.BContainer;

var _row = require("./layout/row");

exports.BRow = _row.BRow;

var _col = require("./layout/col");

exports.BCol = _col.BCol;

var _formRow = require("./layout/form-row");

exports.BFormRow = _formRow.BFormRow;

var _link2 = require("./link/link");

exports.BLink = _link2.BLink;

var _listGroup2 = require("./list-group/list-group");

exports.BListGroup = _listGroup2.BListGroup;

var _listGroupItem = require("./list-group/list-group-item");

exports.BListGroupItem = _listGroupItem.BListGroupItem;

var _media2 = require("./media/media");

exports.BMedia = _media2.BMedia;

var _mediaAside = require("./media/media-aside");

exports.BMediaAside = _mediaAside.BMediaAside;

var _mediaBody = require("./media/media-body");

exports.BMediaBody = _mediaBody.BMediaBody;

var _modal2 = require("./modal/modal");

exports.BModal = _modal2.BModal;

var _nav2 = require("./nav/nav");

exports.BNav = _nav2.BNav;

var _navForm = require("./nav/nav-form");

exports.BNavForm = _navForm.BNavForm;

var _navItem = require("./nav/nav-item");

exports.BNavItem = _navItem.BNavItem;

var _navItemDropdown = require("./nav/nav-item-dropdown");

exports.BNavItemDropdown = _navItemDropdown.BNavItemDropdown;

var _navText = require("./nav/nav-text");

exports.BNavText = _navText.BNavText;

var _navbar2 = require("./navbar/navbar");

exports.BNavbar = _navbar2.BNavbar;

var _navbarBrand = require("./navbar/navbar-brand");

exports.BNavbarBrand = _navbarBrand.BNavbarBrand;

var _navbarNav = require("./navbar/navbar-nav");

exports.BNavbarNav = _navbarNav.BNavbarNav;

var _navbarToggle = require("./navbar/navbar-toggle");

exports.BNavbarToggle = _navbarToggle.BNavbarToggle;

var _pagination2 = require("./pagination/pagination");

exports.BPagination = _pagination2.BPagination;

var _paginationNav2 = require("./pagination-nav/pagination-nav");

exports.BPaginationNav = _paginationNav2.BPaginationNav;

var _popover2 = require("./popover/popover");

exports.BPopover = _popover2.BPopover;

var _progress2 = require("./progress/progress");

exports.BProgress = _progress2.BProgress;

var _progressBar = require("./progress/progress-bar");

exports.BProgressBar = _progressBar.BProgressBar;

var _spinner2 = require("./spinner/spinner");

exports.BSpinner = _spinner2.BSpinner;

var _table2 = require("./table/table");

exports.BTable = _table2.BTable;

var _tableLite = require("./table/table-lite");

exports.BTableLite = _tableLite.BTableLite;

var _tabs2 = require("./tabs/tabs");

exports.BTabs = _tabs2.BTabs;

var _tab = require("./tabs/tab");

exports.BTab = _tab.BTab;

var _toast2 = require("./toast/toast");

exports.BToast = _toast2.BToast;

var _toaster = require("./toast/toaster");

exports.BToaster = _toaster.BToaster;

var _tooltip2 = require("./tooltip/tooltip");

exports.BTooltip = _tooltip2.BTooltip;
// Index file used for the main builds, which does not include legacy plugin names
// Once es/ buld is removed, then this file will be renamed to index.js
// Component group plugins
// Main plugin to install all component group plugins
var componentsPlugin =
/*#__PURE__*/
(0, _plugins.pluginFactory)({
  plugins: {
    AlertPlugin: _alert.AlertPlugin,
    BadgePlugin: _badge.BadgePlugin,
    BreadcrumbPlugin: _breadcrumb.BreadcrumbPlugin,
    ButtonPlugin: _button.ButtonPlugin,
    ButtonGroupPlugin: _buttonGroup.ButtonGroupPlugin,
    ButtonToolbarPlugin: _buttonToolbar.ButtonToolbarPlugin,
    CardPlugin: _card.CardPlugin,
    CarouselPlugin: _carousel.CarouselPlugin,
    CollapsePlugin: _collapse.CollapsePlugin,
    DropdownPlugin: _dropdown.DropdownPlugin,
    EmbedPlugin: _embed.EmbedPlugin,
    FormPlugin: _form.FormPlugin,
    FormGroupPlugin: _formGroup.FormGroupPlugin,
    FormCheckboxPlugin: _formCheckbox.FormCheckboxPlugin,
    FormRadioPlugin: _formRadio.FormRadioPlugin,
    FormInputPlugin: _formInput.FormInputPlugin,
    FormTextareaPlugin: _formTextarea.FormTextareaPlugin,
    FormFilePlugin: _formFile.FormFilePlugin,
    FormSelectPlugin: _formSelect.FormSelectPlugin,
    ImagePlugin: _image.ImagePlugin,
    InputGroupPlugin: _inputGroup.InputGroupPlugin,
    JumbotronPlugin: _jumbotron.JumbotronPlugin,
    LayoutPlugin: _layout.LayoutPlugin,
    LinkPlugin: _link.LinkPlugin,
    ListGroupPlugin: _listGroup.ListGroupPlugin,
    MediaPlugin: _media.MediaPlugin,
    ModalPlugin: _modal.ModalPlugin,
    NavPlugin: _nav.NavPlugin,
    NavbarPlugin: _navbar.NavbarPlugin,
    PaginationPlugin: _pagination.PaginationPlugin,
    PaginationNavPlugin: _paginationNav.PaginationNavPlugin,
    PopoverPlugin: _popover.PopoverPlugin,
    ProgressPlugin: _progress.ProgressPlugin,
    SpinnerPlugin: _spinner.SpinnerPlugin,
    TablePlugin: _table.TablePlugin,
    TabsPlugin: _tabs.TabsPlugin,
    ToastPlugin: _toast.ToastPlugin,
    TooltipPlugin: _tooltip.TooltipPlugin
  }
}); // Export named injection plugins
// These two plugins are not directly included in the above installer, as they are
// installed via the ModalPlugin and ToastPlugin respectively.

exports.componentsPlugin = componentsPlugin;