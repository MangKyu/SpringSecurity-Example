"use strict";

exports.__esModule = true;
exports.default = exports.BTab = void 0;

var _vue = _interopRequireDefault(require("../../utils/vue"));

var _id = _interopRequireDefault(require("../../mixins/id"));

var _normalizeSlot = _interopRequireDefault(require("../../mixins/normalize-slot"));

var _bvTransition = _interopRequireDefault(require("../../utils/bv-transition"));

var _warn = _interopRequireDefault(require("../../utils/warn"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEPRECATED_MSG = 'Setting prop "href" is deprecated. Use the <b-nav> component instead.'; // @vue/component

var BTab =
/*#__PURE__*/
_vue.default.extend({
  name: 'BTab',
  mixins: [_id.default, _normalizeSlot.default],
  inject: {
    bvTabs: {
      default: function _default() {
        return {
          // Don't set a tab index if not rendered inside <b-tabs>
          noKeyNav: true
        };
      }
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: 'div'
    },
    buttonId: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    titleItemClass: {
      // Sniffed by tabs.js and added to nav 'li.nav-item'
      type: [String, Array, Object],
      default: null
    },
    titleLinkClass: {
      // Sniffed by tabs.js and added to nav 'a.nav-link'
      type: [String, Array, Object],
      default: null
    },
    headHtml: {
      // Is this actually ever used?
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    noBody: {
      type: Boolean,
      default: false
    },
    href: {
      // This should be deprecated, as tabs are not navigation (URL) based
      // <b-nav> + <b-card> + <router-view>/<nuxt-child> should be used instead
      // We don't support router-links here
      type: String,
      default: '#',
      // `deprecated` -> Don't use this prop
      // `deprecation` -> Refers to a change in prop usage
      deprecated: DEPRECATED_MSG
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      localActive: this.active && !this.disabled,
      show: false
    };
  },
  computed: {
    tabClasses: function tabClasses() {
      return [{
        active: this.localActive,
        disabled: this.disabled,
        'card-body': this.bvTabs.card && !this.noBody
      }, // Apply <b-tabs> `activeTabClass` styles when this tab is active
      this.localActive ? this.bvTabs.activeTabClass : null];
    },
    controlledBy: function controlledBy() {
      return this.buttonId || this.safeId('__BV_tab_button__');
    },
    computedNoFade: function computedNoFade() {
      return !(this.bvTabs.fade || false);
    },
    computedLazy: function computedLazy() {
      return this.bvTabs.lazy || this.lazy;
    },
    _isTab: function _isTab() {
      // For parent sniffing of child
      return true;
    }
  },
  watch: {
    localActive: function localActive(newVal, oldVal) {
      // Make 'active' prop work with `.sync` modifier
      this.$emit('update:active', newVal);
    },
    active: function active(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal) {
          // If activated post mount
          this.activate();
        } else {
          if (!this.deactivate()) {
            // Tab couldn't be deactivated, so we reset the synced active prop
            // Deactivation will fail if no other tabs to activate
            this.$emit('update:active', this.localActive);
          }
        }
      }
    },
    disabled: function disabled(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal && this.localActive && this.bvTabs.firstTab) {
          this.localActive = false;
          this.bvTabs.firstTab();
        }
      }
    }
  },
  mounted: function mounted() {
    // Inform b-tabs of our presence
    this.registerTab(); // Initially show on mount if active and not disabled

    this.show = this.localActive; // Deprecate use of `href` prop

    if (this.href && this.href !== '#') {
      /* istanbul ignore next */
      (0, _warn.default)("b-tab: ".concat(DEPRECATED_MSG));
    }
  },
  updated: function updated() {
    // Force the tab button content to update (since slots are not reactive)
    // Only done if we have a title slot, as the title prop is reactive
    if (this.hasNormalizedSlot('title') && this.bvTabs.updateButton) {
      this.bvTabs.updateButton(this);
    }
  },
  destroyed: function destroyed() {
    // inform b-tabs of our departure
    this.unregisterTab();
  },
  methods: {
    // Private methods
    registerTab: function registerTab() {
      // Inform `b-tabs` of our presence
      this.bvTabs.registerTab && this.bvTabs.registerTab(this);
    },
    unregisterTab: function unregisterTab() {
      // Inform `b-tabs` of our departure
      this.bvTabs.unregisterTab && this.bvTabs.unregisterTab(this);
    },
    // Public methods
    activate: function activate() {
      if (this.bvTabs.activateTab && !this.disabled) {
        return this.bvTabs.activateTab(this);
      } else {
        // Not inside a <b-tabs> component or tab is disabled
        return false;
      }
    },
    deactivate: function deactivate() {
      if (this.bvTabs.deactivateTab && this.localActive) {
        return this.bvTabs.deactivateTab(this);
      } else {
        // Not inside a <b-tabs> component or not active to begin with
        return false;
      }
    }
  },
  render: function render(h) {
    var content = h(this.tag, {
      ref: 'panel',
      staticClass: 'tab-pane',
      class: this.tabClasses,
      directives: [{
        name: 'show',
        rawName: 'v-show',
        value: this.localActive,
        expression: 'localActive'
      }],
      attrs: {
        role: 'tabpanel',
        id: this.safeId(),
        tabindex: this.localActive && !this.bvTabs.noKeyNav ? '-1' : null,
        'aria-hidden': this.localActive ? 'false' : 'true',
        'aria-labelledby': this.controlledBy || null
      }
    }, // Render content lazily if requested
    [this.localActive || !this.computedLazy ? this.normalizeSlot('default') : h(false)]);
    return h(_bvTransition.default, {
      props: {
        mode: 'out-in',
        noFade: this.computedNoFade
      }
    }, [content]);
  }
});

exports.BTab = BTab;
var _default2 = BTab;
exports.default = _default2;