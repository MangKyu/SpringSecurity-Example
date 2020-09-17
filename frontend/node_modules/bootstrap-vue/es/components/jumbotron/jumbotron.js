"use strict";

exports.__esModule = true;
exports.default = exports.BJumbotron = exports.props = void 0;

var _vue = _interopRequireDefault(require("../../utils/vue"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var _config = require("../../utils/config");

var _html = require("../../utils/html");

var _normalizeSlot = require("../../utils/normalize-slot");

var _container = require("../layout/container");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NAME = 'BJumbotron';
var props = {
  fluid: {
    type: Boolean,
    default: false
  },
  containerFluid: {
    type: Boolean,
    default: false
  },
  header: {
    type: String,
    default: null
  },
  headerHtml: {
    type: String,
    default: null
  },
  headerTag: {
    type: String,
    default: 'h1'
  },
  headerLevel: {
    type: [Number, String],
    default: '3'
  },
  lead: {
    type: String,
    default: null
  },
  leadHtml: {
    type: String,
    default: null
  },
  leadTag: {
    type: String,
    default: 'p'
  },
  tag: {
    type: String,
    default: 'div'
  },
  bgVariant: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'bgVariant');
    }
  },
  borderVariant: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'borderVariant');
    }
  },
  textVariant: {
    type: String,
    default: function _default() {
      return (0, _config.getComponentConfig)(NAME, 'textVariant');
    }
  } // @vue/component

};
exports.props = props;

var BJumbotron =
/*#__PURE__*/
_vue.default.extend({
  name: NAME,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class2;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    // The order of the conditionals matter.
    // We are building the component markup in order.
    var childNodes = [];
    var $slots = slots();
    var $scopedSlots = scopedSlots || {}; // Header

    if (props.header || (0, _normalizeSlot.hasNormalizedSlot)('header', $scopedSlots, $slots) || props.headerHtml) {
      childNodes.push(h(props.headerTag, {
        class: _defineProperty({}, "display-".concat(props.headerLevel), Boolean(props.headerLevel))
      }, (0, _normalizeSlot.normalizeSlot)('header', {}, $scopedSlots, $slots) || props.headerHtml || (0, _html.stripTags)(props.header)));
    } // Lead


    if (props.lead || (0, _normalizeSlot.hasNormalizedSlot)('lead', $scopedSlots, $slots) || props.leadHtml) {
      childNodes.push(h(props.leadTag, {
        staticClass: 'lead'
      }, (0, _normalizeSlot.normalizeSlot)('lead', {}, $scopedSlots, $slots) || props.leadHtml || (0, _html.stripTags)(props.lead)));
    } // Default slot


    if ((0, _normalizeSlot.hasNormalizedSlot)('default', $scopedSlots, $slots)) {
      childNodes.push((0, _normalizeSlot.normalizeSlot)('default', {}, $scopedSlots, $slots));
    } // If fluid, wrap content in a container/container-fluid


    if (props.fluid) {
      // Children become a child of a container
      childNodes = [h(_container.BContainer, {
        props: {
          fluid: props.containerFluid
        }
      }, childNodes)];
    } // Return the jumbotron


    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'jumbotron',
      class: (_class2 = {
        'jumbotron-fluid': props.fluid
      }, _defineProperty(_class2, "text-".concat(props.textVariant), Boolean(props.textVariant)), _defineProperty(_class2, "bg-".concat(props.bgVariant), Boolean(props.bgVariant)), _defineProperty(_class2, "border-".concat(props.borderVariant), Boolean(props.borderVariant)), _defineProperty(_class2, "border", Boolean(props.borderVariant)), _class2)
    }), childNodes);
  }
});

exports.BJumbotron = BJumbotron;
var _default2 = BJumbotron;
exports.default = _default2;