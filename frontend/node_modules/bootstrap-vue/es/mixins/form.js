"use strict";

exports.__esModule = true;
exports.default = void 0;

var _dom = require("../utils/dom");

var SELECTOR = 'input, textarea, select'; // @vue/component

var _default = {
  props: {
    name: {
      type: String // default: undefined

    },
    id: {
      type: String // default: undefined

    },
    disabled: {
      type: Boolean
    },
    required: {
      type: Boolean,
      default: false
    },
    form: {
      type: String,
      default: null
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted() {
    this.handleAutofocus();
  },
  activated: function activated()
  /* istanbul ignore next */
  {
    this.handleAutofocus();
  },
  methods: {
    handleAutofocus: function handleAutofocus() {
      var _this = this;

      this.$nextTick(function () {
        (0, _dom.requestAF)(function () {
          var el = _this.$el;

          if (_this.autofocus && (0, _dom.isVisible)(el)) {
            if (!(0, _dom.matches)(el, SELECTOR)) {
              el = (0, _dom.select)(SELECTOR, el);
            }

            el && el.focus && el.focus();
          }
        });
      });
    }
  }
};
exports.default = _default;