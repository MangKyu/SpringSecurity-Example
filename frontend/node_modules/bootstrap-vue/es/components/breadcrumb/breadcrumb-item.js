"use strict";

exports.__esModule = true;
exports.default = exports.BBreadcrumbItem = void 0;

var _vue = _interopRequireDefault(require("../../utils/vue"));

var _vueFunctionalDataMerge = require("vue-functional-data-merge");

var _breadcrumbLink = require("./breadcrumb-link");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @vue/component
var BBreadcrumbItem =
/*#__PURE__*/
_vue.default.extend({
  name: 'BBreadcrumbItem',
  functional: true,
  props: _breadcrumbLink.props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('li', (0, _vueFunctionalDataMerge.mergeData)(data, {
      staticClass: 'breadcrumb-item',
      class: {
        active: props.active
      }
    }), [h(_breadcrumbLink.BBreadcrumbLink, {
      props: props
    }, children)]);
  }
});

exports.BBreadcrumbItem = BBreadcrumbItem;
var _default = BBreadcrumbItem;
exports.default = _default;