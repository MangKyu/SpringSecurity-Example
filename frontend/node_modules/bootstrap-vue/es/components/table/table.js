"use strict";

exports.__esModule = true;
exports.default = exports.BTable = void 0;

var _vue = _interopRequireDefault(require("../../utils/vue"));

var _id = _interopRequireDefault(require("../../mixins/id"));

var _normalizeSlot = _interopRequireDefault(require("../../mixins/normalize-slot"));

var _mixinItems = _interopRequireDefault(require("./helpers/mixin-items"));

var _mixinFiltering = _interopRequireDefault(require("./helpers/mixin-filtering"));

var _mixinSorting = _interopRequireDefault(require("./helpers/mixin-sorting"));

var _mixinPagination = _interopRequireDefault(require("./helpers/mixin-pagination"));

var _mixinCaption = _interopRequireDefault(require("./helpers/mixin-caption"));

var _mixinColgroup = _interopRequireDefault(require("./helpers/mixin-colgroup"));

var _mixinThead = _interopRequireDefault(require("./helpers/mixin-thead"));

var _mixinTfoot = _interopRequireDefault(require("./helpers/mixin-tfoot"));

var _mixinTbody = _interopRequireDefault(require("./helpers/mixin-tbody"));

var _mixinEmpty = _interopRequireDefault(require("./helpers//mixin-empty"));

var _mixinTopRow = _interopRequireDefault(require("./helpers//mixin-top-row"));

var _mixinBottomRow = _interopRequireDefault(require("./helpers//mixin-bottom-row"));

var _mixinBusy = _interopRequireDefault(require("./helpers/mixin-busy"));

var _mixinSelectable = _interopRequireDefault(require("./helpers/mixin-selectable"));

var _mixinProvider = _interopRequireDefault(require("./helpers/mixin-provider"));

var _mixinTableRenderer = _interopRequireDefault(require("./helpers/mixin-table-renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Mixins
// Table helper Mixins
// Main table renderer mixin
// b-table component definition
// @vue/component
var BTable =
/*#__PURE__*/
_vue.default.extend({
  name: 'BTable',
  // Order of mixins is important!
  // They are merged from first to last, followed by this component.
  mixins: [// Required Mixins
  _id.default, _normalizeSlot.default, _mixinItems.default, _mixinTableRenderer.default, _mixinThead.default, _mixinTfoot.default, _mixinTbody.default, // Features Mixins
  _mixinFiltering.default, _mixinSorting.default, _mixinPagination.default, _mixinCaption.default, _mixinColgroup.default, _mixinSelectable.default, _mixinEmpty.default, _mixinTopRow.default, _mixinBottomRow.default, _mixinBusy.default, _mixinProvider.default] // render function provided by table-renderer mixin

});

exports.BTable = BTable;
var _default = BTable;
exports.default = _default;