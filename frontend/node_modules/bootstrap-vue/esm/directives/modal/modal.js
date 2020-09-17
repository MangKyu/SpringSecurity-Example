import { setAttr, removeAttr } from '../../utils/dom';
import { bindTargets, unbindTargets } from '../../utils/target'; // Target listen types

var listenTypes = {
  click: true // Emitted show event for modal

};
var EVENT_SHOW = 'bv::show::modal';

var setRole = function setRole(el, binding, vnode) {
  if (el.tagName !== 'BUTTON') {
    setAttr(el, 'role', 'button');
  }
};
/*
 * Export our directive
 */


export var VBModal = {
  // eslint-disable-next-line no-shadow-restricted-names
  bind: function bind(el, binding, vnode) {
    bindTargets(vnode, binding, listenTypes, function (_ref) {
      var targets = _ref.targets,
          vnode = _ref.vnode;
      targets.forEach(function (target) {
        vnode.context.$root.$emit(EVENT_SHOW, target, vnode.elm);
      });
    }); // If element is not a button, we add `role="button"` for accessibility

    setRole(el, binding, vnode);
  },
  updated: setRole,
  componentUpdated: setRole,
  unbind: function unbind(el, binding, vnode) {
    unbindTargets(vnode, binding, listenTypes); // If element is not a button, we add `role="button"` for accessibility

    if (el.tagName !== 'BUTTON') {
      removeAttr(el, 'role', 'button');
    }
  }
};
export default VBModal;