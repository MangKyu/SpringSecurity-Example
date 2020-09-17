"use strict";

exports.__esModule = true;
exports.default = void 0;

var _cloneDeep = _interopRequireDefault(require("../../../utils/clone-deep"));

var _looseEqual = _interopRequireDefault(require("../../../utils/loose-equal"));

var _warn = _interopRequireDefault(require("../../../utils/warn"));

var _inspect = require("../../../utils/inspect");

var _stringifyRecordValues = _interopRequireDefault(require("./stringify-record-values"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEPRECATION_MSG = 'Supplying a function to prop "filter" is deprecated. Use "filter-function" instead.';
var _default = {
  props: {
    filter: {
      // Passing a function to filter is deprecated and should be avoided
      type: [String, RegExp, Object, Array, Function],
      default: null,
      // `deprecated` -> Don't use this prop
      // `deprecation` -> Refers to a change in prop usage
      deprecation: DEPRECATION_MSG
    },
    filterFunction: {
      type: Function,
      default: null
    }
  },
  data: function data() {
    return {
      // Flag for displaying which empty slot to show and some event triggering
      isFiltered: false
    };
  },
  computed: {
    localFiltering: function localFiltering() {
      return this.hasProvider ? !!this.noProviderFiltering : true;
    },
    // For watching changes to `filteredItems` vs `localItems`
    filteredCheck: function filteredCheck() {
      return {
        filteredItems: this.filteredItems,
        localItems: this.localItems,
        localFilter: this.localFilter
      };
    },
    // Sanitized/normalized version of filter prop
    localFilter: function localFilter() {
      // Deprecate setting prop filter to a function
      // `localFilterFn` will contain the correct function ref
      if ((0, _inspect.isFunction)(this.filter)) {
        /* istanbul ignore next */
        return '';
      } // Using internal filter function, which only accepts string or RegExp


      if (this.localFiltering && !(0, _inspect.isFunction)(this.filterFunction) && !((0, _inspect.isString)(this.filter) || (0, _inspect.isRegExp)(this.filter))) {
        return '';
      } // Could be a string, object or array, as needed by external filter function
      // We use `cloneDeep` to ensure we have a new copy of an object or array
      // without Vue reactive observers


      return (0, _cloneDeep.default)(this.filter);
    },
    // Sanitized/normalize filter-function prop
    localFilterFn: function localFilterFn() {
      var filterFn = this.filterFunction;
      var filter = this.filter; // Prefer `filterFn` prop

      if ((0, _inspect.isFunction)(filterFn)) {
        return filterFn;
      } // Deprecate setting `filter` prop to a function


      if ((0, _inspect.isFunction)(filter)) {
        /* istanbul ignore next */
        (0, _warn.default)("b-table: ".concat(DEPRECATION_MSG));
        /* istanbul ignore next */

        return filter;
      } // No `filterFunction`, so signal to use internal filter function


      return null;
    },
    // Returns the records in `localItems` that match the filter criteria
    // Returns the original `localItems` array if not sorting
    filteredItems: function filteredItems() {
      var items = this.localItems || []; // Resolve the filtering function, when requested
      // We prefer the provided filtering function and fallback to the internal one
      // When no filtering criteria is specified the filtering factories will return `null`

      var filterFn = null;

      if (this.localFiltering) {
        var criteria = this.localFilter;
        filterFn = this.filterFnFactory(this.localFilterFn, criteria) || this.defaultFilterFnFactory(criteria);
      } // We only do local filtering when requested and there are records to filter


      if (filterFn && items.length > 0) {
        return items.filter(filterFn);
      } // Otherwise return all items


      return items;
    }
  },
  watch: {
    // Watch for changes to the filter criteria and filtered items vs localItems).
    // And set visual state and emit events as required
    filteredCheck: function filteredCheck(_ref) {
      var filteredItems = _ref.filteredItems,
          localItems = _ref.localItems,
          localFilter = _ref.localFilter;
      // Determine if the dataset is filtered or not
      var isFiltered = false;

      if (!localFilter) {
        // If filter criteria is falsey
        isFiltered = false;
      } else if ((0, _looseEqual.default)(localFilter, []) || (0, _looseEqual.default)(localFilter, {})) {
        // If filter criteria is an empty array or object
        isFiltered = false;
      } else if (localFilter) {
        // If filter criteria is truthy
        isFiltered = true;
      }

      if (isFiltered) {
        this.$emit('filtered', filteredItems, filteredItems.length);
      }

      this.isFiltered = isFiltered;
    },
    isFiltered: function isFiltered(newVal, oldVal) {
      if (newVal === false && oldVal === true) {
        // We need to emit a filtered event if isFiltered transitions from true to
        // false so that users can update their pagination controls.
        this.$emit('filtered', this.localItems, this.localItems.length);
      }
    }
  },
  created: function created() {
    var _this = this;

    // Set the initial filtered state.
    // In a nextTick so that we trigger a filtered event if needed
    this.$nextTick(function () {
      _this.isFiltered = Boolean(_this.localFilter);
    });
  },
  methods: {
    // Filter Function factories
    filterFnFactory: function filterFnFactory(filterFn, criteria) {
      // Wrapper factory for external filter functions.
      // Wrap the provided filter-function and return a new function.
      // Returns null if no filter-function defined or if criteria is falsey.
      // Rather than directly grabbing this.computedLocalFilterFn or this.filterFunction
      // we have it passed, so that the caller computed prop will be reactive to changes
      // in the original filter-function (as this routine is a method)
      if (!filterFn || !(0, _inspect.isFunction)(filterFn) || !criteria || (0, _looseEqual.default)(criteria, []) || (0, _looseEqual.default)(criteria, {})) {
        return null;
      } // Build the wrapped filter test function, passing the criteria to the provided function


      var fn = function fn(item) {
        // Generated function returns true if the criteria matches part
        // of the serialized data, otherwise false
        return filterFn(item, criteria);
      }; // Return the wrapped function


      return fn;
    },
    defaultFilterFnFactory: function defaultFilterFnFactory(criteria) {
      // Generates the default filter function, using the given filter criteria
      if (!criteria || !((0, _inspect.isString)(criteria) || (0, _inspect.isRegExp)(criteria))) {
        // Built in filter can only support strings or RegExp criteria (at the moment)
        return null;
      } // Build the regexp needed for filtering


      var regexp = criteria;

      if ((0, _inspect.isString)(regexp)) {
        // Escape special RegExp characters in the string and convert contiguous
        // whitespace to \s+ matches
        var pattern = criteria.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&').replace(/[\s\uFEFF\xA0]+/g, '\\s+'); // Build the RegExp (no need for global flag, as we only need
        // to find the value once in the string)

        regexp = new RegExp(".*".concat(pattern, ".*"), 'i');
      } // Generate the wrapped filter test function to use


      var fn = function fn(item) {
        // This searches all row values (and sub property values) in the entire (excluding
        // special _ prefixed keys), because we convert the record to a space-separated
        // string containing all the value properties (recursively), even ones that are
        // not visible (not specified in this.fields).
        //
        // TODO: Enable searching on formatted fields and scoped slots
        // TODO: Should we filter only on visible fields (i.e. ones in this.fields) by default?
        // TODO: Allow for searching on specific fields/key, this could be combined with the previous TODO
        // TODO: Give stringifyRecordValues extra options for filtering (i.e. passing the
        //       fields definition and a reference to $scopedSlots)
        //
        // Generated function returns true if the criteria matches part of
        // the serialized data, otherwise false
        // We set lastIndex = 0 on regex in case someone uses the /g global flag
        regexp.lastIndex = 0;
        return regexp.test((0, _stringifyRecordValues.default)(item));
      }; // Return the generated function


      return fn;
    }
  }
};
exports.default = _default;