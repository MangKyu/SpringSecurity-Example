function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Vue from '../../utils/vue';
import { mergeData } from 'vue-functional-data-merge';
export var props = {
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
export var BDropdownHeader =
/*#__PURE__*/
Vue.extend({
  name: 'BDropdownHeader',
  functional: true,
  inheritAttrs: false,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('li', [h(props.tag, mergeData(data, {
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
export default BDropdownHeader;