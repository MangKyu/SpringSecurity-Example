"use strict";

exports.__esModule = true;
exports.default = exports.BSpinner = void 0;

var _vue = _interopRequireDefault(require("../../utils/vue"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var _config = require("../../utils/config");

var _normalizeSlot = require("../../utils/normalize-slot");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'BSpinner'; // @vue/component

var BSpinner =
/*#__PURE__*/
_vue.default.extend({
  name: NAME,
  functional: true,
  props: {
    type: {
      type: String,
      default: 'border' // SCSS currently supports 'border' or 'grow'

    },
    label: {
      type: String,
      default: null
    },
    variant: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'variant');
      }
    },
    small: {
      type: Boolean,
      default: false
    },
    role: {
      type: String,
      default: 'status'
    },
    tag: {
      type: String,
      default: 'span'
    }
  },
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    var $slots = slots();
    var $scopedSlots = scopedSlots || {};
    var label = (0, _normalizeSlot.normalizeSlot)('label', {}, $scopedSlots, $slots) || props.label;

    if (label) {
      label = h('span', {
        staticClass: 'sr-only'
      }, label);
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      attrs: {
        role: label ? props.role || 'status' : null,
        'aria-hidden': label ? null : 'true'
      },
      class: (_class = {}, _defineProperty(_class, "spinner-".concat(props.type), Boolean(props.type)), _defineProperty(_class, "spinner-".concat(props.type, "-sm"), props.small), _defineProperty(_class, "text-".concat(props.variant), Boolean(props.variant)), _class)
    }), [label || h(false)]);
  }
});

exports.BSpinner = BSpinner;
var _default2 = BSpinner;
exports.default = _default2;