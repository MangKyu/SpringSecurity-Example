import { hasNormalizedSlot as _hasNormalizedSlot, normalizeSlot as _normalizeSlot } from '../utils/normalize-slot';
import { concat } from '../utils/array';
export default {
  methods: {
    hasNormalizedSlot: function hasNormalizedSlot(name) {
      // Returns true if the either a $scopedSlot or $slot exists with the specified name
      return _hasNormalizedSlot(name, this.$scopedSlots, this.$slots);
    },
    normalizeSlot: function normalizeSlot(name) {
      var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      // Returns an array of rendered vNodes if slot found.
      // Returns undefined if not found.
      var vNodes = _normalizeSlot(name, scope, this.$scopedSlots, this.$slots);

      return vNodes ? concat(vNodes) : vNodes;
    }
  }
};