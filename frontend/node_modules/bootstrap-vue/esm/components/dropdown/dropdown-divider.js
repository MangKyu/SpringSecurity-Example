import Vue from '../../utils/vue';
import { mergeData } from 'vue-functional-data-merge';
export var props = {
  tag: {
    type: String,
    default: 'hr'
  } // @vue/component

};
export var BDropdownDivider =
/*#__PURE__*/
Vue.extend({
  name: 'BDropdownDivider',
  functional: true,
  inheritAttrs: false,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    return h('li', [h(props.tag, mergeData(data, {
      staticClass: 'dropdown-divider',
      attrs: {
        role: 'separator',
        'aria-orientation': 'horizontal'
      },
      ref: 'divider'
    }))]);
  }
});
export default BDropdownDivider;