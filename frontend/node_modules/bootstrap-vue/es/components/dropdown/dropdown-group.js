"use strict";

exports.__esModule = true;
exports.default = exports.BDropdownGroup = exports.props = void 0;

var _vue = _interopRequireDefault(require("../../utils/vue"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var _normalizeSlot = require("../../utils/normalize-slot");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  id: {
    type: String,
    default: null
  },
  header: {
    type: String,
    default: null
  },
  headerTag: {
    type: String,
    default: 'header'
  },
  headerVariant: {
    type: String,
    default: null
  },
  headerClasses: {
    type: [String, Array, Object],
    default: null
  },
  ariaDescribedby: {
    type: String,
    default: null
  } // @vue/component

};
exports.props = props;

var BDropdownGroup =
/*#__PURE__*/
_vue.default.extend({
  name: 'BDropdownGroup',
  functional: true,
  inheritAttrs: false,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    var $slots = slots();
    var $scopedSlots = scopedSlots || {};
    var header;
    var headerId = null;

    if ((0, _normalizeSlot.hasNormalizedSlot)('header', $scopedSlots, $slots) || props.header) {
      headerId = props.id ? "_bv_".concat(props.id, "_group_dd_header") : null;
      header = h(props.headerTag, {
        staticClass: 'dropdown-header',
        class: [props.headerClasses, _defineProperty({}, "text-".concat(props.variant), props.variant)],
        attrs: {
          id: headerId,
          role: 'heading'
        }
      }, (0, _normalizeSlot.normalizeSlot)('header', {}, $scopedSlots, $slots) || props.header);
    }

    var adb = [headerId, props.ariaDescribedBy].filter(Boolean).join(' ').trim();
    return h('li', [header || h(false), h('ul', (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'list-unstyled',
      attrs: {
        id: props.id || null,
        'aria-describedby': adb || null
      }
    }), (0, _normalizeSlot.normalizeSlot)('default', {}, $scopedSlots, $slots))]);
  }
});

exports.BDropdownGroup = BDropdownGroup;
var _default = BDropdownGroup;
exports.default = _default;