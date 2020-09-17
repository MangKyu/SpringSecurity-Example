"use strict";

exports.__esModule = true;
exports.default = exports.BImgLazy = exports.props = void 0;

var _vue = _interopRequireDefault(require("../../utils/vue"));

var _img = require("./img");

var _config = require("../../utils/config");

var _dom = require("../../utils/dom");

var _env = require("../../utils/env");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NAME = 'BImgLazy';
var THROTTLE = 100;
var EVENT_OPTIONS = {
  passive: true,
  capture: false
};
var props = {
  src: {
    type: String,
    default: null,
    required: true
  },
  alt: {
    type: String,
    default: null
  },
  width: {
    type: [Number, String],
    default: null
  },
  height: {
    type: [Number, String],
    default: null
  },
  blankSrc: {
    // If null, a blank image is generated
    type: String,
    default: null
  },
  blankColor: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'blankColor');
    }
  },
  blankWidth: {
    type: [Number, String],
    default: null
  },
  blankHeight: {
    type: [Number, String],
    default: null
  },
  show: {
    type: Boolean,
    default: false
  },
  fluid: {
    type: Boolean,
    default: false
  },
  fluidGrow: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  thumbnail: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: [Boolean, String],
    default: false
  },
  left: {
    type: Boolean,
    default: false
  },
  right: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  offset: {
    type: [Number, String],
    default: 360
  },
  throttle: {
    type: [Number, String],
    default: THROTTLE
  } // @vue/component

};
exports.props = props;

var BImgLazy =
/*#__PURE__*/
_vue.default.extend({
  name: NAME,
  props: props,
  data: function data() {
    return {
      isShown: false,
      scrollTimeout: null,
      observer: null
    };
  },
  computed: {
    computedSrc: function computedSrc() {
      return !this.blankSrc || this.isShown ? this.src : this.blankSrc;
    },
    computedBlank: function computedBlank() {
      return !(this.isShown || this.blankSrc);
    },
    computedWidth: function computedWidth() {
      return this.isShown ? this.width : this.blankWidth || this.width;
    },
    computedHeight: function computedHeight() {
      return this.isShown ? this.height : this.blankHeight || this.height;
    }
  },
  watch: {
    show: function show(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.isShown = newVal;

        if (!newVal) {
          // Make sure listeners are re-enabled if img is force set to blank
          this.setListeners(true);
        }
      }
    },
    isShown: function isShown(newVal, oldVal) {
      if (newVal !== oldVal) {
        // Update synched show prop
        this.$emit('update:show', newVal);
      }
    }
  },
  created: function created() {
    this.isShown = this.show;
  },
  mounted: function mounted() {
    if (this.isShown) {
      this.setListeners(false);
    } else {
      this.setListeners(true);
    }
  },
  activated: function activated()
  /* istanbul ignore next */
  {
    if (!this.isShown) {
      this.setListeners(true);
    }
  },
  deactivated: function deactivated()
  /* istanbul ignore next */
  {
    this.setListeners(false);
  },
  beforeDestroy: function beforeDestroy() {
    this.setListeners(false);
  },
  methods: {
    setListeners: function setListeners(on) {
      var _this = this;

      if (this.scrollTimeout) {
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = null;
      }
      /* istanbul ignore next: JSDOM doen't support IntersectionObserver */


      if (this.observer) {
        this.observer.unobserve(this.$el);
        this.observer.disconnect();
        this.observer = null;
      }

      var winEvts = ['scroll', 'resize', 'orientationchange'];
      winEvts.forEach(function (evt) {
        return (0, _dom.eventOff)(window, evt, _this.onScroll, EVENT_OPTIONS);
      });
      (0, _dom.eventOff)(this.$el, 'load', this.checkView, EVENT_OPTIONS);
      (0, _dom.eventOff)(document, 'transitionend', this.onScroll, EVENT_OPTIONS);

      if (on) {
        /* istanbul ignore if: JSDOM doen't support IntersectionObserver */
        if (_env.hasIntersectionObserverSupport) {
          this.observer = new IntersectionObserver(this.doShow, {
            root: null,
            // viewport
            rootMargin: "".concat(parseInt(this.offset, 10) || 0, "px"),
            threshold: 0 // percent intersection

          });
          this.observer.observe(this.$el);
        } else {
          // Fallback to scroll/etc events
          winEvts.forEach(function (evt) {
            return (0, _dom.eventOn)(window, evt, _this.onScroll, EVENT_OPTIONS);
          });
          (0, _dom.eventOn)(this.$el, 'load', this.checkView, EVENT_OPTIONS);
          (0, _dom.eventOn)(document, 'transitionend', this.onScroll, EVENT_OPTIONS);
        }
      }
    },
    doShow: function doShow(entries) {
      if (entries && (entries[0].isIntersecting || entries[0].intersectionRatio > 0.0)) {
        this.isShown = true;
        this.setListeners(false);
      }
    },
    checkView: function checkView() {
      // check bounding box + offset to see if we should show

      /* istanbul ignore next: should rarely occur */
      if (this.isShown) {
        this.setListeners(false);
        return;
      }

      var offset = parseInt(this.offset, 10) || 0;
      var docElement = document.documentElement;
      var view = {
        l: 0 - offset,
        t: 0 - offset,
        b: docElement.clientHeight + offset,
        r: docElement.clientWidth + offset // JSDOM Doesn't support BCR, but we fake it in the tests

      };
      var box = (0, _dom.getBCR)(this.$el);

      if (box.right >= view.l && box.bottom >= view.t && box.left <= view.r && box.top <= view.b) {
        // image is in view (or about to be in view)
        this.doShow([{
          isIntersecting: true
        }]);
      }
    },
    onScroll: function onScroll() {
      /* istanbul ignore if: should rarely occur */
      if (this.isShown) {
        this.setListeners(false);
      } else {
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(this.checkView, parseInt(this.throttle, 10) || THROTTLE);
      }
    }
  },
  render: function render(h) {
    return h(_img.BImg, {
      props: {
        // Computed value props
        src: this.computedSrc,
        blank: this.computedBlank,
        width: this.computedWidth,
        height: this.computedHeight,
        // Passthough props
        alt: this.alt,
        blankColor: this.blankColor,
        fluid: this.fluid,
        fluidGrow: this.fluidGrow,
        block: this.block,
        thumbnail: this.thumbnail,
        rounded: this.rounded,
        left: this.left,
        right: this.right,
        center: this.center
      }
    });
  }
});

exports.BImgLazy = BImgLazy;
var _default2 = BImgLazy;
exports.default = _default2;