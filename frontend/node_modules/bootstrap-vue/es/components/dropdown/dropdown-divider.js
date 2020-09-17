"use strict";

exports.__esModule = true;
exports.default = exports.BDropdownDivider = exports.props = void 0;

var _vue = _interopRequireDefault(require("../../utils/vue"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  tag: {
    type: String,
    default: 'hr'
  } // @vue/component

};
exports.props = props;

var BDropdownDivider =
/*#__PURE__*/
_vue.default.extend({
  name: 'BDropdownDivider',
  functional: true,
  inheritAttrs: false,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    return h('li', [h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'dropdown-divider',
      attrs: {
        role: 'separator',
        'aria-orientation': 'horizontal'
      },
      ref: 'divider'
    }))]);
  }
});

exports.BDropdownDivider = BDropdownDivider;
var _default = BDropdownDivider;
exports.default = _default;