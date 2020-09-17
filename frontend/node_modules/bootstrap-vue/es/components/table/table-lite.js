"use strict";

exports.__esModule = true;
exports.default = exports.BTableLite = void 0;

var _vue = _interopRequireDefault(require("../../utils/vue"));

var _id = _interopRequireDefault(require("../../mixins/id"));

var _normalizeSlot = _interopRequireDefault(require("../../mixins/normalize-slot"));

var _mixinItems = _interopRequireDefault(require("./helpers/mixin-items"));

var _mixinCaption = _interopRequireDefault(require("./helpers/mixin-caption"));

var _mixinColgroup = _interopRequireDefault(require("./helpers/mixin-colgroup"));

var _mixinThead = _interopRequireDefault(require("./helpers/mixin-thead"));

var _mixinTfoot = _interopRequireDefault(require("./helpers/mixin-tfoot"));

var _mixinTbody = _interopRequireDefault(require("./helpers/mixin-tbody"));

var _mixinTableRenderer = _interopRequireDefault(require("./helpers/mixin-table-renderer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Mixins
// Table helper Mixins
// Main table renderer mixin
// b-table-lite component definition
// @vue/component
var BTableLite =
/*#__PURE__*/
_vue.default.extend({
  name: 'BTableLite',
  // Order of mixins is important!
  // They are merged from first to last, followed by this component.
  mixins: [// Required mixins
  _id.default, _normalizeSlot.default, _mixinItems.default, _mixinTableRenderer.default, _mixinThead.default, _mixinTfoot.default, _mixinTbody.default, // Features Mixins
  // These are pretty lightweight, and are useful for plain tables
  _mixinCaption.default, _mixinColgroup.default] // render function provided by table-renderer mixin

});

exports.BTableLite = BTableLite;
var _default = BTableLite;
exports.default = _default;