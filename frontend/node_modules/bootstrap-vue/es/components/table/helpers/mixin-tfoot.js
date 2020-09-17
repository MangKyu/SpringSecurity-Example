"use strict";

exports.__esModule = true;
exports.default = void 0;

var _config = require("../../../utils/config");

var _default2 = {
  props: {
    footClone: {
      type: Boolean,
      default: false
    },
    footVariant: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)('BTable', 'footVariant');
      }
    },
    tfootClass: {
      type: [String, Array, Object],
      default: null
    },
    tfootTrClass: {
      type: [String, Array, Object],
      default: null
    }
  },
  computed: {
    footClasses: function footClasses() {
      var variant = this.footVariant || this.headVariant || null;
      return [variant ? "thead-".concat(variant) : '', this.tfootClass];
    }
  },
  methods: {
    renderTfoot: function renderTfoot() {
      var h = this.$createElement; // Passing true to renderThead will make it render a tfoot

      return this.footClone ? this.renderThead(true) : h(false);
    }
  }
};
exports.default = _default2;