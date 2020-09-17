"use strict";

exports.__esModule = true;
exports.default = exports.BToaster = exports.DefaultTransition = exports.props = void 0;

var _vue = _interopRequireDefault(require("../../utils/vue"));

var _portalVue = require("portal-vue");

var _warn = _interopRequireDefault(require("../../utils/warn"));

var _config = require("../../utils/config");

var _dom = require("../../utils/dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// --- Constants ---
var NAME = 'BToaster';
var props = {
  name: {
    type: String,
    required: true
  },
  ariaLive: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'ariaLive');
    }
  },
  ariaAtomic: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'ariaAtomic');
    } // Allowed: 'true' or 'false' or null

  },
  role: {
    // Aria role
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'role');
    }
    /*
    transition: {
      type: [Boolean, String, Object],
      default: false
    }
    */

  } // @vue/component

};
exports.props = props;

var DefaultTransition =
/*#__PURE__*/
_vue.default.extend({
  data: function data() {
    return {
      // Transition classes base name
      name: 'b-toaster'
    };
  },
  methods: {
    onAfterEnter: function onAfterEnter(el) {
      var _this = this;

      // Handle bug where enter-to class is not removed.
      // Bug is related to portal-vue and transition-groups.
      (0, _dom.requestAF)(function () {
        (0, _dom.removeClass)(el, "".concat(_this.name, "-enter-to")); // The *-move class is also stuck on elements that moved,
        // but there are no javascript hooks to handle after move.
      });
    }
  },
  render: function render(h) {
    return h('transition-group', {
      props: {
        tag: 'div',
        name: this.name
      },
      on: {
        afterEnter: this.onAfterEnter
      }
    }, this.$slots.default);
  }
}); // @vue/component


exports.DefaultTransition = DefaultTransition;

var BToaster =
/*#__PURE__*/
_vue.default.extend({
  name: NAME,
  props: props,
  data: function data() {
    return {
      // We don't render on SSR or if a an existing target found
      doRender: false,
      dead: false,
      // Toaster names cannot change once created
      staticName: this.name
    };
  },
  beforeMount: function beforeMount() {
    var _this2 = this;

    this.staticName = this.name;
    /* istanbul ignore if */

    if (_portalVue.Wormhole.hasTarget(this.staticName)) {
      (0, _warn.default)("b-toaster: A <portal-target> with name '".concat(this.name, "' already exists in the document."));
      this.dead = true;
    } else {
      this.doRender = true;
      this.$once('hook:beforeDestroy', function () {
        // Let toasts made with `this.$bvToast.toast()` know that this toaster
        // is being destroyed and should should also destroy/hide themselves
        _this2.$root.$emit('bv::toaster::destroyed', _this2.staticName);
      });
    }
  },
  destroyed: function destroyed() {
    // Remove from DOM if needed

    /* istanbul ignore next: difficult to test */
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
  },
  render: function render(h) {
    var $toaster = h('div', {
      class: ['d-none', {
        'b-dead-toaster': this.dead
      }]
    });

    if (this.doRender) {
      var $target = h(_portalVue.PortalTarget, {
        staticClass: 'b-toaster-slot',
        props: {
          name: this.staticName,
          multiple: true,
          tag: 'div',
          slim: false,
          // transition: this.transition || DefaultTransition
          transition: DefaultTransition
        }
      });
      $toaster = h('div', {
        staticClass: 'b-toaster',
        class: [this.staticName],
        attrs: {
          id: this.staticName,
          role: this.role || null,
          // Fallback to null to make sure attribute doesn't exist
          'aria-live': this.ariaLive,
          'aria-atomic': this.ariaAtomic
        }
      }, [$target]);
    }

    return $toaster;
  }
});

exports.BToaster = BToaster;
var _default2 = BToaster;
exports.default = _default2;