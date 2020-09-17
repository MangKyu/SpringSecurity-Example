"use strict";

exports.__esModule = true;
exports.default = exports.BFormRadio = void 0;

var _vue = _interopRequireDefault(require("../../utils/vue"));

var _id = _interopRequireDefault(require("../../mixins/id"));

var _form = _interopRequireDefault(require("../../mixins/form"));

var _formState = _interopRequireDefault(require("../../mixins/form-state"));

var _formSize = _interopRequireDefault(require("../../mixins/form-size"));

var _formRadioCheck = _interopRequireDefault(require("../../mixins/form-radio-check"));

var _looseEqual = _interopRequireDefault(require("../../utils/loose-equal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @vue/component
var BFormRadio =
/*#__PURE__*/
_vue.default.extend({
  name: 'BFormRadio',
  mixins: [_id.default, _formRadioCheck.default, // Includes shared render function
  _form.default, _formSize.default, _formState.default],
  inject: {
    bvGroup: {
      from: 'bvRadioGroup',
      default: false
    }
  },
  props: {
    checked: {
      // v-model
      type: [String, Object, Number, Boolean],
      default: null
    }
  },
  computed: {
    // Radio Groups can only have a single value, so determining if checked is simple
    isChecked: function isChecked() {
      return (0, _looseEqual.default)(this.value, this.computedLocalChecked);
    },
    // Flags for form-radio-check mixin
    isRadio: function isRadio() {
      return true;
    },
    isCheck: function isCheck() {
      return false;
    }
  },
  watch: {
    // Radio Groups can only have a single value, so our watchers are simple
    computedLocalChecked: function computedLocalChecked(newVal, oldVal) {
      this.$emit('input', this.computedLocalChecked);
    }
  },
  methods: {
    handleChange: function handleChange(_ref) {
      var checked = _ref.target.checked;
      var value = this.value;
      this.computedLocalChecked = value; // Change is only emitted on user interaction

      this.$emit('change', checked ? value : null); // If this is a child of form-radio-group, we emit a change event on it as well

      if (this.isGroup) {
        this.bvGroup.$emit('change', checked ? value : null);
      }
    }
  }
});

exports.BFormRadio = BFormRadio;
var _default = BFormRadio;
exports.default = _default;