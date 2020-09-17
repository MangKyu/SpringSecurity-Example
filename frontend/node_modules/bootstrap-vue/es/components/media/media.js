"use strict";

exports.__esModule = true;
exports.default = exports.BMedia = exports.props = void 0;

var _vue = _interopRequireDefault(require("../../utils/vue"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var _normalizeSlot = require("../../utils/normalize-slot");

var _mediaBody = require("./media-body");

var _mediaAside = require("./media-aside");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  tag: {
    type: String,
    default: 'div'
  },
  rightAlign: {
    type: Boolean,
    default: false
  },
  verticalAlign: {
    type: String,
    default: 'top'
  },
  noBody: {
    type: Boolean,
    default: false
  } // @vue/component

};
exports.props = props;

var BMedia =
/*#__PURE__*/
_vue.default.extend({
  name: 'BMedia',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots,
        children = _ref.children;
    var childNodes = props.noBody ? children : [];

    if (!props.noBody) {
      var $slots = slots();
      var $scopedSlots = scopedSlots || {};
      var $aside = (0, _normalizeSlot.normalizeSlot)('aside', {}, $scopedSlots, $slots);
      var $default = (0, _normalizeSlot.normalizeSlot)('default', {}, $scopedSlots, $slots);

      if ($aside && !props.rightAlign) {
        childNodes.push(h(_mediaAside.BMediaAside, {
          staticClass: 'mr-3',
          props: {
            verticalAlign: props.verticalAlign
          }
        }, $aside));
      }

      childNodes.push(h(_mediaBody.BMediaBody, {}, $default));

      if ($aside && props.rightAlign) {
        childNodes.push(h(_mediaAside.BMediaAside, {
          staticClass: 'ml-3',
          props: {
            verticalAlign: props.verticalAlign
          }
        }, $aside));
      }
    }

    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'media'
    }), childNodes);
  }
});

exports.BMedia = BMedia;
var _default = BMedia;
exports.default = _default;