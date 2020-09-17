import { BPopover } from './popover';
import { VBPopover } from '../../directives/popover/popover';
import { pluginFactory } from '../../utils/plugins';
var PopoverPlugin =
/*#__PURE__*/
pluginFactory({
  components: {
    BPopover: BPopover
  },
  directives: {
    VBPopover: VBPopover
  }
});
export { PopoverPlugin, BPopover };
export default PopoverPlugin;