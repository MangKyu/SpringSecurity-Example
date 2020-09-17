"use strict";

exports.__esModule = true;
exports.default = exports.BDropdownHeader = exports.props = void 0;

var _vue = _interopRequireDefault(require("../../utils/vue"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  id: {
    type: String,
    default: null
  },
  tag: {
    type: String,
    default: 'header'
  },
  variant: {
    type: String,
    default: null
  } // @vue/component

};
exports.props = props;

var BDropdownHeader =
/*#__PURE__*/
_vue.default.extend({
  name: 'BDropdownHeader',
  functional: true,
  inheritAttrs: false,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('li', [h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'dropdown-header',
      class: _defineProperty({}, "text-".concat(props.variant), props.variant),
      attrs: {
        id: props.id || null,
        role: 'heading'
      },
      ref: 'header'
    }), children)]);
  }
});

exports.BDropdownHeader = BDropdownHeader;
var _default = BDropdownHeader;
exports.default = _default;