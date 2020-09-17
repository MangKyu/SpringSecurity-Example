import Vue from '../../utils/vue';
import paginationMixin from '../../mixins/pagination';
import { isVisible } from '../../utils/dom';
var DEFAULT_PER_PAGE = 20;
var DEFAULT_TOTAL_ROWS = 0;

function sanitizePerPage(value) {
  var perPage = parseInt(value, 10) || DEFAULT_PER_PAGE;
  return perPage < 1 ? 1 : perPage;
}

function sanitizeTotalRows(value) {
  var totalRows = parseInt(value, 10) || DEFAULT_TOTAL_ROWS;
  return totalRows < 0 ? 0 : totalRows;
}

var props = {
  perPage: {
    type: [Number, String],
    default: DEFAULT_PER_PAGE
  },
  totalRows: {
    type: [Number, String],
    default: DEFAULT_TOTAL_ROWS
  },
  ariaControls: {
    type: String,
    default: null
  } // Our render function is brought in from the pagination mixin
  // @vue/component

};
export var BPagination =
/*#__PURE__*/
Vue.extend({
  name: 'BPagination',
  mixins: [paginationMixin],
  props: props,
  computed: {
    numberOfPages: function numberOfPages() {
      var result = Math.ceil(sanitizeTotalRows(this.totalRows) / sanitizePerPage(this.perPage));
      return result < 1 ? 1 : result;
    }
  },
  watch: {
    numberOfPages: function numberOfPages(newVal) {
      if (newVal === this.localNumPages) {
        /* istanbul ignore next */
        return;
      }

      this.localNumPages = newVal;
      this.currentPage = 1;
    }
  },
  created: function created() {
    var _this = this;

    // Set the initial page count
    this.localNumPages = this.numberOfPages; // Set the initial page value

    var curr = parseInt(this.value, 10) || 0;

    if (curr > 0) {
      this.currentPage = curr;
    } else {
      this.$nextTick(function () {
        // If this value parses to NaN or a value less than 1
        // Trigger an initial emit of 'null' if no page specified
        _this.currentPage = 0;
      });
    }
  },
  mounted: function mounted() {
    // Set the initial page count
    this.localNumPages = this.numberOfPages;
  },
  methods: {
    // These methods are used by the render function
    onClick: function onClick(num, evt) {
      var _this2 = this;

      // Handle edge cases where number of pages has changed (i.e. if perPage changes)
      // This should normally not happen, but just in case.
      if (num > this.numberOfPages) {
        /* istanbul ignore next */
        num = this.numberOfPages;
      } else if (num < 1) {
        /* istanbul ignore next */
        num = 1;
      } // Update the v-model


      this.currentPage = num; // Emit event triggered by user interaction

      this.$emit('change', this.currentPage);
      this.$nextTick(function () {
        // Keep the current button focused if possible
        var target = evt.target;

        if (isVisible(target) && _this2.$el.contains(target) && target.focus) {
          target.focus();
        } else {
          _this2.focusCurrent();
        }
      });
    },
    makePage: function makePage(pageNum) {
      return pageNum;
    },
    linkProps: function linkProps(pageNum) {
      // Always '#' for pagination component
      return {
        href: '#'
      };
    }
  }
});
export default BPagination;