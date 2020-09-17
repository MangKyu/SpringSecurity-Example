"use strict";

exports.__esModule = true;
exports.resetConfig = exports.setConfig = void 0;

var _vue = _interopRequireDefault(require("./vue"));

var _cloneDeep = _interopRequireDefault(require("./clone-deep"));

var _get = _interopRequireDefault(require("./get"));

var _warn = _interopRequireDefault(require("./warn"));

var _inspect = require("./inspect");

var _object = require("./object");

var _configDefaults = _interopRequireDefault(require("./config-defaults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// --- Constants ---
var PROP_NAME = '$bvConfig'; // Config manager class

var BvConfig =
/*#__PURE__*/
function () {
  function BvConfig() {
    _classCallCheck(this, BvConfig);

    // TODO: pre-populate with default config values (needs updated tests)
    // this.$_config = cloneDeep(DEFAULTS)
    this.$_config = {};
    this.$_cachedBreakpoints = null;
  }

  _createClass(BvConfig, [{
    key: "getDefaults",
    // Returns the defaults
    value: function getDefaults()
    /* istanbul ignore next */
    {
      return this.defaults;
    } // Method to merge in user config parameters

  }, {
    key: "setConfig",
    value: function setConfig() {
      var _this = this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!(0, _inspect.isPlainObject)(config)) {
        /* istanbul ignore next */
        return;
      }

      var configKeys = (0, _object.getOwnPropertyNames)(config);
      configKeys.forEach(function (cmpName) {
        /* istanbul ignore next */
        if (!(0, _object.hasOwnProperty)(_configDefaults.default, cmpName)) {
          (0, _warn.default)("config: unknown config property \"".concat(cmpName, "\""));
          return;
        }

        var cmpConfig = config[cmpName];

        if (cmpName === 'breakpoints') {
          // Special case for breakpoints
          var breakpoints = config.breakpoints;
          /* istanbul ignore if */

          if (!(0, _inspect.isArray)(breakpoints) || breakpoints.length < 2 || breakpoints.some(function (b) {
            return !(0, _inspect.isString)(b) || b.length === 0;
          })) {
            (0, _warn.default)('config: "breakpoints" must be an array of at least 2 breakpoint names');
          } else {
            _this.$_config.breakpoints = (0, _cloneDeep.default)(breakpoints);
          }
        } else if ((0, _inspect.isPlainObject)(cmpConfig)) {
          // Component prop defaults
          var props = (0, _object.getOwnPropertyNames)(cmpConfig);
          props.forEach(function (prop) {
            /* istanbul ignore if */
            if (!(0, _object.hasOwnProperty)(_configDefaults.default[cmpName], prop)) {
              (0, _warn.default)("config: unknown config property \"".concat(cmpName, ".{$prop}\""));
            } else {
              // TODO: If we pre-populate the config with defaults, we can skip this line
              _this.$_config[cmpName] = _this.$_config[cmpName] || {};

              if (!(0, _inspect.isUndefined)(cmpConfig[prop])) {
                _this.$_config[cmpName][prop] = (0, _cloneDeep.default)(cmpConfig[prop]);
              }
            }
          });
        }
      });
    } // Clear the config. For testing purposes only

  }, {
    key: "resetConfig",
    value: function resetConfig() {
      this.$_config = {};
    } // Returns a deep copy of the user config

  }, {
    key: "getConfig",
    value: function getConfig() {
      return (0, _cloneDeep.default)(this.$_config);
    }
  }, {
    key: "getConfigValue",
    value: function getConfigValue(key) {
      // First we try the user config, and if key not found we fall back to default value
      // NOTE: If we deep clone DEFAULTS into config, then we can skip the fallback for get
      return (0, _cloneDeep.default)((0, _get.default)(this.$_config, key, (0, _get.default)(_configDefaults.default, key)));
    }
  }, {
    key: "defaults",
    get: function get()
    /* istanbul ignore next */
    {
      return _configDefaults.default;
    }
  }], [{
    key: "Defaults",
    get: function get()
    /* istanbul ignore next */
    {
      return _configDefaults.default;
    }
  }]);

  return BvConfig;
}(); // Method for applying a global config


var setConfig = function setConfig() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var Vue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _vue.default;
  // Ensure we have a $bvConfig Object on the Vue prototype.
  // We set on Vue and OurVue just in case consumer has not set an alias of `vue`.
  Vue.prototype[PROP_NAME] = _vue.default.prototype[PROP_NAME] = Vue.prototype[PROP_NAME] || _vue.default.prototype[PROP_NAME] || new BvConfig(); // Apply the config values

  Vue.prototype[PROP_NAME].setConfig(config);
}; // Method for resetting the user config. Exported for testing purposes only.


exports.setConfig = setConfig;

var resetConfig = function resetConfig() {
  if (_vue.default.prototype[PROP_NAME] && _vue.default.prototype[PROP_NAME].resetConfig) {
    _vue.default.prototype[PROP_NAME].resetConfig();
  }
};

exports.resetConfig = resetConfig;