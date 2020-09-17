"use strict";

exports.__esModule = true;
exports.default = exports.BInputGroupText = exports.props = void 0;

var _vue = _interopRequireDefault(require("../../utils/vue"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var props = {
  tag: {
    type: String,
    default: 'div'
  } // @vue/component

};
exports.props = props;

var BInputGroupText =
/*#__PURE__*/
_vue.default.extend({
  name: 'BInputGroupText',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'input-group-text'
    }), children);
  }
});

exports.BInputGroupText = BInputGroupText;
var _default = BInputGroupText;
exports.default = _default;