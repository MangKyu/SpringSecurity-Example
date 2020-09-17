"use strict";

exports.__esModule = true;
exports.default = void 0;

var _normalizeSlot2 = require("../utils/normalize-slot");

var _array = require("../utils/array");

var _default = {
  methods: {
    hasNormalizedSlot: function hasNormalizedSlot(name) {
      // Returns true if the either a $scopedSlot or $slot exists with the specified name
      return (0, _normalizeSlot2.hasNormalizedSlot)(name, this.$scopedSlots, this.$slots);
    },
    normalizeSlot: function normalizeSlot(name) {
      var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // Returns an array of rendered vNodes if slot found.
      // Returns undefined if not found.
      var vNodes = (0, _normalizeSlot2.normalizeSlot)(name, scope, this.$scopedSlots, this.$slots);
      return vNodes ? (0, _array.concat)(vNodes) : vNodes;
    }
  }
};
exports.default = _default;