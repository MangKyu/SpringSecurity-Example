function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Vue from '../../utils/vue';
import { mergeData } from 'vue-functional-data-merge'; // @vue/component

export var BDropdownText =
/*#__PURE__*/
Vue.extend({
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
    return h('li', [h(props.tag, mergeData(data, {
      staticClass: 'b-dropdown-text',
      class: _defineProperty({}, "text-".concat(props.variant), props.variant),
      props: props,
      ref: 'text'
    }), children)]);
  }
});
export default BDropdownText;