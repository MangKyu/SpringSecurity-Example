import { isFunction } from './inspect'; // Note for functional components:
// In functional components, `slots` is a function so it must be called
// first before passing to the below methods. `scopedSlots` is always an
// object and may be undefined (for Vue < 2.6.x)

/**
 * Returns true if either scoped or unscoped named slot eists
 *
 * @param {String} name
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} vNodes
 */

var hasNormalizedSlot = function hasNormalizedSlot(name) {
  var $scopedSlots = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $slots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // Returns true if the either a $scopedSlot or $slot exists with the specified name
  return Boolean($scopedSlots[name] || $slots[name]);
};
/**
 * Returns vNodes for named slot either scoped or unscoped
 *
 * @param {String} name
 * @param {String} scope
 * @param {Object} scopedSlots
 * @param {Object} slots
 * @returns {Array|undefined} vNodes
 */


var normalizeSlot = function normalizeSlot(name) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var $scopedSlots = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var $slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Note: in Vue 2.6.x, all names slots are also scoped slots
  var slot = $scopedSlots[name] || $slots[name];
  return isFunction(slot) ? slot(scope) : slot;
}; // Named exports


export { hasNormalizedSlot, normalizeSlot }; // Default export (backwards compatability)

export default normalizeSlot;