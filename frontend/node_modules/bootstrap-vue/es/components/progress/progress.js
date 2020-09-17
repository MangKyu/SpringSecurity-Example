"use strict";

exports.__esModule = true;
exports.default = exports.BProgress = void 0;

var _vue = _interopRequireDefault(require("../../utils/vue"));

var _config = require("../../utils/config");

var _normalizeSlot = _interopRequireDefault(require("../../mixins/normalize-slot"));

var _progressBar = require("./progress-bar");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'BProgress'; // @vue/component

var BProgress =
/*#__PURE__*/
_vue.default.extend({
  name: NAME,
  mixins: [_normalizeSlot.default],
  provide: function provide() {
    return {
      bvProgress: this
    };
  },
  props: {
    // These props can be inherited via the child b-progress-bar(s)
    variant: {
      type: String,
      default: function _default() {
        return (0, _config.getComponentConfig)(NAME, 'variant');
      }
    },
    striped: {
      type: Boolean,
      default: false
    },
    animated: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: null
    },
    precision: {
      type: Number,
      default: 0
    },
    showProgress: {
      type: Boolean,
      default: false
    },
    showValue: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: 100
    },
    // This prop is not inherited by child b-progress-bar(s)
    value: {
      type: Number,
      default: 0
    }
  },
  computed: {
    progressHeight: function progressHeight() {
      return {
        height: this.height || null
      };
    }
  },
  render: function render(h) {
    var childNodes = this.normalizeSlot('default');

    if (!childNodes) {
      childNodes = h(_progressBar.BProgressBar, {
        props: {
          value: this.value,
          max: this.max,
          precision: this.precision,
          variant: this.variant,
          animated: this.animated,
          striped: this.striped,
          showProgress: this.showProgress,
          showValue: this.showValue
        }
      });
    }

    return h('div', {
      class: ['progress'],
      style: this.progressHeight
    }, [childNodes]);
  }
});

exports.BProgress = BProgress;
var _default2 = BProgress;
exports.default = _default2;