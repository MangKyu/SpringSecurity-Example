"use strict";

exports.__esModule = true;
exports.default = exports.BDropdownText = void 0;

var _vue = _interopRequireDefault(require("../../utils/vue"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @vue/component
var BDropdownText =
/*#__PURE__*/
_vue.default.extend({
  name: 'BDropdownText',
  functional: true,
  inheritAttrs: false,
  props: {
    tag: {
      type: String,
      default: 'p'
    },
    variant: {
      type: String,
      default: null
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('li', [h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'b-dropdown-text',
      class: _defineProperty({}, "text-".concat(props.variant), props.variant),
      props: props,
      ref: 'text'
    }), children)]);
  }
});

exports.BDropdownText = BDropdownText;
var _default = BDropdownText;
exports.default = _default;