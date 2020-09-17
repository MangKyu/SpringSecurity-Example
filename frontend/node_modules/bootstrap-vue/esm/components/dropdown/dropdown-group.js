function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import Vue from '../../utils/vue';
import { mergeData } from 'vue-functional-data-merge';
import { hasNormalizedSlot, normalizeSlot } from '../../utils/normalize-slot';
export var props = {
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
export var BDropdownGroup =
/*#__PURE__*/
Vue.extend({
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

    if (hasNormalizedSlot('header', $scopedSlots, $slots) || props.header) {
      headerId = props.id ? "_bv_".concat(props.id, "_group_dd_header") : null;
      header = h(props.headerTag, {
        staticClass: 'dropdown-header',
        class: [props.headerClasses, _defineProperty({}, "text-".concat(props.variant), props.variant)],
        attrs: {
          id: headerId,
          role: 'heading'
        }
      }, normalizeSlot('header', {}, $scopedSlots, $slots) || props.header);
    }

    var adb = [headerId, props.ariaDescribedBy].filter(Boolean).join(' ').trim();
    return h('li', [header || h(false), h('ul', mergeData(data, {
      staticClass: 'list-unstyled',
      attrs: {
        id: props.id || null,
        'aria-describedby': adb || null
      }
    }), normalizeSlot('default', {}, $scopedSlots, $slots))]);
  }
});
export default BDropdownGroup;